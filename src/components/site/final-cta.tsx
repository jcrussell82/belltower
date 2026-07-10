import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"

export function FinalCta() {
  return (
    <section
      id="consult"
      className="relative isolate overflow-hidden bg-zinc-950 py-28 lg:py-36"
    >
      <div
        aria-hidden
        className="bg-brand/20 pointer-events-none absolute top-1/2 left-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
      />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <span className="text-brand text-xs font-semibold tracking-[0.14em] uppercase">
            Get Started
          </span>
        </Reveal>

        <Reveal delay={1} className="mt-5">
          <h2 className="font-display max-w-2xl text-balance text-4xl leading-[1.08] font-medium text-white sm:text-5xl lg:text-6xl">
            Choose the right partner.
            <br />
            Build stronger outcomes.
          </h2>
        </Reveal>

        <Reveal delay={2} className="mt-6">
          <p className="max-w-md text-base leading-relaxed text-white/60">
            A short conversation is enough to know if we're the right fit for
            your organization.
          </p>
        </Reveal>

        <Reveal delay={3} className="mt-9">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-white px-8 text-[15px] text-zinc-950 hover:bg-white/90"
          >
            <a href="mailto:hello@belltowerstrategy.com">
              Schedule a consultation
            </a>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
