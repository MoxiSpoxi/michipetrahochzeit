'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Placeholder images using unsplash
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', alt: 'Hochzeitspaar' },
    { id: 2, src: 'https://images.unsplash.com/photo-1511285560982-1356c11d4606?w=800&h=600&fit=crop', alt: 'Ringe' },
    { id: 3, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop', alt: 'Tischdekoration' },
    { id: 4, src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop', alt: 'Brautstrauß' },
    { id: 5, src: 'https://images.unsplash.com/photo-1522673607200-1645062cd495?w=800&h=600&fit=crop', alt: 'Hochzeitstorte' },
    { id: 6, src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=600&fit=crop', alt: 'Blumen' },
    { id: 7, src: 'https://images.unsplash.com/photo-1507504038406-6b74c2a0fb42?w=800&h=600&fit=crop', alt: 'Kerzen' },
    { id: 8, src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&h=600&fit=crop', alt: 'Liebesbrief' },
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-cream to-rose/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-wine mb-4">
            Unsere Galerie
          </h2>
          <p className="font-display text-lg text-gray-500">
            Momente, die wir für immer in unseren Herzen tragen
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="font-hand text-2xl text-gold">
            ♥ Mehr Bilder folgen nach dem großen Tag ♥
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <p className="text-center text-white mt-4 font-display text-lg">
                {selectedImage.alt}
              </p>
            </motion.div>
            
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
