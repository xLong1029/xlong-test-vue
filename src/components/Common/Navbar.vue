<template>
	<header id="nav-bar">
    <div class="nav-bar-cont">
      <!-- 判断：如果是二级页面，则添加fr样式，反之添加fl样式 -->
      <a :class="['button slide-right', getSecond.indexOf($route.name) !== -1 ? 'fr' : 'fl']">
        <i class="icon-list" @click="pushRight"></i>
      </a>
      <!-- 二级内页，则显示返回图标 -->
      <a v-if="getSecond.indexOf($route.name) !== -1" class="button slide-right fl" @click="goBack">
        <i class='icon-back'></i>
      </a>
      <!-- 非二级内页，显示搜索图标 -->
      <router-link v-else class="button fr" to="/search">
          <i class="icon-search"></i>
      </router-link>
      <div class="title fl">
          <router-link class="logo" to="/home"></router-link>
      </div>      
    </div>
  </header>
</template>

<script> 
  // 引入中转站组件
  import Bus from '@/assets/js/eventBus.js'

  export default {
    name: 'nav-bar',
    // App.vue传来的属性名
    props: ['getSecond'],
    methods: {
      //返回上一页
      goBack: function(){
        window.history.back(-1);
      },
      //点击实现侧边栏向右滑动
      pushRight: function () {
        // 设置中转站数据
        Bus.$emit('data', {showTabBar: false, showSideBar: true});
      }
    },
    // 钩子函数 mounted 实例渲染完后执行
    mounted() {
       // console.log(this.getSecond);
    }   
  }
</script>

<style lang="scss" type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";

  /* nav-bar */
  .nav-bar-cont{
    width:100%;
    position: fixed;
    z-index:66;
    height: $navBarHeight;
    background:#fff;
    border-bottom: 1px solid #d5d5d5; 
    top:0;
    
    .button{
      width:15%;
      height:$navBarHeight;
      display:block;
      text-align:center;
      
    }
    .title{
      width:70%;
      height:$navBarHeight;
      text-align:center;
    }

    i{
      cursor:pointer;
    }
  }

  .logo{
    display:inline-block;
    background: url('../../assets/images/logo.png') no-repeat;
    background-size:100%;
    width:HalfRem(166px);
    height: HalfRem(44px);
    margin-top:HalfRem(20px);
  }

  $nav-icon: list, search, back;
  @each $iconname in $nav-icon {
    .icon-#{$iconname} {
      display:inline-block;
      background: url('../../assets/images/icon-#{$iconname}.png') no-repeat;
      background-size:100%;
      width:HalfRem(34px);
      height: HalfRem(34px);
      margin-top:Rem(12px);
    }
  }

  /* layout */
  @media screen and (min-width: 960px) {
    .nav-bar-cont{
      width:640px;
    }
  }
</style>
