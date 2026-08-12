import type { LucideIcon } from "lucide-react";
import { Briefcase, RefreshCw, Wallet, Users } from "lucide-react";

export interface LoanProduct {
  id: string;
  icon: LucideIcon;
  name: string;
  description: string;
  cta: string;
  href: string;
}

export const loanProducts: LoanProduct[] = [
  {
    id: "business",
    icon: Briefcase,
    name: "Business Loans",
    description:
      "Working capital to stock up, expand your space, or seize an opportunity — sized to fit your business.",
    cta: "Learn More",
    href: "/#contact",
  },
  {
    id: "working-capital",
    icon: RefreshCw,
    name: "Working Capital",
    description:
      "Bridge the gap between buying stock and getting paid — built for seasonal and trade cash flow.",
    cta: "Learn More",
    href: "/#contact",
  },
  {
    id: "personal",
    icon: Wallet,
    name: "Salary & Personal Loans",
    description:
      "Short-term personal financing for salaried workers — for emergencies, bills, or big life moments.",
    cta: "Learn More",
    href: "/#contact",
  },
  {
    id: "group",
    icon: Users,
    name: "Group Loans",
    description:
      "Susu-style group lending for trader associations and cooperative groups who grow together.",
    cta: "Learn More",
    href: "/#contact",
  },
];
