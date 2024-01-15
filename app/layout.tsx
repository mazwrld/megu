import Navbar from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Megu - Free Unlimited File Converter',
  description:
    'Convert your files for free, no limits, no registration required.',
  creator: 'Maz',
  keywords:
    'image converter, image compressor, image resizer, image cropper, image editor, image optimizer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
          {children}
        </div>
      </body>
    </html>
  )
}
