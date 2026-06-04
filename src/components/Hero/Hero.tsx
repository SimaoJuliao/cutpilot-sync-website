import { Fragment } from 'react'
import { Scissors, ArrowRight } from 'lucide-react'
import { Button } from '@components/ui'
import { useLocale, useAppVersion } from '@hooks'
import AppMockup from '@components/AppMockup'

const Hero = () => {
  const { strings } = useLocale()
  const { version } = useAppVersion()
  const t = strings.hero
  const d = t.description

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-28 w-full flex flex-col lg:flex-row items-center gap-16">

        <div className="flex-1 flex flex-col gap-7 animate-fade-up">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/8 w-fit">
            <Scissors className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-mono text-primary tracking-widest">{t.badge}</span>
          </div>

          <h1 className="font-display text-6xl xl:text-7xl leading-[0.95] text-foreground">
            {t.line1}
            <br />
            <span className="text-gradient">{t.line2}</span>
          </h1>

          <p className="text-sm text-muted-foreground font-mono max-w-md leading-relaxed">
            {d.before}{' '}
            <span className="text-foreground/70">{d.aiHighlight}</span>{' '}
            {d.after}{' '}
            <span className="text-foreground/50">{d.note}</span>
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#download">
              <Button size="lg" className="tracking-widest text-xs font-semibold">{t.downloadCta}</Button>
            </a>
            <a href="#how-it-works">
              <Button size="lg" variant="secondary" className="tracking-widest text-xs">
                {t.learnCta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-white/20 tracking-widest">
            {[...t.platforms.slice(0, -1), ...(version ? [`v${version}`] : [])].map((label, i, arr) => (
              <Fragment key={label}>
                <span>{label}</span>
                {i < arr.length - 1 && (
                  <span className="text-primary/30">·</span>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <AppMockup />
        </div>
      </div>
    </section>
  )
}

export default Hero
