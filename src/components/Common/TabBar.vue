<template>
	<nav id="tab-bar">
    <ul class="tab-bar-list">
      <!-- 通过 tab定义的route值 和 路由定义名称 是否一致来判断当前页，是则添加class=on激活当前页样式 -->
      <li v-for="(item, index) in menu" :class="[item.route === $route.name ? 'on' : '']">
        <router-link :to="item.href">
          <i :class="[item.class]"></i>
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'tab-bar',
    data () {
      return{
        menu: [
            {
              'route': 'Home',
              'class': 'icon-home',
              'name': '首页',
              'href': '/home'
            },
            {
              'route': 'About',
              'class': 'icon-about',
              'name': '关于我们',
              'href': '/about'
            },
            {
              'route': 'Product',
              'class': 'icon-product',
              'name': '产品中心',
              'href': '/product'
            },
            {
              'route': 'News',
              'class': 'icon-news',
              'name': '资讯动态',
              'href': '/news'
            },
            {
              'route': 'Contact',
              'class': 'icon-contact',
              'name': '联系我们',
              'href': '/contact'
            }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";
  
  /* tab-bar */
  .tab-bar-list{
    height:$tabBarHeight;
    background:$mainColor;
    bottom:0;
    border-top:1px solid $mainColor;
    font-size:Rem(12px);
    width:100%;
    position: fixed;
    z-index:66;

    li{
      float:left;
      width:20%;
      height:HalfRem(86px);
    }

    li.on{
      background:#fff;
    }

    li.on a{
      color:$mainColor;
    }

    a, i, span{
      display:block;
    }

    a{
      float:left;
      width:100%;
      color:#fff;
      cursor:pointer;
    } 

    i{
        margin:0 auto;
        margin-top:Rem(4px);
    }

    span{
      text-align:center;
      margin-top:Rem(2px);
    }
  }

  /* tab-icon */
  $tab-icon: home, about, product, news, contact;
  @each $tabname in $tab-icon {
    .icon-#{$tabname} {
      background: url('../../assets/images/icon-#{$tabname}-normal.png') no-repeat;
      background-size:100%;
      width:HalfRem(40px);
      height:HalfRem(36px);
    }

    li.on .icon-#{$tabname}{
      background: url('../../assets/images/icon-#{$tabname}-active.png') no-repeat;
      background-size:100%;
    }
  }

  /* layout */
  @media screen and (min-width: 960px) {
    .tab-bar-list{
      width:640px;
    }
  }
</style>
