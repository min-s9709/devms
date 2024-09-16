'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import MenutabList from '@/components/common/MenutabList'
import useMenuTabs from '@/hooks/useMenuTabs'

export default function Header() {
  const { isMenuOpen, handleMenuClick, menuRef } = useMenuTabs()
  return (
    <header
      className={
        'fixed z-10 w-full h-16 bg-white flex items-center justify-center'
      }
    >
      <div className={'w-[1260px] flex'}>
        <div className={'flex w-3/4 items-center pl-2'}>
          <Link href='/'>
            <h1 className={'text-2xl font-bold'}>DEV.MS</h1>
          </Link>
        </div>
        <div className={'flex w-1/4 justify-end'}>
          <div
            className={
              'flex w-32 justfiy-end border-l-2 justify-around items-center'
            }
          >
            <div ref={menuRef} className={'relative'}>
              <div
                className={
                  'w-6 h-6 hover:bg-[#EEEFF1] hover:rounded-full cursor-pointer'
                }
                onClick={handleMenuClick}
              >
                {isMenuOpen ? (
                  <Icon icon='mingcute:close-line' className={'w-6 h-6'} />
                ) : (
                  <Icon icon='mingcute:menu-line' className={'w-6 h-6'} />
                )}
              </div>
              {isMenuOpen && <MenutabList />}
            </div>

            <Icon
              icon='material-symbols:dark-mode-outline'
              className={'w-6 h-6'}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
