import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getSiteUrl } from '@/lib/site-url'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Li'A Home Services | Cleaning, Laundry & Home Care — Everett, MA",
    template: "%s | Li'A Home Services",
  },
  description:
    "Professional home services in Everett, MA. Licensed & insured team offering house cleaning, laundry, meal preparation, and shopping assistance. Book online today.",
  keywords: [
    'home services Everett MA',
    'house cleaning Everett',
    'laundry service Boston',
    'meal preparation service',
    'shopping assistance',
    'home care Everett Massachusetts',
    'licensed insured cleaning',
  ],
  authors: [{ name: "Li'A Home Services" }],
  creator: "Li'A Home Services",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: "Li'A Home Services",
    title: "Li'A Home Services | Professional Home Care in Everett, MA",
    description:
      'Licensed & insured home services — cleaning, laundry, meal prep, and shopping — serving Everett, MA and surrounding areas.',
    images: [{ url: '/img/hero-background-1.png', width: 2400, height: 1600, alt: "Li'A Home Services" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Li'A Home Services",
    description: 'Professional home services in Everett, MA.',
    images: ['/img/hero-background-1.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/img/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/img/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
