'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { assets } from '@/assets/assets'
import { cn } from '@/lib/cn'

// ✅ Dynamically load Typewriter (CLIENT ONLY)
const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
})

/* ===================== ANIMATIONS ===================== */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
}

/* ===================== COMPONENT ===================== */

const Header = () => {
  const [mounted, setMounted] = useState(false)

  // ✅ Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.section
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
      className={cn(
        'w-11/12 max-w-6xl mx-auto h-screen',
        'flex flex-col lg:flex-row items-center justify-between gap-12'
      )}
    >
      {/* ================= TEXT ================= */}
      <motion.div
        variants={fadeLeft}
        className="flex-1 text-center lg:text-left"
      >
        <h3 className="flex items-center justify-center lg:justify-start gap-2 text-xl md:text-2xl mb-3 font-Ovo">
          Hi! I&apos;m
          <span className="font-semibold ml-2">
            {mounted && (
              <Typewriter
                options={{
                  strings: ['Kayode Ayomide'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 60,
                }}
              />
            )}
          </span>
          <Image
            src={assets.hand_icon}
            alt="Hand wave"
            className="w-6 h-6"
          />
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-bold leading-tight">
          Fullstack Web Developer
        </h1>

        <p className="max-w-2xl mx-auto lg:mx-0 mt-4 font-Ovo text-gray-600">
          I am competent and experienced in both backend and frontend technologies,
          building scalable applications that run seamlessly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
          <a
            href="#contact"
            className="px-10 py-3 rounded-full bg-black text-white flex items-center gap-2 hover:opacity-90 transition"
          >
            Contact me
            <Image
              src={assets.right_arrow_white}
              alt=""
              className="w-4 h-4"
            />
          </a>

          <a
            href="/Kayode Ayomide Damilare Resume.pdf"
            download
            className="px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition"
          >
            My Resume
            <Image
              src={assets.download_icon}
              alt=""
              className="w-4 h-4"
            />
          </a>
        </div>
      </motion.div>

      {/* ================= IMAGE ================= */}
      <motion.div
        variants={fadeRight}
        className="flex-1 flex justify-center"
      >
        <motion.div
          className="relative w-56 h-56 sm:w-72 sm:h-72"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          }}
        >
          {/* Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-400" />

          {/* Avatar */}
          <div className="absolute inset-4 rounded-full overflow-hidden shadow-xl">
            <Image
              src={assets.ayomide_img}
              alt="Kayode Ayomide"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Header
