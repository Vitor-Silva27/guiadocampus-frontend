import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';

const poppins = Poppins({ subsets: ['devanagari', 'latin'], weight: ['400', '700', '500'] })

export const metadata: Metadata = {
  title: 'Guia do campus',
  description: 'uma aplicação para prover dados do IFPI - campus Pedro II',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <div className='app-container'>
          {children}
        </div>
      </body>
    </html>
  )
}
