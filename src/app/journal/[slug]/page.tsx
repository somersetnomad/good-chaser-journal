import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { articles, findArticle, relatedArticles, JOURNAL_PUBLISHED, type Block } from '../../../lib/journal-data';
import '../journal.css';

const ROOT = 'https://goodchaser.noorintelligence.tech';

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = findArticle(slug);
  if (!a) return { title: 'Guide not found' };
  const url = `${ROOT}/journal/${a.slug}`;
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/journal/${a.slug}` },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Good Chaser',
      title: a.title,
      description: a.description,
      publishedTime: JOURNAL_PUBLISHED,
      modifiedTime: a.updated,
      section: a.category,
      locale: 'en_GB',
    },
    twitter: { card: 'summary', title: a.title, description: a.description },
  };
}

/** Minimal inline formatting: **bold** and [text](href). */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={k++}>{m[1]}</strong>);
    else {
      const href = m[3];
      out.push(
        href.startsWith('/') ? (
          <Link key={k++} href={href}>{m[2]}</Link>
        ) : (
          <a key={k++} href={href} rel="noopener" target="_blank">{m[2]}</a>
        ),
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function anchor(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function renderBlock(b: Block, i: number): ReactNode {
  if ('h2' in b) return <h2 key={i} id={anchor(b.h2)}>{b.h2}</h2>;
  if ('h3' in b) return <h3 key={i}>{b.h3}</h3>;
  if ('p' in b) return <p key={i}>{inline(b.p)}</p>;
  if ('ul' in b) return <ul key={i}>{b.ul.map((x, j) => <li key={j}>{inline(x)}</li>)}</ul>;
  if ('ol' in b) return <ol key={i}>{b.ol.map((x, j) => <li key={j}>{inline(x)}</li>)}</ol>;
  if ('note' in b) return <aside key={i} className="gc-note">{inline(b.note)}</aside>;
  if ('table' in b)
    return (
      <div key={i} className="gc-table">
        <table>
          {b.table.caption ? <caption>{b.table.caption}</caption> : null}
          <thead><tr>{b.table.head.map((h, j) => <th key={j} scope="col">{h}</th>)}</tr></thead>
          <tbody>{b.table.rows.map((r, j) => <tr key={j}>{r.map((c, n) => <td key={n}>{inline(c)}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
  if ('email' in b)
    return (
      <figure key={i} className="gc-email">
        <figcaption>{b.email.label}</figcaption>
        <p className="gc-email-subject"><strong>Subject:</strong> {b.email.subject}</p>
        <div className="gc-email-body">{b.email.body.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}</div>
      </figure>
    );
  return null;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = findArticle(slug);
  if (!a) notFound();
  const related = relatedArticles(a);
  const contents = a.blocks.filter((b): b is { h2: string } => 'h2' in b).map((b) => b.h2);
  const updated = new Date(a.updated + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: a.title,
      description: a.description,
      datePublished: JOURNAL_PUBLISHED,
      dateModified: a.updated,
      articleSection: a.category,
      inLanguage: 'en-GB',
      mainEntityOfPage: `${ROOT}/journal/${a.slug}`,
      author: { '@type': 'Organization', name: 'Good Chaser', url: ROOT },
      publisher: { '@type': 'Organization', name: 'Noor Intelligence', url: 'https://noorintelligence.tech' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Good Chaser', item: ROOT },
        { '@type': 'ListItem', position: 2, name: 'Journal', item: `${ROOT}/journal` },
        { '@type': 'ListItem', position: 3, name: a.title, item: `${ROOT}/journal/${a.slug}` },
      ],
    },
  ];

  return (
    <main className="section article gc-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="gc-crumbs" aria-label="Breadcrumb">
        <Link href="/journal">Journal</Link> <span aria-hidden="true">/</span> <span>{a.category}</span>
      </nav>
      <h1>{a.title}</h1>
      <p className="gc-meta">Updated {updated} · UK guide · General information, not legal advice</p>
      <p className="lead">{inline(a.intro)}</p>

      <section className="gc-summary" aria-label="Key points">
        <h2>The short version</h2>
        <ul>{a.points.map((p, i) => <li key={i}>{inline(p)}</li>)}</ul>
      </section>

      {contents.length > 3 ? (
        <nav className="gc-toc" aria-label="In this guide">
          <p>In this guide</p>
          <ol>{contents.map((h) => <li key={h}><a href={'#' + anchor(h)}>{h}</a></li>)}</ol>
        </nav>
      ) : null}

      <div className="gc-body">{a.blocks.map(renderBlock)}</div>

      {related.length ? (
        <section className="gc-related" aria-labelledby="related-guides">
          <h2 id="related-guides">Related guides</h2>
          <ul>
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={'/journal/' + r.slug}>{r.title}</Link>
                <span>{r.points[0]}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="card gc-cta">
        <h2>Want the wording written around your invoice?</h2>
        <p>Good Chaser turns your invoice details into a personalised reminder sequence, from friendly to final, with the right figures and dates filled in. You review and send everything yourself. One-time packs from £9.</p>
        <Link className="btn" href="/intake?tier=basic">Create my letter pack — £9</Link>
        <p className="gc-small">Good Chaser does not collect debts, give legal advice or represent you. For large, disputed or complex debts, take advice from a solicitor or Citizens Advice.</p>
      </section>

      <p><Link href="/journal">← All Good Chaser guides</Link></p>
    </main>
  );
}
