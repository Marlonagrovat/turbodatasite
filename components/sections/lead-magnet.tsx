"use client"

import React, { useState } from "react"
import { Check } from "lucide-react"
import emailjs from "@emailjs/browser"
const benefits = [
  "A 5-section business diagnostic framework",
  "Key questions your financial statements aren't asking",
  "A scoring guide to prioritise your biggest opportunities",
]

export function LeadMagnet() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    industry: "",
  const handleSubmit =async (e: React.FormEvent) => {
  e.preventDefault()
  if (!formData.consent) {
    setError("Please accept the privacy policy to continue.")
    return
  }
  setIsLoading(true)
  setError("")

  try {
    // Step 1 — Send to Formspree to capture and store the contact
    const formspreeResponse = await fetch("https://formspree.io/f/mvzveezk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        industry: formData.industry,
        _subject: "New Audit Download — TurboData Analytics",
      }),
    })

    if (!formspreeResponse.ok) {
      throw new Error("Formspree failed")
    }

    // Step 2 — Send auto-reply email via EmailJS
    await emailjs.send(
      "service_upeajqf",
      "template_6a1zn9h",
      {
        to_name: formData.fullName,
        to_email: formData.email,
        industry: formData.industry,
      },
      "Kh9M3U3vyCpzb_xJY"
    )

    setIsSubmitted(true)
    setFormData({ fullName: "", email: "", industry: "", consent: false })

  } catch (err) {
  console.error("Submission error:", err)
  setError("Something went wrong. Please try again.")
} finally {
    setIsLoading(false)
  }
}
    if (!formData.consent) {
      setError("Please accept the privacy policy to continue.")
      return
    }
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("https://formspree.io/f/mvzveezk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          industry: formData.industry,
          _replyto: formData.email,
          _subject: "New Audit Download — TurboData Analytics",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ fullName: "", email: "", industry: "", consent: false })
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="lead-magnet" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-cyan-accent mb-4">
              Free Resource
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
              Download the Business Profit Leak Audit
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-[600px] leading-relaxed">
              A structured self-assessment tool that helps SME owners identify exactly where their business is losing money — before they spend a dollar on consulting. Used by business owners in manufacturing, retail, logistics, and professional services.
            </p>
            <p className="mt-8 text-sm font-semibold text-primary-foreground mb-4">
              {"What's inside:"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-accent" />
                  </div>
                  <span className="text-sm text-primary-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-background rounded-2xl p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-near-black mb-2">
                  Check your inbox
                </h3>
                <p className="text-muted-foreground">
                  Your audit is on its way. If it does not arrive within a few minutes, check your spam folder.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-near-black mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border-light bg-background text-near-black placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-near-black mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border-light bg-background text-near-black placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-near-black mb-2">
                    Industry / Business Type
                  </label>
                  <input
                    type="text"
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border-light bg-background text-near-black placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="Manufacturing, Retail, etc."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 shrink-0 w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                    I agree to the{" "}
                    <a href="/privacy-policy" target="_blank" className="underline text-primary-blue">
                      Privacy Policy
                    </a>{" "}
                    and consent to TurboData Analytics storing my information and sending me relevant business resources. I can unsubscribe at any time.
                  </label>
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 bg-primary-blue text-primary-foreground font-bold text-base rounded-full hover:bg-primary-blue-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Download Now"}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We don&apos;t spam. Your data is never sold.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}