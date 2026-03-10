'use client'

import { useState, useRef } from 'react'
import { useConfig } from '../context/WeddingConfigContext'

// Font size options
const fontSizeOptions = [
  { value: 'text-xs', label: 'Sehr Klein' },
  { value: 'text-sm', label: 'Klein' },
  { value: 'text-base', label: 'Normal' },
  { value: 'text-lg', label: 'Groß' },
  { value: 'text-xl', label: 'Extra Groß' },
  { value: 'text-2xl', label: '2XL' },
  { value: 'text-3xl', label: '3XL' },
  { value: 'text-4xl', label: '4XL' },
  { value: 'text-5xl', label: '5XL' },
  { value: 'text-6xl', label: '6XL' },
  { value: 'text-7xl', label: '7XL' },
  { value: 'text-8xl', label: '8XL' },
  { value: 'text-9xl', label: '9XL' },
]

// Font size editor component
function FontSizeEditor({ label, value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-gray-600 whitespace-nowrap w-24">{label}:</label>
      <select
        value={value || 'text-base'}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
      >
        {fontSizeOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label} ({opt.value})
          </option>
        ))}
      </select>
    </div>
  )
}

export default function AdminPage() {
  const { config, updateConfig, resetConfig, isLoaded } = useConfig()
  const [activeTab, setActiveTab] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [showExport, setShowExport] = useState(false)
  const fileInputRef = useRef(null)

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-gray-600">Loading...</p>
    </div>
  }

  const handleSave = (section, data) => {
    updateConfig({ [section]: data })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const exportConfig = () => {
    const configCode = `// Default configuration for the wedding website
// This can be edited via the admin dashboard

export const defaultConfig = ${JSON.stringify(config, null, 2)}
`
    navigator.clipboard.writeText(configCode)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const downloadConfig = () => {
    const dataStr = JSON.stringify(config, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `wedding-config-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const uploadConfig = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const uploadedConfig = JSON.parse(e.target.result)
        updateConfig(uploadedConfig)
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
      } catch (error) {
        alert('Fehler beim Laden der Konfiguration. Bitte überprüfen Sie das Dateiformat.')
      }
    }
    reader.readAsText(file)
    event.target.value = ''
  }

  const tabs = [
    { id: 'hero', label: 'Hero Section' },
    { id: 'countdown', label: 'Countdown' },
    { id: 'details', label: 'Details' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'footer', label: 'Footer' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-2xl font-bold">Wedding Website Admin</h1>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setShowExport(!showExport)}
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
            >
              {showExport ? 'Ausblenden' : 'Export/Backup'}
            </button>
            <button
              onClick={resetConfig}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
            >
              Zurücksetzen
            </button>
            <a
              href="/"
              target="_blank"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
            >
              Website ansehen
            </a>
          </div>
        </div>
      </header>

      {/* Saved Notification */}
      {saved && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          ✓ Gespeichert!
        </div>
      )}

      {/* Export/Backup Panel */}
      {showExport && (
        <div className="max-w-6xl mx-auto py-4 px-4">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-purple-900 mb-4">Export & Backup</h2>
            <p className="text-purple-700 mb-4">
              Deine Änderungen werden automatisch im Browser gespeichert und sind sofort auf der Website sichtbar! 
              Die folgenden Optionen dienen nur zur Sicherung oder für Vercel-Deployment.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={exportConfig}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                📋 Code für Vercel kopieren
              </button>
              <button
                onClick={downloadConfig}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                ⬇️ JSON herunterladen
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                📁 JSON laden
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={uploadConfig}
                className="hidden"
              />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === 'hero' && (
            <HeroEditor data={config.hero} onSave={(data) => handleSave('hero', data)} />
          )}
          {activeTab === 'countdown' && (
            <CountdownEditor data={config.countdown} onSave={(data) => handleSave('countdown', data)} />
          )}
          {activeTab === 'details' && (
            <DetailsEditor data={config.details} onSave={(data) => handleSave('details', data)} />
          )}
          {activeTab === 'gallery' && (
            <GalleryEditor data={config.gallery} onSave={(data) => handleSave('gallery', data)} />
          )}
          {activeTab === 'footer' && (
            <FooterEditor data={config.footer} onSave={(data) => handleSave('footer', data)} />
          )}
        </div>
      </div>
    </div>
  )
}

function HeroEditor({ data, onSave }) {
  const [formData, setFormData] = useState(data)
  const [showPreview, setShowPreview] = useState(false)

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFontSizeChange = (field, value) => {
    setFormData({
      ...formData,
      fontSize: { ...formData.fontSize, [field]: value }
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Hero Section Editor</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            value={formData.name1}
            onChange={(e) => handleChange('name1', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Second Name</label>
          <input
            type="text"
            value={formData.name2}
            onChange={(e) => handleChange('name2', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Wedding Date</label>
        <input
          type="text"
          value={formData.date}
          onChange={(e) => handleChange('date', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Background Image URL</label>
        <input
          type="text"
          value={formData.backgroundImage}
          onChange={(e) => handleChange('backgroundImage', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Font Size Settings */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Schriftgrößen</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <FontSizeEditor 
            label="Titel" 
            value={formData.fontSize?.title} 
            onChange={(v) => handleFontSizeChange('title', v)} 
          />
          <FontSizeEditor 
            label="Namen" 
            value={formData.fontSize?.names} 
            onChange={(v) => handleFontSizeChange('names', v)} 
          />
          <FontSizeEditor 
            label="Datum" 
            value={formData.fontSize?.date} 
            onChange={(v) => handleFontSizeChange('date', v)} 
          />
        </div>
      </div>

      {/* Text Formatting Help */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-blue-700">
            💡 <strong>Tipp:</strong> Zeilenumbrüche werden automatisch übernommen!
          </p>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            {showPreview ? 'Vorschau ausblenden' : 'Vorschau anzeigen'}
          </button>
        </div>
        {showPreview && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
            <p className={`${formData.fontSize?.title || 'text-3xl'} font-bold text-blue-900`}>
              {formData.title}
            </p>
            <p className={`${formData.fontSize?.names || 'text-6xl'} font-bold text-blue-900 mt-2`}>
              {formData.name1} ♥ {formData.name2}
            </p>
            <p className={`${formData.fontSize?.date || 'text-2xl'} text-blue-900 mt-2`}>
              {formData.date}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={() => onSave(formData)}
        className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
      >
        Speichern
      </button>
    </div>
  )
}

function CountdownEditor({ data, onSave }) {
  const [formData, setFormData] = useState(data)
  const [showPreview, setShowPreview] = useState(false)

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFontSizeChange = (field, value) => {
    setFormData({
      ...formData,
      fontSize: { ...formData.fontSize, [field]: value }
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Countdown Editor</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Wedding Date & Time</label>
        <input
          type="datetime-local"
          value={formData.weddingDate?.slice(0, 16) || ''}
          onChange={(e) => handleChange('weddingDate', e.target.value + ':00')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <textarea
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          rows={2}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
        <textarea
          value={formData.subtitle}
          onChange={(e) => handleChange('subtitle', e.target.value)}
          rows={2}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Font Size Settings */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Schriftgrößen</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <FontSizeEditor 
            label="Titel" 
            value={formData.fontSize?.title} 
            onChange={(v) => handleFontSizeChange('title', v)} 
          />
          <FontSizeEditor 
            label="Untertitel" 
            value={formData.fontSize?.subtitle} 
            onChange={(v) => handleFontSizeChange('subtitle', v)} 
          />
        </div>
      </div>

      {/* Preview */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-blue-700">
            💡 <strong>Tipp:</strong> Zeilenumbrüche werden automatisch übernommen!
          </p>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            {showPreview ? 'Vorschau ausblenden' : 'Vorschau anzeigen'}
          </button>
        </div>
        {showPreview && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
            <p className={`${formData.fontSize?.title || 'text-4xl'} font-bold text-blue-900 mb-2`}>
              {formData.title}
            </p>
            <p className={`${formData.fontSize?.subtitle || 'text-lg'} text-blue-700`}>
              {formData.subtitle}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={() => onSave(formData)}
        className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
      >
        Speichern
      </button>
    </div>
  )
}

function DetailsEditor({ data, onSave }) {
  const [formData, setFormData] = useState(data)
  const [showPreview, setShowPreview] = useState(false)

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFontSizeChange = (field, value) => {
    setFormData({
      ...formData,
      fontSize: { ...formData.fontSize, [field]: value }
    })
  }

  const updateEvent = (index, field, value) => {
    const newEvents = [...formData.events]
    newEvents[index] = { ...newEvents[index], [field]: value }
    setFormData({ ...formData, events: newEvents })
  }

  const addEvent = () => {
    const newEvent = {
      icon: "🎉",
      title: "Neues Event",
      time: "00:00 Uhr",
      location: "Ort",
      address: "Adresse",
      description: "Beschreibung"
    }
    setFormData({ ...formData, events: [...formData.events, newEvent] })
  }

  const removeEvent = (index) => {
    const newEvents = formData.events.filter((_, i) => i !== index)
    setFormData({ ...formData, events: newEvents })
  }

  const moveEventUp = (index) => {
    if (index === 0) return
    const newEvents = [...formData.events]
    const temp = newEvents[index]
    newEvents[index] = newEvents[index - 1]
    newEvents[index - 1] = temp
    setFormData({ ...formData, events: newEvents })
  }

  const moveEventDown = (index) => {
    if (index === formData.events.length - 1) return
    const newEvents = [...formData.events]
    const temp = newEvents[index]
    newEvents[index] = newEvents[index + 1]
    newEvents[index + 1] = temp
    setFormData({ ...formData, events: newEvents })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Details Section Editor</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Intro Title <span className="text-gray-500">(Zeilenumbrüche mit Enter)</span>
        </label>
        <textarea
          value={formData.introTitle}
          onChange={(e) => handleChange('introTitle', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Intro Text <span className="text-gray-500">(Zeilenumbrüche mit Enter)</span>
        </label>
        <textarea
          value={formData.introText}
          onChange={(e) => handleChange('introText', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Font Size Settings for Intro */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Schriftgrößen - Einleitung</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <FontSizeEditor 
            label="Titel" 
            value={formData.fontSize?.introTitle} 
            onChange={(v) => handleFontSizeChange('introTitle', v)} 
          />
          <FontSizeEditor 
            label="Text" 
            value={formData.fontSize?.introText} 
            onChange={(v) => handleFontSizeChange('introText', v)} 
          />
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Events (Kacheln)</h3>
          <button
            type="button"
            onClick={addEvent}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
          >
            <span>+</span> Kachel hinzufügen
          </button>
        </div>
        {formData.events.map((event, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-gray-700 flex items-center gap-2">
                <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                Kachel {index + 1}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => moveEventUp(index)}
                  disabled={index === 0}
                  className={`px-3 py-1 rounded text-sm ${
                    index === 0 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                  title="Nach oben"
                >
                  ▲
                </button>
                <button
                  type="button"
                  onClick={() => moveEventDown(index)}
                  disabled={index === formData.events.length - 1}
                  className={`px-3 py-1 rounded text-sm ${
                    index === formData.events.length - 1 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                  title="Nach unten"
                >
                  ▼
                </button>
                <button
                  type="button"
                  onClick={() => removeEvent(index)}
                  className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
                  title="Kachel entfernen"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                <input
                  type="text"
                  value={event.icon}
                  onChange={(e) => updateEvent(index, 'icon', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={event.title}
                  onChange={(e) => updateEvent(index, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="text"
                  value={event.time}
                  onChange={(e) => updateEvent(index, 'time', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={event.location}
                  onChange={(e) => updateEvent(index, 'location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                value={event.address}
                onChange={(e) => updateEvent(index, 'address', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description <span className="text-gray-500">(Zeilenumbrüche mit Enter)</span></label>
              <textarea
                value={event.description}
                onChange={(e) => updateEvent(index, 'description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Footer Text</label>
        <input
          type="text"
          value={formData.footerText}
          onChange={(e) => handleChange('footerText', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Font Size Settings for Events */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Schriftgrößen - Events</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <FontSizeEditor 
            label="Event Titel" 
            value={formData.fontSize?.eventTitle} 
            onChange={(v) => handleFontSizeChange('eventTitle', v)} 
          />
          <FontSizeEditor 
            label="Event Zeit" 
            value={formData.fontSize?.eventTime} 
            onChange={(v) => handleFontSizeChange('eventTime', v)} 
          />
          <FontSizeEditor 
            label="Beschreibung" 
            value={formData.fontSize?.eventDescription} 
            onChange={(v) => handleFontSizeChange('eventDescription', v)} 
          />
        </div>
        <div className="mt-4">
          <FontSizeEditor 
            label="Footer Text" 
            value={formData.fontSize?.footerText} 
            onChange={(v) => handleFontSizeChange('footerText', v)} 
          />
        </div>
      </div>

      {/* Preview */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-blue-700">
            💡 <strong>Tipp:</strong> Zeilenumbrüche werden automatisch übernommen!
          </p>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            {showPreview ? 'Vorschau ausblenden' : 'Vorschau anzeigen'}
          </button>
        </div>
        {showPreview && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
            <p className={`${formData.fontSize?.introTitle || 'text-2xl'} font-bold text-blue-900 mb-2 whitespace-pre-line`}>
              {formData.introTitle}
            </p>
            <p className={`${formData.fontSize?.introText || 'text-lg'} text-blue-700 whitespace-pre-line`}>
              {formData.introText}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={() => onSave(formData)}
        className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
      >
        Speichern
      </button>
    </div>
  )
}

function GalleryEditor({ data, onSave }) {
  const [formData, setFormData] = useState(data)
  const [showPreview, setShowPreview] = useState(false)

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFontSizeChange = (field, value) => {
    setFormData({
      ...formData,
      fontSize: { ...formData.fontSize, [field]: value }
    })
  }

  const updateImage = (index, field, value) => {
    const newImages = [...formData.images]
    newImages[index] = { ...newImages[index], [field]: value }
    setFormData({ ...formData, images: newImages })
  }

  const addImage = () => {
    const newId = Math.max(...formData.images.map(i => i.id), 0) + 1
    setFormData({
      ...formData,
      images: [...formData.images, { id: newId, src: '', alt: `Bild ${newId}` }]
    })
  }

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index)
    setFormData({ ...formData, images: newImages })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery Editor</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
        <input
          type="text"
          value={formData.subtitle}
          onChange={(e) => handleChange('subtitle', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Font Size Settings */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Schriftgrößen</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <FontSizeEditor 
            label="Titel" 
            value={formData.fontSize?.title} 
            onChange={(v) => handleFontSizeChange('title', v)} 
          />
          <FontSizeEditor 
            label="Untertitel" 
            value={formData.fontSize?.subtitle} 
            onChange={(v) => handleFontSizeChange('subtitle', v)} 
          />
          <FontSizeEditor 
            label="Footer Text" 
            value={formData.fontSize?.footerText} 
            onChange={(v) => handleFontSizeChange('footerText', v)} 
          />
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Images</h3>
          <button
            type="button"
            onClick={addImage}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            + Add Image
          </button>
        </div>
        
        {formData.images.map((image, index) => (
          <div key={image.id} className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-start mb-4">
              <span className="font-medium text-gray-700">Image {index + 1}</span>
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕ Remove
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  value={image.src}
                  onChange={(e) => updateImage(index, 'src', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
                <input
                  type="text"
                  value={image.alt}
                  onChange={(e) => updateImage(index, 'alt', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            {image.src && (
              <div className="mt-2">
                <img src={image.src} alt={image.alt} className="w-24 h-24 object-cover rounded-lg" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Footer Text</label>
        <input
          type="text"
          value={formData.footerText}
          onChange={(e) => handleChange('footerText', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Preview */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          {showPreview ? 'Vorschau ausblenden' : 'Vorschau anzeigen'}
        </button>
        {showPreview && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
            <p className={`${formData.fontSize?.title || 'text-4xl'} font-bold text-blue-900 mb-2`}>
              {formData.title}
            </p>
            <p className={`${formData.fontSize?.subtitle || 'text-lg'} text-blue-700 mb-2`}>
              {formData.subtitle}
            </p>
            <p className={`${formData.fontSize?.footerText || 'text-2xl'} text-blue-300`}>
              {formData.footerText}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={() => onSave(formData)}
        className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
      >
        Speichern
      </button>
    </div>
  )
}

function FooterEditor({ data, onSave }) {
  const [formData, setFormData] = useState(data)
  const [showPreview, setShowPreview] = useState(false)

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFontSizeChange = (field, value) => {
    setFormData({
      ...formData,
      fontSize: { ...formData.fontSize, [field]: value }
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Footer Editor</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Names</label>
        <input
          type="text"
          value={formData.names}
          onChange={(e) => handleChange('names', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Main Text</label>
        <textarea
          value={formData.mainText}
          onChange={(e) => handleChange('mainText', e.target.value)}
          rows={2}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Sub Text</label>
        <input
          type="text"
          value={formData.subText}
          onChange={(e) => handleChange('subText', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Copyright</label>
        <input
          type="text"
          value={formData.copyright}
          onChange={(e) => handleChange('copyright', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Font Size Settings */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Schriftgrößen</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <FontSizeEditor 
            label="Namen" 
            value={formData.fontSize?.names} 
            onChange={(v) => handleFontSizeChange('names', v)} 
          />
          <FontSizeEditor 
            label="Main Text" 
            value={formData.fontSize?.mainText} 
            onChange={(v) => handleFontSizeChange('mainText', v)} 
          />
          <FontSizeEditor 
            label="Sub Text" 
            value={formData.fontSize?.subText} 
            onChange={(v) => handleFontSizeChange('subText', v)} 
          />
          <FontSizeEditor 
            label="Copyright" 
            value={formData.fontSize?.copyright} 
            onChange={(v) => handleFontSizeChange('copyright', v)} 
          />
        </div>
      </div>

      {/* Preview */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          {showPreview ? 'Vorschau ausblenden' : 'Vorschau anzeigen'}
        </button>
        {showPreview && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
            <p className={`${formData.fontSize?.names || 'text-4xl'} font-bold text-blue-900 mb-2`}>
              {formData.names}
            </p>
            <p className={`${formData.fontSize?.mainText || 'text-lg'} text-blue-900 mb-1`}>
              {formData.mainText}
            </p>
            <p className={`${formData.fontSize?.subText || 'text-sm'} text-blue-700 mb-2`}>
              {formData.subText}
            </p>
            <p className={`${formData.fontSize?.copyright || 'text-xs'} text-blue-300`}>
              {formData.copyright}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={() => onSave(formData)}
        className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
      >
        Speichern
      </button>
    </div>
  )
}

