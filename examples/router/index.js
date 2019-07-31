import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
import slidesJson from './slides';

const routes = [{
    path: '/',
    component: () => import('../docs/introduce.md')
}];
slidesJson.forEach(item => {
    item.children.forEach(ele => {
        routes.push({
            path: `/${ele.path}`,
            name: ele.label,
            component: () => import(`../docs/${ele.path}.md`)
        })
    });
})

export default new Router({ routes })