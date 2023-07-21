import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'



export const metadata: Metadata = {
  title: 'Bike store',
  description: 'For ciclyst by ciclyst',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
