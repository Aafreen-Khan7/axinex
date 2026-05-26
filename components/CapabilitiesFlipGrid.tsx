"use client"

import { useState } from 'react'

const capabilities = [
  {
    title: 'Custom Software Development',
    image: '/images/custom software development.png',
    icon: 'terminal',
    text:
      'Engineering bespoke solutions that integrate seamlessly with your unique business processes to drive competitive advantage.',
  },
  {
    title: 'Mobile Application Development',
    image: '/images/mobile application development.png',
    icon: 'smartphone',
    text:
      "Crafting high-performance iOS and Android experiences that put your brand's power directly into your users' hands.",
  },
  {
    title: 'Web Application Development',
    image: '/images/web app development.png',
    icon: 'public',
    text:
      'Building scalable, secure, and intuitive web platforms using the latest frameworks to power modern enterprise operations.',
  },
  {
    title: 'AI & Automation',
    image: '/images/AI & Automation.png',
    icon: 'psychology',
    text:
      'Accelerating enterprise efficiency through intelligent neural networks and robotic process automation.',
  },
  {
    title: 'QA & Testing',
    image: '/images/QA & testing.png',
    icon: 'shield',
    text:
      'Ensuring absolute reliability through rigorous automated and manual testing protocols across the entire software lifecycle.',
  },
  {
    title: 'Cloud Infrastructure',
    image: '/images/cloud infrastructure.png',
    icon: 'cloud',
    text:
      'Architecting resilient, secure multi-cloud environments that provide the scalable foundation for your global digital growth.',
  },
]

export default function CapabilitiesFlipGrid() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  return (
    <section className="mb-section-gap" style={{ fontFamily: 'Playfair Display, serif' }}>
      <div className="mb-6">
        <h2 className="font-headline-lg text-headline-lg text-primary">Capabilities</h2>
        <p className="mt-2 font-display-italic text-[19px] text-on-surface-variant">
          Specialized tracks for enterprise evolution.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:gap-5">
        {capabilities.map((card, index) => {
          const isFlipped = flippedIndex === index

          return (
            <button
              key={card.title}
              type="button"
              aria-pressed={isFlipped}
              onClick={() => setFlippedIndex((current) => (current === index ? null : index))}
              className="group relative h-[250px] w-full text-left"
              style={{ perspective: '1400px' }}
            >
              <div
                className="relative h-full w-full transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                <div
                  className="absolute inset-0 overflow-hidden rounded-[18px] shadow-[0_12px_22px_rgba(12,34,55,0.14)]"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071c31]/90 via-[#0b3357]/58 to-[#0d3a60]/25" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_45%)]" />
                  <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-white/15 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-[28px] text-white">{card.icon}</span>
                    </div>
                    <h3 className="max-w-[11rem] text-[1.38rem] leading-[1.03] font-normal tracking-[-0.02em] text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <div
                  className="absolute inset-0 overflow-hidden rounded-[18px] bg-primary text-on-primary shadow-[0_12px_22px_rgba(12,34,55,0.14)]"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="flex h-full flex-col justify-center px-6 py-5 text-center">
                    <p className="mx-auto max-w-[16rem] text-[1.03rem] leading-[1.45] text-white/90">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
