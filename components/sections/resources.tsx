import Link from "next/link"

const resources = [
  {
    category: "Operations",
    categoryColor: "bg-cyan-accent/10 text-cyan-accent",
    title: "The 5 Warning Signs Your Operations Are Bleeding Cash",
    teaser: "Most SMEs don't see the drain until it's already cost them a quarter.",
  },
  {
    category: "Finance",
    categoryColor: "bg-purple-accent/10 text-purple-accent",
    title: "Why Your Profit Margin Lies to You — And How to Read It Correctly",
    teaser: "Gross margin and net margin are telling two different stories. Here's how to listen to both.",
  },
  {
    category: "Strategy",
    categoryColor: "bg-primary-blue/10 text-primary-blue",
    title: "What a Fractional COO Actually Does — And Whether You Need One",
    teaser: "Not every business needs a full-time executive. But most growing businesses need this.",
  },
]

export function Resources() {
  return (
    <section id="resources" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-cyan-accent mb-4">
            Resources
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-near-black text-balance">
            Built to help you think clearer about your business.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Free guides, frameworks, and insights from the TurboData team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border-light bg-card flex flex-col"
            >
              <span className={`inline-block self-start px-3 py-1 text-xs font-medium rounded-full ${resource.categoryColor} mb-4`}>
                {resource.category}
              </span>
              <h3 className="font-semibold text-lg text-near-black leading-snug">
                {resource.title}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed flex-1">
                {resource.teaser}
              </p>
              <Link
                href="#"
                className="inline-flex items-center mt-4 text-cyan-accent font-medium hover:underline"
              >
                Read →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
