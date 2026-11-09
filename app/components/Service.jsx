import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

/* Animation variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Service = () => {
  return (
    <motion.section
      id="services"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} className={cn("w-full px-[12%] py-10 scroll-mt-20")}>
      <h4 className="text-center mb-2 text-lg font-Ovo">
        What I Offer
      </h4>

      <h2 className="text-center text-5xl font-Ovo">
        My Services
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo">
        I am a full-stack software engineer with years of experience building
        reliable, scalable, and high-quality digital products.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceData.map(({ icon, title, description, link }, index) => (
         <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -6 }}
            className="
              group relative rounded-2xl p-8
              border border-gray-300
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            {/* Icon */}
            {icon && (
              <div
                className="
                  w-14 h-14 mb-6 flex items-center justify-center
                  rounded-xl
                  bg-gray-100
                  group-hover:scale-110
                  transition-transform duration-300
                "
              >
                <Image src={icon} alt={title} className="w-7 h-7" />
              </div>
            )}

            {/* Title */}
            <h3 className="text-lg font-semibold mb-3">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-6 opacity-80">
              {description}
            </p>

            {/* Link */}
            {link && (
              <a
                href={link}
                className="
                  inline-flex items-center gap-2
                  text-sm font-medium mt-6
                  opacity-80
                  group-hover:opacity-100
                  transition
                "
              >
                Learn more →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Service
