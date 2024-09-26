'use client'

import Post from '@/components/blog/posts/Post'
import { PostType } from '@/type'
import { motion } from 'framer-motion'

interface IRecentPostsListProps {
  posts: PostType[]
}

export default function RecentPostsList({ posts }: IRecentPostsListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ ease: 'easeInOut', y: { duration: 0.5 }, duration: 1.3 }}
      className='grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1'
    >
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </motion.div>
  )
}
