// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 vue-awesome-swiper 插件
import AwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

// 使用AwesomeSwiper
Vue.use(AwesomeSwiper)

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  el: '#page',
  router,
  template: '<App/>',
  components: { App }
})
