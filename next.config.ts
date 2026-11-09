import type { NextConfig } from 'next';

// Keep in sync with mergedSlugs in src/lib/journal-data.ts
const mergedSlugs: Record<string, string> = {
  'free-gentle-first-reminder-email-template-for-an-overdue-invoice': 'first-payment-reminder-email-a-simple-uk-example',
  'a-friendly-invoice-reminder-after-a-week-what-to-say': 'first-payment-reminder-email-a-simple-uk-example',
  'unpaid-invoice-after-three-reminders-what-happens-next': 'when-to-stop-sending-invoice-reminders-and-choose-a-next-step',
  'photographer-has-not-received-the-booking-deposit-a-practical-check': 'photographer-chasing-a-late-balance-or-cancellation-fee',
  'how-to-ask-for-payment-without-sounding-rude': 'how-to-write-a-firm-but-polite-overdue-payment-email',
  'how-to-write-a-payment-demand-letter-without-a-solicitor': 'final-demand-for-payment-letter-uk-what-to-include',
  'self-employed-and-not-been-paid-for-work-what-next': 'freelance-client-won-t-pay-a-practical-uk-guide',
};

const config: NextConfig = {
  output: 'standalone',
  outputFileTracingRoot: process.cwd(),
  outputFileTracingIncludes: { '/*': ['./assets/**/*'] },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'no-referrer' },
          { key: 'X-Frame-Options', value: 'DENY' },
        ],
      },
    ];
  },
  async redirects() {
    return Object.entries(mergedSlugs).map(([from, to]) => ({
      source: `/journal/${from}`,
      destination: `/journal/${to}`,
      permanent: true,
    }));
  },
};

export default config;
