'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function UnserGeschichte() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-hand text-2xl text-blue-900 font-bold cursor-pointer hover:text-blue-700"
              >
                P & M
              </motion.div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <Link href="/">
                <button className="text-blue-900 hover:text-blue-700 transition-colors duration-300 font-display text-lg font-bold">
                  Start
                </button>
              </Link>
              <Link href="/#countdown">
                <button className="text-blue-900 hover:text-blue-700 transition-colors duration-300 font-display text-lg font-bold">
                  Countdown
                </button>
              </Link>
              <Link href="/#details">
                <button className="text-blue-900 hover:text-blue-700 transition-colors duration-300 font-display text-lg font-bold">
                  Details
                </button>
              </Link>
              <Link href="/#gallery">
                <button className="text-blue-900 hover:text-blue-700 transition-colors duration-300 font-display text-lg font-bold">
                  Galerie
                </button>
              </Link>
              <button className="text-blue-900 font-display text-lg font-bold">
                Unsere Geschichte
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-hand text-5xl md:text-6xl text-blue-900 mb-4">
              Unsere Story
            </h1>
            <p className="text-gray-600 text-lg font-display max-w-2xl mx-auto">
                
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-4xl mx-auto text-gray-700"
          >
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h2 className="font-hand text-3xl text-blue-900 mb-4">
                Wie alles begann
              </h2>
              <p className="text-gray-700 mb-4">
                Hier kommt eure Geschichte hin. Erzählt uns, wie ihr euch kennengelernt habt, 
                was euch verbindet und wie die Liebe euer Leben verändert hat.
              </p>
              <p className="text-gray-700">
                Diese Seite kann mit persönlichen Erinnerungen, Fotos und Meilensteinen eurer 
                gemeinsamen Reise gefüllt werden.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 italic text-lg">
                "Schreiben Sie Ihre Geschichte - eine Geschichte of Liebe, Lachen und Abenteuer"
              </p>
            </div>
          </motion.div>

          {/* Back Button */}
          <div className="text-center mt-16 pb-8">
            <Link href="/">
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-display font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                Zurück zur Startseite
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
