import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { Reviews } from "@/components/site/reviews"
import { Mission } from "@/components/site/mission"
import { ProductGrid } from "@/components/site/product-grid"
import { NsfSplit } from "@/components/site/nsf-split"
import { DevelopedBanner } from "@/components/site/developed-banner"
import { TrustedBanner } from "@/components/site/trusted-banner"
import { TrustBullets } from "@/components/site/trust-bullets"
import { NopeSection } from "@/components/site/nope-section"
import { Explore } from "@/components/site/explore"
import { SiteFooter } from "@/components/site/site-footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Reviews />
        <Mission />
        <ProductGrid />
        <NsfSplit />
        <DevelopedBanner />
        <TrustedBanner />
        <TrustBullets />
        <NopeSection />
        <Explore />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
