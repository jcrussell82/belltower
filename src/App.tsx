import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { Challenge } from "@/components/site/challenge"
import { Difference } from "@/components/site/difference"
import { Approach } from "@/components/site/approach"
import { Independence } from "@/components/site/independence"
import { Testimonials } from "@/components/site/testimonials"
import { Experience } from "@/components/site/experience"
import { FinalCta } from "@/components/site/final-cta"
import { SiteFooter } from "@/components/site/site-footer"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <Hero />
        <Challenge />
        <Difference />
        <Approach />
        <Independence />
        <Testimonials />
        <Experience />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
