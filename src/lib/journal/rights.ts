import type { ArticleInput } from './types';

const C = 'Late-Payment Rights';

export const rights: ArticleInput[] = [
  {
    slug: 'final-demand-for-payment-letter-uk-what-to-include',
    title: 'Final Demand for Payment Letter UK: What to Include',
    category: C,
    description:
      'What a UK final demand letter must include, how to write one yourself without a solicitor, the 7 or 30-day deadline, and a ready-to-adapt template.',
    points: [
      'Set out both parties, the invoice, what you delivered, the amount outstanding and the due date.',
      'You can write a final demand yourself; a solicitor’s letterhead is optional, accuracy is not.',
      'Give a firm deadline: 7–14 days for a business, and follow the 30-day debt protocol for individuals and sole traders.',
      'Only say you will take a step, such as a court claim, if you genuinely intend to.',
    ],
    intro:
      'A final demand is the last letter before you take formal action. It should read as a calm, complete statement of the debt that a judge could pick up later and understand in one minute. You do not need a solicitor to write it.',
    blocks: [
      { h2: 'Who is the debtor?' },
      {
        p: 'Address the letter to the legal entity you contracted with. For a limited company, use its registered name and registered office, which you can check free on Companies House. For a sole trader or individual, use their own name and home or trading address. Getting this wrong is the most common reason a later court claim stalls.',
      },
      { h2: 'What the letter must include' },
      {
        ul: [
          'Your name or business name, address and contact details.',
          'The debtor’s full legal name and address.',
          'A heading such as “Final demand for payment”.',
          'What was agreed and delivered: “On 2 September you instructed me to design and build a five-page website for £2,400. The site went live on 30 September.”',
          'The invoice number, date, amount, due date and any part payments received.',
          'Your reminders so far, with dates.',
          'Any statutory interest and compensation you are adding (business customers only), shown as separate figures.',
          'The total now due, how to pay, and a deadline.',
          'What you intend to do if it is not paid, stated plainly.',
        ],
      },
      { h2: 'Business customer or individual? The deadline differs' },
      {
        table: {
          head: ['Customer', 'What applies', 'Deadline to give'],
          rows: [
            ['Limited company or LLP', 'Practice Direction on Pre-Action Conduct', 'A reasonable period — 14 days is common'],
            ['Sole trader, partnership or private individual', 'Pre-Action Protocol for Debt Claims', '30 days, with the protocol’s information sheet and reply form'],
          ],
        },
      },
      {
        p: 'If your customer is an individual, including a sole trader, the Pre-Action Protocol for Debt Claims applies before you go to court in England and Wales. Your letter of claim must enclose the protocol’s information sheet and reply form, and give them 30 days to respond. Ignoring the protocol can lead the court to penalise you on costs even if you win. See our guide to the [final reminder before legal action](/journal/final-payment-reminder-before-legal-action-uk-wording).',
      },
      {
        email: {
          label: 'Final demand — business customer',
          subject: 'Final demand for payment — invoice 0817',
          body:
            'Dear Ms Patel,\n\nFINAL DEMAND FOR PAYMENT — BRIGHTLINE DESIGNS LTD\n\nOn 2 September 2026 your company instructed me to design and build a five-page website for £2,400. The site was delivered and went live on 30 September 2026. I issued invoice 0817 on 30 September 2026, payable within 14 days, by 14 October 2026.\n\nDespite reminders on 15 October, 22 October and 3 November, the invoice remains unpaid.\n\nUnder the Late Payment of Commercial Debts (Interest) Act 1998, I am entitled to statutory interest at 11.75% a year (£0.77 a day) and fixed compensation of £70. The amount now due is:\n\nInvoice 0817: £2,400.00\nCompensation: £70.00\nInterest to 9 November 2026 (26 days): £20.09\nTotal: £2,490.09, with interest continuing at £0.77 a day.\n\nPlease pay the total to [bank details] by 23 November 2026. If payment is not received by that date, I intend to issue a claim in the County Court without further notice, which may increase the amount you have to pay.\n\nIf you dispute any part of this debt, please tell me in writing before that date, with your reasons.\n\nYours sincerely,\nSam Lee',
        },
      },
      { h2: 'Common mistakes' },
      {
        ul: [
          'Adding a made-up “admin fee” that was not in your terms. Statutory compensation is the fee the law allows.',
          'Claiming interest and compensation from a private individual. These statutory rights only apply between businesses.',
          'Threatening bailiffs, credit files or criminal action. Before a court judgment, none of these are yours to threaten, and false threats can be unlawful harassment.',
          'Setting a deadline you don’t enforce. If you say you will issue a claim, decide now whether you will.',
        ],
      },
      { h2: 'Sending it' },
      {
        p: 'Email it as a PDF and also post it, ideally with proof of posting from the Post Office (free). Keep a copy with your [evidence file](/journal/what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk). If you need help working out the figures, see [how to charge interest on an overdue invoice](/journal/can-you-charge-interest-on-an-overdue-invoice-in-the-uk).',
      },
    ],
    related: [
      'final-payment-reminder-before-legal-action-uk-wording',
      'can-you-charge-interest-on-an-overdue-invoice-in-the-uk',
      'uk-late-payment-compensation-40-70-and-100-explained',
      'what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk',
    ],
  },
  {
    slug: 'final-payment-reminder-before-legal-action-uk-wording',
    title: 'Final Payment Reminder Before Legal Action: UK Wording',
    category: C,
    description:
      'How to word a letter before action for an unpaid invoice in England and Wales, including the Pre-Action Protocol for Debt Claims, court fees and what happens next.',
    points: [
      'A final reminder must stay factually accurate about the debt and about what you will do next.',
      'Claiming against an individual or sole trader? Follow the Pre-Action Protocol for Debt Claims and allow 30 days.',
      'For claims up to £10,000 in England and Wales, the small claims track keeps costs low; the court fee ranges from £35 to £455.',
      'You have six years from the due date to bring a claim in England and Wales (five years in Scotland).',
    ],
    intro:
      'A “letter before action” (or letter of claim) is the formal last step before you start a court claim. Courts expect one, and a clear letter at this stage often gets the invoice paid without any court involvement at all.',
    blocks: [
      { h2: 'Check this before you write' },
      {
        ul: [
          'You have the debtor’s correct legal name and address (Companies House for limited companies).',
          'The debt is not genuinely disputed. If it is, deal with that first — see [replying to a disputed invoice](/journal/how-to-reply-when-a-customer-disputes-an-invoice-template).',
          'The debtor is still trading or has assets. Winning a judgment against a company in liquidation recovers nothing.',
          'If the debtor is an individual, they are not in a Breathing Space debt respite scheme; if they are, you must pause action.',
        ],
      },
      { h2: 'The letter: what courts expect to see' },
      {
        ol: [
          'A clear heading: “Letter before action” or “Letter of claim”.',
          'The basis of the claim: the agreement, what was delivered, the invoice.',
          'The amount claimed, broken down into principal, interest and compensation.',
          'How the debtor can pay, and the date by which they must pay or respond.',
          'A statement that you will start court proceedings if they do not, without further notice.',
          'For individuals and sole traders: the protocol’s Information Sheet and Reply Form, and a note of where they can get free debt advice.',
        ],
      },
      {
        email: {
          label: 'Letter before action — individual or sole trader',
          subject: 'Letter of claim — unpaid invoice 0451',
          body:
            'Dear Mr Evans,\n\nLETTER OF CLAIM\n\nI am writing about £1,850 you owe me for kitchen tiling carried out at 14 Mill Lane between 6 and 10 October 2026, as set out in invoice 0451 dated 10 October 2026. Payment was due on 24 October 2026. I sent reminders on 27 October and 4 November.\n\nPlease pay £1,850 by 10 December 2026, or contact me before then to propose a payment plan or explain why you think the amount is not owed.\n\nI enclose the Information Sheet and Reply Form required by the Pre-Action Protocol for Debt Claims. Please complete and return the Reply Form within 30 days. Free independent debt advice is available from Citizens Advice, StepChange and National Debtline.\n\nIf I do not receive payment or a reply by 10 December 2026, I intend to issue a claim in the County Court, which may add court fees to the amount you owe.\n\nYours sincerely,\nCarla Reid',
        },
      },
      { h2: 'What a court claim costs' },
      {
        table: {
          caption: 'County Court money claim fees (England and Wales)',
          head: ['Claim amount (including interest)', 'Fee'],
          rows: [
            ['Up to £300', '£35'],
            ['£300.01–£500', '£50'],
            ['£500.01–£1,000', '£70'],
            ['£1,000.01–£1,500', '£80'],
            ['£1,500.01–£3,000', '£115'],
            ['£3,000.01–£5,000', '£205'],
            ['£5,000.01–£10,000', '£455'],
          ],
        },
      },
      {
        p: 'If you win, the fee is normally added to the judgment. Claims up to £10,000 are usually allocated to the small claims track, where each side generally pays its own legal costs, so you are unlikely to pay the other side’s solicitor if you lose a small claim. The court also offers free mediation for claims of £10,000 or less. Check current fees on [GOV.UK](https://www.gov.uk/make-court-claim-for-money) before you claim.',
      },
      {
        note: 'Scotland and Northern Ireland have their own procedures. In Scotland, claims up to £5,000 use the simple procedure in the sheriff court. Get local advice if your debtor is based outside England and Wales.',
      },
      { h2: 'Keep the wording honest' },
      {
        p: 'Only state what you will actually do. Phrases like “we will send bailiffs”, “this will affect your credit rating” or “we will report you to the police” are misleading before a judgment exists, and threats like these can amount to harassment. A plain statement that you will start a County Court claim is both accurate and effective.',
      },
    ],
    related: [
      'final-demand-for-payment-letter-uk-what-to-include',
      'when-to-stop-sending-invoice-reminders-and-choose-a-next-step',
      'what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk',
      'invoice-90-days-overdue-organise-the-facts-before-escalating',
    ],
  },
  {
    slug: 'can-you-charge-interest-on-an-overdue-invoice-in-the-uk',
    title: 'Can You Charge Interest on an Overdue Invoice in the UK?',
    category: C,
    description:
      'Yes, if your customer is a business. Statutory interest is 8% above the Bank of England reference rate (11.75% for debts due July–December 2026). Worked example inside.',
    points: [
      'Business-to-business: yes, under the Late Payment of Commercial Debts (Interest) Act 1998, even if your invoice never mentioned it.',
      'The rate is 8% plus the Bank of England reference rate. For invoices that fell due between 1 July and 31 December 2026, that is 11.75% a year.',
      'Interest is simple, not compound: amount × rate × days late ÷ 365.',
      'Private individuals: only if your agreed terms included a fair interest clause.',
    ],
    intro:
      'If you sell to other businesses, the law gives you a right to interest on late payment. You don’t need to have mentioned it on your invoice or in your terms. Here is how it works, what the current rate is and how to calculate it.',
    blocks: [
      { h2: 'Who can charge statutory interest' },
      {
        p: 'The Late Payment of Commercial Debts (Interest) Act 1998 applies when both you and your customer are acting in the course of a business. That includes limited companies, sole traders, partnerships, charities and public bodies. It does not apply to sales to consumers, meaning private individuals buying for themselves.',
      },
      {
        table: {
          head: ['Your customer', 'Statutory interest?', 'Fixed compensation?'],
          rows: [
            ['Limited company, LLP, public body', 'Yes', 'Yes — £40, £70 or £100'],
            ['Sole trader buying for their business', 'Yes', 'Yes'],
            ['Private individual (e.g. a homeowner)', 'No — only a fair contractual interest clause', 'No'],
          ],
        },
      },
      { h2: 'The rate' },
      {
        p: 'Statutory interest is **8% a year plus the Bank of England “reference rate”**. The reference rate is fixed in six-month periods: the Bank Rate on 31 December applies to debts that become overdue from 1 January to 30 June, and the Bank Rate on 30 June applies to debts that become overdue from 1 July to 31 December. The rate stays fixed for that debt until it is paid.',
      },
      {
        table: {
          head: ['Invoice became overdue', 'Reference rate', 'Statutory rate'],
          rows: [
            ['1 July – 31 December 2026', '3.75% (Bank Rate on 30 June 2026)', '11.75% a year'],
            ['From 1 January 2027', 'Bank Rate on 31 December 2026', '8% + that rate'],
          ],
        },
      },
      {
        note: 'The Bank of England raised Bank Rate to 4% on 5 November 2026. That does not change the 11.75% rate for invoices that fell due in July–December 2026. If Bank Rate is still 4% on 31 December 2026, invoices falling due from 1 January 2027 will carry 12%.',
      },
      { h2: 'How to calculate it: a worked example' },
      {
        p: 'Interest is simple interest, worked out daily. First find the daily rate: invoice amount × annual rate ÷ 365. Then multiply by the number of days since the due date.',
      },
      {
        table: {
          caption: 'Example: £2,400 invoice due 15 August 2026, calculated on 9 November 2026',
          head: ['Step', 'Figure'],
          rows: [
            ['Statutory rate', '11.75% (3.75% + 8%)'],
            ['Daily interest: £2,400 × 0.1175 ÷ 365', '£0.77 a day'],
            ['Days overdue (16 August to 9 November)', '86 days'],
            ['Interest: £0.7726 × 86', '£66.44'],
            ['Fixed compensation (debt £1,000–£9,999.99)', '£70.00'],
            ['Total to claim', '£2,536.44'],
          ],
        },
      },
      {
        p: 'If the customer has paid part of the invoice, interest runs on the reducing balance — see [calculating interest on a part-paid invoice](/journal/how-to-calculate-interest-on-a-part-paid-commercial-invoice).',
      },
      { h2: 'When interest starts' },
      {
        p: 'Interest runs from the day after the agreed due date. If you did not agree a payment date, the Act implies one: 30 days after the customer received the invoice or the goods or services, whichever is later. Business-to-business payment terms longer than 60 days are only allowed if they are not grossly unfair to the supplier.',
      },
      { h2: 'Should you actually claim it?' },
      {
        p: 'You don’t have to. Many businesses mention their right to interest in the second or third reminder and only add it if the client still won’t pay. It is a useful lever. Once you add it, be consistent and show the calculation, so the figure can’t be dismissed as made up.',
      },
      {
        email: {
          label: 'Adding interest — wording',
          subject: 'Invoice 0817 — statutory interest now applied',
          body:
            'Dear Ms Patel,\n\nInvoice 0817 for £2,400 was due on 15 August and remains unpaid. As this is a business debt, I’m entitled under the Late Payment of Commercial Debts (Interest) Act 1998 to statutory interest at 11.75% a year and fixed compensation of £70.\n\nAs of today, 86 days after the due date, the amount due is £2,536.44 (invoice £2,400, interest £66.44, compensation £70). Interest continues at £0.77 a day until payment.\n\nPlease pay by 20 November.\n\nKind regards,\nSam',
        },
      },
      { h2: 'Proposed changes (not yet law)' },
      {
        p: 'The Commercial Payment Bill, introduced to Parliament on 19 May 2026, would make the right to statutory interest mandatory, so contract terms that exclude or reduce it would be void, and would cap most business payment terms at 60 days. It is not yet in force. Until it is, your contract can set a different “substantial remedy” for late payment that replaces statutory interest.',
      },
    ],
    related: [
      'uk-late-payment-compensation-40-70-and-100-explained',
      'how-to-calculate-interest-on-a-part-paid-commercial-invoice',
      'final-demand-for-payment-letter-uk-what-to-include',
      'what-to-do-when-a-business-customer-refuses-to-pay-an-invoice',
    ],
  },
  {
    slug: 'uk-late-payment-compensation-40-70-and-100-explained',
    title: 'UK Late Payment Compensation: £40, £70 and £100 Explained',
    category: C,
    description:
      'Fixed late payment compensation of £40, £70 or £100 per invoice for business debts in the UK: who qualifies, how much, recovery costs and how to claim it.',
    points: [
      'Fixed compensation applies to late-paid business-to-business invoices, on top of statutory interest.',
      'It is £40 on debts under £1,000, £70 on £1,000–£9,999.99, and £100 on £10,000 or more.',
      'It is per invoice, so three late invoices can mean three payments of compensation.',
      'If your reasonable costs of recovering the debt were higher, you can claim the difference.',
    ],
    intro:
      'Alongside statutory interest, UK law gives businesses a fixed sum of compensation for the hassle and cost of chasing a late payment. It is small, it is automatic and many suppliers never claim it.',
    blocks: [
      { h2: 'How much' },
      {
        table: {
          head: ['Size of the unpaid debt', 'Fixed compensation'],
          rows: [
            ['Up to £999.99', '£40'],
            ['£1,000 to £9,999.99', '£70'],
            ['£10,000 or more', '£100'],
          ],
        },
      },
      {
        p: 'The amount depends on the size of the debt — the invoice — not on how late it is. A £950 invoice that is two days late and one that is two months late both attract £40.',
      },
      { h2: 'Who can claim it' },
      {
        ul: [
          'Both parties must be acting in the course of business. Sole traders count; private individuals don’t.',
          'The invoice must be paid late — after the agreed date, or after the 30-day default if no date was agreed.',
          'Contract terms cannot remove your right to it unless they provide another “substantial remedy” for late payment.',
        ],
      },
      { h2: 'Per invoice, not per customer' },
      {
        p: 'If a client is late with three separate invoices of £600, £1,200 and £300, the compensation is £40 + £70 + £40 = £150, plus interest on each. This is why it matters to invoice separately for separate pieces of work or stages, rather than in one lump sum.',
      },
      { h2: 'Reasonable recovery costs' },
      {
        p: 'If chasing the debt cost you more than the fixed sum — for example, you paid a debt recovery agency or a solicitor for a letter — you can claim your reasonable recovery costs, minus the fixed compensation you already claimed. Your own time is not normally claimable as a recovery cost; third-party costs with receipts are.',
      },
      { h2: 'How to claim it' },
      {
        p: 'Add it as a separate line in your demand, clearly labelled, with a reference to the law. You do not need to issue a new invoice for it, though some accountants prefer a separate invoice for compensation and interest so your records stay tidy.',
      },
      {
        email: {
          label: 'Claim wording',
          subject: 'Invoice 1204 — late payment compensation and interest',
          body:
            'Dear accounts team,\n\nInvoice 1204 for £3,600 was due on 30 September 2026 and is still unpaid.\n\nUnder the Late Payment of Commercial Debts (Interest) Act 1998, I am adding fixed compensation of £70 for this invoice, together with statutory interest at 11.75% a year from 1 October 2026 (£1.16 a day).\n\nI’d be grateful if you could pay the invoice plus compensation and interest to date by 21 November. I can send a breakdown on request.\n\nKind regards,\nNia',
        },
      },
      {
        note: 'The Commercial Payment Bill (introduced May 2026, not yet law) proposes a separate fixed liability for customers who raise invoice disputes late or without enough detail: the greater of £40 or 1% of the contract price. That is different from the compensation explained here.',
      },
    ],
    related: [
      'can-you-charge-interest-on-an-overdue-invoice-in-the-uk',
      'how-to-calculate-interest-on-a-part-paid-commercial-invoice',
      'final-demand-for-payment-letter-uk-what-to-include',
      'invoice-60-days-overdue-how-to-escalate-payment-requests',
    ],
  },
  {
    slug: 'how-to-calculate-interest-on-a-part-paid-commercial-invoice',
    title: 'How to Calculate Interest on a Part-Paid Commercial Invoice',
    category: C,
    description:
      'Step-by-step calculation of UK statutory late payment interest when a customer pays part of an invoice, with a worked two-period example and a table you can copy.',
    points: [
      'Interest runs on whatever was unpaid on each day, so split the calculation at every part payment.',
      'Compensation is fixed by the size of the original debt, not the balance left after a part payment.',
      'Apply each payment to the oldest invoice first unless the customer says otherwise.',
      'Show your working: a period-by-period table is hard to dispute.',
    ],
    intro:
      'When a business customer pays part of a late invoice, the interest calculation gets slightly more fiddly but the principle is simple: work out interest on the full amount until the part payment, then on the balance after it.',
    blocks: [
      { h2: 'The method' },
      {
        ol: [
          'Write down the original amount, the due date and the statutory rate for that period (8% + reference rate; 11.75% for invoices due July–December 2026).',
          'List every payment received, with its date and amount.',
          'Split the timeline into periods, one starting at the due date and a new one at each payment.',
          'For each period: balance × rate × days ÷ 365.',
          'Add up the periods. Add the fixed compensation once, based on the original invoice size.',
        ],
      },
      { h2: 'Worked example' },
      {
        p: 'Invoice: £5,000, due 1 September 2026. The customer paid £2,000 on 1 October 2026 and the remaining £3,000 on 10 November 2026. Rate: 11.75%.',
      },
      {
        table: {
          head: ['Period', 'Unpaid balance', 'Days', 'Calculation', 'Interest'],
          rows: [
            ['2 Sep – 1 Oct', '£5,000', '30', '£5,000 × 11.75% × 30 ÷ 365', '£48.29'],
            ['2 Oct – 10 Nov', '£3,000', '40', '£3,000 × 11.75% × 40 ÷ 365', '£38.63'],
            ['Total interest', '', '', '', '£86.92'],
            ['Fixed compensation', 'based on £5,000', '', '£1,000–£9,999.99 band', '£70.00'],
            ['Total claim on top of the invoice', '', '', '', '£156.92'],
          ],
        },
      },
      { h2: 'Common questions' },
      {
        h3: 'The customer paid the whole invoice but late. Can I still claim interest?',
      },
      {
        p: 'Yes. Statutory interest and compensation are owed even once the principal has been paid. Send a short invoice for the interest and compensation, with the calculation attached.',
      },
      { h3: 'They paid several invoices in one lump. How do I allocate it?' },
      {
        p: 'If the customer specified which invoices the payment covers, follow that. If not, it is normal practice to apply it to the oldest invoice first and tell them in writing how you allocated it.',
      },
      { h3: 'Does a part payment reset the clock or lower the compensation?' },
      {
        p: 'No. The due date stays the same, and compensation is set by the size of the debt when it fell due. A part payment only reduces the balance that interest runs on.',
      },
      {
        email: {
          label: 'Sending the interest calculation',
          subject: 'Invoice 0932 — late payment interest and compensation',
          body:
            'Dear Alex,\n\nThank you for settling invoice 0932. As it was paid after the 1 September due date, I’ve attached invoice 0932-I for statutory interest and compensation under the Late Payment of Commercial Debts (Interest) Act 1998:\n\nInterest on £5,000 from 2 Sep to 1 Oct (30 days): £48.29\nInterest on £3,000 from 2 Oct to 10 Nov (40 days): £38.63\nFixed compensation: £70.00\nTotal: £156.92\n\nPayment is due within 14 days.\n\nKind regards,\nMorgan',
        },
      },
      {
        p: 'For the basics of the rate and who qualifies, see [can you charge interest on an overdue invoice](/journal/can-you-charge-interest-on-an-overdue-invoice-in-the-uk). For chasing the balance itself, see [a customer made a part payment](/journal/customer-made-a-part-payment-how-to-chase-the-remaining-balance).',
      },
    ],
    related: [
      'can-you-charge-interest-on-an-overdue-invoice-in-the-uk',
      'customer-made-a-part-payment-how-to-chase-the-remaining-balance',
      'uk-late-payment-compensation-40-70-and-100-explained',
      'customer-missed-an-invoice-instalment-what-to-write',
    ],
  },
  {
    slug: 'what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk',
    title: 'What Evidence to Keep for an Unpaid Invoice in the UK',
    category: C,
    description:
      'The documents that prove an unpaid invoice is owed — agreement, delivery, invoice, reminders — how to organise them, and how long to keep them.',
    points: [
      'Preserve the quote, acceptance, contract and invoice: they prove what was agreed.',
      'Delivery evidence (sign-off, handover emails, timesheets) proves you did the work.',
      'A dated chasing log shows the court you behaved reasonably.',
      'Keep records for at least six years from the due date — the limitation period in England and Wales.',
    ],
    intro:
      'Most unpaid invoices never reach court. When one does, the side with the clearest paper trail usually wins. Building that trail takes ten minutes per project if you do it as you go, and hours of digging if you don’t.',
    blocks: [
      { h2: 'The five things to keep' },
      {
        table: {
          head: ['What it proves', 'Examples'],
          rows: [
            ['There was an agreement', 'Quote and the email accepting it, signed contract, booking form, purchase order, terms and conditions you sent before starting'],
            ['What the price and terms were', 'Price, payment terms, deposit, stage payments, what was excluded'],
            ['You delivered', 'Delivery note, handover email, link to live site, photos of finished work, timesheets, client approval'],
            ['You invoiced correctly', 'The invoice, the email sending it, any corrected versions or credit notes'],
            ['You chased reasonably', 'Every reminder, call notes, promises to pay, and replies'],
          ],
        },
      },
      { h2: 'Messages count' },
      {
        p: 'Agreements made over WhatsApp, text or social media direct messages can be just as binding as a signed contract. Screenshot or export the thread, including the dates and the other person’s number or profile, and save it as a PDF. Don’t rely on the app keeping it.',
      },
      { h2: 'Build a one-page chronology' },
      {
        p: 'For any invoice more than 30 days overdue, create a simple dated timeline. It becomes the backbone of your final demand and, if it gets that far, your court claim.',
      },
      {
        table: {
          caption: 'Example chronology',
          head: ['Date', 'Event', 'Evidence'],
          rows: [
            ['2 Sep 2026', 'Client accepts quote for £2,400', 'Email “Go ahead”'],
            ['30 Sep 2026', 'Website delivered and live', 'Handover email, client reply “Looks great”'],
            ['30 Sep 2026', 'Invoice 0817 sent, due 14 Oct', 'Invoice PDF, sent email'],
            ['15 Oct 2026', 'First reminder', 'Email'],
            ['22 Oct 2026', 'Phone call — promised to pay by 31 Oct', 'Call note, follow-up email'],
            ['3 Nov 2026', 'Second reminder, no reply', 'Email'],
          ],
        },
      },
      { h2: 'Disputes: what helps most' },
      {
        p: 'If the client later says the work was not done properly, the most useful evidence is anything they said at the time — approval of drafts, praise on delivery, a request for further work. Complaints that first appear after a payment reminder carry much less weight than complaints made when the work was delivered.',
      },
      { h2: 'How long to keep it' },
      {
        p: 'In England and Wales, you generally have six years from the date the invoice fell due to bring a claim for a contract debt; in Scotland the period is usually five years. Keep project records at least that long. HMRC separately expects business records to be kept for at least five years after the 31 January tax return deadline for sole traders, and six years for companies.',
      },
      { h2: 'Set up the habit' },
      {
        ul: [
          'One folder per client, one sub-folder per project.',
          'Save the accepted quote and terms before you start work.',
          'Forward key emails (acceptance, sign-off, payment promises) into that folder as they happen.',
          'After every phone call about payment, send a one-line email confirming what was said.',
        ],
      },
    ],
    related: [
      'final-demand-for-payment-letter-uk-what-to-include',
      'invoice-90-days-overdue-organise-the-facts-before-escalating',
      'how-to-reply-when-a-customer-disputes-an-invoice-template',
      'final-payment-reminder-before-legal-action-uk-wording',
    ],
  },
];
