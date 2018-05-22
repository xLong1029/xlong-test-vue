<template>
  <div id="case-list"  ref='caselist'>
    <ul class="case-list edge-frame">
        <li v-for="item in data">
            <a :href="[item.alt]">
                <img :src="[item.images.large]"/>
                <span>测试数据[电影]：{{ item.title }}</span>
            </a>
        </li>
      </ul>
    <div class='clearfix'></div>
  </div>
</template>

<script>
  // 引入 axios
  import axios from 'axios'
  
  export default {
    name: 'case-list',
    props: ['num', 'data', 'status']
  }
</script>

<style lang="scss" scoped type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";

  /* case */
  .case-list{
    li{
      margin-bottom:HalfRem(20px);
    }

    a{
      display:block;
      text-align:center;
      cursor:pointer;
    }

    img{
      width:100%;
    }

    span{
      margin-top:HalfRem(20px);
      display:block;
    }
  }
</style>
