import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}

export function Eyebrow({ children, className, tone = "light" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]",
        tone === "light"
          ? "bg-primary-light text-primary-dark"
          : "bg-white/10 text-white ring-1 ring-white/15",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "light" ? "bg-primary" : "bg-accent",
        )}
      />
      {children}
    </span>
  );
}
