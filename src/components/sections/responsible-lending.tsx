import { motion } from "framer-motion";
import { FileText, Calendar, EyeOff, LifeBuoy, Lock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

const commitments = [
  {
    icon: FileText,
    title: "Transparent terms",
    description: "Every cost is disclosed clearly before you accept an offer — nothing buried in fine print.",
  },
  {
    icon: Calendar,
    title: "Clear repayment schedules",
    description: "You'll know exactly what's due and when, agreed upfront and documented.",
  },
  {
    icon: EyeOff,
    title: "No hidden surprises",
    description: "What you're offered is what you get — no unexpected charges after disbursement.",
  },
  {
    icon: LifeBuoy,
    title: "Responsible lending",
    description: "We assess affordability carefully, so credit supports your goals rather than strains them.",
  },
  {
    icon: Lock,
    title: "Secure handling of information",
    description: "Your personal and financial data is protected with strict operational safeguards.",
  },
];

export function ResponsibleLending() {
  return (
    <section className="bg-bg py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Responsible Lending"
            title="Borrow with clarity."
            description="Micro-credit should build confidence, not confusion. Here's how we keep every step transparent and fair."
          />

          <motion.div
            variants={staggerChildren(0.09)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {commitments.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-bg-soft p-6"
              >
                <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
                <h3 className="mt-4 text-[16px] font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
