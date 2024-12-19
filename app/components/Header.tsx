'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaHome, 
  FaBook, 
  FaInfoCircle, 
  FaEnvelope, 
  FaBars, 
  FaTimes 
} from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'الرئيسية', icon: FaHome },
    { href: '/courses', label: 'الدورات', icon: FaBook },
    { href: '/about', label: 'من نحن', icon: FaInfoCircle },
    { href: '/contact', label: 'اتصل بنا', icon: FaEnvelope }
  ]

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with Modern Typography */}
        <Link 
          href="/" 
          className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 tracking-tight"
        >
          Syrian Modern School
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-blue-500 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </motion.button>
        </div>

        {/* Navigation */}
        <nav className={`
          fixed top-0 right-0 w-64 h-full bg-white 
          transform transition-transform duration-300 ease-in-out
          md:static md:w-auto md:h-auto md:bg-transparent md:translate-x-0
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:flex md:items-center md:space-x-6 rtl:md:space-x-reverse
          z-50 shadow-lg md:shadow-none
        `}>
          <div className="md:hidden flex justify-between items-center p-4 border-b">
            <span className="text-lg font-semibold text-blue-600">القائمة</span>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-blue-500 focus:outline-none"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>

          <ul className="flex flex-col items-center space-y-4 px-4 pt-6">
            {navItems.map((item) => (
              <motion.li 
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Link 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 rtl:space-x-reverse 
                    text-blue-500 hover:text-blue-700 
                    bg-blue-50 px-4 py-3 rounded-lg w-full
                    transition-all duration-300 ease-in-out"
                >
                  <item.icon className="text-lg" />
                  <span className="text-base font-medium">{item.label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
          />
        )}
      </div>
    </motion.header>
  )
}
