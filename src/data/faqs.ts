export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: "who-can-apply",
    question: "Who can apply?",
    answer:
      "Salaried workers, small business owners, traders, entrepreneurs, self-employed professionals and SMEs across Ghana can apply, subject to standard eligibility checks.",
  },
  {
    id: "how-much",
    question: "How much can I borrow?",
    answer:
      "Loan amounts are assessed individually based on your application, income and the specific product you choose. Your dedicated support contact will walk you through the options available to you.",
  },
  {
    id: "approval-time",
    question: "How long does approval take?",
    answer:
      "We aim to provide most decisions within 24–48 hours of receiving a complete application.",
  },
  {
    id: "documents",
    question: "What documents are required?",
    answer:
      "Typically a valid form of ID, proof of income or business activity, and basic contact details. Requirements may vary slightly by loan type.",
  },
  {
    id: "repayments",
    question: "How do repayments work?",
    answer:
      "Repayment schedules are agreed before disbursement and are clearly outlined in your loan terms, with flexible options available where possible.",
  },
  {
    id: "businesses",
    question: "Can businesses apply?",
    answer:
      "Yes. Our Business Loans and SME Financing products are designed specifically for registered and informal businesses looking to grow.",
  },
  {
    id: "fees",
    question: "Are there additional fees?",
    answer:
      "Any applicable fees are disclosed upfront before you accept a loan offer — there are no hidden surprises.",
  },
  {
    id: "contact",
    question: "How do I contact Dara?",
    answer:
      "You can reach our support team through the Contact section of this website, or via WhatsApp for a faster response.",
  },
];
