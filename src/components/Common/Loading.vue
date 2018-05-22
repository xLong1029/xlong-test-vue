<template>
	<div id="loading">
		<img class="loadimg" :src="loadImg" />
  </div>
</template>

<script>  
  export default {
    name: 'loading',
    data() {
    	return{
    		loadImg: require('@/assets/images/loading.gif'),
    	}
    }
  }
</script>

<style lang="scss" type="text/css">
  //引入通用设置文件
  @import "../../assets/sass/setting";

  .loadimg{
  	display: block;
  	margin: auto;
  	width: Rem(150px);
  	height: Rem(150px);
  	margin-top: Rem(170px);
  }
</style>
