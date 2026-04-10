"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const filters = [
  { id: "all", label: "All" },
  { id: "operations", label: "Operations" },
  { id: "finance", label: "Finance" },
  { id: "process", label: "Process" },
  { id: "fractional-coo", label: "Fractional COO" },
]

const caseStudies = [
  {
    id: 1,
    industry: "Retail",
    industryColor: "bg-cyan-accent/10 text-cyan-accent",
    serviceType: "Operations Diagnostic",
    serviceCategory: "operations",
    challenge: "Owner couldn't identify why labour costs kept rising despite flat revenue.",
    whatWeDid: "Mapped the full staffing schedule against sales patterns across 12 weeks of transaction data.",
    outcome: "Identified $38,000/year in excess scheduling cost. Owner realigned shifts within 30 days.",
  },
  {
    id: 2,
    industry: "Professional Services",
    industryColor: "bg-purple-accent/10 text-purple-accent",
    serviceType: "Financial Performance",
    serviceCategory: "finance",
    challenge: "A growing firm had five service lines but no visibility into which ones were profitable.",
    whatWeDid: "Built a contribution margin model broken down by service and client type.",
    outcome: "Two service lines were discontinued. EBITDA margin improved by 14 percentage points.",
  },
  {
    id: 3,
    industry: "Manufacturing",
    industryColor: "bg-primary-blue/10 text-primary-blue",
    serviceType: "Process Improvement",
    serviceCategory: "process",
    challenge: "Production throughput was inconsistent, causing client delivery delays.",
    whatWeDid: "Identified three bottleneck stages in the production workflow using cycle time analysis.",
    outcome: "Throughput increased by 31%. On-time delivery rate rose from 68% to 94% in 60 days.",
  },
  {
    id: 4,
    industry: "Logistics/Distribution",
    industryColor: "bg-cyan-accent/10 text-cyan-accent",
    serviceType: "Fractional COO",
    serviceCategory: "fractional-coo",
    challenge: "Rapid growth had outpaced the founder's capacity to manage operations and strategy simultaneously.",
    whatWeDid: "Stepped in as Fractional COO for 6 months — built reporting cadence, restructured the ops team, and standardised vendor contracts.",
    outcome: "Owner reclaimed 15 hours/week. Business scaled from $1.2M to $1.8M revenue within the engagement period.",
  },
]

function ImpactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-blue to-[#0A1A4A]">
      {/* Abstract data pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.15] text-primary-foreground text-balance">
            What TurboData Analytics Makes Possible
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/85 leading-relaxed">
            Every business below gave us permission to share their outcome — anonymised to protect what matters: their competitive edge.
          </p>
        </div>
      </div>
    </section>
  )
}

function ImpactFilters({ activeFilter, onFilterChange }: { activeFilter: string; onFilterChange: (filter: string) => void }) {
  return (
    <section className="py-8 bg-background border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-primary-blue text-primary-foreground"
                  : "border border-border-light text-near-black hover:border-primary-blue hover:text-primary-blue"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({ caseStudy }: { caseStudy: typeof caseStudies[0] }) {
  return (
    <div className="p-6 rounded-xl border border-border-light bg-card">
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${caseStudy.industryColor}`}>
          {caseStudy.industry}
        </span>
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-near-black">
          {caseStudy.serviceType}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-near-black mb-1">Challenge</p>
          <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-near-black mb-1">What We Did</p>
          <p className="text-muted-foreground leading-relaxed">{caseStudy.whatWeDid}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-near-black mb-1">Outcome</p>
          <p className="text-primary-blue font-medium leading-relaxed">{caseStudy.outcome}</p>
        </div>
      </div>

      <p className="mt-4 pt-4 border-t border-border-light text-xs text-muted-foreground">
        Engagement type: {caseStudy.serviceType}
      </p>
    </div>
  )
}

function BottomCTA() {
  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
          Your business could be the next case study.
        </h2>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
          The only difference between these businesses and yours is that they took the first step.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#lead-magnet"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-foreground text-primary-blue font-bold text-base rounded-full hover:bg-primary-foreground/90 transition-colors"
          >
            Get the Free Profit Leak Audit
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary-foreground text-primary-foreground font-bold text-base rounded-full hover:bg-primary-foreground/10 transition-colors"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function ImpactPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredCaseStudies = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter((cs) => cs.serviceCategory === activeFilter)

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ImpactHero />
        <ImpactFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        
        <section className="py-16 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
            
            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No case studies found for this category.</p>
              </div>
            )}
          </div>
        </section>

        <BottomCTA />
      </main>
      <Footer />
    </div>
  )
}
