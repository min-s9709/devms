import React from 'react'

interface TitleProps {
  children: string
}

export default function Title({ children }: TitleProps) {
  return (
    <h2 className='mb-8 text-4xl font-bold underline underline-offset-8'>
      {children}
    </h2>
  )
}
