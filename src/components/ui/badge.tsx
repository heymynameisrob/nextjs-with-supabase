import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-ui-mid text-primary",
        accent: "border-transparent bg-accent text-white",
        destructive:
          "border-transparent bg-red-600 text-white hover:bg-red-700",
        notification: "border-transparent bg-red-600 text-white",
        outline: "text-foreground",
      },
      size: {
        sm: "h-5 px-1.5 text-xs",
        md: "h-6",
        lg: "h-7 px-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, size, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
