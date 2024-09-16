interface IIntroduceProps {
  question: string
  answer: string
}

export default function Introduce({ question, answer }: IIntroduceProps) {
  return (
    <div className='flex flex-col gap-3 p-4 bg-c-green-color rounded-xl'>
      <h3 className='text-base font-bold text-white'>{question}</h3>
      <p className='text-white text-[14px] leading-relaxed'>{answer}</p>
    </div>
  )
}
