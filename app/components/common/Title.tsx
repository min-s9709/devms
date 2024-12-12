import React from 'react'

interface TitleProps {
  children: string
}

export default function Title({ children }: TitleProps) {
  return (
    <h2 className='mb-4 text-4xl font-bold underline-offset-8'>
      📌 {children}
    </h2>
  )
}
