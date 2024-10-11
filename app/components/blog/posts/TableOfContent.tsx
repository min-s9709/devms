'use client'

import { useTableObserver } from '@/hooks/useTableObserver'
import Link from 'next/link'
import clsx from 'clsx'

interface ITableOfContentProps {
  toc?: {
    text: string
    link: string
    indent: number
  }[]
}

export default function TableOfContent({ toc }: ITableOfContentProps) {
  const activeIdList = useTableObserver('h2, h3')

  return (
    <div className='fixed right-32 max-xl:hidden z-10'>
      <ul className='text-sm border-l px-3'>
        {toc?.map((item, index) => {
          const isH3 = item.indent === 1
          const isIntersecting = activeIdList.includes(item.link)
          return (
            <li
              className={clsx(
                'text-[#374151] mb-2',
                isH3 && 'ml-2',
                isIntersecting && 'font-medium text-[#ff5e2e]',
                'py-1 transition',
              )}
              key={index}
            >
              <Link
                href={item.link} // 기본 href 설정
              >
                {item.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
