// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Counter from './counter'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  // コンポーネントをラップする
  const wrapper = mount(Counter)
  // vmを介することで実際のコンポーネントにアクセスできる
  // const vm = wrapper.vm

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  it('totalData is more than 8', () => {
    // dataを定義することができる
    wrapper.setData({totalHits: 10})
    expect(wrapper.contains(".moreThan8TotalHits")).toBe(true)
  })

  it('totalData is less than 8', () => {
    wrapper.setData({totalHits: 5})
    expect(wrapper.contains(".moreThan8TotalHits")).toBe(false)
    expect(wrapper.contains(".lessThan8TotalHits")).toBe(true)
  })

  it('display nothing when company name is empty', () => {
    wrapper.setData({job: {companyName: ""}})
    expect(wrapper.html()).toContain('<p class="job-companyName"></p>')
  })

  it('display nothing when company name is empty', () => {
    wrapper.setData({job: {companyName: "bizreach"}})
    expect(wrapper.html()).toContain('<p class="job-companyName">bizreach</p>')
  })
})
