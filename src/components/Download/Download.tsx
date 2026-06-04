import { useState } from 'react'
import { Download as DownloadIcon, CheckCircle2, Copy, Check } from 'lucide-react'
import { cn } from '@lib'
import { useLocale } from '@hooks'
import useDownload, { platformIds } from './useDownload'
import type { PlatformId } from './useDownload'

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden>
    <path d="M0 0h11v11H0V0zm13 0h11v11H13V0zM0 13h11v11H0V13zm13 0h11v11H13V13z" />
  </svg>
)

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden>
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
)

const LinuxIcon = () => (
  <span className="text-2xl leading-none select-none" aria-hidden>🐧</span>
)

const CopyCommand = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-black/30 border border-white/10 hover:border-primary/30 transition-colors group"
    >
      <code className="text-[10px] font-mono text-primary/70 truncate">{command}</code>
      <span className="shrink-0 text-white/30 group-hover:text-primary/60 transition-colors">
        {copied
          ? <Check className="w-3 h-3 text-primary" />
          : <Copy className="w-3 h-3" />
        }
      </span>
    </button>
  )
}

const OsIcon = ({ id }: { id: PlatformId }) => {
  if (id === 'windows') return <WindowsIcon />
  if (id === 'macos')   return <AppleIcon />
  return <LinuxIcon />
}

export const Download = () => {
  const { strings } = useLocale()
  const { detectedOS, platformUrls, version, clickedOS, handleDownload } = useDownload()
  const t = strings.download

  return (
    <section id="download" className="py-28 bg-[#0D1117] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-10">

        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center">
          <DownloadIcon className="w-7 h-7 text-primary" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-display text-5xl md:text-6xl text-foreground">{t.title}</h2>
          {version && <p className="text-xs font-mono text-muted-foreground tracking-widest">v{version}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {platformIds.map((id) => {
            const url          = platformUrls[id]
            const isDetected   = id === detectedOS
            const isClicked    = id === clickedOS
            const platformText = t.platforms[id]
            const guide        = t.installGuide.platforms[id]
            if (!url) return null

            if (isClicked) {
              return (
                <div
                  key={id}
                  className="animate-fade-up-in flex flex-col gap-4 p-6 rounded-xl border border-primary bg-primary/10 shadow-[0_0_40px_-8px_hsl(38_100%_63%_/0.35)]"
                >
                  {/* OS icon + header */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-primary opacity-80"><OsIcon id={id} /></span>
                    <div className="flex items-center gap-1.5 text-primary">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span className="font-display text-xl tracking-widest">{t.installGuide.started}</span>
                    </div>
                  </div>

                  <div className="border-t border-primary/20" />

                  {/* Reason */}
                  <p className="text-[10px] font-mono text-white/40 leading-relaxed text-center">
                    {t.installGuide.reason}
                  </p>

                  {/* Warning label */}
                  <p className="text-[10px] font-mono text-primary/70 tracking-widest text-center">
                    {guide.warning}
                  </p>

                  {/* Steps */}
                  <ol className="flex flex-col gap-2.5">
                    {guide.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-[9px] font-mono text-primary font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-[11px] font-mono text-foreground/70 leading-relaxed text-left">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>

                  {/* Copyable command */}
                  {guide.command && <CopyCommand command={guide.command} />}

                  {/* Download again */}
                  <a
                    href={url}
                    onClick={(e) => { e.preventDefault(); window.location.href = url }}
                    className="text-[10px] font-mono text-primary/40 hover:text-primary/70 transition-colors tracking-widest text-center mt-auto pt-1 border-t border-primary/10 pt-3"
                  >
                    {t.installGuide.downloadAgain}
                  </a>
                </div>
              )
            }

            return (
              <a
                key={id}
                href={url}
                onClick={(e) => { e.preventDefault(); handleDownload(id, url) }}
                className={cn(
                  'flex flex-col items-center gap-3 p-6 rounded-xl border transition-all duration-300',
                  isDetected
                    ? 'border-primary/50 bg-primary/8 hover:bg-primary/12'
                    : 'border-border bg-card/50 hover:border-primary/25 hover:bg-card'
                )}
              >
                <OsIcon id={id} />
                <div className="flex flex-col items-center gap-1">
                  <span className={cn('font-display text-2xl tracking-wider', isDetected ? 'text-primary' : 'text-foreground')}>
                    {platformText.label}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-widest">
                    {platformText.sublabel}
                  </span>
                </div>
                <span className={cn(
                  'text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-md border',
                  isDetected
                    ? 'text-primary border-primary/30 bg-primary/10'
                    : 'text-muted-foreground border-border bg-muted/30'
                )}>
                  {platformText.ext}
                </span>
                {isDetected && (
                  <span className="text-[9px] font-mono text-primary/60 tracking-[0.15em]">
                    {t.recommended}
                  </span>
                )}
              </a>
            )
          })}
        </div>

        <p className="text-[11px] font-mono text-white/20 max-w-sm leading-relaxed">{t.note}</p>
      </div>
    </section>
  )
}
