import type { ArticleInput } from './types';

const C = 'Freelancers & Sole Traders';

export const freelancers: ArticleInput[] = [
  {
    slug: 'freelance-client-won-t-pay-a-practical-uk-guide',
    title: "Freelance Client Won't Pay: A Practical UK Guide",
    category: C,
    description:
      'Self-employed and not been paid? A step-by-step UK guide for freelancers: check who owes you, gather evidence, escalate, and use the small claims court.',
    points: [
      'Collect the brief, quote, acceptance, delivery record and correspondence before escalating.',
      'Work out who you contracted with: the company, or the individual who hired you.',
      'Freelancers have the same right to statutory interest and compensation as any business, if the client is a business.',
      'The small claims court is built for debts like yours: claims up to £10,000, with fees from £35.',
    ],
    intro:
      'Not being paid hits freelancers harder than most. There is no accounts department absorbing the shortfall, and chasing eats into time you could be billing. Here is the full process, from the first awkward email to a court claim, in the order that works.',
    blocks: [
      { h2: '1. Work out who owes you' },
      {
        p: 'If a marketing manager at Acme Ltd hired you, your contract is with Acme Ltd, not with them personally. If you were hired by an agency for its client, your contract is usually with the agency, even if the end client hasn’t paid the agency. If someone hired you for their own project, they owe you personally. Getting this right decides who you write to and who you would sue.',
      },
      { h2: '2. Gather the evidence' },
      {
        ul: [
          'The brief and quote, and the message saying “go ahead”.',
          'Drafts, approvals and the final delivery.',
          'The invoice and when you sent it.',
          'Every reminder and reply.',
        ],
      },
      {
        p: 'Even a WhatsApp thread can be a binding agreement. Export it now. See [what evidence to keep](/journal/what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk).',
      },
      { h2: '3. Chase in a clear sequence' },
      {
        table: {
          head: ['When', 'What'],
          rows: [
            ['Due date', '[Friendly reminder](/journal/first-payment-reminder-email-a-simple-uk-example)'],
            ['+7 days', '[Second reminder](/journal/second-payment-reminder-email-what-to-write-when-the-first-is-ignored) with a payment date'],
            ['+14 days', 'Phone call, then a firm email'],
            ['+21–30 days', '[Final demand](/journal/final-demand-for-payment-letter-uk-what-to-include) with interest if the client is a business'],
            ['After the deadline', 'Letter before action, then a court claim'],
          ],
        },
      },
      { h2: '4. Use your statutory rights' },
      {
        p: 'If your client is a business — a company, or even a sole trader buying for their business — you can add statutory interest (11.75% a year for invoices due July–December 2026) and fixed compensation of £40, £70 or £100 per invoice. You didn’t need to mention it in your terms. If the client is a private individual, these don’t apply.',
      },
      { h2: '5. Hold what you can, fairly' },
      {
        p: 'If you haven’t yet handed over final files, source files or full-resolution versions, and your terms say they are released on payment, you can keep holding them. Don’t take down or disable work you have already delivered without legal advice: it can put you in breach yourself. See [web designer client not paying](/journal/web-designer-client-not-paying-handle-the-handover-and-invoice).',
      },
      { h2: '6. The small claims court' },
      {
        p: 'In England and Wales, claims up to £10,000 normally go to the small claims track, designed for people without lawyers. You can file online through Money Claim Online. The court fee is £35 for claims up to £300, rising to £455 for claims of £5,000.01–£10,000, and it is added to the judgment if you win. Many freelancer claims are paid as soon as the client receives the court papers.',
      },
      {
        email: {
          label: 'Freelancer final demand — business client',
          subject: 'Final demand — invoice 112, £1,200',
          body:
            'Dear Ms Novak,\n\nOn 4 September Brightside Media Ltd commissioned me to write six blog articles for £1,200. I delivered them on 30 September, and you approved them on 2 October. Invoice 112 was due on 30 October.\n\nDespite reminders on 31 October, 7 November and 14 November, it remains unpaid.\n\nThe total now due is £1,200, plus fixed compensation of £70 and statutory interest at 11.75% a year (£0.39 a day from 31 October). Please pay by 2 December.\n\nIf payment isn’t received by then, I will issue a claim in the County Court without further notice.\n\nYours sincerely,\nLaura Mills',
        },
      },
      { h2: 'Make the next project safer' },
      {
        ul: [
          'Written terms before starting, including payment terms and when files are released.',
          'A deposit of 25–50% for new clients.',
          'Stage payments on anything longer than a month.',
          'Ask who pays invoices and whether a PO number is needed.',
        ],
      },
    ],
    related: [
      'how-to-chase-an-unpaid-invoice-as-a-sole-trader',
      'freelance-client-has-not-paid-the-deposit-what-to-do',
      'final-demand-for-payment-letter-uk-what-to-include',
      'when-to-stop-sending-invoice-reminders-and-choose-a-next-step',
    ],
  },
  {
    slug: 'how-to-chase-an-unpaid-invoice-as-a-sole-trader',
    title: 'How to Chase an Unpaid Invoice as a Sole Trader',
    category: C,
    description:
      'A sole trader’s guide to chasing unpaid invoices: identify the right debtor, know which rules apply, use statutory interest, and take the next step yourself.',
    points: [
      'Identify the correct debtor: an individual, a limited company or another legal entity.',
      'As a sole trader you are a business, so you can claim statutory interest from other businesses.',
      'Claiming against another sole trader? The court’s debt protocol treats them as an individual: allow 30 days.',
      'You can bring a small claim yourself, in your own name, trading as your business name.',
    ],
    intro:
      'Being a sole trader doesn’t limit your rights when a customer won’t pay. You have the same tools as a limited company. The main things to get right are who you are chasing, and which rules apply to them.',
    blocks: [
      { h2: 'Who is your customer, legally?' },
      {
        table: {
          head: ['Customer type', 'How to tell', 'Debt protocol applies?', 'Statutory interest?'],
          rows: [
            ['Limited company', '“Ltd” or “PLC”; listed on Companies House', 'No — use the general pre-action conduct rules', 'Yes'],
            ['Sole trader', 'Trades under their own name or a trading name; not on Companies House', 'Yes — 30 days and the protocol forms', 'Yes'],
            ['Partnership', 'Several owners, no “Ltd”', 'Yes', 'Yes'],
            ['Private individual', 'Bought for personal use', 'Yes', 'No (unless your terms included fair interest)'],
          ],
        },
      },
      {
        p: 'Check before you write formally. Many small businesses trade under a brand that isn’t their legal name: “Green Leaf Gardens” might be a limited company or a sole trader named Ben Shaw. Invoices and letters should name the legal person, for example “Ben Shaw, trading as Green Leaf Gardens”.',
      },
      { h2: 'Your rights as a sole trader' },
      {
        ul: [
          'Statutory interest at 8% above the reference rate (11.75% for debts due July–December 2026) when your customer is a business.',
          'Fixed compensation of £40, £70 or £100 per late business invoice.',
          'The right to bring a court claim in your own name. You don’t need a solicitor for the small claims track.',
        ],
      },
      { h2: 'Running your own collections' },
      {
        ol: [
          'Reminders on a fixed schedule: due date, +7 days, +14 days.',
          'A phone call before anything formal.',
          'A final demand. If the debtor is an individual or sole trader, send it as a letter of claim with the Pre-Action Protocol information sheet and reply form, giving 30 days.',
          'A claim on Money Claim Online if unpaid.',
        ],
      },
      {
        email: {
          label: 'Sole trader to a business customer',
          subject: 'Invoice 058 — £640, 21 days overdue',
          body:
            'Dear Ben,\n\nInvoice 058 for £640 for garden design work at The Old Forge was due on 20 October and is now 21 days overdue. I emailed on 21 and 28 October.\n\nPlease pay by 18 November. As this is a business invoice, I’m entitled to add statutory interest and £40 compensation if it remains unpaid, though I’d rather not.\n\nThanks,\nKate Doyle\nKate Doyle Landscapes',
        },
      },
      { h2: 'Tax and your unpaid invoices' },
      {
        p: 'If you use cash basis accounting, which most sole traders now do by default, you only pay tax on money you have actually received, so an unpaid invoice isn’t taxed until it is paid. If you use traditional (accruals) accounting, you may already have counted the income and can claim relief if the debt turns out to be bad. Check with your accountant.',
      },
    ],
    related: [
      'freelance-client-won-t-pay-a-practical-uk-guide',
      'final-payment-reminder-before-legal-action-uk-wording',
      'can-you-charge-interest-on-an-overdue-invoice-in-the-uk',
      'overdue-invoice-letter-template-for-uk-small-businesses',
    ],
  },
  {
    slug: 'freelance-client-has-not-paid-the-deposit-what-to-do',
    title: 'Freelance Client Has Not Paid the Deposit: What to Do',
    category: C,
    description:
      'A client hasn’t paid your deposit. Whether to start work anyway, how to ask for it, and wording that protects your diary without losing the job.',
    points: [
      'Check whether the deposit was a condition of starting work, or simply the first payment.',
      'If it was a condition, don’t start until it is paid; starting anyway waives your protection.',
      'Hold the booking for a set time, then release it in writing.',
      'A client who won’t pay a deposit is telling you how the final invoice will go.',
    ],
    intro:
      'A deposit protects your time. When a client books you and then doesn’t pay it, the risk isn’t just that one payment — it is that you turn down other work, start the project, and end up chasing the whole fee.',
    blocks: [
      { h2: 'What did your terms say?' },
      {
        table: {
          head: ['Your terms say…', 'What it means'],
          rows: [
            ['“Work begins on receipt of the 50% deposit.”', 'Payment is a condition. You don’t have to start until it is paid.'],
            ['“50% payable on booking, 50% on completion.”', 'The deposit is due now, but the wording doesn’t clearly stop you starting.'],
            ['Nothing in writing', 'You can still ask, but you have little leverage. Fix your terms for next time.'],
          ],
        },
      },
      { h2: 'Don’t start the work' },
      {
        p: 'Starting without the deposit, “to be nice”, usually removes your leverage. Once work has begun, the client has the benefit and you are back to chasing. If your terms made the deposit a condition, it is entirely reasonable to wait.',
      },
      {
        email: {
          label: 'Deposit reminder',
          subject: 'Deposit for the brand project — invoice 210',
          body:
            'Hi Marcus,\n\nI’m looking forward to starting on the brand project. As agreed, work begins once the 50% deposit (£750, invoice 210) is received. I haven’t seen it come through yet.\n\nI’ve pencilled in a start date of Monday 24 November. To keep that slot, could you pay the deposit by Thursday 20 November?\n\nIf anything has changed on your side, just let me know.\n\nBest,\nZara',
        },
      },
      { h2: 'Release the booking if needed' },
      {
        p: 'If the date passes, release the slot in writing. That protects you from a client who later claims you “let them down”, and frees you to take other work.',
      },
      {
        email: {
          label: 'Releasing the slot',
          subject: 'Brand project — booking released',
          body:
            'Hi Marcus,\n\nAs I haven’t received the deposit, I’ve released the slot I was holding from 24 November. I’d still be glad to do the project; if you’d like to go ahead, pay the deposit and I’ll offer you the next available start date.\n\nBest,\nZara',
        },
      },
      { h2: 'Can you charge a cancellation fee?' },
      {
        p: 'Only if your agreed terms included one, and it must be a genuine estimate of your loss, not a penalty. If you turned down other work for this booking and your terms covered it, you can invoice the cancellation fee. Otherwise, release the slot and move on. For bookings tied to a date, such as weddings or events, see [the photographer’s guide](/journal/photographer-chasing-a-late-balance-or-cancellation-fee).',
      },
      { h2: 'Make deposits easy to pay' },
      {
        ul: [
          'Send the deposit invoice with the contract, not later.',
          'Use a payment link as well as bank details.',
          'Put the deposit condition in bold in your proposal, not buried in the terms.',
        ],
      },
    ],
    related: [
      'photographer-chasing-a-late-balance-or-cancellation-fee',
      'freelance-client-won-t-pay-a-practical-uk-guide',
      'how-to-chase-an-overdue-invoice-without-losing-the-customer',
      'web-designer-client-not-paying-handle-the-handover-and-invoice',
    ],
  },
  {
    slug: 'web-designer-client-not-paying-handle-the-handover-and-invoice',
    title: 'Web Designer Client Not Paying? Handle the Handover and Invoice',
    category: C,
    description:
      'For web designers and developers: can you withhold the site, take it down, or keep logins when a client won’t pay? What’s fair, what’s risky, and what to write.',
    points: [
      'Separate payment milestones from access, hosting and ownership provisions in your contract.',
      'Withholding work you haven’t handed over yet is usually fine; taking down a live site is risky.',
      'Never hold a client’s own domain, email or data hostage.',
      'Write to the client before acting, setting out what you will hold and why.',
    ],
    intro:
      'Web projects come with leverage that other freelance work doesn’t: you often control the hosting, the logins or the final launch. Using that leverage properly can get you paid. Using it badly can put you in breach and make you the one facing a claim.',
    blocks: [
      { h2: 'Three things that are easy to mix up' },
      {
        table: {
          head: ['', 'What it is', 'Can you withhold it for non-payment?'],
          rows: [
            ['The work', 'Design, code, content you produced', 'Usually, if not yet handed over and your terms tie handover to payment'],
            ['Ownership / IP', 'Copyright in your design and code', 'Depends on your contract — often it only passes on full payment'],
            ['The client’s own assets', 'Their domain, emails, customer data, content they supplied', 'No. Return access to anything that is theirs.'],
          ],
        },
      },
      { h2: 'Before launch: hold the launch' },
      {
        p: 'If the final payment is due before go-live and hasn’t been paid, it is generally fine to wait. Tell the client clearly that the site is ready to launch as soon as the invoice is settled. That is the strongest and safest position you will ever have.',
      },
      { h2: 'After launch: don’t pull the plug without advice' },
      {
        p: 'Disabling a live site, changing passwords to lock the client out, or redirecting the domain can cause the client real losses, and a court may treat it as a breach on your part, particularly if your contract doesn’t expressly allow it. If you host the site and the hosting itself is unpaid, you can give written notice that hosting will end on a set date, as with any other unpaid service. Keep it separate from the design invoice and give reasonable notice.',
      },
      {
        email: {
          label: 'Before launch',
          subject: 'Your new site is ready — final invoice 0907',
          body:
            'Hi Helen,\n\nGood news: the new site is finished and tested, and ready to go live. As set out in our agreement, the final 50% (invoice 0907, £1,350) is due before launch.\n\nAs soon as it’s paid I’ll switch the domain over and send you the admin logins and handover guide. If you pay by Wednesday, we can launch on Thursday morning as planned.\n\nBest,\nOllie',
        },
      },
      {
        email: {
          label: 'Site live, invoice unpaid',
          subject: 'Invoice 0907 — overdue, and what happens to licences and hosting',
          body:
            'Dear Helen,\n\nThe site went live on 30 October and invoice 0907 for £1,350 was due on 13 November. It remains unpaid despite reminders on 14 and 21 November.\n\nUnder clause 8 of our agreement, ownership of the design and code passes to you once the project is paid in full. Until then, the licence to use them is conditional on payment.\n\nPlease pay by 5 December. Separately, the hosting I provide is paid monthly and also unpaid. If the hosting invoice isn’t paid by 5 December, I’ll end the hosting service on 19 December, and I’ll help you move the site to another host once all outstanding invoices are settled.\n\nYour domain and email accounts are registered in your name and aren’t affected.\n\nKind regards,\nOllie Brennan',
        },
      },
      { h2: 'Fix it in your contract' },
      {
        ul: [
          'Final payment due before launch or before transfer of logins.',
          'Copyright and ownership pass on payment in full.',
          'Hosting and maintenance invoiced separately, with a notice period for suspension.',
          'The client registers the domain in their own name from the start.',
        ],
      },
    ],
    related: [
      'graphic-designer-s-final-invoice-handling-approval-and-source-files',
      'freelance-client-won-t-pay-a-practical-uk-guide',
      'how-to-reply-when-a-customer-disputes-an-invoice-template',
      'agency-client-has-not-paid-the-monthly-retainer',
    ],
  },
  {
    slug: 'copywriter-unpaid-invoice-deal-with-drafts-revisions-and-sign-off',
    title: 'Copywriter Unpaid Invoice: Deal with Drafts, Revisions and Sign-Off',
    category: C,
    description:
      'Copywriter not paid? How to handle “it’s not finished” and endless revisions, prove sign-off, and get paid for copy the client is already using.',
    points: [
      'Gather the brief, draft submissions, feedback and the approval or acceptance record.',
      'Count revision rounds against what you quoted; extra rounds are extra work.',
      'A client publishing your copy is strong evidence they accepted it.',
      'Don’t let a vague “not quite right” hold the whole invoice hostage.',
    ],
    intro:
      'Copywriting disputes rarely start with “we won’t pay.” They start with “it’s not quite there yet,” followed by silence. The fix is to anchor every conversation to what you agreed: the brief, the number of revisions, and what counts as sign-off.',
    blocks: [
      { h2: 'Reconstruct the project' },
      {
        table: {
          caption: 'Example timeline',
          head: ['Date', 'Event'],
          rows: [
            ['1 Oct', 'Brief agreed: 5 product pages, 2 rounds of revisions, £900'],
            ['10 Oct', 'Draft 1 sent'],
            ['14 Oct', 'Feedback received'],
            ['17 Oct', 'Draft 2 (revision round 1) sent'],
            ['20 Oct', 'Minor tweaks requested'],
            ['22 Oct', 'Draft 3 (revision round 2) sent. Client: “Perfect, thanks!”'],
            ['29 Oct', 'Pages published on the client’s site'],
          ],
        },
      },
      {
        p: 'That timeline answers most objections on its own. Two rounds were quoted and delivered, the client approved the copy, and the copy is in use.',
      },
      { h2: '“It’s not finished”' },
      {
        p: 'If the client says the copy isn’t finished after the agreed rounds, they are asking for more work. You can offer a further round at your usual rate, but the original fee is due for what was delivered and approved.',
      },
      {
        email: {
          label: 'Responding to “not quite right”',
          subject: 'Product pages — invoice 0315',
          body:
            'Hi Grace,\n\nThanks for your note. Our agreement of 1 October covered five product pages with two rounds of revisions. Both rounds were completed, and you confirmed on 22 October that the final version was “perfect”. I can also see the pages are now live on your site.\n\nInvoice 0315 for £900 is therefore due, and I’d be grateful for payment by 21 November.\n\nIf you’d like further changes, I’m happy to do another round at £150. Just let me know what you have in mind.\n\nBest,\nNoah',
        },
      },
      { h2: 'Copy in use = copy accepted' },
      {
        p: 'If the client has published your copy, they are using the work you were asked to produce. That is strong evidence the work was accepted, and it makes refusing to pay hard to justify. Take dated screenshots of where it appears.',
      },
      { h2: 'Can you stop them using it?' },
      {
        p: 'If your terms say copyright transfers only on full payment, the client is using your copyright without the transfer having happened. Pointing that out calmly is a fair lever. Formal copyright action is expensive and rarely worth it for small sums, so treat it as a lever, not a threat.',
      },
      { h2: 'Next time' },
      {
        ul: [
          'State the number of revision rounds and what counts as a round.',
          'Define sign-off: “Copy is approved when you confirm in writing or publish it.”',
          'Invoice on approval, not on publication, which you don’t control.',
        ],
      },
    ],
    related: [
      'freelance-writer-not-paid-check-the-commission-edits-and-kill-fee',
      'how-to-reply-when-a-customer-disputes-an-invoice-template',
      'graphic-designer-s-final-invoice-handling-approval-and-source-files',
      'freelance-client-won-t-pay-a-practical-uk-guide',
    ],
  },
  {
    slug: 'photographer-chasing-a-late-balance-or-cancellation-fee',
    title: 'Photographer Chasing a Late Balance, Deposit or Cancellation Fee',
    category: C,
    description:
      'For UK photographers: chasing an unpaid booking deposit, a late balance before or after the shoot, and cancellation fees, with what your contract needs to say.',
    points: [
      'Review the booking agreement, deposit, date and cancellation provisions before chasing.',
      'No deposit, no booking: confirm the date is only held once the deposit is paid.',
      'For weddings and events, ask for the balance before the date, not after delivery.',
      'Cancellation fees must reflect your genuine loss; non-refundable deposits need clear terms.',
    ],
    intro:
      'Photography payments are tied to dates that can’t move. A wedding happens once. That makes deposits and balances more important than in most freelance work, and it means your contract has to be clear about what happens if a client pays late or cancels.',
    blocks: [
      { h2: 'The booking deposit' },
      {
        p: 'First check that the client accepted your booking terms: a signed contract, or an email agreeing to them. Then check the deposit requirement. If you told them the date is secured only on payment of the deposit, the date isn’t theirs until it is paid.',
      },
      {
        email: {
          label: 'Deposit not received',
          subject: 'Your booking for 13 June 2027 — deposit',
          body:
            'Hi Ellie and Sam,\n\nThank you for choosing me for your wedding on 13 June 2027 — I’m really looking forward to it.\n\nAs set out in the booking agreement, the date is secured once the £400 deposit is received. I haven’t seen it come through yet. Could you pay it by Friday 21 November? I’m holding the date until then, but after that I’ll need to release it if other enquiries come in.\n\nBest wishes,\nMaya',
        },
      },
      { h2: 'The balance' },
      {
        p: 'For weddings and events, the safest practice is to ask for the balance before the event, commonly four to six weeks before. If the balance is due after delivery, chase it like any other invoice, and remember that if you haven’t delivered the full gallery yet, your contract may let you hold it until payment.',
      },
      {
        table: {
          head: ['Balance due…', 'Lever if unpaid', 'Risk'],
          rows: [
            ['4–6 weeks before the event', 'You can decline to attend under your terms', 'Low, if the terms are clear and you gave notice'],
            ['On the day', 'Awkward to enforce', 'Medium'],
            ['After delivery', 'Hold the full-resolution gallery until payment, if your terms allow', 'Higher: you’ve already done the work'],
          ],
        },
      },
      { h2: 'Cancellation fees' },
      {
        p: 'If a client cancels, what you can keep or charge depends on your contract. Fees must be a genuine estimate of your loss — for example, the work you turned down for that date — rather than a penalty. With private clients, consumer law also requires terms to be fair and clearly brought to their attention. A sliding scale is usually seen as fairest: a small non-refundable booking fee, then a larger share as the date approaches and your chance of rebooking falls.',
      },
      {
        email: {
          label: 'Invoicing a cancellation fee',
          subject: 'Cancellation of your 13 June 2027 booking',
          body:
            'Dear Ellie and Sam,\n\nI’m sorry to hear the wedding plans have changed. Thank you for letting me know.\n\nUnder clause 6 of our booking agreement, cancellations made between 3 and 6 months before the date are charged at 50% of the total fee, to cover the bookings I turned down for that date. The £400 deposit counts towards that, so the remaining amount is £600 (invoice 0612, attached).\n\nIf I’m able to rebook the date, I’ll refund what I can. Please pay by 15 December.\n\nWith best wishes,\nMaya',
        },
      },
      { h2: 'Contract checklist' },
      {
        ul: [
          'Date held only on receipt of the deposit.',
          'Balance due a fixed number of weeks before the event.',
          'A cancellation scale tied to notice periods.',
          'Delivery of the full gallery on payment in full.',
          'For commercial clients: a reference to statutory interest on late payment.',
        ],
      },
    ],
    related: [
      'freelance-client-has-not-paid-the-deposit-what-to-do',
      'freelance-client-won-t-pay-a-practical-uk-guide',
      'how-to-chase-an-overdue-invoice-without-losing-the-customer',
      'what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk',
    ],
  },
  {
    slug: 'freelance-writer-not-paid-check-the-commission-edits-and-kill-fee',
    title: 'Freelance Writer Not Paid: Check the Commission, Edits and Kill Fee',
    category: C,
    description:
      'For journalists and freelance writers: chasing payment from publications, “on publication” terms, kill fees, unpublished pieces and editors who go quiet.',
    points: [
      'Locate the accepted commission, deadlines and payment terms.',
      '“Paid on publication” can mean waiting forever if the piece never runs; push for a date.',
      'A kill fee only applies if it was agreed; without one, a commissioned piece delivered as briefed is owed in full.',
      'Go past the editor to the publication’s accounts or contributors’ desk.',
    ],
    intro:
      'Writers are often paid on terms that would horrify other freelancers: on publication, months later, through a contributor system no one at the publication seems to understand. The fixes are knowing what you agreed and finding the person who actually releases payment.',
    blocks: [
      { h2: 'What was the commission?' },
      {
        ul: [
          'The commissioning email: topic, word count, deadline and fee.',
          'Payment terms: on acceptance, on publication, or a fixed number of days after invoice.',
          'Any kill fee for pieces commissioned but not used.',
          'Rights: first UK serial rights, all rights, or something else.',
        ],
      },
      { h2: '“Paid on publication” — and it hasn’t run' },
      {
        p: 'If the piece was delivered, accepted and is now sitting unpublished, “on publication” can become an indefinite delay. Write to the editor asking for either a publication date or payment now. If the commission didn’t say payment depended on publication, you can argue that payment is due within a reasonable time of delivery and acceptance.',
      },
      {
        email: {
          label: 'Accepted piece, no publication date',
          subject: 'Payment for “The Last Ferry” — delivered 3 September',
          body:
            'Hi Ben,\n\nI delivered “The Last Ferry” (1,500 words, £375) on 3 September, and you confirmed it was accepted on 8 September. It hasn’t run yet, and I haven’t been paid.\n\nCould you let me know either when it’s scheduled, or arrange payment now? Two months after acceptance feels like the right point to settle it either way.\n\nThanks,\nRosa',
        },
      },
      { h2: 'Kill fees' },
      {
        p: 'A kill fee — often 25–50% of the agreed fee — is what a publication pays when it cancels a commissioned piece. It only applies if it was agreed. If no kill fee was agreed and you delivered what was briefed, on time, the publication is generally liable for the full fee, even if it decides not to run the piece. If the piece was rejected because it didn’t meet the brief, the position is different, so look at the brief and any feedback carefully.',
      },
      { h2: 'Going past the editor' },
      {
        p: 'Editors move on, and freelance budgets sit with someone else. Ask for the contributors’ payments or accounts payable contact, and send them your invoice, the commissioning email and the acceptance. Copy the editor. That one step resolves a surprising number of “lost” writer payments.',
      },
      { h2: 'Business rights apply to you too' },
      {
        p: 'Publications are businesses, so if payment is late you can claim statutory interest and the fixed £40–£100 compensation per invoice. A brief mention in a reminder often moves your invoice up the queue. See [can you charge interest on an overdue invoice?](/journal/can-you-charge-interest-on-an-overdue-invoice-in-the-uk)',
      },
    ],
    related: [
      'copywriter-unpaid-invoice-deal-with-drafts-revisions-and-sign-off',
      'business-customer-says-the-invoice-is-still-in-approval',
      'uk-late-payment-compensation-40-70-and-100-explained',
      'freelance-client-won-t-pay-a-practical-uk-guide',
    ],
  },
  {
    slug: 'graphic-designer-s-final-invoice-handling-approval-and-source-files',
    title: 'Graphic Designer’s Final Invoice: Handling Approval and Source Files',
    category: C,
    description:
      'For graphic designers: getting the final invoice paid, what counts as approval, whether to hand over source files before payment, and wording for each step.',
    points: [
      'Identify each approved milestone and any outstanding revision round.',
      'Deliver watermarked or low-resolution proofs for approval; release final files on payment.',
      'Source files are a separate deliverable — only include them if you agreed to.',
      'Don’t let a new request after approval become a reason to delay paying for the approved work.',
    ],
    intro:
      'For designers, the final invoice often lands just as the client gets the files they need. That is exactly why the order of delivery matters: approve, invoice, pay, then hand over finals.',
    blocks: [
      { h2: 'A delivery order that protects you' },
      {
        ol: [
          'Share proofs: watermarked PNGs or PDFs.',
          'Get written approval: “Approved, thank you” by email is enough.',
          'Issue the final invoice.',
          'On payment, deliver final artwork, and source files if they were included.',
        ],
      },
      { h2: 'What counts as approval?' },
      {
        p: 'Any clear written confirmation: “Love it, go ahead”, “That’s the one”, or the client sending the design to print. If your contract defines approval, follow that definition. If the client starts using a proof publicly, that is strong evidence it was accepted.',
      },
      { h2: 'Source files' },
      {
        table: {
          head: ['Your quote said…', 'What to do'],
          rows: [
            ['Source files included', 'Deliver them on payment, along with the finals'],
            ['Source files available at an extra fee', 'Quote the fee; they are not part of this invoice'],
            ['Nothing about source files', 'Industry norm varies; finals are owed, and source files are a reasonable separate charge'],
          ],
        },
      },
      {
        email: {
          label: 'Approved, invoice sent, finals on payment',
          subject: 'Logo — final files ready on payment (invoice 0441)',
          body:
            'Hi Kian,\n\nThanks for approving the logo yesterday — I’m really pleased with how it’s come together.\n\nI’ve attached invoice 0441 for the final 50% (£450). As soon as it’s paid, I’ll send the full logo pack: print-ready vectors, web PNGs and the brand colour sheet.\n\nBest,\nSofia',
        },
      },
      {
        email: {
          label: 'New request after approval',
          subject: 'Re: logo — another variation',
          body:
            'Hi Kian,\n\nHappy to explore a stacked version of the logo. That’s outside the original brief, so I’d quote £120 for it.\n\nThe approved logo is complete, so invoice 0441 is due on 18 November as agreed. Once it’s paid I’ll send the final files and can start on the variation.\n\nBest,\nSofia',
        },
      },
      { h2: 'If they already have the finals' },
      {
        p: 'If you handed over finals before payment, you can still rely on your contract. If it said ownership passes on full payment, remind the client of that calmly in your reminders. Chase the invoice through the normal [sequence](/journal/freelance-client-won-t-pay-a-practical-uk-guide). Next time, keep finals until payment.',
      },
    ],
    related: [
      'web-designer-client-not-paying-handle-the-handover-and-invoice',
      'copywriter-unpaid-invoice-deal-with-drafts-revisions-and-sign-off',
      'freelance-client-has-not-paid-the-deposit-what-to-do',
      'how-to-reply-when-a-customer-disputes-an-invoice-template',
    ],
  },
  {
    slug: 'virtual-assistant-chasing-an-overdue-client-invoice',
    title: 'Virtual Assistant Chasing an Overdue Client Invoice',
    category: C,
    description:
      'For virtual assistants: chasing an overdue invoice for hourly or retainer work, backing it up with time logs, and wording that keeps the client relationship intact.',
    points: [
      'Reconcile logged hours, approved tasks and reimbursable expenses before chasing.',
      'Send your time log with the invoice so hours can’t be questioned later.',
      'For retainers, invoice in advance and pause work if a month goes unpaid.',
      'You work inside their business, so a calm, specific reminder works better than a firm one at first.',
    ],
    intro:
      'Virtual assistants often know the client’s business better than anyone, but can still find payment slipping down their client’s list. Clear time records and invoicing in advance prevent most problems; a well-pitched reminder sorts most of the rest.',
    blocks: [
      { h2: 'Get the numbers watertight' },
      {
        ul: [
          'Export your time log for the invoice period, with dates, tasks and time spent.',
          'Separate approved extra tasks from your usual scope, and note who approved them.',
          'List expenses (software, purchases made on their behalf) with receipts.',
          'Check that the total matches the invoice exactly.',
        ],
      },
      { h2: 'Hourly work vs retainers' },
      {
        table: {
          head: ['Arrangement', 'Best invoicing practice', 'If unpaid'],
          rows: [
            ['Hourly, invoiced monthly in arrears', 'Attach the time log; 7–14 day terms', 'Chase normally; consider moving to payment in advance'],
            ['Retainer (fixed hours a month)', 'Invoice at the start of the month', 'Pause work until paid, after written notice'],
            ['Pay-as-you-go hours bundle', 'Payment before the hours are used', 'No hours until paid'],
          ],
        },
      },
      {
        email: {
          label: 'Overdue invoice with time log',
          subject: 'October invoice (0098) — £720, overdue',
          body:
            'Hi Daniel,\n\nA quick note that invoice 0098 for October support (24 hours, £720) was due on 7 November. I’ve attached the time log again, showing each task and the time spent.\n\nCould you let me know when it will be paid? If anything on the log needs explaining, I’m happy to go through it.\n\nThanks,\nPriya',
        },
      },
      { h2: 'Pausing work' },
      {
        p: 'If a retainer invoice is unpaid, it is reasonable to pause work after giving notice, especially if your terms say retainers are payable in advance. Be specific about the date, and make sure anything time-critical is handed back so you are not blamed for a missed deadline.',
      },
      {
        email: {
          label: 'Notice of pause',
          subject: 'Retainer — November invoice and pause in support',
          body:
            'Hi Daniel,\n\nThe November retainer invoice (0105, £800) was due on 1 November and remains unpaid, along with October’s invoice 0098.\n\nAs our agreement says retainers are paid in advance, I’ll pause support from Monday 17 November if both invoices aren’t settled by then. I’ve listed the open tasks below so nothing is missed in the meantime.\n\nI’d much rather keep going, so do let me know if there’s a problem I can help with.\n\nBest,\nPriya',
        },
      },
      {
        p: 'If the client is a business — which nearly all VA clients are — you can also add statutory interest and compensation to a late invoice. See [UK late payment compensation](/journal/uk-late-payment-compensation-40-70-and-100-explained).',
      },
    ],
    related: [
      'agency-client-has-not-paid-the-monthly-retainer',
      'freelance-client-won-t-pay-a-practical-uk-guide',
      'how-to-chase-an-overdue-invoice-without-losing-the-customer',
      'uk-late-payment-compensation-40-70-and-100-explained',
    ],
  },
  {
    slug: 'tutor-has-an-overdue-invoice-agreeing-fees-with-a-parent',
    title: 'Tutor Has an Overdue Invoice: Agreeing Fees with a Parent',
    category: C,
    description:
      'For private tutors: chasing unpaid lesson fees from parents, handling missed-lesson charges, and setting up payment in advance, with friendly wording.',
    points: [
      'Check the agreed fee, lesson attendance and cancellation policy.',
      'Parents are consumers, so statutory business interest doesn’t apply; your terms do.',
      'Separate the conversation about money from the child’s lessons.',
      'Move to payment in advance, by the block or by the month, to stop arrears building.',
    ],
    intro:
      'Chasing a parent for lesson fees can feel especially awkward: you are working with their child and you see them every week. A clear, kind written message and a simple change to how you take payment usually solves it for good.',
    blocks: [
      { h2: 'Check your records' },
      {
        table: {
          caption: 'Example statement',
          head: ['Date', 'Lesson', 'Fee', 'Paid'],
          rows: [
            ['2 Oct', 'Maths, 1 hour', '£35', 'Yes'],
            ['9 Oct', 'Maths, 1 hour', '£35', 'No'],
            ['16 Oct', 'Cancelled by parent same day', '£35 (per cancellation policy)', 'No'],
            ['23 Oct', 'Maths, 1 hour', '£35', 'No'],
            ['Total owed', '', '£105', ''],
          ],
        },
      },
      { h2: 'Keep it away from the lesson' },
      {
        p: 'Don’t raise unpaid fees in front of the student, or ask the child to pass on a message. Email or text the parent directly, in a friendly tone. Most late payment from parents is genuine forgetfulness.',
      },
      {
        email: {
          label: 'Friendly reminder to a parent',
          subject: 'Lesson fees for October — £105',
          body:
            'Hi Claire,\n\nI hope you’re well. Ava is doing really well with fractions.\n\nI’ve attached a summary of October’s lessons, which shows £105 outstanding: lessons on 9 and 23 October, and the late cancellation on 16 October under the 24-hour cancellation policy.\n\nCould you pay by Friday? My bank details are on the summary.\n\nThanks so much,\nTom',
        },
      },
      { h2: 'Late cancellation charges' },
      {
        p: 'Parents are consumers, so your cancellation policy needs to be clear, agreed at the start, and fair. Charging for cancellations made with less than 24 hours’ notice is common and generally accepted when it was explained upfront. If a parent pushes back on a one-off cancellation charge, waiving it once can be worth more than the £35.',
      },
      { h2: 'If it builds up' },
      {
        p: 'If fees remain unpaid after a couple of reminders, say kindly but clearly that lessons will pause until the account is up to date. If a large sum is owed and the parent stops responding, the usual consumer debt route applies: a letter of claim under the Pre-Action Protocol for Debt Claims, then a small claim if needed. Statutory late payment interest doesn’t apply to private customers.',
      },
      { h2: 'Prevent it' },
      {
        ul: [
          'Ask for payment in advance — monthly, or for a block of lessons.',
          'Put your fee and cancellation policy in a short written agreement at the start.',
          'Send a simple monthly statement, even when everything is paid.',
        ],
      },
    ],
    related: [
      'first-payment-reminder-email-a-simple-uk-example',
      'how-to-chase-an-unpaid-invoice-as-a-sole-trader',
      'client-asked-for-more-time-to-pay-an-invoice-how-to-respond',
      'freelance-client-has-not-paid-the-deposit-what-to-do',
    ],
  },
];
