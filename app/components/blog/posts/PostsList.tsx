import Post from '@/components/blog/posts/Post'

interface IPostsListProps {
  posts: {
    data: {
      title: string
      category: string
      date: string
      slug: string
      headerImg: string
    }
    content: string
  }[]
}

export default function PostsList({ posts }: IPostsListProps) {
  return (
    <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-6'>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  )
}
