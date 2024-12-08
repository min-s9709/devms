import { CloseIcon } from '@/components/Icons/Icons'

interface IModalProps {
  children: React.ReactNode
  handleModalClose: () => void
  modalRef: React.RefObject<HTMLDivElement>
}

export default function Modal({
  children,
  handleModalClose,
  modalRef,
}: IModalProps) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-5'>
      <div className='absolute inset-0 bg-black opacity-70'></div>
      <div className='z-30 w-3/4 max-md:w-full h-full bg-white rounded-lg overflow-hidden'>
        <div className='w-[40px] h-[40px] max-md:top-6 max-md:right-6  rounded-full flex items-center justify-center fixed z-50 top-10 right-20 bg-dark-gray-color hover:bg-light-gray-color'>
          <button className='p-2' onClick={handleModalClose}>
            <CloseIcon />
          </button>
        </div>
        <div ref={modalRef} className='h-full overflow-y-auto p-5'>
          {children}
        </div>
      </div>
    </div>
  )
}
