import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

interface IContentProps {
  content: string
}
export default function PostBody({ content }: IContentProps) {
  return (
    <div className='prose max-w-none prose-a:text-sky-600 prose-pre:border-[1px] pb-10 '>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [
              [rehypePrettyCode, { theme: 'github-light' }],
              rehypeSlug,
            ],
          },
        }}
      />
    </div>
  )
}
