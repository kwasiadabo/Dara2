import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navLinks } from "@/data/navigation";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="sticky top-0 z-40"
      >
        <div
          className={cn(
            "transition-all duration-500 ease-out-quart",
            scrolled
              ? "border-b border-border/70 bg-white/85 py-2.5 backdrop-blur-xl"
              : "border-b border-transparent bg-white/0 py-4",
          )}
        >
          <Container className="flex items-center justify-between">
            <Link to="/" aria-label="Dara Micro Credit home">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative rounded-full px-4 py-2 text-[14.5px] font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-primary transition-transform duration-300 ease-out-quart group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[1.5px] w-5 bg-ink transition-all duration-300 ease-out-quart",
                    open && "top-[7px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] h-[1.5px] w-5 bg-ink transition-all duration-300 ease-out-quart",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 bottom-0 h-[1.5px] w-5 bg-ink transition-all duration-300 ease-out-quart",
                    open && "bottom-[7px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </Container>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[64px] z-30 bg-white/98 backdrop-blur-2xl lg:hidden"
          >
            <Container className="flex h-full flex-col justify-between py-10">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-border py-4 text-[26px] font-bold tracking-tight text-ink"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
