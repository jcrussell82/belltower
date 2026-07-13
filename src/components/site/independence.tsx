import { Check } from "lucide-react"

import { SectionHeading } from "@/components/site/section-heading"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { independencePoints } from "@/lib/content"

const INDEPENDENCE_IMAGE =
  "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1000&h=1250&q=80"

export function Independence() {
  return (
    <section id="independence" className="bg-brand-muted py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.82fr_1fr] lg:gap-16">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="Independence"
            title="The employer stays in control"
            lede="We advise. You decide. Our role is to bring clarity and oversight—never to replace your authority or obscure the path forward."
          />

          <ul className="mt-8 flex flex-col gap-4">
            {independencePoints.map((point, i) => (
              <Reveal
                key={point}
                delay={Math.min(i, 3) as 0 | 1 | 2 | 3}
                className="flex items-start gap-3"
              >
                <span className="bg-brand/15 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                  <Check className="text-brand size-3" strokeWidth={2.5} />
                </span>
                <span className="text-[15px] leading-relaxed text-zinc-700">
                  {point}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={1} className="relative">
          <div className="overflow-hidden rounded-2xl ring-1 ring-zinc-900/5">
            <img
              src={INDEPENDENCE_IMAGE}
              alt="Two professionals in direct conversation at a table"
              width={1000}
              height={1250}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div
            aria-hidden
            className="bg-brand/25 pointer-events-none absolute -right-8 -bottom-8 -z-10 size-40 rounded-full blur-3xl"
          />
        </Reveal>
      </Container>
    </section>
  )
}
