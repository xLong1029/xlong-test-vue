// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 vue-awesome-swiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引用swiper插件CSS
require('swiper/dist/css/swiper.css')

Vue.config.productionTip = false

// 使用VueAwesomeSwiper
Vue.use(VueAwesomeSwiper)

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  el: '#page',
  router,
  template: '<App/>',
  components: { App }
})
