'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) setVisible(true)
  }, [])

  const accept  = () => { localStorage.setItem('cookie-consent', 'accepted');  setVisible(false) }
  const decline = () => { localStorage.setItem('cookie-consent', 'declined');  setVisible(false) }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 text-sm text-slate-600">
          <strong className="text-slate-800">Ce site utilise des cookies.</strong>{' '}
          Aucun cookie non essentiel n'est activé sans votre consentement.{' '}
          <Link href="/legal/cookies" className="text-primary-700 underline hover:text-primary-900">
            En savoir plus
          </Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <button onClick={decline}
            className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
            Refuser
          </button>
          <button onClick={accept}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-950 rounded-lg hover:bg-primary-900 transition-colors">
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
