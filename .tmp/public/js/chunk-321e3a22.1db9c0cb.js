(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-321e3a22"],{"0e4d":function(t,e,s){"use strict";s("27bb")},"27bb":function(t,e,s){},b223:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{class:`text-${t.options.align} ma-2`},[e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-x":"","z-index":"1000"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:i}){return[e("v-badge",{attrs:{content:t.noReadMessages,value:t.noReadMessages,color:"warning",bordered:"",overlap:""}},[e("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{dark:"",small:"",color:"primary"}},"v-btn",i,!1),s),[e("v-icon",{staticClass:"pr-2",attrs:{dark:"",small:""}},[t._v(" "+t._s(t.options.icon||"mdi-bell"))]),e("span",{staticClass:"font-weight-light"},[t._v(t._s(t.options.title))])],1)],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[e("v-card",{attrs:{flat:""}},[e("v-toolbar",{attrs:{color:"primary",dark:"",dense:"",flat:""}},[e("v-icon",{staticClass:"pr-2"},[t._v(" "+t._s(t.options.icon||"mdi-bell")+" ")]),e("v-toolbar-title",[t._v(t._s(t.options.title))]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(e){return t.closeMenu()}}},[e("v-icon",[t._v("mdi-close")])],1)],1),e("v-list",{staticStyle:{overflow:"auto"},attrs:{"two-line":"",dense:"",height:"300"}},[t._l(t.messages,(function(s,i){return[s?e("v-list-item",{key:i,on:{click:function(t){}}},[e("v-list-item-avatar",[e("v-img",{attrs:{src:s.user.photo}})],1),e("v-list-item-content",[e("v-list-item-title",{class:i<t.noReadMessages?"warning--text":"font-weight-light",domProps:{innerHTML:t._s(t.formatDate(s.date)+" "+(s.user.name||"ananymous"))}}),e("v-list-item-subtitle",{class:i<t.noReadMessages?"caption":"",domProps:{innerHTML:t._s(""+s.data)}})],1)],1):t._e(),e("v-divider")]}))],2),t.options.readonly?t._e():e("v-textarea",{staticClass:"ma-2",attrs:{outlined:""},scopedSlots:t._u([{key:"label",fn:function(){return[e("div",[t._v("\n            Your message...\n          ")])]},proxy:!0}],null,!1,2596954467),model:{value:t.newMessage,callback:function(e){t.newMessage=e},expression:"newMessage"}}),e("v-card-actions",[e("v-spacer"),t.options.readonly?t._e():e("v-btn",{attrs:{color:"primary",text:"",disabled:!t.newMessage},on:{click:function(e){return t.send()}}},[t._v("Send")]),e("v-btn",{attrs:{color:"primary",text:""},on:{click:t.closeMenu}},[t._v("Close")])],1)],1)],1)],1)},a=[],n=s("c555"),o=s("4e14"),r=s("c1df"),l=s.n(r),c=s("2ef0"),d=function(){var t=this,e=t._self._c;return e("config-dialog",{attrs:{options:t.props,submit:t.submit}})},u=[],h=s("a410"),p={name:"EduEditorConfig",components:{"config-dialog":h["a"]},props:["options","submit"],computed:{props(){return{icon:this.options.config.icon,title:`edu-editor-widget: ${this.options.config.id} ${this.options.config.name}`,config:this.options.config,editorTree:this.editorTree}}},data(){return{editorTree:[{name:"Configuration",children:[{name:"Widget",editor:()=>s.e("chunk-2d226cca").then(s.bind(null,"e9cc"))},{name:"Style",editor:()=>s.e("chunk-55e9e634").then(s.bind(null,"c59e"))},{name:"Options",editor:()=>Promise.all([s.e("chunk-3d2e32d9"),s.e("chunk-0ad95c16")]).then(s.bind(null,"41f1"))}]}]}}},m=p,f=s("2877"),g=Object(f["a"])(m,d,u,!1,null,null,null),b=g.exports;var v={name:"sse-listener-widget",icon:"mdi-bell",mixins:[n["a"],o["a"]],data:()=>({messages:[],noReadMessages:0,newMessage:"",menu:!1,channel:null,subscription:null,options:{align:"right",readonly:!0,channel:null,events:["message"],title:"User Activity",dateFormat:null,icon:"mdi-bell"}}),methods:{formatDate(t){let e=l()(new Date(t));return this.options.dateFormat?e.format(this.options.dateFormat):e.fromNow()},openMenu(){this.menu=!0},closeMenu(){this.menu=!1,this.noReadMessages=0},send(){this.$pubsub().then(t=>t.publish({channel:this.options.channel,date:new Date,app:this.app.name,user:this.app.user,data:this.newMessage})).then(()=>{this.newMessage=""})},onUpdate({data:t}){t&&(this.options=Object(c["extend"])(this.options,t))},onDelete(){this.$pubsub().then(t=>t.unsubscribe(this))},onReconfigure(t){return this.$dialogManager.showAndWait(b,{width:"90%"},{config:t})},subscribe(t){this.$pubsub().then(e=>e.subscribe({widget:this,channel:t,handler:t=>{this.menu||this.noReadMessages++,t.data=t.data.replace("\n","<br/>"),this.messages=[t].concat(this.messages)}})).then(t=>{this.subscription=t})}},watch:{menu(t){t&&this.openMenu()},"options.channel"(t){t&&this.subscribe(t)}},props:["config"],mounted(){this.$emit("init")}},w=v,_=(s("0e4d"),s("fef8")),y=s.n(_),M=(s("ff44"),s("132d")),$=s("a9ad"),k=s("7560"),C=s("f2e7"),V=s("f40d"),x=s("fe6c"),B=s("58df"),O=s("80d2"),S=Object(B["a"])($["a"],Object(x["b"])(["left","bottom"]),k["a"],C["a"],V["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(t){return`calc(100% - ${Object(O["i"])(t||this.offset)})`},genBadge(){const t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),s=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",s,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent(){if(this.dot)return;const t=Object(O["t"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(M["a"],this.icon):void 0)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(t){const e=[this.genBadgeWrapper()],s=[Object(O["t"])(this)],{"aria-atomic":i,"aria-label":a,"aria-live":n,role:o,title:r,...l}=this.$attrs;return this.inline&&this.left?s.unshift(e):s.push(e),t("span",{staticClass:"v-badge",attrs:l,class:this.classes},s)}}),R=s("8336"),T=s("b0af"),L=s("99d9"),j=s("ce7e"),I=s("adda"),X=s("8860"),D=s("da13"),E=s("8270"),P=s("5d23"),Y=s("e449"),A=s("2fa4"),W=s("a844"),F=s("71d9"),N=s("2a7f"),H=Object(f["a"])(w,i,a,!1,null,"5d9a0352",null);e["default"]=H.exports;y()(H,{VBadge:S,VBtn:R["a"],VCard:T["a"],VCardActions:L["a"],VDivider:j["a"],VIcon:M["a"],VImg:I["a"],VList:X["a"],VListItem:D["a"],VListItemAvatar:E["a"],VListItemContent:P["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"],VMenu:Y["a"],VSpacer:A["a"],VTextarea:W["a"],VToolbar:F["a"],VToolbarTitle:N["a"]})},ff44:function(t,e,s){}}]);
//# sourceMappingURL=chunk-321e3a22.1db9c0cb.js.map