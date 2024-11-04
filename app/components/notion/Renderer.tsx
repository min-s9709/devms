'use client'

import { NotionRenderer } from 'react-notion-x'

interface RendererProps {
  recordMap: any // 임의로 any
  rootPageId: string
}

export default function Renderer({ recordMap, rootPageId }: RendererProps) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
      rootPageId={rootPageId}
      previewImages
    />
  )
}
