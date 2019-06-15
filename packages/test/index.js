// 为组件提供 install 方法，供组件对外按需引入
import XrTest from './src/test'
XrTest.install = Vue => {
  Vue.component(XrTest.name, XrTest)
}
export default XrTest
