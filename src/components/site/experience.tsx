import { SectionHeading } from "@/components/site/section-heading"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { experienceCards, experienceSummary } from "@/lib/content"

export function Experience() {
  return (
    <section id="experience" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Industry Depth"
          title="Experience from every side of the industry"
        />

        <Reveal
          delay={1}
          className="relative mt-14 flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-zinc-950 px-8 py-10 text-center sm:flex-row sm:items-center sm:gap-10 sm:px-12 sm:text-left"
        >
          <div
            aria-hidden
            className="bg-brand/20 pointer-events-none absolute top-1/2 left-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
          />
          <p className="font-display text-brand relative shrink-0 text-6xl leading-none font-medium tracking-tight lg:text-7xl">
            {experienceSummary.stat}
          </p>
          <div className="relative hidden h-14 w-px bg-white/15 sm:block" />
          <div className="relative flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-[0.14em] text-white/60 uppercase">
              {experienceSummary.label}
            </p>
            <p className="max-w-lg text-[15px] leading-relaxed text-white/80">
              {experienceSummary.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {experienceCards.map((card, i) => {
            const Icon = card.icon
            return (
              <Reveal
                key={card.title}
                delay={Math.min(i, 3) as 0 | 1 | 2 | 3}
                className="flex flex-col gap-4 rounded-2xl border border-zinc-100 p-5"
              >
                <span className="bg-brand/10 flex size-10 items-center justify-center rounded-lg">
                  <Icon className="text-brand size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold tracking-wide text-zinc-900 uppercase">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {card.description}
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
