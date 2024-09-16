interface ISectionProps {
  type?: 'common' | 'main'
  children: React.ReactNode
}

export default function Section({ children, type = 'common' }: ISectionProps) {
  return (
    <section
      className={
        type === 'main'
          ? 'relative flex flex-col items-center justify-center w-full min-h-screen gap-8 px-4 mx-auto sm:px-6 md:px-8 border-b-[1px]'
          : 'flex flex-col w-full justify-center max-w-screen-xl mx-auto min-h-screen gap-8 px-4 sm:px-6 md:px-8 border-b-[1px]'
      }
    >
      {children}
    </section>
  )
}
