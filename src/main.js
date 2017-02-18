import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import Heatmap from './heatmap/Heatmap.vue'
import Standalone from './heatmap/Standalone.vue'
import Player from './heatmap/Player.vue'
import Results from './Results.vue'
import About from './About.vue'
import Methods from './Methods.vue'
import Method from './Method.vue'
import Dataset from './Dataset.vue'
import Home from './Home.vue'

import Icon from 'vue-awesome/components/Icon.vue'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueLazyload)

const router = new VueRouter({
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', component: App,
      children: [
        { path: '', component: Home },
        { path: 'listen', redirect: { name: 'standalone', params: { track_id: '1', method: 'STO1' }}},
        { path: 'listen/:track_id/:method', name: 'standalone', component: Standalone},
        { path: 'heatmap', redirect: { name: 'heatmap', params: { is_dev: '1', target_id: '4', metric_id: '2' } } },
        { path: 'heatmap/:is_dev/:target_id/:metric_id', name: 'heatmap', component: Heatmap },
        { path: 'heatmap/:is_dev/:target_id/:metric_id/play/:track_id/:method', name: 'player', component: Heatmap },
        { path: 'about', component: About },
        { path: 'methods', component: Methods },
        { path: 'methods/:short', name: 'method', component: Method },
        { path: 'results', component: Results },
        { path: 'dataset', component: Dataset },
      ]
    },
  ]
})


const app = new Vue({
  router
}).$mount('#app')
