'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-hand text-4xl md:text-5xl text-blue-900 font-bold mb-6">
            Petra & Michi
          </h3>
        
          <div className="flex justify-center gap-2 mb-6">
            <span className="text-blue-300 text-2xl">♥</span>
            <span className="text-blue-300 text-2xl">♥</span>
            <span className="text-blue-300 text-2xl">♥</span>
          </div>
        
          <p className="font-display text-lg text-blue-900 mb-4 font-bold">
            Wir freuen uns auf diesen besonderen Tag mit euch!
          </p>
        
          <p className="font-display text-sm text-blue-700 mb-8">
            ...und auf's Feiern
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-blue-300 pt-8"
        >
          <p className="font-sans text-xs text-blue-300">
            © 2026 Petra & Michi. Alle Rechte vorbehalten.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
