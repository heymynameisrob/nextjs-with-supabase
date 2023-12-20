"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils"

type ToggleProps = TogglePrimitive.ToggleProps & {  
  label: string
  children: React.ReactNode
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline"
  side?: "left" | "right" | "top" | "bottom"
}

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-ui-mid hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-ui-mid data-[state=on]:text-primary",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border-[0.5px] border-outline bg-background hover:bg-ui-mid hover:text-primary data-[state=on]:bg-ui-mid data-[state=on]:text-primary",
        black: 
        "bg-stone-950 text-white hover:bg-white hover:bg-opacity-10 hover:text-white data-[state=on]:bg-white/10 data-[state=on]:text-white",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))


Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
