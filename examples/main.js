import Vue from 'vue'
import App from './App.vue'
import packages from '../packages';
import '../packages/nt-styles/index.css';
// import packages from 'nature-ui';
// import 'nature-ui/lib/css/style.min.css'
Vue.use(packages);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
