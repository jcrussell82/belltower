import * as React from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import { reviews } from "@/lib/content"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Reviews() {
  const [index, setIndex] = React.useState(0)
  const active = reviews[index]

  const prev = () => setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1))

  return (
    <section id="reviews" className="relative overflow-hidden bg-mist py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
      />
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-condensed text-sm font-bold tracking-[0.2em] text-brand uppercase">
                Reviews
              </p>
              <h2 className="font-display mt-2 text-4xl tracking-[0.04em] text-ink uppercase sm:text-5xl">
                NSF Certified for Sport®
              </h2>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Previous review"
                className="rounded-md border-ink/15 bg-white text-ink hover:border-brand hover:bg-brand hover:text-ink"
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Next review"
                className="rounded-md border-ink/15 bg-white text-ink hover:border-brand hover:bg-brand hover:text-ink"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1} className="mt-10">
          <figure className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex justify-center gap-1 text-brand">
              {Array.from({ length: active.rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-balance text-2xl leading-snug text-ink sm:text-3xl lg:text-[2.15rem]">
              “{active.quote}”
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-condensed text-base font-bold tracking-[0.08em] text-ink uppercase">
                {active.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{active.title}</p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-10 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-8 bg-brand" : "w-2.5 bg-ink/20 hover:bg-ink/40"
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
