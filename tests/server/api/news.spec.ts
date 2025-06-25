/// <reference types="vitest" />
import { getNewsList } from '../../../server/api/newsData'

describe('getNewsList', () => {
  it('should return the news array', () => {
    const result = getNewsList()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('title')
    expect(result[0]).toHaveProperty('link')
  })
}) 