import EachIcon from '@/components/Icons/EachIcon'

const profile = [
  { name: 'Github', path: 'https://github.com/min-s9709', icon: 'mdi:github' },
  {
    name: 'Mail',
    path: 'mailto:mim970929@gmail.com',
    icon: 'material-symbols:mail-outline',
  },
  { name: 'Blog', path: '/blog', icon: 'gridicons:posts' },
  { name: 'Resume', path: '/', icon: 'ph:user' },
  { name: 'Portfolio', path: '/', icon: 'bytesize:portfolio' },
]

export default function IconGroups() {
  return (
    <div className={'w-fit flex gap-2 justify-between'}>
      {profile.map((item) => (
        <EachIcon key={item.name} item={item} />
      ))}
    </div>
  )
}
