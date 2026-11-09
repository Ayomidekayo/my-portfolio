'use client'

import { assets } from '@/assets/assets'
import { cn } from '@/lib/cn'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer
      id="footer"
      
      className={cn( "mt-24 relative", "bg-theme/80 dark:bg-theme/80", "backdrop-blur-lg", "transition-colors duration-300" )} >
      {/* Top Section */}
      <div className="text-center px-6 pt-16 pb-12 space-y-4">
        {/* Brand */}
        <a
          href="#top"
          className="
            font-Ovo text-3xl font-bold tracking-wide
            text-theme
            transition-all duration-300
            hover:scale-105
          "
        >
          Ayomide
        </a>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 text-theme-muted text-sm">
          <Image
            src={assets.mail_icon}
            alt="Mail"
            className="w-5 h-5 dark:invert"
          />
          <span>kayodeayomide677@gmail.com</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-theme-muted/30" />

      {/* Bottom Section */}
      <div className="px-6 sm:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-theme-muted text-sm">
          © 2026 Kayode D. Ayomide. All rights reserved.
        </p>

        {/* Socials */}
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <li><a href="#" className="hover:text-blue-500 transition">GitHub</a></li>
          <li><a href="#" className="hover:text-pink-500 transition">Instagram</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Facebook</a></li>
          <li><a href="https://www.youtube.com/@AyomideKayode-f3p" target="_blank" className="hover:text-red-500 transition">YouTube</a></li>
          <li><a href="https://www.linkedin.com/in/ayomide-kayode-19478927a" target="_blank" className="hover:text-blue-400 transition">LinkedIn</a></li>
          <li><a href="https://www.x.com/Ayokay9668" target="_blank" className="hover:text-gray-400 transition">Twitter</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
