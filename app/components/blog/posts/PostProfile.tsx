import Image from 'next/image'
import Link from 'next/link'
import {
  BlogIcon,
  GithubIcon,
  MailIcon,
  ResumeIcon,
} from '@/components/Icons/Icons'

export default function PostProfile() {
  return (
    <div className={'flex w-full gap-5 pb-10'}>
      <Image
        className='rounded-full'
        width={180}
        height={180}
        src='/images/profile.jpeg'
        alt='profile'
      />
      <div className={'flex flex-col justify-between'}>
        <h1 className={'text-size-big-title font-bold'}>김민성</h1>
        <p className={'text-size-body text-dark-gray-color'}>
          사용자에게 즐거운 경험을 제공할 수 있는 FE 개발자를 지향합니다.
        </p>
        <div className='flex gap-3'>
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
        </div>
      </div>
    </div>
  )
}
