import Vue from 'vue'
import App from './App.vue'
import VueRouter from './plugin';
import HomePage from './components/Home';
import Article from './components/Article';

Vue.config.productionTip = false



const routes = {
    '/': HomePage,
    '/article': Article
}

Vue.use(VueRouter, {
  routes,
  hook: (to, from) => console.log(to, from) 
});

new Vue({
  render: h => h(App)
}).$mount('#app')
