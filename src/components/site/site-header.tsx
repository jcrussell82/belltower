import * as React from "react"
import { Menu, ShoppingBag } from "lucide-react"

import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/nav-links"
import { shopUrl } from "@/lib/content"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Container } from "@/components/site/container"
import { Logo } from "@/components/site/logo"

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-ink/80 to-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-[4.5rem]">
        <a href="#top" aria-label="Cascade CBX Sport home" className="shrink-0">
          <Logo variant="white" className="h-7 lg:h-8" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-condensed text-[15px] font-semibold tracking-[0.08em] text-white/75 uppercase transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            size="lg"
            className="h-10 rounded-md bg-brand px-5 font-condensed text-sm font-bold tracking-[0.12em] text-ink uppercase hover:bg-brand/90"
          >
            <a href={shopUrl} target="_blank" rel="noreferrer">
              Shop Topicals
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-brand"
            aria-label="Shop topicals"
          >
            <a href={shopUrl} target="_blank" rel="noreferrer">
              <ShoppingBag className="size-5" />
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-brand"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-ink-soft bg-ink sm:max-w-sm">
              <SheetHeader className="border-b border-white/10 pb-4">
                <SheetTitle asChild>
                  <span>
                    <Logo variant="white" className="h-7" />
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 pt-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="font-display rounded-md px-2 py-3 text-3xl tracking-[0.04em] text-white transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto px-4 pb-6">
                <SheetClose asChild>
                  <Button
                    asChild
                    size="lg"
                    className="h-12 w-full rounded-md bg-brand font-condensed text-base font-bold tracking-[0.12em] text-ink uppercase"
                  >
                    <a href={shopUrl} target="_blank" rel="noreferrer">
                      Shop NSF Certified Topicals
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
