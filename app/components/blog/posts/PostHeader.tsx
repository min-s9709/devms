import { Icon } from '@iconify/react'
import Link from 'next/link'

interface IPostHeaderProps {
  title: string
  category: string
  date: string
}

export default function PostHeader({
  title,
  category,
  date,
}: IPostHeaderProps) {
  return (
    <div
      className={
        'w-full flex flex-col items-center justify-center mb-3 gap-3 py-3 border-b-[1px]'
      }
    >
      <h1 className={'text-3xl font-extrabold mb-2'}>{title}</h1>
      <div className='flex items-center justify-center gap-2'>
        <Icon icon='uiw:date' className='w-4 h-4' />
        <h3 className={'text-base text-dark-gray-color'}>{date}</h3>
      </div>
      <Link href={`/blog/${category}`}>
        <div className={`w-fit bg-c-light-color text-center rounded-xl`}>
          <h3 className={`px-2 py-1 text-c-green-color text-base`}>
            {category}
          </h3>
        </div>
      </Link>
    </div>
  )
}
