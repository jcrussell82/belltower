import { Star } from "lucide-react"

import { products, productsIntro, shopUrl } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"

export function ProductGrid() {
  return (
    <section id="shop" className="bg-background py-20 lg:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-condensed text-sm font-bold tracking-[0.2em] text-brand uppercase">
            Shop CBD Recovery
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-[0.04em] text-ink uppercase sm:text-5xl lg:text-6xl">
            Find Your Recovery Solution
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {productsIntro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal
              key={product.name}
              delay={(Math.min((i % 3) + 1, 4) as 1 | 2 | 3 | 4)}
            >
              <a
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="overflow-hidden bg-ink">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-1 text-brand">
                    {Array.from({ length: product.rating }).map((_, idx) => (
                      <Star key={idx} className="size-3.5 fill-current" />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  <h3 className="font-condensed text-lg font-bold tracking-[0.04em] text-ink uppercase">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.detail}</p>
                  <p className="font-condensed text-base font-semibold tracking-wide text-ink">
                    {product.price}{" "}
                    <span className="text-muted-foreground line-through">
                      {product.compareAt}
                    </span>
                  </p>
                  <span className="font-condensed inline-flex pt-1 text-sm font-bold tracking-[0.14em] text-brand uppercase transition-colors group-hover:text-ink">
                    Add to cart →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-md bg-ink px-7 font-condensed text-sm font-bold tracking-[0.14em] text-brand uppercase hover:bg-ink-soft"
          >
            <a href={shopUrl} target="_blank" rel="noreferrer">
              Shop NSF Certified Topicals
            </a>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
