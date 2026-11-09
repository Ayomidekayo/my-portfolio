import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion' // ← added
import { cn } from '@/lib/cn'

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")
    const formData = new FormData(event.target)

    formData.append("access_key", "2b21756b-b74b-4f46-9e7f-7c916d36313b")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      setResult(data.message)
    }
  }

  return (
    <motion.div
      id="contact"
     className={cn( "w-full px-[12%] py-10 scroll-mt-20", "bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]", "dark:bg-none" )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300">
        Connect with me
      </h4>

      <h2 className="text-center text-5xl font-Ovo text-gray-900 dark:text-white">
        Get in touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-400">
        I'd love to hear from you! If you have any questions, comments, or feedback,
        please use the form below.
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      >
        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="
              w-full p-3 rounded-md border
              bg-white dark:bg-gray-900
              border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-white
              placeholder-gray-400 dark:placeholder-gray-500
              focus:ring-2 focus:ring-black dark:focus:ring-white
              focus:border-black dark:focus:border-white
              outline-none transition
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="
              w-full p-3 rounded-md border
              bg-white dark:bg-gray-900
              border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-white
              placeholder-gray-400 dark:placeholder-gray-500
              focus:ring-2 focus:ring-black dark:focus:ring-white
              focus:border-black dark:focus:border-white
              outline-none transition
            "
          />
        </div>

        {/* Textarea */}
        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="
            w-full p-4 mb-6 rounded-md border
            bg-white dark:bg-gray-900
            border-gray-300 dark:border-gray-700
            text-gray-900 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-500
            focus:ring-2 focus:ring-black dark:focus:ring-white
            focus:border-black dark:focus:border-white
            outline-none transition
          "
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="
            py-3 px-8 mx-auto flex items-center justify-center gap-2
            bg-black text-white
            dark:bg-white dark:text-black
            rounded-full
            hover:opacity-90 transition duration-300
            shadow-md
          "
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="Arrow icon"
            width={16}
            height={16}
            className="w-4 h-4 invert dark:invert-0"
          />
        </button>

        {/* Status */}
        <p className="text-center text-sm mt-4 text-gray-500 dark:text-gray-400">
          {result}
        </p>
      </form>
    </motion.div>
  )
}

export default Contact
