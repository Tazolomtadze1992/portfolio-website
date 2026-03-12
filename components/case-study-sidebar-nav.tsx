"use client"

import * as React from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

type CaseStudySection = {
  id: string
  label: string
}

type CaseStudySidebarNavProps = {
  items: CaseStudySection[]
  className?: string
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -12,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as any,
      when: "beforeChildren",
      staggerChildren: 0.09,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
}

export function CaseStudySidebarNav({ items, className }: CaseStudySidebarNavProps) {
  const [activeId, setActiveId] = React.useState<string | null>(items[0]?.id ?? null)
  const [showNav, setShowNav] = React.useState(false)

  React.useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id) setActiveId(id)
          }
        })
      },
      {
        root: null,
        threshold: 0.3,
      }
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  React.useEffect(() => {
    const handleScroll = () => {
      const threshold = 64 // ~40–80px range
      setShowNav(window.scrollY > threshold)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={cn("hidden md:block md:col-span-2", className)}
      aria-label="Case study sections"
      variants={containerVariants}
      initial="hidden"
      animate={showNav ? "visible" : "hidden"}
    >
      <div className="sticky top-32">
        <motion.ul className="space-y-2.5 text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id
            return (
              <motion.li key={item.id} variants={itemVariants}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block leading-relaxed transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </motion.nav>
  )
}

