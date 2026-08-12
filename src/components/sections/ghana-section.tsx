import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FloatingMetric } from "@/components/hero/floating-metric";
import { images } from "@/data/images";
import { fadeUp, slideInLeft, staggerChildren, viewportOnce } from "@/lib/motion";
import { ArrowRight, ShieldCheck, FileCheck2, Send } from "lucide-react";

const points = [
  "Straightforward, transparent terms — every time",
  "Local decision-making, right here in Achimota",
  "Support that continues after your loan is disbursed",
];

export function GhanaSection() {
  return (
    <section className="overflow-hidden bg-bg-soft py-24 lg:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto w-full max-w-[420px] lg:mx-0"
        >
          <div className="rounded-[2rem] bg-white/70 p-2 shadow-[var(--shadow-soft-lg)] ring-1 ring-black/[0.03]">
            <div className="overflow-hidden rounded-[1.65rem]">
              <img
                src={images.ghana}
                alt="Dara Micro Credit staff reviewing an application at the Achimota office"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <FloatingMetric
            icon={ShieldCheck}
            label="Application"
            value="Verified"
            className="-right-6 top-10 sm:-right-10"
            delay={0.2}
            floatDuration={5.2}
          />
          <FloatingMetric
            icon={FileCheck2}
            label="Repayment Plan"
            value="Created"
            tone="primary"
            className="-left-4 bottom-24 sm:-left-9"
            delay={0.4}
            floatDuration={4.8}
          />
          <FloatingMetric
            icon={Send}
            label="Funds"
            value="Available"
            tone="accent"
            className="-right-4 bottom-4 sm:-right-8"
            delay={0.6}
            floatDuration={5.6}
          />
        </motion.div>

        <div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Who We Are</Eyebrow>
          </motion.div>

          <motion.h2
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-5 text-balance text-[34px] font-bold leading-[1.12] tracking-tight text-ink sm:text-[42px] lg:text-[46px]"
          >
            You got the business. We've got the funds.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-5 max-w-lg text-[17px] leading-relaxed text-ink-soft"
          >
            Dara Micro Credit is a Ghanaian lending house based in Achimota,
            built to help entrepreneurs, traders and everyday workers move
            forward without the frustration that usually comes with
            borrowing. Real people review your application, terms are
            explained in plain language, and once you're approved, your
            funds move fast.
          </motion.p>

          <motion.ul
            variants={staggerChildren(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 flex flex-col gap-3.5"
          >
            {points.map((point) => (
              <motion.li key={point} variants={fadeUp} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                <span className="text-[15px] text-ink-soft">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-9"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 border-b border-border-strong pb-0.5 text-[14.5px] font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Learn more about us
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 ease-out-quart group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
