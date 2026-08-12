import { motion } from "framer-motion";
import { Zap, FileCheck, Sliders, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GhanaNetworkGraphic } from "@/components/sections/ghana-network-graphic";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

const badges = [
  { icon: Zap, label: "Fast approvals" },
  { icon: FileCheck, label: "Full transparency" },
  { icon: Sliders, label: "Flexible repayment" },
  { icon: MapPin, label: "Local & personal" },
];

export function TrustSection() {
  return (
    <section id="about" className="bg-bg py-24 lg:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="Why Dara"
            title="Built around the way Accra does business."
            description="You got the business. We've got the funds. Dara Micro Credit is a Ghanaian lending house based in Achimota, built to help entrepreneurs, traders and everyday workers move forward without the frustration that usually comes with borrowing."
          />

          <motion.div
            variants={staggerChildren(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 grid grid-cols-2 gap-3.5 sm:max-w-md"
          >
            {badges.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-border bg-bg-soft px-4 py-3.5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary-dark">
                  <Icon className="h-4 w-4" strokeWidth={2.25} />
                </span>
                <span className="text-[13.5px] font-semibold text-ink">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex justify-center"
        >
          <GhanaNetworkGraphic />
        </motion.div>
      </Container>
    </section>
  );
}
