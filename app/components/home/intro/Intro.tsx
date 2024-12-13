'use client'

import {
  BlogIcon,
  GithubIcon,
  LinkIcon,
  MailIcon,
  ResumeIcon,
} from '@/components/Icons/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Intro() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <div className='p-4 md:px-10 md:py-8'>
      <h2 className='text-size-medium-title py-3 font-semibold'>
        김민성 ﹒ Frontend-Developer{' '}
      </h2>
      <div className='flex gap-8 border-t-[1px] py-5'>
        <div className='flex flex-col gap-6'>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='font-medium text-[#464646] max-sm:text-[14px]'
          >
            <strong>
              <span className='text-[#1290ff] text-size-medium-title max-sm:text-base'>
                복잡함
              </span>
            </strong>
            은 내부에서 처리되고, 사용자에게는{' '}
            <strong>
              <span className='text-[#1290ff] text-size-medium-title max-sm:text-base'>
                단순함
              </span>
            </strong>
            을 경험하게 하는 것을 중요하게 생각합니다.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className='font-medium text-[#464646] max-sm:text-[14px]'
          >
            사용자에게{' '}
            <strong>
              <span className='text-[#1290ff] text-size-medium-title max-sm:text-base'>
                즐거운 경험
              </span>
            </strong>
            을 제공하는 개발자가 되고자 합니다.
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className='flex gap-3'
          >
            <a
              href='mailto:mim970929@gmail.com'
              className='relative group rounded p-1 hover:bg-light-gray-color'
            >
              <MailIcon />
              <span className='absolute px-2 py-1 -left-2 bg-dark-gray-color rounded text-light-gray-color mt-2 opacity-0 group-hover:opacity-100 text-size-subbody'>
                Mail
              </span>
            </a>
            <a
              href='https://github.com/min-s9709'
              target='_blank'
              className='relative group rounded p-1 hover:bg-light-gray-color'
            >
              <GithubIcon />
              <span className='absolute px-2 py-1 -left-2 bg-dark-gray-color rounded text-light-gray-color mt-2 opacity-0 group-hover:opacity-100 text-size-subbody'>
                Github
              </span>
            </a>
            <a
              href='https://closed-owl-1e3.notion.site/f2587b1071d042128da6733320b6a9f3'
              target='_blank'
              className='relative group rounded p-1 hover:bg-light-gray-color'
            >
              <ResumeIcon />
              <span className='absolute px-2 py-1 -left-2 bg-dark-gray-color rounded text-light-gray-color mt-2 opacity-0 group-hover:opacity-100 text-size-subbody'>
                Resume
              </span>
            </a>
            <Link
              href='/blog'
              className='relative group rounded p-1 hover:bg-light-gray-color'
            >
              <BlogIcon />
              <span className='absolute px-2 py-1 -left-2 bg-dark-gray-color rounded text-light-gray-color mt-2 opacity-0 group-hover:opacity-100 text-size-subbody'>
                Blog
              </span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Image
            src='/images/profile.jpeg'
            alt='profile-image'
            width={180}
            height={180}
            className='rounded-2xl max-sm:w-[150px] max-sm:h-[150px]'
          />
        </motion.div>
      </div>
      <div className='flex gap-7 mt-4 max-sm:flex-col max-sm:items-center'>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className='text-size-medium-title font-bold'
        >
          Contents
        </motion.h2>
        <div className='flex flex-col gap-2'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className='flex gap-5 items-center'
          >
            <button
              onClick={() => scrollToSection('about')}
              className='flex items-center gap-1 font-semibold text-size-medium-title rounded p-1 hover:bg-light-gray-color'
            >
              <LinkIcon />
              소개
            </button>
            <span className='font-light text-[#464646]'>
              개발자 김민성을 소개하는 공간
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className='flex gap-5 items-center'
          >
            <button
              onClick={() => scrollToSection('projects')}
              className='flex items-center gap-1 font-semibold text-size-medium-title rounded p-1 hover:bg-light-gray-color'
            >
              <LinkIcon />
              창작
            </button>
            <span className='font-light text-[#464646]'>
              프로젝트 및 개발의 결과물들을 담은 공간
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.1 }}
            className='flex gap-5 items-center'
          >
            <button
              onClick={() => scrollToSection('posts')}
              className='flex items-center justify-center gap-1 font-semibold text-size-medium-title rounded p-1 hover:bg-light-gray-color'
            >
              <LinkIcon />
              책장
            </button>
            <span className='font-light text-[#464646]'>
              개발하면서 겪는 이야기들을 담은 공간
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
