import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        Placeholder page for now.
      </p>
      <div className="mt-8">
        <Button asChild>
          <a href="mailto:hello@tazo.design">Email</a>
        </Button>
      </div>
    </main>
  )
}

