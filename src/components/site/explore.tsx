import { ArrowRight, Check } from "lucide-react"

import golfProductsImg from "@/assets/cascade/hero-slideshow-03.jpg"
import { explore, shopUrl } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"

export function Explore() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <img
        src={golfProductsImg}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-ink-soft"
      />
      <div
        aria-hidden
        className="shield-grid pointer-events-none absolute inset-0 opacity-20"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="font-condensed text-sm font-bold tracking-[0.18em] text-brand uppercase">
                {explore.eyebrow}
              </p>
              <h2 className="font-display mt-4 text-4xl tracking-[0.03em] text-white uppercase sm:text-5xl lg:text-6xl">
                {explore.title}
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
                {explore.intro}
              </p>
            </Reveal>
            <Reveal delay={2} className="mt-8">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-md bg-brand px-7 font-condensed text-sm font-bold tracking-[0.14em] text-ink uppercase hover:bg-white"
              >
                <a href={shopUrl} target="_blank" rel="noreferrer">
                  {explore.cta}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <ul className="space-y-4 border-l border-brand/40 pl-6">
              {explore.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="font-condensed text-lg font-semibold tracking-[0.04em] text-white uppercase">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-white/55">
              {explore.footnote}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
