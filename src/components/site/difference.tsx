import { SectionHeading } from "@/components/site/section-heading"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { roles } from "@/lib/content"

const DIFFERENCE_IMAGE =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80"

export function Difference() {
  return (
    <section id="difference" className="bg-zinc-950 py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="flex flex-col">
          <SectionHeading
            tone="dark"
            eyebrow="The Difference"
            title="Built by leaders from every side of the industry"
            lede="Broker. Carrier. Consultant. Employer. That cross-market perspective is how we drive better outcomes—without the blind spots of a single vantage point."
          />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {roles.map((role, i) => {
              const Icon = role.icon
              return (
                <Reveal
                  key={role.label}
                  delay={Math.min(i, 3) as 0 | 1 | 2 | 3}
                  className="flex flex-col items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  <span className="bg-brand/20 flex size-9 items-center justify-center rounded-lg">
                    <Icon className="text-brand size-4" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-sm font-medium text-white">
                    {role.label}
                  </span>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal delay={1} className="relative h-full min-h-[22rem]">
          <div className="absolute inset-0 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              src={DIFFERENCE_IMAGE}
              alt="Two professionals discussing strategy at a table"
              width={1400}
              height={1050}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden
            className="bg-brand/25 pointer-events-none absolute -top-8 -left-8 -z-10 size-40 rounded-full blur-3xl"
          />
        </Reveal>
      </Container>
    </section>
  )
}
