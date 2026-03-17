"use client"

import * as React from "react"
import Image from "next/image"
import { MenuIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

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

const projects = [
  { name: "Bentley", href: "/work/bentley" },
  { name: "Docufai", href: "/work/docufai" },
  { name: "Ripcord", href: "/work/ripcord" },
  { name: "Karhoo", href: "/work/karhoo" },
  { name: "Reuters", href: "/work/reuters" },
] as const

export function SiteNavbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [ctaState, setCtaState] = React.useState<"collapsed" | "expanded">("collapsed")
  const [isWorkMenuOpen, setIsWorkMenuOpen] = React.useState(false)

  const closeTimeoutRef = React.useRef<number | null>(null)

  const clearWorkMenuCloseTimeout = React.useCallback(() => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }, [])

  const openWorkMenu = React.useCallback(() => {
    clearWorkMenuCloseTimeout()
    setIsWorkMenuOpen(true)
  }, [clearWorkMenuCloseTimeout])

  const closeWorkMenuImmediately = React.useCallback(() => {
    clearWorkMenuCloseTimeout()
    setIsWorkMenuOpen(false)
  }, [clearWorkMenuCloseTimeout])

  const scheduleWorkMenuClose = React.useCallback(() => {
    clearWorkMenuCloseTimeout()
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsWorkMenuOpen(false)
      closeTimeoutRef.current = null
    }, 120)
  }, [clearWorkMenuCloseTimeout])

  const handleWorkMenuBlur = React.useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        scheduleWorkMenuClose()
      }
    },
    [scheduleWorkMenuClose]
  )

  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  React.useEffect(() => {
    if (!isWorkMenuOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null
      const menuRoot = document.querySelector("[data-work-menu-root]")

      if (menuRoot && target && !menuRoot.contains(target)) {
        closeWorkMenuImmediately()
      }
    }

    window.addEventListener("pointerdown", handlePointerDown)
    return () => window.removeEventListener("pointerdown", handlePointerDown)
  }, [isWorkMenuOpen, closeWorkMenuImmediately])

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
      <SiteContainer className="mt-6 flex items-center max-w-[1200px] px-12">

        {/* ── LEFT ── */}
        <div className="flex w-[120px] items-center justify-start">
          <motion.a
            href="/"
            aria-label="Home"
            className={cn(
              buttonVariants({ variant: "outline", size: "default" }),
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-border/70 bg-transparent p-0 shadow-none"
            )}
            whileHover={{ rotate: 360 }}
            transition={{
              duration: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Sun className="h-6 w-6 text-muted-foreground" />
          </motion.a>
        </div>

        {/* ── CENTER — Selected work trigger + dropdown (desktop) ── */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          {/* Shared hover zone for trigger + dropdown */}
          <motion.div
            data-work-menu-root
            className="group/menu relative inline-block"
            initial="rest"
            animate={isWorkMenuOpen ? "hover" : "rest"}
            whileHover="hover"
            onMouseEnter={openWorkMenu}
            onMouseLeave={scheduleWorkMenuClose}
            onFocusCapture={openWorkMenu}
            onBlurCapture={handleWorkMenuBlur}
          >

            {/* Trigger */}
            <Button
              type="button"
              variant="outline"
              aria-haspopup="menu"
              aria-expanded={isWorkMenuOpen}
              aria-controls="selected-work-menu"
              className="inline-flex h-10 items-center gap-2 rounded-full border-border/70 bg-transparent pl-2 pr-4 text-sm font-medium text-foreground shadow-none transition-colors group-hover/menu:bg-[rgba(157,157,158,0.1)] group-focus-within/menu:bg-[rgba(157,157,158,0.1)]"
            >
              <motion.span
                className="relative inline-flex h-9 w-9 items-center justify-center"
                variants={{
                  rest: { rotate: 0 },
                  hover: { rotate: 720 },
                }}
                transition={{
                  duration: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="relative h-6 w-6">
                  <Image
                    src="/cadence/default.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="absolute inset-0 h-full w-full opacity-100 transition-opacity duration-150 ease-out group-hover/menu:opacity-0 group-focus-within/menu:opacity-0"
                  />
                  <Image
                    src="/cadence/colored.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-150 ease-out group-hover/menu:opacity-100 group-focus-within/menu:opacity-100"
                  />
                </span>
              </motion.span>
              <span className="whitespace-nowrap">Selected work</span>
            </Button>

            <AnimatePresence>
              {isWorkMenuOpen ? (
                <motion.div
                  id="selected-work-menu"
                  role="menu"
                  className="absolute left-0 top-full z-10 w-full"
                  initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                    filter: "blur(4px)",
                    transition: {
                      duration: 0.14,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                >
                  <div className="mt-1 rounded-2xl border border-border/60 bg-background p-2 shadow-lg">
                    <div className="flex flex-col gap-1">
                      {projects.map((project) => (
                        <a
                          key={project.name}
                          href={project.href}
                          role="menuitem"
                          className="flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-muted/60 focus-visible:bg-muted/60 focus-visible:outline-none"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted" />
                          <span className="text-sm font-medium text-foreground">
                            {project.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

          </motion.div>
        </div>

        {/* ── RIGHT — contact button (desktop) ── */}
        <div className="hidden w-[120px] items-center justify-end md:flex">
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

        {/* ── Mobile fallback ── */}
        <div className="ml-auto flex items-center gap-2 md:hidden">
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
