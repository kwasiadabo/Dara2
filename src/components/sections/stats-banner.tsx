import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { stats } from "@/data/stats";
import { useCountUp } from "@/hooks/use-count-up";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

function StatItem({ value, prefix, suffix, label }: (typeof stats)[number]) {
  const { ref, value: current } = useCountUp(value);

  return (
    <motion.div ref={ref} variants={fadeUp} className="flex flex-col items-center gap-2 px-1 text-center">
      <span className="text-[26px] font-extrabold tracking-tight text-white sm:text-[32px]">
        {prefix}
        {current}
        {suffix}
      </span>
      <span className="text-[12px] font-medium text-white/70 sm:text-[13px]">{label}</span>
    </motion.div>
  );
}

export function StatsBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-[100px]"
      />

      <Container className="relative">
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto grid max-w-2xl grid-cols-2 gap-y-12 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <StatItem key={stat.id} {...stat} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
