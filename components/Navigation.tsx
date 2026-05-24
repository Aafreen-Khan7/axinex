"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-headline-md text-headline-md font-bold tracking-tighter text-primary">
            AXINEX
          </span>
          <div className="w-2 h-2 rounded-full bg-vibrant-red mt-1"></div>
        </Link>

        <div className="hidden md:flex items-center gap-stack-lg">
          <Link
            href="/"
            className={
              `font-label-md text-label-md pb-1 transition-colors ` +
              (pathname === '/' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary')
            }
          >
            Home
          </Link>
          <Link
            href="/services"
            className={
              `font-label-md text-label-md pb-1 transition-colors ` +
              (pathname === '/services' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary')
            }
          >
            Services
          </Link>
          <Link
            href="/about"
            className={
              `font-label-md text-label-md pb-1 transition-colors ` +
              (pathname === '/about' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary')
            }
          >
            About
          </Link>
          <Link
            href="/contact"
            className={
              `font-label-md text-label-md pb-1 transition-colors ` +
              (pathname === '/contact' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary')
            }
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/admin/login"
            className="hidden md:block font-label-md text-label-md text-primary hover:opacity-80 transition-opacity"
          >
            Admin Login
          </Link>
          <button className="bg-vibrant-red text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all active:scale-95 shadow-md">
            Send Enquiry
          </button>
        </div>
      </nav>
    </header>
  )
}
