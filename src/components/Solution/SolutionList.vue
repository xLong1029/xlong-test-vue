<template>
  <div id="solution-list">
    <ul class="solution-list edge-frame">
      <li v-for="item in solution">
          <a>
              <img class="solution-pic fl" :src="[item.img]"/>
              <div class="solution-desc fr">
                  <h2>{{ item.title }}</h2>
                  <p>{{ item.text }}</p>
              </div>
              <div class="clearfix"></div>
          </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'solution-list',
    props: ['showNum'],
    data() {
      return {
        solution: [
          {
            'img': require('@/assets/images/icon-solution-1.png'),
            'title': '家里蹲系统',
            'text': '在家就能赚钱，勤学苦练，接到单子就不愁，再说下去我自己都信了。'
          },
          {
            'img': require('@/assets/images/icon-solution-2.png'),
            'title': '超神设计系统',
            'text': '自主创新，努力为行业企业提供全方位的超神设计解决方案。'
          },
          {
            'img': require('@/assets/images/icon-solution-3.png'),
            'title': '移动APP开发',
            'text': '实现将云计算、HTML5和移动APP等先进技术融合于专业管理系统中。'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";

  /* solution */
  .solution-list{
    line-height:normal;

    li{
      border-bottom:$lightBorder;
      padding-bottom:Rem(15px);
      margin-top:Rem(15px);

      &:last-child{
        border-bottom:none;
      }
    }

    a{
      display:block;
      width:100%;
    }

    .solution-pic{
      width:HalfRem(200px);
      height:HalfRem(160px);
      margin-left:1%;
    }

    .solution-desc{
      width:64%;
    }

    h2{
      font-size:Rem(16px);
      font-weight:normal;
      margin-bottom:Rem(15px);
    }

    p{
      color:$descColor;
      font-size:Rem(12px);
      margin-bottom:0;
    }

  }
</style>
