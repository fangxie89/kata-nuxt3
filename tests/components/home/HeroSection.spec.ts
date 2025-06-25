import { mount } from '@vue/test-utils'
import HeroSection from '../../../components/home/HeroSection.vue'

describe('HeroSection', () => {
  it('renders section and main title', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('section.hero-section').exists()).toBe(true)
    expect(wrapper.find('h1#hero-title').text()).toContain('A Unique Partnership')
  })

  it('renders ICC and JM logos', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('img.icc-logo').exists()).toBe(true)
    expect(wrapper.find('.jm-logo').exists()).toBe(true)
  })
}) 