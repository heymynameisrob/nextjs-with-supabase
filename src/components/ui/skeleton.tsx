import { cn } from "@/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-ui-mid dark:bg-ui-mid", className)}
      {...props}
    />
  )
}

export { Skeleton }
