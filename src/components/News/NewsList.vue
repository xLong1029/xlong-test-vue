<template>
  <div id="news-list" ref='newslist'>
    <ul v-if="ok" class="news-list edge-frame">
      <li v-for="item in data">
          <router-link :to="{ name: 'NewsDetails', query: {name: item.id} }">
              <span>测试数据[电影]：{{ item.title }}</span><i class="icon-list-next"></i>
          </router-link>
      </li>
    </ul>
    <p v-else="ok">数据获取失败</p>
    <div class="clearfix"></div>
  </div>
</template>

<script>
  export default {
    name: 'news-list',
    // App.vue传来的属性名
    props: ['num', 'data' , 'status'],
    data() {
      return{
        ok: true,
      }
    },
    // 实例数据更新之后，才修改ok的值
    updated(){
      this.ok = this.status;
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";

  /* news */
  .news-list{
    li{
      border-bottom:$lightBorder;
      height:HalfRem(80px);
      line-height:HalfRem(80px);
    }
    li:last-child{
      border-bottom:none;
    }

    a{
      display:block;
      height:100%;
      width:100%;
      cursor:pointer;
    }

    span{
      display:block;
      float:left;
      width:94%;
      height:HalfRem(80px);
      text-overflow:ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  p{
    text-align:center;
  }
</style>
