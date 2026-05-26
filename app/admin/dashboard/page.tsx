'use client'

import Link from 'next/link'

const kpiCards = [
  {
    label: 'Monthly Traffic',
    value: '1.2M',
    delta: '+12.5%',
    trend: 'trending_up',
    tone: 'text-green-600',
    icon: 'analytics',
    iconClass: 'bg-primary-fixed text-on-primary-fixed',
    barWidth: '75%',
    barClass: 'bg-primary',
  },
  {
    label: 'Total Inquiries',
    value: '8,432',
    delta: '-2.4%',
    trend: 'trending_down',
    tone: 'text-vibrant-red',
    icon: 'forum',
    iconClass: 'bg-secondary-fixed text-on-secondary-fixed',
    barWidth: '48%',
    barClass: 'bg-secondary',
  },
  {
    label: 'Response Rate',
    value: '85%',
    delta: '+5.2%',
    trend: 'trending_up',
    tone: 'text-green-600',
    icon: 'payments',
    iconClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    barWidth: '66%',
    barClass: 'bg-tertiary',
  },
  {
    label: 'Employees', 
    value: '100',
    delta: '+10%',
    trend: 'check_circle',
    tone: 'text-blue-500',
    icon: 'group',
    iconClass: 'bg-primary-container text-on-primary-container',
    barWidth: '98%',
    barClass: 'bg-deep-navy',
  },
]

const trafficBars = [58, 86, 44, 72, 98, 38, 54]

const serviceInquiries = [
  { label: 'New', percent: 42 },
  { label: 'Contacted', percent: 28 },
  { label: 'Resolved', percent: 18 },
]

const recentActivity = [
  {
    title: 'Security Audit Completed',
    description: 'Project Phoenix infrastructure successfully passed all compliance checks.',
    time: '2m ago',
    icon: 'verified',
    iconClass: 'bg-green-100 text-green-600',
  },
  {
    title: 'New Client Onboarding',
    description: 'Stratis Global has been added to the AXINEX enterprise portfolio.',
    time: '1h ago',
    icon: 'group_add',
    iconClass: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Server Latency Warning',
    description: 'Node EU-West-4 experienced unusual traffic spikes; auto-scaled to 8 instances.',
    time: '4h ago',
    icon: 'warning',
    iconClass: 'bg-red-100 text-red-500',
  },
  {
    title: 'System Update Scheduled',
    description: 'Version 2.5.0 scheduled for deployment on Saturday at 02:00 UTC.',
    time: 'Yesterday',
    icon: 'update',
    iconClass: 'bg-surface-container-high text-outline',
  },
]

const teamEfficiency = [
  { label: 'Engineering', value: 88, barClass: 'bg-white' },
  { label: 'Customer Support', value: 94, barClass: 'bg-vibrant-red' },
]

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-surface">
      <aside className="fixed left-0 top-0 bottom-0 z-40 flex h-screen w-64 flex-col bg-primary text-on-primary shadow-xl">
        <div className="px-6 py-8">
          <div className="mb-8 flex items-center gap-2">
            <div>
              <h1 className="font-headline-md text-headline-md leading-none text-on-primary">
                <img src="/assets/axinex-logo-transparent.png" alt="Axinex logo" className="h-8 object-contain" />
              </h1>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-on-primary/60">
                Admin Portal
              </p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <Link
              className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-3 text-on-secondary transition-all"
              href="/admin/dashboard"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                dashboard
              </span>
              <span className="font-label-md text-label-md">Dashboard</span>
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-on-primary/70 transition-all hover:bg-white/10 hover:text-on-primary"
              href="/admin/employees"
            >
              <span className="material-symbols-outlined">group</span>
              <span className="font-label-md text-label-md">Employees</span>
            </Link>
          </nav>
        </div>

        <div className="mt-auto border-t border-white/10 p-6">
          <div className="mb-6 flex items-center gap-3">
            <img
              alt="Admin User Profile"
              className="h-10 w-10 rounded-full border-2 border-white/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXgzPbZFxYTsdN7oBMmGqSmXm6LqTHgI9J9W83sQjKZsEuza0SUXHI-T94-Rv7pEwLCcqXqLi1TVgFvobpjDjPmWrFZR0D7aYHIOx6UCgkP9ylvnns2sAFU3GUTG2CkTnCsWdIBny0PWhGlj0EzA2n-6C5QvgpEOtq73AuRcLXvK6fV0Izq8YbEvgNYCeVhLSjf9kGYO35PIb_7YPRtHPRcS5a-FcRD0Crw6LK4J8LeU1feOJGxFCosK0gUjb4Q_oOfucPGG6V8Gqn"
            />
            <div className="overflow-hidden">
              <p className="truncate font-label-md text-label-md text-on-primary">Admin User</p>
              <p className="truncate text-[10px] text-on-primary/60">admin@axinex.tech</p>
            </div>
          </div>
          <a className="flex items-center gap-3 px-2 py-2 text-on-primary/70 transition-all hover:text-on-primary" href="/admin/login">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md text-label-md">Logout</span>
          </a>
        </div>
      </aside>

      <main className="ml-64 min-h-screen w-full overflow-y-auto bg-[#f5f7fa] px-6 py-8 lg:px-12 lg:py-10">
        <header className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg tracking-tight text-primary">
              System Overview
            </h2>
            <p className="mt-1 font-body-md text-on-surface-variant">
              Manage Enquiries, Analytics, and Team Performance
            </p>
          </div>
          
        </header>

        <section className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {kpiCards.map((card) => (
            <div
              key={card.label}
              className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className={`rounded-lg p-2 ${card.iconClass}`}>
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <span className={`flex items-center gap-1 font-label-md text-label-md ${card.tone}`}>
                  {card.delta} <span className="material-symbols-outlined text-[14px]">{card.trend}</span>
                </span>
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant">{card.label}</p>
              <h3 className="mt-1 font-headline-md text-headline-md text-primary">{card.value}</h3>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-surface-container-high">
                <div className={`h-full rounded-full ${card.barClass}`} style={{ width: card.barWidth }}></div>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-12">
          <div className="xl:col-span-8 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h4 className="font-headline-md text-[24px] text-primary">Enquiry Graph</h4>
              <div className="flex gap-2">
                <button className="rounded-md bg-surface-container-high px-3 py-1 font-label-md text-caption">Day</button>
                <button className="rounded-md bg-primary px-3 py-1 font-label-md text-caption text-on-primary">Week</button>
                <button className="rounded-md bg-surface-container-high px-3 py-1 font-label-md text-caption">Month</button>
              </div>
            </div>
            <div className="relative flex h-72 items-end gap-2 px-4">
              <div className="pointer-events-none absolute inset-x-4 top-0 bottom-0 flex flex-col justify-between opacity-20">
                <div className="border-t border-outline"></div>
                <div className="border-t border-outline"></div>
                <div className="border-t border-outline"></div>
                <div className="border-t border-outline"></div>
              </div>
              {trafficBars.map((height, index) => (
                <div key={index} className="flex-1 rounded-t-lg bg-primary/10 relative" style={{ height: `${height}%` }}>
                  <div className="absolute inset-x-0 bottom-0 h-2 rounded-t-lg bg-primary transition-all duration-300 group-hover:h-full"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-4 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
            <h4 className="mb-6 font-headline-md text-[20px] text-primary">Inquiries Status</h4> 
            <div className="space-y-4">
              {serviceInquiries.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-caption font-label-md">
                    <span>{item.label}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${item.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div> 
            <div className="mt-8 flex items-center justify-center gap-1">
              <span className="h-8 w-8 rounded-full border-2 border-white bg-surface-container-high"></span>
              <span className="h-8 w-8 rounded-full border-2 border-white bg-surface-container-high -ml-3"></span>
              <span className="h-8 w-8 rounded-full border-2 border-white bg-surface-container-high -ml-3"></span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[11px] text-on-primary -ml-3">+12</span>
            </div>
        </section>
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-12">
          <div className="xl:col-span-7 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h4 className="font-headline-md text-[24px] text-primary">Recent Activity</h4>
              <button className="font-label-md text-label-md text-vibrant-red hover:underline">View All</button>
            </div>
            <div className="space-y-5">
              {recentActivity.map((item) => (
                <article key={item.title} className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconClass}`}>
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h5 className="font-label-md text-label-md text-primary">{item.title}</h5>
                      <span className="text-caption text-on-surface-variant">{item.time}</span>
                    </div>
                    <p className="mt-1 text-body-md text-on-surface-variant">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="xl:col-span-5 rounded-xl bg-primary p-stack-lg text-on-primary shadow-lg">
            <h4 className="font-headline-md text-[24px] text-on-primary">Team Efficiency</h4>
            <p className="mt-2 font-body-md text-on-primary/80">Performance tracking across departments.</p>
            <div className="mt-8 space-y-6">
              {teamEfficiency.map((item) => (
                <div key={item.label}>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-label-md text-label-md">
                        {item.value}%
                      </span>
                      <span className="font-label-md text-label-md text-on-primary">{item.label}</span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full ${item.barClass}`} style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full rounded-xl bg-on-primary px-6 py-4 font-label-md text-label-md text-primary transition-transform hover:-translate-y-0.5">
              Launch Productivity Audit
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
