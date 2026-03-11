import * as React from "react"

import { cn } from "@/lib/utils"

type SiteContainerProps = React.HTMLAttributes<HTMLDivElement>

export function SiteContainer({ className, ...props }: SiteContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-6", className)}
      {...props}
    />
  )
}

