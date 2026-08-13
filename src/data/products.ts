import type { LucideIcon } from "lucide-react";
import { Briefcase, TrendingUp, Users } from "lucide-react";

export interface LoanProduct {
  id: string;
  icon: LucideIcon;
  name: string;
  description: string;
  features: string[];
  href: string;
}

export const loanProducts: LoanProduct[] = [
  {
    id: "micro-loan",
    icon: Briefcase,
    name: "Dara Micro Loan",
    description:
      "A term loan meant for small and medium enterprises as well as individuals in trade and commerce, services, transport, and other sectors of the economy.",
    features: [
      "No prior savings",
      "Competitive interest rate",
      "Collateral free",
      "Daily, weekly, or monthly repayment",
    ],
    href: "/#contact",
  },
  {
    id: "special-loan",
    icon: Users,
    name: "Dara Special Loan",
    description:
      "Strategically designed for clients who cannot afford formal bank loans due to the nature and size of their businesses. An individual or group loan tailored to improve existing businesses through easy access to affordable services and a comprehensive repayment method.",
    features: [
      "No prior savings",
      "Competitive interest rate",
      "Collateral free",
      "Daily, weekly, or monthly repayment",
    ],
    href: "/#contact",
  },
  {
    id: "daraplus-loan",
    icon: TrendingUp,
    name: "DaraPlus Loan",
    description:
      "Designed for clients in business, this is a 3-4 month individual loan with monthly instalments.",
    features: [
      "No prior savings",
      "Competitive interest rate",
      "Flexible collateral",
      "Daily, weekly, or monthly repayment",
    ],
    href: "/#contact",
  },
];
