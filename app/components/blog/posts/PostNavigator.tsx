import Link from 'next/link'

interface IPostNavigatorProps {
  previous: {
    title?: string
    slug?: string
  }
  next: {
    title?: string
    slug?: string
  }
  category: string
}

export default function PostNavigator({
  previous,
  next,
  category,
}: IPostNavigatorProps) {
  return (
    <div className='grid grid-cols-2 gap-3 w-full pb-9'>
      <div className='w-full mr-auto'>
        {previous.slug && (
          <Link
            href={`/blog/${category}/${previous.slug}`}
            className={
              'flex flex-col w-full h-24 border-[1px] bg-[#F7F8FA] hover:bg-[#EEEFF1] rounded-md p-3'
            }
          >
            <h2 className={'text-dark-gray-color'}>이전 포스트</h2>
            <h2 className={'line-clamp-2'}>{previous.title}</h2>
          </Link>
        )}
      </div>
      <div className='w-full ml-auto'>
        {next.slug && (
          <Link
            className='flex flex-col w-full h-24 border-[1px] bg-[#F7F8FA] hover:bg-[#EEEFF1] rounded-md p-3'
            href={`/blog/${category}/${next.slug}`}
          >
            <h2 className='text-dark-gray-color'>다음 포스트</h2>
            <h2 className='line-clamp-2'>{next.title}</h2>
          </Link>
        )}
      </div>
    </div>
  )
}
