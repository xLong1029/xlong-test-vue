webpackJsonp([5],{135:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(90),o=n(96),s=n.n(o),a=n(60),i=n.n(a);e.default={name:"news-details",components:{Loading:s.a,Copyright:i.a},data:function(){return{loading:!0,newsID:"",newsItems:{rating:{max:"",average:"",stars:"",min:""},reviews_count:"",wish_count:"",douban_site:"",year:"",images:{small:"",large:"",medium:""},alt:"",id:"",mobile_url:"",title:"",do_count:"",share_url:"",seasons_count:"",schedule_url:"",episodes_count:"",countries:[""],genres:[],collect_count:"",casts:{alt:"",avatars:{small:"",large:"",medium:""},name:"",id:""},current_season:"",original_title:"",summary:"",subtype:"",directors:[{alt:"",avatars:{small:"",large:"",medium:""},name:"",id:""}],comments_count:"",ratings_count:"",aka:[]},isError:!1,errorTxt:""}},created:function(){this.newsID=this.$route.query.name,r.a.Fn.news.getNewsData(this)}}},152:function(t,e,n){e=t.exports=n(10)(!0),e.push([t.i,".news-title[data-v-81fdba14]{line-height:.4rem;border-bottom:1px solid #ccc;margin-bottom:.15rem}.info[data-v-81fdba14]{margin-top:.1rem}img[data-v-81fdba14]{margin-bottom:.1rem}p[data-v-81fdba14]{text-indent:2em}","",{version:3,sources:["E:/project/xlong-test-vue/src/pages/News/NewsDetails.vue"],names:[],mappings:"AACA,6BACE,kBAAoB,AACpB,6BAA8B,AAC9B,oBAAuB,CACxB,AACD,uBACE,gBAAmB,CACpB,AACD,qBACE,mBAAsB,CACvB,AACD,mBACE,eAAiB,CAClB",file:"NewsDetails.vue",sourcesContent:["\n.news-title[data-v-81fdba14] {\n  line-height: 0.4rem;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 0.15rem;\n}\n.info[data-v-81fdba14] {\n  margin-top: 0.1rem;\n}\nimg[data-v-81fdba14] {\n  margin-bottom: 0.1rem;\n}\np[data-v-81fdba14] {\n  text-indent: 2em;\n}\n"],sourceRoot:""}])},164:function(t,e,n){var r=n(152);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(11)("8dc18c9a",r,!0,{})},195:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"news-details"}},[t.loading?n("Loading"):n("div",[n("div",{staticClass:"news-title edge-frame"},[t._v("测试数据[电影名]: "+t._s(t.newsItems.title))]),t._v(" "),n("div",{staticClass:"info edge-frame"},[n("img",{attrs:{src:[t.newsItems.images.large]}}),t._v(" "),n("p",[t._v(t._s(t.newsItems.summary))]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"isError"}]},[t._v(t._s(t.errorTxt))])]),t._v(" "),n("Copyright")],1)],1)},staticRenderFns:[]}},49:function(t,e,n){function r(t){n(164)}var o=n(0)(n(135),n(195),r,"data-v-81fdba14",null);t.exports=o.exports},55:function(t,e,n){"use strict";function r(t){return"[object Array]"===B.call(t)}function o(t){return"[object ArrayBuffer]"===B.call(t)}function s(t){return"undefined"!=typeof FormData&&t instanceof FormData}function a(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function i(t){return"string"==typeof t}function c(t){return"number"==typeof t}function u(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function l(t){return"[object Date]"===B.call(t)}function d(t){return"[object File]"===B.call(t)}function p(t){return"[object Blob]"===B.call(t)}function m(t){return"[object Function]"===B.call(t)}function h(t){return f(t)&&m(t.pipe)}function g(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function A(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function y(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=y(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)w(arguments[n],t);return e}function C(t,e,n){return w(e,function(e,r){t[r]=n&&"function"==typeof e?x(e,n):e}),t}var x=n(66),b=n(91),B=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isBuffer:b,isFormData:s,isArrayBufferView:a,isString:i,isNumber:c,isObject:f,isUndefined:u,isDate:l,isFile:d,isBlob:p,isFunction:m,isStream:h,isURLSearchParams:g,isStandardBrowserEnv:A,forEach:w,merge:y,extend:C,trim:v}},56:function(t,e,n){"use strict";(function(e){function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n(55),s=n(87),a={"Content-Type":"application/x-www-form-urlencoded"},i={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(62):void 0!==e&&(t=n(62)),t}(),transformRequest:[function(t,e){return s(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};i.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){i.headers[t]={}}),o.forEach(["post","put","patch"],function(t){i.headers[t]=o.merge(a)}),t.exports=i}).call(e,n(12))},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"copyright"}},58:function(t,e,n){e=t.exports=n(10)(!0),e.push([t.i,"#copyright[data-v-12fc2554]{border-top:1px solid #ccc;padding:.08rem;font-size:.12rem;margin-top:.15rem}#copyright p[data-v-12fc2554]{color:#999;text-align:center;margin-bottom:0}","",{version:3,sources:["E:/project/xlong-test-vue/src/components/Common/Copyright.vue"],names:[],mappings:"AACA,4BACE,0BAA2B,AAC3B,eAAiB,AACjB,iBAAmB,AACnB,iBAAoB,CACrB,AACD,8BACI,WAAY,AACZ,kBAAmB,AACnB,eAAiB,CACpB",file:"Copyright.vue",sourcesContent:["/* copyright*/\n#copyright[data-v-12fc2554] {\n  border-top: 1px solid #ccc;\n  padding: 0.08rem;\n  font-size: 0.12rem;\n  margin-top: 0.15rem;\n}\n#copyright p[data-v-12fc2554] {\n    color: #999;\n    text-align: center;\n    margin-bottom: 0;\n}\n"],sourceRoot:""}])},59:function(t,e,n){var r=n(58);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(11)("6853bf70",r,!0,{})},60:function(t,e,n){function r(t){n(59)}var o=n(0)(n(57),n(61),r,"data-v-12fc2554",null);t.exports=o.exports},61:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"copyright"}},[n("p",[t._v("Copyright © 2017 版权所有"),n("br"),t._v("XLONG家里蹲有限公司 桂ICP备12345678号")])])}]}},62:function(t,e,n){"use strict";var r=n(55),o=n(79),s=n(82),a=n(88),i=n(86),c=n(65),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(81);t.exports=function(t){return new Promise(function(e,f){var l=t.data,d=t.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||i(t.url)||(p=new window.XDomainRequest,m="onload",h=!0,p.onprogress=function(){},p.ontimeout=function(){}),t.auth){var g=t.auth.username||"",v=t.auth.password||"";d.Authorization="Basic "+u(g+":"+v)}if(p.open(t.method.toUpperCase(),s(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p[m]=function(){if(p&&(4===p.readyState||h)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?p.response:p.responseText,s={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:t,request:p};o(e,f,s),p=null}},p.onerror=function(){f(c("Network Error",t,null,p)),p=null},p.ontimeout=function(){f(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var A=n(84),w=(t.withCredentials||i(t.url))&&t.xsrfCookieName?A.read(t.xsrfCookieName):void 0;w&&(d[t.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(d,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete d[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),f(t),p=null)}),void 0===l&&(l=null),p.send(l)})}},63:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},64:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},65:function(t,e,n){"use strict";var r=n(78);t.exports=function(t,e,n,o,s){var a=new Error(t);return r(a,e,n,o,s)}},66:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},67:function(t,e,n){t.exports=n(73)},73:function(t,e,n){"use strict";function r(t){var e=new a(t),n=s(a.prototype.request,e);return o.extend(n,a.prototype,e),o.extend(n,e),n}var o=n(55),s=n(66),a=n(75),i=n(56),c=r(i);c.Axios=a,c.create=function(t){return r(o.merge(i,t))},c.Cancel=n(63),c.CancelToken=n(74),c.isCancel=n(64),c.all=function(t){return Promise.all(t)},c.spread=n(89),t.exports=c,t.exports.default=c},74:function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(63);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},75:function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new a,response:new a}}var o=n(56),s=n(55),a=n(76),i=n(77),c=n(85),u=n(83);r.prototype.request=function(t){"string"==typeof t&&(t=s.merge({url:arguments[0]},arguments[1])),t=s.merge(o,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!c(t.url)&&(t.url=u(t.baseURL,t.url));var e=[i,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},s.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(s.merge(n||{},{method:t,url:e}))}}),s.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(s.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},76:function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(55);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},77:function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(55),s=n(80),a=n(64),i=n(56);t.exports=function(t){return r(t),t.headers=t.headers||{},t.data=s(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||i.adapter)(t).then(function(e){return r(t),e.data=s(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(r(t),e&&e.response&&(e.response.data=s(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},78:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},79:function(t,e,n){"use strict";var r=n(65);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},80:function(t,e,n){"use strict";var r=n(55);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},81:function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function o(t){for(var e,n,o=String(t),a="",i=0,c=s;o.charAt(0|i)||(c="=",i%1);a+=c.charAt(63&e>>8-i%1*8)){if((n=o.charCodeAt(i+=.75))>255)throw new r;e=e<<8|n}return a}var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=o},82:function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(55);t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(o.isURLSearchParams(e))s=e.toString();else{var a=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(r(e)+"="+r(t))}))}),s=a.join("&")}return s&&(t+=(-1===t.indexOf("?")?"?":"&")+s),t}},83:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},84:function(t,e,n){"use strict";var r=n(55);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,s,a){var i=[];i.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},85:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},86:function(t,e,n){"use strict";var r=n(55);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},87:function(t,e,n){"use strict";var r=n(55);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},88:function(t,e,n){"use strict";var r=n(55);t.exports=function(t){var e,n,o,s={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(s[e]=s[e]?s[e]+", "+n:n)}),s):s}},89:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},90:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(67),o=n.n(r);o.a.defaults.headers.get["Cache-Control"]="no-cache",o.a.defaults.headers.get.Pragma="no-cache";var s=function(){var t=window.Fn||{};return t.news={getNewsList:function(t,e){o.a.get("/api/movie/in_theaters",{params:{city:"柳州",start:t.newslist.num,count:t.newslist.loadNum}}).then(function(n){switch(n.data&&n.data.subjects.length?(t.newslist.data=t.newslist.data.concat(n.data.subjects),t.newslist.status=!0,t.showMore=!0,t.newslist.num+=t.newslist.loadNum):(console.log("无数据"),t.newslist.status=!1,t.showMore=!1),e){case 1:t.loading=!1;break;case 2:t.loading+=1;break;default:console.log("加载出错")}}).catch(function(e){console.log(e),t.newslist.status=!1})},getNewsData:function(t){o.a.get("/api/movie/subject/"+t.newsID).then(function(e){e.data?(t.newsItems=e.data,t.isError=!1):(t.isError=!0,t.errorTxt="暂无该新闻内容。"),t.loading=!1}).catch(function(e){console.log(e),t.isError=!0,t.errorTxt="数据获取失败，请检查网络。"})}},t.case={getCaseList:function(t,e){o.a.get("/api/movie/coming_soon",{params:{city:"柳州",count:t.caselist.num}}).then(function(n){switch(n.data&&n.data.subjects.length?(t.caselist.data=n.data.subjects,t.caselist.status=!0):(console.log("无数据"),t.caselist.status=!1),e){case 1:t.loading=!1;break;case 2:t.loading+=1;break;default:console.log("加载出错")}}).catch(function(e){console.log(e),t.caselist.status=!1})}},t.search={getSearchList:function(t){o.a.get("/api/movie/search",{params:{tag:t.tag,start:t.list.num,count:t.list.loadNum}}).then(function(e){e.data&&e.data.subjects.length?(t.list.data=t.list.data.concat(e.data.subjects),t.list.status=!0,t.showMore=!0,t.list.num+=t.list.loadNum):(console.log("无数据"),t.list.status=!1),t.loading=!1}).catch(function(e){console.log(e),t.list.status=!1})}},t.message={postMsg:function(t){o.a.get("/api/movie/search?tag="+t.txt).then(function(t){alert("留言已提交，我们将尽快处理！")}).catch(function(t){console.log(t),alert("数据提交失败，请重试！")})}},{Fn:t}}()},91:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},92:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading",data:function(){return{loadImg:n(95)}}}},93:function(t,e,n){e=t.exports=n(10)(!0),e.push([t.i,".loadimg{display:block;margin:auto;width:1.5rem;height:1.5rem;margin-top:1.7rem}","",{version:3,sources:["E:/project/xlong-test-vue/src/components/Common/Loading.vue"],names:[],mappings:"AACA,SACE,cAAe,AACf,YAAa,AACb,aAAc,AACd,cAAe,AACf,iBAAmB,CACpB",file:"Loading.vue",sourcesContent:["\n.loadimg {\n  display: block;\n  margin: auto;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-top: 1.7rem;\n}\n"],sourceRoot:""}])},94:function(t,e,n){var r=n(93);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(11)("828d106a",r,!0,{})},95:function(t,e,n){t.exports=n.p+"static/img/loading.286fd3d.gif"},96:function(t,e,n){function r(t){n(94)}var o=n(0)(n(92),n(97),r,null,null);t.exports=o.exports},97:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"loading"}},[n("img",{staticClass:"loadimg",attrs:{src:t.loadImg}})])},staticRenderFns:[]}}});
//# sourceMappingURL=5.2b0bb0b6212aa4c3b836.js.map