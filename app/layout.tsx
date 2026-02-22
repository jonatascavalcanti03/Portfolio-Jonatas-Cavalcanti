import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Jonatas Cavalcanti | Desenvolvedor Front-End',
  description: 'Portfolio de Jonatas Cavalcanti - Desenvolvedor Front-End Junior. HTML, CSS, JavaScript, React.js. Criando interfaces acessiveis, responsivas e com foco na experiencia do usuario.',
  keywords: ['desenvolvedor front-end', 'Jonatas Cavalcanti', 'portfolio', 'HTML', 'CSS', 'JavaScript', 'React'],
  authors: [{ name: 'Jonatas Cavalcanti' }],
}

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
