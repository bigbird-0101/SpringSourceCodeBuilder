(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-base-mescroll-one"],{"010b":function(t,n,e){"use strict";var a=e("4ea4");e("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("fabb")),i=e("d63f"),s={mixins:[o.default],data:function(){return{upOption:{noMoreSize:4,empty:{tip:"~ 搜索无数据 ~",btnText:"去看看"}},goods:[],tabs:[{name:"全部",type:"xx"},{name:"奶粉",type:"xx"},{name:"面膜",type:"xx"},{name:"图书",type:"xx"}],tabIndex:0}},methods:{upCallback:function(t){var n=this,e=this.tabs[this.tabIndex],a=e.name;(0,i.apiGoods)(t.num,t.size,a).then((function(e){n.mescroll.endSuccess(e.list.length),1==t.num&&(n.goods=[]),n.goods=n.goods.concat(e.list)})).catch((function(){n.mescroll.endErr()}))},emptyClick:function(){uni.showToast({title:"点击了按钮,具体逻辑自行实现"})},tabChange:function(){this.goods=[],this.mescroll.resetUpScroll()}}};n.default=s},"28a3":function(t,n,e){"use strict";e.r(n);var a=e("010b"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"57ab":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".top-warp[data-v-5000d175]{z-index:9990;position:fixed;top:--window-top; /* css变量 */left:0;width:100%;height:%?120?%;background-color:#fff}.top-warp .tip[data-v-5000d175]{font-size:%?28?%;height:%?60?%;line-height:%?60?%;text-align:center}",""]),t.exports=n},b2b8:function(t,n,e){"use strict";e.r(n);var a=e("bbd1"),o=e("28a3");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("e517");var s,c=e("f0c5"),l=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"5000d175",null,!1,a["a"],s);n["default"]=l.exports},bbd1:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={meTabs:e("1db9").default,mescrollBody:e("0ead").default,goodList:e("2f9d").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"top-warp"},[e("v-uni-view",{staticClass:"tip"},[t._v("每次切换菜单及时刷新列表,不缓存数据")]),e("me-tabs",{attrs:{tabs:t.tabs},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.tabChange.apply(void 0,arguments)}},model:{value:t.tabIndex,callback:function(n){t.tabIndex=n},expression:"tabIndex"}})],1),e("mescroll-body",{ref:"mescrollRef",attrs:{top:"120",up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)},emptyclick:function(n){arguments[0]=n=t.$handleEvent(n),t.emptyClick.apply(void 0,arguments)}}},[e("good-list",{attrs:{list:t.goods}})],1)],1)},i=[]},c19d:function(t,n,e){var a=e("57ab");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("05e0ac8b",a,!0,{sourceMap:!1,shadowMode:!1})},e517:function(t,n,e){"use strict";var a=e("c19d"),o=e.n(a);o.a}}]);