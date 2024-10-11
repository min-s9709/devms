import { getPostDetail, getPreviousNext, getToc } from '@/lib/post'
import Section from '@/components/blog/section/Section'
import PostHeader from '@/components/blog/posts/PostHeader'
import PostBody from '@/components/blog/posts/PostBody'
import PostProfile from '@/components/blog/posts/PostProfile'
import PostNavigator from '@/components/blog/posts/PostNavigator'
import TableOfContent from '@/components/blog/posts/TableOfContent'

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
  const toc = getToc(content)
  return (
    <Section type='small'>
      <PostHeader title={title} category={category} date={date} />
      <article className='relative'>
        <TableOfContent toc={toc} />
        <PostBody content={content} />
      </article>
      <PostProfile />
      <PostNavigator previous={previous} next={next} category={category} />
    </Section>
  )
}
