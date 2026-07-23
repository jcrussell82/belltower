import { Check, ArrowRight } from "lucide-react"

import familyImg from "@/assets/cascade/product-family-box.jpg"
import { shopUrl, testingUrl, trustBullets } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { NsfBadge } from "@/components/site/nsf-badge"

export function TrustBullets() {
  return (
    <section id="why" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden bg-ink">
              <img
                src={familyImg}
                alt="Cascade CBX Sport NSF Certified CBD topical collection"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-6">
                <NsfBadge className="w-40 text-brand" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-4xl tracking-[0.03em] text-ink uppercase sm:text-5xl">
                {trustBullets.title}
              </h2>
            </Reveal>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {trustBullets.paragraphs.map((p, i) => (
                <Reveal key={i} delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={3} className="mt-10">
              <p className="font-condensed text-sm font-bold tracking-[0.16em] text-brand uppercase">
                {trustBullets.listTitle}
              </p>
              <ul className="mt-4 space-y-3">
                {trustBullets.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                      <Check className="size-3.5 stroke-[3]" />
                    </span>
                    <span className="text-[15px] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={4} className="mt-10 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-md bg-ink px-6 font-condensed text-sm font-bold tracking-[0.12em] text-brand uppercase hover:bg-ink-soft"
              >
                <a href={shopUrl} target="_blank" rel="noreferrer">
                  {trustBullets.primaryCta}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-md border-ink/20 bg-transparent px-6 font-condensed text-sm font-bold tracking-[0.12em] text-ink uppercase hover:border-brand hover:bg-brand"
              >
                <a href={testingUrl} target="_blank" rel="noreferrer">
                  {trustBullets.secondaryCta}
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
