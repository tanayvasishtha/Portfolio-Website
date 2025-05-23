import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tanay Vasishtha | Portfolio',
  description:
    'Computer Science Engineering student and aspiring software developer, focused on creating innovative solutions and making a positive impact through technology.',
  keywords: [
    'Tanay Vasishtha',
    'Portfolio',
    'Software Developer',
    'Computer Science',
    'Web Development',
    'AI/ML',
    'Blockchain',
    'Cloud Computing',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 