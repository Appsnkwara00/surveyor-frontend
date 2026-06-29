import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'APPSN Kwara – Find Registered Surveyors',
  description: 'Association of Private Practising Surveyors of Nigeria, Kwara State Branch. Find licensed and experienced surveyors for land surveys, property documentation, GIS mapping, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
