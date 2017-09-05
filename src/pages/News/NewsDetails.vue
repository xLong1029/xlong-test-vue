<!-- 模板 -->
<template>
  <div id="news-details">
    <!-- 判断是否显示加载项 -->
    <Loading v-if="loading"></Loading>
    <div v-else>
      <div class="news-title edge-frame">测试数据[电影名]: {{ newsItems.title }}</div>
      <div class="info edge-frame">
        <img :src="[newsItems.images.large]"/>
        <p>{{ newsItems.summary }}</p>
        <p v-show="isError">{{ errorTxt }}</p>
      </div>
      <!-- 版权 -->
      <Copyright></Copyright>
    </div>  
  </div> 
</template>

<script>
  // 外部引用Api
  import {Api} from '@/api/index.js'

  // 引入组件
  import Loading from '@/components/Common/Loading.vue'
  import Copyright from '@/components/Common/Copyright.vue'

  // 输出
  export default {
    name: 'news-details',
    components: { Loading , Copyright },
    data() {
      return{
        // 是否显示加载
        loading: true,
        newsID: '',
        newsItems: {
          "rating": {
            "max": "",
            "average": "",
            "stars": "",
            "min": ""
          },
          "reviews_count": "",
          "wish_count": "",
          "douban_site": "",
          "year": "",
          "images": {
            "small": "",
            "large": "",
            "medium": ""
          },
          "alt": "",
          "id": "",
          "mobile_url": "",
          "title": "",
          "do_count": "",
          "share_url": "",
          "seasons_count": "",
          "schedule_url": "",
          "episodes_count": "",
          "countries": [
            ""
          ],
          "genres": [],
          "collect_count": "",
          "casts": {
            "alt": "",
            "avatars": {
              "small": "",
              "large": "",
              "medium": ""
            },
            "name": "",
            "id": ""
          },
          "current_season": "",
          "original_title": "",
          "summary": "",
          "subtype": "",
          "directors": [
            {
              "alt": "",
              "avatars": {
                "small": "",
                "large": "",
                "medium": ""
              },
              "name": "",
              "id": ""
            }
          ],
          "comments_count": "",
          "ratings_count": "",
          "aka": []
        },
        isError: false,
        errorTxt: '',
      }
    },
    created() {
      // 获取传来的数据并复制给tag
      this.newsID = this.$route.query.name;
      // 调用Api获取案例内容
      Api.Fn.news.getNewsData(this);
    }
  }
</script>

<style scoped lang="scss" type="text/css">
  // 引入通用设置文件
  @import "../../assets/sass/setting";

  .news-title{
    line-height:Rem(40px);
    border-bottom:$deepBorder;
    margin-bottom:Rem(15px);
  }

  .info{
    margin-top: Rem(10px);
  }

  img{
    margin-bottom:Rem(10px);
  }

  p{
    text-indent:2em;
  }
</style>