const steps = [
  {
    number: 1,
    title: "Diagnose",
    description: "We audit your business data, operations, and financials to find what's actually happening beneath the surface.",
  },
  {
    number: 2,
    title: "Strategize",
    description: "We build a clear, prioritized plan tied to measurable outcomes — revenue gain, cost reduction, or both.",
  },
  {
    number: 3,
    title: "Execute",
    description: "We work alongside your team to implement changes, measure results, and adjust in real time.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-cyan-accent mb-4">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-near-black text-balance">
            Three steps from confusion to clarity.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden md:block absolute top-8 left-[calc(16.67%-0.5rem)] right-[calc(16.67%-0.5rem)] h-0.5 bg-border-light" />
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-primary-blue text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto relative z-10">
                    {step.number}
                  </div>
                  
                  <h3 className="mt-6 font-semibold text-xl text-near-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
