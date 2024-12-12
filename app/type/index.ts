export type PostType = {
  data: {
    title: string
    category: string
    date: string
    headerImg: string
    slug: string
  }
  content: string
}

export type ProjectDataType = {
  id: string
  tab: string
  title: string
  content: string
  tag: string[]
  img: string
}
