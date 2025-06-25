import { defineStore } from 'pinia'
import { fetchNewsList } from '~/services/news'

/**
 * News item structure for ICC newsfeed.
 */
export interface NewsItem {
  id: number;
  title: string;
  link: string;
}

/**
 * Pinia store for ICC newsfeed items.
 * Provides state, loading, error, and fetchNewsItems action.
 */
export const useNewsStore = defineStore('news', {
  state: () => ({
    newsItems: [] as NewsItem[],
    loading: false,
    error: null as Error | null,
  }),
  actions: {
    /**
     * Fetches news items from the /api/news endpoint and updates the store.
     * Handles loading and error state.
     */
    async fetchNewsItems() {
      this.loading = true
      this.error = null
      try {
        const data = await fetchNewsList()
        this.newsItems = data || []
      } catch (e: unknown) {
        this.error = e instanceof Error ? e : new Error(String(e))
      } finally {
        this.loading = false
      }
    },
  },
}) 