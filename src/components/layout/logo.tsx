import { cn } from "@/lib/utils";
import logoIcon from "@/assets/brand/logo-icon.png";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img src={logoIcon} alt="" className="h-9 w-9 shrink-0" width={36} height={36} />
      <span className="leading-tight">
        <span
          className={cn(
            "block text-[17px] font-extrabold tracking-tight",
            dark ? "text-white" : "text-ink",
          )}
        >
          Dara <span className="font-semibold text-primary">Micro Credit</span>
        </span>
        <span
          className={cn(
            "hidden text-[10px] font-semibold uppercase tracking-[0.14em] sm:block",
            dark ? "text-accent" : "text-accent-dark",
          )}
        >
          Your Wealth, Our Wealth
        </span>
      </span>
    </div>
  );
}
