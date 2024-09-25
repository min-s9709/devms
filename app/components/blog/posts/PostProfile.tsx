import Image from 'next/image'
import IconGroups from '@/components/Icons/IconGroups'

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
        <IconGroups />
      </div>
    </div>
  )
}
