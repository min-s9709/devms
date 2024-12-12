import { projectData } from '@/data/projects'

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}년 ${month}월 ${day}일`
}

export const filterProject = (tab: string | null) => {
  if (tab === null || tab === 'All') {
    return projectData
  }
  return projectData.filter((item) => item.tab === tab)
}
