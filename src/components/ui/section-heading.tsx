import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={cn(
          "text-balance text-[34px] leading-[1.12] font-bold tracking-tight sm:text-[42px] lg:text-[50px]",
          tone === "light" ? "text-ink" : "text-white",
          align === "center" && "max-w-3xl",
          titleClassName,
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={cn(
            "max-w-xl text-[17px] leading-relaxed",
            tone === "light" ? "text-ink-soft" : "text-white/75",
            align === "center" && "max-w-2xl",
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
