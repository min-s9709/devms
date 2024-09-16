'use client'

import { motion } from 'framer-motion'
import IconGroups from '@/components/Icons/IconGroups'
import TypingEffect from '@/components/home/profile/TypingEffect'
import { Icon } from '@iconify/react'
import Image from 'next/image'

export default function ProfileCard() {
  return (
    <>
      <TypingEffect
        text='안녕하세요, 프론트엔드 개발자 김민성 입니다.'
        speed={100}
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='flex flex-col items-center justify-center gap-3'
      >
        <Image
          src='/images/profile.jpeg'
          alt='profile-image'
          width={180}
          height={180}
          className='rounded-full'
        />
        <div className='text-center w-fit bg-c-green-color rounded-xl'>
          <h3 className='px-2 py-1 text-base font-bold text-c-light-color'>
            @ 김민성
          </h3>
        </div>
        <p className='font-bold text-size-body text-dark-gray-color'>
          사용자에게 즐거운 경험을 제공할 수 있는 FE 개발자를 지향합니다.
        </p>
        <IconGroups />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className='absolute w-10 h-10 p-2 mt-20 rounded-full bottom-4 animate-bounce bg-light-gray-color'
        >
          <Icon icon='icomoon-free:arrow-down2' className='w-6 h-6 ' />
        </motion.div>
      </motion.div>
    </>
  )
}
