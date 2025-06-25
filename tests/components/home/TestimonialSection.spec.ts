import { mount } from '@vue/test-utils'
import TestimonialSection from '../../../components/home/TestimonialSection.vue'

describe('TestimonialSection', () => {
  it('renders section and visually-hidden h2', () => {
    const wrapper = mount(TestimonialSection)
    expect(wrapper.find('section.testimonial-section').exists()).toBe(true)
    const h2 = wrapper.find('h2#testimonial-title.visually-hidden')
    expect(h2.exists()).toBe(true)
    expect(h2.text().toLowerCase()).toContain('testimonial')
  })

  it('renders quote and author', () => {
    const wrapper = mount(TestimonialSection)
    expect(wrapper.find('.quote').exists()).toBe(true)
    expect(wrapper.find('.author').exists()).toBe(true)
  })
}) 