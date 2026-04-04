'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { useConfig } from "../context/WeddingConfigContext"
import Link from "next/link"

export default function RsvpPage() {
  const config = useConfig()
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Vielen Dank! Eure Zusage wurde gesendet. 💕')
    e.target.reset()
    setTimeout(() => setStatus(''), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 text-blue-900 font-bold font-hand text-xl hover:text-blue-700 transition-colors">
            ← Zurück
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-4">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className={`${config.hero?.fontSize?.title || "text-5xl md:text-6xl"} font-hand font-bold text-blue-900 mb-6`}>
              Eure Zusage
            </h1>
            <p className={`${config.hero?.fontSize?.date || "text-xl"} text-blue-700 max-w-xl mx-auto leading-relaxed mb-12`}>
              Vielen Dank, dass ihr dabei seid! Teilt uns mit ob und mit wie vielen Gästen ihr kommt.
            </p>
          </motion.section>



          <motion.form 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-12 border-4 border-blue-100 space-y-6"
            action="https://formspree.io/f/mdapwrzg"
            method="POST"
          >
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Ihr Name(n)*</label>
              <input type="text" name="name" required className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-lg" placeholder="Max Mustermann + Familie" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Kommt ihr?*</label>
              <select name="attending" required className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-lg">
                <option value="">Auswählen</option>
                <option value="ja">Ja, wir kommen! 🎉</option>
                <option value="nein">Leider nein 😔</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Anzahl Gäste*</label>
                <input type="number" name="guests" min="1" max="10" required className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-lg" placeholder="2" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email (optional)</label>
                <input type="email" name="_replyto" className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-lg" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nachricht (optional)</label>
              <textarea name="message" rows="4" className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-lg" placeholder="Etwas Persönliches oder Anmerkungen (z.B. Allergien)..."></textarea>
            </div>

            <input type="hidden" name="_subject" value="Neue RSVP Zusage!" />
            <input type="hidden" name="_next" value="https://your-site.com/rsvp?success" />

            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white font-display font-bold py-6 px-8 rounded-2xl text-xl shadow-2xl hover:from-blue-800 hover:to-blue-700 transition-all duration-300"
            >
              Zusage senden 💌
            </motion.button>

            {status && (
              <motion.p 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center text-green-600 font-bold text-xl py-4 bg-green-50 rounded-xl border-2 border-green-200"
              >
                {status}
              </motion.p>
            )}
          </motion.form>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 text-blue-600 text-lg"
          >
            Danke für eure Zusage! Das macht uns unendlich glücklich. 💕
          </motion.p>
        </div>
      </main>
    </div>
  )
}
