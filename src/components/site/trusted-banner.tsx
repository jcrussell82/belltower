import trustedImg from "@/assets/cascade/hero-slideshow-01.jpg"
import { trustedBanner } from "@/lib/content"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { Logo } from "@/components/site/logo"

export function TrustedBanner() {
  return (
    <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden bg-ink py-24 lg:min-h-[70vh]">
      <img
        src={trustedImg}
        alt="Athlete wearing Cascade CBX Sport"
        className="absolute inset-0 size-full object-cover object-[30%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-ink/55 mix-blend-multiply"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20"
      />

      <Container className="relative z-10">
        <Reveal>
          <Logo variant="white" className="h-8 sm:h-9" />
          <h2 className="font-display mt-8 max-w-3xl text-5xl leading-[0.95] tracking-[0.03em] text-white uppercase sm:text-6xl lg:text-7xl">
            {trustedBanner.title}
          </h2>
        </Reveal>
      </Container>
    </section>
  )
}
