
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'tMDB Movie App - Next.js',
  description: 'Get the latest movie information from The Movie Database (tMDB) API. Built with Next.js and Tailwind CSS. Made by @thisishuzaifa.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-4 sm:px-6 lg:px-8`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}

