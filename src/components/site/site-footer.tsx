import { Container } from "@/components/site/container"
import { Logo } from "@/components/site/logo"
import { NAV_LINKS } from "@/lib/nav-links"
import { shopUrl } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="flex flex-col gap-10 py-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm space-y-4">
          <Logo variant="white" className="h-8" />
          <p className="text-sm leading-relaxed text-white/60">
            NSF Certified for Sport® CBD topicals developed by athletes, for
            athletes. Trust the shield. Stay on the field.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-condensed text-sm font-semibold tracking-[0.1em] text-white/65 uppercase transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href={shopUrl}
            target="_blank"
            rel="noreferrer"
            className="font-condensed text-sm font-semibold tracking-[0.1em] text-brand uppercase transition-colors hover:text-white"
          >
            Shop All
          </a>
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Cascade CBX Sport. All rights
            reserved.
          </p>
          <p>
            These statements have not been evaluated by the Food and Drug
            Administration.
          </p>
        </Container>
      </div>
    </footer>
  )
}
