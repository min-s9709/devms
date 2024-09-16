'use client'

import { useEffect, useState } from 'react'

interface ITyping {
  text: string
  speed: number
}

export default function TypingEffect({ text, speed }: ITyping) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index])
        setIndex(index + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText('')
        setIndex(0)
      }, 1000)
      return () => clearTimeout(resetTimeout)
    }
  }, [index, displayedText, text, speed])

  return (
    <div className='font-mono text-xl text-wrap xl:text-3xl max-md:text-2xl max-sm:text-base'>
      {displayedText}
      <span className='animate-blink'>|</span>
    </div>
  )
}
