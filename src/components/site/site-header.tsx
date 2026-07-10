import * as React from "react"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/nav-links"
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
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-zinc-950/90 shadow-[0_1px_0_0_rgba(0,0,0,0.2)] backdrop-blur-md"
          : "border-transparent bg-zinc-950/55 backdrop-blur-sm"
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-18">
        <a
          href="#top"
          aria-label="BellTower Strategy Group home"
          className="shrink-0"
        >
          <Logo className="h-7 lg:h-8" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-5 text-zinc-950 hover:bg-white/90"
          >
            <a href="#consult">Schedule a consultation</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-white/10 bg-zinc-950 sm:max-w-sm"
            style={{ color: "#ffffff" }}
          >
            <SheetHeader className="border-b border-white/10 pb-4">
              <SheetTitle asChild>
                <span>
                  <Logo className="h-7" />
                </span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="font-display rounded-lg px-2 py-3 text-2xl font-medium text-white transition-colors hover:bg-white/5"
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
                  className="w-full rounded-full bg-white text-zinc-950 hover:bg-white/90"
                >
                  <a href="#consult">Schedule a consultation</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}
