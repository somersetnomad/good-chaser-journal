import type { ArticleInput } from './types';

const C = 'Templates & Payment Scenarios';

export const templates: ArticleInput[] = [
  {
    slug: 'overdue-invoice-letter-template-for-uk-small-businesses',
    title: 'Overdue Invoice Letter Template for UK Small Businesses',
    category: C,
    description:
      'A complete overdue invoice letter set for UK small businesses — friendly, firm and final — with what to change for business versus private customers.',
    points: [
      'Use a three-stage set (friendly, firm, final) rather than one letter you send repeatedly.',
      'Check the original invoice, agreement and the customer’s legal name before choosing a template.',
      'Business customers can be charged statutory interest and compensation; private customers cannot, unless your terms said so.',
      'Fill in every bracket. A template with a leftover [NAME] does more damage than no letter.',
    ],
    intro:
      'A good overdue invoice letter is short, specific and matched to the stage you are at. Below is a set of three that work for most UK small businesses, with notes on what to adapt.',
    blocks: [
      { h2: 'Before you use any template' },
      {
        ul: [
          'Confirm the invoice is overdue under the terms you agreed.',
          'Check the customer’s legal name: the limited company, not the brand name or your contact.',
          'Decide whether the customer is a business or a private individual — this changes what you can claim.',
          'Check for part payments, credit notes or open queries, so your figure is right.',
        ],
      },
      { h2: 'Letter 1: friendly reminder (due date to 7 days late)' },
      {
        email: {
          label: 'Stage 1 — friendly',
          subject: 'Invoice [number] — [amount] due [date]',
          body:
            'Dear [name],\n\nA quick reminder that invoice [number] for [amount], dated [invoice date], was due for payment on [due date]. I’ve attached a copy in case it hasn’t reached the right person.\n\nCould you let me know when payment is scheduled? Our bank details are on the invoice, with reference [number].\n\nThank you,\n[your name]\n[business name]',
        },
      },
      { h2: 'Letter 2: firm reminder (14–21 days late)' },
      {
        email: {
          label: 'Stage 2 — firm',
          subject: 'Overdue: invoice [number] — [amount], [X] days late',
          body:
            'Dear [name],\n\nInvoice [number] for [amount] was due on [due date] and is now [X] days overdue. I wrote about it on [date of letter 1] but haven’t received payment or a reply.\n\nPlease arrange payment by [date, 7 days from now]. If there is a problem with the invoice, please tell me by then so we can sort it out.\n\n[Business customers only:] Please note that, as this is a business debt, statutory interest and fixed compensation apply to late payment under the Late Payment of Commercial Debts (Interest) Act 1998.\n\nKind regards,\n[your name]',
        },
      },
      { h2: 'Letter 3: final notice (30+ days late)' },
      {
        email: {
          label: 'Stage 3 — final',
          subject: 'Final notice: invoice [number]',
          body:
            'Dear [name],\n\nFINAL NOTICE — INVOICE [NUMBER]\n\nDespite my reminders of [date] and [date], invoice [number] for [amount], due on [due date], remains unpaid.\n\n[Business customers:] The amount now due is [amount] plus fixed compensation of [£40/£70/£100] and statutory interest of [£X] to today, a total of [total]. Interest continues at [£X] a day.\n\nPlease pay [total] by [date, 7–14 days from now]. If I don’t receive payment by then, I will begin the formal process to recover the debt through the County Court.\n\nYours sincerely,\n[your name]',
        },
      },
      {
        note: 'If your customer is an individual or a sole trader and you are heading for court in England and Wales, the next step after Letter 3 must be a letter of claim under the Pre-Action Protocol for Debt Claims, giving 30 days. See [final payment reminder before legal action](/journal/final-payment-reminder-before-legal-action-uk-wording).',
      },
      { h2: 'Adapting for private customers' },
      {
        p: 'For homeowners and other private customers, leave out statutory interest and compensation entirely. Keep the tone a notch warmer, and offer a payment plan in Letter 2: many consumers who pay late are dealing with a cash problem, not refusing to pay. You can still charge interest if your agreed terms contained a fair interest clause; quote the clause if so.',
      },
      { h2: 'Letter or email?' },
      {
        p: 'Email is fine for Letters 1 and 2. For Letter 3, send it by email as a PDF on your letterhead and post a copy, with free proof of posting from the Post Office. A posted letter makes it hard for the customer to claim they never saw it.',
      },
      {
        p: 'Want the wording filled in for you, with the interest worked out? That is exactly what a [Good Chaser letter pack](/intake?tier=basic) does.',
      },
    ],
    related: [
      'first-payment-reminder-email-a-simple-uk-example',
      'final-demand-for-payment-letter-uk-what-to-include',
      'how-to-write-a-firm-but-polite-overdue-payment-email',
      'can-you-charge-interest-on-an-overdue-invoice-in-the-uk',
    ],
  },
  {
    slug: 'how-to-reply-when-a-customer-disputes-an-invoice-template',
    title: 'How to Reply When a Customer Disputes an Invoice: Template',
    category: C,
    description:
      'How to respond to an invoice dispute in the UK: separate the disputed and undisputed amounts, ask for specifics, offer a fix, and a reply template.',
    points: [
      'Ask the customer to identify specific disputed amounts, work or terms in writing.',
      'Ask them to pay the undisputed part now; one complaint rarely justifies withholding everything.',
      'Respond to the substance with evidence: the agreement, approvals and delivery records.',
      'A dispute raised only after reminders is weaker than one raised on delivery.',
    ],
    intro:
      'A dispute is not the end of the road; often it is the first useful reply you have had. The aim is to turn a vague “we’re not happy” into specific points you can either fix or rebut, while getting the undisputed money paid.',
    blocks: [
      { h2: 'Step 1: get the dispute in writing and specific' },
      {
        p: 'Thank them for raising it, and ask them to set out exactly which items or amounts they dispute and why. “We’re not happy with the work” is not something you can resolve. “The contact form on page 4 doesn’t send emails” is.',
      },
      { h2: 'Step 2: split the invoice' },
      {
        p: 'Most disputes concern part of an invoice. If you delivered six items and they complain about one, the other five are not in dispute. Ask for those to be paid now. If they refuse to pay anything at all because of a small complaint, that tells you a lot about whether the dispute is genuine.',
      },
      { h2: 'Step 3: check it honestly against your records' },
      {
        ul: [
          'What did the quote or contract actually include?',
          'Did they approve drafts, stages or the finished work?',
          'When did they first raise this problem?',
          'Is there a quick, low-cost fix that would close the matter?',
        ],
      },
      { h2: 'Step 4: reply' },
      {
        email: {
          label: 'Reply to a partial dispute',
          subject: 'Re: invoice 0573 — your query',
          body:
            'Dear Chris,\n\nThanks for letting me know about the issue with the booking calendar. I want to get it resolved.\n\nTo make sure I’ve understood: you’re not disputing the design, the five main pages or the hosting setup, which you approved on 14 October. Your concern is that the calendar doesn’t show bookings made on mobile. Is that right?\n\nI’ll look into the calendar this week and confirm a fix by Friday 21 November.\n\nIn the meantime, could you please pay the undisputed part of the invoice, £1,750 of the £2,100 total? The remaining £350 covers the booking calendar, and I’m happy for that to wait until the fix is confirmed.\n\nBest wishes,\nDana',
        },
      },
      { h2: 'If the dispute isn’t justified' },
      {
        p: 'Respond to each point calmly, with evidence, and restate the amount due. Example: “The quote of 2 September (attached) covered five pages. The blog section you mention wasn’t included; I’d be happy to quote for it separately. You approved the final site on 30 September (email attached). The full £2,100 is therefore due, and I’d be grateful for payment by 28 November.”',
      },
      { h2: 'Disputes raised late' },
      {
        p: 'A complaint that appears for the first time after your second or third reminder, about work that was accepted without comment weeks earlier, carries much less weight. Point out the timing politely and attach the approval. The Commercial Payment Bill (introduced May 2026, not yet in force) would go further for business invoices, requiring most disputes to be raised at least eight days before the due date.',
      },
      { h2: 'When to get help' },
      {
        p: 'If the dispute involves a large sum, alleged defects causing loss, or a counterclaim, take advice before escalating. For smaller disputes, the court’s free small claims mediation service is often the quickest way to settle once a claim is issued.',
      },
    ],
    related: [
      'what-to-do-when-a-business-customer-refuses-to-pay-an-invoice',
      'what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk',
      'builder-customer-refusing-final-payment-check-the-work-and-terms',
      'customer-made-a-part-payment-how-to-chase-the-remaining-balance',
    ],
  },
  {
    slug: 'how-to-request-remittance-advice-from-a-business-customer',
    title: 'How to Request Remittance Advice from a Business Customer',
    category: C,
    description:
      'Customer says they’ve paid but nothing has arrived? How to ask for remittance advice, what details to request, and how to trace a missing payment.',
    points: [
      'If the customer says they’ve paid, ask for the payment date, amount, reference and the account it was sent to.',
      'Check your own account first, including payments under a different name or reference.',
      'Missing payments are often caused by changed bank details, wrong references or a supplier record that was never updated.',
      'Never change your bank details by email alone; warn customers that you never will.',
    ],
    intro:
      '“We paid that last week” is either good news or a polite brush-off. Remittance advice settles it either way: it is the customer’s confirmation of what they paid, when, and to which account.',
    blocks: [
      { h2: 'What remittance advice is' },
      {
        p: 'Remittance advice is a note — usually an automatic email from the customer’s accounting system — listing the invoices included in a payment, the total, the date and the reference. Larger businesses send one with every payment run. Smaller ones may need to be asked.',
      },
      { h2: 'Check your side first' },
      {
        ul: [
          'Search your bank account for the amount, not just the name. Payments often arrive from a parent company or under a trading name.',
          'Check whether the payment covered several invoices in one lump.',
          'Look for a part payment, or a payment minus bank charges, especially for overseas customers.',
          'If you changed banks recently, check the old account.',
        ],
      },
      {
        email: {
          label: 'Asking for remittance advice',
          subject: 'Invoice 4410 — could you send the remittance advice?',
          body:
            'Hi Ellie,\n\nThanks for letting me know invoice 4410 (£980) has been paid. I can’t see it in my account yet, so could you send me the remittance advice or payment details?\n\nIn particular:\n— the date it was sent\n— the amount\n— the reference used\n— the sort code and last four digits of the account it was sent to\n\nThat should let me trace it quickly. If it went to an old account, I’ll confirm the right details by phone.\n\nThanks,\nRuth',
        },
      },
      { h2: 'If it went to the wrong account' },
      {
        p: 'Payments to old or mistyped account details can usually be recalled by the customer’s bank, but they need to act quickly. Ask the customer to contact their bank the same day. If the customer sent money to new bank details after receiving an email that appeared to come from you, that may be invoice fraud. Both of you should contact your banks immediately and report it to Action Fraud.',
      },
      {
        note: 'Protect yourself: add a line to every invoice saying “We will never change our bank details by email. Please call us on [number] to confirm any change.”',
      },
      { h2: 'If no payment was made' },
      {
        p: 'Sometimes the honest answer is “it’s scheduled for the next payment run”. That is fine. Ask which date that is, write it down, and follow up the day after. If the details they give don’t match any payment, say so neutrally: “I’ve checked and nothing has arrived matching those details. Could you check with your bank?” Then continue with your normal [reminder sequence](/journal/second-payment-reminder-email-what-to-write-when-the-first-is-ignored).',
      },
    ],
    related: [
      'business-customer-says-the-invoice-is-still-in-approval',
      'customer-promised-to-pay-but-hasn-t-what-to-write-next',
      'invoice-rejected-for-a-missing-purchase-order-number',
      'customer-made-a-part-payment-how-to-chase-the-remaining-balance',
    ],
  },
];
