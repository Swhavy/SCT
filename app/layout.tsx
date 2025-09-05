import type React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Manrope } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title:
    'Swhavy Collective Technologies - Empowering Communities With Smarter Solar Solutions',
  description:
    'Professional solar solutions, power audits, and community microgrid projects. Building sustainable communities with renewable energy.',
  generator: 'SCT Devs',
  icons: {
    icon: '/images/sct-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} antialiased`}
    >
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-manrope: ${manrope.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="swhavy-theme"
          themes={['light', 'dark']}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
