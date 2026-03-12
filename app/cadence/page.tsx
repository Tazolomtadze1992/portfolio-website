import Image from "next/image"
import { Footer } from "@/components/layout/footer"
import { SiteContainer } from "@/components/layout/site-container"
import { CadenceLiveDemoButton } from "@/components/cadence-live-demo-button"
import { CaseStudySidebarNav } from "@/components/case-study-sidebar-nav"
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "@/components/ui/carousel"

export default function CadenceCaseStudyPage() {
  return (
    <main className="min-h-svh pt-16 sm:pt-24">
      <SiteContainer className="pb-24">
        <div className="grid w-full grid-cols-1 md:grid-cols-12 md:gap-x-8">
          <CaseStudySidebarNav
            items={[
              { id: "overview", label: "Overview" },
              { id: "opportunity", label: "Opportunity" },
              { id: "interaction-model", label: "Interaction Model" },
              { id: "workflows", label: "Workflows" },
              { id: "system-logic", label: "System Logic" },
              { id: "interface", label: "Interface" },
              { id: "reflection", label: "Reflection" },
            ]}
          />

          <div className="md:col-start-3 md:col-span-8 space-y-24">
            {/* 1. HERO */}
            <section className="space-y-8">
              <div className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8">
                <div className="md:col-span-4">
                  <h1 className="text-2xl font-medium tracking-tight">Cadence</h1>
                  <p className="mt-3 text-base text-muted-foreground">
                    Cadence is a productivity workspace that combines task planning with a flexible canvas for visual thinking.
                  </p>
                  <CadenceLiveDemoButton />
                </div>
                <div className="mt-6 md:mt-0 md:col-start-7 md:col-span-2 text-sm text-muted-foreground">
                  <p className="whitespace-nowrap">Role: Product Designer</p>
                  <p>Year: 2025</p>
                  <p>Platform: Web</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="media-surface overflow-hidden rounded-lg">
                  <Image
                    src="/cadence/hero-temp.png"
                    alt="Cadence calendar view showing scheduled tasks on a weekly timeline"
                    width={1024}
                    height={581}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </div>
            </section>
            {/* 2. OVERVIEW */}
            <section
              id="overview"
              className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8"
            >
              <h2 className="md:col-span-6 text-lg font-medium">Overview</h2>
              <p className="md:col-span-5 mt-2 text-base text-muted-foreground">
                Cadence began as a personal project to explore product design and early
                design‑engineering workflows.
              </p>
              <div className="md:col-span-8 mt-12 mb-16">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  System model
                </p>
                <Image
                  src="/cadence/diagram.svg"
                  alt="Cadence system model showing tasks, calendar and canvas working together"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                />
              </div>
            </section>

            {/* 3. OPPORTUNITY */}
            <section
              id="opportunity"
              className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8"
            >
              <div className="md:col-span-4">
                <p className="text-sm text-muted-foreground">Opportunity</p>
                <h2 className="text-lg font-medium">Problem</h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Most productivity tools support either structured task management or freeform thinking, forcing users to switch tools and break flow.
                </p>
              </div>
              <div className="md:col-start-5 md:col-span-4">
                <p className="text-sm text-muted-foreground">Opportunity</p>
                <h2 className="text-lg font-medium">Goal</h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Cadence explores a workspace where planning and visual thinking can exist in the same system.
                </p>
              </div>
            </section>

            {/* 4. INTERACTION MODEL */}
            <section
              id="interaction-model"
              className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8"
            >
              <div className="md:col-span-8">
                <h2 className="text-lg font-medium">Interaction model</h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Tasks live in a structured system while canvas mode supports spatial thinking, allowing users to move between planning and exploration in one workspace.
                </p>
              </div>
              <div className="md:col-span-8 mt-8">
                <div className="media-surface aspect-video w-full rounded-lg bg-muted" />
              </div>
            </section>

            {/* 5. WORKFLOWS */}
            <section id="workflows" className="space-y-24">
              {/* Task creation flow */}
              <div className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8 md:items-center">
                <div className="md:col-span-3">
                  <p className="text-sm text-muted-foreground">Workflow</p>
                  <h2 className="text-lg font-medium">Task creation flow</h2>
                  <p className="mt-2 text-base text-muted-foreground">
                    Task creation focuses on quick capture so ideas can turn into tasks without interrupting momentum.
                  </p>
                </div>
                <div className="md:col-start-4 md:col-span-5 mt-6 md:mt-0">
                  <div className="media-surface aspect-[4/3] w-full rounded-lg bg-muted" />
                </div>
              </div>

              {/* Calendar manipulation */}
              <div className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8 md:items-center">
                <div className="md:col-span-4 order-2 md:order-1 mt-6 md:mt-0">
                  <div className="media-surface aspect-[4/3] w-full rounded-lg bg-muted" />
                </div>
                <div className="md:col-start-5 md:col-span-4 order-1 md:order-2">
                  <p className="text-sm text-muted-foreground">Workflow</p>
                  <h2 className="text-lg font-medium">Calendar manipulation</h2>
                  <p className="mt-2 text-base text-muted-foreground">
                    Tasks can be dragged, resized, and repositioned to shape plans directly on the timeline.
                  </p>
                </div>
              </div>

              {/* Power workflows */}
              <div className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8">
                <div className="md:col-span-8">
                  <p className="text-sm text-muted-foreground">Workflow</p>
                  <h2 className="text-lg font-medium">Power workflows</h2>
                  <p className="mt-2 text-base text-muted-foreground">
                    Additional workflows explore faster interactions and clearer organization for heavier planning use.
                  </p>
                </div>
                <div className="md:col-span-8 mt-8">
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem className="basis-[85%]">
                        <div className="media-surface aspect-[4/3] w-full rounded-lg bg-muted" />
                      </CarouselItem>
                      <CarouselItem className="basis-[85%]">
                        <div className="media-surface aspect-[4/3] w-full rounded-lg bg-muted" />
                      </CarouselItem>
                      <CarouselItem className="basis-[85%]">
                        <div className="media-surface aspect-[4/3] w-full rounded-lg bg-muted" />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselDots />
                  </Carousel>
                </div>
              </div>
            </section>

            {/* 8. SYSTEM LOGIC */}
            <section
              id="system-logic"
              className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8"
            >
              <div className="md:col-span-8">
                <h2 className="text-lg font-medium">System logic</h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Tasks, schedules, and canvas elements are designed as parts of the same system rather than separate tools.
                </p>
              </div>
              <div className="md:col-span-8 mt-8">
                <div className="media-surface aspect-[3/1] w-full rounded-lg bg-muted" />
              </div>
            </section>

            {/* 9. INTERFACE */}
            <section
              id="interface"
              className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8"
            >
              <h2 className="md:col-span-8 text-lg font-medium">
                Interface
              </h2>
              <p className="md:col-span-5 mt-2 text-base text-muted-foreground">
                The interface focuses on clarity through hierarchy, spacing, and restrained visual styling.
              </p>
              <div className="md:col-span-8 mt-6">
                <div className="media-surface aspect-[21/9] w-full rounded-lg bg-muted" />
              </div>
            </section>

            {/* 10. REFLECTION */}
            <section
              id="reflection"
              className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8"
            >
              <div className="md:col-span-5">
                <h2 className="text-lg font-medium">Reflection</h2>
                <p className="mt-2 text-base text-muted-foreground">
                  This project became an exploration of interaction design and early design‑engineering thinking.
                </p>
              </div>
              <div className="md:col-start-6 md:col-span-3 mt-6 md:mt-0">
                <h3 className="text-sm font-medium">Next steps</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  Next steps include expanding canvas capabilities, refining workflows, and implementing more product logic directly in code.
                </p>
              </div>
            </section>
          </div>
        </div>
      </SiteContainer>

      <Footer />
    </main>
  )
}
