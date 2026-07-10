import { SectionHeading } from "@/components/site/section-heading"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { experienceCards } from "@/lib/content"

export function Experience() {
  return (
    <section id="experience" className="bg-zinc-50 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industry Depth"
          title="Experience from every side of the industry"
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-zinc-200 pt-10 sm:grid-cols-3 lg:grid-cols-6">
          <Reveal className="flex flex-col justify-end">
            <p className="font-display text-brand text-6xl leading-none font-medium tracking-tight">
              20+
            </p>
            <p className="mt-4 text-xs font-semibold tracking-wide text-zinc-500 uppercase">
              Years of industry leadership
            </p>
          </Reveal>

          {experienceCards.map((card, i) => {
            const Icon = card.icon
            return (
              <Reveal key={card.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <Icon className="size-6 text-zinc-500" strokeWidth={1.5} />
                <p className="mt-4 text-xs font-semibold tracking-wide text-zinc-900 uppercase">
                  {card.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {card.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
