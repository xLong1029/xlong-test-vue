<!-- 模板 -->
<template>
  <div id="dituContent" class="map">此为百度地图显示部分，功能还未开启</div> 
</template>

<script>
  // 外部引用js函数 initMap
  import {initMap} from '@/assets/js/map.js'

  export default{
    name: 'dituContent',
    data() {
      return{
        map:{
          // 需要生成地图的容器ID
          id: 'dituContent',
          // 地图坐标
          point:{
            X: '109.410185',
            Y: '24.359800'
          },
          // 缩放级别
          zoom: 17,
          // 设置地图事件
          setEvent: true,
          // 向地图中添加marker
          addMarker: true,
          // 向地图添加控件
          addMapControl: false,
          // 标注点数组（w,h为图标大小）,可标记多个
          markerArr: [
            {
              title: 'XLONG家里蹲',
              content: 'XLONG家里蹲有限公司',
              point: '109.409431|24.35962',
              isOpen: 0,
              // icon图标
              icon:{
                w: 33,
                h: 46,
                l: 0,
                t: 0,
                x: 6,
                lb: 5,
                url: require('@/assets/images/icon-location.png')
              },
              // 设置标签样式
              label:{
                  left: '30px',
                  top: '-40px',
                  position: 'absolute',
                  color: '#333',
                  cursor: 'pointer',
                  border: 'none',
                  padding: '8px'
                },
            }
          ],
        }        
      }
    },
    mounted() {
      initMap(this.map);
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  // 引入通用设置文件
  @import "../../assets/sass/setting";

  /* map */
  .iw_poi_title {
    color:#CC5522;
    font-size:14px;
    font-weight:bold;
    overflow:hidden;
    padding-right:13px;
    white-space:nowrap
  }

  .iw_poi_content {
    font:12px arial,sans-serif;
    overflow:visible;
    padding-top:4px;
    white-space:-moz-pre-wrap;
    word-wrap:break-word
  }

  .map{
    width:100%;
    height:Rem(200px);
    text-align:center;
    background: $lightBlueColor;
    color: $mainColor;
    line-height: Rem(200px);
  }
</style>

