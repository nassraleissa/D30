import './globals.css'
import { Noto_Naskh_Arabic } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const notoNaskhArabic = Noto_Naskh_Arabic({ 
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-noto-naskh-arabic',
})

export const metadata = {
  title: 'المدرسة السورية الحديثة',
  description: 'موقع تعليمي حديث للمدارس السورية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoNaskhArabic.variable} font-sans bg-gray-50 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
