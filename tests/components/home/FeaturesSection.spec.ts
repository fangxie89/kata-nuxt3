import { mount } from '@vue/test-utils'
import FeaturesSection from '../../../components/home/FeaturesSection.vue'

describe('FeaturesSection', () => {
  it('renders section and header', () => {
    const wrapper = mount(FeaturesSection)
    expect(wrapper.find('section.features-section').exists()).toBe(true)
    expect(wrapper.find('h2#features-title').text()).toBe('Why this partnership?')
  })

  it('renders all features', () => {
    const wrapper = mount(FeaturesSection)
    const features = wrapper.findAll('.feature-item')
    expect(features.length).toBe(3)
    expect(features[0].find('h3').text()).toBe('More key arbitration content')
  })
}) 