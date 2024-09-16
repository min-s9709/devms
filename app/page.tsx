import Section from '@/components/home/section/Section'
import ProfileCard from '@/components/home/profile/ProfileCard'
import About from '@/components/home/about/About'
import HomeProject from '@/components/home/project/HomeProject'

export default function Home() {
  return (
    <div className='w-full mx-auto'>
      <Section type='main'>
        <ProfileCard />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <HomeProject />
      </Section>
      <Section>
        <div></div>
      </Section>
    </div>
  )
}
