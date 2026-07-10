import { Check } from "lucide-react"

import { SectionHeading } from "@/components/site/section-heading"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { independencePoints } from "@/lib/content"

export function Independence() {
  return (
    <section id="independence" className="bg-zinc-950 py-24 lg:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <SectionHeading
            tone="dark"
            eyebrow="Independence"
            title="The employer stays in control"
            lede="We advise. You decide. Our role is to bring clarity and oversight—never to replace your authority or obscure the path forward."
          />

          <ul className="mt-9 flex flex-col gap-4">
            {independencePoints.map((point, i) => (
              <Reveal
                key={point}
                delay={Math.min(i, 3) as 0 | 1 | 2 | 3}
                className="flex items-start gap-3"
              >
                <span className="bg-brand/20 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                  <Check className="text-brand size-3" strokeWidth={2.5} />
                </span>
                <span className="text-[15px] leading-relaxed text-white/80">
                  {point}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={1} className="relative">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
              alt="Professionals collaborating around a laptop in a modern office"
              width={1400}
              height={1050}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div
            aria-hidden
            className="bg-brand/30 pointer-events-none absolute -right-8 -bottom-8 -z-10 size-40 rounded-full blur-3xl"
          />
        </Reveal>
      </Container>
    </section>
  )
}
