<!-- 模板 -->
<template>
  <div id="container" ref="container">
    <!-- 移动主体 -->
    <div :class="showTabBar ? 'push-body' : 'push-body push-body-toright'">
      <!-- 侧边栏组件 -->
      <SideBar></SideBar>
      <!-- 导航栏 -->
      <!-- 
      通过props属性名，父组件的数据动态传到子组件。用v-bind,缩写为":"，否则当做字符串处理
      HTML 特性是不区分大小写的。当使用的不是字符串模版，camelCased (驼峰式) 命名的 prop 需要转换为相对应的 kebab-case (短横线隔开式) 命名
      -->
      <NavBar :getSecond="secondPage"></NavBar>
      <div class="content">
        <!-- 页面过场动画效果 -->
        <transition name="animate">
          <!-- router-view用来渲染视图 -->
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <!-- 标签栏 -->
    <!-- 通过判断显示标签栏 -->
    <TabBar v-if="showTabBar && secondPage.indexOf($route.name) === -1"></TabBar>
  </div>
</template>

<!-- script -->
<script> 
  // 引入组件
  import SideBar from '@/components/Common/SideBar.vue'
  import NavBar from '@/components/Common/NavBar.vue'
  import TabBar from '@/components/Common/TabBar.vue'

  // 引入中转站js
  import Bus from '@/assets/js/eventBus.js'

  export default {
    name: 'container',
    components: { SideBar , NavBar , TabBar },
    data() {
      return{
        // 定义二级页面名称，作为动态props值
        secondPage:['NewsDetails','Search', 'SearchResult' , 'ProductDetails', 'Solution' , 'Intro'],
        // 是否显示标签栏
        showTabBar: true,
      }
    },
    created() {
      Bus.$on('data', (get) => {
        this.showTabBar = get.showTabBar;
        console.log('App.vue get showTabBar:'+this.showTabBar);
      })
    }
  }
</script>

<!-- 要用公用样式的话需要把scoped属性去掉 -->
<style lang="scss" type="text/css">
  // 因为是App.vue引用该公用样式，所以路径只需要./
  // 引入通用设置文件
  @import "./assets/sass/setting";
  // 引入公用样式文件
  @import "./assets/sass/common";

  // 过场动画样式
  // 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除
  .animate-enter{
    opacity: 0;
  }
  // 定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数
  .animate-enter-active{
    transition: opacity .5s
  }
  // 2.1.8版及以上：定义进入过渡的结束状态。在元素被插入一帧后生效（于此同时 v-enter 被删除），在 transition/animation 完成之后移除
  .animate-enter-to{

  }
  // 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除
  .animate-leave{

  }
  // 定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数
  .animate-leave-active{
    transition: opacity .5s
  }
  // 2.1.8版及以上：定义离开过渡的结束状态。在离开过渡被触发一帧后生效（于此同时 v-leave 被删除），在 transition/animation 完成之后移除
  .animate-leave-to{
    opacity: 0;
  }
</style>