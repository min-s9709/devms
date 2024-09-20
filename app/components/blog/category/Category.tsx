import Link from 'next/link'

interface ICategoryProps {
  category?: string
  isSelected: boolean
}

export default function Category({ category, isSelected }: ICategoryProps) {
  return (
    <Link href={category ? `/blog/${category}` : '/blog'}>
      <div
        className={`w-fit mr-3 text-center rounded-xl ${
          isSelected ? 'bg-c-green-color' : 'bg-c-light-color'
        }`}
      >
        <h3
          className={`px-2 py-1 text-base ${
            isSelected ? 'text-c-light-color' : 'text-c-green-color'
          }`}
        >
          {category ? category : 'ALL'}
        </h3>
      </div>
    </Link>
  )
}
