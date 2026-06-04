import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { pt } from '@i18n/pt'
import { en } from '@i18n/en'
import type { Strings } from '@i18n/en'

export type Locale = 'pt' | 'en';

const localeMap: Record<Locale, Strings> = { pt, en }

interface LocaleCtx {
  strings: Strings
  locale: Locale
  setLocale: (l: Locale) => void
}

const Ctx = createContext<LocaleCtx | null>(null)

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('cutpilot-locale')
    return saved === 'en' ? 'en' : 'pt'
  })

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('cutpilot-locale', l)
  }

  return (
    <Ctx.Provider value={{ strings: localeMap[locale], locale, setLocale }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLocale = (): LocaleCtx => {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLocale must be used within <LocaleProvider>')
  return ctx
}
