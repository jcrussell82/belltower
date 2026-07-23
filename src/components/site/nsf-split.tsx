import { ArrowRight } from "lucide-react"

import applyImg from "@/assets/cascade/product-attributes.jpg"
import { nsfSplit, shopUrl } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"

export function NsfSplit() {
  return (
    <section id="nsf" className="bg-ink text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
          <img
            src={applyImg}
            alt="Applying Cascade CBX Sport CBD topical for targeted recovery"
            className="absolute inset-0 size-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ink/20 lg:to-ink"
          />
        </div>

        <Container className="relative flex flex-col justify-center py-16 lg:max-w-none lg:px-14 lg:py-24 xl:px-20">
          <Reveal>
            <p className="font-condensed text-sm font-bold tracking-[0.2em] text-brand uppercase">
              Certified CBD Performance
            </p>
            <h2 className="font-display mt-3 max-w-xl text-4xl leading-[0.95] tracking-[0.03em] text-white uppercase sm:text-5xl">
              {nsfSplit.title}
            </h2>
          </Reveal>

          <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-white/75 sm:text-base">
            {nsfSplit.paragraphs.map((p, i) => (
              <Reveal key={i} delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={4} className="mt-10">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-md bg-brand px-6 font-condensed text-sm font-bold tracking-[0.12em] text-ink uppercase hover:bg-white"
            >
              <a href={shopUrl} target="_blank" rel="noreferrer">
                {nsfSplit.cta}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </Reveal>
        </Container>
      </div>
    </section>
  )
}
