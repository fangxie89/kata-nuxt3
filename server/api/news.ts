import { getNewsList } from './newsData'

export default defineEventHandler(async () => {
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return getNewsList()
}) 