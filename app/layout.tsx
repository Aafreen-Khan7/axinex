import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'AXINEX | Innovation at Scale',
  description: 'Axinex bridges the gap between traditional industry and digital frontier. We deploy robust, high-performance infrastructure designed for the next era of technological evolution.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface">
        {children}
      </body>
    </html>
  )
}
