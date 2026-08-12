import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentiators } from "@/data/differentiators";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function WhyDara() {
  const [featured, ...rest] = differentiators;
  const FeaturedIcon = featured.icon;

  return (
    <section className="bg-bg-soft py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Dara"
          title="Why thousands choose Dara"
          align="center"
          className="mx-auto max-w-2xl"
        />

        <motion.div
          variants={staggerChildren(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-6"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-between rounded-[1.75rem] bg-accent p-9 text-white sm:col-span-6 lg:col-span-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
              <FeaturedIcon className="h-5 w-5" strokeWidth={2} />
            </span>
            <div className="mt-16">
              <h3 className="text-[26px] font-bold tracking-tight">{featured.title}</h3>
              <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-white/75">
                {featured.description}
              </p>
            </div>
          </motion.div>

          {rest.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className={
                  "flex flex-col justify-between rounded-[1.75rem] border border-border bg-white p-7 sm:col-span-3 " +
                  (i < 2 ? "lg:col-span-3" : "lg:col-span-2")
                }
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary-dark">
                  <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                </span>
                <div className="mt-10">
                  <h3 className="text-[18px] font-bold tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
