import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { mission, vision, coreValues } from "@/data/about";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function MissionVision() {
  return (
    <section className="bg-bg py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Dara"
          title="The principles behind every decision we make."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2"
        >
          <motion.div
            id="our-mission"
            variants={fadeUp}
            className="rounded-[1.75rem] bg-primary p-9 text-white lg:p-10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
              <Target className="h-5 w-5" strokeWidth={2} />
            </span>
            <h3 className="mt-7 text-[22px] font-bold tracking-tight">Our Mission</h3>
            <p className="mt-3 text-[15.5px] leading-relaxed text-white/80">{mission}</p>
          </motion.div>

          <motion.div
            id="our-vision"
            variants={fadeUp}
            className="rounded-[1.75rem] bg-accent p-9 text-white lg:p-10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
              <Eye className="h-5 w-5" strokeWidth={2} />
            </span>
            <h3 className="mt-7 text-[22px] font-bold tracking-tight">Our Vision</h3>
            <p className="mt-3 text-[15.5px] leading-relaxed text-white/85">{vision}</p>
          </motion.div>
        </motion.div>

        <div id="core-values" className="mt-20">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center text-[15px] font-semibold uppercase tracking-[0.14em] text-ink-soft"
          >
            Core Values
          </motion.h3>

          <motion.div
            variants={staggerChildren(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {coreValues.map((value) => (
              <motion.div
                key={value}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-border bg-bg-soft px-4 py-3.5"
              >
                <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-accent" strokeWidth={2} />
                <span className="text-[14px] font-semibold text-ink">{value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
