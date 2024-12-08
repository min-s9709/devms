'use client'

import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import Image from 'next/image'
import 'react-notion-x/src/styles.css'
// import 'prismjs/themes/prism-tomorrow.css'
// import 'katex/dist/katex.min.css'

interface RendererProps {
  recordMap: ExtendedRecordMap
}

export default function Renderer({ recordMap }: RendererProps) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      components={{
        nextImage: Image,
        Code: Code,
        Collection: Collection,
      }}
      fullPage={true}
      darkMode={false}
      previewImages={false}
      disableHeader
    />
  )
}
