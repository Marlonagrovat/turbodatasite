import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { PainPoints } from "@/components/sections/pain-points"
import { ValueProposition } from "@/components/sections/value-proposition"
import { Services } from "@/components/sections/services"
import { WhoWeServe } from "@/components/sections/who-we-serve"
import { HowItWorks } from "@/components/sections/how-it-works"
import { AboutFounder } from "@/components/sections/about-founder"
import { LeadMagnet } from "@/components/sections/lead-magnet"
import { ImpactTeaser } from "@/components/sections/impact-teaser"
import { Resources } from "@/components/sections/resources"
import { DiscoveryCall } from "@/components/sections/discovery-call"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <ValueProposition />
        <Services />
        <WhoWeServe />
        <HowItWorks />
        <AboutFounder />
        <LeadMagnet />
        <ImpactTeaser />
        <Resources />
        <DiscoveryCall />
      </main>
      <Footer />
    </div>
  )
}
