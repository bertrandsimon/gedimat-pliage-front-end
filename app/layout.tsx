import * as Sentry from '@sentry/nextjs';
import type { Metadata } from 'next'

import ClientProvider from './clientProvider'
import { Suspense } from 'react'

import { Analytics } from '@vercel/analytics/react'
import { Quicksand } from 'next/font/google'
import Toolbar from '../components/toolbar'

import Footer from '@/components/footer'
import { Navmenu } from '@/components/navmenu'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Toaster } from '@/components/ui/toaster'
import { siteConfig } from '@/lib/metadata'
import { metadata as presentationMetadata } from '@/app/presentation/metadata'

const quicksand = Quicksand({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  ...presentationMetadata,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    ...Sentry.getTraceData(),
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClientProvider>
      <html lang="fr">
        <body className={`${quicksand.className} max-w-screen mx-auto`}>
          <div className="w-full bg-black">
            <div className="container">
              <Toolbar />
            </div>
          </div>

          <div className="container mx-auto py-6 sm:px-14 ">
            <Navmenu />
          </div>

          <Suspense>
            <div className=" container mx-auto sm:px-4 -mt-90">
              {children}
              <SpeedInsights />
            </div>
          </Suspense>

          <div className="bg-black">
            <div className="container mx-auto px-14">
              <Footer />
            </div>
          </div>
          <Toaster />
        </body>
      </html>
    </ClientProvider>
  )
}
