import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'

const postsDirectory = 'posts'

export const getAllPostsPath = () => {
  const paths: string[] = sync(`${postsDirectory}/**/*.mdx`)
  return paths
}

export const parsePost = (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8')
  const { data, content } = matter(file)
  return { data, content }
}

export const getAllPosts = async () => {
  const paths = getAllPostsPath()
  const allPostsData = await Promise.all(
    paths.map((postPath) => parsePost(postPath)),
  )
  return allPostsData
}

export const getCategoryPosts = async (category: string) => {
  const allPostsData = await getAllPosts()
  const filteredPosts = allPostsData.filter(
    (post) => post.data.category === category,
  )
  return filteredPosts
}

export const getAllCategories = async () => {
  const allposts = await getAllPosts()
  const categoryList = allposts.map((post) => post.data.category)
  const distinctCategoryList = [...new Set(categoryList)]

  return distinctCategoryList
}
