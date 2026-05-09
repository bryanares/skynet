import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'SKYNET | High-Speed Internet in Nairobi',
    template: '%s | SKYNET',
  },
  description:
    'SKYNET delivers blazing-fast, reliable home and office internet across Nairobi. Choose from Lite, Standard, or Premium plans starting at KES 1,500/mo.',
  keywords: ['internet', 'ISP', 'Nairobi', 'Kenya', 'broadband', 'WiFi', 'SKYNET'],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://skynet.co.ke',
    siteName: 'SKYNET',
    title: 'SKYNET | High-Speed Internet in Nairobi',
    description:
      'Blazing-fast, reliable internet for homes and offices across Nairobi. Plans from KES 1,500/mo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYNET | High-Speed Internet in Nairobi',
    description: 'Blazing-fast, reliable internet for homes and offices across Nairobi.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-bg">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
