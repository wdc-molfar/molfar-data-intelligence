(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34c93fa3"],{"0160":function(t,e,i){},"1e06":function(t,e,i){"use strict";var o=i("58df"),n=i("9d26"),s=i("7560"),r=i("a9ad");const a=Object(o["a"])(r["a"],s["a"]);e["a"]=a.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon(){return!!this.icon||!!this.$slots.icon}},methods:{genBody(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon(){return this.$slots.icon?this.$slots.icon:this.$createElement(n["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot(){const t=this.setBackgroundColor(this.color);return this.$createElement("div",{staticClass:"v-timeline-item__inner-dot",...t},[this.hasIcon&&this.genIcon()])},genDot(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider(){const t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render(t){const e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:{"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right,...this.themeClasses}},e)}})},7429:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t._self._c;return t.options?e("div",[t.options.title?e("div",{class:t.options.title.decoration?t.options.title.decoration.classes:"",style:t.options.title.decoration?t.options.title.decoration.style:""},[t._v("\n    "+t._s(t.options.title.text)+"\n  ")]):t._e(),e("v-timeline",{attrs:{reverse:t.options.reverse,dense:t.options.decoration?t.options.decoration.dense:"",clipped:t.options.decoration?t.options.decoration.clipped:""}},t._l(t.options.events,(function(i,o){return e("v-timeline-item",{key:o,attrs:{color:i.decoration?i.decoration.color:"",small:i.decoration?i.decoration.small:"",large:i.decoration?i.decoration.large:"",dense:i.decoration?i.decoration.dense:"",left:i.decoration?i.decoration.left:"",right:i.decoration?i.decoration.right:"","fill-dot":i.decoration?i.decoration["fill-dot"]:"","hide-dot":i.decoration?i.decoration["hide-dot"]:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[i.opposite?e("span",{class:i.opposite.decoration?i.opposite.decoration.classes:"",style:i.opposite.decoration?i.opposite.decoration.style:"",domProps:{textContent:t._s(i.opposite.text)}}):t._e()]},proxy:!0}],null,!0)},[i.card?e("v-card",{class:i.card.decoration?i.card.decoration.classes:"",style:i.card.decoration?i.card.decoration.style:""},[i.card.title?e("v-card-title",{class:i.card.title.decoration?i.card.title.decoration.classes:"",style:i.card.title.decoration?i.card.title.decoration.style:""},[e("span",[t._v(t._s(i.card.title.text))]),e("v-spacer"),i.menu?e("v-menu",{attrs:{bottom:"",left:"",dense:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:o}){return[e("v-btn",t._g(t._b({attrs:{icon:"",color:"secondary"}},"v-btn",o,!1),i),[e("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[e("v-list",t._l(i.menu,(function(i,n){return e("v-list-item",{key:n,on:{click:function(e){return t._emit(o,n)}}},[i.icon?e("v-list-item-icon",[e("v-icon",{domProps:{textContent:t._s(i.icon)}})],1):t._e(),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(i.text)}})],1)],1)})),1)],1):t._e()],1):t._e(),i.card.note?e("v-card-text",{class:i.card.note.decoration?i.card.note.decoration.classes:"",style:i.card.note.decoration?i.card.note.decoration.style:""},[t._v("\n          "+t._s(i.card.note.text)+"\n        ")]):t._e()],1):t._e()],1)})),1)],1):t._e()},n=[],s=i("2ef0"),r=i("c555"),a=i("4e14"),c=i("ec26"),l=function(){var t=this,e=t._self._c;return e("config-dialog",{attrs:{options:t.props,submit:t.submit}})},d=[],p=i("a410"),m={name:"InputGroupConfig",components:{"config-dialog":p["a"]},props:["options","submit"],computed:{props(){return{icon:this.options.config.icon,title:`app-footer-widget: ${this.options.config.id} ${this.options.config.name}`,config:this.options.config,editorTree:this.editorTree}}},data(){return{editorTree:[{name:"Configuration",children:[{name:"Widget",editor:()=>i.e("chunk-2d226cca").then(i.bind(null,"e9cc"))},{name:"Style",editor:()=>i.e("chunk-55e9e634").then(i.bind(null,"c59e"))},{name:"Options",editor:()=>Promise.all([i.e("chunk-3d2e32d9"),i.e("chunk-0ad95c16")]).then(i.bind(null,"41f1"))}]}]}}},u=m,h=i("2877"),v=Object(h["a"])(u,l,d,!1,null,null,null),f=v.exports,g=(i("c1df"),{name:"timeline-widget",icon:"mdi-timeline-check-outline",mixins:[r["a"],a["a"]],data:()=>({options:null}),methods:{_emit(t,e){let i=this.options.events[t],o=i.menu[e]&&i.menu[e].event||"command",n=i.menu[e].text;this.emit(o,n,i)},onUpdate({data:t},e){e?(e.override&&Object(s["set"])(this,e.override,t),e.extend&&Object(s["set"])(this,e.extend,Object(s["extend"])(Object(s["get"])(this,e.extend),t))):this.options=t;let i=this.options;i.events&&i.events.forEach(t=>{t.id=t.id?t.id:Object(c["a"])()}),this.options=null,this.$nextTick(()=>{this.options=i})},onReconfigure(t){return this.$dialogManager.showAndWait(f,{width:"90%"},{config:t})}},created(){},mounted(){this.$emit("init")}}),_=g,y=i("fef8"),b=i.n(y),C=i("8336"),x=i("b0af"),V=i("99d9"),$=i("132d"),k=i("8860"),w=i("da13"),I=i("5d23"),B=i("34c3"),D=i("e449"),O=i("2fa4"),T=i("8414"),j=i("1e06"),S=Object(h["a"])(_,o,n,!1,null,null,null);e["default"]=S.exports;b()(S,{VBtn:C["a"],VCard:x["a"],VCardText:V["c"],VCardTitle:V["d"],VIcon:$["a"],VList:k["a"],VListItem:w["a"],VListItemContent:I["a"],VListItemIcon:B["a"],VListItemTitle:I["c"],VMenu:D["a"],VSpacer:O["a"],VTimeline:T["a"],VTimelineItem:j["a"]})},8414:function(t,e,i){"use strict";i("0160");var o=i("58df"),n=i("7560");e["a"]=Object(o["a"])(n["a"]).extend({name:"v-timeline",provide(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes(){return{"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse,...this.themeClasses}}},render(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}})},ec26:function(t,e,i){"use strict";var o,n=new Uint8Array(16);function s(){if(!o&&(o="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(n)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function a(t){return"string"===typeof t&&r.test(t)}for(var c=a,l=[],d=0;d<256;++d)l.push((d+256).toString(16).substr(1));function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase();if(!c(i))throw TypeError("Stringified UUID is invalid");return i}var m=p;function u(t,e,i){t=t||{};var o=t.random||(t.rng||s)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){i=i||0;for(var n=0;n<16;++n)e[i+n]=o[n];return e}return m(o)}e["a"]=u}}]);
//# sourceMappingURL=chunk-34c93fa3.f36b5b5d.js.map