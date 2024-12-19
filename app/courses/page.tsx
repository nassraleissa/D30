'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaBookOpen, FaChalkboardTeacher, FaCertificate, FaSearch } from 'react-icons/fa'
import Link from 'next/link'

export default function Courses() {
  const courseCategories = [
    {
      id: 1,
      name: 'اللغة العربية',
      level: 'مبتدئ - متقدم',
      description: 'تعلم اللغة العربية من الألف إلى الياء',
      icon: FaBookOpen,
      imageUrl: "/images/school/arabic-course.jpg",
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'الرياضيات',
      level: 'متوسط - متقدم',
      description: 'استكشف عالم الأرقام والمنطق',
      icon: FaCertificate,
      imageUrl: "/images/school/math-course.jpg",
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'العلوم الطبيعية',
      level: 'مبتدئ - متوسط',
      description: 'اكتشف أسرار الطبيعة والكون',
      icon: FaChalkboardTeacher,
      imageUrl: "/images/school/science-course.jpg",
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'التاريخ',
      level: 'مبتدئ',
      description: 'تعرف على تاريخ سوريا والعالم',
      icon: FaSearch,
      imageUrl: "/images/school/history-course.jpg",
      color: 'bg-red-500'
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen gradient-bg py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12 text-white"
        >
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">دوراتنا التعليمية</h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            نقدم مجموعة متنوعة من الدورات التعليمية التي تلبي احتياجات جميع الطلاب
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseCategories.map((course, index) => (
            <motion.div 
              key={course.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              className="bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover-lift transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={course.imageUrl} 
                  alt={course.name} 
                  fill
                  priority
                  className="object-cover"
                />
                <div className={`absolute top-4 right-4 ${course.color} p-3 rounded-full text-white`}>
                  <course.icon className="text-2xl" />
                </div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                <p className="text-white/80 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </span>
                  <Link 
                    href={`/courses/${course.id}`} 
                    className="group relative inline-flex items-center justify-center 
                      overflow-hidden rounded-full px-4 py-2 
                      text-sm font-medium text-white 
                      bg-gradient-to-r from-blue-500 to-purple-600 
                      transition-all duration-300 
                      hover:from-blue-600 hover:to-purple-700 
                      hover:scale-105 active:scale-95
                      focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-10 transition-opacity"></span>
                    تفاصيل الدورة
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/20 backdrop-blur-md inline-block px-8 py-6 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-4">هل تبحث عن دورة محددة؟</h2>
            <p className="mb-6 text-white/80">يمكنك التواصل معنا للاستفسار عن دورات مخصصة</p>
            <button className="btn-secondary">
              تواصل معنا
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
