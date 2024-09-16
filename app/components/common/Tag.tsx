interface ITag {
  name: string
  size: 'big' | 'small'
}

export default function Tag({ name, size }: ITag) {
  return (
    <div className='text-center w-fit bg-c-light-color rounded-xl'>
      <h3
        className={`px-2 py-1 font-bold text-c-green-color ${
          size === 'small' ? `text-size-subbody` : `text-[14px]`
        }`}
      >
        {name}
      </h3>
    </div>
  )
}
