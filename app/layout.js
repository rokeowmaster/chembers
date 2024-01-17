import { Inter } from 'next/font/google'
import './globals.css'
import {Nav, Footer} from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chembers Interior Design',
  description: 'An Interior Design Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav />
      <main className="">{children}</main>
      <Footer />
      </body>
    </html>
  )
}
