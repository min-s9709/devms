export default function Section({
  children,
  type = 'common',
}: {
  children: React.ReactNode
  type?: 'common' | 'small'
}) {
  return (
    <section
      className={`mt-24 ${
        type === 'small' ? 'max-w-[700px]' : 'max-w-[950px]'
      } min-h-screen flex flex-col pb-8`}
    >
      {children}
    </section>
  )
}
