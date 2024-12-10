import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  return (
    <div>
      <Skeleton className='w-[400px] h-[400px]' />
      <div className='mt-5'>
        <Skeleton className='h-5 mb-5' count={5} />
      </div>
    </div>
  )
}
