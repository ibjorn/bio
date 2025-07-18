import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const pagesDirectory = path.join(process.cwd(), 'content')

export async function getPageData(id) {
  try {
    const fullPath = path.join(pagesDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const processedContent = await remark()
      .use(remarkHtml)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  } catch (error) {
    console.error(`Error fetching page data for ${id}:`, error)
    return null
  }
}
