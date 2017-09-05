import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 开启debug模式
Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(VueResource)

// 创建一个路由器实例
// 并且配置路由规则
export default new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: (resolve) => {
        require(['@/pages/Home/Home.vue'], resolve)
      }
    },
    {
      path: '/about',
      name: 'About',
      component: (resolve) => {
        require(['@/pages/About/About.vue'], resolve)
      }
    },
    {
      path: '/product',
      name: 'Product',
      component: (resolve) => {
        require(['@/pages/Product/Product.vue'], resolve)
      }
    },
    {
      path: '/product/details',
      name: 'ProductDetails',
      component: (resolve) => {
        require(['@/pages/Product/ProductDetails.vue'], resolve)
      }
    },
    {
      path: '/news',
      name: 'News',
      component: (resolve) => {
        require(['@/pages/News/News.vue'], resolve)
      }
    },
    {
      path: '/news/details',
      name: 'NewsDetails',
      component: (resolve) => {
        require(['@/pages/News/NewsDetails.vue'], resolve)
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: (resolve) => {
        require(['@/pages/Contact/Contact.vue'], resolve)
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: (resolve) => {
        require(['@/pages/Search/Search.vue'], resolve)
      }
    },
    {
      path: '/result',
      name: 'SearchResult',
      component: (resolve) => {
        require(['@/pages/Search/SearchResult.vue'], resolve)
      }
    },
    {
      path: '/solution',
      name: 'Solution',
      component: (resolve) => {
        require(['@/pages/Solution/Solution.vue'], resolve)
      }
    },
    {
      path: '/intro',
      name: 'Intro',
      component: (resolve) => {
        require(['@/pages/Intro/Intro.vue'], resolve)
      }
    },
    //域名重定向，默认地址优先显示home页面路径
    {
      path: "*",
      redirect: '/home'
    }
  ]
})