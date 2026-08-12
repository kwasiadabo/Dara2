import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Container } from "@/components/ui/container";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden bg-primary-darker text-white"
        >
          <Container className="flex items-center justify-center gap-3 py-2.5 text-center">
            <p className="text-[13px] font-medium leading-snug text-white/90">
              Simple financial solutions built for individuals and businesses in Ghana.
            </p>
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white sm:right-6"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
