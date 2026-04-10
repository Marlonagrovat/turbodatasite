import { Search, BarChart3, RefreshCcw, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "Operations Diagnostic",
    outcomeLabel: "REDUCE TIME AND MONEY LOSSES",
    description: "We map your entire operational flow and surface exactly where time, money, and capacity are being lost. You leave with a prioritized action list — not a report that sits in a folder.",
    accentColor: "#00C8FF",
    borderColor: "border-t-[#00C8FF]",
    textColor: "text-cyan-accent",
    bgColor: "bg-cyan-accent/10",
    buttonBg: "bg-[#00C8FF]/10 hover:bg-[#00C8FF]/20",
  },
  {
    icon: BarChart3,
    title: "Financial Performance",
    outcomeLabel: "KNOW YOUR REAL NUMBERS",
    description: "We analyse your revenue streams, cost structures, and margin by product or service line. You'll know which parts of your business to scale and which to cut — backed by actual numbers.",
    accentColor: "#0056D2",
    borderColor: "border-t-[#0056D2]",
    textColor: "text-primary-blue",
    bgColor: "bg-primary-blue/10",
    buttonBg: "bg-[#0056D2]/10 hover:bg-[#0056D2]/20",
  },
  {
    icon: RefreshCcw,
    title: "Process Improvement",
    outcomeLabel: "FIX WHAT SLOWS YOU DOWN",
    description: "We redesign the workflows that are creating bottlenecks, redundancy, or staff burnout. The result is a leaner, faster operation that doesn't depend on heroic individual effort.",
    accentColor: "#6B2FD9",
    borderColor: "border-t-[#6B2FD9]",
    textColor: "text-purple-accent",
    bgColor: "bg-purple-accent/10",
    buttonBg: "bg-[#6B2FD9]/10 hover:bg-[#6B2FD9]/20",
  },
  {
    icon: Users,
    title: "Fractional COO",
    outcomeLabel: "LEADERSHIP WITHOUT THE OVERHEAD",
    description: "You get an experienced operations and strategy mind inside your business on a part-time basis. Data-driven leadership, without the full-time executive cost.",
    accentColor: "gradient",
    borderColor: "border-t-transparent",
    textColor: "text-cyan-accent",
    bgColor: "bg-cyan-accent/10",
    buttonBg: "bg-gradient-to-r from-[#00C8FF]/10 to-[#0056D2]/10 hover:from-[#00C8FF]/20 hover:to-[#0056D2]/20",
    isGradient: true,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-cyan-accent mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-near-black text-balance">
            Four ways we help your business perform.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border border-border-light bg-card border-t-[3px] ${service.borderColor} ${service.isGradient ? 'relative overflow-hidden' : ''}`}
                style={service.isGradient ? { borderTopWidth: '3px', borderImage: 'linear-gradient(to right, #00C8FF, #0056D2) 1' } : undefined}
              >
                <p className={`text-[10px] font-semibold uppercase tracking-[0.1em] ${service.textColor} mb-3`}>
                  {service.outcomeLabel}
                </p>
                <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${service.textColor}`} />
                </div>
                <h3 className="font-semibold text-[22px] text-near-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className={`inline-flex items-center mt-4 px-4 py-2 rounded-full text-sm font-medium ${service.textColor} ${service.buttonBg} transition-colors`}
                >
                  Learn more →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
