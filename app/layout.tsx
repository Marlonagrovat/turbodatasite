import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'TurboData Analytics | Business Analytics Consulting in Sarnia, Ontario',
  description: 'We find the money your business is leaving on the table. TurboData Analytics helps SMEs in Sarnia-Lambton uncover hidden profit leaks, fix broken processes, and make decisions backed by real numbers.',
  keywords: 'business analytics, consulting, Sarnia, Ontario, profit optimization, operations, financial performance',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
