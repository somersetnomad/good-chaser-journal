import type { ArticleInput } from './types';

const C = 'Trades & Construction';

export const trades: ArticleInput[] = [
  {
    slug: 'builder-customer-refusing-final-payment-check-the-work-and-terms',
    title: 'Builder Customer Refusing Final Payment: Check the Work and Terms',
    category: C,
    description:
      'Homeowner or business refusing the final payment on a building job? Snagging, variations, retentions and the Construction Act explained, with letters for each case.',
    points: [
      'Check the agreed scope, variations, completion evidence and any snagging list.',
      'Offer to fix genuine snags promptly, and ask for the balance minus a fair amount for them.',
      'Homeowners are protected by consumer law; the Construction Act payment rules mostly don’t apply to them.',
      'For commercial jobs, payment and pay less notices can decide who is right.',
    ],
    intro:
      'Final payments on building jobs are where disputes cluster: the work is done, the customer has what they wanted, and the last sum is often the biggest. Whether you are dealing with a homeowner or a business changes the rules.',
    blocks: [
      { h2: 'Homeowner or commercial client?' },
      {
        table: {
          head: ['', 'Homeowner (residential occupier)', 'Commercial client or developer'],
          rows: [
            ['Main law', 'Consumer Rights Act 2015 — work must be done with reasonable care and skill', 'Your contract, plus the Housing Grants, Construction and Regeneration Act 1996 (the Construction Act)'],
            ['Payment notices', 'Not required', 'Payment and pay less notices apply'],
            ['Statutory interest', 'No (unless your terms included fair interest)', 'Yes'],
            ['Adjudication', 'Only if your contract provides for it', 'Statutory right to adjudicate'],
          ],
        },
      },
      { h2: 'Snagging: deal with it fast' },
      {
        p: 'Most refusals start with snags: small defects or unfinished items. Ask for a written snagging list, agree what is genuinely outstanding, and give a date to fix it. It is fair for the customer to hold back a reasonable amount to cover real snags; it is not usually fair to hold back the entire balance for a handful of minor items.',
      },
      {
        email: {
          label: 'Responding to snags — homeowner',
          subject: '14 Elm Road — final invoice and snagging list',
          body:
            'Dear Mr and Mrs Grant,\n\nThank you for sending the snagging list. I’ve been through it:\n\n— Loose skirting in the hall: agreed, will fix\n— Paint touch-ups in the kitchen: agreed, will fix\n— Extractor fan: this was supplied by you and is outside our scope\n\nI can attend on Tuesday 25 November to complete the two agreed items, which will take about two hours.\n\nThe final invoice is £6,800. I’m happy for you to hold back £200 until the snags are done, and to pay the remaining £6,600 now. Could you confirm by Friday?\n\nKind regards,\nMark Dean\nDean Building Services',
        },
      },
      { h2: 'Variations' },
      {
        p: 'If the customer says the final invoice is higher than the quote, list every change they asked for, with dates and how they confirmed it. Extras agreed only verbally are harder to prove, so look for messages, photos or anything else showing they knew about and wanted the extra work. See [proving construction variations](/journal/unpaid-construction-variations-proving-the-extra-work-was-agreed).',
      },
      { h2: 'Commercial jobs: notices matter' },
      {
        p: 'Under the Construction Act, a paying party that wants to pay less than the sum due must normally serve a valid pay less notice before the final date for payment. If it didn’t, you are generally entitled to the notified sum, even if it later argues about the quality of the work. You also have a statutory right to suspend work after giving at least 7 days’ written notice of non-payment, and a right to refer the dispute to adjudication, which produces a binding decision in about 28 days.',
      },
      { h2: 'When to take advice' },
      {
        p: 'If the customer alleges serious defects, threatens a counterclaim, or the sum is large, get advice from a construction solicitor or your trade association before escalating. For smaller domestic balances, a clear [letter of claim](/journal/final-payment-reminder-before-legal-action-uk-wording) followed by a small claim is usually proportionate.',
      },
    ],
    related: [
      'unpaid-construction-variations-proving-the-extra-work-was-agreed',
      'electrician-with-an-unpaid-domestic-invoice-a-fair-way-to-follow-up',
      'subcontractor-unpaid-by-a-main-contractor-what-to-check',
      'how-to-reply-when-a-customer-disputes-an-invoice-template',
    ],
  },
  {
    slug: 'electrician-with-an-unpaid-domestic-invoice-a-fair-way-to-follow-up',
    title: 'Electrician with an Unpaid Domestic Invoice: A Fair Way to Follow Up',
    category: C,
    description:
      'For electricians and other domestic trades: chasing a homeowner’s unpaid invoice fairly, handling extras, certificates and complaints, and when to go to small claims.',
    points: [
      'Confirm the quote, accepted extras and completed work.',
      'Homeowners are consumers: no statutory business interest, and the debt protocol applies before court.',
      'Don’t withhold safety certification or building-control notification as a payment lever.',
      'Small domestic debts are well suited to the small claims track if reminders fail.',
    ],
    intro:
      'Domestic jobs are usually paid on the day. When one isn’t, it can feel personal: you were in their home, they seemed happy. A calm, fair follow-up gets most homeowners to pay, and keeps you on the right side of consumer law if it doesn’t.',
    blocks: [
      { h2: 'Get your paperwork straight' },
      {
        ul: [
          'The quote or estimate, and the message accepting it.',
          'Any extras: what they were, the price, and how the customer agreed (a text is fine).',
          'Photos of the finished work.',
          'Test results and certificates issued.',
        ],
      },
      { h2: 'Quote or estimate?' },
      {
        p: 'A quote is a fixed price. An estimate is a best guess. If you gave an estimate and the final bill is higher, the customer will expect an explanation, and consumer law expects the final price to be reasonable. Breaking down the extra time or materials, and when you told them, usually resolves it.',
      },
      {
        email: {
          label: 'Friendly reminder to a homeowner',
          subject: 'Invoice 0418 — rewiring at 22 Station Road',
          body:
            'Hi Mrs Okafor,\n\nThanks again for having me in to do the kitchen rewiring last week. I hope everything is working well.\n\nA quick reminder that invoice 0418 for £1,450 was due on 7 November. It covers the quoted work (£1,250) and the two extra sockets you asked for on the day (£200).\n\nYou can pay by bank transfer using the details on the invoice. If you’d like to spread the cost, let me know and we can agree something.\n\nThanks,\nDan Price\nPrice Electrical',
        },
      },
      { h2: 'Certificates are not a bargaining chip' },
      {
        p: 'If the work is notifiable under Building Regulations (Part P in England and Wales), your competent person scheme expects you to notify it within the required period, and the homeowner will receive the compliance certificate regardless of payment. Holding back safety paperwork to force payment can put you in breach of your scheme’s rules and leave the customer with an uncertified installation. Chase the money separately.',
      },
      { h2: 'If they say something’s wrong' },
      {
        p: 'Under the Consumer Rights Act 2015, a homeowner can ask you to put right work that wasn’t done with reasonable care and skill, and in some cases to reduce the price. Offer to come back and check. If the complaint is genuine, fix it; if it isn’t, explain why in writing, with photos and test results. Either way, a quick visit often ends the dispute and gets you paid.',
      },
      { h2: 'If they still won’t pay' },
      {
        ol: [
          'A firm second reminder with a date, offering a payment plan.',
          'A letter of claim under the Pre-Action Protocol for Debt Claims, with the information sheet and reply form, giving 30 days.',
          'A claim through Money Claim Online. For £1,450 the court fee is £80, added to the judgment if you win.',
        ],
      },
    ],
    related: [
      'builder-customer-refusing-final-payment-check-the-work-and-terms',
      'final-payment-reminder-before-legal-action-uk-wording',
      'how-to-chase-an-unpaid-invoice-as-a-sole-trader',
      'unpaid-construction-variations-proving-the-extra-work-was-agreed',
    ],
  },
  {
    slug: 'subcontractor-unpaid-by-a-main-contractor-what-to-check',
    title: 'Subcontractor Unpaid by a Main Contractor: What to Check',
    category: C,
    description:
      'Subcontractor not paid? Check your payment applications, due and final dates, pay less notices and “pay when paid” clauses, then use suspension and adjudication.',
    points: [
      'Review the subcontract payment application and its contractual timetable.',
      '“Pay when paid” clauses are generally unenforceable, except when an upstream party is insolvent.',
      'If no valid pay less notice was served, the sum in your application may be the sum due.',
      'You can suspend work on 7 days’ written notice, and adjudicate for a binding decision in about 28 days.',
    ],
    intro:
      'Subcontractors are protected by some of the strongest payment rules in UK law: the Construction Act. They only work if you follow the timetable in your subcontract — or the statutory Scheme if your subcontract doesn’t provide one.',
    blocks: [
      { h2: 'The payment timetable' },
      {
        table: {
          head: ['Step', 'What it means', 'Check'],
          rows: [
            ['Payment application', 'Your claim for the period’s work', 'Did you submit it on time, to the right person, in the right form?'],
            ['Due date', 'When payment becomes due', 'Set by the subcontract or the Scheme'],
            ['Payment notice', 'The payer says what it will pay, within 5 days of the due date', 'Was one served? If not, your application can stand as the payment notice'],
            ['Pay less notice', 'The payer says it will pay less, and why', 'Was it served before the deadline, with a basis for the figure?'],
            ['Final date for payment', 'The last day to pay', 'Has it passed?'],
          ],
        },
      },
      {
        p: 'If the payer didn’t serve a valid payment notice or pay less notice in time, the sum in your application (where it counts as the payment notice) is generally the sum it must pay by the final date for payment. That is often the single most important point in a subcontractor payment dispute.',
      },
      { h2: '“We haven’t been paid by the client”' },
      {
        p: 'A main contractor can’t usually make your payment depend on being paid itself. Section 113 of the Construction Act makes “pay when paid” clauses ineffective, except where an upstream party is insolvent. If you are told “we’ll pay you when we get paid”, ask for the clause in your subcontract they are relying on.',
      },
      { h2: 'Suspending work' },
      {
        p: 'If the notified sum isn’t paid in full by the final date for payment, you can suspend some or all of your work after giving at least 7 days’ written notice, stating the grounds. You are entitled to a reasonable extension of time and your reasonable costs of suspending and restarting.',
      },
      {
        email: {
          label: 'Notice of intention to suspend',
          subject: 'Notice of intention to suspend — Riverside Phase 2',
          body:
            'Dear Mr Hale,\n\nNOTICE OF INTENTION TO SUSPEND PERFORMANCE\n\nUnder our subcontract dated 3 March 2026 for drylining at Riverside Phase 2, payment application 7 for £18,400 was submitted on 25 September 2026. No payment notice or pay less notice was served. The final date for payment was 24 October 2026, and the sum remains unpaid.\n\nUnder section 112 of the Housing Grants, Construction and Regeneration Act 1996, I give notice that if the full sum is not paid within 7 days of this notice, we will suspend performance of all our obligations under the subcontract until payment is made in full.\n\nYours sincerely,\nRhys Morgan\nMorgan Interiors Ltd',
        },
      },
      { h2: 'Adjudication' },
      {
        p: 'You have a statutory right to refer a payment dispute to adjudication at any time. An adjudicator is appointed within days and usually decides within 28 days. The decision is binding until any later court or arbitration ruling, and the courts generally enforce it quickly. It costs more than a small claim, so it is usually worthwhile for larger sums. Take advice before you start.',
      },
      { h2: 'Retentions' },
      {
        p: 'Retention money (often 3–5%) is usually released in two halves: at practical completion and at the end of the defects period. Diarise both dates, and invoice for the release on the day it falls due.',
      },
    ],
    related: [
      'unpaid-construction-variations-proving-the-extra-work-was-agreed',
      'builder-customer-refusing-final-payment-check-the-work-and-terms',
      'can-you-charge-interest-on-an-overdue-invoice-in-the-uk',
      'what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk',
    ],
  },
  {
    slug: 'unpaid-construction-variations-proving-the-extra-work-was-agreed',
    title: 'Unpaid Construction Variations: Proving the Extra Work Was Agreed',
    category: C,
    description:
      'How to prove a construction variation was instructed when the client refuses to pay for extras: what evidence works, how to value it, and how to stop it next time.',
    points: [
      'Reconstruct who authorised the variation, when, and how.',
      'Texts, site photos and diary entries can prove an instruction even without a formal variation order.',
      'Value variations using contract rates where they exist, otherwise fair rates for the work.',
      'Next time, confirm every variation in writing before you start it.',
    ],
    intro:
      'Most variation disputes aren’t about whether extra work was done — it is obvious it was. They are about whether it was instructed, and at what price. Building that proof after the fact is possible, but takes method.',
    blocks: [
      { h2: 'What counts as an instruction?' },
      {
        p: 'Your contract may say variations must be instructed in writing by a named person. If it does, look first for anything in writing: emails, texts, WhatsApp messages, marked-up drawings. If the formal procedure wasn’t followed but the client clearly asked for and accepted the work, you may still be able to recover a fair price for it. Courts look at what both sides actually did, not just the paperwork.',
      },
      { h2: 'Evidence that works' },
      {
        table: {
          head: ['Evidence', 'What it shows'],
          rows: [
            ['Text or email asking for the change', 'The instruction itself'],
            ['Site diary note: “Client asked to move kitchen wall 300mm — agreed £650”', 'A record made at the time'],
            ['Photos before and after', 'That the work was extra to the original scope'],
            ['Revised drawings or a marked-up plan', 'What changed'],
            ['Client’s later messages referring to the change', 'That they knew about it and accepted it'],
            ['Supplier invoices for extra materials', 'Cost and timing'],
          ],
        },
      },
      { h2: 'Build a variations schedule' },
      {
        table: {
          caption: 'Example schedule',
          head: ['No.', 'Date', 'Description', 'Instructed by', 'Evidence', 'Value'],
          rows: [
            ['V1', '6 Oct', 'Move kitchen wall 300mm', 'Mrs Grant (on site)', 'Diary note, text of 6 Oct', '£650'],
            ['V2', '14 Oct', 'Extra double socket x 4', 'Mr Grant', 'WhatsApp 14 Oct', '£280'],
            ['V3', '20 Oct', 'Upgrade to engineered oak flooring', 'Mrs Grant', 'Email and supplier invoice', '£1,120'],
            ['Total', '', '', '', '', '£2,050'],
          ],
        },
      },
      {
        email: {
          label: 'Sending the variations schedule',
          subject: '14 Elm Road — variations £2,050',
          body:
            'Dear Mr and Mrs Grant,\n\nThank you for your message about the final account. I’ve attached a schedule of the three changes we made at your request during the job, with the date of each, who asked for it and the messages confirming it.\n\nThe variations total £2,050, and I’ve priced them at the same rates as the original quote. The original contract sum of £18,000 is not in dispute.\n\nIf you think any item wasn’t requested or the price isn’t fair, please let me know which, and why, by 28 November. Otherwise I’d be grateful for payment of the balance by 5 December.\n\nKind regards,\nMark Dean',
        },
      },
      { h2: 'Valuing the work' },
      {
        p: 'If your contract or quote has rates, use them. If not, price the variation at a fair rate: your actual time and materials, at your normal rates, with any reasonable margin. Show the working.',
      },
      { h2: 'Prevent it next time' },
      {
        ul: [
          'Confirm every change by text or email before you start: “As discussed, moving the wall 300mm will cost £650. OK to go ahead?”',
          'Keep a site diary, even a few lines a day.',
          'Send a running variations total with each interim invoice, so there are no surprises at the end.',
        ],
      },
    ],
    related: [
      'builder-customer-refusing-final-payment-check-the-work-and-terms',
      'subcontractor-unpaid-by-a-main-contractor-what-to-check',
      'what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk',
      'how-to-reply-when-a-customer-disputes-an-invoice-template',
    ],
  },
];
