import { SectionHeading } from "@/components/site/section-heading"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { processSteps, processOutcome } from "@/lib/content"

export function Approach() {
  return (
    <section id="approach" className="bg-white py-20 lg:py-28">
      <Container className="flex flex-col items-center">
        <SectionHeading
          align="center"
          eyebrow="Our Approach"
          title="A clear, objective process designed around your organization"
          lede="Four disciplined phases. No black box. You stay informed—and in control—at every step."
        />

        <ol className="relative mt-16 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden
            className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-brand/20 lg:block"
          />
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i as 0 | 1 | 2 | 3}>
              <li className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="text-brand relative flex size-14 items-center justify-center rounded-full bg-brand-muted text-sm font-semibold ring-1 ring-brand/20">
                  {step.index}
                </div>
                <h3 className="font-display mt-5 text-xl font-medium text-zinc-950">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal
          delay={3}
          className="mt-16 flex w-full flex-col items-center gap-3 rounded-2xl bg-brand-muted px-8 py-10 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left"
        >
          <div className="shrink-0">
            <span className="text-brand text-xs font-semibold tracking-[0.14em] uppercase">
              {processOutcome.eyebrow}
            </span>
            <p className="font-display mt-1 text-xl font-medium text-zinc-950 sm:text-2xl">
              {processOutcome.title}
            </p>
          </div>
          <div className="hidden h-12 w-px bg-brand/20 sm:block" />
          <p className="max-w-md text-sm leading-relaxed text-zinc-600">
            {processOutcome.description}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
