import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Separator } from '@/components/ui/separator'
import {NavigationBar} from "@/components/navbar";
const homepageKeywordsArray = [
    'Apple service status dashboard',
    'Real-time Apple service status',
    'Check Apple service status',
    'Monitor Apple service health',
    'Apple service outage updates',
    'Current status of Apple services',
    'Apple service reliability',
    'Apple service disruptions',
    'Apple service availability',
    'Apple service issues',
    'Apple service updates',
    'Apple service downtime',
    'Apple service incidents',
    'Apple service notifications',
    'Apple service alerts',
    'Apple service performance',
    'Apple service status overview',
    'Apple status page',
    'Apple service status page',
    'Apple service status updates',
    'Apple service status information',
    'Apple service health',
    'Apple service incidents',
    'Apple service outages',
    'Apple service disruptions',
    'Apple service problems',
    'Apple service issues',
    // Add more keywords as needed
];


export const metadata = {
    title: {
        template: '%s | Apple Status',
        default: 'Apple Status', // a default is required when creating a template
    },
    description: 'Check the status of Apple\'s services',
    appleWebApp: {
        title: 'Apple Status',
        statusBarStyle: 'black-translucent',
    },
    category: 'technology',
    themeColor: 'black',
    creator: 'Quacksire <sam@quacksire>',
    keywords: homepageKeywordsArray,
    other: {
        source: 'https://github.com/quacksire/applestat.us.git',
    },
    manifest: "https://applestat.us/manifest.json"
}

import {Providers} from '@/components/providers'
import Script from "next/script";
import {cn} from "@/lib/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={'dark'}>
      <body className={cn(inter.className, 'h-screen')}>
      <Providers>
      <NavigationBar/>
      <br />
      <div className="container mx-auto px-4 min-h-screen">
          {children}
      </div>
      <footer className="container mx-auto px-4 bottom-1">
        <div className="flex flex-col items-center justify-center py-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
                applestat.us is not affiliated with Apple Inc.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Made with ❤️ by <a href="https://quacksire.dev">Quacksire</a>
            </p>
        </div>
        </footer>
      </Providers>
      </body>

      <Script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "f5fcd52de909456882ad9e4d61e645dd"}' />

      </html>
  )
}
