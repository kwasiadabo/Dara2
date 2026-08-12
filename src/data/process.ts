export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "apply",
    number: "01",
    title: "Apply",
    description: "Tell us about yourself or your business and how much funding you need.",
  },
  {
    id: "assessment",
    number: "02",
    title: "Assessment",
    description: "Our Achimota team reviews your application — quickly, and in plain language.",
  },
  {
    id: "approval",
    number: "03",
    title: "Approval",
    description: "Get a clear decision with terms fully explained before you commit to anything.",
  },
  {
    id: "disbursement",
    number: "04",
    title: "Disbursement",
    description: "Receive your funds and get back to running your business or your life.",
  },
];
