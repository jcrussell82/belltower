import { SectionHeading } from "@/components/site/section-heading"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { roles } from "@/lib/content"

export function Difference() {
  return (
    <section id="difference" className="bg-zinc-50 py-24 lg:py-32">
      <Container className="flex flex-col items-center">
        <SectionHeading
          align="center"
          eyebrow="The Difference"
          title="Built by leaders from every side of the industry"
          lede="Broker. Carrier. Consultant. Employer. That cross-market perspective is how we drive better outcomes—without the blind spots of a single vantage point."
        />

        <div className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, i) => {
            const Icon = role.icon
            return (
              <Reveal
                key={role.label}
                delay={Math.min(i, 3) as 0 | 1 | 2 | 3}
                className="flex flex-col items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-zinc-900/5"
              >
                <div className="bg-brand/10 flex size-11 items-center justify-center rounded-xl">
                  <Icon className="text-brand size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-display text-lg font-medium text-zinc-950">
                    {role.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                    {role.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
