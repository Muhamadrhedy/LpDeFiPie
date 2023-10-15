import './globals.css'
import type { Metadata } from 'next'
import Header from '../template/Header';
import Pipeline from '../template/Pipeline';
import Traditional from '@/template/Traditional';
import Vision from '@/template/Vision';
import Access from '@/template/Access';
import Brought from '../template/Brought';
import Partnership from '@/template/Partnership';
import Footer from '@/template/Footer';

export const metadata: Metadata = {
  title: 'Defipie Vision Capital',
  description: 'The right way to fund and incubate your Defi startup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-sans'>
        <Header />
        {children}
        <Pipeline/>
        <Traditional/>
        <Vision/>
        <Access/>
        <Brought/>
        <Partnership/>
        <Footer/>
        </body>
    </html>
  )
}
