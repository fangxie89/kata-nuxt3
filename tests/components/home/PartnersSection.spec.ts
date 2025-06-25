import { mount } from '@vue/test-utils'
import PartnersSection from '../../../components/home/PartnersSection.vue'

describe('PartnersSection', () => {
  it('renders section and header', () => {
    const wrapper = mount(PartnersSection)
    expect(wrapper.find('section.partners-section').exists()).toBe(true)
    expect(wrapper.find('h2#partners-title').text()).toBe('Trusted by the Best Arbitration Teams Worldwide')
  })

  it('renders all partner logos', () => {
    const wrapper = mount(PartnersSection)
    const logos = wrapper.findAll('.logo-item')
    expect(logos.length).toBe(12)
  })
}) 