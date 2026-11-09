import type { ArticleInput } from './types';

const C = 'Industry Payment Problems';

export const industry: ArticleInput[] = [
  {
    slug: 'what-to-do-when-a-business-customer-refuses-to-pay-an-invoice',
    title: 'What to Do When a Business Customer Refuses to Pay an Invoice',
    category: C,
    description:
      'A business customer has refused to pay outright. How to find out why, test whether the refusal holds up, use your statutory rights and decide whether to claim.',
    points: [
      'Ask the customer to state exactly what they dispute, in writing.',
      'A refusal with no reason, or a reason that appears only after chasing, rarely holds up.',
      'You can add statutory interest and compensation to a business debt while you resolve it.',
      'For clear debts up to £10,000, the small claims track is quick and proportionate.',
    ],
    intro:
      'An outright refusal is different from a late payment. It is a dispute, even if the customer hasn’t said what the dispute is. The first job is to get them to say it, so you can either fix it or show why it doesn’t stand up.',
    blocks: [
      { h2: 'Step 1: get the reason in writing' },
      {
        email: {
          label: 'Asking for the reason',
          subject: 'Invoice 2041 — your refusal to pay',
          body:
            'Dear Mr Collins,\n\nI understand from our call today that Collins Logistics doesn’t intend to pay invoice 2041 for £4,800.\n\nSo that I can respond properly, please set out in writing which parts of the invoice you dispute and why, by 21 November. If there is a part you accept, please pay that now.\n\nKind regards,\nAnna Wright',
        },
      },
      { h2: 'Step 2: test the reason' },
      {
        table: {
          head: ['Reason given', 'Questions to ask yourself'],
          rows: [
            ['“The work wasn’t what we asked for.”', 'What did the brief or order say? Did they approve it or use it?'],
            ['“It was late.”', 'Was a deadline agreed? Did any delay cause them a real loss? Was it caused by their own late input?'],
            ['“It’s too expensive.”', 'Was the price agreed? Extras should have been approved in writing.'],
            ['“We never ordered it.”', 'Who instructed you, and did they have authority? Find the order or email.'],
            ['No reason at all', 'This is usually cash-flow trouble or a negotiating tactic.'],
          ],
        },
      },
      { h2: 'Step 3: respond on the merits' },
      {
        p: 'Answer each point briefly, with evidence attached. Concede anything that is genuinely fair: a small credit note for a real problem often unlocks the rest of the payment. See [replying to a disputed invoice](/journal/how-to-reply-when-a-customer-disputes-an-invoice-template).',
      },
      { h2: 'Step 4: use your statutory rights' },
      {
        p: 'While the matter is unresolved, statutory interest (11.75% a year on invoices due July–December 2026) and fixed compensation (£100 on a debt of £10,000 or more, £70 on £1,000–£9,999.99, £40 below that) continue to apply to the amount you can show is owed. Adding them to your demand shows you know your position and gives the customer a reason to settle sooner.',
      },
      { h2: 'Step 5: escalate' },
      {
        ol: [
          'A [letter before action](/journal/final-payment-reminder-before-legal-action-uk-wording) with 14 days to pay.',
          'Consider mediation. It is free on the small claims track, and quick.',
          'Issue a County Court claim. Up to £10,000 is normally the small claims track; above that, take advice.',
        ],
      },
      { h2: 'If the customer is a large company' },
      {
        p: 'In England, if you have fewer than 50 staff and the customer has 50 or more, the Office of the Small Business Commissioner can look at payment complaints, free. The proposed Commercial Payment Bill (introduced May 2026, not yet law) would give the Commissioner stronger powers, including adjudicating disputes between small and larger businesses.',
      },
    ],
    related: [
      'how-to-reply-when-a-customer-disputes-an-invoice-template',
      'final-payment-reminder-before-legal-action-uk-wording',
      'can-you-charge-interest-on-an-overdue-invoice-in-the-uk',
      'business-customer-says-the-invoice-is-still-in-approval',
    ],
  },
  {
    slug: 'agency-client-has-not-paid-the-monthly-retainer',
    title: 'Agency Client Has Not Paid the Monthly Retainer',
    category: C,
    description:
      'For agencies and consultants: chasing an unpaid monthly retainer, when to pause the work, notice periods, and what to say without damaging the account.',
    points: [
      'Identify which service period and deliverables the retainer covered.',
      'Retainers are usually payable in advance; if yours isn’t, change that.',
      'Give written notice before pausing work, and name the date.',
      'Check your notice period: a client in arrears may still owe the remaining months.',
    ],
    intro:
      'Retainers are meant to smooth cash flow, but an unpaid retainer means you are financing the client’s marketing. The longer you keep working unpaid, the bigger the hole and the weaker your position.',
    blocks: [
      { h2: 'Check the contract' },
      {
        ul: [
          'When is each month’s fee due: in advance, or in arrears?',
          'What does the fee cover, and what is extra?',
          'Is there a minimum term or a notice period?',
          'Can you suspend work for non-payment, and on how much notice?',
        ],
      },
      { h2: 'Month one unpaid: remind and confirm' },
      {
        email: {
          label: 'First missed retainer',
          subject: 'November retainer — invoice 1187, £2,500',
          body:
            'Hi Sophie,\n\nA quick note that the November retainer (invoice 1187, £2,500) was due on 1 November and hasn’t come through yet. I’ve attached it again.\n\nCould you check it’s in this week’s payment run? It covers the November content calendar, two campaign reports and the paid social management.\n\nThanks,\nLeon',
        },
      },
      { h2: 'Still unpaid: give notice of a pause' },
      {
        p: 'If the retainer is a couple of weeks late, or the next month’s is about to fall due, give written notice that work will pause on a specific date. Hand over or flag anything time-critical, such as ad campaigns that could overspend or scheduled posts, so the pause doesn’t cause avoidable damage.',
      },
      {
        email: {
          label: 'Notice of pause',
          subject: 'Retainer arrears — work pausing on 24 November',
          body:
            'Dear Sophie,\n\nInvoice 1187 for the November retainer (£2,500) remains unpaid, despite reminders on 3 and 10 November.\n\nUnder clause 4.2 of our agreement, I can suspend services if fees are more than 14 days overdue. Unless the invoice is paid by Friday 21 November, I will pause all work from Monday 24 November. Paid campaigns will be paused at the same time, so they don’t continue spending without management.\n\nAs this is a business invoice, statutory interest and compensation also apply to late payment.\n\nI’d much rather keep things running, so please call me if there’s an issue.\n\nRegards,\nLeon Carter',
        },
      },
      { h2: 'If the client wants to leave' },
      {
        p: 'A client in arrears sometimes tries to end the retainer at the same time. Check your notice period. If it is 30 days, they owe the fee for that notice period as well as the arrears, whether or not they want the work. Set out the full figure in writing.',
      },
      { h2: 'Protect future retainers' },
      {
        ul: [
          'Payment in advance, on the 1st of the month.',
          'Direct Debit or card-on-file billing for smaller retainers.',
          'An explicit suspension clause with a 7- or 14-day trigger.',
          'Separate invoices for ad spend you pay on the client’s behalf, payable before you spend it.',
        ],
      },
    ],
    related: [
      'virtual-assistant-chasing-an-overdue-client-invoice',
      'how-to-chase-an-overdue-invoice-without-losing-the-customer',
      'what-to-do-when-a-business-customer-refuses-to-pay-an-invoice',
      'uk-late-payment-compensation-40-70-and-100-explained',
    ],
  },
  {
    slug: 'commercial-cleaning-company-chasing-an-unpaid-invoice',
    title: 'Commercial Cleaning Company Chasing an Unpaid Invoice',
    category: C,
    description:
      'For cleaning businesses: chasing unpaid contract and one-off invoices, proving visits with logs and sign-off sheets, and handling “the job wasn’t done” complaints.',
    points: [
      'Confirm the dates, site, agreed cleaning schedule and client sign-off.',
      'Visit logs, key-holding records and photos are your proof of service.',
      'Complaints should be raised when they happen; a complaint after invoicing is weaker.',
      'For ongoing contracts, a missed month is a reason to stop credit, not to keep cleaning.',
    ],
    intro:
      'Cleaning invoices are repetitive, often small, and easy for a client’s accounts team to let slide. Strong records of each visit, and a quick response when a payment is missed, keep the money flowing.',
    blocks: [
      { h2: 'Prove the service' },
      {
        table: {
          head: ['Record', 'What it proves'],
          rows: [
            ['Cleaning schedule in the contract', 'What was agreed: frequency, areas, hours'],
            ['Staff timesheets or app check-ins', 'That cleaners were on site, and for how long'],
            ['Client sign-off sheets', 'That the client accepted the work at the time'],
            ['Dated photos of finished areas', 'The standard of work, especially for one-off deep cleans'],
            ['Key-holding or access logs', 'Entry to locked sites'],
          ],
        },
      },
      { h2: 'A clear monthly invoice' },
      {
        p: 'List every visit with its date, duration and site. Add a short line for any extra work, noting who requested it. An invoice that matches the client’s own sign-in records is much harder to query.',
      },
      {
        email: {
          label: 'Overdue contract invoice',
          subject: 'Invoice 3105 — October cleaning, Unit 4 Riverside, £1,240',
          body:
            'Dear facilities team,\n\nInvoice 3105 for October cleaning at Unit 4 Riverside (£1,240) was due on 14 November and remains unpaid. It covers 20 visits, all logged on our check-in system, plus the additional kitchen deep clean requested by Mark Jones on 18 October.\n\nI’ve attached the invoice and the visit log. Please could you confirm the payment date?\n\nKind regards,\nAngela Ruiz\nBrightway Cleaning Ltd',
        },
      },
      { h2: '“The cleaning wasn’t done properly”' },
      {
        p: 'Ask for specifics: which dates, which areas, what was wrong. Compare them with your logs and any sign-off sheets. If there was a genuine problem on one visit, a credit for that visit is fair, and the rest of the invoice remains due. If no complaint was raised at the time, point that out politely: the contract may also require complaints within a set period.',
      },
      { h2: 'When to suspend service' },
      {
        p: 'If a contract client falls a month behind, give written notice that service will be suspended on a set date unless the account is brought up to date. Continuing to clean for months unpaid only increases what you could lose if the business fails.',
      },
      {
        p: 'Your clients are businesses, so statutory interest and fixed compensation apply to every late invoice. On monthly contracts, that adds up — see [UK late payment compensation](/journal/uk-late-payment-compensation-40-70-and-100-explained).',
      },
    ],
    related: [
      'invoice-rejected-for-a-missing-purchase-order-number',
      'uk-late-payment-compensation-40-70-and-100-explained',
      'what-to-do-when-a-business-customer-refuses-to-pay-an-invoice',
      'what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk',
    ],
  },
  {
    slug: 'invoice-rejected-for-a-missing-purchase-order-number',
    title: 'Invoice Rejected for a Missing Purchase Order Number',
    category: C,
    description:
      'Invoice bounced for a missing PO number? How to get the PO fast, reissue correctly, whether the delay pauses your payment terms, and how to stop it happening again.',
    points: [
      'Ask which purchase order or reference the finance system requires.',
      'Ask your contact to raise the PO; it’s their internal process, not your job.',
      'Reissue the invoice with the PO, keeping the original invoice date where possible.',
      'Next time, get the PO number before you start work.',
    ],
    intro:
      'Larger organisations often can’t pay an invoice without a purchase order (PO) number that matches their system. Without one, your invoice may be rejected automatically, sometimes without anyone telling you. It is fixable in a day if you push the right person.',
    blocks: [
      { h2: 'Why it happens' },
      {
        p: 'A PO is the customer’s internal approval to spend. Accounts teams match invoices against POs; if there is no match, the invoice can’t be paid and is bounced back or parked. Often, your contact simply forgot to raise one before the work started.',
      },
      { h2: 'Get the PO fast' },
      {
        email: {
          label: 'Asking your contact for a PO',
          subject: 'PO needed for invoice 0772 — can you help?',
          body:
            'Hi James,\n\nAccounts have told me invoice 0772 (£3,150, for the October training sessions) can’t be paid without a PO number. Could you raise one, or tell me the existing PO I should quote?\n\nAs soon as I have it I’ll reissue the invoice the same day.\n\nThanks,\nFreya',
        },
      },
      { h2: 'Reissue the invoice correctly' },
      {
        ul: [
          'Add the PO number exactly as issued, in the field the customer asks for.',
          'Check that the description and amount match the PO. A PO for £3,000 won’t match an invoice for £3,150.',
          'Keep the original invoice number and date if you can, or mark it “Reissued — original dated 31 October”.',
          'Send it to the address the accounts team specifies, which may be an invoice-processing inbox or a supplier portal.',
        ],
      },
      { h2: 'Does a missing PO pause your payment terms?' },
      {
        p: 'It depends on what you agreed. If the customer’s terms, which you accepted, say invoices without a valid PO won’t be paid, the payment clock may effectively start when you send a valid invoice. If the PO requirement wasn’t part of your agreement, or the customer failed to provide one when asked, you have a good argument that the original due date stands. Either way, chasing the PO quickly is the fastest route to being paid.',
      },
      {
        note: 'The Commercial Payment Bill (introduced May 2026, not yet in force) would require most business customers to raise invoice disputes at least eight days before the due date. If it becomes law, a customer who sits on a PO problem until after the due date may find it harder to rely on it.',
      },
      { h2: 'Prevent it' },
      {
        ul: [
          'Ask at the start: “Do you need a PO? Who raises it, and what do I quote?”',
          'Put “PO required before work starts” in your proposal for corporate clients.',
          'Register on the customer’s supplier portal early, before the first invoice.',
        ],
      },
    ],
    related: [
      'business-customer-says-the-invoice-is-still-in-approval',
      'how-to-request-remittance-advice-from-a-business-customer',
      'commercial-cleaning-company-chasing-an-unpaid-invoice',
      'how-to-ask-a-customer-for-a-definite-payment-date',
    ],
  },
  {
    slug: 'business-customer-says-the-invoice-is-still-in-approval',
    title: 'Business Customer Says the Invoice Is Still in Approval',
    category: C,
    description:
      '“It’s in approval” can mean days or months. How to find out who the approver is, which stage it’s at, and how to move a stuck invoice through a corporate process.',
    points: [
      'Identify the named approver and the current processing stage.',
      'Ask for the date of the next payment run once it is approved.',
      'Internal approval is the customer’s process: it doesn’t extend your agreed payment terms.',
      'Interest still runs on late business invoices while they sit in approval.',
    ],
    intro:
      '“It’s in approval” is the most common reply from larger customers, and the least informative. Sometimes it means one signature is missing. Sometimes it means nobody has looked at it. A few precise questions will tell you which.',
    blocks: [
      { h2: 'The stages of a corporate invoice' },
      {
        table: {
          head: ['Stage', 'What happens', 'Common hold-up'],
          rows: [
            ['Received', 'Logged by accounts payable', 'Sent to the wrong inbox'],
            ['Matched', 'Checked against a PO and goods receipt', 'Missing or mismatched PO'],
            ['Approved', 'Budget holder signs it off', 'Approver on leave or ignoring the email'],
            ['Scheduled', 'Added to a payment run', 'Monthly runs mean a long wait'],
            ['Paid', 'Money sent', 'Bank details not set up for new suppliers'],
          ],
        },
      },
      { h2: 'Questions that get answers' },
      {
        ul: [
          '“Who is the approver, and has it reached them?”',
          '“Is anything missing from the invoice — a PO, a cost code, a goods receipt?”',
          '“Once approved, which payment run will it go in?”',
          '“Is there anyone who can approve it while they’re away?”',
        ],
      },
      {
        email: {
          label: 'Moving an invoice through approval',
          subject: 'Invoice 0812 — approval and payment date',
          body:
            'Hi Kate,\n\nThanks for letting me know invoice 0812 (£2,900, due 31 October) is in approval. To help it along, could you tell me:\n\n— who is approving it, and whether it has reached them\n— whether anything is missing, such as a PO or cost code\n— which payment run it will go in once approved\n\nIf it would help, I’m happy to send anything the approver needs directly.\n\nThanks,\nOscar',
        },
      },
      { h2: 'Approval doesn’t pause the clock' },
      {
        p: 'Unless your contract says otherwise, the customer’s internal approval process doesn’t extend the payment terms you agreed. If the invoice was due on 31 October, it is late from 1 November, approved or not. For business invoices that means statutory interest and compensation are already accruing. A polite mention of that often moves an invoice up the pile.',
      },
      {
        p: 'The proposed Commercial Payment Bill (introduced May 2026, not yet law) would go further for invoices that need verification or acceptance, implying a 30-day limit on completing that process unless a longer period is fair and reasonable.',
      },
      { h2: 'If it stays stuck' },
      {
        p: 'After two weeks “in approval”, escalate: write to the head of accounts payable or the finance director, with the invoice, the PO and a timeline of your follow-ups. Many large companies also publish payment practice reports showing how quickly they pay suppliers. If you are a small supplier being paid far more slowly than they report, that is worth mentioning.',
      },
    ],
    related: [
      'invoice-rejected-for-a-missing-purchase-order-number',
      'how-to-ask-a-customer-for-a-definite-payment-date',
      'how-to-request-remittance-advice-from-a-business-customer',
      'what-to-do-when-a-business-customer-refuses-to-pay-an-invoice',
    ],
  },
];
