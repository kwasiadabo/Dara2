import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { loanProducts } from "@/data/products";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function LoanProducts() {
  return (
    <section id="loans" className="bg-bg-soft py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Loan Products"
          title="Funding built for real businesses."
          description="From restocking a shop to bridging a salary gap, our loan products are shaped around how Accra actually earns and spends."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <motion.div
          variants={staggerChildren(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {loanProducts.map((product) => {
            const Icon = product.icon;
            return (
              <motion.a
                key={product.id}
                href={product.href}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="group flex h-full flex-col rounded-[1.75rem] border border-border bg-white p-8 transition-colors duration-300 hover:border-primary/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>

                <h3 className="mt-6 text-[21px] font-bold tracking-tight text-ink">
                  {product.name}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                  {product.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[14px] text-ink-soft"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark"
                        strokeWidth={2.5}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.a>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
