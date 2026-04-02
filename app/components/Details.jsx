'use client'

import { motion } from 'framer-motion'

export default function Details() {
  const detailsData = {
    introTitle: "Wir trauen uns - jetzt passiert's,\nam 22. August 2026 eskaliert's (sowieso)\nWir laden euch ganz herzlich ein,\nVollgas dabei zu sein! 🎉🥳🥂",
    introText: "",
    events: [
      {
        icon: "📍",
        title: "ES GEHT LOS!",
        time: "11:00 Uhr",
        location: "Pfarrkirche Mariä Himmelfahrt Terlan",
        address: "",
        description: "Liebe Gäste, bitte findet euch um 10:30 Uhr beim Dorfplatz vor der Pfarrkirche Mariä Himmelfahrt in Terlan ein. Ankunft der Braut geplant für...ja, wenn Petra dann halt soweit ist. 😉 Oje, ihr Weg führt direkt am Wieterer vorbei, d.h. es kann - sagen wir mal - sich etwas verzögern..., aber für einen letzten Monte al volo als unverheiratete Frau muss auf jeden Fall Zeit sein ;)"
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
        icon: "⛪",
        title: "Kirchliche Trauung",
        time: "11:30 Uhr",
        location: "Pfarrkirche Mariä Himmelfahrt Terlan",
        address: "",
        description: "Michi hat sich nach dem 'First Look' wieder ein wenig gesammelt und zieht nun gemeinsam mit den Gästen feierlich in die Kirche ein – ein aufregender Moment zwischen Vorfreude und Herzklopfen. Petra wird – ganz nach ihrem Herzenswunsch – von ihrem Tata in die Kirche geführt. Ein berührender Augenblick voller Stolz & Verbundenheit, der mehr als 1000 Worte. Blumenkinder bereiten den Weg mit zarten Blüten für das, was nun beginnt: ein gemeinsames Kapitel voller Glück! Liebe Gäste, um diese unvergesslichen Augenblicke ganz bewusst und ungestört genießen zu können, wird ein Fotograf alle Emotionen für uns und euch festhalten. Eure Handys und Kameras dürfen getrost in der Tasche bleiben, sodass eure Hände frei sind – sei es für ein Taschentuch 😉 oder um nach dem First Kiss zu applaudieren."
      }
    ],
    footerText: "💍 Wir freuen uns auf euch! 💍"
  }

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
          <p className="font-display text-2xl md:text-3xl text-blue-900 font-bold whitespace-pre-line">
            {detailsData.introTitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {detailsData.events.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-100/80 rounded-2xl p-8 shadow-xl border border-blue-300 hover:border-blue-900 transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4 text-blue-900 drop-shadow-lg">{detail.icon}</div>
              <h3 className="font-display text-2xl text-blue-900 font-bold mb-2">
                {detail.title}
              </h3>
              <p className="font-display text-lg text-blue-700 mb-3 font-semibold">
                {detail.time}
              </p>
              {detail.location && (
                <p className="font-sans text-blue-800 font-medium mb-2">
                  📍 {detail.location}
                </p>
              )}
              {detail.address && (
                <p className="font-sans text-sm text-blue-600 mb-4">
                  {detail.address}
                </p>
              )}
              <p className="font-display text-base text-blue-900 leading-relaxed">
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
          <div className="inline-block bg-blue-50 rounded-full px-8 py-4 border-2 border-blue-900">
            <p className="font-display text-2xl text-blue-900 font-bold">
              {detailsData.footerText}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
