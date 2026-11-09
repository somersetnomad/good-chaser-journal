import type { ArticleInput } from './types';

const C = 'Overdue Invoices';

export const overdue: ArticleInput[] = [
  {
    slug: 'invoice-30-days-overdue-what-should-you-do',
    title: 'Invoice 30 Days Overdue: What Should You Do?',
    category: C,
    description:
      'An invoice 30 days overdue in the UK: check what you agreed, what you can add for business debts, and a step-by-step plan for the next two weeks.',
    points: [
      'At thirty days, reconstruct the agreed payment date rather than relying only on the invoice issue date.',
      'By now you should have sent at least two reminders; if not, start with a firm one today.',
      'For business customers, statutory interest has been running since the day after the due date.',
      'Pick up the phone: a month overdue is past the “lost in the post” stage.',
    ],
    intro:
      'Thirty days overdue is the point where late payment stops being an admin slip and starts being a pattern. It is also still early enough to fix without formal action, if you act now rather than waiting another month.',
    blocks: [
      { h2: 'First, check the dates' },
      {
        p: '“30 days overdue” means 30 days after the due date, not 30 days after the invoice date. An invoice dated 1 October on 30-day terms was due on 31 October and becomes 30 days overdue on 30 November. Getting this right matters: it is the figure you will quote in every message from now on, and the date interest runs from.',
      },
      {
        note: 'No payment terms agreed with a business customer? The law implies 30 days from when they received your invoice or the work, whichever is later.',
      },
      { h2: 'Where you should be by now' },
      {
        table: {
          head: ['Days overdue', 'Step'],
          rows: [
            ['0–1', 'Friendly reminder'],
            ['7', 'Second reminder with a payment date'],
            ['14–21', 'Phone call, then a firm email copied to accounts'],
            ['30', 'Final reminder stating interest, compensation and next steps'],
          ],
        },
      },
      {
        p: 'If you haven’t sent anything yet, don’t jump straight to threats. Send a firm, factual reminder today and call tomorrow. Courts and clients alike respond better to a clear, proportionate sequence.',
      },
      { h2: 'What you can add at 30 days' },
      {
        p: 'For a business customer, statutory interest has been accruing since the day after the due date. On a £1,500 invoice due in the second half of 2026, at 11.75%, that is about £0.48 a day — around £14.49 after 30 days — plus fixed compensation of £70. The money is modest; the signal is not. See [charging interest on an overdue invoice](/journal/can-you-charge-interest-on-an-overdue-invoice-in-the-uk).',
      },
      {
        email: {
          label: '30 days overdue — business customer',
          subject: 'Invoice 0634 — £1,500, now 30 days overdue',
          body:
            'Dear Tom,\n\nInvoice 0634 for £1,500 was due on 31 October and is now 30 days overdue. I’ve sent reminders on 1 and 10 November and left a voicemail on 20 November.\n\nPlease pay by Friday 5 December. From that date I will add statutory interest at 11.75% a year and fixed compensation of £70, as allowed under the Late Payment of Commercial Debts (Interest) Act 1998.\n\nIf there is a problem with the invoice or with paying it in one go, please call me this week so we can sort it out.\n\nKind regards,\nAlicia',
        },
      },
      { h2: 'Your plan for the next two weeks' },
      {
        ol: [
          'Today: send the message above.',
          'Tomorrow: phone your contact, and the accounts team if you can find them.',
          'Day 7: if nothing, send a [final demand](/journal/final-demand-for-payment-letter-uk-what-to-include) by email and post.',
          'Pause any new work for this client until the invoice is paid.',
        ],
      },
      { h2: 'Protect your cash flow meanwhile' },
      {
        p: 'If a single overdue invoice is causing you real cash-flow pain, it is a sign to change your terms for future work: deposits, stage payments, or shorter terms for new clients. See [freelance client hasn’t paid the deposit](/journal/freelance-client-has-not-paid-the-deposit-what-to-do) for how to make deposits stick.',
      },
    ],
    related: [
      'invoice-60-days-overdue-how-to-escalate-payment-requests',
      'third-payment-reminder-email-what-to-say-after-two-follow-ups',
      'can-you-charge-interest-on-an-overdue-invoice-in-the-uk',
      'how-to-chase-an-unpaid-invoice-by-phone',
    ],
  },
  {
    slug: 'invoice-60-days-overdue-how-to-escalate-payment-requests',
    title: 'Invoice 60 Days Overdue: How to Escalate Payment Requests',
    category: C,
    description:
      'Two months unpaid: reconcile the account, escalate to a decision-maker, add interest and compensation, and send a formal demand. A UK plan for 60-day-old invoices.',
    points: [
      'At sixty days, reconcile the account and record any part payments before you escalate.',
      'Escalate the person as well as the tone: write to a director or the owner.',
      'Send a formal demand with interest and compensation calculated to the day.',
      'Stop supplying on credit until the account is cleared.',
    ],
    intro:
      'Sixty days late is no longer a timing issue. The customer has had time to pay and chosen, for whatever reason, not to. This is the point to move from reminders to a formal process — calmly and in order.',
    blocks: [
      { h2: 'Reconcile before you escalate' },
      {
        p: 'Before writing anything formal, check the account line by line. Have any part payments come in? Did you issue a credit note? Are there other invoices for the same client, some paid and some not? A demand with a wrong figure in it gives the customer an easy reason to delay.',
      },
      {
        table: {
          caption: 'Example statement of account',
          head: ['Invoice', 'Date', 'Due', 'Amount', 'Paid', 'Balance'],
          rows: [
            ['0612', '1 Sep', '1 Oct', '£2,000', '£2,000', '£0'],
            ['0634', '15 Sep', '15 Oct', '£1,500', '£500 (3 Nov)', '£1,000'],
            ['0651', '1 Oct', '31 Oct', '£800', '£0', '£800'],
            ['Total outstanding', '', '', '', '', '£1,800'],
          ],
        },
      },
      { h2: 'Escalate to a decision-maker' },
      {
        p: 'If you have only been dealing with a project contact, now write to a director or the owner. For a limited company, director names are listed on Companies House. Keep the message short, factual and free of complaints about your contact.',
      },
      {
        email: {
          label: '60 days overdue — formal demand',
          subject: 'Formal demand — outstanding balance £1,800',
          body:
            'Dear Mr Hughes,\n\nI am writing to you as a director of Hughes Interiors Ltd about an outstanding balance of £1,800 on your account, made up of:\n\nInvoice 0634 (due 15 October): £1,000 remaining after a part payment on 3 November\nInvoice 0651 (due 31 October): £800\n\nI have sent reminders on six occasions since October and spoken to Ms Lane on 12 November, when payment was promised by 21 November. It has not been received.\n\nUnder the Late Payment of Commercial Debts (Interest) Act 1998 I am adding fixed compensation of £70 for invoice 0634 and £40 for invoice 0651, and statutory interest at 11.75% a year, as set out in the attached calculation.\n\nPlease pay the total shown by 1 December. If payment isn’t received by then, I will start County Court proceedings without further notice.\n\nYours sincerely,\nDaniel Price',
        },
      },
      { h2: 'Stop the bleeding' },
      {
        ul: [
          'Pause new work and deliveries until the account is cleared.',
          'If you supply goods, check whether your terms include a retention of title clause, which may let you reclaim unpaid goods that haven’t been used or sold.',
          'Don’t accept new orders on credit from this customer again; ask for payment upfront.',
        ],
      },
      { h2: 'If the customer replies with a plan' },
      {
        p: 'An offer to pay over time at 60 days can still be worth taking, but make it short, written, and backed by a clause that the full balance falls due if any instalment is missed. See [client asked for more time to pay](/journal/client-asked-for-more-time-to-pay-an-invoice-how-to-respond).',
      },
      {
        p: 'If the deadline passes without payment, move on to [the 90-day stage](/journal/invoice-90-days-overdue-organise-the-facts-before-escalating), or start your claim straight away if you already have everything you need.',
      },
    ],
    related: [
      'invoice-30-days-overdue-what-should-you-do',
      'invoice-90-days-overdue-organise-the-facts-before-escalating',
      'uk-late-payment-compensation-40-70-and-100-explained',
      'final-demand-for-payment-letter-uk-what-to-include',
    ],
  },
  {
    slug: 'invoice-90-days-overdue-organise-the-facts-before-escalating',
    title: 'Invoice 90 Days Overdue: Organise the Facts Before Escalating',
    category: C,
    description:
      'Three months unpaid: build your case file, check the debtor can pay, calculate the full claim and decide between a court claim, an agency or writing it off.',
    points: [
      'At three months, reconcile every payment and possible credit before deciding anything.',
      'Check the debtor is still solvent and trading before spending money on a claim.',
      'Calculate the full claim: principal, statutory interest to date and compensation.',
      'Recovery rates fall sharply the longer an invoice stays unpaid, so make a decision now.',
    ],
    intro:
      'Ninety days overdue is the point where many small businesses quietly give up. It doesn’t need to be. With a tidy case file, a clear calculation and a quick check on the debtor, you can decide in an afternoon whether to claim, hand it over, or let it go.',
    blocks: [
      { h2: 'Step 1: build the case file' },
      {
        ul: [
          'The agreement: quote, acceptance, contract or messages.',
          'Proof of delivery or completion.',
          'The invoice(s), plus a statement of account showing payments and credits.',
          'A dated chronology of every reminder, call and promise.',
          'Any complaint the customer has raised, and your reply.',
        ],
      },
      {
        p: 'Our guide to [evidence for an unpaid invoice](/journal/what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk) has a chronology template.',
      },
      { h2: 'Step 2: check the debtor can pay' },
      {
        table: {
          head: ['Check', 'Where', 'What it tells you'],
          rows: [
            ['Company status', 'Companies House (free)', 'Active, in liquidation, administration or being struck off'],
            ['Filed accounts', 'Companies House', 'Whether the company has any assets'],
            ['Insolvency notices', 'The Gazette (free)', 'Winding-up petitions or bankruptcy'],
            ['Still trading?', 'Website, social media, reviews', 'Whether there is money coming in'],
          ],
        },
      },
      {
        note: 'If the company is in liquidation or administration, don’t start a court claim. Send a proof of debt to the insolvency practitioner instead. If the company has been struck off, you may be able to object or apply to restore it; take advice.',
      },
      { h2: 'Step 3: calculate the full claim' },
      {
        table: {
          caption: 'Example: £3,200 business invoice due 10 August 2026, calculated 8 November 2026 (90 days)',
          head: ['Item', 'Amount'],
          rows: [
            ['Principal', '£3,200.00'],
            ['Statutory interest: £3,200 × 11.75% × 90 ÷ 365', '£92.71'],
            ['Fixed compensation (£1,000–£9,999.99)', '£70.00'],
            ['Total claim', '£3,362.71'],
            ['Daily interest from here', '£1.03 a day'],
          ],
        },
      },
      { h2: 'Step 4: decide' },
      {
        table: {
          head: ['If…', 'Then…'],
          rows: [
            ['Clear evidence, solvent debtor, under £10,000', 'Final demand, then a small claims court claim'],
            ['Clear evidence, larger sum', 'Solicitor letter; consider a fast-track claim with advice'],
            ['Several debts, little time', 'A debt collection agency on a no-collection, no-fee basis'],
            ['Debtor insolvent', 'Submit a proof of debt; claim bad debt relief'],
            ['Weak evidence or a tiny sum', 'Write it off and tighten your terms'],
          ],
        },
      },
      {
        email: {
          label: 'Letter before action at 90 days',
          subject: 'Letter before action — £3,362.71 owed by Northfield Events Ltd',
          body:
            'Dear Ms Grant,\n\nLETTER BEFORE ACTION\n\nNorthfield Events Ltd owes me £3,200 for event photography on 26 July 2026 (invoice 0719, due 10 August 2026). Despite reminders on 11 and 25 August, 15 September and 20 October, it remains unpaid.\n\nWith statutory interest of £92.71 to 8 November and fixed compensation of £70, the total due is £3,362.71. Interest continues at £1.03 a day.\n\nIf I do not receive full payment within 14 days of this letter, I will issue a claim in the County Court without further notice.\n\nYours sincerely,\nOwen Hart',
        },
      },
    ],
    related: [
      'invoice-60-days-overdue-how-to-escalate-payment-requests',
      'when-to-stop-sending-invoice-reminders-and-choose-a-next-step',
      'final-payment-reminder-before-legal-action-uk-wording',
      'what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk',
    ],
  },
];
