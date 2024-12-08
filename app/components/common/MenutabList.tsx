import React from 'react'
import Link from 'next/link'

const menuTabs = [
  { href: '/#about', name: 'About' },
  { href: '/#projects', name: 'Projects' },
  { href: '/#posts', name: 'Posts' },
]

export default function MenutabList() {
  return (
    <ul className='absolute -left-10 mt-2 py-2 px-3 rounded-lg bg-[#EEEFF1]'>
      {menuTabs.map((menu, index) => (
        <li
          key={index}
          className='flex items-center gap-2 px-1 py-2 hover:opacity-40 text-[14px]'
        >
          <span>📌 </span>
          <Link href={menu.href}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  )
}
