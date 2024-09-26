import Navbutton from '@/components/common/NavButton'
import Title from '@/components/common/Title'
import RecentPostsList from '@/components/home/posts/RecentPostsList'
import { getRecentPosts } from '@/lib/post'

export default async function HomeRecentPosts() {
  const posts = await getRecentPosts()

  return (
    <>
      <Title>Posts</Title>
      <Navbutton content='다른 포스트 보러가기' destination='/blog' />
      <RecentPostsList posts={posts} />
    </>
  )
}
