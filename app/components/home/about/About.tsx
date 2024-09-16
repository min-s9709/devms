import Title from '@/components/common/Title'
import Tag from '@/components/common/Tag'
import Navbutton from '@/components/common/NavButton'
import { aboutData } from '@/data/introduce'
import Introduce from '@/components/home/about/Introduce'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Title>About Me</Title>
      <div className='grid grid-cols-2 max-lg:grid-cols-1'>
        <div className='flex flex-col items-center w-full gap-5'>
          <Image
            src='/images/homeprofile.png'
            alt='home-profile'
            width={240}
            height={240}
            className='rounded-full'
          />
          <div className='flex gap-5'>
            {aboutData.tag.map((name, index) => (
              <Tag key={index} size='big' name={name} />
            ))}
          </div>
          <Navbutton destination='/resume' content='이력서 보러가기' />
        </div>
        <div className='flex flex-col justify-center gap-2 max-lg:mt-8'>
          {aboutData.introduce.map((item, index) => (
            <Introduce
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-6 mt-6'>
        <h2 className='text-2xl font-bold'>Skill&Tool</h2>
        <div className='grid w-full grid-cols-2'>
          <div className='flex gap-3'>
            {aboutData.stacks.skills.map((item) => (
              <Image
                key={item.name}
                src={item.src}
                width={40}
                height={40}
                alt={item.name}
              />
            ))}
          </div>
          <div className='flex gap-3'>
            {aboutData.stacks.tools.map((item) => (
              <Image
                key={item.name}
                src={item.src}
                width={40}
                height={40}
                alt={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
