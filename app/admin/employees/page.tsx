'use client'

import Link from 'next/link'

const stats = [
  { label: 'Total Personnel', value: '1,284', trend: '+12% from last month' },
  { label: 'Active Projects', value: '48', trend: 'Across 4 departments' },
  { label: 'Open Positions', value: '24', trend: 'Hiring priority: High' },
  { label: 'Employee Sat.', value: '94%', trend: 'Q3 Internal Survey' },
]

const employees = [
  {
    name: 'Julian Thorne',
    email: 'julian.t@axinex.com',
    role: 'Chief Solutions Architect',
    experience: '12 years • Senior Level',
    department: 'Engineering',
    departmentTone: 'bg-primary-fixed text-on-primary-fixed',
    status: 'Active',
    statusTone: 'text-green-600',
    performance: 5,
  },
  {
    name: 'Sienna Valdez',
    email: 's.valdez@axinex.com',
    role: 'Lead Product Designer',
    experience: '8 years • Mid-Senior',
    department: 'Creative',
    departmentTone: 'bg-secondary-fixed text-on-secondary-fixed',
    status: 'In Meeting',
    statusTone: 'text-vibrant-red',
    performance: 4,
  },
  {
    name: 'Marcus Sterling',
    email: 'm.sterling@axinex.com',
    role: 'Financial Operations Analyst',
    experience: '5 years • Mid Level',
    department: 'Finance',
    departmentTone: 'bg-surface-container-high text-primary',
    status: 'Active',
    statusTone: 'text-green-600',
    performance: 3,
  },
  {
    name: 'Elara Vance',
    email: 'evance@axinex.com',
    role: 'DevOps Specialist',
    experience: '3 years • Associate',
    department: 'Infrastructure',
    departmentTone: 'bg-primary-fixed text-on-primary-fixed',
    status: 'Offline',
    statusTone: 'text-outline',
    performance: 4,
  },
]

const teamActivity = [
  {
    title: 'Elara Vance joined the Infrastructure department.',
    time: '2 hours ago',
    icon: 'group_add',
    iconClass: 'bg-green-100 text-green-600',
  },
  {
    title: 'Julian Thorne updated project permissions for "Project Apollo".',
    time: '5 hours ago',
    icon: 'assignment',
    iconClass: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Sienna Valdez was awarded "Designer of the Month".',
    time: 'Yesterday',
    icon: 'emoji_events',
    iconClass: 'bg-orange-100 text-orange-500',
  },
]

export default function EmployeeManagement() {
  return (
    <div className="flex min-h-screen bg-surface">
      <aside className="fixed left-0 top-0 bottom-0 z-40 flex h-screen w-64 flex-col bg-primary text-on-primary shadow-xl">
        <div className="px-6 py-8">
          <div className="mb-1 flex items-center gap-2">
            <img src="/assets/axinex-logo-transparent.png" alt="Axinex logo" className="h-8 object-contain" />
          </div>
          <p className="font-label-md text-caption opacity-70">Admin Portal</p>
        </div>

        <nav className="flex-1 space-y-1">
          <Link className="mx-2 flex items-center gap-3 rounded-lg px-4 py-3 text-on-primary/70 transition-all hover:bg-white/10 hover:text-on-primary" href="/admin/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md">Dashboard</span>
          </Link>
          <Link className="mx-2 flex items-center gap-3 rounded-lg bg-secondary px-4 py-3 text-on-secondary transition-all" href="/admin/employees">
            <span className="material-symbols-outlined">group</span>
            <span className="font-label-md">Employees</span>
          </Link>
        </nav>

        <div className="mt-auto p-4">
          <div className="mt-4 border-t border-white/10 pt-4">
            <a className="flex items-center gap-3 rounded-lg px-4 py-3 text-on-primary/70 transition-all hover:bg-white/10 hover:text-on-primary" href="/admin/login">
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-md">Logout</span>
            </a>
          </div>
        </div>
      </aside>

      <main className="ml-64 min-h-screen w-full bg-[#f5f7fa] px-6 py-8 lg:px-12 lg:py-10">
        <header className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h1 className="font-headline-lg text-headline-lg tracking-tight text-primary">Employee Directory</h1>
            <p className="mt-1 font-body-md text-on-surface-variant">
              Manage your global workforce, roles, and operational permissions.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest py-3 pl-12 pr-4 font-body-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 lg:w-80"
                placeholder="Search team members..."
                type="text"
              />
            </div>
            <button className="flex items-center gap-2 rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-label-md text-primary transition-colors hover:bg-surface-container-high">
              <span className="material-symbols-outlined">filter_list</span>
              Filters
            </button>
            <button className="rounded-xl bg-primary px-6 py-3 font-label-md text-on-primary transition-opacity hover:opacity-90">
              Add Employee
            </button>
          </div>
        </header>

        <section className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-label-md text-label-md text-on-surface-variant">{stat.label}</p>
                <span className="material-symbols-outlined text-primary/70">groups</span>
              </div>
              <h3 className="mt-2 font-headline-md text-headline-md text-primary">{stat.value}</h3>
              <p className="mt-1 text-caption text-green-600">{stat.trend}</p>
            </div>
          ))}
        </section>

        <section className="mb-8 overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-lowest shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left text-body-md">
              <thead className="border-b border-outline-variant/20 bg-surface-container-high">
                <tr>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Employee Name</th>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Role &amp; Experience</th>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Department</th>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Status</th>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Performance</th>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.name} className="border-b border-outline-variant/20 transition-colors hover:bg-surface-container-low">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-on-primary">
                          {employee.name
                            .split(' ')
                            .map((part) => part[0])
                            .join('')}
                        </div>
                        <div>
                          <p className="font-label-md text-label-md text-primary">{employee.name}</p>
                          <p className="text-caption text-on-surface-variant">{employee.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-label-md text-label-md text-on-surface">{employee.role}</p>
                      <p className="text-caption text-on-surface-variant">{employee.experience}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex rounded-full px-3 py-1 text-caption font-label-md ${employee.departmentTone}`}>
                        {employee.department}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center gap-2 text-caption font-label-md ${employee.statusTone}`}>
                        <span className="h-2 w-2 rounded-full bg-current"></span>
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1 text-vibrant-red">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span key={index} className={`material-symbols-outlined text-[18px] ${index < employee.performance ? 'opacity-100' : 'opacity-20'}`}>
                            star
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <button className="text-primary transition-colors hover:text-primary/70">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-outline-variant/20 bg-surface-container-low px-6 py-4">
            <p className="font-body-md text-on-surface-variant">Showing 1 to 4 of 1,284 entries</p>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-outline-variant px-4 py-2 text-primary transition-colors hover:bg-surface-container-high">Previous</button>
              <button className="rounded-lg bg-primary px-4 py-2 text-on-primary transition-opacity hover:opacity-90">1</button>
              <button className="rounded-lg border border-outline-variant px-4 py-2 text-primary transition-colors hover:bg-surface-container-high">2</button>
              <button className="rounded-lg border border-outline-variant px-4 py-2 text-primary transition-colors hover:bg-surface-container-high">3</button>
              <span className="px-2 text-on-surface-variant">...</span>
              <button className="rounded-lg border border-outline-variant px-4 py-2 text-primary transition-colors hover:bg-surface-container-high">321</button>
              <button className="rounded-lg border border-outline-variant px-4 py-2 text-primary transition-colors hover:bg-surface-container-high">Next</button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-12">
          <div className="xl:col-span-8 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h4 className="font-headline-md text-[24px] text-primary">Recent Team Activity</h4>
              <button className="font-label-md text-label-md text-vibrant-red hover:underline">View History</button>
            </div>
            <div className="space-y-5">
              {teamActivity.map((item) => (
                <article key={item.title} className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconClass}`}>
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-body-md text-on-surface-variant">{item.title}</p>
                    <p className="mt-1 text-caption text-on-surface-variant">{item.time}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="xl:col-span-4 rounded-xl bg-primary p-stack-lg text-on-primary shadow-lg">
            <h4 className="font-headline-md text-[24px] text-on-primary">Integrate more data</h4>
            <p className="mt-3 font-body-md text-on-primary/80">
              Connect your LDAP or HRIS provider to synchronize employee records automatically across the platform.
            </p>
            <button className="mt-8 w-full rounded-xl bg-on-primary px-6 py-4 font-label-md text-label-md text-primary transition-transform hover:-translate-y-0.5">
              Configure Integration
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
