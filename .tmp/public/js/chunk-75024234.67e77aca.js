(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75024234"],{"353f":function(t,o,e){"use strict";e("358d")},"358d":function(t,o,e){},"8b0d":function(t,o,e){},a06a:function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t._self._c;return o("div",[t.options?o("v-app-bar",{class:t.options.decoration&&t.options.decoration.class||"my-0 py-0",style:t.options.decoration?t.options.decoration.style:"padding-top: 1em; font-weight:300;",attrs:{dark:!t.options.decoration||t.options.decoration.dark,light:!!t.options.decoration&&t.options.decoration.light,height:t.options.decoration?t.options.decoration.height:void 0,tile:!t.options.decoration||t.options.decoration.tile,dence:!t.options.decoration||t.options.decoration.dence,flat:!t.options.decoration||t.options.decoration.flat,color:t.options.decoration&&t.options.decoration.color||"primary darken-1",src:t.options.decoration?t.options.decoration.bgImage:void 0},scopedSlots:t._u([{key:"img",fn:function({props:e}){return[o("v-img",t._b({},"v-img",e,!1))]}},{key:"extension",fn:function(){return[o("v-spacer"),t._l(t.options.references,(function(e,i){return o("span",{key:i},[e.id?o("router-link",{staticClass:"white--text",staticStyle:{"text-decoration":"none",padding:"0 0.5em"},attrs:{to:"/"+(e.id||"")}},[t._v("\n       "+t._s(e.title)+"\n     ")]):t._e(),e.url?o("a",{staticClass:"white--text",staticStyle:{"text-decoration":"none",padding:"0 0.5em"},attrs:{href:e.url,target:e.target}},[t._v("\n       "+t._s(e.title)+"\n     ")]):t._e()],1)})),t.options.login||t.options.locale||t.options.user?o("v-divider",{attrs:{vertical:""}}):t._e(),!t.app.user.isLoggedIn&&t.options.login?o("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function({on:e}){return[o("v-btn",{attrs:{outlined:"","x-small":"",color:"white"},on:{click:function(o){return t.login()}}},[t._v("\n         Log in with Google\n         ")])]}}],null,!1,3741792083)},[o("span",[t._v("Log in with Google")])]):t._e(),t.options.locale?o("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:e}){return[o("v-btn",t._g({attrs:{icon:""}},e),[o("img",{attrs:{src:"./img/"+t.$i18n.locale+".png",small:""}})])]}}],null,!1,2371495479)},[o("v-list",[o("v-list-item",{key:"uk",on:{click:function(o){return t.setLocale("uk")}}},[o("img",{attrs:{src:"./img/uk.png",small:""}})]),o("v-list-item",{key:"en",on:{click:function(o){return t.setLocale("en")}}},[o("img",{attrs:{src:"./img/en.png",small:""}})])],1)],1):t._e(),t.app.user.isLoggedIn&&t.options.user?o("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function({on:e}){return[o("v-avatar",t._g({staticClass:"ml-2",staticStyle:{border:"1px solid rgba(255, 255, 255, 0.3)"},attrs:{size:"32"}},e),[o("dj-img",{attrs:{src:t.app.user.photo,icon:"mdi-account"}})],1)]}}],null,!1,4042105098)},[o("span",[t._v(t._s(t.app.user.name))])]):t._e()]},proxy:!0}],null,!1,3548444712)},[o("div",[t.options.decoration&&t.options.decoration.appIcon?o("img",{class:t.options.decoration.appIcon.class||"",style:t.options.decoration.appIcon.style||"",attrs:{src:t.options.decoration.appIcon.src}}):t._e()]),o("div",[o("div",{class:t.options.decoration&&t.options.decoration.title&&t.options.decoration.title.class||"display-2 font-weight-light white--text",style:t.options.decoration&&t.options.decoration.title&&t.options.decoration.title.style||""},[t._v("\n       "+t._s(t.options.title)+"\n     \n     ")]),o("div",{class:t.options.decoration&&t.options.decoration.subTitle&&t.options.decoration.subTitle.class||"pl-1 headline font-weight-light white--text",style:t.options.decoration&&t.options.decoration.subTitle&&t.options.decoration.subTitle.style||""},[t._v("\n       "+t._s(t.options.subTitle)+"\n     ")])])]):t._e()],1)},r=[],n=e("c555"),s=e("4e14"),l=e("2ef0"),c=function(){var t=this,o=t._self._c;return o("config-dialog",{attrs:{options:t.props,submit:t.submit}})},a=[],d=e("a410"),p={name:"AppFooterConfig",components:{"config-dialog":d["a"]},props:["options","submit"],computed:{props(){return{icon:this.options.config.icon,title:`app-footer-widget: ${this.options.config.id} ${this.options.config.name}`,config:this.options.config,editorTree:this.editorTree}}},data(){return{editorTree:[{name:"Configuration",children:[{name:"Widget",editor:()=>e.e("chunk-2d226cca").then(e.bind(null,"e9cc"))},{name:"Style",editor:()=>e.e("chunk-55e9e634").then(e.bind(null,"c59e"))},{name:"Options",editor:()=>Promise.all([e.e("chunk-3d2e32d9"),e.e("chunk-0ad95c16")]).then(e.bind(null,"41f1"))}]}]}}},h=p,u=e("2877"),m=Object(u["a"])(h,c,a,!1,null,null,null),g=m.exports,S={name:"app-topbar-widget",icon:"mdi-page-layout-header",mixins:[n["a"],s["a"]],methods:{onValidate(t,o){if(Object(l["isString"])(t))try{return t=JSON.parse(t),t}catch(e){return{error:e.toString()}}return t},onReconfigure(t){return this.$dialogManager.showAndWait(g,{width:"90%"},{config:t})}},props:["config"],computed:{options(){return this.config.data.embedded}},mounted(){this.$emit("init")}},f=S,v=(e("353f"),e("fef8")),b=e.n(v),y=(e("8b0d"),e("71d9"));function O(t,o,e){const{self:i=!1}=o.modifiers||{},r=o.value,n="object"===typeof r&&r.options||{passive:!0},s="function"===typeof r||"handleEvent"in r?r:r.handler,l=i?t:o.arg?document.querySelector(o.arg):window;l&&(l.addEventListener("scroll",s,n),t._onScroll=Object(t._onScroll),t._onScroll[e.context._uid]={handler:s,options:n,target:i?void 0:l})}function T(t,o,e){var i;if(!(null===(i=t._onScroll)||void 0===i?void 0:i[e.context._uid]))return;const{handler:r,options:n,target:s=t}=t._onScroll[e.context._uid];s.removeEventListener("scroll",r,n),delete t._onScroll[e.context._uid]}const _={inserted:O,unbind:T};var k=_,w=e("3a66"),x=e("d9bd"),L=e("2b0e"),A=L["a"].extend({name:"scrollable",directives:{Scroll:_},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(x["c"])("Unable to locate element with identifier "+this.scrollTarget,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}}),B=e("d10f"),j=e("f2e7"),I=e("80d2"),R=e("58df");const V=Object(R["a"])(y["a"],A,B["a"],j["a"],Object(w["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var C=V.extend({name:"v-app-bar",directives:{Scroll:k},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return A.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...y["a"].options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return y["a"].options.computed.computedContentHeight.call(this);const t=this.dense?48:56,o=this.computedOriginalHeight;return t+(o-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,o=1.5;return t+(o-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=y["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:y["a"].options.computed.isCollapsed.call(this)},isProminent(){return y["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...y["a"].options.computed.styles.call(this),fontSize:Object(I["i"])(this.computedFontSize,"rem"),marginTop:Object(I["i"])(this.computedMarginTop),transform:`translateY(${Object(I["i"])(this.computedTransform)})`,left:Object(I["i"])(this.computedLeft),right:Object(I["i"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=y["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const o=y["a"].options.render.call(this,t);return o.data=o.data||{},this.canScroll&&(o.data.directives=o.data.directives||[],o.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),o}}),H=e("8212"),M=e("8336"),$=e("ce7e"),E=e("adda"),P=e("8860"),U=e("da13"),z=e("e449"),N=e("2fa4"),F=e("3a2f"),J=Object(u["a"])(f,i,r,!1,null,null,null);o["default"]=J.exports;b()(J,{VAppBar:C,VAvatar:H["a"],VBtn:M["a"],VDivider:$["a"],VImg:E["a"],VList:P["a"],VListItem:U["a"],VMenu:z["a"],VSpacer:N["a"],VTooltip:F["a"]})}}]);
//# sourceMappingURL=chunk-75024234.67e77aca.js.map