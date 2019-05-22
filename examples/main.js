import Vue from 'vue'
import vui from '*/index.js';
Vue.use(vui)
const { Hello } = vui
Vue.component(Hello.name, Hello)
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
