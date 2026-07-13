import { Check } from "lucide-react"

import { SectionHeading } from "@/components/site/section-heading"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { OrbitDiagram } from "@/components/site/orbit-diagram"
import { painPoints } from "@/lib/content"

export function Challenge() {
  return (
    <section id="challenge" className="bg-brand-muted py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="The Challenge"
            title="Fading broker loyalty"
            lede="Employers are rethinking long-standing broker relationships. Rising costs, complexity, and misaligned priorities are forcing a harder look at who sits at the table."
          />

          <Reveal
            delay={1}
            className="mt-8 flex items-baseline gap-5 border-y border-brand/15 py-6"
          >
            <p className="font-display text-brand text-6xl leading-none font-medium tracking-tight lg:text-7xl">
              35%
            </p>
            <p className="max-w-[13rem] text-sm leading-relaxed text-zinc-500">
              of employers plan to select a new broker in the near term
            </p>
          </Reveal>

          <ul className="mt-7 flex flex-col gap-4">
            {painPoints.map((point, i) => (
              <Reveal key={point} delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
                <li className="flex items-start gap-3">
                  <span className="bg-brand/10 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                    <Check className="text-brand size-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-zinc-700">
                    {point}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={1} className="flex flex-col items-center">
          <OrbitDiagram />
        </Reveal>
      </Container>
    </section>
  )
}
