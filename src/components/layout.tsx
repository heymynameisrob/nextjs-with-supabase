import { cn } from "@/utils"

export const Container = ({children, size, className}: { children: React.ReactNode, size?: "sm" | "lg" | "default", className?: string }) => {
  return (    
    <div className={cn("max-w-6xl mx-auto px-5", size === "sm" && "max-w-3xl", size === "lg" && "max max-w-7xl", className)}>
      {children}
    </div>    
  )
}