'use client'

import Link from 'next/link'
import { useState } from 'react'

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

const recentEnquiries = [
  {
    id: 'ENQ-1024',
    company: 'Stratis Global',
    service: 'Cloud Migration',
    contact: 'hello@stratisglobal.com',
    status: 'New',
    date: '2026-05-25',
  },
  {
    id: 'ENQ-1023',
    company: 'Northpine Logistics',
    service: 'Security Hardening',
    contact: 'it@northpine.io',
    status: 'Contacted',
    date: '2026-05-25',
  },
  {
    id: 'ENQ-1022',
    company: 'Aurelia Finance',
    service: 'Data Platform',
    contact: 'ops@aureliafinance.com',
    status: 'In Progress',
    date: '2026-05-24',
  },
  {
    id: 'ENQ-1021',
    company: 'Veridian Health',
    service: 'AI Automation',
    contact: 'support@veridianhealth.org',
    status: 'Resolved',
    date: '2026-05-23',
  },
]

export default function AdminDashboard() {
  const [selectedEnquiry, setSelectedEnquiry] = useState<(typeof recentEnquiries)[number] | null>(null)
  const [emailSubject, setEmailSubject] = useState('')
  const [emailMessage, setEmailMessage] = useState('')

  const openEmailModal = (enquiry: (typeof recentEnquiries)[number]) => {
    setSelectedEnquiry(enquiry)
    setEmailSubject(`Re: Your enquiry (${enquiry.id})`)
    setEmailMessage(
      `Thank you for contacting AXINEX regarding ${enquiry.company}. We received your enquiry and our team is reviewing it.\n\nWe will share the next steps shortly.\n\nBest regards,\nAXINEX Support Team`
    )
  }

  const closeEmailModal = () => {
    setSelectedEnquiry(null)
    setEmailSubject('')
    setEmailMessage('')
  }

  const handleSendEmail = () => {
    if (!selectedEnquiry) return
    const mailto = `mailto:${selectedEnquiry.contact}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailMessage)}`
    window.location.href = mailto
    closeEmailModal()
  }

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
        </section>

        <section className="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h4 className="font-headline-md text-[24px] text-primary">Recent Enquiries</h4>
            <button className="font-label-md text-label-md text-vibrant-red hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left text-body-md">
              <thead>
                <tr className="border-b border-outline-variant/30 text-on-surface-variant">
                  <th className="px-3 py-3 font-label-md">Enquiry ID</th>
                  <th className="px-3 py-3 font-label-md">Company</th>
                  <th className="px-3 py-3 font-label-md">Service</th>
                  <th className="px-3 py-3 font-label-md">Contact</th>
                  <th className="px-3 py-3 font-label-md">Status</th>
                  <th className="px-3 py-3 font-label-md">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentEnquiries.map((enquiry) => (
                  <tr key={enquiry.id} className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                    <td className="px-3 py-4 font-label-md text-primary">{enquiry.id}</td>
                    <td className="px-3 py-4 text-on-surface">{enquiry.company}</td>
                    <td className="px-3 py-4 text-on-surface">{enquiry.service}</td>
                    <td className="px-3 py-4 text-on-surface-variant">{enquiry.contact}</td>
                    <td className="px-3 py-4">
                      <div className="flex flex-col items-start gap-2">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-caption font-label-md ${
                            enquiry.status === 'Resolved'
                              ? 'bg-green-100 text-green-700'
                              : enquiry.status === 'In Progress'
                                ? 'bg-blue-100 text-blue-700'
                                : enquiry.status === 'Contacted'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {enquiry.status}
                        </span>
                        <button
                          type="button"
                          onClick={() => openEmailModal(enquiry)}
                          className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-caption font-label-md text-on-primary transition-colors hover:bg-primary/90"
                        >
                          Send Email
                        </button>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-on-surface-variant">{enquiry.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4">
            <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-headline-md text-[28px] text-primary">Send Email to Customer</h4>
                  <p className="mt-1 text-body-md text-on-surface-variant">To: {selectedEnquiry.contact}</p>
                </div>
                <button
                  type="button"
                  onClick={closeEmailModal}
                  className="rounded-md bg-surface-container-high px-3 py-1 text-caption text-on-surface-variant"
                >
                  Close
                </button>
              </div>

              <label className="mb-2 block text-caption font-label-md text-on-surface-variant">Subject</label>
              <input
                type="text"
                value={emailSubject}
                onChange={(event) => setEmailSubject(event.target.value)}
                className="mb-4 w-full rounded-lg border border-outline-variant/30 px-3 py-2 text-body-md text-on-surface outline-none focus:border-primary"
              />

              <label className="mb-2 block text-caption font-label-md text-on-surface-variant">Message</label>
              <textarea
                value={emailMessage}
                onChange={(event) => setEmailMessage(event.target.value)}
                rows={8}
                className="w-full rounded-lg border border-outline-variant/30 px-3 py-2 text-body-md text-on-surface outline-none focus:border-primary"
              />

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeEmailModal}
                  className="rounded-md px-4 py-2 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="rounded-md bg-primary px-5 py-2 font-label-md text-label-md text-on-primary transition-colors hover:bg-primary/90"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
