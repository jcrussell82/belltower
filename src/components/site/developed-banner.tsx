import developedImg from "@/assets/cascade/hero-slideshow-02.jpg"
import { developedBanner, shopUrl } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"

export function DevelopedBanner() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 lg:py-32">
      <img
        src={developedImg}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink"
      />
      <div
        aria-hidden
        className="shield-lattice pointer-events-none absolute inset-0 opacity-25"
      />

      <Container className="relative max-w-4xl text-center">
        <Reveal>
          <p className="font-condensed text-sm font-bold tracking-[0.22em] text-brand uppercase">
            {developedBanner.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl tracking-[0.04em] text-white uppercase sm:text-5xl lg:text-6xl">
            {developedBanner.title}
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            {developedBanner.body}
          </p>
        </Reveal>
        <Reveal delay={2} className="mt-10">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-md bg-brand px-7 font-condensed text-sm font-bold tracking-[0.14em] text-ink uppercase hover:bg-white"
          >
            <a href={shopUrl} target="_blank" rel="noreferrer">
              {developedBanner.cta}
            </a>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
