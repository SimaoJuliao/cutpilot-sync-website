import { useState, useEffect, useRef } from 'react'

export interface UseNavbarReturn {
  scrolled:    boolean
  langOpen:    boolean
  setLangOpen: (v: boolean) => void
  langRef:     React.RefObject<HTMLDivElement>
}

const useNavbar = (): UseNavbarReturn => {
  const [scrolled, setScrolled]   = useState(false)
  const [langOpen, setLangOpen]   = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    if (!langOpen) return
    const onMouseDown = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [langOpen])

  return { scrolled, langOpen, setLangOpen, langRef }
}

export default useNavbar
