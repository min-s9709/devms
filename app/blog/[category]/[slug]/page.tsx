import { getPostDetail, getPreviousNext } from '@/lib/post'
import Section from '@/components/blog/section/Section'
import PostHeader from '@/components/blog/posts/PostHeader'
import PostBody from '@/components/blog/posts/PostBody'
import PostProfile from '@/components/blog/posts/PostProfile'
import PostNavigator from '@/components/blog/posts/PostNavigator'

interface IPostDetailPageProps {
  params: {
    category: string
    slug: string
  }
}

export default async function PostDetail({
  params: { slug },
}: IPostDetailPageProps) {
  const post = await getPostDetail(slug)
  const { previous, next } = await getPreviousNext(slug)
  const { title, category, date, content } = post

  return (
    <Section>
      <PostHeader title={title} category={category} date={date} />
      <PostBody content={content} />
      <PostProfile />
      <PostNavigator previous={previous} next={next} category={category} />
    </Section>
  )
}
