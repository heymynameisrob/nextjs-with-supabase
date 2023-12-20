import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/utils"
import Image from "next/image"

export const Thumbnail = ({ src, alt, className, ...props }: any) => {
  return(
    <div className={cn("w-[40px]", className)}>
      <AspectRatio ratio={1} className="rounded-md border-[0.5px] border-outline bg-ui-mid">
        {src && <Image src={src} alt={alt} className="rounded-md object-cover w-full h-auto" loading="lazy" width={96} height={96} {...props} />}
      </AspectRatio>
    </div>
  )
}