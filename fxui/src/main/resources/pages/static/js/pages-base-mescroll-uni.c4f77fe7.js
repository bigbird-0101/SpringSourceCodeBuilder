(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-base-mescroll-uni"],{"1a29":function(t,n,e){var o=e("d3db");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("28f3adeb",o,!0,{sourceMap:!1,shadowMode:!1})},"278a":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={meTabs:e("1db9").default,mescrollUni:e("902d").default,goodList:e("2f9d").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"top-warp"},[e("v-uni-view",{staticClass:"tip"},[t._v("基于scroll-view,常用在浮窗弹层等局部滚动区域")]),e("v-uni-view",{staticClass:"tip",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.triggerDownScroll.apply(void 0,arguments)}}},[t._v("点此主动触发下拉刷新")]),e("v-uni-view",{staticClass:"tip",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.scrollToY(200)}}},[t._v("点此测试滚动到指定位置 (如: 200px)")]),e("v-uni-view",{staticClass:"tip",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.scrollIntoView("#anchorPoint")}}},[t._v("点此测试滚动到指定view (元素在本页)")]),e("v-uni-view",{staticClass:"tip",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.scrollIntoView(".good-comp >>> #good2")}}},[t._v("点此测试滚动到指定view (元素在子组件)")]),e("me-tabs",{attrs:{tabs:t.tabs},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.tabChange.apply(void 0,arguments)}},model:{value:t.tabIndex,callback:function(n){t.tabIndex=n},expression:"tabIndex"}})],1),e("mescroll-uni",{ref:"mescrollRef",attrs:{top:"365",up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)},emptyclick:function(n){arguments[0]=n=t.$handleEvent(n),t.emptyClick.apply(void 0,arguments)}}},[0==t.tabIndex?e("v-uni-image",{staticStyle:{width:"100%"},attrs:{id:"anchorPoint",src:"https://www.mescroll.com/img/taobao/taobao3.jpg",mode:"widthFix"}}):t._e(),e("good-list",{staticClass:"good-comp",attrs:{list:t.goods}})],1)],1)},a=[]},a5e2:function(t,n,e){"use strict";var o=e("4ea4");e("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("fabb")),a=e("d63f"),l={mixins:[i.default],data:function(){return{upOption:{noMoreSize:4,empty:{tip:"~ 搜索无数据 ~",btnText:"去看看"}},goods:[],tabs:[{name:"全部",type:"xx"},{name:"奶粉",type:"xx"},{name:"面膜",type:"xx"},{name:"图书",type:"xx"}],tabIndex:0}},methods:{upCallback:function(t){var n=this,e=this.tabs[this.tabIndex],o=e.name;(0,a.apiGoods)(t.num,t.size,o).then((function(e){n.mescroll.endSuccess(e.list.length),1==t.num&&(n.goods=[]),n.goods=n.goods.concat(e.list)})).catch((function(){n.mescroll.endErr()}))},emptyClick:function(){uni.showToast({title:"点击了按钮,具体逻辑自行实现"})},tabChange:function(){this.goods=[],this.mescroll.resetUpScroll()},triggerDownScroll:function(){this.mescroll.scrollTo(0,0),this.mescroll.triggerDownScroll()},scrollToY:function(t){this.mescroll.scrollTo(t,0)},scrollIntoView:function(t){this.mescroll.scrollTo(t,0)}}};n.default=l},d3db:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".top-warp[data-v-3e2e11d9]{z-index:9990;position:fixed;top:--window-top; /* css变量 */left:0;width:100%;height:%?365?%;background-color:#fff}.top-warp .tip[data-v-3e2e11d9]{font-size:%?28?%;height:%?60?%;line-height:%?60?%;text-align:center}",""]),t.exports=n},d6ee:function(t,n,e){"use strict";e.r(n);var o=e("a5e2"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},dc7a:function(t,n,e){"use strict";var o=e("1a29"),i=e.n(o);i.a},dfc7:function(t,n,e){"use strict";e.r(n);var o=e("278a"),i=e("d6ee");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("dc7a");var l,c=e("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"3e2e11d9",null,!1,o["a"],l);n["default"]=s.exports}}]);