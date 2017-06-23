<template>
	<div id="copyright">
    <p>Copyright © 2017 版权所有<br/>XLONG家里蹲有限公司 桂ICP备12345678号</p>
  </div>
</template>

<script>  
  export default {
    name: 'copyright'
  }
</script>

<style lang="scss" scoped type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";

  /* copyright*/
  #copyright{
    border-top:$deepBorder;
    padding:$edgeWidth;
    font-size:Rem(12px);
    margin-top:Rem(15px);

    p{
      color:$grayColor;
      text-align:center;
      margin-bottom:0;
    }
  }
</style>
