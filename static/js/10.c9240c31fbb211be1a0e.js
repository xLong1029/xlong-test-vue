webpackJsonp([10],{138:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(60),o=n.n(r);e.default={name:"search",components:{Copyright:o.a},data:function(){return{tag:"",commendTag:["热门","最新","冷门佳片","喜剧","喜剧","悲剧","科幻","热血","动作","爱情","悬疑","成长"]}},methods:{search:function(){if(""==this.tag||null==this.tag||this.tag.match(/^[ ]*$/))return alert("请输入搜索内容！"),this.$refs.tagInput.select(),!1;this.$router.push({path:"/result",query:{tag:this.tag}})},sendSearch:function(t){this.$router.push({path:"/result",query:{tag:t}})}}}},150:function(t,e,n){e=t.exports=n(10)(!0),e.push([t.i,".search[data-v-651623bc]{padding-top:.15rem}form[data-v-651623bc]{display:block;padding-bottom:.15rem;border-bottom:1px solid #eee}input[type=text][data-v-651623bc]{width:75%;margin-bottom:0}input[type=button][data-v-651623bc]{width:23%}.commend[data-v-651623bc]{min-height:3rem}.commend h2[data-v-651623bc]{padding:.04rem 0;font-weight:400;font-size:.14rem;text-indent:.08rem;color:#0097fc}a[data-v-651623bc]{padding:.03rem .1rem;margin:.1rem .09rem 0 0;float:left;background:#f5f5f5;color:#65a1ca;cursor:pointer;border-radius:4px;-webkit-border-radius:4px;-o-border-radius:4px;-moz-border-radius:4px}","",{version:3,sources:["E:/project/xlong-test-vue/src/pages/Search/Search.vue"],names:[],mappings:"AACA,yBACE,kBAAqB,CACtB,AACD,sBACE,cAAe,AACf,sBAAwB,AACxB,4BAA8B,CAC/B,AACD,kCACE,UAAW,AACX,eAAiB,CAClB,AACD,oCACE,SAAW,CACZ,AAGD,0BACE,eAAiB,CAClB,AACD,6BACI,iBAAmB,AACnB,gBAAoB,AACpB,iBAAmB,AACnB,mBAAqB,AACrB,aAAe,CAClB,AACD,mBACE,qBAAwB,AACxB,wBAA2B,AAC3B,WAAY,AACZ,mBAAoB,AACpB,cAAe,AACf,eAAgB,AAChB,kBAAmB,AACnB,0BAA2B,AAC3B,qBAAsB,AACtB,sBAAwB,CACzB",file:"Search.vue",sourcesContent:["/* search */\n.search[data-v-651623bc] {\n  padding-top: 0.15rem;\n}\nform[data-v-651623bc] {\n  display: block;\n  padding-bottom: 0.15rem;\n  border-bottom: 1px solid #eee;\n}\ninput[type='text'][data-v-651623bc] {\n  width: 75%;\n  margin-bottom: 0;\n}\ninput[type='button'][data-v-651623bc] {\n  width: 23%;\n}\n\n/* commend */\n.commend[data-v-651623bc] {\n  min-height: 3rem;\n}\n.commend h2[data-v-651623bc] {\n    padding: 0.04rem 0;\n    font-weight: normal;\n    font-size: 0.14rem;\n    text-indent: 0.08rem;\n    color: #0097fc;\n}\na[data-v-651623bc] {\n  padding: 0.03rem 0.1rem;\n  margin: 0.1rem 0.09rem 0 0;\n  float: left;\n  background: #f5f5f5;\n  color: #65A1CA;\n  cursor: pointer;\n  border-radius: 4px;\n  -webkit-border-radius: 4px;\n  -o-border-radius: 4px;\n  -moz-border-radius: 4px;\n}\n"],sourceRoot:""}])},162:function(t,e,n){var r=n(150);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(11)("06f7230e",r,!0,{})},193:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search"}},[n("section",{staticClass:"search"},[n("form",{staticClass:"edge-frame"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],ref:"tagInput",staticClass:"fl",attrs:{type:"text",placeholder:"请输入搜索电影类型(例如：喜剧)"},domProps:{value:t.tag},on:{input:function(e){e.target.composing||(t.tag=e.target.value)}}}),t._v(" "),n("input",{staticClass:"fr",attrs:{type:"button",value:"搜索"},on:{click:t.search}}),t._v(" "),n("div",{staticClass:"clearfix"})])]),t._v(" "),n("section",{staticClass:"commend"},[n("h2",[t._v("推荐搜索：")]),t._v(" "),n("div",{staticClass:"commend-list edge-frame"},t._l(t.commendTag,function(e){return n("a",{on:{click:function(n){t.sendSearch(e)}}},[t._v(t._s(e))])}),0)]),t._v(" "),n("Copyright")],1)},staticRenderFns:[]}},52:function(t,e,n){function r(t){n(162)}var o=n(0)(n(138),n(193),r,"data-v-651623bc",null);t.exports=o.exports},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"copyright"}},58:function(t,e,n){e=t.exports=n(10)(!0),e.push([t.i,"#copyright[data-v-12fc2554]{border-top:1px solid #ccc;padding:.08rem;font-size:.12rem;margin-top:.15rem}#copyright p[data-v-12fc2554]{color:#999;text-align:center;margin-bottom:0}","",{version:3,sources:["E:/project/xlong-test-vue/src/components/Common/Copyright.vue"],names:[],mappings:"AACA,4BACE,0BAA2B,AAC3B,eAAiB,AACjB,iBAAmB,AACnB,iBAAoB,CACrB,AACD,8BACI,WAAY,AACZ,kBAAmB,AACnB,eAAiB,CACpB",file:"Copyright.vue",sourcesContent:["/* copyright*/\n#copyright[data-v-12fc2554] {\n  border-top: 1px solid #ccc;\n  padding: 0.08rem;\n  font-size: 0.12rem;\n  margin-top: 0.15rem;\n}\n#copyright p[data-v-12fc2554] {\n    color: #999;\n    text-align: center;\n    margin-bottom: 0;\n}\n"],sourceRoot:""}])},59:function(t,e,n){var r=n(58);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(11)("6853bf70",r,!0,{})},60:function(t,e,n){function r(t){n(59)}var o=n(0)(n(57),n(61),r,"data-v-12fc2554",null);t.exports=o.exports},61:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"copyright"}},[n("p",[t._v("Copyright © 2017 版权所有"),n("br"),t._v("XLONG家里蹲有限公司 桂ICP备12345678号")])])}]}}});
//# sourceMappingURL=10.c9240c31fbb211be1a0e.js.map