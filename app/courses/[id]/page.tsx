'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaBook, 
  FaClock, 
  FaChalkboardTeacher, 
  FaCertificate, 
  FaCalendarAlt 
} from 'react-icons/fa'

const courseDetails = {
  1: {
    id: 1,
    name: 'اللغة العربية',
    level: 'مبتدئ - متقدم',
    description: 'دورة شاملة لتعلم اللغة العربية من الألف إلى الياء، تركز على القراءة والكتابة والمحادثة',
    image: '/images/school/arabic-course.jpg',
    duration: '3 أشهر',
    schedule: 'السبت والأربعاء، 4-6 مساءً',
    instructor: 'د. محمد العربي',
    highlights: [
      'تعلم القواعد الأساسية',
      'تطوير مهارات المحادثة',
      'التركيز على النحو والإملاء',
      'ورش عمل تفاعلية'
    ]
  },
  2: {
    id: 2,
    name: 'الرياضيات',
    level: 'متوسط - متقدم',
    description: 'برنامج متكامل لتعليم الرياضيات يغطي المفاهيم الأساسية والمتقدمة',
    image: '/images/school/math-course.jpg',
    duration: '4 أشهر',
    schedule: 'الأحد والخميس، 5-7 مساءً',
    instructor: 'أ. سارة الحسيني',
    highlights: [
      'حل المسائل المعقدة',
      'التفكير المنطقي',
      'تطبيقات عملية',
      'إعداد للامتحانات المعيارية'
    ]
  },
  3: {
    id: 3,
    name: 'العلوم الطبيعية',
    level: 'مبتدئ - متوسط',
    description: 'رحلة استكشافية في عالم العلوم الطبيعية مع التركيز على الفهم العميق والتجارب العملية',
    image: '/images/school/science-course.jpg',
    duration: '3 أشهر',
    schedule: 'الثلاثاء والجمعة، 4-6 مساءً',
    instructor: 'د. أحمد العلمي',
    highlights: [
      'التجارب المعملية',
      'فهم القوانين الطبيعية',
      'التفكير العلمي',
      'مشاريع علمية إبداعية'
    ]
  },
  4: {
    id: 4,
    name: 'التاريخ',
    level: 'مبتدئ',
    description: 'دورة متخصصة لفهم التاريخ السوري والعالمي، مع التركيز على التحليل والفهم العميق',
    image: '/images/school/history-course.jpg',
    duration: '2 أشهر',
    schedule: 'الاثنين والخميس، 5-7 مساءً',
    instructor: 'أ. ليلى التاريخية',
    highlights: [
      'دراسة الحقب التاريخية',
      'تحليل الأحداث التاريخية',
      'فهم السياق التاريخي',
      'مناقشات تفاعلية'
    ]
  }
}

export default async function CourseDetail({ params }) {
  const courseId = parseInt(params.id)
  const course = courseDetails[courseId]

  if (!course) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/20 backdrop-blur-md p-8 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">الدورة غير موجودة</h2>
          <Link 
            href="/courses" 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50"
          >
            العودة للدورات
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen gradient-bg py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Course Image */}
          <div className="relative">
            <Image 
              src={course.image} 
              alt={course.name} 
              width={600} 
              height={400} 
              className="rounded-2xl shadow-2xl hover-lift object-cover"
            />
          </div>

          {/* Course Details */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">{course.name}</h1>
            <p className="text-xl leading-relaxed mb-6">{course.description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                  <FaClock className="text-xl text-blue-300" />
                  <span className="font-semibold">المدة</span>
                </div>
                <p>{course.duration}</p>
              </div>

              <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                  <FaCalendarAlt className="text-xl text-green-300" />
                  <span className="font-semibold">الجدول</span>
                </div>
                <p>{course.schedule}</p>
              </div>

              <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                  <FaChalkboardTeacher className="text-xl text-purple-300" />
                  <span className="font-semibold">المدرس</span>
                </div>
                <p>{course.instructor}</p>
              </div>

              <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                  <FaCertificate className="text-xl text-red-300" />
                  <span className="font-semibold">المستوى</span>
                </div>
                <p>{course.level}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaBook className="ml-2 text-yellow-300" />
                أهم مميزات الدورة
              </h3>
              <ul className="space-y-2">
                {course.highlights.map((highlight, index) => (
                  <li 
                    key={index} 
                    className="flex items-center space-x-2 rtl:space-x-reverse"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex space-x-4 rtl:space-x-reverse">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center 
                  overflow-hidden rounded-full px-6 py-3 
                  text-base font-medium text-white 
                  bg-gradient-to-r from-green-500 to-blue-600 
                  transition-all duration-300 
                  hover:from-green-600 hover:to-blue-700 
                  hover:scale-105 active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-10 transition-opacity"></span>
                سجل الآن
              </Link>
              <Link 
                href="/courses" 
                className="group relative inline-flex items-center justify-center 
                  overflow-hidden rounded-full px-6 py-3 
                  text-base font-medium text-white 
                  bg-white/20 backdrop-blur-md
                  transition-all duration-300 
                  hover:bg-white/30 
                  hover:scale-105 active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-10 transition-opacity"></span>
                العودة للدورات
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
