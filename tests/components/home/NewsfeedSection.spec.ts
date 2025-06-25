import { mount } from '@vue/test-utils'
import NewsfeedSection from '../../../components/home/NewsfeedSection.vue'
import { setActivePinia, createPinia } from 'pinia'
import { vi } from 'vitest'
import { useNewsStore } from '~/stores/news'

describe('NewsfeedSection', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders section and header', () => {
    const wrapper = mount(NewsfeedSection)
    expect(wrapper.find('section.newsfeed-section').exists()).toBe(true)
    expect(wrapper.find('h2#newsfeed-title').text()).toContain('ICC International Court of Arbitration')
  })

  it('shows loading skeleton when loading', async () => {
    const newsStore = useNewsStore()
    newsStore.loading = true
    const wrapper = mount(NewsfeedSection)
    expect(wrapper.findComponent({ name: 'NewsfeedSkeleton' }).exists()).toBe(true)
  })

  it('shows error message when error', async () => {
    const newsStore = useNewsStore()
    newsStore.loading = false
    newsStore.error = new Error('fail')
    const wrapper = mount(NewsfeedSection)
    expect(wrapper.text()).toContain('Failed to load news')
  })

  it('renders news items with a11y labels', async () => {
    const newsStore = useNewsStore()
    newsStore.loading = false
    newsStore.error = null
    newsStore.newsItems = [
      { id: 1, title: 'Test News', link: 'https://test.com' }
    ]
    const wrapper = mount(NewsfeedSection)
    const link = wrapper.find('.news-item a')
    expect(link.attributes('aria-label')).toContain('Read more: Test News')
  })
}) 