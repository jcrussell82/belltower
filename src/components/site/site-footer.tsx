import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/site/container"
import { Logo } from "@/components/site/logo"
import { NAV_LINKS } from "@/lib/nav-links"

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <Separator />
      <Container className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-4">
          <Logo className="h-6" />
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
            Objective advisory. Aligned incentives. Measurable outcomes.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-wide text-zinc-500 transition-colors hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
      <Separator />
      <Container className="py-6">
        <p className="text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} BellTower Strategy Group. All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
