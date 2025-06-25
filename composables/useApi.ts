import { ref } from 'vue'

/**
 * General-purpose API data fetching composable
 * @param apiFn The API request function to execute
 */
export function useApi<T>(apiFn: () => Promise<T>) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null
    try {
      data.value = await apiFn()
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e))
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, fetchData }
} 