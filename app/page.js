'use client'

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Service from './components/Service'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [showDown, setShowDown] = useState(true)
  const [hideFloating, setHideFloating] = useState(false)

  /* =======================
     THEME HANDLING
  ======================= */
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (
      stored === 'dark' ||
      (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  /* =======================
     FOOTER VISIBILITY
  ======================= */
  useEffect(() => {
    const footer = document.getElementById('footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideFloating(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  /* =======================
     SCROLL HANDLING
  ======================= */
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300)
      setShowDown(window.scrollY < 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-theme text-theme transition-colors">
      <Navbar isDarkMode={isDark} setIsDarkMode={setIsDark} />

      {/* PAGE SECTIONS */}
      <Header />
      <About />
      <Service />
      <Work />
      <Contact />
      <Footer />

      {/* SCROLL DOWN (HERO ONLY) */}
      {showDown && !hideFloating && (
        <button
          onClick={() =>
            document
              .getElementById('about')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="
            fixed top-[85vh] left-1/2 -translate-x-1/2 z-40
            w-10 h-10 rounded-full
            bg-white/70 dark:bg-black/60
            text-gray-900 dark:text-white
            backdrop-blur-md
            flex items-center justify-center
            shadow-md
            animate-bounce
            hover:scale-110 transition
          "
          aria-label="Scroll down"
        >
          <FiArrowDown />
        </button>
      )}

      {/* BACK TO TOP */}
      {showTop && !hideFloating && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="
            fixed bottom-24 right-6 z-40
            w-12 h-12 rounded-full
            bg-black/80 dark:bg-white/80
            text-white dark:text-black
            backdrop-blur-md
            flex items-center justify-center
            shadow-lg
            hover:scale-110 transition-all
          "
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>
      )}

      {/* WHATSAPP (BOTTOM LEFT) */}
      {!hideFloating && (
        <FloatingWhatsApp
          phoneNumber="2349066406618"
          accountName="Kdam Tech"
          initialMessageByClient="Hi! I found your portfolio and would like to connect."
          darkMode={isDark}
          styles={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '1.5rem',
            zIndex: 40,
          }}
        />
      )}
    </div>
  )
}
