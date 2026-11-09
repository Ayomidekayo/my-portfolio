'use client'

import React, { useRef, useState, useEffect } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const sideMenuRef = useRef(null)
  
  // Track when the component has mounted
  const [mounted, setMounted] = useState(false)

  // State for scroll, but only after mount
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    // don’t render any dynamic UI until after hydration
    return null
  }

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  }

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 px-5 lg:px-8 xl:px-[8%] py-4
          flex items-center justify-between transition-all duration-500 ease-in-out
          backdrop-blur-xl
          ${isScroll
            ? 'bg-white/70 dark:bg-gray-900/70 shadow-lg'
            : 'bg-white/40 dark:bg-gray-900/40'}
        `}
      >
        <a
          href="#top"
          className="
            font-Ovo text-2xl font-semibold tracking-wide
            text-gray-900 dark:text-white hover:scale-105 transition-all duration-300
          "
        >
          Ayomide
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Services', 'work', 'Contact'].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="
                  font-Ovo relative text-gray-800 dark:text-gray-200
                  after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px] after:bg-current
                  hover:after:w-full after:transition-all after:duration-300
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="
              w-10 h-10 rounded-full flex items-center justify-center
              border border-white/30 dark:border-white/10
              backdrop-blur-md bg-white/50 dark:bg-black/40
              text-gray-900 dark:text-white hover:scale-110 transition-all duration-300
            "
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>

          <button className="block md:hidden" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              width={24}
              height={24}
              className="w-6"
            />
          </button>
        </div>
      </nav>

      <ul
        ref={sideMenuRef}
        className="
          fixed top-0 right-[-16rem] z-[200] w-64 h-screen
          px-10 py-20 flex flex-col gap-6
          transition-transform duration-500 ease-in-out backdrop-blur-2xl
          bg-white/80 dark:bg-gray-900/80 shadow-2xl
        "
      >
        <button onClick={closeMenu} className="absolute top-6 right-6">
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="Close"
            width={20}
            height={20}
          />
        </button>

        {['Home', 'About me', 'Services', 'My work', 'Contact me'].map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.toLowerCase().replace(' ', '')}`}
              onClick={closeMenu}
              className="font-Ovo text-lg text-gray-800 dark:text-gray-200 hover:translate-x-2 transition-transform duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
