<!-- 模板 -->
<template>
  <div id="search">
    <section class="search">
      <form class="edge-frame">
          <input ref="tagInput" class="fl" type="text" v-model="tag" placeholder="请输入搜索电影类型(例如：喜剧)" />
          <input class="fr" type="button" value="搜索" @click="search" />
          <div class="clearfix"></div>
      </form>
    </section>
    <section class="commend">
      <h2>推荐搜索：</h2>
      <div class="commend-list edge-frame">
        <a v-for="item in commendTag" @click="[sendSearch(item)]">{{ item }}</a>
      </div>
    </section>
    <!-- 版权 -->
    <Copyright></Copyright>
  </div> 
</template>

<!-- script -->
<script>
  import Copyright from '@/components/Common/Copyright.vue'

  // 输出
  export default {
    name: 'search',
    components: { Copyright },
    data() {
      return{ 
        // 设置搜索关键字
        tag:'',
        commendTag:['热门', '最新', '冷门佳片', '喜剧', '喜剧','悲剧','科幻','热血','动作','爱情','悬疑','成长']
      }
    },
    methods:{
      search: function(){
        //判断搜索内容是否为空
        if(this.tag == '' || this.tag == null || this.tag.match(/^[ ]*$/))
        {
            alert('请输入搜索内容！');
            //全选文本内容
            this.$refs.tagInput.select();
            return false;
        }
        else{
          // 路由跳转并传值传值
          this.$router.push({path: '/result', query: {tag:this.tag}});
        }
      },
      sendSearch:function(str){
        // 路由跳转并传值传值
        this.$router.push({path: '/result', query: {tag:str}});
      }
    }
  }
</script>

<style scoped lang="scss" type="text/css">
  // 引入通用设置文件
  @import "../../assets/sass/setting";

  /* search */
  .search{
    padding-top:Rem(15px);
  }

  form{
    display:block;
    padding-bottom:Rem(15px);
    border-bottom:$lightBorder;
  }

  input[type='text']{
    width:75%;
    margin-bottom:0;
  }

  input[type='button']{
    width:23%;
  }

  /* commend */
  .commend{
    min-height:Rem(300px);

    h2{
      padding:Rem(4px) 0;
      font-weight:normal;
      font-size:Rem(14px);
      text-indent:$edgeWidth;
      //background:#f5f5f5;
      color:$mainColor;
    }
  }

  a{
    padding:Rem(3px) Rem(10px);
    margin:Rem(10px) Rem(9px) 0 0;
    float:left;
    background: #f5f5f5;
    color:#65A1CA;
    cursor: pointer;

    @each $props, $style in $borderRadius{
      #{$props}: $style;
    }
  }  
</style>