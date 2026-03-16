import Image from "next/image"
import { Footer } from "@/components/layout/footer"
import { SiteContainer } from "@/components/layout/site-container"
import { CadenceLiveDemoButton } from "@/components/cadence-live-demo-button"
import { CaseStudySidebarNav } from "@/components/case-study-sidebar-nav"
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "@/components/ui/carousel"
import { TaskCaptureAnimation } from "@/components/cadence/task-capture-animation"
import { BoardAttachAnimation } from "@/components/cadence/board-attach-animation"

export default function CadenceCaseStudyPage() {
  return (
    <main className="min-h-svh pt-16 sm:pt-24">
      <SiteContainer className="pb-24">
        <div className="grid w-full grid-cols-1 md:grid-cols-12 md:gap-x-8">
          <CaseStudySidebarNav
            items={[
              { id: "intro", label: "Intro" },
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
                  <h1 className="text-2xl font-medium tracking-tight">
                    <span className="text-foreground">Cadence</span>
                    <span className="text-muted-foreground">
                      {" "}
                      — Planning and visual thinking in one workspace
                    </span>
                  </h1>
                  <CadenceLiveDemoButton />
                </div>
                <div className="mt-6 md:mt-0 md:col-start-5 md:col-span-4 text-sm text-muted-foreground">
                  <p className="text-base text-muted-foreground">
                    Cadence began as a personal project to explore product design and early design-engineering workflows. It combines task planning with a flexible canvas for visual thinking in one workspace.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Role</p>
                      <p className="mt-1 text-foreground whitespace-nowrap">Product Designer</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Year</p>
                      <p className="mt-1 text-foreground">2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="media-surface overflow-hidden">
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

            {/* 3. OPPORTUNITY */}
            <section
              id="opportunity"
              className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8"
            >
              <div className="md:col-span-6">
                <h2 className="text-lg font-medium">Opportunity</h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Most productivity tools separate structured task management from freeform thinking. Cadence explores a workspace where planning and visual thinking can exist in the same system.
                </p>
              </div>

              <div className="md:col-span-8 mt-10">
                <div className="media-surface overflow-hidden">
                  <Image
                    src="/cadence/diagram.svg"
                    alt="Cadence system model showing tasks, calendar and canvas working together"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                  />
                </div>

                <p className="mt-2 text-center text-xs text-muted-foreground/50">
                  System model
                </p>
              </div>
            </section>

            {/* 4. INTERACTION MODEL */}
            <section
              id="interaction-model"
              className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8"
            >
              <div className="md:col-span-6">
                <h2 className="text-lg font-medium">Interaction model</h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Cadence combines structured task planning with a flexible canvas for visual thinking, allowing users to move between planning and exploration in one workspace.
                </p>
              </div>
              <div className="md:col-span-8 mt-8">
                <div className="media-surface overflow-hidden">
                  <Image
                    src="/cadence/placeholder.png"
                    alt="Cadence interaction model demonstration"
                    width={1200}
                    height={675}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </section>

            {/* 5. WORKFLOWS */}
            <section id="workflows" className="space-y-24">
              <div className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8">
                <div className="md:col-span-6">
                  <h2 className="text-lg font-medium">Workflows</h2>
                  <p className="mt-2 text-base text-muted-foreground">
                    Cadence focuses on workflows that keep planning fast and flexible, reducing friction between capturing an idea, organizing it, and shaping a plan.
                  </p>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-8 md:gap-x-8 md:items-start">
                <div className="md:col-span-4">
                  <div className="group media-surface relative w-full h-full aspect-[4/3] bg-[#F8F8F8] flex items-center justify-center p-8">
                    <TaskCaptureAnimation className="h-auto w-full max-w-[220px]" />
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground">Workflow</p>
                    <h2 className="text-lg font-medium">Task creation flow</h2>
                    <p className="mt-2 text-base text-muted-foreground">
                      Task creation focuses on quick capture so ideas can turn into tasks without interrupting momentum.
                    </p>
                  </div>
                </div>

                <div className="md:col-span-4 mt-12 md:mt-0">
                  <div className="group media-surface relative aspect-[4/3] w-full bg-[#F8F8F8] flex items-center justify-center p-8">
                    <BoardAttachAnimation className="h-auto w-full max-w-[260px]" />
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground">Workflow</p>
                    <h2 className="text-lg font-medium">Calendar manipulation</h2>
                    <p className="mt-2 text-base text-muted-foreground">
                      Tasks can be dragged, resized, and repositioned to shape plans directly on the timeline.
                    </p>
                  </div>
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
                        <div className="media-surface aspect-[4/3] w-full bg-[#F8F8F8]" />
                      </CarouselItem>
                      <CarouselItem className="basis-[85%]">
                        <div className="media-surface aspect-[4/3] w-full bg-[#F8F8F8]" />
                      </CarouselItem>
                      <CarouselItem className="basis-[85%]">
                        <div className="media-surface aspect-[4/3] w-full bg-[#F8F8F8]" />
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
                <div className="media-surface overflow-hidden bg-[#F8F8F8] px-12 py-10">
                  <Image
                    src="/cadence/how-it-works.svg"
                    alt="System logic diagram showing how tasks, schedules, and canvas elements connect within Cadence"
                    width={497}
                    height={401}
                    className="h-auto w-full"
                  />
                </div>

                <p className="mt-2 text-center text-xs text-muted-foreground/50">
                  System logic
                </p>
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
                <div className="media-surface aspect-[21/9] w-full bg-[#F8F8F8]" />
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
