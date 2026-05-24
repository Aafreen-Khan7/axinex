'use client'

import { useState } from 'react'
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

type Enquiry = {
  id: string
  name: string
  email: string
  company: string
  message: string
  status: 'New' | 'Contacted' | 'Resolved'
}

const enquiries: Enquiry[] = [
  {
    id: 'ENQ-1001',
    name: 'Aisha Rahman',
    email: 'aisha.rahman@orbitlogistics.com',
    company: 'Orbit Logistics',
    message: 'Need a proposal for cloud migration and security hardening.',
    status: 'New',
  },
  {
    id: 'ENQ-1002',
    name: 'Daniel Cruz',
    email: 'd.cruz@novagrid.io',
    company: 'NovaGrid',
    message: 'Can you share pricing for managed support across 3 regions?',
    status: 'Contacted',
  },
  {
    id: 'ENQ-1003',
    name: 'Priya Menon',
    email: 'priya@helixsystems.ai',
    company: 'Helix Systems',
    message: 'Looking for a SOC 2 readiness consultation this quarter.',
    status: 'Resolved',
  },
]

export default function AdminDashboard() {
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null)
  const [emailSubject, setEmailSubject] = useState('')
  const [emailMessage, setEmailMessage] = useState('')

  const openEmailModal = (enquiry: Enquiry) => {
    setSelectedEnquiry(enquiry)
    setEmailSubject(`Re: Your enquiry (${enquiry.id})`) 
    setEmailMessage(
      `Hello ${enquiry.name},\n\nThank you for contacting AXINEX regarding ${enquiry.company}. We received your enquiry and our team is reviewing it.\n\nWe will share the next steps shortly.\n\nBest regards,\nAXINEX Support Team`
    )
  }

  const closeEmailModal = () => {
    setSelectedEnquiry(null)
    setEmailSubject('')
    setEmailMessage('')
  }

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    closeEmailModal()
  }

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-surface">
      <aside className="fixed left-0 top-0 bottom-0 z-40 flex h-screen w-64 flex-col bg-primary text-on-primary shadow-xl">
        <div className="px-6 py-8">
          <div className="mb-8 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-vibrant-red">
              <span className="h-2 w-2 rounded-full bg-white"></span>
            </span>
            <div>
              <h1 className="font-headline-md text-headline-md leading-none text-on-primary">
                AXINEX
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

      <main className="ml-64 min-h-screen overflow-x-hidden overflow-y-scroll bg-[#f5f7fa] px-6 py-8 lg:px-12 lg:py-10" style={{ scrollbarGutter: 'stable' }}>
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
            <div className="mt-8 flex items-center justify-center gap-1">
              <span className="h-8 w-8 rounded-full border-2 border-white bg-surface-container-high"></span>
              <span className="h-8 w-8 rounded-full border-2 border-white bg-surface-container-high -ml-3"></span>
              <span className="h-8 w-8 rounded-full border-2 border-white bg-surface-container-high -ml-3"></span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[11px] text-on-primary -ml-3">+12</span>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1">
          <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h4 className="font-headline-md text-[24px] text-primary">Enquiries</h4>
              <span className="rounded-md bg-surface-container-high px-3 py-1 font-label-md text-caption text-on-surface-variant">
                {enquiries.length} total
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-outline-variant/20">
              <div className="overflow-x-auto">
                <table className="min-w-[980px] w-full text-left">
                  <thead className="bg-surface-container-high/60">
                    <tr>
                      <th className="px-4 py-3 font-label-md text-caption uppercase tracking-wide text-on-surface-variant">ID</th>
                      <th className="px-4 py-3 font-label-md text-caption uppercase tracking-wide text-on-surface-variant">Name</th>
                      <th className="px-4 py-3 font-label-md text-caption uppercase tracking-wide text-on-surface-variant">Email</th>
                      <th className="px-4 py-3 font-label-md text-caption uppercase tracking-wide text-on-surface-variant">Company</th>
                      <th className="px-4 py-3 font-label-md text-caption uppercase tracking-wide text-on-surface-variant">Message</th>
                      <th className="px-4 py-3 font-label-md text-caption uppercase tracking-wide text-on-surface-variant">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-surface-container-lowest">
                    {enquiries.map((enquiry) => (
                      <tr key={enquiry.id} className="align-top transition-colors hover:bg-surface-container-high/30">
                        <td className="whitespace-nowrap border-t border-outline-variant/10 px-4 py-4 font-label-md text-label-md text-primary">{enquiry.id}</td>
                        <td className="whitespace-nowrap border-t border-outline-variant/10 px-4 py-4 font-body-md text-on-surface">{enquiry.name}</td>
                        <td className="whitespace-nowrap border-t border-outline-variant/10 px-4 py-4 font-body-md text-on-surface-variant">
                          <a className="hover:text-primary hover:underline" href={`mailto:${enquiry.email}`}>
                            {enquiry.email}
                          </a>
                        </td>
                        <td className="whitespace-nowrap border-t border-outline-variant/10 px-4 py-4 font-body-md text-on-surface">{enquiry.company}</td>
                        <td className="border-t border-outline-variant/10 px-4 py-4 font-body-md text-on-surface-variant">
                          <p className="max-w-[360px] leading-6">{enquiry.message}</p>
                        </td>
                        <td className="border-t border-outline-variant/10 px-4 py-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`inline-flex w-fit rounded-full px-3 py-1 font-label-md text-caption ${
                                enquiry.status === 'Resolved'
                                  ? 'bg-green-100 text-green-700'
                                  : enquiry.status === 'Contacted'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}
                            >
                              {enquiry.status}
                            </span>
                            <button
                              className="inline-flex w-fit items-center rounded-md bg-primary px-3 py-1.5 font-label-md text-caption text-on-primary transition-opacity hover:opacity-90"
                              onClick={() => openEmailModal(enquiry)}
                              type="button"
                            >
                              Send Email
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4">
            <div className="w-full max-w-2xl rounded-xl bg-surface p-6 shadow-xl">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h5 className="font-headline-md text-[22px] text-primary">Send Email to Customer</h5>
                  <p className="mt-1 font-body-md text-on-surface-variant">To: {selectedEnquiry.email}</p>
                </div>
                <button
                  aria-label="Close email popup"
                  className="rounded-md bg-surface-container-high px-3 py-1 font-label-md text-caption text-on-surface-variant"
                  onClick={closeEmailModal}
                  type="button"
                >
                  Close
                </button>
              </div>

              <form className="space-y-4" onSubmit={handleEmailSubmit}>
                <div>
                  <label className="mb-1 block font-label-md text-caption text-on-surface-variant" htmlFor="email-subject">
                    Subject:
                  </label>
                  <input
                    className="w-full rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-3 py-2 font-body-md text-on-surface outline-none ring-primary/30 focus:ring"
                    id="email-subject"
                    onChange={(event) => setEmailSubject(event.target.value)}
                    required
                    type="text"
                    value={emailSubject}
                  />
                </div>

                <div>
                  <label className="mb-1 block font-label-md text-caption text-on-surface-variant" htmlFor="email-message">
                    Message:
                  </label>
                  <textarea
                    className="min-h-44 w-full rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-3 py-2 font-body-md text-on-surface outline-none ring-primary/30 focus:ring"
                    id="email-message"
                    onChange={(event) => setEmailMessage(event.target.value)}
                    required
                    value={emailMessage}
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    className="rounded-lg border border-outline-variant/40 px-4 py-2 font-label-md text-label-md text-on-surface"
                    onClick={closeEmailModal}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button className="rounded-lg bg-primary px-4 py-2 font-label-md text-label-md text-on-primary" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
