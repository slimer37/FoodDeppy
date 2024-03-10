import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import NavBar from './components/NavBar'
import { Footer } from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agriculture Visualizer',
  description: 'The supply chain visualizer for food products'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='font-inter'>
        <Providers>
          <header className='py-6'>
            <nav className='container flex items-center justify-between'>
              <NavBar />
            </nav>
          </header>
          <main>{children}</main>
          <footer className='container flex items-center justify-between bottom-0 mb-5'>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  )
}
