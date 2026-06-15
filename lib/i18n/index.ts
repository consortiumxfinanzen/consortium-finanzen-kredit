import { de } from './de'
import { fr } from './fr'

export type Locale = 'de' | 'fr'
export type Translations = typeof de

export const translations: Record<Locale, Translations> = { de, fr }
