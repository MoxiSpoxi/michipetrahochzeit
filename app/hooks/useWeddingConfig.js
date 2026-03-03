'use client'

import { useState, useEffect } from 'react'
import { defaultConfig } from '../lib/config'
import { supabase } from '../lib/supabase'

const STORAGE_KEY = 'wedding-config'

export function useWeddingConfig() {
  const [config, setConfig] = useState(defaultConfig)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isFromServer, setIsFromServer] = useState(false)

  // Load config from Supabase (server) on mount, fallback to localStorage
  useEffect(() => {
    async function loadConfig() {
      if (typeof window !== 'undefined') {
        // First try to load from localStorage for immediate display
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          try {
            const parsed = JSON.parse(stored)
            setConfig({ ...defaultConfig, ...parsed })
          } catch (e) {
            console.error('Error parsing stored config:', e)
          }
        }

        // Then try to load from Supabase
        try {
          const { data, error } = await supabase
            .from('config')
            .select('data')
            .eq('id', 'wedding-config')
            .single()

          if (data && data.data) {
            setConfig({ ...defaultConfig, ...data.data })
            setIsFromServer(true)
            // Also update localStorage
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data.data))
          }
        } catch (err) {
          // Supabase not configured yet, use localStorage
          console.log('Using local config (Supabase not configured)')
        }
        setIsLoaded(true)
      }
    }

    loadConfig()
  }, [])

  // Save config to localStorage AND Supabase when it changes
  const updateConfig = async (newConfig) => {
    const updated = { ...config, ...newConfig }
    setConfig(updated)
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    }

    // Try to save to Supabase
    try {
      await supabase
        .from('config')
        .upsert({ id: 'wedding-config', data: updated }, { onConflict: 'id' })
    } catch (err) {
      console.log('Saved to localStorage only (Supabase not configured)')
    }
  }

  // Reset to default
  const resetConfig = async () => {
    setConfig(defaultConfig)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultConfig))
    }

    // Try to reset in Supabase
    try {
      await supabase
        .from('config')
        .upsert({ id: 'wedding-config', data: defaultConfig }, { onConflict: 'id' })
    } catch (err) {
      console.log('Reset in localStorage only (Supabase not configured)')
    }
  }

  return { config, updateConfig, resetConfig, isLoaded, isFromServer }
}

