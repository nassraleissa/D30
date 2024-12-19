'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaGraduationCap, FaBook, FaChalkboardTeacher } from 'react-icons/fa'

export default function Home() {
  const features = [
    {
      icon: FaGraduationCap,
      title: 'تعليم متميز',
      description: 'نقدم تعليماً عالي الجودة يركز على تنمية مهارات الطلاب',
    },
    {
      icon: FaBook,
      title: 'مناهج متطورة',
      description: 'مناهج دراسية حديثة ومتكاملة تواكب متطلبات العصر',
    },
    {
      icon: FaChalkboardTeacher,
      title: 'هيئة تدريسية متخصصة',
      description: 'نخبة من المعلمين والأساتذة ذوي الخبرة العالية',
    }
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-16 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Text Section */}
          <div className="animate-fade-in space-y-6">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
              المدرسة السورية الحديثة
            </h1>
            <p className="text-xl mb-6 leading-relaxed">
              نحن نؤمن بأن التعليم هو مفتاح المستقبل. نسعى لتمكين أبنائنا وبناتنا من خلال تعليم متميز وشامل.
            </p>
            
            <div className="flex space-x-4">
              <Link 
                href="/courses" 
                className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors flex items-center space-x-2"
              >
                <FaBook />
                <span>استكشف دوراتنا</span>
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors flex items-center space-x-2"
              >
                <FaChalkboardTeacher />
                <span>تواصل معنا</span>
              </Link>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative">
            <Image 
              src="/images/school/main-hero.jpg" 
              alt="مدرسة حديثة" 
              width={600} 
              height={400} 
              className="rounded-2xl shadow-2xl hover-lift"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/20 backdrop-blur-md p-6 rounded-2xl text-center hover-lift"
            >
              <feature.icon className="text-5xl mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
