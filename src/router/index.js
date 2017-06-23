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
        require(['@/view/Home/Home.vue'], resolve)
      }
    },
    {
      path: '/about',
      name: 'About',
      component: (resolve) => {
        require(['@/view/About/About.vue'], resolve)
      }
    },
    {
      path: '/product',
      name: 'Product',
      component: (resolve) => {
        require(['@/view/Product/Product.vue'], resolve)
      }
    },
    {
      path: '/product/details',
      name: 'ProductDetails',
      component: (resolve) => {
        require(['@/view/Product/ProductDetails.vue'], resolve)
      }
    },
    {
      path: '/news',
      name: 'News',
      component: (resolve) => {
        require(['@/view/News/News.vue'], resolve)
      }
    },
    {
      path: '/news/details',
      name: 'NewsDetails',
      component: (resolve) => {
        require(['@/view/News/NewsDetails.vue'], resolve)
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: (resolve) => {
        require(['@/view/Contact/Contact.vue'], resolve)
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: (resolve) => {
        require(['@/view/Search/Search.vue'], resolve)
      }
    },
    {
      path: '/result',
      name: 'SearchResult',
      component: (resolve) => {
        require(['@/view/Search/SearchResult.vue'], resolve)
      }
    },
    {
      path: '/solution',
      name: 'Solution',
      component: (resolve) => {
        require(['@/view/Solution/Solution.vue'], resolve)
      }
    },
    {
      path: '/intro',
      name: 'Intro',
      component: (resolve) => {
        require(['@/view/Intro/Intro.vue'], resolve)
      }
    },
    //域名重定向，默认地址优先显示home页面路径
    {
      path: "*",
      redirect: '/home'
    }
  ]
})