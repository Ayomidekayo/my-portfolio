'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingWhatsApp({
  darkMode = false,
  styles = {},
}) {
  const phoneNumber = '2349066406618' // Replace with your phone number
  const message = 'Hello, I would like to make an enquiry.'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      style={styles}
      className={`
        flex h-14 w-14 items-center justify-center
        rounded-full shadow-lg
        transition-all duration-300
        hover:scale-110 hover:shadow-xl
        ${
          darkMode
            ? 'bg-green-500 text-white'
            : 'bg-green-500 text-white'
        }
      `}
    >
      <FaWhatsapp size={30} />
    </a>
  )
}