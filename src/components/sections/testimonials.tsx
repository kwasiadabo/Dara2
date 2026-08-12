import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-bg py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Customer Stories"
          title="Trusted by people building their future."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="relative rounded-[2rem] border border-border bg-bg-soft px-8 py-10 sm:px-12 sm:py-14">
            <Quote className="h-8 w-8 text-primary/25" strokeWidth={1.75} />

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>

                <p className="mt-5 text-balance text-[19px] leading-relaxed text-ink sm:text-[21px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">
                    {initials(testimonial.name)}
                  </span>
                  <div>
                    <p className="text-[14.5px] font-bold text-ink">{testimonial.name}</p>
                    <p className="text-[13px] text-ink-soft">
                      {testimonial.role} · {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index ? "w-6 bg-primary" : "w-1.5 bg-border",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
