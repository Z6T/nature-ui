import Vue from 'vue'
import App from './App.vue'
import XrUI from '../packages';
Vue.use(XrUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
