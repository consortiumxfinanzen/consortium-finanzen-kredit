'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const { t } = useLanguage()
  const f = t.form

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    country: '', loanType: '', amount: '', message: '', consent: false,
  })
  const [status, setStatus] = useState<Status>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setForm(p => ({ ...p, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'dba3dae4-d0ea-4540-a76b-3502aaad1b77',
          subject: `Finanzierungsanfrage — ${form.loanType}`,
          from_name: `${form.firstName} ${form.lastName}`,
          ...form,
        }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        window.gtag?.('event', 'form_submit', {
          event_category: 'financement',
          event_label: form.loanType,
          form_name: 'contact_financement',
        })
        setForm({ firstName: '', lastName: '', email: '', phone: '', country: '', loanType: '', amount: '', message: '', consent: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-slate-200">
        <div aria-hidden="true" className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-primary-950 mb-3">{f.successTitle}</h2>
        <p className="text-slate-500 mb-8">{f.successText}</p>
        <Link href="/" className="inline-flex items-center justify-center bg-primary-950 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-900 transition-colors">
          {f.successBack}
        </Link>
      </div>
    )
  }

  const field = 'w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-slate-800 text-sm bg-white'
  const req = <><span aria-hidden="true" className="text-red-500">*</span><span className="sr-only">(required)</span></>
  const canSubmit = form.consent && status !== 'sending'

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
      <div className="p-8 sm:p-10">
        <form onSubmit={onSubmit} noValidate aria-label={f.submit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-1.5">{f.firstName} {req}</label>
              <input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={onChange}
                placeholder={f.firstNamePh} className={field} />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-1.5">{f.lastName} {req}</label>
              <input id="lastName" name="lastName" type="text" required value={form.lastName} onChange={onChange}
                placeholder={f.lastNamePh} className={field} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">{f.email} {req}</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange}
                placeholder={f.emailPh} className={field} />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">{f.phone}</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange}
                placeholder={f.phonePh} className={field} />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-1.5">{f.country} {req}</label>
              <select id="country" name="country" required value={form.country} onChange={onChange} className={field}>
                <option value="">{f.selectCountry}</option>
                {f.countries.map(({ code, label }) => (
                  <option key={code} value={code}>{label}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="loanType" className="block text-sm font-semibold text-slate-700 mb-1.5">{f.loanType} {req}</label>
              <select id="loanType" name="loanType" required value={form.loanType} onChange={onChange} className={field}>
                <option value="">{f.selectLoanType}</option>
                {f.loanTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="amount" className="block text-sm font-semibold text-slate-700 mb-1.5">{f.amount}</label>
              <input id="amount" name="amount" type="text" value={form.amount} onChange={onChange}
                placeholder={f.amountPlaceholder} className={field} />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">{f.message}</label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={onChange}
                placeholder={f.msgPlaceholder}
                className={`${field} resize-none`} />
            </div>

            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="consent" required checked={form.consent} onChange={onChange}
                  aria-describedby="consent-desc"
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary-700 focus:ring-primary-500" />
                <span id="consent-desc" className="text-xs text-slate-500 leading-relaxed">
                  {f.consentPrefix}
                  <Link href="/legal/politique-confidentialite" className="text-primary-700 underline hover:text-primary-900">
                    {f.consentLink}
                  </Link>
                  {f.consentSuffix}
                  <span aria-hidden="true" className="text-red-500"> *</span>
                </span>
              </label>
            </div>
          </div>

          {status === 'error' && (
            <div role="alert" className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
              {f.errorMsg}
            </div>
          )}

          <button type="submit" disabled={!canSubmit}
            className="mt-6 w-full bg-primary-950 hover:bg-primary-900 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl text-base transition-colors">
            {status === 'sending' ? f.sending : f.submit}
          </button>
          <p className="text-xs text-slate-400 text-center mt-3">{f.footerNote}</p>
        </form>
      </div>
    </div>
  )
}
