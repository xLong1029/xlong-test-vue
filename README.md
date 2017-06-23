# xlong-test-vue

> test for vue


## 项目说明

该项目为单页应用测试项目，请勿商用。

项目用到技术与插件：Vue2.0、Axios、Sass、Vue-Awesome-Swiper。

# 安装项目依赖包
$ npm install

# 启动项目 端口:1029
$ npm run dev

# 项目打包
$ npm run build

# 项目目录
api ----- api目录，专门用来封装api数据请求接口

assets ----- 前端静态资源目录，包括公用css、特殊css、images静态图片、pic大图、js文件、jQuery插件等

components ----- 专门存放项目中的vue组件，包括公用组件、各页面的功能组件

router ----- 路由目录，专门用来存放页面跳转路由文件

view ----- 项目的视图目录，专门用来存放各页面视图


#配置说明

* 修改端口 *

在 config 文件夹下 index.js 里设置：

      dev: {
        port: 1029
      }

* 设置地址映射表 *

解决 axios 时跨域问题：

      proxyTable: {
        '/api': {
          target: 'http://api.douban.com/v2',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }

* 指示生产环境 *

在 build 文件夹下的 webpack.base.conf.js 设置 DefinePlugin ，以便在分类过程中，UglifyJS 会自动删除警告块。

      module.exports = {
        plugins: [
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: '"production"'
            }
          })
        ]
      }

#内容大小自适应

根据屏幕视图大小，实时更新页面内容大小，在 sass 文件夹下的 common.scss 中使用css3 media 媒体查询方式实现：

      html{
        font-size:625%;
      }

      @media screen and (min-width: 414px) {
        // 以 iPhone6 视图宽度为基准
        // font-size：视图宽度/375*625%
        html{
          font-size:690%; 
        }
      }

#组件：

Loading.vue ----- 加载动画

NavBar.vue ----- 顶部导航栏

TabBar.vue ----- 底部标签栏

SideBar.vue ----- 侧边栏

Swiper.vue ----- 轮播图

SectionTitle.vue ----- 章节标题

ProductList.vue ----- 产品列表

NewsList.vue ----- 资讯列表

CaseList.vue ----- 案例列表

SolutionList.vue ----- 解决方案列表

BMap.vue ----- 百度地图

Copyright.vue ----- 项目版权

#路由视图

Home.vue ----- 首页

About.vue ----- 关于我们

News.vue ----- 新闻资讯

NewsDetails.vue ----- 新闻详情页

Product.vue ----- 产品中心

ProductDetails.vue ----- 产品详情页

Contact.vue ----- 联系我们

Solution.vue ----- 解决方案

Search.vue ----- 搜索

SearchResult.vue ----- 搜索结果

Intro.vue ----- 应用介绍

#API数据来源

豆瓣-电影API：
https://developers.douban.com/wiki/?title=movie_v2

#联系方式

QQ：381612175

github：https://github.com/xLong1029/

站酷主页：http://xlong.zcool.com.cn/

UI中国：http://i.ui.cn/ucenter/358591.html

* 此项目做学习Vuejs测试使用，有什么问题可联系我讨论