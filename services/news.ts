import type { NewsItem } from '~/stores/news'

/**
 * Get news list
 */
export async function fetchNewsList(): Promise<NewsItem[]> {
  return await $fetch<NewsItem[]>('/api/news')
} 