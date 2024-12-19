'use client'

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-md font-semibold transition-colors'
  const variantStyles = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
