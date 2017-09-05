<!-- 模板 -->
<template>
  <div id="product-details">
    <img class="top-pic" :src="topPic"/>
    <!-- product-info -->
    <section class="edge-frame">
      <div class="product-title">{{ productName }}</div>
      <!-- 产品图片轮播图 -->
      <div class="swiper"><Swiper :swiperSlides="slideItmes"></Swiper></div>
      <div class="info">
        <p>这里是“家里蹲”产品子系统介绍，因为我已经想不出什么可编的了，所以，你们就尽量凑合着看吧。我觉得就这点字也够你们看很久了吧。</p>
        <p>这里是“家里蹲”产品子系统介绍，因为我已经想不出什么可编的了，所以，你们就尽量凑合着看吧。我觉得就这点字也够你们看很久了吧。</p>
        <p>这里是“家里蹲”产品子系统介绍，因为我已经想不出什么可编的了，所以，你们就尽量凑合着看吧。我觉得就这点字也够你们看很久了吧。</p>
      </div>
    </section>
    <!-- 版权 -->
    <Copyright></Copyright>
  </div> 
</template>

<!-- script -->
<script>
  // 引入组件  
  import Swiper from '@/components/Common/Swiper.vue'
  import Copyright from '@/components/Common/Copyright.vue'

  // 输出
  export default {
    name: 'product-details',
    components: { Swiper , Copyright },
    data() {
      return{ 
        topPic: require('@/assets/pic/top-product.jpg'),
        // 设置轮播图参数
        slideItmes:{
          banner: [
            {
              imgUrl:require('@/assets/pic/pic-product-info-1.png')
            },
            {
              imgUrl:require('@/assets/pic/pic-product-info-2.png')
            },
            {
              imgUrl:require('@/assets/pic/pic-product-info-3.png')
            }
          ],
          showPage: false,
          showArraw: true,
          speed: 800,
          autoplay: 0,
          loop: true,
        },
        productName: '',
      }
    },
    created() {
        // 获取传来的数据并复制给tag
        this.productName = this.$route.query.name;
    }
  }
</script>

<style scoped lang="scss" type="text/css">
  // 引入通用设置文件
  @import "../../assets/sass/setting";

  .product-title{
    line-height:Rem(40px);
    border-bottom:$deepBorder;
    margin-bottom:Rem(15px);
  }

  .product-pic{
    position:relative;
    border:$lightBorder;
    margin-bottom:Rem(15px);

    img{
      display:block;
    }

    span{
      position:absolute;
      bottom:0;
      z-index:2;
      width:100%;
      height:Rem(30px);
      line-height:Rem(30px);
      background:$mainColor;
      color:#fff;
      text-align:center;
    }
  }

  .swiper{
    border:$lightBorder;
  }

  .info{
    margin-top: Rem(10px);
  }

  p{
    text-indent:2em;
  }
</style>
