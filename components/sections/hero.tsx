import Link from "next/link"
import { TrendingUp, TrendingDown, Percent } from "lucide-react"

function DashboardIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Metric Cards */}
      <div className="flex flex-col gap-4">
        {/* Revenue Card */}
        <div className="bg-dark-card/80 backdrop-blur-sm rounded-xl p-4 border border-dark-border shadow-lg transform hover:-translate-y-1 transition-transform">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-accent text-xs font-medium uppercase tracking-wider">Revenue</p>
              <p className="text-2xl font-bold text-primary-foreground mt-1">+24.8%</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-cyan-accent/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-cyan-accent" />
            </div>
          </div>
        </div>

        {/* Cost Card */}
        <div className="bg-dark-card/80 backdrop-blur-sm rounded-xl p-4 border border-dark-border shadow-lg transform translate-x-8 hover:-translate-y-1 transition-transform">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-accent text-xs font-medium uppercase tracking-wider">Costs</p>
              <p className="text-2xl font-bold text-primary-foreground mt-1">-18.3%</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-accent/20 flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-purple-accent" />
            </div>
          </div>
        </div>

        {/* Efficiency Card */}
        <div className="bg-dark-card/80 backdrop-blur-sm rounded-xl p-4 border border-dark-border shadow-lg transform hover:-translate-y-1 transition-transform">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary-foreground/70 text-xs font-medium uppercase tracking-wider">Efficiency</p>
              <p className="text-2xl font-bold text-primary-foreground mt-1">94.2%</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary-blue/20 flex items-center justify-center">
              <Percent className="w-6 h-6 text-primary-blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
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
          <path d="M0 200 Q100 150 200 180 T400 160 T600 200 T800 170 T1000 190 T1200 160 T1400 200" 
                fill="none" stroke="white" strokeWidth="2" className="animate-pulse" />
          <path d="M0 250 Q150 200 300 230 T600 210 T900 250 T1200 220 T1400 240" 
                fill="none" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-cyan-accent mb-4">
              Business Analytics for SMBs
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.15] text-primary-foreground max-w-[600px] mx-auto lg:mx-0">
              <span className="block">Most businesses are surviving.</span>
              <span className="block">Very few are actually winning.</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-[520px] mx-auto lg:mx-0 leading-relaxed">
              Every week you operate without clear data, you make decisions that cost you. TurboData Analytics turns your business numbers into a competitive weapon — so you stop guessing and start growing.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#lead-magnet"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-foreground text-primary-blue font-bold text-base rounded-full hover:bg-primary-foreground/90 transition-colors"
              >
                Get Your Free Profit Leak Audit →
              </Link>
              <Link
                href="#impact"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary-foreground text-primary-foreground font-bold text-base rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                See Our Client Impact
              </Link>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/60">
              Free resource · No credit card · No obligation
            </p>
          </div>

          {/* Right Illustration - Desktop Only */}
          <div className="hidden lg:block">
            <DashboardIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
