<!-- 模板 -->
<template>
  <div id="product">
    <img class="top-pic" :src="topPic"/>
    <!-- product-info -->
    <section id="product-info">
        <!-- 标题 -->
        <SectionTitle titleCn="产品介绍" titleEng="product introduce"></SectionTitle>
        <div class="edge-frame">
            <p>“家里蹲”是一套适用于各行业信息化管理系统,在家就能实现为各行业企业提供系统的信息化解决方案。</p>
            <p>研发人员秉持先进的计算机技术和软件设计理念，充分采用云计算、HTML5和移动APP等先进技术，实现了该系统运行流畅、使用简单等优势。</p>
            <p>我们的“家里蹲”系统更依据科学的需求调查，具有功能全面、实践性强、技术前瞻等特点，在实现系统充分契合企业短期发展需求的同时，务求使该系统具有更好地兼容性、灵活性，以备企业更多中长期发展需求。</p>
        </div>
        <div class="clearfix"></div>
    </section>
    <!-- product-sys -->
    <section id="product-sys">
      <!-- 标题 -->
      <SectionTitle titleCn="产品系统" titleEng="product system"></SectionTitle>
      <!-- 产品列表 -->
      <ProductList :showNum='productNum'></ProductList>
    </section>
    <!-- 版权 -->
    <Copyright></Copyright>
  </div> 
</template>

<!-- script -->
<script>
  // 引入组件  
  import SectionTitle from '@/components/Common/SectionTitle.vue'
  import ProductList from '@/components/Product/ProductList.vue'
  import Copyright from '@/components/Common/Copyright.vue'

  // 输出
  export default {
    name: 'product',
    components: { SectionTitle , ProductList , Copyright },
    data() {
      return{ 
        topPic: require('@/assets/pic/top-product.jpg'),
        // 设置显示产品的个数
        productNum: 7,
      }
    }
  }
</script>

<style scoped>
  #product-info{
    margin-bottom:20px;
  }
  p{
    text-indent:2em;
  }
</style>
