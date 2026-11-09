import type { ArticleInput } from './types';

const C = 'Core Invoice Chasing';

export const chasing: ArticleInput[] = [
  {
    slug: 'first-payment-reminder-email-a-simple-uk-example',
    title: 'First Payment Reminder Email: A Simple UK Example',
    category: C,
    description:
      'A free, gentle first reminder email for an overdue invoice, with when to send it, the subject line that gets opened, and three versions to copy.',
    points: [
      'A first reminder should assume an administrative delay where no dispute is known.',
      'Send it on the due date or the day after; waiting a week makes the late payment feel normal.',
      'Put the invoice number, amount and due date in the subject line so it can be found and forwarded.',
      'Reattach the invoice and the payment details, so the customer can pay without searching.',
    ],
    intro:
      'The first reminder is the easiest one to send and the one people put off longest. It should be light, helpful and impossible to misread. Below are three versions: an email, a short message, and a pre-due-date nudge.',
    blocks: [
      { h2: 'When to send it' },
      {
        table: {
          head: ['Timing', 'Use it when'],
          rows: [
            ['3 days before the due date', 'New clients, larger invoices, or anyone who has paid late before'],
            ['On the due date or the next working day', 'Your default for everyone else'],
            ['7 days after the due date', 'Only if you have a long, reliable relationship and a single slip is out of character'],
          ],
        },
      },
      {
        p: 'Waiting a week or more “to be polite” mostly teaches clients that your due date is a suggestion. A reminder the day after the due date isn’t rude; it shows you are organised.',
      },
      { h2: 'Version 1: gentle reminder email' },
      {
        email: {
          label: 'Gentle first reminder',
          subject: 'Invoice 1042 — £850, due 3 November',
          body:
            'Hi Sam,\n\nI hope you’re well. Just a friendly reminder that invoice 1042 for £850 was due on 3 November. I’ve attached it again for convenience.\n\nPayment details: Jo Smith Design, sort code 00-00-00, account 00000000, reference 1042.\n\nIf it has already been paid, thank you, and please ignore this. If it needs to go to someone else, let me know who and I’ll send it over.\n\nMany thanks,\nJo',
        },
      },
      { h2: 'Version 2: a short message' },
      {
        p: 'For clients you usually talk to by WhatsApp or text, a short message often works better than email. Follow it with the invoice attached.',
      },
      {
        email: {
          label: 'Text or WhatsApp',
          subject: '(no subject)',
          body: 'Hi Sam, quick one — invoice 1042 (£850) was due on Monday. I’ve emailed it over again. Could you let me know when it’ll be paid? Thanks! Jo',
        },
      },
      { h2: 'Version 3: before the due date' },
      {
        email: {
          label: 'Pre-due-date nudge',
          subject: 'Invoice 1042 — due Monday 3 November',
          body:
            'Hi Sam,\n\nA quick heads-up that invoice 1042 for £850 is due on Monday 3 November. I’ve attached a copy in case it would help to pass it to accounts ahead of time.\n\nThanks again for the project.\n\nJo',
        },
      },
      { h2: 'What makes a first reminder work' },
      {
        ul: [
          '**A searchable subject line.** Accounts teams search their inbox by invoice number.',
          '**The invoice attached again.** Don’t make them hunt for the original.',
          '**Payment details in the body.** One less step for the customer.',
          '**An easy way out.** “If it has already been paid, thank you” keeps it friendly and gets you a reply either way.',
        ],
      },
      { h2: 'If there is no reply' },
      {
        p: 'Give it seven days, then send a [second reminder](/journal/second-payment-reminder-email-what-to-write-when-the-first-is-ignored) that refers back to this one and asks for payment by a specific date.',
      },
    ],
    related: [
      'what-to-say-when-a-client-hasn-t-paid-an-invoice-uk',
      'second-payment-reminder-email-what-to-write-when-the-first-is-ignored',
      'overdue-invoice-letter-template-for-uk-small-businesses',
      'how-to-ask-a-customer-for-a-definite-payment-date',
    ],
  },
  {
    slug: 'third-payment-reminder-email-what-to-say-after-two-follow-ups',
    title: 'Third Payment Reminder Email: What to Say After Two Follow-Ups',
    category: C,
    description:
      'What to write in a third invoice reminder: reference both earlier emails, add interest where you can, name a final date and say exactly what happens next.',
    points: [
      'Reference the previous two reminders and the dates they were sent.',
      'This is the message where you state a consequence: interest, a final demand, or a court claim.',
      'Change channel as well as tone — phone first, then email, and copy in a more senior contact.',
      'Give a short, final deadline (7 days) and diarise what you will do if it passes.',
    ],
    intro:
      'By the third reminder, the problem is no longer that the invoice got lost. Either the customer can’t pay, won’t pay, or isn’t prioritising you. The third message has one job: make it clear that ignoring you has consequences.',
    blocks: [
      { h2: 'Before sending: try a different route' },
      {
        ul: [
          'Call. A two-minute conversation often achieves more than a third email. See our [phone script](/journal/how-to-chase-an-unpaid-invoice-by-phone).',
          'Find another contact: the business owner, finance director or accounts inbox.',
          'Check that the business is still trading. Companies House shows if a company has gone into liquidation or administration.',
        ],
      },
      { h2: 'What the third reminder contains' },
      {
        ol: [
          'The invoice facts and how many days overdue it is.',
          'The dates of your two earlier reminders.',
          'Interest and compensation, if the customer is a business.',
          'A final payment date, usually 7 days away.',
          'What you will do next if that date passes.',
        ],
      },
      {
        email: {
          label: 'Third reminder — business customer',
          subject: 'Third and final reminder: invoice 0817 — 35 days overdue',
          body:
            'Dear Ms Patel,\n\nInvoice 0817 for £2,400 was due on 14 October 2026 and is now 35 days overdue. I sent reminders on 15 October and 3 November and haven’t received payment or a response.\n\nAs this is a business debt, I am now adding statutory interest (11.75% a year, currently £27.04) and fixed compensation of £70 under the Late Payment of Commercial Debts (Interest) Act 1998. The total due is £2,497.04.\n\nPlease pay by Wednesday 25 November. If payment isn’t received by then, I will send a formal letter before action and then issue a claim in the County Court.\n\nIf there is a reason payment can’t be made, please call me on 07700 900000 this week so we can agree a plan.\n\nYours sincerely,\nSam Lee',
        },
      },
      { h2: 'For private customers' },
      {
        p: 'Leave out statutory interest and compensation; they only apply between businesses. Instead, offer a payment plan clearly, and say that the next step is a formal letter of claim. Many private customers who ignore two reminders respond quickly when offered a manageable instalment plan.',
      },
      { h2: 'After the deadline' },
      {
        p: 'Do what you said. If you said a letter before action would follow, send it on the next working day. Following through once is what makes every future reminder you send credible. See [final payment reminder before legal action](/journal/final-payment-reminder-before-legal-action-uk-wording).',
      },
    ],
    related: [
      'second-payment-reminder-email-what-to-write-when-the-first-is-ignored',
      'when-to-stop-sending-invoice-reminders-and-choose-a-next-step',
      'final-demand-for-payment-letter-uk-what-to-include',
      'how-to-chase-an-unpaid-invoice-by-phone',
    ],
  },
  {
    slug: 'client-ignoring-invoice-emails-here-s-your-next-step',
    title: "Client Ignoring Invoice Emails? Here's Your Next Step",
    category: C,
    description:
      'Your client has gone silent on an unpaid invoice. How to check your emails are arriving, reach someone else, use a different channel, and escalate cleanly.',
    points: [
      'Confirm the recipient and email domain are correct and that attachments were not blocked.',
      'Switch channel: a phone call or a posted letter gets past a full inbox or a spam filter.',
      'Go around a silent contact to accounts or the owner, without making it personal.',
      'After two unanswered contacts on different channels, move to a formal demand.',
    ],
    intro:
      'Silence is frustrating, but it is not always avoidance. Emails with invoice attachments land in spam surprisingly often, people leave jobs, and small business owners drown in their inboxes. Rule out the boring explanations first, then escalate.',
    blocks: [
      { h2: 'Step 1: make sure your emails are arriving' },
      {
        ul: [
          'Check the address letter by letter against an email they actually replied from.',
          'Send a short email with no attachment: “Did you receive my invoice 1042 of 3 November? I want to check it reached you.” Attachments trip spam filters; a plain question doesn’t.',
          'Check your own sent folder and any bounce messages.',
          'If you send invoices from accounting software, check whether it shows the invoice as opened.',
        ],
      },
      { h2: 'Step 2: try a different channel' },
      {
        table: {
          head: ['Channel', 'Why it helps'],
          rows: [
            ['Phone call', 'Hard to ignore, and you can ask directly when payment will be made'],
            ['Text or WhatsApp', 'Read quickly, especially by sole traders and small business owners'],
            ['Posted letter', 'Proves delivery and lands with whoever opens the post'],
            ['LinkedIn message', 'Useful if your contact has left the company'],
          ],
        },
      },
      { h2: 'Step 3: find another person' },
      {
        p: 'If your contact has gone quiet, write to the business’s general or accounts address, or to the owner or director. Directors of limited companies are listed on Companies House. Keep it neutral; you don’t need to criticise your contact.',
      },
      {
        email: {
          label: 'Going to another contact',
          subject: 'Unpaid invoice 1042 — please could you help?',
          body:
            'Dear Ms Rahman,\n\nI provided design services to [company] in October, working with Sam Turner. Invoice 1042 for £850 was due on 3 November and remains unpaid. I’ve emailed Sam twice but haven’t had a reply, so I wonder whether my messages are reaching the right place.\n\nCould you let me know who handles supplier payments, or forward the attached invoice to them?\n\nThank you,\nJo Smith',
        },
      },
      { h2: 'Step 4: if the silence continues' },
      {
        p: 'Once you have tried two channels and a second contact over roughly two to three weeks, assume the silence is deliberate. Send a [final demand](/journal/final-demand-for-payment-letter-uk-what-to-include) by email and by post, with a clear deadline. Silence does not make a debt go away: if the customer ignores a court claim too, you can ask for judgment in default.',
      },
      {
        note: 'Check the business still exists. If Companies House shows the company in liquidation, chasing the company directly won’t work: you need to register your claim with the insolvency practitioner instead.',
      },
    ],
    related: [
      'second-payment-reminder-email-what-to-write-when-the-first-is-ignored',
      'how-to-chase-an-unpaid-invoice-by-phone',
      'when-to-stop-sending-invoice-reminders-and-choose-a-next-step',
      'third-payment-reminder-email-what-to-say-after-two-follow-ups',
    ],
  },
  {
    slug: 'customer-promised-to-pay-but-hasn-t-what-to-write-next',
    title: "Customer Promised to Pay but Hasn't: What to Write Next",
    category: C,
    description:
      'A customer promised payment by a date and missed it. What to write next, how to quote their promise back, and when a broken promise means escalating.',
    points: [
      'Refer to the exact promised date and the person who gave it.',
      'Reply the day after the missed date, not a week later.',
      'Ask what went wrong and for a new date that is days away, not weeks.',
      'A second broken promise is the signal to move to a formal demand.',
    ],
    intro:
      'A promise to pay is progress, and a broken promise is useful evidence. Respond quickly, quote the promise back, and make the next commitment smaller and sooner.',
    blocks: [
      { h2: 'Always confirm promises in writing' },
      {
        p: 'If the promise was made by phone, send a one-line email straight after: “Thanks for confirming on the phone today that invoice 1042 (£850) will be paid by Friday 14 November.” When the date passes, you have a written record, not a memory.',
      },
      { h2: 'The message the day after a missed promise' },
      {
        email: {
          label: 'After a missed promise',
          subject: 'Invoice 1042 — payment promised for 14 November',
          body:
            'Hi Sam,\n\nOn 7 November you let me know that invoice 1042 for £850 would be paid by Friday 14 November. I haven’t received it yet.\n\nHas something held it up? If the payment has gone, could you send me the date and reference so I can trace it? If not, please let me know the new date — I’d be grateful if it could be by Wednesday 19 November.\n\nThanks,\nJo',
        },
      },
      { h2: 'Why “a new date within days”' },
      {
        p: 'If you accept “end of the month” after a missed promise, you have rewarded the delay. Ask for a date within the next few working days. If the customer genuinely can’t pay in full, that is the moment to agree a [written payment plan](/journal/client-asked-for-more-time-to-pay-an-invoice-how-to-respond) rather than another open-ended promise.',
      },
      { h2: 'Second broken promise' },
      {
        table: {
          head: ['Pattern', 'What it usually means', 'Your move'],
          rows: [
            ['One missed date, apologetic reply and payment within days', 'Genuine slip', 'Thank them; no further action'],
            ['Two missed dates, vague reasons', 'Cash-flow trouble or low priority', 'Final demand with a fixed deadline; offer instalments'],
            ['Promises given only to stop chasing', 'Deliberate delay', 'Letter before action, then a court claim'],
          ],
        },
      },
      {
        email: {
          label: 'After a second broken promise',
          subject: 'Invoice 1042 — second missed payment date',
          body:
            'Dear Sam,\n\nInvoice 1042 for £850 was due on 3 November. You confirmed payment for 14 November and then for 19 November, and it hasn’t arrived on either date.\n\nI need to treat this as a formal request: please pay £850 by Wednesday 26 November. If that isn’t possible, call me before then to agree a payment plan in writing.\n\nIf I don’t receive payment or hear from you by 26 November, I’ll send a formal letter before action.\n\nRegards,\nJo',
        },
      },
      {
        p: 'Keep every promise and missed date in your [evidence file](/journal/what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk). A record of broken promises is persuasive if you later need to claim.',
      },
    ],
    related: [
      'how-to-ask-a-customer-for-a-definite-payment-date',
      'client-asked-for-more-time-to-pay-an-invoice-how-to-respond',
      'final-demand-for-payment-letter-uk-what-to-include',
      'how-to-request-remittance-advice-from-a-business-customer',
    ],
  },
  {
    slug: 'how-to-ask-a-customer-for-a-definite-payment-date',
    title: 'How to Ask a Customer for a Definite Payment Date',
    category: C,
    description:
      'Turn “we’ll pay soon” into a real date: the questions that get a commitment, how to handle payment runs, and wording that pins down a day without being pushy.',
    points: [
      'Avoid an open-ended request that invites “soon” as the entire answer.',
      'Ask a closed question that needs a date in reply: “Which payment run will it be in?”',
      'Offer two dates and let them choose; it is easier to answer than a blank question.',
      'Confirm the date back in writing the same day.',
    ],
    intro:
      '“We’ll get it sorted soon” feels like progress but isn’t. Getting a specific date is a small skill that turns chasing from guesswork into a schedule you can hold people to.',
    blocks: [
      { h2: 'Questions that invite vague answers' },
      {
        ul: ['“Any update on the invoice?”', '“Could you look into this when you get a moment?”', '“Do you know when it might be paid?”'],
      },
      { h2: 'Questions that get a date' },
      {
        ul: [
          '“Which date will invoice 1042 be paid?”',
          '“Is it going in this Friday’s payment run or next week’s?”',
          '“Can you confirm it will be paid by Thursday 20 November?”',
          '“What do you need from me so it can be paid this week?”',
        ],
      },
      { h2: 'Understand payment runs' },
      {
        p: 'Many businesses pay suppliers in batches, weekly or monthly, often on a fixed day. If you know a client pays on the last Friday of the month, an invoice approved a day late waits a whole month. Ask once: “When are your supplier payment runs, and what’s the cut-off for getting an invoice into one?” Then time your invoices and reminders around it.',
      },
      {
        email: {
          label: 'Pinning down a date',
          subject: 'Invoice 1042 — which payment run?',
          body:
            'Hi Sam,\n\nThanks for confirming invoice 1042 has been approved. Could you let me know which date it will be paid? If it helps, I can see it going in either Friday 14 or Friday 21 November’s run — whichever works, I’ll note it on my side.\n\nThanks,\nJo',
        },
      },
      { h2: 'Confirm it back' },
      {
        p: 'When you get a date, reply the same day: “Great, thank you — I’ve noted payment of £850 on Friday 14 November.” That short confirmation does two things: it shows you are paying attention, and it gives you a clean record if the date slips. If it does, see [customer promised to pay but hasn’t](/journal/customer-promised-to-pay-but-hasn-t-what-to-write-next).',
      },
      { h2: 'If they genuinely can’t give a date' },
      {
        p: 'Sometimes the honest answer is “we’re waiting on our own customer to pay us.” That is a cash-flow problem, and the right response is a [payment plan](/journal/client-asked-for-more-time-to-pay-an-invoice-how-to-respond) with fixed dates, not another open-ended wait.',
      },
    ],
    related: [
      'customer-promised-to-pay-but-hasn-t-what-to-write-next',
      'business-customer-says-the-invoice-is-still-in-approval',
      'client-asked-for-more-time-to-pay-an-invoice-how-to-respond',
      'second-payment-reminder-email-what-to-write-when-the-first-is-ignored',
    ],
  },
  {
    slug: 'how-to-chase-an-unpaid-invoice-by-phone',
    title: 'How to Chase an Unpaid Invoice by Phone',
    category: C,
    description:
      'A simple phone script for chasing an unpaid invoice: what to prepare, what to say, how to handle common excuses, and the follow-up email to send afterwards.',
    points: [
      'Prepare the invoice number, amount, due date and previous email history before calling.',
      'Ask one clear question and then stop talking; the silence does the work.',
      'Have a calm answer ready for the five common excuses.',
      'Confirm what was agreed by email within the hour.',
    ],
    intro:
      'Most people would rather send ten emails than make one call. But a short, well-prepared phone call is often the fastest way to get paid, because it is much harder to ignore a person than an inbox.',
    blocks: [
      { h2: 'Before you dial' },
      {
        ul: [
          'Invoice number, date, amount, due date.',
          'Dates of the reminders you have sent.',
          'Who you need: your contact, or the person who approves payments.',
          'What you will accept: payment today, a firm date, or a written plan.',
          'Your bank details, in case they offer to pay while you are on the phone.',
        ],
      },
      { h2: 'The script' },
      {
        ol: [
          '“Hi, it’s Jo Smith from Jo Smith Design. Is now an OK moment for a quick question about an invoice?”',
          '“It’s invoice 1042 for £850, which was due on 3 November. I emailed on the 10th and 17th. Can you tell me where it’s got to?”',
          'Listen. Don’t fill the pause.',
          '“So I can plan, what date will it be paid?”',
          '“Great — I’ll send a quick email now confirming £850 by Friday the 21st. Thanks for your help.”',
        ],
      },
      { h2: 'Handling common excuses' },
      {
        table: {
          head: ['They say', 'You say'],
          rows: [
            ['“I didn’t get the invoice.”', '“No problem — what email address should I send it to? I’ll send it while we’re on the phone.”'],
            ['“It’s with accounts.”', '“Who in accounts should I speak to, and when’s their next payment run?”'],
            ['“The person who approves it is away.”', '“Who covers for them? Or when are they back, so I can note the date?”'],
            ['“We’re waiting to be paid ourselves.”', '“I understand. Could we agree part now and the rest on a fixed date?”'],
            ['“There’s a problem with the work.”', '“I’m sorry to hear that — what specifically? I’ll look into it. Is the rest of the invoice OK to pay meanwhile?”'],
          ],
        },
      },
      { h2: 'The follow-up email' },
      {
        email: {
          label: 'Confirming the call',
          subject: 'Invoice 1042 — confirming our call',
          body:
            'Hi Sam,\n\nThanks for your time on the phone just now. As discussed, invoice 1042 for £850 will be paid by Friday 21 November. I’ve attached the invoice again, and my bank details are below.\n\nThanks,\nJo',
        },
      },
      { h2: 'Things not to do on the phone' },
      {
        ul: [
          'Don’t call repeatedly in one day, call outside business hours, or discuss the debt with people who don’t need to know. Persistent or public pressure can cross into harassment, particularly with private individuals.',
          'Don’t lose your temper. If the call is going badly, end it politely and put your position in writing.',
          'Don’t agree to a discount on the spot. Say you’ll consider any proposal and reply by email.',
        ],
      },
    ],
    related: [
      'what-to-say-when-a-client-hasn-t-paid-an-invoice-uk',
      'how-to-ask-a-customer-for-a-definite-payment-date',
      'client-ignoring-invoice-emails-here-s-your-next-step',
      'customer-promised-to-pay-but-hasn-t-what-to-write-next',
    ],
  },
  {
    slug: 'customer-missed-an-invoice-instalment-what-to-write',
    title: 'Customer Missed an Invoice Instalment: What to Write',
    category: C,
    description:
      'A customer on a payment plan missed an instalment. What to write, whether you can demand the full balance, and how to reset or end the arrangement.',
    points: [
      'Refer to the written payment arrangement and the specific instalment that was missed.',
      'Contact them within a day or two; one missed instalment quickly becomes three.',
      'Whether you can demand the whole balance depends on what your plan said.',
      'If you reset the plan, make the next instalment soon and the terms explicit.',
    ],
    intro:
      'A payment plan only works if both sides treat the dates as real. When one is missed, a quick and specific message usually gets things back on track before the arrangement unravels.',
    blocks: [
      { h2: 'Check what you agreed' },
      {
        p: 'Find the email or document setting out the plan. Did it say what happens if a payment is missed? A well-written plan includes a line such as: “If any instalment is more than 7 days late, the full outstanding balance becomes payable immediately.” If yours did, you can rely on it. If it didn’t, the remaining instalments are still due on their dates, but you can’t usually demand everything at once.',
      },
      { h2: 'First missed instalment' },
      {
        email: {
          label: 'Missed instalment — first time',
          subject: 'Payment plan — instalment of 1 November not received',
          body:
            'Hi Lee,\n\nUnder the payment plan we agreed on 10 October for invoice 2210, the second instalment of £400 was due on 1 November. I haven’t received it yet.\n\nCould you let me know if it’s on its way? If something has changed, please tell me this week so we can talk about it. Otherwise, could you pay the £400 by Friday 7 November? The remaining instalments of £400 on 1 December and 1 January stay as agreed.\n\nThanks,\nAmira',
        },
      },
      { h2: 'If it happens again' },
      {
        p: 'A second missed payment suggests the plan was more than the customer could manage, or that they are not treating it seriously. You can either reset the plan — smaller amounts, but strictly on time — or end it and treat the whole balance as due, if your agreement allows that.',
      },
      {
        email: {
          label: 'Ending the plan',
          subject: 'Payment plan for invoice 2210 — balance now due',
          body:
            'Dear Lee,\n\nOur payment plan of 10 October said that if an instalment was more than 7 days late, the full outstanding balance would become payable. The instalments due on 1 November and 1 December haven’t been paid, so the full balance of £1,200 is now due.\n\nPlease pay £1,200 by 15 December. If you can’t, contact me before then with a realistic proposal.\n\nIf I don’t hear from you by that date, I’ll send a formal letter before action.\n\nKind regards,\nAmira',
        },
      },
      { h2: 'Write better plans next time' },
      {
        ul: [
          'Fixed amounts on fixed dates, in writing.',
          'A standing order where possible, so the customer doesn’t have to remember.',
          'A clause making the full balance due if a payment is more than 7 days late.',
          'For business customers: a note that statutory interest continues to accrue on the balance unless you agree otherwise.',
        ],
      },
      {
        p: 'For working out interest as instalments come in, see [interest on a part-paid invoice](/journal/how-to-calculate-interest-on-a-part-paid-commercial-invoice).',
      },
    ],
    related: [
      'client-asked-for-more-time-to-pay-an-invoice-how-to-respond',
      'customer-made-a-part-payment-how-to-chase-the-remaining-balance',
      'how-to-calculate-interest-on-a-part-paid-commercial-invoice',
      'customer-promised-to-pay-but-hasn-t-what-to-write-next',
    ],
  },
  {
    slug: 'client-asked-for-more-time-to-pay-an-invoice-how-to-respond',
    title: 'Client Asked for More Time to Pay an Invoice: How to Respond',
    category: C,
    description:
      'How to respond when a client asks for more time to pay: questions to ask, how to set up a written payment plan, and replies for yes, partly and no.',
    points: [
      'Ask for a specific revised schedule instead of agreeing to “later”.',
      'A request for more time is better than silence; reward honesty with a workable plan.',
      'Put any extension in writing: amounts, dates and what happens if one is missed.',
      'Ask for a first payment now, however small, to show the plan is real.',
    ],
    intro:
      'A client who asks for more time is telling you something useful: they intend to pay but can’t right now. Your job is to turn that into a plan with dates, rather than an open-ended delay.',
    blocks: [
      { h2: 'Ask before you agree' },
      {
        ul: [
          'How much can they pay now?',
          'When can they pay the rest, specifically?',
          'Is this a one-off squeeze or an ongoing problem?',
          'Are they disputing anything, or is it purely cash flow?',
        ],
      },
      { h2: 'Three ways to respond' },
      {
        table: {
          head: ['Situation', 'Response'],
          rows: [
            ['Good client, short delay, small sum', 'Agree a new single date, confirmed in writing'],
            ['Larger sum or tighter cash flow', 'Part payment now, then instalments on fixed dates'],
            ['Repeated requests or a history of late payment', 'Decline politely, or agree only with a deposit-like first payment and a short plan'],
          ],
        },
      },
      {
        email: {
          label: 'Agreeing a plan',
          subject: 'Invoice 2210 — payment plan',
          body:
            'Hi Lee,\n\nThanks for letting me know, and for being upfront about it. I’m happy to spread invoice 2210 (£1,600) as follows:\n\n£400 by 14 November\n£400 by 1 December\n£400 by 1 January\n£400 by 1 February\n\nIf any instalment is more than 7 days late, the remaining balance becomes payable straight away. Could you reply to confirm you’re happy with this? A standing order would make it easiest for both of us.\n\nBest,\nAmira',
        },
      },
      {
        email: {
          label: 'Declining politely',
          subject: 'Re: invoice 2210',
          body:
            'Hi Lee,\n\nThanks for getting in touch. I’m not able to extend the terms on this invoice, as I’ve already completed and paid for the work my side. I could accept £800 now and £800 by 1 December, if that would help.\n\nCould you let me know by Friday which you’d prefer?\n\nBest,\nAmira',
        },
      },
      { h2: 'Interest during a plan' },
      {
        p: 'For business customers, statutory interest keeps accruing on the overdue balance unless you agree to waive it. Many suppliers waive interest as long as the plan is kept to, and say so: “Provided each instalment is paid on time, I won’t add late payment interest.” That gives the customer a strong reason to stay on schedule.',
      },
      {
        p: 'If an instalment is missed later, see [customer missed an invoice instalment](/journal/customer-missed-an-invoice-instalment-what-to-write).',
      },
    ],
    related: [
      'customer-missed-an-invoice-instalment-what-to-write',
      'how-to-chase-an-overdue-invoice-without-losing-the-customer',
      'how-to-ask-a-customer-for-a-definite-payment-date',
      'can-you-charge-interest-on-an-overdue-invoice-in-the-uk',
    ],
  },
  {
    slug: 'customer-made-a-part-payment-how-to-chase-the-remaining-balance',
    title: 'Customer Made a Part-Payment: How to Chase the Remaining Balance',
    category: C,
    description:
      'A customer paid part of an invoice. How to acknowledge it, find out why the rest is missing, avoid “payment in full” traps, and chase the balance.',
    points: [
      'Record the amount received, the payment date and which invoice it relates to.',
      'Acknowledge the payment straight away and state the balance, so there is no ambiguity.',
      'Find out whether the shortfall is a dispute, a cash problem, or a mistake.',
      'Be wary of a part payment marked “in full and final settlement”; reply in writing promptly.',
    ],
    intro:
      'A part payment usually means one of three things: a deduction the customer thinks is justified, a cash-flow problem, or an error. Each needs a different reply, so the first step is to find out which.',
    blocks: [
      { h2: 'Acknowledge it the same day' },
      {
        email: {
          label: 'Acknowledging a part payment',
          subject: 'Invoice 3307 — payment received, balance £650',
          body:
            'Hi Ruby,\n\nThank you for the payment of £1,350 received today against invoice 3307. That leaves a balance of £650.\n\nCould you let me know when the remaining £650 will be paid? If the difference is deliberate — for example, because of a query about part of the work — please tell me what it relates to so I can look into it.\n\nThanks,\nHannah',
        },
      },
      { h2: 'Why the shortfall?' },
      {
        table: {
          head: ['Cause', 'Clue', 'Response'],
          rows: [
            ['Unannounced deduction', 'A round sum missing, or a line item left off', 'Ask what it relates to; deal with it as a dispute'],
            ['Cash-flow problem', 'An awkward amount, or “we’ll pay the rest next month”', 'Agree the balance date in writing'],
            ['Error', 'VAT left off, bank charges, wrong invoice paid', 'Point out the error with the figures'],
            ['Retention or set-off', 'Common in construction', 'Check your contract allows it'],
          ],
        },
      },
      { h2: 'Watch for “full and final settlement”' },
      {
        p: 'If a part payment arrives with a note saying it is “in full and final settlement”, reply promptly in writing to say you accept it only as a part payment and that the balance remains due. Under English law, accepting a smaller sum generally doesn’t wipe out the rest of a debt that isn’t genuinely disputed. If the amount is genuinely disputed, though, cashing a cheque offered as a settlement can be treated as accepting the offer, so respond before you rely on the money.',
      },
      {
        email: {
          label: 'Rejecting a “full and final” offer',
          subject: 'Invoice 3307 — part payment only',
          body:
            'Dear Ruby,\n\nThank you for your payment of £1,350. Your note describes this as payment “in full and final settlement” of invoice 3307. I don’t agree to that. I’m treating the £1,350 as a part payment only, and the balance of £650 remains due.\n\nIf you believe some of the invoice isn’t owed, please set out the specific items and reasons so I can respond.\n\nRegards,\nHannah',
        },
      },
      { h2: 'Chasing the balance' },
      {
        p: 'Treat the balance like any other overdue amount: a reminder with the specific figure, a date, and then your usual escalation. For a business customer, statutory interest runs on the reduced balance from the date of the part payment — see [calculating interest on a part-paid invoice](/journal/how-to-calculate-interest-on-a-part-paid-commercial-invoice).',
      },
    ],
    related: [
      'how-to-calculate-interest-on-a-part-paid-commercial-invoice',
      'how-to-reply-when-a-customer-disputes-an-invoice-template',
      'customer-missed-an-invoice-instalment-what-to-write',
      'how-to-request-remittance-advice-from-a-business-customer',
    ],
  },
  {
    slug: 'when-to-stop-sending-invoice-reminders-and-choose-a-next-step',
    title: 'When to Stop Sending Invoice Reminders and Choose a Next Step',
    category: C,
    description:
      'Unpaid after three reminders? When more reminders stop working, and how to choose between a final demand, a court claim, a collection agency or writing it off.',
    points: [
      'Stop repeating the same message when it produces no new information.',
      'After three reminders and a phone call, more reminders rarely help; formal steps do.',
      'Your options: a final demand, a small claims court claim, a debt collection agency, or writing it off.',
      'Choose based on the amount, the evidence, and whether the debtor can actually pay.',
    ],
    intro:
      'Repeated reminders feel like action, but after the third one they mostly teach the customer that nothing happens if they ignore you. This guide helps you decide what to do instead.',
    blocks: [
      { h2: 'Signs your reminders have stopped working' },
      {
        ul: [
          'Three or more reminders without a reply or with only vague replies.',
          'Two broken payment promises.',
          'The customer is still trading and placing orders elsewhere, but not paying you.',
          'A “dispute” that appeared only after you started chasing, with no detail.',
        ],
      },
      { h2: 'Your options' },
      {
        table: {
          head: ['Option', 'Cost', 'Best for'],
          rows: [
            ['Final demand / letter before action', 'Free', 'Every case: it is the required next step and often works on its own'],
            ['County Court claim (small claims track)', '£35–£455 court fee, recoverable if you win', 'Clear debts up to £10,000 against a debtor who can pay'],
            ['Debt collection agency', 'Usually a percentage of what is recovered', 'Several debts, or when you don’t have time to chase'],
            ['Solicitor letter', 'Fixed fee, often tens of pounds', 'Larger debts, or debtors who only respond to a law firm'],
            ['Write it off', 'The value of the debt', 'Tiny sums, insolvent debtors, or where your evidence is weak'],
          ],
        },
      },
      { h2: 'Questions that decide it' },
      {
        ol: [
          '**Can they pay?** A judgment against an insolvent company or someone with no income or assets is just paper. Check Companies House and, for individuals, whether they are trading.',
          '**Is your evidence clear?** You need the agreement, the delivery and the invoice. See [what evidence to keep](/journal/what-evidence-to-keep-for-an-unpaid-invoice-in-the-uk).',
          '**Is it worth your time?** A £150 debt may not justify a court claim; a £1,500 one usually does.',
          '**Do you want to work with them again?** Formal steps usually end the relationship. By this point, it often has ended anyway.',
        ],
      },
      { h2: 'The sequence from here' },
      {
        ol: [
          'A [final demand](/journal/final-demand-for-payment-letter-uk-what-to-include) with a 7–14 day deadline (30 days with the debt protocol forms if the debtor is an individual or sole trader).',
          'If unpaid, a claim through Money Claim Online for amounts the online service accepts.',
          'If they don’t respond to the claim, request judgment in default.',
          'If they still don’t pay, choose an enforcement method, such as a warrant of control or an attachment of earnings order.',
        ],
      },
      { h2: 'Writing off a debt' },
      {
        p: 'If you decide not to pursue it, you can usually treat a genuinely irrecoverable debt as a bad debt in your accounts, reducing your taxable profit, and, if you are VAT-registered and the debt is over six months overdue, you may be able to reclaim the VAT you paid on it. Ask your accountant how this applies to you.',
      },
    ],
    related: [
      'final-demand-for-payment-letter-uk-what-to-include',
      'final-payment-reminder-before-legal-action-uk-wording',
      'third-payment-reminder-email-what-to-say-after-two-follow-ups',
      'invoice-90-days-overdue-organise-the-facts-before-escalating',
    ],
  },
];
