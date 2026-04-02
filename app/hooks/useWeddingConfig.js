'use client'

import { useState, useEffect } from 'react'
import { defaultConfig } from '../lib/config'

const STORAGE_KEY = 'wedding-config'

export function useWeddingConfig() {
  const [config, setConfig] = useState(defaultConfig)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        try {
          setConfig({ ...defaultConfig, ...JSON.parse(stored) })
        } catch (e) {
          console.error('Error parsing stored config:', e)
        }
      }
      setIsLoaded(true)
    }
  }, [])

  const updateConfig = (newConfig) => {
    const updated = { ...config, ...newConfig }
    setConfig(updated)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    }
  }

  const resetConfig = () => {
    setConfig(defaultConfig)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultConfig))
    }
  }

  return { config, updateConfig, resetConfig, isLoaded }
}

