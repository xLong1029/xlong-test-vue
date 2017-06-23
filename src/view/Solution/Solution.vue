<!-- 模板 -->
<template>
  <div id="sulotion">
    <!-- 判断是否显示加载项 -->
    <Loading v-if="loading"></Loading>
    <div v-else>
      <img :src="topPic"/>
      <!-- 解决方案 -->
      <section id="solution-part">
        <SectionTitle titleCn="解决方案" titleEng="solution"></SectionTitle>
        <SolutionList></SolutionList>
      </section>
      <!-- 我们的优势 -->
      <section id="advantage-part">
        <SectionTitle titleCn="我们的优势" titleEng="our advantage"></SectionTitle>
        <ul class="advantage">
            <li v-for="item in advantage">
                <img :src="[item.img]"/>
                <span>{{ item.name }}</span>
            </li>
        </ul>
        <div class="clearfix"></div>
      </section>
      <!-- 案例展示 -->
      <section id="case-part">
        <SectionTitle titleCn="经典案例" titleEng="classic case"></SectionTitle>
        <CaseList :num='caselist.num' :data='caselist.data' :status="caselist.status"></CaseList>
      </section>
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
  import SectionTitle from '@/components/Common/SectionTitle.vue'
  import SolutionList from '@/components/Solution/SolutionList.vue'
  import CaseList from '@/components/Solution/CaseList.vue'
  import Copyright from '@/components/Common/Copyright.vue'
  
  // 输出
  export default {
    name: 'sulotion',
    components: { Loading , SectionTitle , SolutionList , CaseList , Copyright },
    data() {
      return{
        // 是否显示加载
        loading: true,
        topPic: require('@/assets/pic/top-solution.jpg'),
        advantage: [
          {
            'img':require('@/assets/images/icon-advantage-1.png'),
            'name':'适应性'
          },
          {
            'img':require('@/assets/images/icon-advantage-2.png'),
            'name':'易用性'
          },
          {
            'img':require('@/assets/images/icon-advantage-3.png'),
            'name':'先进性'
          }
        ],
        caselist:{
          num: 5,
          data: '',
          status: false,
        }
      }
    },
    mounted(){
      // 调用Api获取案例内容
      Api.Fn.case.getCaseList(this, 1);
      // console.log(this.loading);
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";

  /* advantage */
  .advantage{
    margin:Rem(15px) 0;
    float:left;
    width:100%;

    li{
      width:33.33%;
      float:left;
      text-align:center;
    }

    img, span{
      display:block;
    }

    img{
      width:HalfRem(116px);
      height:HalfRem(116px);
      margin:0 auto;
    }
  }
</style>
