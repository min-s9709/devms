'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

interface IProjectTabsProps {
  tabName: string | null
}

const tabs = ['All', 'Team', 'Single'] as const

export default function ProjectTabs({ tabName }: IProjectTabsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleTab = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  return (
    <div className='flex gap-4 w-full'>
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => {
            router.replace(`?${handleTab('tab', tab)}`, {
              scroll: false,
            })
          }}
          className={`w-fit px-2 py-1 border-[1px] border-dark-gray-color rounded-lg ${
            tabName === tab && 'bg-black'
          } ${tabName === null && tab === 'All' && 'bg-black'}`}
        >
          <span
            className={`text-base ${tabName === tab && 'text-white'} ${
              tabName === null && tab === 'All' && 'text-white'
            }`}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  )
}
