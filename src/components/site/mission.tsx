import { ArrowRight } from "lucide-react"

import { mission, shopUrl, testingUrl } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { NsfBadge } from "@/components/site/nsf-badge"

export function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-brand py-20 text-ink lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-white/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 size-[380px] rounded-full bg-ink/10 blur-3xl"
      />
      <div
        aria-hidden
        className="shield-grid pointer-events-none absolute inset-0 opacity-40"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <Reveal>
              <p className="font-condensed text-sm font-bold tracking-[0.22em] text-ink/70 uppercase">
                Our Mission
              </p>
              <h2 className="font-display mt-3 max-w-xl text-5xl leading-[0.95] tracking-[0.03em] text-ink uppercase sm:text-6xl lg:text-7xl">
                {mission.title}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/85 sm:text-lg">
              {mission.paragraphs.map((p, i) => (
                <Reveal key={i} delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={4} className="mt-10 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-md bg-ink px-6 font-condensed text-sm font-bold tracking-[0.12em] text-brand uppercase hover:bg-ink-soft"
              >
                <a href={shopUrl} target="_blank" rel="noreferrer">
                  {mission.primaryCta}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-md border-ink/25 bg-transparent px-6 font-condensed text-sm font-bold tracking-[0.12em] text-ink uppercase hover:bg-ink hover:text-brand"
              >
                <a href={testingUrl} target="_blank" rel="noreferrer">
                  {mission.secondaryCta}
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={2} className="justify-self-start lg:justify-self-end">
            <div className="relative max-w-sm">
              <div className="absolute -inset-6 rounded-[2rem] bg-ink/10 blur-2xl" />
              <NsfBadge className="relative w-full max-w-[280px] text-ink" />
              <p className="font-condensed relative mt-6 max-w-xs text-sm font-semibold tracking-[0.08em] text-ink/70 uppercase">
                The gold standard in third-party testing for competitive and
                professional use.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
