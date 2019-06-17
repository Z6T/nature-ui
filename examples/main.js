import Vue from 'vue'
import App from './App.vue'
// import test from '../packages';
import test from 'nature-ui'
Vue.use(test)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
