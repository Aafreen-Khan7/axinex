import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-stack-lg bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-stack-lg">
        <div className="flex items-center gap-2">
          <span className="font-label-md text-label-md font-bold text-primary">AXINEX</span>
          <span className="font-caption text-caption text-on-surface-variant">
            © 2024 Axinex Technologies. All rights reserved.
          </span>
        </div>
        <div className="flex gap-stack-lg">
          <Link
            href="#"
            className="font-caption text-caption text-on-surface-variant hover:text-primary hover:underline transition-all"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="font-caption text-caption text-on-surface-variant hover:text-primary hover:underline transition-all"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="font-caption text-caption text-on-surface-variant hover:text-primary hover:underline transition-all"
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  )
}
