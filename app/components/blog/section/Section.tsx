export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className='mt-24 max-w-[950px] min-h-screen flex flex-col pb-8'>
      {children}
    </div>
  )
}
