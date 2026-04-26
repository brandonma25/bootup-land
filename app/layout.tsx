import type { Metadata } from 'next'
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Boot Up — The world's caught up by the time you grab coffee.",
  description:
    'Five signals worth knowing today. Each one explained — what happened, why it matters, and what it connects to. Built for ambitious 18–26 year olds.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bootup-land.vercel.app'
  ),
  openGraph: {
    title: 'Boot Up',
    description: "The world's caught up by the time you grab coffee.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bootup-land.vercel.app',
    siteName: 'Boot Up',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boot Up',
    description: "The world's caught up by the time you grab coffee.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
