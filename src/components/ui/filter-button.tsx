import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/utils"
import { ChevronDown } from "lucide-react"

export const FilterButton = ({children, className, label, open, ...props}: any) => {
  return(
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("flex h-10 w-full items-center justify-between border-[0.5px] border-outline rounded-lg bg-background px-3 py-2 text-sm font-medium tracking-tight hover:bg-ui-low ring-offset-background placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:bg-ui-mid dark:focus:ring-stone-300", className)}>
        <div className="flex flex-row justify-between items-center gap-2 w-full">
          <small>{label}</small>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}