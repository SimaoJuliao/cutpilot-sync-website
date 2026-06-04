import { Video, Sparkles, Monitor, UserCheck, Shield, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLocale } from '@hooks'

const icons: LucideIcon[] = [Video, Sparkles, Monitor, UserCheck, Shield, Zap]

export const Features = () => {
  const { strings } = useLocale()
  const t = strings.features

  return (
    <section id="features" className="py-28 relative">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="mb-16 flex flex-col gap-3">
          <span className="text-[11px] font-mono text-primary/60 tracking-[0.2em]">{t.tag}</span>
          <h2 className="font-display text-5xl text-foreground">{t.title}</h2>
          <p className="text-sm font-mono text-muted-foreground max-w-md leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((item, i) => {
            const Icon = icons[i] ?? Video
            return (
              <div
                key={item.title}
                className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card/50 hover:border-primary/25 hover:bg-card transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-lg text-foreground tracking-wider">{item.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

