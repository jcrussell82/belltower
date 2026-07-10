import { SectionHeading } from "@/components/site/section-heading"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { painPoints, challengeSignals } from "@/lib/content"

export function Challenge() {
  return (
    <section id="challenge" className="bg-white py-24 lg:py-32">
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="The Challenge"
            title="Fading broker loyalty"
            lede="Employers are rethinking long-standing broker relationships. Rising costs, complexity, and misaligned priorities are forcing a harder look at who sits at the table."
          />

          <Reveal
            delay={1}
            className="mt-10 flex items-baseline gap-5 border-y border-zinc-100 py-8"
          >
            <p className="font-display text-brand text-6xl leading-none font-medium tracking-tight lg:text-7xl">
              35%
            </p>
            <p className="max-w-[13rem] text-sm leading-relaxed text-zinc-500">
              of employers plan to select a new broker in the near term
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-col gap-5">
            {painPoints.map((point, i) => (
              <Reveal key={point} delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
                <li className="border-brand/25 border-l-2 pl-4 text-[15px] leading-relaxed text-zinc-700">
                  {point}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <dl className="divide-y divide-zinc-100 border-y border-zinc-100">
            {challengeSignals.map((signal, i) => {
              const Icon = signal.icon
              return (
                <Reveal
                  key={signal.label}
                  delay={Math.min(i, 3) as 0 | 1 | 2 | 3}
                  className="flex items-start gap-4 py-6"
                >
                  <div className="bg-brand/10 flex size-10 shrink-0 items-center justify-center rounded-lg">
                    <Icon className="text-brand size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <dt className="text-[15px] font-semibold text-zinc-900">
                      {signal.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-zinc-500">
                      {signal.description}
                    </dd>
                  </div>
                </Reveal>
              )
            })}
          </dl>
        </div>
      </Container>
    </section>
  )
}
