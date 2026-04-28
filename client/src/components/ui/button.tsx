import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary-border hover:shadow-[0_0_20px_-5px_rgba(107,140,78,0.4)]",
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive-border",
        outline:
          "border [border-color:var(--button-outline)] shadow-xs active:shadow-none hover:bg-accent/10 hover:border-accent/20",
        secondary: "border bg-secondary text-secondary-foreground border border-secondary-border hover:bg-secondary/80",
        ghost: "border border-transparent hover:bg-accent/10",
        editorial: "bg-transparent text-foreground border border-foreground/10 px-8 py-4 uppercase tracking-[0.4em] text-[10px] font-bold hover:border-primary hover:text-primary hover:tracking-[0.5em] transition-all duration-500",
        shimmer: "bg-primary text-primary-foreground border border-primary-border relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-1000",
      },
      size: {
        default: "min-h-11 px-6 py-2",
        sm: "min-h-9 rounded-md px-4 text-xs",
        lg: "min-h-14 rounded-md px-10 text-base",
        editorial: "min-h-[60px] px-12",
        icon: "h-11 w-11",
      },
      glow: {
        true: "glow-sage",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  withShimmer?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, withShimmer, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant: withShimmer ? "shimmer" : variant, size, glow, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
