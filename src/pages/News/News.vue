<!-- 模板 -->
<template>
  <div id="news">
    <!-- 判断是否显示加载项 -->
    <Loading v-if="loading"></Loading>
    <div v-else>
      <!-- 动态绑定图片地址，才能使用assets文件夹路径 -->
      <img class="top-pic" :src="topPic"/>
      <SectionTitle titleCn="新闻资讯" titleEng="news center"></SectionTitle>
      <NewsList v-if="newslist.status" :num='newslist.num' :data='newslist.data' :status="newslist.status"></NewsList>
      <button v-if="showMore" ref="button" class="load-more" @click="loadMore">点击加载更多</button>
      <!-- 版权 -->
      <Copyright></Copyright>
    </div>
  </div>
</template>

<!-- script -->
<script>
  // 外部引用Api
  import {Api} from '@/api/index.js'

  // 引入组件
  import Loading from '@/components/Common/Loading.vue'
  import SectionTitle from '@/components/Common/SectionTitle.vue'
  import NewsList from '@/components/News/NewsList.vue'
  import Copyright from '@/components/Common/Copyright.vue'

  // 输出
  export default {
    name: 'news',
    components: { Loading , SectionTitle , NewsList , Copyright }, 
    data() {
      return{
        // 是否显示加载
        loading: true,
        topPic: require("@/assets/pic/top-news.jpg"),
        newslist:{
          num: 0,
          data: [],
          status: false,
          // 每次加载记录数量
          loadNum: 5,
        },        
        // 是否显示加载按钮
        showMore: false,
      }
    },
    mounted(){
      // 调用Api获取新闻新闻
      Api.Fn.news.getNewsList(this, 1);
    },
    methods: {
      loadMore: function(){
        // 调用Api获取新闻新闻
        Api.Fn.news.getNewsList(this, 1);
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  // 引入通用设置文件
  @import "../../assets/sass/setting";

  .load-more{
    width:HalfRem(300px);
    margin:0 auto;
    margin-top:Rem(20px);
  }
</style>
