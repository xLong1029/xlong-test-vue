<!-- 模板 -->
<template>
  <div id="home">
    <!-- 判断是否显示加载项 -->
    <Loading v-if="loading < 2"></Loading>
    <div v-else>
      <!-- 轮播图 -->
      <Swiper :swiperSlides="slideItmes"></Swiper>
      <!-- 产品中心 -->
      <section id="product-part">
        <SectionTitle titleCn="产品中心" titleEng="product center"></SectionTitle>
        <ProductList :showNum='productNum'></ProductList>
      </section>
      <!-- 新闻资讯 -->
      <section id="news-part">
        <SectionTitle titleCn="新闻资讯" titleEng="news center"></SectionTitle>
        <NewsList :num='newslist.num' :data='newslist.data' :status="newslist.status"></NewsList>
      </section>
      <!-- 经典案例 -->
      <section id="case-part">
        <SectionTitle titleCn="经典案例" titleEng="classic case"></SectionTitle>
        <CaseList :num='caselist.num' :data='caselist.data' :status="caselist.status"></CaseList>
      </section>
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
  import Swiper from '@/components/Common/Swiper.vue'
  import SectionTitle from '@/components/Common/SectionTitle.vue'
  import ProductList from '@/components/Product/ProductList.vue'
  import NewsList from '@/components/News/NewsList.vue'
  import CaseList from '@/components/Solution/CaseList.vue'
  import Copyright from '@/components/Common/Copyright.vue'
  
  // 输出
  export default {
    name: 'home',
    components: { Loading , Swiper , SectionTitle , ProductList , NewsList , CaseList , Copyright }, 
    data() {
      return{
        // 是否显示加载
        loading: 0,
        // 设置轮播图参数
        slideItmes:{
          banner: [
            {
              imgUrl:require('@/assets/pic/banner-1.jpg'),
            },
            {
              imgUrl:require('@/assets/pic/banner-2.jpg'),
            }
          ],
          showPage: true,
          showArraw: false,
          speed: 800,
          autoplay: 3000,
          loop: true,
        },
        // 设置显示产品的个数
        productNum: 6,
        newslist:{
          num:0,
          data:[],
          status: false,
          loadNum:5,
        },
        // 设置显示案例的个数
        caselist:{
          num: 3,
          data: '',
          status: false,
        }
      }
    },
    // created 这个钩子在实例被创建之后被调用，一般可以在 created 函数中调用 ajax 获取页面初始化所需的数据。
    created() {
      // 调用Api获取新闻新闻
      Api.Fn.news.getNewsList(this, 2);
      // 调用Api获取案例内容
      Api.Fn.case.getCaseList(this, 2);
    }
  }
</script>