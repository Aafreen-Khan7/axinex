import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import InlineIcon from '@/components/InlineIcon'

export const metadata = {
  title: 'About | AXINEX',
  description: 'About Axinex — mission, leadership, and principles that guide our engineering practice.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg39c4t_4eXdLV2jA3pQxo7gWOCt1yxe-E0z4xCVX07CEp4udnLcywqgRHPINgi5Qb9bala-wiSDjz0_K8MQLgkZJbOjbkPsWtU8kTruw9a1VXlrI7FiPgevbqjYvZWtfMs0z9MUMxGvQ57XyUlitoSY3FdYrLousybbVwA_2x43CL9VE2RUUGNzxjwokQDz93ppH7k_7x9tbI54V_hSo66H77Cg2elqcv5qw5Wg_gz-FsPcRxdCeNvZWWsW6JUWHB-_3lIw97QDoq"
              alt="Modern enterprise architecture"
              className="h-[620px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0b3d5b]/75" />
          </div>

          <div className="relative mx-auto flex min-h-[620px] max-w-container-max items-center px-margin-mobile md:px-margin-desktop">
            <div className="max-w-2xl text-white">
              <span className="mb-5 block font-label-md text-label-md uppercase tracking-[0.24em] text-white/75">
                Since 2008
              </span>
              <h1 className="font-headline-xl text-headline-xl leading-[0.95] text-white">
                Driving the Future of{' '}
                <span className="font-display-italic italic font-normal text-white/90">
                  Enterprise Technology
                </span>
              </h1>
              <p className="mt-6 max-w-xl font-body-lg text-body-lg text-white/80 leading-relaxed">
                Empowering global organizations with next-generation infrastructure, high-performance
                computing, and resilient software ecosystems designed for the speed of modern business.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="h-12 rounded-lg bg-vibrant-red px-7 font-label-md text-label-md text-on-primary shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl">
                  Our Solutions
                </button>
                <button className="h-12 rounded-lg border border-white/25 bg-white/10 px-7 font-label-md text-label-md text-white backdrop-blur-sm transition-colors hover:bg-white/15">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 items-center">
            <div>
              <span className="mb-4 block font-label-md text-label-md uppercase tracking-[0.24em] text-vibrant-red">
                Since 2008
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">A Legacy of Precision Engineering</h2>
              <p className="mt-5 max-w-xl font-body-md text-on-surface-variant leading-relaxed">
                Axinex began as a specialized boutique consultancy focused on solving the most complex
                network bottleneck issues for financial institutions. Over two decades, we have evolved
                into a global infrastructure leader, managing the foundational systems for Fortune 500
                companies.
              </p>
              <p className="mt-5 max-w-xl font-body-md text-on-surface-variant leading-relaxed">
                Our journey is defined by a relentless pursuit of technical excellence and a commitment
                to building software that does not just work, but outperforms expectations under the
                most rigorous conditions.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop"
                alt="Server racks"
                className="h-[420px] w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 glass-card max-w-[220px] rounded-xl p-stack-lg shadow-lg">
                <span className="block font-headline-md text-headline-md text-primary">24+</span>
                <p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                  Global regions supported
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-section-gap">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-headline-lg text-headline-lg text-primary">The Principles that Power Us</h2>
              <p className="mt-4 font-body-md text-on-surface-variant">
                Founded on the belief that technical integrity is the foundation of digital trust.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <InlineIcon className="h-5 w-5" name="bolt" />
                </div>
                <h4 className="font-headline-md text-headline-md text-primary">Innovation</h4>
                <p className="mt-3 font-body-md text-on-surface-variant">
                  We do not just adapt to the future; we architect it through continuous R&D and a
                  culture of creative problem-solving.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <InlineIcon className="h-5 w-5" name="security" />
                </div>
                <h4 className="font-headline-md text-headline-md text-primary">Integrity</h4>
                <p className="mt-3 font-body-md text-on-surface-variant">
                  Transparency is our standard. We build reliable systems and relationships founded on
                  absolute honesty and accountability.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <InlineIcon className="h-5 w-5" name="hub" />
                </div>
                <h4 className="font-headline-md text-headline-md text-primary">Excellence</h4>
                <p className="mt-3 font-body-md text-on-surface-variant">
                  Good enough is the enemy. We strive for mathematical precision in our code and
                  flawless execution in our deployments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block font-label-md text-label-md uppercase tracking-[0.24em] text-vibrant-red">
                Executive Leadership
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Visionaries Behind Axinex</h2>
            </div>
            <p className="max-w-md text-right font-body-md text-on-surface-variant md:pt-6 md:text-left">
              A diverse panel of industry veterans from top-tier tech firms and academic institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 xl:grid-cols-4">
            {[
              { name: 'Julian Thorne', title: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80&auto=format&fit=crop' },
              { name: 'Elena Rodriguez', title: 'Chief Technology Officer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80&auto=format&fit=crop' },
              { name: 'Marcus Sterling', title: 'Head of Global Operations', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80&auto=format&fit=crop' },
              { name: 'Sarah Chen', title: 'Director of Innovation', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&q=80&auto=format&fit=crop' },
            ].map((person) => (
              <div key={person.name} className="group">
                <div className="overflow-hidden rounded-md bg-white shadow-sm">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="h-[290px] w-full object-cover grayscale transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-3">
                  <div className="font-headline-md text-headline-md text-primary">{person.name}</div>
                  <div className="mt-1 text-sm text-on-surface-variant">{person.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
