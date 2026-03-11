"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SiteContainer } from "@/components/layout/site-container"

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
] as const

export function Footer() {
  return (
    <footer className="mt-16 w-full sm:mt-24">
      <SiteContainer>
        <Separator />

        <div className="py-10">
          <div className="flex flex-col gap-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p className="leading-relaxed">
              © 2026 Tazo. Designed and developed by Tazo.
            </p>

            <div className="flex items-center justify-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-foreground/80 transition-opacity hover:opacity-70"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex justify-center md:justify-end">
              <Button variant="ghost" size="sm" asChild className="px-2">
                <a
                  href="/contact"
                  className="text-foreground/80 transition-opacity hover:opacity-70"
                >
                  Let&apos;s chat →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SiteContainer>
    </footer>
  )
}

