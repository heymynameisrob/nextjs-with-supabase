import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-background border-[0.5px] border-primary hover:opacity-90",
        brand:
          "bg-accent text-white border-[0.5px] border-accent hover:opacity-90",
        destructive: "bg-red-600 text-white hover:bg-destructive/90",
        secondary:
          "bg-ui border-[0.5px] border-outline text-primary hover:bg-ui-mid",
        ghost: "hover:bg-ui-mid",
        link: "underline-offset-4 hover:underline text-accent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-8 px-3 text-xs rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
