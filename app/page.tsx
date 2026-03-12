import { CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/layout/footer"
import { SiteContainer } from "@/components/layout/site-container"

export default function Page() {
  return (
    <main className="min-h-svh pt-16 sm:pt-24">
      <SiteContainer className="scroll-mt-20" id="home">
        <section className="grid w-full gap-y-10 text-left md:grid-cols-12 md:gap-x-8 md:items-end">
          <div className="flex max-w-3xl flex-col items-start md:col-span-5">
            <h1 className="text-balance text-2xl font-medium tracking-tight">
              I&apos;m Tazo, a product designer.
            </h1>

            <p className="mt-5 max-w-2xl text-balance text-base leading-[1.3] text-muted-foreground">
              I design internal tools and complex systems and I&apos;m learning
              to build them too.
            </p>
          </div>

          <div className="md:col-start-7 md:col-span-6 self-end">
            <div className="w-full space-y-3 text-sm leading-4 text-muted-foreground">
              <div className="grid grid-cols-6 items-end gap-x-8 text-left">
                <span className="col-span-1 text-sm leading-4 text-muted-foreground">
                  2025
                </span>
                <span className="col-span-3 text-foreground">Credo Bank</span>
                <span className="col-span-2 text-sm text-muted-foreground">
                  UI/UX Designer
                </span>
              </div>
              <div className="grid grid-cols-6 items-end gap-x-8 text-left">
                <span className="col-span-1 text-sm leading-4 text-muted-foreground">
                  2025
                </span>
                <span className="col-span-3 text-foreground">Profy NYC</span>
                <span className="col-span-2 text-sm text-muted-foreground">
                  Product Designer
                </span>
              </div>
              <div className="grid grid-cols-6 items-end gap-x-8 text-left">
                <span className="col-span-1 text-sm leading-4 text-muted-foreground">
                  2023
                </span>
                <span className="col-span-3 text-foreground">IT Service Georgia</span>
                <span className="col-span-2 text-sm text-muted-foreground">
                  UI/UX Designer
                </span>
              </div>
            </div>
          </div>
        </section>
      </SiteContainer>

      <SiteContainer
        id="work"
        className="mt-16 scroll-mt-20 sm:mt-20"
      >
        <section>
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-12 md:gap-x-8">
            <div className="h-full md:col-span-6">
              <CardContent className="flex h-full flex-col gap-4 px-0">
                <div className="media-surface aspect-[16/9] w-full rounded-lg border border-border/70 bg-muted/30" />
                <div className="space-y-1.5">
                  <CardTitle className="text-lg">Credo CRM</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Internal CRM platform focused on complex employee workflows,
                    appointments, and operational clarity.
                  </CardDescription>
                </div>
              </CardContent>
            </div>

            <div className="h-full md:col-span-6 md:col-start-7">
              <a href="/cadence" className="block h-full">
                <CardContent className="flex h-full flex-col gap-4 px-0">
                  <div className="media-surface aspect-[16/9] w-full rounded-lg border border-border/70 bg-muted/30" />
                  <div className="space-y-1.5">
                    <CardTitle className="text-lg">Cadence</CardTitle>
                    <CardDescription className="leading-relaxed">
                      Command-driven productivity system designed for fast task
                      creation and scheduling.
                    </CardDescription>
                  </div>
                </CardContent>
              </a>
            </div>

            <div className="h-full md:col-span-6">
              <CardContent className="flex h-full flex-col gap-4 px-0">
                <div className="media-surface aspect-[16/9] w-full rounded-lg border border-border/70 bg-muted/30" />
                <div className="space-y-1.5">
                  <CardTitle className="text-lg">Komireader</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Minimal manga reader concept with a calm interface, strong
                    typography, and immersive reading experience.
                  </CardDescription>
                </div>
              </CardContent>
            </div>

            <div className="h-full md:col-span-6 md:col-start-7">
              <CardContent className="flex h-full flex-col gap-4 px-0">
                <div className="media-surface aspect-[16/9] w-full rounded-lg border border-border/70 bg-muted/30" />
                <div className="space-y-1.5">
                  <CardTitle className="text-lg">Social Good Platform</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Donation and coordination platform helping people in need
                    and stray animals through verified local support flows.
                  </CardDescription>
                </div>
              </CardContent>
            </div>
          </div>
        </section>
      </SiteContainer>

      <Footer />
    </main>
  )
}
