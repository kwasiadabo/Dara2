import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/process";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function ProcessTimeline() {
  return (
    <section id="how-it-works" className="bg-bg py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Simple Process"
          title="Get your loan approved swiftly, with no hassle."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {/* Connector line — desktop only */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
          />

          {processSteps.map((step) => (
            <motion.div key={step.id} variants={fadeUp} className="relative flex flex-col">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-[15px] font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-6 text-[19px] font-bold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[240px] text-[14.5px] leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
