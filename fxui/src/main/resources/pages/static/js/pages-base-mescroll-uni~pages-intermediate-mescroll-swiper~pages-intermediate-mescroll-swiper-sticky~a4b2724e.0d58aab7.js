(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-base-mescroll-uni~pages-intermediate-mescroll-swiper~pages-intermediate-mescroll-swiper-sticky~a4b2724e"],{"0101":function(t,o,e){var n=e("49cd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("52a8c269",n,!0,{sourceMap:!1,shadowMode:!1})},"1b1e":function(t,o,e){"use strict";e.d(o,"b",(function(){return r})),e.d(o,"c",(function(){return i})),e.d(o,"a",(function(){return n}));var n={mescrollEmpty:e("b8fd").default},r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{staticClass:"mescroll-uni-warp"},[e("v-uni-scroll-view",{staticClass:"mescroll-uni",class:{"mescroll-uni-fixed":t.isFixed},style:{height:t.scrollHeight,"padding-top":t.padTop,"padding-bottom":t.padBottom,top:t.fixedTop,bottom:t.fixedBottom},attrs:{id:t.viewId,"scroll-top":t.scrollTop,"scroll-with-animation":t.scrollAnim,"scroll-y":t.scrollable,"enable-back-to-top":!0,throttle:!1},on:{scroll:function(o){arguments[0]=o=t.$handleEvent(o),t.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{wxsProps:{"change:prop":"wxsProp"},staticClass:"mescroll-uni-content mescroll-render-touch",attrs:{"change:prop":t.wxsBiz.propObserver,prop:t.wxsProp},on:{touchstart:function(o){o=t.$handleWxsEvent(o),t.wxsBiz.touchstartEvent(o,t.$getComponentDescriptor())},touchmove:function(o){o=t.$handleWxsEvent(o),t.wxsBiz.touchmoveEvent(o,t.$getComponentDescriptor())},touchend:function(o){o=t.$handleWxsEvent(o),t.wxsBiz.touchendEvent(o,t.$getComponentDescriptor())},touchcancel:function(o){o=t.$handleWxsEvent(o),t.wxsBiz.touchendEvent(o,t.$getComponentDescriptor())}}},[t.topbar&&t.statusBarHeight?e("v-uni-view",{staticClass:"mescroll-topbar",style:{height:t.statusBarHeight+"px",background:t.topbar}}):t._e(),e("v-uni-view",{wxsProps:{"change:prop":"callProp"},staticClass:"mescroll-wxs-content",style:{transform:t.translateY,transition:t.transition},attrs:{"change:prop":t.wxsBiz.callObserver,prop:t.callProp}},[t.mescroll.optDown.use?e("v-uni-view",{staticClass:"mescroll-downwarp",style:{background:t.mescroll.optDown.bgColor,color:t.mescroll.optDown.textColor}},[e("v-uni-view",{staticClass:"downwarp-content"},[e("v-uni-view",{staticClass:"downwarp-progress mescroll-wxs-progress",class:{"mescroll-rotate":t.isDownLoading},style:{"border-color":t.mescroll.optDown.textColor,transform:t.downRotate}}),e("v-uni-view",{staticClass:"downwarp-tip"},[t._v(t._s(t.downText))])],1)],1):t._e(),t._t("default"),t.isShowEmpty?e("mescroll-empty",{attrs:{option:t.mescroll.optUp.empty},on:{emptyclick:function(o){arguments[0]=o=t.$handleEvent(o),t.emptyClick.apply(void 0,arguments)}}}):t._e(),t.mescroll.optUp.use&&!t.isDownLoading&&3!==t.upLoadType?e("v-uni-view",{staticClass:"mescroll-upwarp",style:{background:t.mescroll.optUp.bgColor,color:t.mescroll.optUp.textColor}},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.upLoadType,expression:"upLoadType===1"}]},[e("v-uni-view",{staticClass:"upwarp-progress mescroll-rotate",style:{"border-color":t.mescroll.optUp.textColor}}),e("v-uni-view",{staticClass:"upwarp-tip"},[t._v(t._s(t.mescroll.optUp.textLoading))])],1),2===t.upLoadType?e("v-uni-view",{staticClass:"upwarp-nodata"},[t._v(t._s(t.mescroll.optUp.textNoMore))]):t._e()],1):t._e()],2),t.bottombar&&t.windowBottom>0?e("v-uni-view",{staticClass:"mescroll-bottombar",style:{height:t.windowBottom+"px"}}):t._e(),t.safearea?e("v-uni-view",{staticClass:"mescroll-safearea"}):t._e()],1)],1),e("mescroll-top",{attrs:{option:t.mescroll.optUp.toTop},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.toTopClick.apply(void 0,arguments)}},model:{value:t.isShowToTop,callback:function(o){t.isShowToTop=o},expression:"isShowToTop"}}),e("v-uni-view",{wxsProps:{"change:prop":"wxsProp"},attrs:{"change:prop":t.renderBiz.propObserver,prop:t.wxsProp}})],1)},i=[]},"49cd":function(t,o,e){var n=e("24fb");o=n(!1),o.push([t.i,".mescroll-uni-warp[data-v-6669a56f]{height:100%}.mescroll-uni-content[data-v-6669a56f]{height:100%}.mescroll-uni[data-v-6669a56f]{position:relative;width:100%;height:100%;min-height:%?200?%;overflow-y:auto;box-sizing:border-box /* 避免设置padding出现双滚动条的问题 */}\r\n\r\n/* 定位的方式固定高度 */.mescroll-uni-fixed[data-v-6669a56f]{z-index:1;position:fixed;top:0;left:0;right:0;bottom:0;width:auto; /* 使right生效 */height:auto /* 使bottom生效 */}\r\n\r\n/* 适配 iPhoneX */@supports (bottom:constant(safe-area-inset-bottom)) or (bottom:env(safe-area-inset-bottom)){.mescroll-safearea[data-v-6669a56f]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}}\r\n\r\n/* 下拉刷新区域 */.mescroll-downwarp[data-v-6669a56f]{position:absolute;top:-100%;left:0;width:100%;height:100%;text-align:center}\r\n\r\n/* 下拉刷新--内容区,定位于区域底部 */.mescroll-downwarp .downwarp-content[data-v-6669a56f]{position:absolute;left:0;bottom:0;width:100%;min-height:%?60?%;padding:%?20?% 0;text-align:center}\r\n\r\n/* 下拉刷新--提示文本 */.mescroll-downwarp .downwarp-tip[data-v-6669a56f]{display:inline-block;font-size:%?28?%;vertical-align:middle;margin-left:%?16?%\r\n\t/* color: gray; 已在style设置color,此处删去*/}\r\n\r\n/* 下拉刷新--旋转进度条 */.mescroll-downwarp .downwarp-progress[data-v-6669a56f]{display:inline-block;width:%?32?%;height:%?32?%;border-radius:50%;border:%?2?% solid grey;border-bottom-color:transparent!important; /*已在style设置border-color,此处需加 !important*/vertical-align:middle}\r\n\r\n/* 旋转动画 */.mescroll-downwarp .mescroll-rotate[data-v-6669a56f]{-webkit-animation:mescrollDownRotate-data-v-6669a56f .6s linear infinite;animation:mescrollDownRotate-data-v-6669a56f .6s linear infinite}@-webkit-keyframes mescrollDownRotate-data-v-6669a56f{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mescrollDownRotate-data-v-6669a56f{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\r\n\r\n/* 上拉加载区域 */.mescroll-upwarp[data-v-6669a56f]{box-sizing:border-box;min-height:%?110?%;padding:%?30?% 0;text-align:center;clear:both}\r\n\r\n/*提示文本 */.mescroll-upwarp .upwarp-tip[data-v-6669a56f],\r\n.mescroll-upwarp .upwarp-nodata[data-v-6669a56f]{display:inline-block;font-size:%?28?%;vertical-align:middle\r\n\t/* color: gray; 已在style设置color,此处删去*/}.mescroll-upwarp .upwarp-tip[data-v-6669a56f]{margin-left:%?16?%}\r\n\r\n/*旋转进度条 */.mescroll-upwarp .upwarp-progress[data-v-6669a56f]{display:inline-block;width:%?32?%;height:%?32?%;border-radius:50%;border:%?2?% solid grey;border-bottom-color:transparent!important; /*已在style设置border-color,此处需加 !important*/vertical-align:middle}\r\n\r\n/* 旋转动画 */.mescroll-upwarp .mescroll-rotate[data-v-6669a56f]{-webkit-animation:mescrollUpRotate-data-v-6669a56f .6s linear infinite;animation:mescrollUpRotate-data-v-6669a56f .6s linear infinite}@-webkit-keyframes mescrollUpRotate-data-v-6669a56f{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mescrollUpRotate-data-v-6669a56f{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),t.exports=o},"60b2":function(t,o,e){"use strict";e.r(o);var n=e("b0da"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(o,t,(function(){return n[t]}))}(i);o["default"]=r.a},6719:function(t,o,e){"use strict";e.r(o);var n=e("f5e2"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(o,t,(function(){return n[t]}))}(i);o["default"]=r.a},"902d":function(t,o,e){"use strict";e.r(o);var n=e("1b1e"),r=e("6719");for(var i in r)"default"!==i&&function(t){e.d(o,t,(function(){return r[t]}))}(i);var s=e("60b2");for(var i in s)"default"!==i&&function(t){e.d(o,t,(function(){return s[t]}))}(i);e("c48e");var a=e("f0c5"),l=e("d257");r["default"].__module="renderBiz";var c=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,"6669a56f",null,!1,n["a"],r["default"]);"function"===typeof l["a"]&&Object(l["a"])(c),o["default"]=c.exports},b0da:function(t,o,e){"use strict";(function(t){var n=e("4ea4");e("c975"),e("a9e3"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("1276"),e("498a"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(e("b42d")),i=n(e("b2a4")),s=n(e("2637")),a=n(e("9fdc")),l=n(e("c089")),c={name:"mescroll-uni",mixins:[l.default],components:{MescrollTop:a.default},props:{down:Object,up:Object,i18n:Object,top:[String,Number],topbar:[Boolean,String],bottom:[String,Number],safearea:Boolean,fixed:{type:Boolean,default:!0},height:[String,Number],bottombar:{type:Boolean,default:!0},disableScroll:Boolean},data:function(){return{mescroll:{optDown:{},optUp:{}},viewId:"id_"+Math.random().toString(36).substr(2,16),downHight:0,downRate:0,downLoadType:0,upLoadType:0,isShowEmpty:!1,isShowToTop:!1,scrollTop:0,scrollAnim:!1,windowTop:0,windowBottom:0,windowHeight:0,statusBarHeight:0}},computed:{isFixed:function(){return!this.height&&this.fixed},scrollHeight:function(){return this.isFixed?"auto":this.height?this.toPx(this.height)+"px":"100%"},numTop:function(){return this.toPx(this.top)},fixedTop:function(){return this.isFixed?this.numTop+this.windowTop+"px":0},padTop:function(){return this.isFixed?0:this.numTop+"px"},numBottom:function(){return this.toPx(this.bottom)},fixedBottom:function(){return this.isFixed?this.numBottom+this.windowBottom+"px":0},padBottom:function(){return this.isFixed?0:this.numBottom+"px"},isDownReset:function(){return 3===this.downLoadType||4===this.downLoadType},transition:function(){return this.isDownReset?"transform 300ms":""},translateY:function(){return this.downHight>0?"translateY("+this.downHight+"px)":""},scrollable:function(){return!this.disableScroll&&(0===this.downLoadType||this.isDownReset)},isDownLoading:function(){return 3===this.downLoadType},downRotate:function(){return"rotate("+360*this.downRate+"deg)"},downText:function(){if(!this.mescroll)return"";switch(this.downLoadType){case 1:return this.mescroll.optDown.textInOffset;case 2:return this.mescroll.optDown.textOutOffset;case 3:return this.mescroll.optDown.textLoading;case 4:return this.mescroll.isDownEndSuccess?this.mescroll.optDown.textSuccess:0==this.mescroll.isDownEndSuccess?this.mescroll.optDown.textErr:this.mescroll.optDown.textInOffset;default:return this.mescroll.optDown.textInOffset}}},methods:{toPx:function(t){if("string"===typeof t)if(-1!==t.indexOf("px"))if(-1!==t.indexOf("rpx"))t=t.replace("rpx","");else{if(-1===t.indexOf("upx"))return Number(t.replace("px",""));t=t.replace("upx","")}else if(-1!==t.indexOf("%")){var o=Number(t.replace("%",""))/100;return this.windowHeight*o}return t?uni.upx2px(Number(t)):0},scroll:function(t){var o=this;this.mescroll.scroll(t.detail,(function(){o.$emit("scroll",o.mescroll)}))},emptyClick:function(){this.$emit("emptyclick",this.mescroll)},toTopClick:function(){this.mescroll.scrollTo(0,this.mescroll.optUp.toTop.duration),this.$emit("topclick",this.mescroll)},setClientHeight:function(){var t=this;0!==this.mescroll.getClientHeight(!0)||this.isExec||(this.isExec=!0,this.$nextTick((function(){t.getClientInfo((function(o){t.isExec=!1,o?t.mescroll.setClientHeight(o.height):3!=t.clientNum&&(t.clientNum=null==t.clientNum?1:t.clientNum+1,setTimeout((function(){t.setClientHeight()}),100*t.clientNum))}))})))},getClientInfo:function(t){var o=uni.createSelectorQuery();o=o.in(this);var e=o.select("#"+this.viewId);e.boundingClientRect((function(o){t(o)})).exec()}},created:function(){var o=this,e={down:{inOffset:function(){o.downLoadType=1},outOffset:function(){o.downLoadType=2},onMoving:function(t,e,n){o.downHight=n,o.downRate=e},showLoading:function(t,e){o.downLoadType=3,o.downHight=e},beforeEndDownScroll:function(t){return o.downLoadType=4,t.optDown.beforeEndDelay},endDownScroll:function(){o.downLoadType=4,o.downHight=0,o.downResetTimer&&clearTimeout(o.downResetTimer),o.downResetTimer=setTimeout((function(){4===o.downLoadType&&(o.downLoadType=0)}),300)},callback:function(t){o.$emit("down",t)}},up:{showLoading:function(){o.upLoadType=1},showNoMore:function(){o.upLoadType=2},hideUpScroll:function(t){o.upLoadType=t.optUp.hasNext?0:3},empty:{onShow:function(t){o.isShowEmpty=t}},toTop:{onShow:function(t){o.isShowToTop=t}},callback:function(t){o.$emit("up",t),o.setClientHeight()}}},n=s.default.getType(),a={type:n};r.default.extend(a,o.i18n),r.default.extend(a,i.default.i18n),r.default.extend(e,a[n]),r.default.extend(e,{down:i.default.down,up:i.default.up});var l=JSON.parse(JSON.stringify({down:o.down,up:o.up}));r.default.extend(l,e),o.mescroll=new r.default(l),o.mescroll.viewId=o.viewId,o.mescroll.i18n=a,o.$emit("init",o.mescroll);var c=uni.getSystemInfoSync();c.windowTop&&(o.windowTop=c.windowTop),c.windowBottom&&(o.windowBottom=c.windowBottom),c.windowHeight&&(o.windowHeight=c.windowHeight),c.statusBarHeight&&(o.statusBarHeight=c.statusBarHeight),o.mescroll.setBodyHeight(c.windowHeight),o.mescroll.resetScrollTo((function(e,n){if(o.scrollAnim=0!==n,"string"!==typeof e){var r=o.mescroll.getScrollTop();0===n||300===n?(o.scrollTop=r,o.$nextTick((function(){o.scrollTop=e}))):o.mescroll.getStep(r,e,(function(t){o.scrollTop=t}),n)}else o.getClientInfo((function(n){var r,i=n.top;-1==e.indexOf("#")&&-1==e.indexOf(".")?r="#"+e:(r=e,-1!=e.indexOf(">>>")&&(r=e.split(">>>")[1].trim())),uni.createSelectorQuery().select(r).boundingClientRect((function(e){if(e){var n=o.mescroll.getScrollTop(),s=e.top-i;s+=n,o.isFixed||(s-=o.numTop),o.scrollTop=n,o.$nextTick((function(){o.scrollTop=s}))}else t("error",r+" does not exist"," at uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni.vue:419")})).exec()}))})),o.up&&o.up.toTop&&null!=o.up.toTop.safearea||(o.mescroll.optUp.toTop.safearea=o.safearea),uni.$on("setMescrollGlobalOption",(function(t){if(t){var e=t.i18n?t.i18n.type:null;if(e&&o.mescroll.i18n.type!=e&&(o.mescroll.i18n.type=e,s.default.setType(e),r.default.extend(t,o.mescroll.i18n[e])),t.down){var n=r.default.extend({},t.down);o.mescroll.optDown=r.default.extend(n,o.mescroll.optDown)}if(t.up){var i=r.default.extend({},t.up);o.mescroll.optUp=r.default.extend(i,o.mescroll.optUp)}}}))},mounted:function(){this.setClientHeight()},destroyed:function(){uni.$off("setMescrollGlobalOption")}};o.default=c}).call(this,e("0de9")["log"])},c48e:function(t,o,e){"use strict";var n=e("0101"),r=e.n(n);r.a},d257:function(t,o,e){"use strict";var n=function(t){(t.options.wxs||(t.options.wxs={}))["wxsBiz"]=function(t){var o={};function e(t){o.optDown=t.optDown,o.scrollTop=t.scrollTop,o.bodyHeight=t.bodyHeight,o.isDownScrolling=t.isDownScrolling,o.isUpScrolling=t.isUpScrolling,o.isUpBoth=t.isUpBoth,o.isScrollBody=t.isScrollBody,o.startTop=t.scrollTop}function n(t,e,n){o.disabled()||t.callType&&("showLoading"===t.callType?o.showLoading(n):"endDownScroll"===t.callType?o.endDownScroll(n):"clearTransform"===t.callType&&o.clearTransform(n))}function r(t,e){o.downHight=0,o.startPoint=o.getPoint(t),o.startTop=o.getScrollTop(),o.startAngle=0,o.lastPoint=o.startPoint,o.maxTouchmoveY=o.getBodyHeight()-o.optDown.bottomOffset,o.inTouchend=!1,o.callMethod(e,{type:"setWxsProp"})}function i(t,e){var n=!0;if(o.disabled())return n;var r=o.getScrollTop(),i=o.getPoint(t),a=i.y-o.startPoint.y;if(a>0&&(o.isScrollBody&&r<=0||!o.isScrollBody&&(r<=0||r<=o.optDown.startTop&&r===o.startTop))&&!o.inTouchend&&!o.isDownScrolling&&!o.optDown.isLock&&(!o.isUpScrolling||o.isUpScrolling&&o.isUpBoth)){if(o.startAngle||(o.startAngle=o.getAngle(o.lastPoint,i)),o.startAngle<o.optDown.minAngle)return n;if(o.maxTouchmoveY>0&&i.y>=o.maxTouchmoveY)return o.inTouchend=!0,s(t,e),n;n=!1;var l=i.y-o.lastPoint.y;o.downHight<o.optDown.offset?(1!==o.movetype&&(o.movetype=1,o.callMethod(e,{type:"setLoadType",downLoadType:1}),o.isMoveDown=!0),o.downHight+=l*o.optDown.inOffsetRate):(2!==o.movetype&&(o.movetype=2,o.callMethod(e,{type:"setLoadType",downLoadType:2}),o.isMoveDown=!0),o.downHight+=l>0?l*o.optDown.outOffsetRate:l),o.downHight=Math.round(o.downHight);var c=o.downHight/o.optDown.offset;o.onMoving(e,c,o.downHight)}return o.lastPoint=i,n}function s(t,e){if(o.isMoveDown)o.downHight>=o.optDown.offset?(o.downHight=o.optDown.offset,o.callMethod(e,{type:"triggerDownScroll"})):(o.downHight=0,o.callMethod(e,{type:"endDownScroll"})),o.movetype=0,o.isMoveDown=!1;else if(!o.isScrollBody&&o.getScrollTop()===o.startTop){var n=o.getPoint(t).y-o.startPoint.y<0;if(n){var r=o.getAngle(o.getPoint(t),o.startPoint);r>80&&o.callMethod(e,{type:"triggerUpScroll"})}}o.callMethod(e,{type:"setWxsProp"})}return o.onMoving=function(t,o,e){t.requestAnimationFrame((function(){t.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"transform",transform:"translateY("+e+"px)",transition:""});var n=t.selectComponent(".mescroll-wxs-progress");n&&n.setStyle({transform:"rotate("+360*o+"deg)"})}))},o.showLoading=function(t){o.downHight=o.optDown.offset,t.requestAnimationFrame((function(){t.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"auto",transform:"translateY("+o.downHight+"px)",transition:"transform 300ms"})}))},o.endDownScroll=function(t){o.downHight=0,o.isDownScrolling=!1,t.requestAnimationFrame((function(){t.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"auto",transform:"translateY(0)",transition:"transform 300ms"})}))},o.clearTransform=function(t){t.requestAnimationFrame((function(){t.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"",transform:"",transition:""})}))},o.disabled=function(){return!o.optDown||!o.optDown.use||o.optDown.native},o.getPoint=function(t){return t?t.touches&&t.touches[0]?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.clientX,y:t.clientY}:{x:0,y:0}},o.getAngle=function(t,o){var e=Math.abs(t.x-o.x),n=Math.abs(t.y-o.y),r=Math.sqrt(e*e+n*n),i=0;return 0!==r&&(i=Math.asin(n/r)/Math.PI*180),i},o.getScrollTop=function(){return o.scrollTop||0},o.getBodyHeight=function(){return o.bodyHeight||0},o.callMethod=function(t,o){t&&t.callMethod("wxsCall",o)},t.exports={propObserver:e,callObserver:n,touchstartEvent:r,touchmoveEvent:i,touchendEvent:s},t.exports}({exports:{}})};o["a"]=n},f5e2:function(t,o,e){"use strict";var n=e("4ea4");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(e("fd1f")),i={mixins:[r.default]};o.default=i}}]);