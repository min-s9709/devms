import { useState } from 'react'
import Tag from '@/components/common/Tag'
import Image from 'next/image'

interface IProjectCardProps {
  data: {
    title: string
    content: string
    tag: string[]
    img: string
  }
}

export default function ProjectCard({ data }: IProjectCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <div className='relative group flex flex-col items-center w-full gap-5 rounded-md h-auto border-[1px] pb-2'>
        <Image
          src={data.img}
          alt={data.title}
          width={400}
          height={250}
          className='w-full h-60 object-fit rounded-lg'
        />
        <h2 className='font-bold text-size-medium-title text-[#5F6F52]'>
          {data.title}
        </h2>
        <span className='px-3 font-bold text-size-subbody min-h-[36px] text-medium-gray-color line-clamp-2'>
          {data.content}
        </span>
        <div className='flex justify-start w-full gap-3 px-3'>
          {data.tag.map((item, index) => (
            <Tag key={index} size='small' name={item} />
          ))}
        </div>
        <div className='absolute rounded-lg flex flex-col items-center gap-3 justify-center w-full h-full opacity-0 group-hover:opacity-100 bg-[#323232]'>
          <h3 className='text-base text-white text-bold'>{data.title}</h3>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className='hover:bg-white hover:text-black w-2/3 border-[1px] text-bold border-white p-3 text-white border-solid rounded-lg'
          >
            상세보기
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-5'>
          <div className='absolute inset-0 bg-black opacity-70'></div>
          <div className='z-30 w-3/4 h-full bg-white rounded-lg'></div>
        </div>
      )}
    </>
  )
}
