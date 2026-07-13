import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"

export function FinalCta() {
  return (
    <section
      id="consult"
      className="relative isolate overflow-hidden bg-gradient-to-b from-zinc-950 via-[#0a1830] to-zinc-950 py-28 lg:py-36"
    >
      <div
        aria-hidden
        className="bg-brand/30 pointer-events-none absolute top-1/2 left-1/2 size-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, black 0%, transparent 100%)",
        }}
      />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <span className="text-brand text-xs font-semibold tracking-[0.14em] uppercase">
            Get Started
          </span>
        </Reveal>

        <Reveal delay={1} className="mt-5">
          <h2 className="font-display max-w-3xl text-balance text-5xl leading-[1.05] font-medium text-white sm:text-6xl lg:text-7xl">
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
