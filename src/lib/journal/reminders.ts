import type { ArticleInput } from './types';

const C = 'Payment Reminders';

export const reminders: ArticleInput[] = [
  {
    slug: 'what-to-say-when-a-client-hasn-t-paid-an-invoice-uk',
    title: "What to Say When a Client Hasn't Paid an Invoice (UK)",
    category: C,
    description:
      "Exact wording for the first conversation about an unpaid invoice: what to check first, what to say by email or phone, and what not to say.",
    points: [
      'Confirm the due date, amount and agreed payment terms before contacting the customer.',
      'Most late invoices are lost, stuck in approval or waiting on a missing detail, so open by making it easy to pay.',
      'Ask one specific question: “When will this be paid?” A vague “any update?” gets a vague answer.',
      'Keep every message short enough to forward to the person who actually pays the bills.',
    ],
    intro:
      'The first time you raise an unpaid invoice sets the tone for everything after it. The goal is not to sound tough. It is to make paying the easiest thing the client can do today.',
    blocks: [
      { h2: 'Check three things before you say anything' },
      {
        ol: [
          '**Is it actually overdue?** Find the payment terms you agreed: on the quote, contract, booking form or in an email. “30 days” usually means 30 days from the invoice date unless you agreed otherwise. If you never agreed terms with a business customer, the law implies 30 days from when they received the invoice or the work, whichever is later.',
          '**Did it reach the right person?** Invoices sent to a project contact often never reach accounts. Check the email address and that the PDF opened.',
          '**Is it correct?** Wrong totals, missing PO numbers or the wrong company name are the most common reasons an accounts team quietly parks an invoice.',
        ],
      },
      { h2: 'What to say: the three sentences that matter' },
      {
        p: 'Every good first chaser contains three things, and very little else: the facts (invoice number, amount, due date), an easy exit (“in case it went astray”), and a specific question (“when should I expect payment?”).',
      },
      {
        email: {
          label: 'First message — email',
          subject: 'Invoice 1042 — £850 due 3 November',
          body:
            'Hi Sam,\n\nI hope the launch went well. A quick note that invoice 1042 for £850 was due on 3 November and I haven’t seen payment come through yet. I’ve attached it again in case it went astray.\n\nCould you let me know when it’s scheduled to be paid? If it needs to go to someone in accounts, I’m happy to send it there directly.\n\nThanks,\nJo',
        },
      },
      { h2: 'If you would rather call' },
      {
        p: 'A call is often quicker with small businesses, where the person you worked with also signs off payments. Keep it to the same three points, then confirm in writing straight away: “Thanks for the chat — just confirming you’ll pay invoice 1042 (£850) by Friday 14 November.” That one line turns a passing promise into a record. Our [guide to chasing by phone](/journal/how-to-chase-an-unpaid-invoice-by-phone) has a full call script.',
      },
      { h2: 'What not to say' },
      {
        table: {
          head: ['Avoid', 'Why', 'Say instead'],
          rows: [
            ['“Just checking in…”', 'Sounds optional and invites no reply.', '“Invoice 1042 was due on 3 November.”'],
            ['“As per my last email”', 'Reads as irritation, even when it isn’t.', '“Following my note of 5 November…”'],
            ['“Sorry to bother you”', 'Frames your payment as a favour.', 'Nothing — simply state the facts.'],
            ['Threats of court in message one', 'Damages the relationship and is rarely needed yet.', 'Save escalation for the third or fourth contact.'],
          ],
        },
      },
      { h2: 'If they reply with a problem' },
      {
        p: 'If the client says there is something wrong with the work, ask them to put the specific issue in writing and pay any part that is not disputed. A complaint about one deliverable does not usually justify holding back the whole invoice. See [how to reply to a disputed invoice](/journal/how-to-reply-when-a-customer-disputes-an-invoice-template).',
      },
      { h2: 'What comes next' },
      {
        p: 'If a week passes with no reply, send the [second reminder](/journal/second-payment-reminder-email-what-to-write-when-the-first-is-ignored), which refers back to this message and asks for a date. Most invoices are paid at this stage or the next.',
      },
    ],
    related: [
      'first-payment-reminder-email-a-simple-uk-example',
      'second-payment-reminder-email-what-to-write-when-the-first-is-ignored',
      'how-to-chase-an-unpaid-invoice-by-phone',
      'client-ignoring-invoice-emails-here-s-your-next-step',
    ],
  },
  {
    slug: 'second-payment-reminder-email-what-to-write-when-the-first-is-ignored',
    title: 'Second Payment Reminder Email: What to Write When the First Is Ignored',
    category: C,
    description:
      'How to write a second invoice reminder that gets a reply: timing, a tighter subject line, a deadline, and a template you can copy.',
    points: [
      'Refer to the first reminder and the date it was sent, so the follow-up builds a clear record.',
      'Send it 7 days after the first reminder, and change the subject line so it is not lost in the same thread.',
      'Ask for payment, or a reason it can’t be made, by a named date.',
      'Copy in a second contact (accounts or the business owner) if the first person has gone quiet.',
    ],
    intro:
      'A second reminder is where most late invoices get paid. It should be noticeably firmer than the first — not ruder, just more specific.',
    blocks: [
      { h2: 'When to send it' },
      {
        p: 'Seven days after your first reminder is a sensible default. Sooner can feel like pestering; much later tells the client that your payment terms are flexible. If your first reminder went out on a Friday, send the second on the following Friday morning, when accounts teams are often doing their payment runs.',
      },
      { h2: 'What changes from the first reminder' },
      {
        table: {
          head: ['', 'First reminder', 'Second reminder'],
          rows: [
            ['Tone', 'Assumes an oversight', 'Neutral and businesslike'],
            ['Question', '“When is it scheduled?”', '“Please pay by [date] or tell me what’s holding it up.”'],
            ['Subject line', 'Invoice number and amount', 'Adds “second reminder” and the days overdue'],
            ['Recipients', 'Your usual contact', 'Your contact plus accounts, if you have the address'],
            ['Attachments', 'Invoice', 'Invoice and, if useful, a one-line statement of account'],
          ],
        },
      },
      {
        email: {
          label: 'Second reminder — email',
          subject: 'Second reminder: invoice 1042 — £850, now 14 days overdue',
          body:
            'Hi Sam,\n\nI wrote on 10 November about invoice 1042 for £850, which was due on 3 November. I haven’t had a reply or seen payment, so I’m following up.\n\nPlease could you arrange payment by Friday 21 November? If something is preventing that — a query about the work, a missing PO number, or the invoice needing to go somewhere else — just let me know and I’ll sort it out quickly.\n\nI’ve copied in accounts@example.co.uk so they have the invoice too.\n\nBank details: Jo Smith, sort code 00-00-00, account 00000000, reference 1042.\n\nThanks,\nJo',
        },
      },
      { h2: 'Why the deadline matters' },
      {
        p: 'A named date gives the client something to diarise and gives you a clear point to move on from. Seven days is reasonable. If they miss it, your next message can say so plainly, and you are in a far stronger position than after three open-ended “any update?” emails.',
      },
      { h2: 'Should you mention interest yet?' },
      {
        p: 'If your customer is a business, you can claim statutory interest and fixed compensation on late payment whether or not you mentioned it on the invoice. Most people keep that for the third message, but a light reference is fine if this client has paid late before: “I’d rather not have to add late payment interest, so I’d be grateful if this could be settled by Friday.” See [whether you can charge interest](/journal/can-you-charge-interest-on-an-overdue-invoice-in-the-uk).',
      },
      { h2: 'If the second reminder is ignored too' },
      {
        p: 'Silence after two written reminders usually means the email is not reaching a decision-maker, or the client is short of cash. Pick up the phone, try a different contact, then send the [third reminder](/journal/third-payment-reminder-email-what-to-say-after-two-follow-ups), which sets out exactly what you will do next.',
      },
    ],
    related: [
      'first-payment-reminder-email-a-simple-uk-example',
      'third-payment-reminder-email-what-to-say-after-two-follow-ups',
      'client-ignoring-invoice-emails-here-s-your-next-step',
      'how-to-ask-a-customer-for-a-definite-payment-date',
    ],
  },
  {
    slug: 'how-to-chase-an-overdue-invoice-without-losing-the-customer',
    title: 'How to Chase an Overdue Invoice Without Losing the Customer',
    category: C,
    description:
      'Chase late payment and keep a good client: separate the relationship from the debt, offer practical options, and know when the relationship is already over.',
    points: [
      'Separate the customer’s value as a future client from the need to settle the debt already owed.',
      'Clients rarely leave because you asked to be paid; they leave over surprises, so be predictable.',
      'Offer practical routes (instalments, a call with accounts) before you offer discounts.',
      'A client who only pays after repeated chasing is costing you more than you think.',
    ],
    intro:
      'The fear of losing a client stops a lot of freelancers and small businesses from chasing properly. In practice, good clients respect suppliers who run a tidy process. What damages relationships is awkwardness, inconsistency and late-stage anger.',
    blocks: [
      { h2: 'Treat the invoice as admin, not a confrontation' },
      {
        p: 'Speak about the invoice the way you would about a delivery date: factual, calm and expected. When chasing is a routine part of how you work, the client stops reading it as a judgement on them.',
      },
      {
        ul: [
          'Send reminders on a predictable schedule — for example, on the due date, 7 days later and 14 days later.',
          'Use the same tone with every client, so nobody feels singled out.',
          'Keep project conversations and payment conversations in separate emails. A payment question buried in a project update is easy to ignore.',
        ],
      },
      { h2: 'Talk to the right person' },
      {
        p: 'Your day-to-day contact may have no control over when invoices are paid. Asking them, “Who looks after supplier payments? I’ll send it straight to them,” takes the awkwardness off them and usually speeds things up. They stay your ally, and accounts gets a clear request.',
      },
      { h2: 'Offer options, not discounts' },
      {
        p: 'If a client you want to keep is genuinely stretched, a short instalment plan protects both the relationship and your cash flow. Put it in writing with fixed dates and amounts. Avoid discounting the invoice to “get it over with” — it teaches the client that paying late is cheaper.',
      },
      {
        email: {
          label: 'Keeping it friendly while asking for a date',
          subject: 'Invoice 2210 — can we agree a payment date?',
          body:
            'Hi Priya,\n\nReally enjoyed working on the spring campaign with you, and I’d love to help with the summer one.\n\nBefore we plan that, could we get invoice 2210 (£1,600, due 20 October) settled? If it would help to split it, I’m happy to take £800 now and £800 on 1 December — just confirm and I’ll note it on my side.\n\nBest,\nTom',
        },
      },
      { h2: 'Hold new work until the old invoice is paid' },
      {
        p: 'Starting a new project while an old invoice is outstanding increases what you are owed and reduces your leverage. A calm line works: “Happy to book that in as soon as invoice 2210 is cleared.” Good clients understand. If a client resents being asked to pay for work already delivered, the relationship was costing you more than it earned.',
      },
      { h2: 'When the relationship is already over' },
      {
        p: 'If a client stops replying entirely, disputes everything or makes repeated promises that come to nothing, the relationship has ended whether you chase or not. At that point, focus on recovering the money: see [when to stop sending reminders and choose a next step](/journal/when-to-stop-sending-invoice-reminders-and-choose-a-next-step).',
      },
      { h2: 'Prevent it next time' },
      {
        ul: [
          'Agree payment terms in writing before work starts, and repeat them on the invoice.',
          'Take a deposit on new or larger projects.',
          'Ask at the outset who handles invoices, and whether they need a PO number.',
          'Invoice promptly. An invoice sent three weeks after delivery is often paid three weeks later than it could have been.',
        ],
      },
    ],
    related: [
      'client-asked-for-more-time-to-pay-an-invoice-how-to-respond',
      'how-to-write-a-firm-but-polite-overdue-payment-email',
      'customer-missed-an-invoice-instalment-what-to-write',
      'freelance-client-has-not-paid-the-deposit-what-to-do',
    ],
  },
  {
    slug: 'how-to-write-a-firm-but-polite-overdue-payment-email',
    title: 'How to Write a Firm but Polite Overdue Payment Email',
    category: C,
    description:
      'How to ask for payment without sounding rude or desperate: the phrases that make an overdue email firm, the ones that undermine it, and a template.',
    points: [
      'Firmness comes from exact figures, a date and a clear next step, not from strong language.',
      'Asking for money you are owed is not rude; vague, apologetic wording is what makes it awkward.',
      'Cut the softeners (“just”, “sorry”, “if possible”) and keep the courtesies (“thanks”, “please”).',
      'Say what happens next, then do it, so the client learns your reminders mean something.',
    ],
    intro:
      'Many people worry that asking for payment will come across as rude. It won’t, provided the message is clear and professional. Being direct about money that is already owed is simply good business.',
    blocks: [
      { h2: 'What makes an email firm' },
      {
        ul: [
          '**Precision.** Invoice number, amount, original due date and how many days overdue it is.',
          '**A specific request.** “Please pay by Friday 28 November,” not “at your earliest convenience”.',
          '**A clear consequence.** What you will do if the date passes, stated calmly as a next step rather than a threat.',
          '**Brevity.** Five or six lines. Long explanations read as nervous.',
        ],
      },
      { h2: 'Swap these phrases' },
      {
        table: {
          head: ['Weak or rude', 'Firm and polite'],
          rows: [
            ['“Just wanted to check if you’d had a chance to look at…”', '“Invoice 318 for £1,240 was due on 31 October and remains unpaid.”'],
            ['“Sorry to chase again…”', '“I’m following up on my email of 7 November.”'],
            ['“Whenever you get a moment…”', '“Please arrange payment by Friday 21 November.”'],
            ['“This is totally unacceptable.”', '“If payment isn’t received by then, I’ll add statutory interest and compensation.”'],
            ['“I really need this money.”', 'Leave it out. Your personal finances are not the reason the invoice is due.'],
          ],
        },
      },
      {
        email: {
          label: 'Firm but polite — template',
          subject: 'Overdue: invoice 318 — £1,240, due 31 October',
          body:
            'Dear Mark,\n\nInvoice 318 for £1,240 was due on 31 October and is now 21 days overdue. I wrote about it on 7 and 14 November but haven’t received payment or a reply.\n\nPlease arrange payment by Friday 28 November. If there is a problem with the invoice, let me know by then so we can resolve it.\n\nIf payment isn’t received by 28 November, I’ll add statutory late payment interest and compensation, as I’m entitled to for business invoices, and consider my next steps to recover the debt.\n\nKind regards,\nAisha Khan',
        },
      },
      {
        note: 'Only mention statutory interest and compensation if your customer is a business. They do not apply to invoices for private individuals, unless your own terms provided for interest. See [can you charge interest on an overdue invoice?](/journal/can-you-charge-interest-on-an-overdue-invoice-in-the-uk)',
      },
      { h2: 'Tone checks before you send' },
      {
        ol: [
          'Read it as if your best client wrote it to you. Would it feel fair?',
          'Remove every “just” and every apology.',
          'Check that every figure and date matches the invoice exactly.',
          'Make sure the consequence is something you will actually do.',
        ],
      },
      { h2: 'Where this sits in the sequence' },
      {
        p: 'This is a third-stage email: after a friendly [first reminder](/journal/first-payment-reminder-email-a-simple-uk-example) and a [second reminder](/journal/second-payment-reminder-email-what-to-write-when-the-first-is-ignored) with a deadline. If it goes unanswered, the next step is a formal [final demand letter](/journal/final-demand-for-payment-letter-uk-what-to-include).',
      },
    ],
    related: [
      'third-payment-reminder-email-what-to-say-after-two-follow-ups',
      'final-demand-for-payment-letter-uk-what-to-include',
      'can-you-charge-interest-on-an-overdue-invoice-in-the-uk',
      'how-to-chase-an-overdue-invoice-without-losing-the-customer',
    ],
  },
];
