import type { NewsItem } from '~/stores/news'

/**
 * 获取新闻列表
 */
export async function fetchNewsList(): Promise<NewsItem[]> {
  return await $fetch<NewsItem[]>('/api/news')
} 