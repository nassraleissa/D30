import { Metadata } from 'next'

const courseDetails = {
  1: {
    id: 1,
    name: 'اللغة العربية',
    description: 'دورة شاملة لتعلم اللغة العربية من الألف إلى الياء، تركز على القراءة والكتابة والمحادثة',
  },
  2: {
    id: 2,
    name: 'الرياضيات',
    description: 'برنامج متكامل لتعليم الرياضيات يغطي المفاهيم الأساسية والمتقدمة',
  },
  3: {
    id: 3,
    name: 'العلوم الطبيعية',
    description: 'رحلة استكشافية في عالم العلوم الطبيعية مع التركيز على الفهم العميق والتجارب العملية',
  },
  4: {
    id: 4,
    name: 'التاريخ',
    description: 'دورة متخصصة لفهم التاريخ السوري والعالمي، مع التركيز على التحليل والفهم العميق',
  }
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const courseId = parseInt(params.id)
  const course = courseDetails[courseId]

  return {
    title: course ? `دورة ${course.name} | المدرسة السورية الحديثة` : 'دورة غير موجودة',
    description: course ? course.description : 'الدورة التي تبحث عنها غير متوفرة'
  }
}
