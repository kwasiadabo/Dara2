import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingMetricProps {
  icon: LucideIcon;
  label: string;
  value: string;
  tone?: "primary" | "accent" | "neutral";
  className?: string;
  delay?: number;
  floatDuration?: number;
}

export function FloatingMetric({
  icon: Icon,
  label,
  value,
  tone = "neutral",
  className,
  delay = 0,
  floatDuration = 5,
}: FloatingMetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="rounded-[1.25rem] bg-white/[0.94] p-1 shadow-[var(--shadow-soft-lg)] ring-1 ring-black/[0.04] backdrop-blur-xl"
      >
        <div className="flex items-center gap-3 rounded-[1rem] px-3.5 py-3">
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
              tone === "primary" && "bg-primary text-white",
              tone === "accent" && "bg-accent text-white",
              tone === "neutral" && "bg-primary-light text-primary-dark",
            )}
          >
            <Icon className="h-4 w-4" strokeWidth={2.25} />
          </span>
          <div className="flex flex-col">
            <span className="text-[11px] font-medium text-ink-soft">{label}</span>
            <span className="text-[14px] font-bold text-ink">{value}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
