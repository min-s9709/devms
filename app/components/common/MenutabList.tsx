import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const menuTabs = [
  { icon: 'gridicons:posts', href: '/blog', name: 'Blog' },
  { icon: 'ph:user', href: '/resume', name: 'Resume' },
  { icon: 'bytesize:portfolio', href: '/portfolio', name: 'Portfolio' },
]

export default function MenutabList() {
  return (
    <ul className={'absolute -left-10 mt-2 py-2 px-3 rounded-lg bg-[#EEEFF1]'}>
      {menuTabs.map((menu, index) => (
        <li
          key={index}
          className={
            'flex items-center gap-2 px-1 py-2 hover:opacity-40 text-[14px]'
          }
        >
          <Icon icon={menu.icon} className={'w-5 h-5'} />
          <Link href={menu.href}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  )
}
