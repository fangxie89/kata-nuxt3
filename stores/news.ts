import { defineStore } from 'pinia'

interface NewsItem {
  id: number;
  title: string;
  link: string;
}

export const useNewsStore = defineStore('news', {
  state: () => ({
    newsItems: [] as NewsItem[],
    loading: false,
    error: null as Error | null,
  }),
  actions: {
    async fetchNewsItems() {
      this.loading = true
      this.error = null
      try {
        const data = await $fetch<NewsItem[]>('/api/news')
        this.newsItems = data || []
      } catch (e: any) {
        this.error = e
      } finally {
        this.loading = false
      }
    },
  },
}) 