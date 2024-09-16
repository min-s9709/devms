import Link from 'next/link'

interface INavLink {
  destination: string
  content: string
}

export default function Navbutton({ destination, content }: INavLink) {
  return (
    <div className='px-4 py-2 rounded-lg w-fit bg-dark-gray-color hover:bg-light-gray-color'>
      <Link href={destination}>
        <h2 className='font-semibold text-white'>{content} &gt;</h2>
      </Link>
    </div>
  )
}
