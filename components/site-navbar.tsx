"use client"

import * as React from "react"
import { MenuIcon } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { EnvelopeIcon } from "@/components/icons/envelope"
import { Sun } from "@/components/icons/sun"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { SiteContainer } from "@/components/layout/site-container"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
] as const

export function SiteNavbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [ctaState, setCtaState] = React.useState<"collapsed" | "expanded">("collapsed")

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors",
        scrolled
          ? "bg-background/70 supports-backdrop-filter:backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <SiteContainer className="grid h-[68px] grid-cols-12 items-center gap-x-8">
        <motion.a
          href="/"
          aria-label="Home"
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "col-span-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-border/70 bg-transparent p-0 shadow-none"
          )}
          whileHover={{ rotate: 360 }}
          transition={{
            duration: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Sun className="h-6 w-6 text-muted-foreground" />
        </motion.a>

        <nav className="hidden md:col-start-7 md:col-span-4 md:flex md:items-center md:justify-start md:gap-3">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="link"
              size="sm"
              className="px-0 text-sm font-medium text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>

        <div className="hidden md:col-span-2 md:flex md:items-center md:justify-end md:gap-2">
          <motion.a
            href="mailto:hello@tazo.design"
            aria-label="Email Tazo"
            className={cn(
              buttonVariants({ variant: "outline", size: "default" }),
              "relative flex h-10 items-center overflow-hidden rounded-full border-border/70 bg-transparent px-3 shadow-none"
            )}
            initial={false}
            animate={{
              width: ctaState === "expanded" ? 132 : 44,
              backgroundColor:
                ctaState === "expanded" ? "rgba(157, 157, 158, 0.1)" : "rgba(0, 0, 0, 0)",
              boxShadow:
                ctaState === "expanded"
                  ? "inset 0 0 0 1px hsl(var(--border) / 0.75)"
                  : "inset 0 0 0 1px hsl(var(--border) / 0.5)",
              borderRadius: 999,
            }}
            transition={
              ctaState === "expanded"
                ? {
                    duration: 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : {
                    duration: 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }
            }
            onHoverStart={() => setCtaState("expanded")}
            onHoverEnd={() => setCtaState("collapsed")}
            onFocus={() => setCtaState("expanded")}
            onBlur={() => setCtaState("collapsed")}
          >
            <div className="relative h-full w-full">
              <motion.span
                className="pointer-events-none absolute left-2 top-1/2 z-10 -translate-y-1/2 whitespace-nowrap text-sm font-medium text-foreground"
                animate={{
                  opacity: ctaState === "expanded" ? 1 : 0,
                  filter: ctaState === "expanded" ? "blur(0px)" : "blur(16px)",
                  y: ctaState === "expanded" ? 0 : 4,
                }}
                transition={{
                  duration: ctaState === "expanded" ? 0.78 : 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Let&apos;s chat
              </motion.span>

              <motion.div
                className={cn(
                  "pointer-events-none absolute right-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center",
                  ctaState === "expanded"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                animate={{
                  x: ctaState === "expanded" ? 4 : 3,
                  rotate: ctaState === "expanded" ? 4 : 0,
                  opacity: ctaState === "expanded" ? 1 : 0.9,
                }}
                transition={
                  ctaState === "expanded"
                    ? {
                        duration: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }
                    : {
                        duration: 0.08,
                        ease: [0.4, 0, 0.2, 1],
                      }
                }
              >
                <EnvelopeIcon className="h-9 w-9" />
              </motion.div>
            </div>
          </motion.a>
        </div>

        <div className="col-span-8 flex items-center justify-end gap-2 md:hidden">
          <Button size="icon" variant="outline" asChild>
            <a href="mailto:hello@tazo.design" aria-label="Email Tazo">
              <EnvelopeIcon className="h-12 w-12" />
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Open menu">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <SheetHeader className="border-b">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-2">
                {navItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <a
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto border-t p-4">
                <SheetClose asChild>
                  <Button className="w-full" asChild>
                    <a href="/contact">Contact</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </SiteContainer>
    </header>
  )
}
