import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import packages from '../packages';
import './assets/css/reset.css';
import '../packages/nt-styles/index.css';

// import packages from 'nature-ui';
// import 'nature-ui/lib/css/style.min.css'
import 'highlight.js/styles/color-brewer.css';
import BlockDemo from './components/BlockDemo.vue';
Vue.component('DemoBlock', BlockDemo)

Vue.use(packages);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
