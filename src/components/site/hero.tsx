import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white pt-36 pb-24 lg:pt-48 lg:pb-32"
    >
      <div
        aria-hidden
        className="bg-grid-fade pointer-events-none absolute inset-x-0 top-0 h-[640px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-220px] right-[-160px] size-[560px] rounded-full bg-brand/15 blur-[120px]"
      />

      <Container className="relative">
        <Reveal>
          <Badge
            variant="outline"
            className="h-7 gap-2 rounded-full border-zinc-200 bg-white px-3.5 text-xs font-medium tracking-wide text-zinc-600 shadow-sm"
          >
            <span className="size-1.5 rounded-full bg-brand" />
            Independent Broker Advisory
          </Badge>
        </Reveal>

        <Reveal delay={1} className="mt-8">
          <h1 className="font-display max-w-3xl text-balance text-[2.75rem] leading-[1.06] font-medium tracking-tight text-zinc-950 sm:text-6xl lg:text-[4.75rem]">
            The right advisor.
            <br />
            The right strategy.{" "}
            <span className="text-brand italic">Better outcomes.</span>
          </h1>
        </Reveal>

        <Reveal delay={2} className="mt-7">
          <p className="max-w-lg text-lg leading-relaxed text-zinc-500">
            We help employers select, evaluate, and optimize insurance
            brokers—so your benefits strategy stays aligned with your
            organization.
          </p>
        </Reveal>

        <Reveal delay={3} className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="h-11 rounded-full px-6 text-[15px]">
            <a href="#consult">Schedule a consultation</a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-11 rounded-full px-4 text-[15px] text-zinc-700 hover:text-zinc-950"
          >
            <a href="#approach" className="group inline-flex items-center gap-2">
              See how it works
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
