import Section from '@/components/home/section/Section'
import About from '@/components/home/about/About'
import HomeProject from '@/components/home/project/HomeProject'
import HomeRecentPosts from '@/components/home/posts/HomeRecentPosts'
import Intro from '@/components/home/intro/Intro'

export default async function Home() {
  return (
    <div className='w-full mx-auto'>
      <Section type='main'>
        <Intro />
      </Section>
      <Section id='about'>
        <About />
      </Section>
      <Section id='projects'>
        <HomeProject />
      </Section>
      <Section id='posts'>
        <HomeRecentPosts />
      </Section>
    </div>
  )
}
