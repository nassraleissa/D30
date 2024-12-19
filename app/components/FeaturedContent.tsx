'use client'

import Image from 'next/image'

export default function FeaturedContent() {
  const courses = [
    { 
      title: 'دورة اللغة العربية', 
      image: "/images/school/arabic-featured.jpg", 
      description: 'تعلم أساسيات اللغة العربية وقواعدها' 
    },
    { 
      title: 'الرياضيات المتقدمة', 
      image: "/images/school/math-featured.jpg", 
      description: 'استكشف مفاهيم الرياضيات المتقدمة' 
    },
    { 
      title: 'العلوم الطبيعية', 
      image: "/images/school/science-featured.jpg", 
      description: 'اكتشف عجائب العالم الطبيعي من حولنا' 
    },
  ]

  return (
    <section className="bg-white shadow-lg rounded-lg overflow-hidden my-8">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">المحتوى المميز</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <Image 
                src={course.image} 
                alt={course.title} 
                width={400} 
                height={250} 
                priority
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
