import { Scissors, ChevronDown, Check } from 'lucide-react'
import { cn } from '@lib'
import { Button } from '@components/ui'
import { useLocale } from '@hooks'
import type { Locale } from '@hooks'
import useNavbar from './useNavbar'

const locales: { id: Locale; label: string }[] = [
  { id: 'pt', label: 'Português' },
  { id: 'en', label: 'English'   },
]

export const Navbar = () => {
  const { scrolled, langOpen, setLangOpen, langRef } = useNavbar()
  const { strings, locale, setLocale } = useLocale()
  const t = strings.nav

  return (
    <header className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-[#0D1117]',
        scrolled && 'border-b border-border'
      )}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Scissors className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-display text-2xl text-foreground tracking-widest">{t.logo}</span>
        </a>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors tracking-widest">
              {t.howItWorks}
            </a>
            <a href="#features" className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors tracking-widest">
              {t.features}
            </a>
          </nav>

          {/* Language dropdown — always visible */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-mono tracking-widest transition-colors',
                langOpen
                  ? 'border-primary/40 text-primary bg-primary/8'
                  : 'border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
              )}
            >
              {locale.toUpperCase()}
              <ChevronDown className={cn('w-3 h-3 transition-transform duration-200', langOpen && 'rotate-180')} />
            </button>

            {langOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
                {locales.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => { setLocale(id); setLangOpen(false) }}
                    className={cn(
                      'w-full px-3 py-2.5 flex items-center gap-3 transition-colors',
                      locale === id
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
                    )}
                  >
                    <span className="text-[11px] font-mono tracking-widest w-7 shrink-0">
                      {id.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono">{label}</span>
                    {locale === id && <Check className="w-3 h-3 ml-auto shrink-0" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#download" className="hidden md:block">
            <Button size="sm" className="tracking-widest text-xs">{t.download}</Button>
          </a>
        </div>
      </div>
    </header>
  )
}

