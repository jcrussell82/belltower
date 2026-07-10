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
          ? "border-zinc-200/80 bg-white/85 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] backdrop-blur-md"
          : "border-transparent bg-white/60 backdrop-blur-sm"
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
              className="text-[13px] font-medium tracking-wide text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="lg" className="rounded-full px-5">
            <a href="#consult">Schedule a consultation</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-950 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full bg-white sm:max-w-sm"
          >
            <SheetHeader className="border-b border-zinc-100 pb-4">
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
                    className="font-display rounded-lg px-2 py-3 text-2xl font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto px-4 pb-6">
              <SheetClose asChild>
                <Button asChild size="lg" className="w-full rounded-full">
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
