import { Scissors } from 'lucide-react'
import { useLocale } from '@hooks'

const Footer = () => {
  const { strings } = useLocale()
  const t = strings.footer

  return (
    <footer className="border-t border-border bg-[#0D1117]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Scissors className="w-4 h-4 text-primary/60" />
          <span className="font-display text-lg text-white/40 tracking-widest">{t.logo}</span>
        </div>
        <p className="text-[11px] font-mono text-white/20 tracking-wider">{t.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
