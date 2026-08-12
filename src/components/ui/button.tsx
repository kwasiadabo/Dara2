import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-out-quart disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-[var(--shadow-glow-primary)] hover:bg-primary-dark",
        outline:
          "border border-border bg-transparent text-ink hover:border-primary/40 hover:bg-primary-light/40",
        ghost: "text-ink hover:bg-bg-soft",
        ghostOnDark: "text-white hover:bg-white/10",
        light: "bg-white text-primary-dark hover:bg-white/90",
        onDark: "bg-white text-primary-dark hover:bg-accent",
      },
      size: {
        default: "h-13 px-6 text-[15px] py-3.5",
        sm: "h-10 px-4.5 text-sm py-2.5",
        lg: "h-14 px-7 text-base py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, children, ...props }, ref) => {
    const iconWrapper = icon ? (
      <span
        className={cn(
          "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-out-quart group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5",
          variant === "primary" && "bg-accent text-white",
          variant === "ghostOnDark" && "bg-white/15",
          (variant === "outline" || variant === "ghost" || variant === "light" || variant === "onDark") &&
            "bg-primary/10",
        )}
      >
        {icon}
      </span>
    ) : null;

    if (asChild) {
      const child = children as React.ReactElement<{ children?: React.ReactNode }>;
      return (
        <Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
          {React.cloneElement(child, undefined, [
            child.props.children,
            iconWrapper && React.cloneElement(iconWrapper, { key: "btn-icon" }),
          ])}
        </Slot>
      );
    }

    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
        {iconWrapper}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
