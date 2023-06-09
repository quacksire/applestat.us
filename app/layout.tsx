import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Separator } from '@/components/ui/separator'
import {NavigationBar} from "@/components/navbar";

export const metadata = {
    title: 'Apple Status',
    description: 'Check the status of Apple\'s services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={'dark'}>
      <body className={inter.className}>
      <NavigationBar/>
      <br />
      <div className="container mx-auto px-4">{children}</div>
      <footer className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
                applestat.us is not affiliated with Apple Inc.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Made with ❤️ by <a href="https://quacksire.dev">Quacksire</a>
            </p>
        </div>
        </footer>
      </body>
      </html>
  )
}
