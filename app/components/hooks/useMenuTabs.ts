'use client'

import { useEffect, useRef, useState } from 'react'

export default function useMenuTabs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return { isMenuOpen, handleMenuClick, menuRef }
}
