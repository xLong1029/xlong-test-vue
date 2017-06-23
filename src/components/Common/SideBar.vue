<template>
	<aside id="side-bar">
    <div ref="sideList" :class="['sidebar-left side-bar-cont', showSideBar ? 'sidebar-open' : '']">
      <ul>
        <!--
        循环使用 v-for 指令。
        v-for 指令需要以 item in items 形式的特殊语法， items 是源数据数组并且 item 是数组元素迭代的别名。
        v-for 可以绑定数据到数组来渲染一个列表

        * a 标签 href 属性要用数组语法形式进行输出
        -->
        <li v-for="item in sideNav">
            <a :href="[item.href]" @click="hideMask">{{ item.title }}<i class="icon-list-next"></i></a>
        </li>
      </ul>
      <div class="qrcode">
          <img :src="qrcodePic"/>
          <span>扫一扫，关注xLong设计</span>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div :class="['mask', showSideBar ? 'mask-show' : '']" ref="mask" @click="hideMask"></div>
  </aside>
</template>

<script>
  // 引入中转站组件
  import Bus from '@/assets/js/eventBus.js'

  export default {
    name: 'side-bar',
    data () {
      return{
        // 二维码路径
        qrcodePic: require('@/assets/pic/qrcode.jpg'),
        // 侧边栏导航
        sideNav: [
          {
            'title': '首页',
            'href': '/#/home'
          },
          {
            'title': '关于我们',
            'href': '/#/about'
          },
          {
            'title': '新闻资讯',
            'href': '/#/news'
          },
          {
            'title': '解决方案',
            'href': '/#/solution'
          },
          {
            'title': '产品中心',
            'href': '/#/product'
          },
          {
            'title': '联系我们',
            'href': '/#/contact'
          },
          {
            'title': '搜索',
            'href': '/#/search'
          },
          {
            'title': '项目介绍',
            'href': '/#/intro'
          }
        ],
        showSideBar: false
      }
    },
    mounted() {
      // 从中转站获取数据
      Bus.$on('data', (get) => {
        this.showSideBar = get.showSideBar;
        console.log('SideBar.vue get showSideBar:'+this.showSideBar);
      });
    },
    // 方法
    methods: {
      //隐藏遮罩事件
      hideMask: function () {
          // 更新中转站数据
          Bus.$emit('data', {showTabBar: true, showSideBar: false});
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";

  /* side-bar */    
  .sidebar-left {
    left:HalfRem(-480px);
  }

  .sidebar-left.sidebar-open {
    left:0;
  }

  .side-bar-cont {
    background:#fff;
    position:fixed;
    width:HalfRem(480px);
    height:100%;
    top:0;
    z-index:99;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;

    a {
      display:block;
      height:HalfRem(80px);
      line-height:HalfRem(80px);
      padding:0 $edgeWidth;
      border-bottom:$deepBorder;

      &:hover {
        background:$lightBlueColor;
      }
    }

    span{
      margin-top:HalfRem(10px);
    }
  }

  .qrcode{
    margin-top:HalfRem(50px);
    text-align:center;

    img{
      width:70%;
      display:block;
      margin:0 auto;
    }

    span{
      display:block;
    }

  }

  .mask.mask-show{
    display:block;
  } 

  .mask {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 88;
      background: #101620;
      display: none;
      min-width: 768px;
      opacity: 0.85;
      _width: expression((documentElement.clientWidth < 768px) ? "768px" : "auto" );
    }
</style>
