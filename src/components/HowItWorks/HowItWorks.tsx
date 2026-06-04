import { Upload, Sparkles, PackageCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLocale } from '@hooks'

const icons: LucideIcon[] = [Upload, Sparkles, PackageCheck]

export const HowItWorks = () => {
  const { strings } = useLocale()
  const t = strings.howItWorks

  return (
    <section id="how-it-works" className="py-28 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16 flex flex-col gap-3">
          <span className="text-[11px] font-mono text-primary/60 tracking-[0.2em]">{t.tag}</span>
          <h2 className="font-display text-5xl text-foreground">{t.title}</h2>
          <p className="text-sm font-mono text-muted-foreground max-w-md leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-transparent via-border to-transparent pointer-events-none" />

          {t.steps.map((step, i) => {
            const Icon = icons[i] ?? Upload
            return (
              <div
                key={step.number}
                className="relative flex flex-col gap-5 p-6 rounded-xl border border-border bg-card group hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-display text-5xl text-white/6 select-none">{step.number}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl text-foreground tracking-wider">{step.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

