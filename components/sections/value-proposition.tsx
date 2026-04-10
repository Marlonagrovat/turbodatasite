function MagnifyingGlassChart() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bar chart */}
      <rect x="12" y="45" width="10" height="20" rx="2" fill="#0056D2" opacity="0.6" />
      <rect x="26" y="35" width="10" height="30" rx="2" fill="#0056D2" opacity="0.6" />
      <rect x="40" y="25" width="10" height="40" rx="2" fill="#00C8FF" />
      <rect x="54" y="40" width="10" height="25" rx="2" fill="#0056D2" opacity="0.6" />
      {/* Magnifying glass */}
      <circle cx="45" cy="30" r="14" stroke="#6B2FD9" strokeWidth="3" fill="none" />
      <line x1="55" y1="40" x2="68" y2="53" stroke="#6B2FD9" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function BrokenChainRepair() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left chain link */}
      <rect x="10" y="30" width="20" height="20" rx="4" stroke="#0056D2" strokeWidth="3" fill="none" />
      {/* Right chain link */}
      <rect x="50" y="30" width="20" height="20" rx="4" stroke="#0056D2" strokeWidth="3" fill="none" />
      {/* Repair connector */}
      <path d="M30 40 L50 40" stroke="#6B2FD9" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" />
      {/* Spark/repair indicator */}
      <circle cx="40" cy="40" r="6" fill="#00C8FF" />
      <path d="M40 28 L40 22 M40 58 L40 52 M28 40 L22 40 M58 40 L52 40" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function StaircaseProgress() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Staircase steps */}
      <path d="M15 65 L15 55 L30 55 L30 45 L45 45 L45 35 L60 35 L60 25 L70 25" stroke="#0056D2" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Figure at top */}
      <circle cx="65" cy="18" r="4" fill="#6B2FD9" />
      <path d="M65 22 L65 30" stroke="#6B2FD9" strokeWidth="2" strokeLinecap="round" />
      {/* Flag */}
      <line x1="70" y1="15" x2="70" y2="28" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 15 L78 18 L70 21" fill="#00C8FF" />
    </svg>
  )
}

const valueCards = [
  {
    illustration: MagnifyingGlassChart,
    headline: "We find what your reports are hiding.",
    body: "Most SMEs have the data. Very few have someone who knows what to look for inside it.",
  },
  {
    illustration: BrokenChainRepair,
    headline: "We fix the processes quietly draining you.",
    body: "Inefficiency rarely announces itself. We map it, name it, and eliminate it.",
  },
  {
    illustration: StaircaseProgress,
    headline: "We give your leadership team a real compass.",
    body: "Decisions made from real-time numbers compound over time. That's the edge we build for you.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-cyan-accent mb-4">
            What We Do Differently
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
            We don&apos;t sell data. We sell the results data makes possible.
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-[680px] mx-auto leading-relaxed">
            Most analytics firms hand you a dashboard and walk away. TurboData Analytics embeds into your business, diagnoses what&apos;s actually holding you back, and fixes it — from operations to finance to the decisions your leadership team makes every week.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {valueCards.map((card, index) => {
            const Illustration = card.illustration
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-dark-card border border-dark-border flex flex-col items-center text-center"
              >
                <div className="mb-6">
                  <Illustration />
                </div>
                <h3 className="font-bold text-lg text-primary-foreground mb-2">
                  {card.headline}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {card.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
