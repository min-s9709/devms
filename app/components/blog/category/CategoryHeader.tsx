interface ICategoryHeader {
  category?: string
  count: number
}

export default function CategoryHeader({ category, count }: ICategoryHeader) {
  return (
    <div className='w-full border-b-[1px] p-2'>
      <div className='flex justify-center'>
        <h1 className='text-size-big-title mr-4'>
          {category === undefined ? 'ALL' : category}
        </h1>
        <h1 className='text-size-big-title text-[#DA0909]'>{count}</h1>
      </div>
    </div>
  )
}
