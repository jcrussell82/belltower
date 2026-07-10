import { SectionHeading } from "@/components/site/section-heading"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { processSteps } from "@/lib/content"

export function Approach() {
  return (
    <section id="approach" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Approach"
          title="A clear, objective process designed around your organization"
          lede="Four disciplined phases. No black box. You stay informed—and in control—at every step."
        />

        <ol className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden
            className="absolute top-[22px] right-[10%] left-[10%] hidden h-px bg-zinc-200 lg:block"
          />
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i as 0 | 1 | 2 | 3}>
              <li className="relative flex flex-col">
                <div className="text-brand relative flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-semibold">
                  {step.index}
                </div>
                <h3 className="font-display mt-5 text-xl font-medium text-zinc-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
