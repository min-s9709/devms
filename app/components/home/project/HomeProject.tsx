'use client'

import Title from '@/components/common/Title'
import ProjectList from '@/components/home/project/ProjectList'
import ProjectTabs from '@/components/home/project/ProjectTabs'
import { filterProject } from '@/lib/util'
import { useSearchParams } from 'next/navigation'

export default function HomeProject() {
  const searchParams = useSearchParams()
  const tabName = searchParams.get('tab')
  const list = filterProject(tabName)

  return (
    <>
      <Title>Project</Title>
      <ProjectTabs tabName={tabName} />
      <ProjectList list={list} />
    </>
  )
}
