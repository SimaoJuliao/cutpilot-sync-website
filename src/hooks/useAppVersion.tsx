import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { APP_VERSION } from '@lib'

const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO as string | undefined
const LATEST_API  = GITHUB_REPO
  ? `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`
  : undefined

interface VersionCtxValue {
  version: string | undefined
  loading: boolean
}

const VersionContext = createContext<VersionCtxValue>({ version: APP_VERSION, loading: true })

export const VersionProvider = ({ children }: { children: ReactNode }) => {
  const [version, setVersion] = useState<string | undefined>(APP_VERSION)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!LATEST_API) {
      setLoading(false)
      return
    }
    fetch(LATEST_API)
      .then(r => r.json())
      .then((data: { tag_name?: string }) => {
        const tag = data?.tag_name
        if (typeof tag === 'string' && tag.length > 0) {
          setVersion(tag.replace(/^v/, ''))
        }
      })
      .catch(() => { /* mantém o fallback */ })
      .finally(() => setLoading(false))
  }, [])

  return <VersionContext.Provider value={{ version, loading }}>{children}</VersionContext.Provider>
}

const useAppVersion = () => useContext(VersionContext)

export default useAppVersion
