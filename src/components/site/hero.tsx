import { ArrowRight } from "lucide-react"

import heroImg from "@/assets/cascade/product-roll-on.jpg"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { Logo } from "@/components/site/logo"
import { hero, shopUrl } from "@/lib/content"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-32"
    >
      <img
        src={heroImg}
        alt="Cascade CBX Sport Cooling Lemongrass & Mint Sports Roll-On"
        className="animate-kenburns absolute inset-0 size-full object-cover object-[58%_center]"
      />
      <div aria-hidden className="hero-scrim absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 shield-lattice mix-blend-soft-light"
      />

      <Container className="relative z-10 w-full">
        <div className="max-w-2xl">
          <Logo
            variant="white"
            className="animate-fade-up h-10 sm:h-12 lg:h-14"
          />

          <h1 className="animate-fade-up font-display mt-8 text-[clamp(3.25rem,12vw,7.5rem)] leading-[0.92] tracking-[0.04em] text-white uppercase [animation-delay:120ms]">
            {hero.headline}
          </h1>

          <p className="animate-fade-up font-condensed mt-5 max-w-lg text-lg font-semibold tracking-[0.14em] text-brand uppercase sm:text-xl [animation-delay:220ms]">
            {hero.subhead}
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4 [animation-delay:320ms]">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-md bg-brand px-7 font-condensed text-base font-bold tracking-[0.14em] text-ink uppercase hover:bg-white"
            >
              <a href={shopUrl} target="_blank" rel="noreferrer">
                {hero.cta}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <p className="font-condensed text-sm font-semibold tracking-[0.16em] text-white/70 uppercase">
              {hero.tagline}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
