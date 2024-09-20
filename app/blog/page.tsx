import { getAllCategories, getAllPosts } from '@/lib/post'
import Section from '@/components/blog/section/Section'
import CategoryHeader from '@/components/blog/category/CategoryHeader'
import CategoryList from '@/components/blog/category/CategoryList'
import PostsList from '@/components/blog/posts/PostsList'

export default async function Blog({
  params: { category },
}: {
  params: { category?: string }
}) {
  const posts = await getAllPosts()
  const categoryList = await getAllCategories()
  return (
    <Section>
      <CategoryHeader category={category} count={posts.length} />
      <CategoryList list={categoryList} category={category} />
      <PostsList posts={posts} />
    </Section>
  )
}
