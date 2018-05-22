<template>
  <div id="product-list" class="p-list">
  	<ul :data-list-num="showNum">
      <li v-for="(item , index) in products">
          <router-link v-if="index < showNum" :to="{ name: 'ProductDetails', query: {name: item.name} }">
              <i :class="[item.class]"></i>
              <span>{{ item.name }}</span>
          </router-link>
      </li>
    </ul>
    <div class="clearfix"></div>
  </div>
</template>

<script>  
  export default {
    name: 'product-list',
    props: ['showNum'],
    data() {
      return {
        products: [
            {
              'class': 'icon-product-1',
              'name': '订单管理系统'
            },
            {
              'class': 'icon-product-2',
              'name': '超神设计系统'
            },
            {
              'class': 'icon-product-3',
              'name': '生产计划管理系统'
            },
            {
              'class': 'icon-product-4',
               'name': '制造生产管理系统'
             },
            {
              'class': 'icon-product-5',
              'name': '仓储物流管理系统'
            },
            {
              'class': 'icon-product-6',
              'name': '成本财务管理系统'
            },
            {
              'class': 'icon-product-7',
              'name': '物流管理系统'
            }
        ]
      }
    },
    // 钩子函数 mounted 实例渲染完后执行
    mounted: function(){
      // console.log(this.showNum);
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";

  /* product */
  .p-list{
    li{
      width:33.33%;
      float:left;
      margin:HalfRem(20px) 0;
    }

    a{
      display:block;
      cursor:pointer;
    }

    i, span{
      display:block;
      margin:0 auto;
    }

    span{
      text-align:center;
      margin-top:HalfRem(20px);
      font-size:Rem(12px);
    }
  }

  /* product-icon */
  $product-icon: 1, 2, 3, 4, 5, 6, 7;
  @each $index in $product-icon {
    .icon-product-#{$index} {
      background: url('../../assets/images/icon-product-#{$index}.png') no-repeat;
      background-size:100%;
      width:HalfRem(110px);
      height:HalfRem(110px);
    }
  }
</style>
