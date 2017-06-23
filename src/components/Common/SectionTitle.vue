<template>
	<div id="title" class="section-title">
    <div class="line"></div>
    <h1 class="font">                      
      <span>{{ titleCn }}</span>
      <i>{{ titleEng }}</i>
    </h1>
  </div>
</template>

<script>  
  export default {
    name: 'title',
    props: ['titleCn', 'titleEng']
  }
</script>

<style lang="scss" scoped type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";

  /* section-title */
  .section-title{
    height:HalfRem(68px);
    position: relative;
    margin:HalfRem(32px) 0;

    .line{
      width:100%;
      height:50%;
      border-bottom:$deepBorder;
      position:absolute;
      z-index:2;
    }

    .font{
      position:relative;
      z-index:3;
      background:#fff;
      width: HalfRem(220px);
      height: HalfRem(68px);
      font-weight: normal;
      margin:0 auto;
    }
    
    span, i{
      display:block;
      margin:0 auto;
      text-align:center;
      line-height:1.2;
    }

    span{
      font-size:Rem(16px);
      color:$mainColor;
    }

    i{
      font-style:normal;
      font-variant:small-caps;
      color:$engColor;
      font-size:Rem(13px);
    }
  }
</style>
