import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

interface IprofileIconProps {
  item: {
    name: string
    path: string
    icon: string
  }
}

export default function EachIcon({ item }: IprofileIconProps) {
  return (
    <div key={item.name} className={'relative group'}>
      <Link href={item.path}>
        <Icon icon={item.icon} className={'w-8 h-8 cursor-pointer'} />
      </Link>
      <span className='absolute px-2 py-1 mt-1 text-sm rounded opacity-0 bg-dark-gray-color text-light-gray-color -left-2 group-hover:opacity-100'>
        {item.name}
      </span>
    </div>
  )
}
