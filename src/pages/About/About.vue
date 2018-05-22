<!-- 模板 -->
<template>
  <div id="about">
    <!-- 动态绑定图片地址，才能使用assets文件夹路径 -->
    <img class="top-pic" :src="topPic"/>
    <SectionTitle titleCn="关于我们" titleEng="about us"></SectionTitle>
    <div class="about-cont edge-frame">
        <p>XLONG家里蹲有限公司是一家高新技术企业，成立于2017年，注册资金xx万元，致力于企业的科技信息化发展方向，以”没钱就赚，有钱就花”为核心价值理念。</p>
        <p>XLONG家里蹲有限公司服务于各种类型的互联网行业，提供各行业企业整套信息化方案和配套技术服务，志在通过精湛的技术水平和精诚的不懈努力，提升各行业企业的信息化水平，创造价值，铸就品质。</p>
        <img :src="companyPic"/>
        <p>XLONG家里蹲聚多位具有先进技术理论和丰富从业经验的专业人才，坚持自主研发、自主创新。</p>
        <p>公司广纳群贤，目前正在研发新一代基于最新信息技术的企业信息化解决方案，说的我自己都信了。</p>
    </div>
    <!-- 版权 -->
    <Copyright></Copyright>  
  </div> 
</template>

<!-- script -->
<script>
  import SectionTitle from '@/components/Common/SectionTitle.vue'
  import Copyright from '@/components/Common/Copyright.vue'

  // 输出
  export default {
    name: 'home',
    components: { SectionTitle , Copyright },
    data() {
      return{ 
        topPic: require("@/assets/pic/top-about.jpg"),
        companyPic: require("@/assets/pic/pic-about-team.jpg"),
      }
    }
  }
</script>

<style scoped>
  p{
    text-indent:2em;
  }
</style>

