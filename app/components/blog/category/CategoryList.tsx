import Category from '@/components/blog/category/Category'

interface ICategoryListProps {
  list: string[]
  category?: string
}

export default function CategoryList({ list, category }: ICategoryListProps) {
  return (
    <div className={'w-full flex justify-start py-4 overflow-x-scroll'}>
      {category ? (
        <Category isSelected={false} />
      ) : (
        <Category isSelected={true} />
      )}
      {list.map((c) => (
        <Category key={c} category={c} isSelected={c === category} />
      ))}
    </div>
  )
}
