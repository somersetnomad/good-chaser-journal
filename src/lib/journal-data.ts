import type { Article, ArticleInput } from './journal/types';
import { reminders } from './journal/reminders';
import { rights } from './journal/rights';
import { templates } from './journal/templates';
import { chasing } from './journal/chasing';
import { overdue } from './journal/overdue';
import { freelancers } from './journal/freelancers';
import { industry } from './journal/industry';
import { trades } from './journal/trades';

export type { Article, Block } from './journal/types';

export const JOURNAL_UPDATED = '2026-11-09';
export const JOURNAL_PUBLISHED = '2026-10-31';

const all: ArticleInput[] = [
  ...reminders,
  ...rights,
  ...templates,
  ...chasing,
  ...overdue,
  ...freelancers,
  ...industry,
  ...trades,
];

export const articles: Article[] = all.map((a, index) => ({
  ...a,
  index,
  updated: a.updated ?? JOURNAL_UPDATED,
}));

/** Guides merged into a stronger guide. Old URL -> surviving slug (301). */
export const mergedSlugs: Record<string, string> = {
  'free-gentle-first-reminder-email-template-for-an-overdue-invoice': 'first-payment-reminder-email-a-simple-uk-example',
  'a-friendly-invoice-reminder-after-a-week-what-to-say': 'first-payment-reminder-email-a-simple-uk-example',
  'unpaid-invoice-after-three-reminders-what-happens-next': 'when-to-stop-sending-invoice-reminders-and-choose-a-next-step',
  'photographer-has-not-received-the-booking-deposit-a-practical-check': 'photographer-chasing-a-late-balance-or-cancellation-fee',
  'how-to-ask-for-payment-without-sounding-rude': 'how-to-write-a-firm-but-polite-overdue-payment-email',
  'how-to-write-a-payment-demand-letter-without-a-solicitor': 'final-demand-for-payment-letter-uk-what-to-include',
  'self-employed-and-not-been-paid-for-work-what-next': 'freelance-client-won-t-pay-a-practical-uk-guide',
};

export function findArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(a: Article): Article[] {
  const out: Article[] = [];
  for (const s of a.related) {
    const r = findArticle(s);
    if (r && r.slug !== a.slug && !out.includes(r)) out.push(r);
  }
  if (out.length < 3) {
    for (const r of articles) {
      if (out.length >= 3) break;
      if (r.category === a.category && r.slug !== a.slug && !out.includes(r)) out.push(r);
    }
  }
  return out.slice(0, 4);
}
