'use client'

import { createContext, useContext } from 'react'
import { useWeddingConfig } from '../hooks/useWeddingConfig'

const WeddingConfigContext = createContext(null)

export function WeddingConfigProvider({ children }) {
  const { config, updateConfig, resetConfig, isLoaded } = useWeddingConfig()

  return (
    <WeddingConfigContext.Provider value={{ config, updateConfig, resetConfig, isLoaded }}>
      {children}
    </WeddingConfigContext.Provider>
  )
}

export function useConfig() {
  const context = useContext(WeddingConfigContext)
  if (!context) {
    throw new Error('useConfig must be used within a WeddingConfigProvider')
  }
  return context
}
