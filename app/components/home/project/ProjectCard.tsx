'use client'

import { useState } from 'react'
import Tag from '@/components/common/Tag'
import Image from 'next/image'
import { ExtendedRecordMap } from 'notion-types'
import { getData } from '@/lib/notion'
import Renderer from '@/components/notion/Renderer'
import useModal from '@/hooks/useModal'
import Modal from '@/components/common/Modal'

interface IProjectCardProps {
  data: {
    id: string
    title: string
    content: string
    tag: string[]
    img: string
  }
}

export default function ProjectCard({ data }: IProjectCardProps) {
  const { isOpen, setIsOpen, handleModalClose, modalRef } = useModal()
  const [projectData, setProjectData] = useState<ExtendedRecordMap | undefined>(
    undefined,
  )
  const handleModalOpen = async () => {
    setIsOpen(true)
    const pdata = await getData(data.id)
    if (pdata) {
      setProjectData(pdata)
    }
  }
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
        <div className='absolute transition ease-in-out duration-300 rounded-lg flex flex-col items-center gap-3 justify-center w-full h-full opacity-0 group-hover:opacity-90 bg-[#323232] '>
          <h3 className='text-base text-white text-bold'>{data.title}</h3>
          <button
            onClick={handleModalOpen}
            className='hover:bg-white hover:text-black w-2/3 border-[1px] text-bold border-white p-3 text-white border-solid rounded-lg'
          >
            상세보기
          </button>
        </div>
      </div>
      {isOpen && (
        <Modal modalRef={modalRef} handleModalClose={handleModalClose}>
          {projectData && <Renderer recordMap={projectData} />}
        </Modal>
      )}
    </>
  )
}
