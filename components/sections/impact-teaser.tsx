import Link from "next/link"

const impactCases = [
  {
    industry: "Manufacturing",
    challenge: "Cost overruns across three production lines",
    outcome: "Identified 23% in recoverable cost through operational diagnostic",
  },
  {
    industry: "Professional Services",
    challenge: "Revenue plateau despite growing team",
    outcome: "Restructured service pricing and eliminated two unprofitable service lines",
  },
]

export function ImpactTeaser() {
  return (
    <section id="impact" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-cyan-accent mb-4">
            Client Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-near-black text-balance">
            Numbers don&apos;t lie. Businesses don&apos;t have to suffer.
          </h2>
          <p className="mt-4 text-muted-foreground">
            All engagements are anonymised to protect our clients&apos; confidentiality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {impactCases.map((caseStudy, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border-light bg-card"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-accent/10 text-purple-accent mb-4">
                {caseStudy.industry}
              </span>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-near-black">Challenge</p>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-near-black">Outcome</p>
                  <p className="text-primary-blue font-medium">{caseStudy.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/impact"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary-blue text-primary-blue font-bold text-base rounded-full hover:bg-primary-blue hover:text-primary-foreground transition-colors"
          >
            See Full Impact Portfolio →
          </Link>
        </div>
      </div>
    </section>
  )
}
