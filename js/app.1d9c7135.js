(function(e){function t(t){for(var a,r,c=t[0],s=t[1],l=t[2],u=0,h=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},i=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4aee79d8"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(e);var l=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},3668:function(e,t,n){"use strict";n("69c4")},"69c4":function(e,t,n){},ba8c:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=(n("b0c0"),{id:"site-header"}),i=Object(a["k"])("svg",{class:"w-5 h-5 mt-0.5 mr-2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(a["k"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.647.343a1.362 1.362 0 011.284 0l8.363 4.47a.778.778 0 010 1.373l-7.978 4.264a1.946 1.946 0 00-1.029 1.712l-.009 4.545a.778.778 0 01-1.144.686L.413 12.757A.778.778 0 010 12.07V6.666c0-.718.395-1.378 1.029-1.717L9.647.343z",fill:"url(#paint0_radial)"}),Object(a["k"])("defs",null,[Object(a["k"])("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(15.5632 7.52763 -3.99402 8.25753 .29 5.99)"},[Object(a["k"])("stop",{"stop-color":"#575858"}),Object(a["k"])("stop",{offset:"1","stop-color":"#383939"})])])],-1),r={id:"nav"},c=Object(a["j"])("通讯文章"),s=Object(a["j"])("工作笔记"),l={id:"site-footer"};function u(e,t,n,u,d,h){var f=Object(a["B"])("router-link"),v=Object(a["B"])("router-view");return Object(a["t"])(),Object(a["g"])(a["a"],null,[Object(a["k"])("header",o,[Object(a["k"])("h1",null,[Object(a["k"])(f,{class:"flex items-center font-semibold",to:e.toIndex},{default:Object(a["I"])((function(){return[i,Object(a["j"])(" 透明盒子计划"+Object(a["E"])(e.pageTitle),1)]})),_:1},8,["to"])]),Object(a["k"])("div",r,["Notes"===e.$route.name?(Object(a["t"])(),Object(a["g"])(f,{key:0,class:"ml-2",to:"/essays"},{default:Object(a["I"])((function(){return[c]})),_:1})):(Object(a["t"])(),Object(a["g"])(f,{key:1,class:"ml-2",to:"/"},{default:Object(a["I"])((function(){return[s]})),_:1}))])]),Object(a["k"])(v),Object(a["k"])("footer",l,[Object(a["k"])("span",null,"© "+Object(a["E"])(e.currentYear)+" 透明盒子计划",1)])],64)}var d=n("d4ec"),h=n("262e"),f=n("2caf"),v=n("9ab4"),m=n("ce1f"),b=function(e){Object(h["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(m["b"]);b=Object(v["a"])([Object(m["a"])({computed:{currentYear:function(){return(new Date).getFullYear()},pageTitle:function(){return"Notes"===this.$route.name?"·笔记":"Essays"===this.$route.name?"·文章":void 0},toIndex:function(){return"Essays"===this.$route.name?"/essays":"/"}}})],b);var p=b;p.render=u;var g=p,k=(n("d3b7"),n("6c02")),j=n("cf05"),O=n.n(j),y={class:"defaultHome"},C=Object(a["k"])("img",{alt:"Vue logo",src:O.a},null,-1);function x(e,t,n,o,i,r){var c=Object(a["B"])("HelloWorld");return Object(a["t"])(),Object(a["g"])("div",y,[C,Object(a["k"])(c,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var E=Object(a["K"])("data-v-c090d8fe");Object(a["x"])("data-v-c090d8fe");var L={class:"hello"},B=Object(a["i"])('<p data-v-c090d8fe> For a guide and recipes on how to configure / customize this project,<br data-v-c090d8fe> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-c090d8fe>vue-cli documentation</a>. </p><h3 data-v-c090d8fe>Installed CLI Plugins</h3><ul data-v-c090d8fe><li data-v-c090d8fe><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-c090d8fe>babel</a></li><li data-v-c090d8fe><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-c090d8fe>router</a></li><li data-v-c090d8fe><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-c090d8fe>eslint</a></li><li data-v-c090d8fe><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-c090d8fe>typescript</a></li></ul><h3 data-v-c090d8fe>Essential Links</h3><ul data-v-c090d8fe><li data-v-c090d8fe><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-c090d8fe>Core Docs</a></li><li data-v-c090d8fe><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-c090d8fe>Forum</a></li><li data-v-c090d8fe><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-c090d8fe>Community Chat</a></li><li data-v-c090d8fe><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-c090d8fe>Twitter</a></li><li data-v-c090d8fe><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-c090d8fe>News</a></li></ul><h3 data-v-c090d8fe>Ecosystem</h3><ul data-v-c090d8fe><li data-v-c090d8fe><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-c090d8fe>vue-router</a></li><li data-v-c090d8fe><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-c090d8fe>vuex</a></li><li data-v-c090d8fe><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-c090d8fe>vue-devtools</a></li><li data-v-c090d8fe><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-c090d8fe>vue-loader</a></li><li data-v-c090d8fe><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-c090d8fe>awesome-vue</a></li></ul>',7);Object(a["u"])();var w=E((function(e,t,n,o,i,r){return Object(a["t"])(),Object(a["g"])("div",L,[Object(a["k"])("h1",null,Object(a["E"])(e.msg),1),B])})),P=function(e){Object(h["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(m["b"]);P=Object(v["a"])([Object(m["a"])({props:{msg:String}})],P);var T=P;n("3668");T.render=w,T.__scopeId="data-v-c090d8fe";var I=T,N=function(e){Object(h["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(m["b"]);N=Object(v["a"])([Object(m["a"])({components:{HelloWorld:I}})],N);var S=N;S.render=x;var _=S,$={class:"home-container"};function H(e,t,n,o,i,r){var c=Object(a["B"])("Card"),s=Object(a["B"])("PeekBox");return Object(a["t"])(),Object(a["g"])("div",$,[Object(a["k"])(a["d"],{name:"card-transition",class:"cards",tag:"div"},{default:Object(a["I"])((function(){return[(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(e.noteContentList,(function(t,n){return Object(a["t"])(),Object(a["g"])(c,{key:e.notePathList[n],id:n,noteContent:t,metadata:e.metadataForIndex(n),onClicked:e.handleClick,onClosed:e.handleClose,onOverlink:e.handleOverLink,onLeavelink:e.handleLeaveLink},null,8,["id","noteContent","metadata","onClicked","onClosed","onOverlink","onLeavelink"])})),128))]})),_:1}),Object(a["k"])(s,{onOverPeekBox:t[1]||(t[1]=function(t){return e.isInPeekBox=!0}),onLeavePeekBox:t[2]||(t[2]=function(t){e.isInPeekBox=!1,e.handleLeaveLink()}),showPeekBox:e.showPeekBox,eventClientX:e.eventClientX,eventClientY:e.eventClientY,isInPeekBox:e.isInPeekBox,boxContent:e.noteCache[e.peekPath]},null,8,["showPeekBox","eventClientX","eventClientY","isInPeekBox","boxContent"]),(Object(a["t"])(),Object(a["g"])(a["b"],{to:"head"},[Object(a["k"])("title",null,Object(a["E"])(e.title),1)]))])}n("99af"),n("4de4"),n("4160"),n("caad"),n("c975"),n("d81d"),n("a434"),n("a9e3"),n("ac1f"),n("25f0"),n("8a79"),n("2532"),n("3ca3"),n("5319"),n("1276"),n("159b"),n("ddb0"),n("2b3d");var M=n("2909"),R=(n("a630"),{class:"sm:-mt-4"});function W(e,t,n,o,i,r){var c=Object(a["B"])("Book");return Object(a["t"])(),Object(a["g"])("div",{class:["card",Array.from(e.styleClass)],onClick:t[2]||(t[2]=function(t){return e.$emit("clicked",t)}),style:e.mostLeft()},[Object(a["k"])("button",{class:"close-btn",onClick:t[1]||(t[1]=function(t){return e.$emit("closed",t)})}," × "),Object(a["k"])("div",R,[Object(a["k"])("div",{innerHTML:e.noteContent},null,8,["innerHTML"]),e.metadata&&e.metadata.type&&"book"===e.metadata.type?(Object(a["t"])(),Object(a["g"])(c,{key:0,metadata:e.metadata},null,8,["metadata"])):Object(a["h"])("",!0)])],6)}n("6062");var Y={class:"book-info"},A={class:"p-4"},D={class:"text-base italic font-medium dark:text-gray-500"},X={key:0,class:"italic tracking-tight text-gray-400 dark:text-gray-600"},K={class:"mt-2"},V=Object(a["j"])(" by "),U={class:"font-medium dark:text-gray-500"},F={class:"mt-4"},q=Object(a["j"])(" Book location: "),J={key:1,class:"font-mono dark:text-gray-500"};function z(e,t,n,o,i,r){return Object(a["t"])(),Object(a["g"])("section",Y,[Object(a["k"])("div",A,[Object(a["k"])("h4",D,Object(a["E"])(e.metadata.title),1),e.metadata.subtitle?(Object(a["t"])(),Object(a["g"])("div",X,Object(a["E"])(e.metadata.subtitle),1)):Object(a["h"])("",!0),Object(a["k"])("div",K,[V,Object(a["k"])("span",U,Object(a["E"])(e.metadata.author),1)]),Object(a["k"])("div",F,[q,e.metadata.location.includes("://")?(Object(a["t"])(),Object(a["g"])("a",{key:0,href:e.metadata.location,innerHTML:e.locationString},null,8,["href","innerHTML"])):(Object(a["t"])(),Object(a["g"])("span",J,Object(a["E"])(e.metadata.location),1))])])])}n("2ca0");var G=function(e){Object(h["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(m["b"]);G=Object(v["a"])([Object(m["a"])({props:{metadata:Object},computed:{locationString:function(){if(this.metadata.location.startsWith("kindle"))return"Kindle";if(this.metadata.location.includes(":8083"))return"Digital Library";if(this.metadata.location.startsWith("http")){var e=new URL(this.metadata.location);return e.hostname}}}})],G);var Q=G;Q.render=z;var Z=Q,ee=function(e){Object(h["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(m["b"]);ee=Object(v["a"])([Object(m["a"])({data:function(){return{styleClass:new Set,isHandlingScroll:!1,index:0}},props:{noteContent:String,metadata:Object},components:{Book:Z},created:function(){var e=document.getElementsByClassName("home-container")[0];e&&e.addEventListener("scroll",this.handleScroll)},mounted:function(){var e=this;setTimeout((function(){e.index=Number(e.$el.id);var t=e.$el.getElementsByTagName("a");t.forEach((function(t){return t.addEventListener("mouseenter",(function(t){return e.$emit("overlink",t)}))})),t.forEach((function(t){return t.addEventListener("mouseleave",(function(t){return e.$emit("leavelink",t)}))})),Object(M["a"])(t).filter((function(e){return e.matches("a[href*='://']")})).forEach((function(e){return e.classList.add("ext-link")}))}),20)},updated:function(){var e=this;setTimeout((function(){e.index=Number(e.$el.id)}),20)},unmounted:function(){var e=this,t=document.getElementsByClassName("home")[0];t&&t.removeEventListener("scroll",this.handleScroll);var n=this.$el.getElementsByTagName("a");n.forEach((function(t){return t.removeEventListener("mouseenter",(function(t){return e.$emit("overlink",t)}))})),n.forEach((function(t){return t.removeEventListener("mouseleave",(function(t){return e.$emit("leavelink",t)}))}))},methods:{mostLeft:function(){return{left:"".concat(42*this.index,"px")}},handleScroll:function(){var e=this;this.isHandlingScroll||(this.isHandlingScroll=!0,setTimeout((function(){e.addShadowIfNeeded(),e.transformIfNeeded(),e.isHandlingScroll=!1}),50))},addShadowIfNeeded:function(){if(0!==this.index){var e=document.getElementById(this.index.toString()),t=document.getElementById((this.index-1).toString());if(e&&t){var n="shadow-overlay";e.getBoundingClientRect().left<t.getBoundingClientRect().right?this.styleClass.has(n)||(this.styleClass.add(n),t.classList.add("covered")):this.styleClass.has(n)&&(this.styleClass.delete(n),t.classList.remove("covered"))}}},transformIfNeeded:function(){var e=document.getElementById(this.index.toString()),t=document.getElementById((this.index+1).toString()),n="tiny-view";e&&t&&t.getBoundingClientRect().left-e.getBoundingClientRect().left<=80?this.styleClass.has(n)||(this.styleClass.add(n),e.getElementsByClassName("note-title")[0].style.left="".concat(42*this.index+8,"px")):this.styleClass.has(n)&&this.styleClass.delete(n)}},emits:["clicked","closed","overlink","leavelink"]})],ee);var te=ee;te.render=W;var ne=te;function ae(e,t,n,o,i,r){return Object(a["t"])(),Object(a["g"])(a["c"],{name:"peekBox"},{default:Object(a["I"])((function(){return[Object(a["J"])(Object(a["k"])("div",{id:"peekBox",onMouseover:t[1]||(t[1]=function(t){return e.$emit("overPeekBox")}),onMouseleave:t[2]||(t[2]=function(t){return e.$emit("leavePeekBox")}),style:{top:e.peekBoxTop+"px",left:e.peekBoxLeft+"px"},innerHTML:e.boxContent},null,44,["innerHTML"]),[[a["G"],e.showPeekBox]])]})),_:1})}var oe=function(e){Object(h["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(m["b"]);oe=Object(v["a"])([Object(m["a"])({data:function(){return{peekBoxTop:0,peekBoxLeft:0}},props:{boxContent:String,eventClientX:Number,eventClientY:Number,showPeekBox:Boolean,isInPeekBox:Boolean,height:{type:Number,default:16},width:{type:Number,default:24}},watch:{eventClientX:function(e,t){var n=this.getViewportWidth();this.peekBoxLeft=e+16*this.width>n?e-(e+16*this.width-n)-16:e+16},eventClientY:function(e,t){var n=this.getViewportHeight();this.peekBoxTop=e+16*this.height>n?e-(e+16*this.height-n)-16:e-16}},methods:{getViewportWidth:function(){var e;return e="undefined"!==typeof window.innerWidth?window.innerWidth:"undefined"!==typeof document.documentElement&&"undefined"!==typeof document.documentElement.clientWidth&&0!==document.documentElement.clientWidth?document.documentElement.clientWidth:document.getElementsByTagName("body")[0].clientWidth,e},getViewportHeight:function(){var e;return e="undefined"!==typeof window.innerWidth?window.innerHeight:"undefined"!==typeof document.documentElement&&"undefined"!==typeof document.documentElement.clientWidth&&0!==document.documentElement.clientWidth?document.documentElement.clientHeight:document.getElementsByTagName("body")[0].clientHeight,e}},emits:["overPeekBox","leavePeekBox"]})],oe);var ie=oe;ie.render=ae;var re=ie,ce=n("bc3a"),se=n.n(ce),le=window.matchMedia("(max-width: 640px)"),ue="";function de(e){return new Promise((function(t){return setTimeout(t,e)}))}var he=function(e){Object(h["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(m["b"]);he=Object(v["a"])([Object(m["a"])({data:function(){return{title:"透明盒子计划·笔记",notePathList:[],noteContentList:[],noteCache:{},metadataCache:{},peekPath:"",selectedId:-1,showPeekBox:!1,isInPeekBox:!1,timer:"",eventClientX:0,eventClientY:0}},components:{Card:ne,PeekBox:re},watch:{$route:function(e,t){var n=this;if("Notes"===e.name){if(le.matches)return this.loadRoute(e),void setTimeout((function(){var e;null===(e=document.getElementById("app"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})}),100);var a=t.query.stack||[],o=e.query.stack||[];"string"===typeof a&&(a=[a]),"string"===typeof o&&(o=[o]),a=[t.params.noteName.split(".")[0]].concat(Object(M["a"])(a)),o=[e.params.noteName.split(".")[0]].concat(Object(M["a"])(o));var i=[],r=[];a&&o?(i=o.filter((function(e){return a.indexOf(e)<0})),r=a.filter((function(e){return o.indexOf(e)<0}))):(o&&(i=o),a&&(r=a)),i.length>0&&i.map((function(e){return[n.stackCardToPath(e),o.indexOf(e)]})).forEach((function(e){return n.fetchNote(e[0],e[1])})),r.length>0&&this.removeNotesData(r),this.updateTitle()}},selectedId:function(e){var t=this;de(100).then((function(){var n=document.getElementById(e);n&&(n.tabIndex=0,le.matches||!n.matches(".covered")&&!n.matches(".tiny-view")&&e!==t.notePathList.length-1||t.scrollToElement(e),de(100).then((function(){return n.focus()})))}))}},beforeMount:function(){this.loadRoute(this.$route)},mounted:function(){document.addEventListener("keyup",this.handleKeyPressed),this.updateTitle()},updated:function(){""===ue||le.matches||(this.scrollToElement(ue),ue="")},beforeUnmount:function(){document.removeEventListener("keyup",this.handleKeyPressed)},methods:{loadRoute:function(e){var t=this;this.fetchNote(e.params.noteName);var n=e.query.stack;n&&("string"===typeof e.query.stack&&(n=[n]),n.map((function(e){return t.stackCardToPath(e)})).forEach((function(e,n){return t.fetchNote(e,n+1)})))},addNotesDataForCard:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;n<0?(this.notePathList.push(e),this.noteContentList.push(t)):(this.notePathList.splice(n,0,e),this.noteContentList.splice(n,0,t))},stackCardToPath:function(e){return"".concat(e,".html")},removeNotesData:function(e){var t=this;e.forEach((function(e){var n=t.notePathList.indexOf(t.stackCardToPath(e));t.removeNotesDataByIndex(n)}))},removeNotesDataByIndex:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;e>=0&&(this.notePathList.splice(e,1),this.noteContentList.splice(e,1))},resetNotesData:function(){this.notePathList=[],this.noteContentList=[]},pageMetadataPath:function(e){return!!e.endsWith(".html")&&e.replace(".html",".json")},fetchNote:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.noteCache[e];if(o)this.fillComponent(e,n,o,a);else{se.a.get("/notes/".concat(e)).then((function(o){t.noteCache[e]=o.data,t.fillComponent(e,n,o.data,a)})).catch((function(e){console.log(e)}));var i=this.pageMetadataPath(e);i&&se.a.get("/notes/".concat(i)).then((function(e){t.metadataCache[i]=e.data})).catch((function(e){console.log(e)}))}},metadataForIndex:function(e){var t=this.notePathList[e],n=this.pageMetadataPath(t);if(n)return this.metadataCache[n]},fillComponent:function(e,t,n,a){a?(this.peekPath=e,this.showPeekBox=!0):le.matches?(this.notePathList=[e],this.noteContentList=[n]):this.addNotesDataForCard(e,n,t)},scrollToElement:function(e){de(100).then((function(){var t,n,a=document.getElementById(e);a&&(null===(t=a.parentElement)||void 0===t||null===(n=t.parentElement)||void 0===n||n.scrollTo({top:0,left:(a.offsetWidth-42)*Number(e),behavior:"smooth"}))}))},scrollByCard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;-1===this.selectedId&&(this.selectedId=this.getScrollToElementId()),this.selectedId+=e,-1===this.selectedId&&(this.selectedId=this.notePathList.length-1),this.selectedId>this.notePathList.length-1&&(this.selectedId=this.selectedId%this.notePathList.length),this.scrollToElement(this.selectedId)},getScrollToElementId:function(){var e=document.getElementsByClassName("home")[0],t=e.scrollLeft,n=(e.scrollWidth,e.offsetWidth,document.getElementsByClassName("card")[0].offsetWidth);return Math.ceil(t/n)},handleKeyPressed:function(e){switch(e.key){case"ArrowRight":case"l":this.scrollByCard();break;case"h":case"ArrowLeft":this.scrollByCard(-1);break}},handleClose:function(e){var t=Number(e.target.closest(".card").id);if(t>=0){var n=Object(M["a"])(this.notePathList);n.splice(t,1),this.pushRouterPath(n)}},pushRouterPath:function(e){e.length<=0&&(e=["/"]),this.$router.push({path:e.shift(),query:{stack:e.map((function(e){return e.split(".")[0]}))}})},updateTitle:function(){var e=this;setTimeout((function(){var t=e.$el.getElementsByClassName("note-title")[0];e.title=t?"透明盒子计划·笔记·".concat(t.innerText):"透明盒子计划·笔记"}),600)},handleOverLink:function(e){var t=this;le.matches||(this.timer=setTimeout((function(){var n=t.filterClickEvent(e);if(t.eventClientX=e.clientX,t.eventClientY=e.clientY,n){if(n===t.peekPath&&t.showPeekBox)return;var a=t.noteCache[n];a&&(t.peekPath=n,t.showPeekBox=!0),t.fetchNote(n,0,!0)}}),1e3))},handleLeaveLink:function(e){var t=this;clearTimeout(this.timer),de(200).then((function(){t.isInPeekBox||(t.showPeekBox=!1)}))},handleClick:function(e){var t=this.filterClickEvent(e);if(t)if(e.preventDefault(),le.matches)this.$router.push({path:t});else{var n=decodeURI(t);if(this.notePathList.includes(n))return void this.scrollToElement(this.notePathList.indexOf(n));var a=Number(e.target.closest(".card").id)+1;ue=a.toString(),this.selectedId=a;var o=Object(M["a"])(this.notePathList);o.splice(a,0,t),this.pushRouterPath(o)}},filterClickEvent:function(e){var t=e.target,n=Number(t.closest(".card").id);if(t.matches(".note-title"))return this.notePathList[n];t.matches("a")||(this.selectedId=n);while(t&&"A"!==t.tagName)t=t.parentNode;if(t&&t.matches(".card a:not([href*='://'])")&&t.href){var a=e.altKey,o=e.ctrlKey,i=e.metaKey,r=e.shiftKey,c=e.button;e.defaultPrevented;if(i||a||o||r)return!1;if(void 0!==c&&0!==c)return!1;if(t&&t.getAttribute){var s=t.getAttribute("target");if(/\b_blank\b/i.test(s))return!1}var l=new URL(t.href),u=l.pathname.split("/")[1];return!!e.preventDefault&&u}}}})],he);var fe=he;fe.render=H;var ve=fe,me={class:"h-full essay"};function be(e,t,n,o,i,r){var c=Object(a["B"])("PeekBox"),s=Object(a["C"])("katex");return Object(a["t"])(),Object(a["g"])("div",me,[(Object(a["t"])(),Object(a["g"])(a["b"],{to:"head"},[Object(a["k"])("title",null,Object(a["E"])(e.title),1)])),Object(a["k"])(a["c"],{name:"loadEssay"},{default:Object(a["I"])((function(){return[e.showContent?Object(a["J"])((Object(a["t"])(),Object(a["g"])("div",{key:0,id:"essay-content",innerHTML:e.essayContent},null,8,["innerHTML"])),[[s]]):Object(a["h"])("",!0)]})),_:1}),Object(a["k"])(a["c"],{name:"loadEssay"},{default:Object(a["I"])((function(){return[e.showSub?(Object(a["t"])(),Object(a["g"])("iframe",{key:0,class:"container h-64 mx-auto mb-8 bg-white border rounded-lg bg-opacity-50",src:"https://clearbox.substack.com/embed",frameborder:"0",scrolling:"no",onLoad:t[1]||(t[1]=function(t){return e.showSub=!0})},null,32)):Object(a["h"])("",!0)]})),_:1}),Object(a["k"])(c,{onOverPeekBox:t[2]||(t[2]=function(t){return e.isInPeekBox=!0}),onLeavePeekBox:t[3]||(t[3]=function(t){e.isInPeekBox=!1,e.handleLeaveRefLink()}),showPeekBox:e.showPeekBox,eventClientX:e.eventClientX,eventClientY:e.eventClientY,isInPeekBox:e.isInPeekBox,boxContent:e.refContent,width:18,height:8},null,8,["showPeekBox","eventClientX","eventClientY","isInPeekBox","boxContent"])])}n("466d");var pe=function(e){Object(h["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(m["b"]);pe=Object(v["a"])([Object(m["a"])({data:function(){return{title:"透明盒子计划·文章",essayContent:"",showContent:!1,showSub:!1,refContent:"",showPeekBox:!1,isInPeekBox:!1,timer:"",eventClientX:0,eventClientY:0}},components:{PeekBox:re},watch:{$route:function(e,t){var n=this;this.showContent=!1,this.showSub=!1,"Essays"===e.name&&(this.fetchEssay(e.params.essayName),this.addClickListener(),this.updateTitle(),setTimeout((function(){n.showSub=!0}),2e3))}},mounted:function(){this.fetchEssay(this.$route.params.essayName),this.addClickListener(),this.updateTitle()},beforeUnmount:function(){this.removeClickListener()},methods:{addClickListener:function(){var e=this;setTimeout((function(){var t=e.$el.getElementsByTagName("a");t.forEach((function(t){return t.addEventListener("click",e.handleClick)})),t=e.$el.getElementsByClassName("footnote-ref"),t.forEach((function(t){return t.addEventListener("mouseenter",e.handleOverRefLink)})),t.forEach((function(t){return t.addEventListener("mouseleave",e.handleLeaveRefLink)}))}),600)},removeClickListener:function(){var e=this,t=this.$el.getElementsByTagName("a");t.forEach((function(t){return t.removeEventListener("click",e.handleClick)})),t=this.$el.getElementsByClassName("footnote-ref"),t.forEach((function(t){return t.removeEventListener("mouseenter",e.handleOverRefLink)})),t.forEach((function(t){return t.removeEventListener("mouseleave",e.handleLeaveRefLink)}))},updateTitle:function(){var e=this;setTimeout((function(){var t=e.$el.getElementsByClassName("note-title")[0];e.title=t?"透明盒子计划「".concat(t.innerText,"」"):"透明盒子计划·文章"}),600)},handleOverRefLink:function(e){var t=this;this.timer=setTimeout((function(){t.eventClientX=e.clientX,t.eventClientY=e.clientY;var n=e.target.getElementsByTagName("a")[0],a=n.getAttribute("href").split("#")[1],o=document.getElementById(a);o&&(t.refContent=o.innerHTML.replace("↩",""),t.showPeekBox=!0)}),1e3)},handleLeaveRefLink:function(e){var t=this;clearTimeout(this.timer),setTimeout((function(){t.isInPeekBox||(t.showPeekBox=!1)}),200)},fetchEssay:function(e){var t=this;se.a.get("/notes/essays/".concat(e)).then((function(e){t.essayContent=e.data,t.showContent=!0})).catch((function(e){console.log(e)}))},scrollToElement:function(e){e&&(e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.classList.add("highlight"),setTimeout((function(){e.classList.remove("highlight")}),2e3))},handleClick:function(e){var t=e.target,n=t.getAttribute("href");if(n.match(/^#fn-\d+$/)||n.match(/^#fnref-\d+$/)){e.preventDefault();var a=document.getElementById(n.split("#")[1]);this.scrollToElement(a)}else{var o=this.filterClickEvent(e);o&&(e.preventDefault(),this.removeClickListener(),this.$router.push({path:o}))}},filterClickEvent:function(e){var t=e.target;while(t&&"A"!==t.tagName)t=t.parentNode;if(t&&t.matches("#essay-content a:not([href*='://'])")&&t.href){var n=e.altKey,a=e.ctrlKey,o=e.metaKey,i=e.shiftKey,r=e.button;e.defaultPrevented;if(o||n||a||i)return!1;if(void 0!==r&&0!==r)return!1;if(t&&t.getAttribute){var c=t.getAttribute("target");if(/\b_blank\b/i.test(c))return!1}var s=new URL(t.href),l=s.pathname.split("/")[1];return!!e.preventDefault&&l}}}})],pe);var ge=pe;ge.render=be;var ke=ge,je=[{path:"/",name:"Home",redirect:"/notes/有关笔记.html",component:ve},{path:"/notes/:noteName",name:"Notes",component:ve},{path:"/essays",name:"EssaysIndex",redirect:"/essays/index.html",component:ke},{path:"/essays/:essayName",name:"Essays",component:ke},{path:"/default",name:"Default Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Oe=Object(k["a"])({history:Object(k["b"])(),routes:je}),ye=Oe,Ce=(n("ba8c"),n("7707")),xe=n.n(Ce),Ee=n("b63f");xe.a.polyfill(),Object(a["f"])(g).directive("katex",Ee["a"]).use(ye).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1d9c7135.js.map