import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { contactDetails } from "@/data/footer";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary-darker py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/40 blur-[130px]"
      />
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full border border-white/10"
      />

      <Container className="relative">
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-balance text-[36px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[46px] lg:text-[52px]"
          >
            Need a business loan? Let's connect.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/70">
            Speak with our Achimota team today — no long forms, no waiting
            weeks for an answer.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <Button
              variant="onDark"
              size="lg"
              icon={<Phone className="h-4 w-4 text-primary-dark" strokeWidth={2.5} />}
              asChild
            >
              <a href={contactDetails.phoneHref}>Call 0302 446 357</a>
            </Button>
            <Button
              variant="ghostOnDark"
              size="lg"
              icon={<MessageCircle className="h-4 w-4" strokeWidth={2.25} />}
              asChild
            >
              <a href={contactDetails.whatsapp} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-[14.5px] text-white/60 sm:flex-row sm:gap-6"
          >
            <a
              href={contactDetails.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-accent" strokeWidth={2} />
              {contactDetails.phone}
            </a>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-accent" strokeWidth={2} />
              {contactDetails.email}
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
