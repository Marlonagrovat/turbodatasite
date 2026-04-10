const painPoints = [
  {
    headline: "You're making decisions from gut feel, not data.",
    description: "Your instincts built this business. But gut feel alone can't scale it.",
  },
  {
    headline: "You don't know which part of your business is actually profitable.",
    description: "Every product line looks fine on the surface. But some are quietly draining your margin.",
  },
  {
    headline: "Your team is busy — but the results don't show it.",
    description: "High activity doesn't equal high output. Without process clarity, effort evaporates.",
  },
  {
    headline: "You've tried fixing things, but nothing seems to stick.",
    description: "Patchwork solutions without a diagnostic foundation always unravel.",
  },
]

export function PainPoints() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-cyan-accent mb-4">
            Does This Sound Familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-near-black text-balance">
            Most SMEs are running blind — and paying for it.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border-light bg-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-accent mt-2.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-near-black leading-snug">
                    {point.headline}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
