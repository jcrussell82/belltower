import { Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SectionHeading } from "@/components/site/section-heading"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { testimonials } from "@/lib/content"

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function Testimonials() {
  return (
    <section className="bg-zinc-950 py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow="Client Perspective"
          title="Trusted by leaders who demand clarity"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={Math.min(i, 3) as 0 | 1}>
              <Card className="h-full rounded-2xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                <CardContent className="flex h-full flex-col gap-7 px-6 py-6">
                  <Quote className="text-brand size-8" strokeWidth={1.5} />
                  <p className="font-display flex-1 text-xl leading-relaxed text-white/90 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                    <Avatar size="lg">
                      <AvatarFallback className="bg-brand/20 text-brand font-medium">
                        {initials(testimonial.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-white/50">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
