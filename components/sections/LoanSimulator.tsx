'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'

type LoanType = 'immobilier' | 'personnel' | 'professionnel'

const TYPES: { value: LoanType; label: string; defaultAmount: number; defaultDuration: number; defaultRate: number; maxAmount: number; maxDuration: number }[] = [
  { value: 'immobilier',    label: 'Prêt immobilier',    defaultAmount: 200000, defaultDuration: 240, defaultRate: 2.0,  maxAmount: 2000000, maxDuration: 360 },
  { value: 'personnel',     label: 'Prêt personnel',     defaultAmount: 15000,  defaultDuration: 60,  defaultRate: 2.0,  maxAmount: 75000,   maxDuration: 84  },
  { value: 'professionnel', label: 'Prêt professionnel', defaultAmount: 100000, defaultDuration: 84,  defaultRate: 2.0,  maxAmount: 1000000, maxDuration: 120 },
]

function calcLoan(principal: number, annualRate: number, months: number) {
  if (!months || !annualRate) return { monthly: 0, total: 0, interest: 0 }
  const r = annualRate / 100 / 12
  const monthly = (principal * r * (1 + r) ** months) / ((1 + r) ** months - 1)
  const total   = monthly * months
  return { monthly, total, interest: total - principal }
}

const eur = (n: number) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)

export default function LoanSimulator() {
  const initial = TYPES[0]
  const [type,     setType]     = useState<LoanType>('immobilier')
  const [amount,   setAmount]   = useState(initial.defaultAmount)
  const [duration, setDuration] = useState(initial.defaultDuration)
  const [rate,     setRate]     = useState(initial.defaultRate)

  const cfg = TYPES.find(t => t.value === type)!

  const switchType = useCallback((t: LoanType) => {
    const cfg = TYPES.find(x => x.value === t)!
    setType(t)
    setAmount(cfg.defaultAmount)
    setDuration(cfg.defaultDuration)
    setRate(cfg.defaultRate)
  }, [])

  const { monthly, total, interest } = calcLoan(amount, rate, duration)
  const years = Math.floor(duration / 12)
  const months = duration % 12

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">

        {/* Type selector */}
        <div role="group" aria-label="Type de prêt"
          className="inline-flex gap-1 p-1 bg-white border border-slate-200 rounded-xl mb-8">
          {TYPES.map(({ value, label }) => (
            <button key={value} onClick={() => switchType(value)} aria-pressed={type === value}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                type === value ? 'bg-primary-950 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}>
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Sliders */}
          <div className="space-y-7">
            {/* Montant */}
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="sim-amount" className="text-sm font-semibold text-slate-700">Montant emprunté</label>
                <span className="text-sm font-bold text-primary-900" aria-live="polite">{eur(amount)}</span>
              </div>
              <input id="sim-amount" type="range"
                min={type === 'immobilier' ? 50000 : type === 'personnel' ? 1000 : 10000}
                max={cfg.maxAmount} step={type === 'immobilier' ? 5000 : type === 'personnel' ? 500 : 5000}
                value={amount} onChange={e => setAmount(+e.target.value)}
                className="w-full h-2 bg-slate-200 rounded-full appearance-none accent-primary-900" />
            </div>

            {/* Durée */}
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="sim-duration" className="text-sm font-semibold text-slate-700">Durée du prêt</label>
                <span className="text-sm font-bold text-primary-900" aria-live="polite">
                  {years > 0 ? `${years} an${years > 1 ? 's' : ''}` : ''}{months > 0 ? ` ${months} mois` : ''}
                </span>
              </div>
              <input id="sim-duration" type="range"
                min={12} max={cfg.maxDuration} step={6}
                value={duration} onChange={e => setDuration(+e.target.value)}
                className="w-full h-2 bg-slate-200 rounded-full appearance-none accent-primary-900" />
            </div>

            {/* Taux */}
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="sim-rate" className="text-sm font-semibold text-slate-700">Taux annuel</label>
                <span className="text-sm font-bold text-primary-900" aria-live="polite">{rate.toFixed(1)} %</span>
              </div>
              <input id="sim-rate" type="range" min={0.5} max={15} step={0.1}
                value={rate} onChange={e => setRate(+e.target.value)}
                className="w-full h-2 bg-slate-200 rounded-full appearance-none accent-primary-900" />
            </div>
          </div>

          {/* Résultats */}
          <div aria-live="polite" aria-label="Résultats de simulation"
            className="bg-primary-950 rounded-2xl p-6 text-white flex flex-col justify-between">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">Résultats de simulation</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1">Mensualité estimée</p>
                <p className="text-4xl font-bold text-gold-400">{eur(monthly)}</p>
                <p className="text-xs text-slate-500 mt-1">par mois</p>
              </div>
              <div className="space-y-3 border-t border-slate-800 pt-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Capital</span>
                  <span className="font-semibold">{eur(amount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Intérêts</span>
                  <span className="font-semibold text-red-400">{eur(interest)}</span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-3">
                  <span className="text-slate-300 font-semibold">Coût total</span>
                  <span className="font-bold">{eur(total)}</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Simulation indicative. Taux réels selon votre profil.
              </p>
            </div>
            <Link href="/contact"
              className="mt-6 block text-center bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold px-4 py-3 rounded-xl text-sm transition-colors">
              Obtenir une offre réelle →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
