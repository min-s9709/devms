import { PostType } from '@/type'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import { formatDate } from '@/lib/util'

const postsDirectory = 'posts'

export const getAllPostsPath = () => {
  const paths: string[] = sync(`${postsDirectory}/**/*.mdx`)
  return paths
}

export const parsePost = async (postPath: string): Promise<PostType> => {
  const file = fs.readFileSync(postPath, 'utf8')
  const { data, content } = matter(file)
  return {
    data: {
      title: data.title,
      category: data.category,
      date: data.date,
      headerImg: data.headerImg,
      slug: data.slug,
    },
    content,
  }
}

export const getAllPosts = async () => {
  const paths = getAllPostsPath()
  const allPostsData = await Promise.all(
    paths.map((postPath) => parsePost(postPath)),
  )
  const sortedAllPosts = allPostsData.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  )
  return sortedAllPosts
}

export const getPostDetail = async (postPath: string) => {
  const post = await parsePost(`posts/${postPath}/${postPath}.mdx`)
  const { data, content } = post
  const date = formatDate(data.date)
  return { ...data, date, content }
}

export const getCategoryPosts = async (category: string) => {
  const allPostsData = await getAllPosts()
  const filteredAllPosts = allPostsData.filter(
    (post) => post.data.category === category,
  )
  return filteredAllPosts
}

export const getAllCategories = async () => {
  const allposts = await getAllPosts()
  const categoryList = allposts.map((post) => post.data.category)
  const distinctCategoryList = [...new Set(categoryList)]

  return distinctCategoryList
}

export const getPreviousNext = async (postPath: string) => {
  const allPosts = await getAllPosts()
  const targetIndex = allPosts.findIndex((post) => post.data.slug === postPath)
  const previous =
    targetIndex === allPosts.length - 1 ? null : allPosts[targetIndex + 1]

  const next = targetIndex === 0 ? null : allPosts[targetIndex - 1]

  return {
    previous: {
      title: previous?.data.title,
      slug: previous?.data.slug,
    },
    next: {
      title: next?.data.title,
      slug: next?.data.slug,
    },
  }
}

export const getRecentPosts = async () => {
  const allPosts = await getAllPosts()
  return allPosts.slice(0, 3)
}
