'use server'

//import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export const getData = async (rootPageId: string) => {
  try {
    const data = await notion.getPage(rootPageId)
    return data
  } catch (e) {
    console.log(e)
  }
}

// export const notionDatabase = new Client({
//   auth: process.env.NOTION_SECRET_API_KEY,
// })

// export const getPageData = async () => {
//   if (!process.env.NOTION_DATABASE_ID) {
//     throw new Error('데이터베이스 아이디가 없습니다.')
//   }

//   const db = await notionDatabase.databases.query({
//     database_id: process.env.NOTION_DATABASE_ID,
//   })

//   console.log(db.results)
// }
