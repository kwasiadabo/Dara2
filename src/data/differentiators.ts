import type { LucideIcon } from "lucide-react";
import { Zap, FileCheck, Sliders, Users, ShieldCheck, MapPin } from "lucide-react";

export interface Differentiator {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const differentiators: Differentiator[] = [
  {
    id: "fast",
    icon: Zap,
    title: "Fast Decisions",
    description: "Most applications are reviewed within 24–48 hours.",
  },
  {
    id: "transparent",
    icon: FileCheck,
    title: "Transparent Terms",
    description: "Clear terms disclosed upfront, with no hidden surprises.",
  },
  {
    id: "flexible",
    icon: Sliders,
    title: "Flexible Solutions",
    description: "Products shaped around personal and business realities.",
  },
  {
    id: "support",
    icon: Users,
    title: "Personal Support",
    description: "A dedicated team ready to guide you through every step.",
  },
  {
    id: "secure",
    icon: ShieldCheck,
    title: "Secure Processes",
    description: "Your information is handled with care and discretion.",
  },
  {
    id: "local",
    icon: MapPin,
    title: "Local Understanding",
    description: "Built for the realities of the Ghanaian market.",
  },
];
