import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ScrollProgressBar from '@/components/common/ScrollProgressBar'

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export const metadata: Metadata = {
  title: 'DEV-MS',
  description: '프론트엔득 개발자 김민성의 개인 플랫폼입니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' className='scroll-smooth'>
      <body className={pretendard.className}>
        <div className='min-h-screen'>
          <Header />
          <ScrollProgressBar />
          <main className='justify-center flex flex-1'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
