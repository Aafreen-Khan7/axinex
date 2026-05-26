import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import InlineIcon from '@/components/InlineIcon'
import CoreExpertiseSection from '@/components/CoreExpertiseSection'
import TrustSecuritySection from '@/components/TrustSecuritySection'
import CTASection from '@/components/CTASection'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import FAQSection from '@/components/FAQSection'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20 overflow-hidden">
        <HeroSection />
        <section className="w-full bg-[#eef5fb] py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-primary mt-4">
                Our <span className="font-display-italic italic">Foundation</span>
              </h2>
              <div className="h-1 w-12 bg-vibrant-red mx-auto mt-4 rounded" />
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
              <div className="bg-white p-9 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#1f5e93] mb-6 shadow-sm">
                <InlineIcon name="eye" className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display-italic italic font-semibold text-xl text-[#0b3d5b] mb-3">Our Vision</h3>
              <p className="text-on-surface-variant font-body-md">
                To be the global catalyst for intelligent enterprise evolution, bridging the gap between current infrastructure and tomorrow's possibilities.
              </p>
              </div>

              <div className="bg-white p-9 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-vibrant-red mb-6 shadow-sm">
                  <InlineIcon name="rocket" className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display-italic italic font-semibold text-xl text-[#0b3d5b] mb-3">Our Mission</h3>
                <p className="text-on-surface-variant font-body-md">
                  To engineer robust, high-performance software solutions that empower global organizations to navigate digital transformation with precision and security.
                </p>
              </div>

              <div className="bg-white p-9 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#1f5e93] mb-6 shadow-sm">
                  <InlineIcon name="stars" className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display-italic italic font-semibold text-xl text-[#0b3d5b] mb-3">Our Values</h3>
                <ul className="text-on-surface-variant font-body-md list-disc list-inside space-y-2">
                  <li><strong className="text-primary">Innovation</strong> — Pushing boundaries to create pioneering solutions.</li>
                  <li><strong className="text-primary">Integrity</strong> — Transparent, ethical, and reliable partnerships.</li>
                  <li><strong className="text-primary">Excellence</strong> — Uncompromising quality in every line of code.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <CoreExpertiseSection />
        <TrustSecuritySection />
        <TestimonialCarousel />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
