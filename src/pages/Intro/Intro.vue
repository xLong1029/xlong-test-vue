<!-- 模板 -->
<template>
  <div id="intro">
    <img class="top-pic" :src="topPic"/>
    <SectionTitle titleCn="项目介绍" titleEng="project intro"></SectionTitle>
    <div class="edge-frame">
      <p class="hint">该项目为单页应用测试项目，严禁商用。项目用到技术与插件：Vue2.0、Axios、Sass、Vue-Awesome-Swiper。</p>
      <h2>项目目录</h2>
      <p v-for="item in catalog">{{ item.filename }} ----- {{ item.name }}</p>
      <h2>配置说明</h2>
      <h3>* 修改端口 *</h3>
      <p>在 config 文件夹下 index.js 里设置：
        <pre>
        dev: {
          port: 1029
        }</pre>
      </p>
      <h3>* 设置地址映射表 *</h3>
      <p>解决 axios 时跨域问题：
      <pre>
        proxyTable: {
          '/api': {
            target: 'http://api.douban.com/v2',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }</pre>
      </p>
      <h3>* 指示生产环境 *</h3>
      <p>在 build 文件夹下的 webpack.base.conf.js 设置 DefinePlugin ，以便在分类过程中，UglifyJS 会自动删除警告块。
        <pre>
        module.exports = {
          plugins: [
            new webpack.DefinePlugin({
              'process.env': {
                NODE_ENV: '"production"'
              }
            })
          ]
        }</pre>
      </p>
      <h2>内容大小自适应</h2>
      <p>根据屏幕视图大小，实时更新页面内容大小，在 sass 文件夹下的 common.scss 中使用css3 media 媒体查询方式实现：
        <pre>
        html{
          font-size:625%;
        }

        @media screen and (min-width: 414px) {
          // 以 iPhone6 视图宽度为基准
          // font-size：视图宽度/375*625%
          html{
            font-size:690%; 
          }
        }</pre>
      </p>
      <h2>组件</h2>
      <p v-for="item in components">{{ item.vue }} ----- {{ item.name }}</p>
      <h2>路由视图</h2>
      <p v-for="item in view">{{ item.vue }} ----- {{ item.name }}</p>
      <h2>API数据来源</h2>
      <p>豆瓣-电影API：</p>
      <p><a href="https://developers.douban.com/wiki/?title=movie_v2">https://developers.douban.com/wiki/?title=movie_v2</a></p>
      <h2>作者联系方式</h2>
      <p>QQ：381612175</p>
      <p>github：<a href="https://github.com/xLong1029/">https://github.com/xLong1029/</a></p>
      <p>站酷主页：<a href="http://xlong.zcool.com.cn">http://xlong.zcool.com.cn/</a></p>
      <p>UI中国：<a href="http://i.ui.cn/ucenter/358591.html">http://i.ui.cn/ucenter/358591.html</a></p>
      <p><span class="hint">* 此项目做学习Vuejs测试使用，有什么问题可联系我讨论</span></p>
    </div>
    <!-- 版权 -->
    <Copyright></Copyright> 
  </div> 
</template>

<!-- script -->
<script>
  // 引入组件
  import SectionTitle from '@/components/Common/SectionTitle.vue'
  import Copyright from '@/components/Common/Copyright.vue'

  // 输出
  export default {
    name: 'intro',
    components: { SectionTitle , Copyright }, 
    data() {
      return{ 
        topPic: require("@/assets/pic/top-about.jpg"),
        catalog:[
          {
            'filename':'api',
            'name':'api目录，专门用来封装api数据请求接口'
          },
          {
            'filename':'assets',
            'name':'前端静态资源目录，包括公用css、特殊css、images静态图片、pic大图、js文件、jQuery插件等'
          },
          {
            'filename':'components',
            'name':'专门存放项目中的vue组件，包括公用组件、各页面的功能组件'
          },
          {
            'filename':'router',
            'name':'路由目录，专门用来存放页面跳转路由文件'
          },
          {
            'filename':'view',
            'name':'项目的视图目录，专门用来存放各页面视图'
          }
        ],
        components:[
          {
            'vue':'Loading.vue',
            'name':'加载动画'
          },
          {
            'vue':'NavBar.vue',
            'name':'顶部导航栏'
          },
          {
            'vue':'TabBar.vue',
            'name':'底部标签栏'
          },
          {
            'vue':'SideBar.vue',
            'name':'侧边栏'
          },
          {
            'vue':'Swiper.vue',
            'name':'轮播图'
          },
          {
            'vue':'SectionTitle.vue',
            'name':'章节标题'
          },
          {
            'vue':'ProductList.vue',
            'name':'产品列表'
          },
          {
            'vue':'NewsList.vue',
            'name':'资讯列表'
          },
          {
            'vue':'CaseList.vue',
            'name':'案例列表'
          },
          {
            'vue':'SolutionList.vue',
            'name':'解决方案列表'
          },
          {
            'vue':'BMap.vue',
            'name':'百度地图'
          },
          {
            'vue':'Copyright.vue',
            'name':'项目版权'
          },
        ],
        view:[
          {
            'vue':'Home.vue',
            'name':'首页'
          },
          {
            'vue':'About.vue',
            'name':'关于我们'
          },
          {
            'vue':'News.vue',
            'name':'新闻资讯'
          },
          {
            'vue':'NewsDetails.vue',
            'name':'新闻详情页'
          },
          {
            'vue':'Product.vue',
            'name':'产品中心'
          },
          {
            'vue':'ProductDetails.vue',
            'name':'产品详情页'
          },
          {
            'vue':'Contact.vue',
            'name':'联系我们'
          },
          {
            'vue':'Solution.vue',
            'name':'解决方案'
          },
          {
            'vue':'Search.vue',
            'name':'搜索'
          },
          {
            'vue':'SearchResult.vue',
            'name':'搜索结果'
          },
          {
            'vue':'Intro.vue',
            'name':'应用介绍'
          },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  // 引入通用设置文件
  @import "../../assets/sass/setting";

  h2{
    font-size: Rem(15px);
    margin: Rem(25px) 0;
  }
  h3{
    font-size:Rem(14px);
    color:#555;
    text-indent:2em;
    margin-bottom: Rem(10px);
  }
  p{
    text-indent:2em;
    color:#555;
  }
  a{
    color: $mainColor;
  }
  pre{
    font-family:'微软雅黑';
    color:$mainColor;
  }

  .hint{
    color:#FF3535;
  }
</style>

