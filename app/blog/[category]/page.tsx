import CategoryHeader from '@/components/blog/category/CategoryHeader'
import CategoryList from '@/components/blog/category/CategoryList'
import PostsList from '@/components/blog/posts/PostsList'
import Section from '@/components/blog/section/Section'
import { getAllCategories, getCategoryPosts } from '@/lib/post'

export default async function CategoryPage({
  params: { category },
}: {
  params: { category: string }
}) {
  const posts = await getCategoryPosts(category)
  const categoryList = await getAllCategories()
  return (
    <Section>
      <CategoryHeader category={category} count={posts.length} />
      <CategoryList list={categoryList} category={category} />
      <PostsList posts={posts} />
    </Section>
  )
}
