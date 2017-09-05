<!-- 模板 -->
<template>
  <div id="contact">
    <!--百度地图-->
    <BMap></BMap>
    <section class="contact-info">
      <SectionTitle titleCn="联系我们" titleEng="contact us"></SectionTitle>
      <div class="part">
          <h1>研发基地</h1>
          <p>广西壮族自治区 南宁市 西乡塘区</p>
      </div>
      <div class="part">
          <h1>公司地址</h1>
          <p>
              柳州市 柳北区 红碑路<br/>
              Hongbei Street, Liubei District, Liuzhou
          </p>
      </div>
      <div class="part">
          <h1>销售咨询</h1>
          <p>
              销售总监：N小姐<br/>
              电话：18376686xxx<br/>
              邮箱：381612175@qq.com
          </p>
          <p>
              技术总监：X小姐<br/>
              电话：18376686xxx<br/>
              邮箱：381612175@qq.com
          </p>
      </div>
      <div class="part">
          <h1>在线留言</h1>
          <div id="form-message">
            <form>
                <input ref="nameInput" type="text" v-model="name" placeholder="姓名"/>
                <input ref="contactInput" type="text" v-model="contact" placeholder="联系方式"/>
                <textarea ref="txtInput" placeholder="留言内容，目前用做测试功能，测试请输入电影类型（例如：喜剧）" v-model="txt"></textarea>
                <input type="button" value="提交" @click="onSubmit"/>
            </form>
          </div>
      </div>
    </section>
    <!-- 版权 -->
    <Copyright></Copyright>
  </div> 
</template>

<script>
  // 外部引用Api
  import {Api} from '@/api/index.js'

  // 引入组件
  import BMap from '@/components/Contact/BMap.vue'
  import SectionTitle from '@/components/Common/SectionTitle.vue'
  import Copyright from '@/components/Common/Copyright.vue'

  // 输出
  export default {
    name: 'contact',
    components: { SectionTitle , BMap , Copyright }, 
    data() {
      return{
        name: '',
        contact: '',
        txt: '',
      }
    },
    methods: {
      onSubmit: function(){
        //判断姓名是否为空
        if(this.name == '' || this.name == null || this.name.match(/^[ ]*$/))
        {
            alert('请留下您的姓名，谢谢！');
            //全选文本内容
            this.$refs.nameInput.select();
            return false;
        }
        //判断联系方式是否为空
        if(this.contact == '' || this.contact == null || this.contact.match(/^[ ]*$/))
        {
            alert('请留下您的联系方式，谢谢！');
            //全选文本内容
            this.$refs.contactInput.select();
            return false;
        }
        //判断搜留言内容是否为空
        if(this.txt == '' || this.txt == null || this.txt.match(/^[ ]*$/))
        {
            alert('请输入您的留言内容，谢谢！');
            //全选文本内容
            this.$refs.txtInput.select();
            return false;
        }
        // 调用Api获取搜索内容
        Api.Fn.message.postMsg(this);
      }
    }
  }
</script>

<style scoped  lang="scss" type="text/css">
  // 引入通用设置文件
  @import "../../assets/sass/setting";

  .part{
    padding:0 $edgeWidth;
    border-bottom:$lightBorder;
    margin-bottom:Rem(15px);

    &:last-child{
      border-bottom:none;
    }

    h1{
        font-size: 0.14rem;
        margin-bottom:Rem(10px);
    }
    p{
        color:$descColor;
    }
  }

  input[type="button"]{
    width:100%;
  }

  textarea{
    min-height:Rem(100px);
  }
</style>

