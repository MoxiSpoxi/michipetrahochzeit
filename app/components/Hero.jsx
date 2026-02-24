'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Blasses Hintergrundbild */}
      <img 
        src="/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.39.jpeg"
        alt="Petra und Michi Header"
        className="absolute inset-0 w-full h-full object-cover object-left opacity-50 z-0 pointer-events-none select-none"
        style={{ filter: 'blur(1px)' }}
      />
      {/* Background Pattern (jetzt in Blautönen) */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-10 left-10 text-blue-300 text-6xl">♥</div>
        <div className="absolute top-40 right-20 text-blue-900 text-4xl">✦</div>
        <div className="absolute bottom-40 left-20 text-blue-700 text-5xl">♥</div>
        <div className="absolute bottom-20 right-10 text-blue-900 text-3xl">✦</div>
        <div className="absolute top-1/4 left-1/3 text-blue-300 text-3xl">♥</div>
        <div className="absolute top-1/3 right-1/4 text-blue-300 text-4xl">✦</div>
      </div>

      <div className="text-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-lg md:text-xl text-blue-900 tracking-widest uppercase mb-4">
            Wir heiraten!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="font-hand text-6xl md:text-8xl lg:text-9xl text-blue-900 leading-none font-bold">
            Petra
          </h1>
          <div className="flex items-center justify-center gap-4 my-2">
            <div className="h-px w-16 md:w-24 bg-blue-900"></div>
            <span className="text-blue-900 text-3xl">♥</span>
            <div className="h-px w-16 md:w-24 bg-blue-900"></div>
          </div>
          <h1 className="font-hand text-6xl md:text-8xl lg:text-9xl text-blue-900 leading-none font-bold">
            Michi
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-display text-2xl md:text-3xl text-blue-900 italic mb-2 font-bold">
            22. August 2026
          </p>
         
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center"
        >
          <div className="animate-bounce">
            <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Decorative Border (optional: blau) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>
    </div>
  )
}
