<!-- 模板 -->
<template>
  <div id="result">
    <!-- 判断是否显示加载项 -->
    <Loading v-if="loading"></Loading>
    <div v-else>
      <ul v-if="ok" class="result-list edge-frame">
        <li v-for="item in list.data">
            <router-link :to="{ name: 'NewsDetails', query: {name: item.id} }">
                <div class="list-img fl"><img :src="item.images.small"/></div>
                <div class="list-desc fl">
                  <h2>测试数据[电影]：{{ item.title }}</h2>
                  <p>豆瓣评分：<span class="rating">{{ item.rating.average }}</span></p>
                </div>
                <i class="icon-list-next"></i>                
            </router-link>
        </li>
      </ul>
      <div class="clearfix"></div>
      <button v-show="showMore" ref="button" class="load-more" @click="loadMore">点击加载更多</button>      
      <div v-show="!list.status">
        <div class="clearfix"></div>
        <img class="notfound-pic" :src="noFoundPic"/>
        <p class="error">搜索不到数据，请返回</p>
      </div>
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
  import Copyright from '@/components/Common/Copyright.vue'
  
  // 输出
  export default {
    name: 'result',
    components: { Loading , Copyright },
    data() {
      return{
        // 是否显示加载
        loading: true,
        ok: true,
        // 设置搜索关键字
        tag:'',
        noFoundPic: require('@/assets/images/404.jpg'),
        list: {
          num: 0,
          data: [],
          status: true,
          // 每次加载记录数量
          loadNum: 10,
        },
        // 是否显示加载按钮
        showMore: false,
      }
    },
    // 钩子函数 mounted 实例渲染完后执行
    mounted() {
      // 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中
      // nextTick的触发时机：在同一事件循环中的数据变化后，DOM完成更新，立即执行nextTick(callback)内的回调
      this.$nextTick(function () {
        // 获取传来的数据并复制给tag
        this.tag = this.$route.query.tag;
        // 调用Api获取搜索内容
        Api.Fn.search.getSearchList(this);
      });
    },
    // 实例数据更新之后，才修改ok的值
    updated(){
      this.ok = this.list.status;
    },
    methods: {
      loadMore: function(){
        // 调用Api获取新闻新闻
        Api.Fn.search.getSearchList(this);
      }
    }
  }
</script>

<style scoped lang="scss" type="text/css">
  // 引入通用设置文件
  @import "../../assets/sass/setting";

  /* result */
  .result-list{
    li{
      border-bottom:$lightBorder;
      float:left;
      width:100%;
      position: relative;
      padding:10px 0;
    }

    .list-img{
      width:10%;
      margin-right: Rem(10px);

      img{
        display:block;
      }
    }

    .list-desc{
      width:70%;
    }

    a{
      display:block;
      height:100%;
      cursor:pointer;
    }

    i{
      position:absolute;
      right: 0;
      top:50%;
      margin-top:Rem(-6px);
    }

    h2{
      font-weight: normal;
      font-size: Rem(14px);
      text-overflow:ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    p{
      margin-top:Rem(8px);
      margin-bottom: 0;
      font-size: Rem(12px);
    }

    .rating{
      color:$mainColor;
      font-size:Rem(14px);
    }
  }

  .load-more{
    width:HalfRem(300px);
    margin:0 auto;
    margin-top:Rem(20px);
  }

  .error{
    text-align:center;
  }

  .notfound-pic{
    display:block;
    margin:Rem(20px) auto;
    width:HalfRem(250px);
    height:HalfRem(324px);
  }
</style>