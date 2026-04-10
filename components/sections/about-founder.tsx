"use client"

import Image from "next/image"

export function AboutFounder() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative z-10">
              <Image
                src="/founder.jpeg"
                width={420}
                height={420}
                alt="Founder"
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
          <div className="lg:pl-4">
            <p className="text-xs font-medium uppercase tracking-widest text-cyan-500 mb-4">
              About the Founder
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 mb-6">
              The person behind the numbers.
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-gray-600">
              <p>
                I am Nkemjika Okeke — a business analytics and transformation consultant with a career built across logistics, manufacturing, banking, and FMCG.
              </p>
              <p>
                Working across industries on two continents taught me something that stuck: the businesses that grow fastest are the ones that can see their own numbers clearly and act on them quickly.
              </p>
              <p>
                TurboData Analytics exists because of that gap. I built it for the business owner who is working hard but not seeing the returns that effort deserves.
              </p>
              <p>
                I hold an MBA from Quantic School of Business, a Financial Modeling Certificate from the Corporate Finance Institute, and a certification in Marketing Analytics.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 text-sm bg-gray-100 text-gray-800 border border-gray-200 rounded-full">MBA · Quantic School of Business</span>
              <span className="px-4 py-2 text-sm bg-gray-100 text-gray-800 border border-gray-200 rounded-full">Financial Modeling · CFI</span>
              <span className="px-4 py-2 text-sm bg-gray-100 text-gray-800 border border-gray-200 rounded-full">Marketing Analytics · Certified</span>
            </div>
            <a href="#contact" className="inline-block mt-8 text-cyan-500 font-medium hover:text-cyan-600">
              Work with Jude →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}