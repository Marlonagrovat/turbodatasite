"use client"

import { useState } from "react"
import { Check } from "lucide-react"

const hearAboutOptions = [
  { value: "", label: "Select an option" },
  { value: "google", label: "Google search" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "referral", label: "Referral" },
  { value: "other", label: "Other" },
]

export function DiscoveryCall() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    challenge: "",
    hearAbout: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({
      fullName: "",
      email: "",
      businessName: "",
      challenge: "",
      hearAbout: "",
    })
  }

  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-cyan-accent mb-4">
            Book a Discovery Call
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
            30 minutes. No sales pitch. Just clarity.
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Tell us about your business and your biggest challenge. We&apos;ll come prepared with initial observations — and you&apos;ll leave the call knowing exactly what&apos;s holding you back, whether you work with us or not.
          </p>
        </div>

        <div className="bg-dark-card rounded-xl p-8 border border-dark-border">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-cyan-accent/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-cyan-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground">Thanks!</h3>
              <p className="mt-2 text-primary-foreground/70">
                {"We'll be in touch within 1 business day."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="dc-fullName" className="block text-sm font-medium text-primary-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="dc-fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-dark-border bg-dark-bg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-accent focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="dc-email" className="block text-sm font-medium text-primary-foreground mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="dc-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-dark-border bg-dark-bg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-accent focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="dc-businessName" className="block text-sm font-medium text-primary-foreground mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="dc-businessName"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-dark-border bg-dark-bg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-accent focus:border-transparent"
                  placeholder="Your Company Inc."
                />
              </div>
              <div>
                <label htmlFor="dc-challenge" className="block text-sm font-medium text-primary-foreground mb-2">
                  What is your biggest operational or financial challenge right now?
                </label>
                <textarea
                  id="dc-challenge"
                  required
                  rows={4}
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-dark-border bg-dark-bg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-accent focus:border-transparent resize-none"
                  placeholder="Tell us about the challenge you're facing..."
                />
              </div>
              <div>
                <label htmlFor="dc-hearAbout" className="block text-sm font-medium text-primary-foreground mb-2">
                  How did you hear about TurboData?
                </label>
                <select
                  id="dc-hearAbout"
                  required
                  value={formData.hearAbout}
                  onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-dark-border bg-dark-bg text-primary-foreground focus:outline-none focus:ring-2 focus:ring-cyan-accent focus:border-transparent"
                >
                  {hearAboutOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-primary-blue text-primary-foreground font-bold text-base rounded-full hover:bg-primary-blue-hover transition-colors"
              >
                Request My Discovery Call →
              </button>
              <p className="text-center text-xs text-primary-foreground/60">
                We respond within 1 business day. No obligation whatsoever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
