import { useAppVersion } from '@hooks'

const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO as string | undefined
const RELEASES    = GITHUB_REPO
  ? `https://github.com/${GITHUB_REPO}/releases`
  : undefined

export type PlatformId = 'windows' | 'macos' | 'linux'

export const platformIds: PlatformId[] = ['windows', 'macos', 'linux']

const useDownload = () => {
  const { version, loading } = useAppVersion()

  const platformUrls: Record<PlatformId, string | undefined> = {
    windows: RELEASES && version ? `${RELEASES}/latest/download/CutPilot-Sync-Setup-${version}.exe` : undefined,
    macos:   RELEASES && version ? `${RELEASES}/latest/download/CutPilot-Sync-${version}-arm64.dmg`  : undefined,
    linux:   RELEASES && version ? `${RELEASES}/latest/download/CutPilot-Sync-${version}.AppImage`   : undefined,
  }

  const detectedOS = ((): PlatformId => {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.includes('win')) return 'windows'
    if (ua.includes('mac')) return 'macos'
    return 'linux'
  })()

  return { detectedOS, platformUrls, version, loading }
}

export default useDownload
