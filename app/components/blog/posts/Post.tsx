import Image from 'next/image'
import Tag from '@/components/common/Tag'
import { Icon } from '@iconify/react'

interface IPostProps {
  post: {
    data: {
      title: string
      category: string
      date: string
      headerImg: string
      slug: string
    }
    content: string
  }
}

export default function Post({ post }: IPostProps) {
  return (
    <div className='relative group flex flex-col items-center w-full gap-5 rounded-md h-auto border-[1px] pb-2'>
      <Image
        src={post.data.headerImg}
        alt={post.data.title}
        width={400}
        height={250}
        className='w-full h-60 object-fit rounded-lg'
      />
      <Tag size='big' name={post.data.category} />
      <h2 className='font-bold text-size-medium-title text-[#5F6F52]'>
        {post.data.title}
      </h2>
      <div className='flex items-center gap-2'>
        <Icon icon='uiw:date' className='w-4 h-4' />
        <span className='font-bold text-size-subbody text-medium-gray-color'>
          {post.data.date}
        </span>
      </div>
      <div className='absolute rounded-lg flex flex-col items-center gap-3 justify-center w-full h-full opacity-0 group-hover:opacity-100 bg-[#323232]'>
        <h3 className='text-base text-white text-bold'>{post.data.title}</h3>
        <button className='hover:bg-white hover:text-black w-2/3 border-[1px] text-bold border-white p-3 text-white border-solid rounded-lg'>
          상세보기
        </button>
      </div>
    </div>
  )
}
