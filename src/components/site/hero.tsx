import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import bannerImage from "@/assets/bannerimage.jpg"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#070c16] pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Photography layer — right ~50% of the hero, blended into the navy field. */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[64%] sm:w-[58%] lg:w-[51%]"
      >
        <img
          src={bannerImage}
          alt=""
          className="h-full w-full object-cover object-[54%_28%]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Blend the left edge of the photo into the navy background. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c16] via-[#070c16]/55 via-25% to-transparent to-70%" />
        {/* Ground the photo into the section at the bottom. */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#070c16] to-transparent" />
        {/* Settle the top edge under the header. */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#070c16]/85 to-transparent" />
        {/* Cinematic navy color grade to unify the photo with the palette. */}
        <div className="absolute inset-0 bg-[#0d1b33]/25" />
      </div>

      {/* Ambient depth: soft brand-blue bloom where photo meets copy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[18%] right-[28%] size-[460px] rounded-full bg-brand/25 blur-[130px]"
      />
      {/* Faint texture on the copy side for continuity with the rest of the site. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[60%] opacity-[0.05] sm:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 0% 0%, black 0%, transparent 100%)",
        }}
      />

      <Container className="relative z-10">
        <Reveal>
          <Badge
            variant="outline"
            className="h-7 gap-2 rounded-full border-white/15 bg-white/10 px-3.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-brand" />
            Independent Broker Advisory
          </Badge>
        </Reveal>

        <Reveal delay={1} className="mt-8">
          <h1 className="font-display max-w-md text-balance text-[2.75rem] leading-[1.05] font-medium tracking-tight text-white sm:max-w-lg sm:text-6xl lg:max-w-lg lg:text-[5rem]">
            The right advisor.
            <br />
            The right strategy.{" "}
            <span className="text-brand italic">Better outcomes.</span>
          </h1>
        </Reveal>

        <Reveal delay={2} className="mt-7">
          <p className="max-w-lg text-lg leading-relaxed text-white/65">
            We help employers select, evaluate, and optimize insurance
            brokers—so your benefits strategy stays aligned with your
            organization.
          </p>
        </Reveal>

        <Reveal delay={3} className="mt-10 flex flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-brand hover:bg-brand/90 h-11 rounded-full px-6 text-[15px] text-white"
          >
            <a href="#consult">Schedule a consultation</a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-11 rounded-full px-4 text-[15px] text-white/75 hover:bg-white/10 hover:text-white"
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
