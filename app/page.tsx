import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import InnovationAtScale from '@/components/InnovationSection'
import CoreExpertiseSection from '@/components/CoreExpertiseSection'
import TrustSecuritySection from '@/components/TrustSecuritySection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20 overflow-hidden">
        <HeroSection />
        <InnovationAtScale />
        <CoreExpertiseSection />
        <TrustSecuritySection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
