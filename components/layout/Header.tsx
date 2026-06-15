'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import LanguageSelector from '@/components/ui/LanguageSelector'

export default function Header() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    { label: t.nav.services,  href: '/services' },
    { label: t.nav.simulator, href: '/#simulateur' },
    { label: t.nav.blog,      href: '/blog' },
    { label: t.nav.about,     href: '/a-propos' },
    { label: t.nav.contact,   href: '/contact' },
  ]

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" aria-label="Consortium Finanzen Kredit — Startseite" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-primary-950 flex items-center justify-center shrink-0">
            <span className="text-gold-500 font-bold text-xs tracking-tight">CFK</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <span className="block font-bold text-primary-950 text-base">Consortium</span>
            <span className="block text-primary-600 text-[11px] font-medium -mt-0.5">Finanzen Kredit</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-7">
          {nav.map(({ label, href }) => (
            <Link key={href} href={href}
              className="text-slate-600 hover:text-primary-800 text-sm font-medium transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs + language selector */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSelector />
          <Link href="/rendez-vous"
            className="border border-primary-800 text-primary-800 hover:bg-primary-50 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            {t.nav.appointment}
          </Link>
          <Link href="/contact"
            className="bg-primary-950 hover:bg-primary-900 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
            {t.nav.cta}
          </Link>
        </div>

        {/* Burger */}
        <button
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <span aria-hidden="true" className="block w-5 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-transform duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-transform duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-menu" aria-label="Mobile Navigation"
          className="md:hidden bg-white border-t border-slate-100 shadow-lg px-4 py-4 space-y-1">
          {nav.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm">
              {label}
            </Link>
          ))}
          <div className="pt-3 space-y-2 border-t border-slate-100 mt-3">
            <div className="flex justify-center">
              <LanguageSelector />
            </div>
            <Link href="/rendez-vous" onClick={() => setOpen(false)}
              className="block text-center border border-primary-800 text-primary-800 px-4 py-2.5 rounded-lg font-semibold text-sm">
              {t.nav.appointment}
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}
              className="block text-center bg-primary-950 text-white px-4 py-2.5 rounded-lg font-semibold text-sm">
              {t.nav.cta}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
