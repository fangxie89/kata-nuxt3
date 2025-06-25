import { fetchNewsList } from '../../services/news'
import { vi } from 'vitest'

global.$fetch = vi.fn()

describe('fetchNewsList', () => {
  it('should call /api/news and return data', async () => {
    const mockData = [
      { id: 1, title: 'Test News', link: 'https://test.com' }
    ]
    // @ts-ignore
    $fetch.mockResolvedValueOnce(mockData)
    const result = await fetchNewsList()
    expect($fetch).toHaveBeenCalledWith('/api/news')
    expect(result).toEqual(mockData)
  })
}) 