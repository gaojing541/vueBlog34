import Vue from 'vue'
import App from './App.vue'

// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Routes from './routes'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//axios全局配置 
axios.defaults.baseURL = 'https://wd7747294513zslrqc.wilddogio.com'
//axios.defaults.headers.common['Authorization'] = 'Token'
// axios.defaults.headers.post['Content-type'] = ''


Vue.config.productionTip = false

// Vue.use(VueResource);
Vue.use(VueRouter);

//自定义指令
// Vue.directive('rainbow',{
//   bind(el,bind,vnode){
//     el.style.color = "#" + Math.random().toString(16).slice(2,8);
//   }
// })

// 自定义过滤器
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })
Vue.filter('snippet',function(value){
  return value.slice(0,100) + "...";
})

// 创建路由
const router = new VueRouter({
  routes:Routes,
  mode:"history"
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
