'use client'

import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'العنوان',
      description: 'سوريا، دمشق، شارع الحمرا',
      color: 'bg-blue-500'
    },
    {
      icon: FaPhone,
      title: 'الهاتف',
      description: '+963 11 123 4567',
      color: 'bg-green-500'
    },
    {
      icon: FaEnvelope,
      title: 'البريد الإلكتروني',
      description: 'info@syrianmodernschool.edu.sy',
      color: 'bg-purple-500'
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to a backend service
  }

  return (
    <div className="min-h-screen gradient-bg py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 text-white">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">اتصل بنا</h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة على أسئلتك وتلبية احتياجاتك. لا تتردد في التواصل معنا
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl text-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">الاسم</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full bg-white/10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full bg-white/10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">الرسالة</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full bg-white/10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white/20 backdrop-blur-md p-6 rounded-2xl flex items-center hover-lift"
              >
                <div className={`${info.color} p-4 rounded-full ml-4 text-white`}>
                  <info.icon className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{info.title}</h3>
                  <p className="text-white/80">{info.description}</p>
                </div>
              </div>
            ))}

            {/* Embedded Map (Placeholder) */}
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-white">موقعنا</h3>
              <div className="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center text-white/50">
                خريطة تفاعلية (قريباً)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
