import Property from '@/components/Property'
import { shallowMount } from '@vue/test-utils'

describe('Property', () => {
  it('renders a message and responds correctly to user input', () => {
    const wrapper = shallowMount(Property, {
      propsData: {
        place: {title: 'test', distance: 123}
      }
    })

    // see if the message renders
    expect(wrapper.find('.title').text()).toEqual('test')

    // assert the error is rendered
    expect(wrapper.find('.distance').text()).toEqual('123 meters from the city center')
  })
})
