'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaAward, FaGraduationCap, FaHistory } from 'react-icons/fa'
import { FaFlag } from 'react-icons/fa6'

export default function About() {
  const schoolValues = [
    {
      icon: FaFlag,
      title: 'رسالتنا',
      description: 'نسعى لتمكين الطلاب من تحقيق إمكاناتهم الكاملة من خلال تعليم متميز وشامل',
      color: 'bg-blue-500'
    },
    {
      icon: FaHistory,
      title: 'تاريخنا',
      description: 'تأسست المدرسة في عام 2010 وواصلت التطور والنمو على مدار السنوات الماضية',
      color: 'bg-green-500'
    },
    {
      icon: FaAward,
      title: 'إنجازاتنا',
      description: 'حصلنا على العديد من الجوائز والاعترافات في مجال التعليم',
      color: 'bg-purple-500'
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text Section */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white space-y-6"
          >
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              المدرسة السورية الحديثة
            </h1>
            <p className="text-xl leading-relaxed mb-6">
              نحن مؤسسة تعليمية رائدة نهدف إلى توفير تعليم عالي الجودة يمكّن الطلاب من تحقيق أحلامهم وطموحاتهم.
            </p>
            <p className="text-lg leading-relaxed">
              منذ تأسيسنا، التزمنا بتقديم بيئة تعليمية محفزة ومبتكرة تشجع على التفكير النقدي والإبداع.
            </p>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Image 
              src="/images/school/about-hero.jpg" 
              alt="مدرسة حديثة" 
              width={600} 
              height={400} 
              priority
              className="rounded-2xl shadow-2xl hover-lift object-cover"
            />
          </motion.div>
        </div>

        {/* School Values Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {schoolValues.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              className="bg-white/20 backdrop-blur-md p-6 rounded-2xl text-center hover-lift"
            >
              <div className={`${value.color} inline-block p-4 rounded-full mb-4 text-white`}>
                <value.icon className="text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{value.title}</h3>
              <p className="text-white/80">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/20 backdrop-blur-md inline-block px-8 py-6 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <FaGraduationCap className="ml-3" />
              انضم إلينا في رحلة التعلم
            </h2>
            <p className="mb-6 text-white/80">
              نحن نؤمن بأن كل طالب لديه إمكانات فريدة تنتظر الاكتشاف
            </p>
            <button className="btn-secondary">
              تقدم الآن
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
