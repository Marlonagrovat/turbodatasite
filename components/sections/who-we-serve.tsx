"use client"

import { Factory, HardHat, Cross, Store, Briefcase } from "lucide-react"

const industries = [
  {
    name: "Manufacturing & Industrial",
    accentColor: "#0056D2",
    sweetSpot: "Complex costs, shift operations, supply chain exposure",
    employees: "20–150 employees",
    revenue: "$2M–$15M revenue",
    icon: Factory,
  },
  {
    name: "Construction & Trades",
    accentColor: "#00C8FF",
    sweetSpot: "Project margin blind spots, job costing, owner-led growth",
    employees: "10–75 employees",
    revenue: "$1M–$8M revenue",
    icon: HardHat,
  },
  {
    name: "Healthcare & Social Services",
    accentColor: "#6B2FD9",
    sweetSpot: "High fixed costs, billing complexity, staff utilisation",
    employees: "5–50 employees",
    revenue: "$800K–$5M revenue",
    icon: Cross,
  },
  {
    name: "Retail & Wholesale Trade",
    accentColor: "#0047B3",
    sweetSpot: "Inventory margin, seasonal cash flow, distribution complexity",
    employees: "5–40 employees",
    revenue: "$600K–$4M revenue",
    icon: Store,
  },
  {
    name: "Professional & Business Services",
    accentColor: "#00A8CC",
    sweetSpot: "Revenue plateau, margin compression, capacity constraints",
    employees: "3–30 employees",
    revenue: "$500K–$3M revenue",
    icon: Briefcase,
  },
]

export function WhoWeServe() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-cyan-accent mb-4">
            Who We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-near-black text-balance">
            Built for the businesses that keep Ontario running.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[640px] mx-auto leading-relaxed">
            TurboData Analytics works with established SMEs that have real revenue, real complexity, and a founder who is ready to make data-driven decisions. Here are the industries we know best.
          </p>
        </div>

        {/* Industry Cards - Horizontal scroll on mobile, 5-column grid on desktop */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-hide">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <div
                  key={industry.name}
                  className="group flex-shrink-0 w-[280px] lg:w-auto snap-start flex flex-col bg-background border border-border-light rounded-xl overflow-hidden transition-colors hover:border-current"
                  style={{ 
                    // @ts-expect-error CSS custom property
                    '--hover-border-color': industry.accentColor 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = industry.accentColor
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ''
                  }}
                >
                  {/* Top Accent Bar */}
                  <div 
                    className="h-1 w-full"
                    style={{ backgroundColor: industry.accentColor }}
                  />
                  
                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-5">
                    {/* Icon */}
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${industry.accentColor}15` }}
                    >
                      <Icon 
                        className="w-5 h-5" 
                        style={{ color: industry.accentColor }}
                      />
                    </div>
                    
                    {/* Industry Name */}
                    <h3 className="font-bold text-near-black text-base mb-2">
                      {industry.name}
                    </h3>
                    
                    {/* Sweet Spot Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-auto">
                      {industry.sweetSpot}
                    </p>
                    
                    {/* Data Pills */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-light">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-light-bg text-near-black text-xs font-medium">
                        {industry.employees}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-light-bg text-near-black text-xs font-medium">
                        {industry.revenue}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA Line */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-2">
            Don&apos;t see your industry? If you run a business with real revenue and real challenges, we want to hear from you.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center text-cyan-accent hover:text-cyan-accent/80 font-medium transition-colors"
          >
            Tell us about your business →
          </a>
        </div>
      </div>

      {/* Hide scrollbar but keep functionality */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
