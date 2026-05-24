import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const cloudBullets = ['AWS & Azure Mastery', 'Zero-Trust Architecture', 'Automated CI/CD Pipelines']

const securityTags = ['Threat Detection', 'Audit Compliance']

export const metadata = {
  title: 'Services | AXINEX',
  description: 'High-performance software solutions and specialized capabilities for enterprise evolution.',
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-28 pb-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <section className="mb-section-gap">
            <div className="grid grid-cols-1 items-center gap-section-gap md:grid-cols-2">
              <div>
                <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-widest text-vibrant-red">
                  Elite Solutions
                </span>
                <h1 className="font-headline-xl text-headline-xl leading-tight text-primary">
                  Engineering the <br />
                  <span className="font-display-italic italic font-normal text-primary/90">Next Frontier.</span>
                </h1>
                <p className="mt-stack-md max-w-lg font-body-lg text-body-lg text-on-surface-variant">
                  Axinex delivers precision-engineered software ecosystems that bridge corporate stability
                  with modern technological innovation.
                </p>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img
                    alt="Cybersecurity and technology"
                    className="h-[430px] w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg39c4t_4eXdLV2jA3pQxo7gWOCt1yxe-E0z4xCVX07CEp4udnLcywqgRHPINgi5Qb9bala-wiSDjz0_K8MQLgkZJbOjbkPsWtU8kTruw9a1VXlrI7FiPgevbqjYvZWtfMs0z9MUMxGvQ57XyUlitoSY3FdYrLousybbVwA_2x43CL9VE2RUUGNzxjwokQDz93ppH7k_7x9tbI54V_hSo66H77Cg2elqcv5qw5Wg_gz-FsPcRxdCeNvZWWsW6JUWHB-_3lIw97QDoq"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-outline-variant/30 bg-white p-5 shadow-lg md:block">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary-container p-3">
                      <span className="material-symbols-outlined text-on-primary-container">speed</span>
                    </div>
                    <div>
                      <div className="font-label-md text-label-md text-primary">99.9% Uptime</div>
                      <div className="font-caption text-caption text-on-surface-variant">Guaranteed Infrastructure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-section-gap">
            <div className="mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-primary">Capabilities</h2>
              <p className="mt-2 font-body-md text-on-surface-variant">Specialized tracks for enterprise evolution.</p>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
              <div className="group relative overflow-hidden rounded-xl md:col-span-8 h-[380px]">
                <img
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDYdLyB_11WBTaZA8j4rvFHt-EMmf4Y4_HylvUkBqpIZP6n6vRPIAbL9qxwF5txTqHFV9KLrpPyVEQ7kjZSemmvNsuB7yP-gwJTQMDicvPdEpFwHE8dRAhKDPvwol0DxLzEPGTyNdrgZf40OnutXk5e4lZsN0na9IIbn5TElqPb4SRAfO0h_wCQOYue6u-88TNEY0xoGhrY7PrDbObpr4G06XIsYu0GMf-eVmSiqZTPUYyl3Mn6C1fAJyIKcNTGvMjmx_846CeZTQB"
                  alt="Server room infrastructure"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-stack-lg text-white">
                  <h3 className="font-headline-md text-headline-md mb-2">Cloud Infrastructure</h3>
                  <p className="max-w-md font-body-md text-white/80">
                    Proprietary architecture designed to handle peak loads without latency degradation.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cloudBullets.map((bullet) => (
                      <span key={bullet} className="rounded-full bg-white/10 px-3 py-1 text-caption font-label-md text-white/90">
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              

              <div className="rounded-2xl bg-primary text-on-primary p-stack-lg md:col-span-4 flex flex-col justify-between">
                <span className="material-symbols-outlined text-[44px] text-on-primary/70">psychology</span>
                <div>
                  <h3 className="font-headline-md text-headline-md mb-2">AI Integration</h3>
                  <p className="font-body-md text-on-primary/70">
                    Deploying intelligent systems that learn, adapt, and drive decision-making automation across your business.
                  </p>
                  <button className="mt-6 flex items-center gap-2 font-label-md text-label-md text-on-primary transition-transform hover:translate-x-1">
                    Explore Intelligence <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-stack-lg shadow-sm md:col-span-4">
                <div className="mb-8">
                  <span className="material-symbols-outlined mb-4 text-[36px] rounded-xl bg-vibrant-red/10 p-3 text-vibrant-red">code</span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Custom Software</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Bespoke applications tailored to unique workflows, ensuring your software is a competitive advantage, not a constraint.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-surface-container-high p-stack-lg md:col-span-8">
                <div className="mb-4 flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">shield</span>
                  <h3 className="font-headline-md text-headline-md">Cybersecurity Resilience</h3>
                </div>
                <p className="max-w-2xl font-body-md text-on-surface-variant">
                  In an era of evolving threats, we build fortresses. Our security-first approach is woven into every line of code we write and every server we deploy.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {securityTags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white px-4 py-2 font-label-md text-label-md text-primary shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-surface-container-lowest p-10 text-center shadow-sm md:col-span-12">
                <h2 className="font-headline-lg text-headline-lg text-primary">Ready to accelerate?</h2>
                <p className="mx-auto mt-4 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                  Partner with Axinex to transform your technical challenges into scalable business opportunities. Our consultants are ready to architect your next breakthrough.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                  <button className="h-12 rounded-lg bg-primary px-8 font-label-md text-label-md text-on-primary transition-opacity hover:opacity-90">
                    Schedule Consultation
                  </button>
                  <button className="h-12 rounded-lg border border-outline-variant bg-white px-8 font-label-md text-label-md text-primary transition-colors hover:bg-surface-container-high">
                    Download Portfolio
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
