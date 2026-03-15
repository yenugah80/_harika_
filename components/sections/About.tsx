'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge mb-8">About</span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] mb-8">
              Building AI systems that{' '}
              <span className="gradient-text">ship</span>
            </h2>

            <p className="text-xl md:text-2xl leading-relaxed text-white/60 mb-6">
              The hard part of AI isn&apos;t building the model—it&apos;s everything else.
              Data quality, stakeholder alignment, production reliability, and building
              systems people actually trust.
            </p>

            <p className="text-lg text-white/40 leading-relaxed">
              8 years learning this at{' '}
              <span className="text-white/70">Apple</span>,{' '}
              <span className="text-white/70">Bank of America</span>, and now{' '}
              <span className="text-white/70">Macy&apos;s</span>.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
