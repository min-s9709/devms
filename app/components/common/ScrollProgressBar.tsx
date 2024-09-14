'use client'

import React, { useCallback, useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const [widthPercet, setWidthPercent] = useState(0)

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    const percent = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100)
    setWidthPercent(percent)
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div className={'w-full h-1 fixed top-16 left-0 right-0 bg-inherit z-10'}>
      <div
        className={'h-full bg-[#ff5e2e]'}
        style={{ width: widthPercet + '%' }}
      />
    </div>
  )
}
