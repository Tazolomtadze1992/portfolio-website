"use client"

import * as React from "react"
import { ArrowUpRightIcon } from "@/components/icons/arrow-up-right"
import { cn } from "@/lib/utils"

export function CadenceLiveDemoButton() {
  return (
    <a
      href="https://cadence-app-indol.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button
        className={cn(
          "group relative mt-6 inline-flex h-10 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-transparent px-4 text-sm font-medium shadow-none transition duration-300 ease-out"
        )}
      >
        <span
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 z-0 flex w-full"
          )}
        >
          <span
            className={cn(
              "h-full w-full origin-left scale-x-0 rounded-full bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100"
            )}
          />
        </span>

        <span
          className={cn(
            "relative z-10 flex items-center justify-center whitespace-nowrap text-foreground transition-transform duration-300 ease-in-out group-hover:translate-x-5 group-hover:text-transparent"
          )}
        >
          Live Demo
        </span>

        <span
          className={cn(
            "pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-background opacity-0 -translate-x-full transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
          )}
        >
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      </button>
    </a>
  )
}
