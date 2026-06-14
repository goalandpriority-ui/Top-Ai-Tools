import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TopAITools.com — Find the Best AI Tools in 2026',
  description: 'Comprehensive directory of 100+ AI tools with honest reviews, comparisons, and guides. Find the best AI for writing, image generation, video, coding, and more.',
  keywords: 'AI tools, AI chatbots, best AI 2026, ChatGPT, Claude, Gemini, AI directory',
  openGraph: {
    title: 'TopAITools.com — Find the Best AI Tools in 2026',
    description: 'Comprehensive directory of 100+ AI tools with honest reviews and comparisons.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

