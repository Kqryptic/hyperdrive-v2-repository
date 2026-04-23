import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hyperdrive | Quantum Intelligence',
  description: 'Quantum-resistant intelligence layer for the machine economy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  )
}
