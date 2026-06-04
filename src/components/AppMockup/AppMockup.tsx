import { Scissors, ArrowRight, CheckCircle } from 'lucide-react'
import { useLocale } from '@hooks'

const AppMockup = () => {
  const { strings } = useLocale()
  const t = strings.mockup

  return (
    <div className="relative w-full max-w-[420px] animate-float">
      <div className="absolute -inset-12 bg-primary/8 blur-3xl rounded-full pointer-events-none" />

      <div className="relative bg-[#161A22] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">

        <div className="flex items-center gap-3 px-4 py-3 bg-[#0D1117] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
          </div>
          <div className="flex-1 flex justify-center items-center gap-1.5">
            <Scissors className="w-3 h-3 text-primary/70" />
            <span className="text-[11px] text-white/30 font-mono tracking-wider">{t.titleBar}</span>
          </div>
        </div>

        <div className="p-8 flex flex-col items-center gap-5">

          <div className="w-14 h-14 rounded-full bg-success/10 border border-success/25 flex items-center justify-center">
            <CheckCircle className="w-7 h-7 text-success" />
          </div>

          <div className="text-center">
            <p className="text-[10px] font-mono text-white/25 mb-1 tracking-widest">{t.filename}</p>
            <h3 className="font-display text-2xl text-white tracking-wider">{t.ready}</h3>
          </div>

          <div className="w-full bg-[#0D1117] rounded-xl p-5 flex items-center justify-between gap-3">
            <div className="text-center">
              <p className="text-[9px] font-mono text-white/25 mb-2 tracking-[0.15em]">{t.beforeLabel}</p>
              <p className="font-display text-3xl text-white/45 tracking-wide">{t.beforeTime}</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ArrowRight className="w-5 h-5 text-primary" />
              <span className="text-[8px] font-mono text-primary/40 tracking-[0.12em]">{t.aiCutLabel}</span>
            </div>
            <div className="text-center">
              <p className="text-[9px] font-mono text-primary/50 mb-2 tracking-[0.15em]">{t.afterLabel}</p>
              <p className="font-display text-3xl text-primary tracking-wide">{t.afterTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Scissors className="w-3 h-3 text-primary/40" />
              <span className="text-[11px] font-mono text-white/35">{t.cuts}</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-[11px] font-mono text-primary/55">{t.shorter}</span>
          </div>

          <div className="flex gap-2 w-full">
            <button className="flex-1 py-2.5 text-[10px] font-mono tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/15 transition-colors">
              {t.openFolder}
            </button>
            <button className="flex-1 py-2.5 text-[10px] font-mono tracking-widest text-white/30 bg-white/5 border border-white/8 rounded-lg hover:bg-white/8 transition-colors">
              {t.editAnother}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppMockup
