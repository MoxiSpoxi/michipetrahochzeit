'use client'

import { motion } from 'framer-motion'

export default function Details() {
  const details = [
    {
      icon: "📍",
      title: "ES GEHT LOS!",
      time: "14:00 Uhr",
      location: "Pfarrkirche Mariä Himmelfahrt Terlan",
      description: "Liebe Gäste, bitte findet euch um 10:30 Uhr beim Dorfplatz vor der Pfarrkirche Mariä Himmelfahrt in Terlan ein. Ankunft der Braut geplant für...ja, wenn P<etra dann halt soweit ist. 😉 Oje, ihr Weg führt direkt am Wieterer vorbei, d.h. es kann - sagen wir mal - sich etwas verzögern..., aber für einen letzten Monte al volo als unverheiratete Frau muss auf jeden Fall Zeit sein ;) ",
    },
    {
      icon: "🍽️",
      title: "Essen & Trinken",
      time: "ab 18:00 Uhr",
      location: "Schloss Rosenblüte",
      address: "Schlossweg 45, 12345 Musterstadt",
      description: "Es wird ein köstliches Buffet geben, das keine Wünsche offen lässt."
    },
    {
      icon: "🎵",
      title: "Musik & Tanz",
      time: "ab 20:00 Uhr",
      location: "Schloss Rosenblüte",
      address: "Schlossweg 45, 12345 Musterstadt",
      description: "Für gute Musik und Stimmung ist gesorgt - wir tanzen bis in die Nacht!"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
     
          <p className="font-display text-lg text-blue-700">
            Wir trauen uns - jetzt passiert's,<br />
            am 22. August 2026 eskaliert's (sowieso)<br />
            Wir laden euch ganz herzlich ein,<br />
            Vollgas dabei zu sein! 🎉🥳🥂<br />
            Wir können es kaum erwarten, diesen besonderen Tag mit euch zu verbringen! 🥳<br />
            Hier bekommt ihr schon mal einen kleinen Vorgeschmack darauf, wie wir uns das große Spektakel vorstellen – Spoiler: Es wird wunderbar, vielleicht ein bisschen verrückt und auf jeden Fall unvergesslich!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-300 hover:border-blue-900 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="font-display text-2xl text-wine mb-2">
                {detail.title}
              </h3>
              <p className="font-display text-lg text-gold mb-3">
                {detail.time}
              </p>
              <p className="font-sans text-gray-600 font-medium mb-2">
                {detail.location}
              </p>
              <p className="font-sans text-sm text-gray-500 mb-4">
                {detail.address}
              </p>
              <p className="font-display text-gray-600 italic">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-rose/30 rounded-full px-8 py-4">
            <p className="font-display text-lg text-wine">
              💍 Wir freuen uns auf euch! 💍
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
