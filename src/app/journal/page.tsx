import Link from 'next/link';
import type { Metadata } from 'next';
import { articles } from '../../lib/journal-data';

const description =
  'Practical UK guides to chasing unpaid invoices: reminder wording, statutory interest and compensation, disputes, and what to do at 30, 60 and 90 days.';

export const metadata: Metadata = {
  alternates: { canonical: '/journal' },
  title: 'Good Chaser Journal | UK Late Payment Guides',
  description,
  openGraph: {
    type: 'website',
    url: 'https://goodchaser.noorintelligence.tech/journal',
    siteName: 'Good Chaser',
    title: 'Good Chaser Journal — UK late payment guides',
    description,
    locale: 'en_GB',
  },
  twitter: { card: 'summary', title: 'Good Chaser Journal — UK late payment guides', description },
};

const id = (cat: string) => cat.replace(/[^a-z0-9]/gi, '-');

export default function Journal() {
  const cats = Array.from(new Set(articles.map((a) => a.category)));
  return (
    <main className="section journal">
      <div className="eyebrow">Good Chaser Journal</div>
      <h1>Clear words.<br />Practical next steps.</h1>
      <p className="lead">Practical advice on unpaid invoices, difficult payment conversations and getting paid for work you’ve already done. Written for UK freelancers, sole traders and small businesses.</p>
      <p><a href="/rss.xml">Follow via RSS</a></p>
      <h2>Start here</h2>
      <ul>
        <li><Link href="/journal/first-payment-reminder-email-a-simple-uk-example">Your first payment reminder email</Link></li>
        <li><Link href="/journal/can-you-charge-interest-on-an-overdue-invoice-in-the-uk">Charging interest on an overdue invoice (with a worked example)</Link></li>
        <li><Link href="/journal/uk-late-payment-compensation-40-70-and-100-explained">The £40, £70 and £100 late payment compensation</Link></li>
        <li><Link href="/journal/final-demand-for-payment-letter-uk-what-to-include">Writing a final demand letter</Link></li>
      </ul>
      <h2>Browse by situation</h2>
      <div className="pricing">
        {cats.map((cat) => (
          <article className="card" key={cat}>
            <h3>{cat}</h3>
            <p>{articles.filter((a) => a.category === cat).length} detailed guides</p>
            <a href={'#' + id(cat)}>Browse this topic</a>
          </article>
        ))}
      </div>
      {cats.map((cat) => (
        <section id={id(cat)} key={cat}>
          <h2>{cat}</h2>
          <div className="pricing">
            {articles.filter((a) => a.category === cat).map((a) => (
              <article className="card" key={a.slug}>
                <div className="eyebrow">{a.category}</div>
                <h3>{a.title}</h3>
                <p>{a.points[0]}</p>
                <Link href={'/journal/' + a.slug}>Read full guide →</Link>
              </article>
            ))}
          </div>
        </section>
      ))}
      <section className="card">
        <h2>Need the wording tailored to your invoice?</h2>
        <p>One-time letter packs from £9. Review and send the documents yourself.</p>
        <Link className="btn" href="/intake?tier=basic">Create my letter — £9</Link>
      </section>
    </main>
  );
}
