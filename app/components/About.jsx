'use client'

import React, { useEffect, useState } from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

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

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Before hydration, render a simple static structure
  if (!mounted) {
    return (
      <section
        id="about"
        className="w-full px-[12%] py-16 scroll-mt-20"
      >
        <h4 className="text-center text-lg font-Ovo opacity-80">
          Introduction
        </h4>
        <h2 className="text-center text-5xl font-Ovo">
          About me
        </h2>
      </section>
    )
  }

  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className={cn(
    'w-full px-[12%] py-16 scroll-mt-20'
  )}
  
    >
      {/* Headings */}
      <motion.h4
        variants={fadeLeft}
        className="text-center mb-3 text-lg font-Ovo opacity-80"
      >
        Introduction
      </motion.h4>

      <motion.h2
        variants={fadeLeft}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <div className="flex w-full flex-col sm:flex-row items-center gap-20 my-20">
        {/* Image */}
        <motion.div
          variants={fadeLeft}
          className="w-64 sm:w-80 rounded-3xl overflow-hidden"
        >
          <Image
            src={assets.ayomide_full_img}
            alt="User"
            className="w-full rounded-3xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text + Lists */}
        <motion.div
          variants={fadeLeft}
          className="flex-1"
        >
          <p className="mb-12 max-w-2xl font-Ovo leading-7 opacity-80">
            I am an experienced Full-Stack Developer with two years of
            professional expertise in the field. I’ve worked with
            reputable organizations, contributing to scalable and
            impactful solutions.
          </p>

          {/* Info Cards */}
          <motion.ul
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl"
          >
            {infoList.map(({ icon, title, description }) => (
              <motion.li
                key={title}
                variants={fadeLeft}
                className="
                  group rounded-2xl p-6
                  border border-gray-300/60
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-8 mb-4 group-hover:scale-110 transition-transform"
                />

                <h3 className="mb-2 font-semibold text-gray-700">
                  {title}
                </h3>

                <p className="text-sm leading-6 opacity-80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            variants={fadeLeft}
            className="my-8 text-gray-700 font-Ovo"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            variants={container}
            className="flex flex-wrap items-center gap-4"
          >
            {toolsData.map((tool) => (
              <motion.li
                key={tool.src ?? tool.toString()}
                variants={fadeLeft}
                className="
                  flex items-center justify-center
                  w-12 sm:w-14 aspect-square
                  border border-gray-300/60
                  rounded-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <Image
                  src={tool}
                  alt="Tool"
                  className="w-5 sm:w-7"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  )
}
