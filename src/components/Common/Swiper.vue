<template>
	<!-- Swiper -->
  <section id="awesomeSwiper" class="swiper-container">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 渲染的幻灯内容 -->
      <!-- 当Vue更新呈现的元素列表时v-for时，为了给予Vue一个提示，以便它可以跟踪每个节点的身份，从而重用和重新排序现有元素，您需要key为每个项目提供一个唯一的属性。 -->
      <swiper-slide v-for="item in swiperSlides.banner" :key="item.id">        
        <img :src="[item.imgUrl]"/>
      </swiper-slide>
      <!-- 左右箭头 -->
      <div v-show="swiperSlides.showArraw" class="swiper-button-prev" slot="button-prev"></div>
      <div v-show="swiperSlides.showArraw" class="swiper-button-next" slot="button-next"></div>
      <!-- 分页圆点 -->
      <div v-show="swiperSlides.showPage" class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
  // 引入 vue-awesome-swiper 里的组件
  import { swiper } from 'vue-awesome-swiper'

  export default {
    name: 'awesomeSwiper',
    props: ['swiperSlides'],
    components: {  
        swiper
    },
    data () {
      return {
        // vue-awesome-swiper 参数及使用方法请查看官方说明 https://surmon-china.github.io/vue-awesome-swiper
        swiperOption: {  
          pagination: '.swiper-pagination',  
          slidesPerView: 'auto',
          centeredSlides: true,  
          paginationClickable: true,
          // 自定义翻页样式
          paginationBulletRender(swiper, index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
            // return '<span class="' + className + ' swiper-pagination-bullet-custom' + '">' + (index + 1) + '</span>';
          },
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          spaceBetween: 0,
          speed: this.swiperSlides.speed,
          autoplay: this.swiperSlides.autoplay,
          loop: this.swiperSlides.loop,             
        }
      }
    },
    //定义这个swiper对象  
    computed: {
        swiper() {
          console.log(this.$refs.mySwiper.swiper);
          return this.$refs.mySwiper.swiper;  
        }  
    }
  }
</script>

<style lang="scss" type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";

  .swiper-button-next,.swiper-button-prev{
    background: url("../../assets/images/icon-arrows.png");
    width:23px;
    height:37px;
  }

  .swiper-button-next{
    background-position: -23px 0;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets{
    left:Rem(10px);
    width:auto;
  }

  .swiper-pagination-bullet{
    opacity: 1;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-custom {
    display:inline-block;
    width:HalfRem(16px);
    height:HalfRem(16px);
    background:#bec7d8;
    border-radius:HalfRem(16px);
    margin:0 HalfRem(8px);;
    -webkit-transition:all .3s ease-out;
    -o-transition:all .3s ease-out;
    -ms-transition:all .3s ease-out;
    -moz-transition:all .3s ease-out;
    transition:all .3s ease-out;
  }
  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    background:$mainColor;
    width:HalfRem(48px);
  }
</style>
