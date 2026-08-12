import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/layout/social-icons";
import { contactDetails } from "@/data/footer";

export function WhatsAppFab() {
  return (
    <motion.a
      href={contactDetails.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dara Micro Credit on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-accent text-white shadow-[var(--shadow-soft-lg)]"
    >
      <WhatsAppIcon className="h-6 w-6" strokeWidth={2} />
    </motion.a>
  );
}
