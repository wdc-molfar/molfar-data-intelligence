(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4b53"],{"081f":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return e.opts.length>0?t("v-card",{attrs:{flat:""}},[t("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.minimized,expression:"minimized"}],staticClass:"body-1",staticStyle:{width:"100%","text-transform":"initial"},attrs:{text:"",color:e.options.color||"primary"},on:{click:function(t){e.minimized=!e.minimized}}},[e._v("\n    "+e._s(e.options.title)+"\n  ")]),t("v-toolbar",{directives:[{name:"show",rawName:"v-show",value:!e.minimized,expression:"!minimized"}],staticClass:"mx-0",staticStyle:{background:"transparent"},attrs:{light:"",dense:"",flat:""}},[t("v-toolbar-title",{class:(e.options.color||"primary")+"--text"},[e._v(e._s(e.options.title))]),t("v-spacer"),t("v-btn",{attrs:{icon:""},on:{click:function(t){e.minimized=!e.minimized}}},[t("v-icon",[e._v("mdi-close")])],1)],1),t("v-card-subtitle",{directives:[{name:"show",rawName:"v-show",value:!e.minimized,expression:"!minimized"}],staticClass:"pt-0",staticStyle:{"line-height":"1"}},[e._v("\n    "+e._s(e.options.note)+"\n  ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.minimized,expression:"!minimized"}],staticClass:"px-3"},e._l(e.opts,(function(i,s){return t("v-row",{directives:[{name:"show",rawName:"v-show",value:e.isShowed(i),expression:"isShowed(field)"}],key:s},["note"==i.type?t("v-col",{staticClass:"py-0"},[t("div",{staticClass:"caption secondary--text font-weight-light mx-3 my-0 pa-0",staticStyle:{"line-height":"1"}},[t("i",[e._v(e._s(i.value))])])]):e._e(),"text"==i.type?t("v-col",{staticClass:"py-0"},[t("v-text-field",{staticClass:"body-1",attrs:{"prepend-icon":"mdi-textbox",label:i.label,disabled:i.disabled,required:i.required,rules:i.rules},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}})],1):e._e(),"password"==i.type?t("v-col",{staticClass:"py-0"},[t("v-text-field",{staticClass:"body-1",attrs:{"prepend-icon":"mdi-textbox-password","append-icon":i.showChars?"visibility":"visibility_off",type:i.showChars?"text":"password",label:i.label,disabled:i.disabled,required:i.required,"error-messages":e.messages[s].join(" "),rules:i.rules},on:{"click:append":function(e){i.showChars=!i.showChars}},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}})],1):e._e(),"email"==i.type?t("v-col",{staticClass:"py-0"},[t("v-text-field",{staticClass:"body-1",attrs:{"prepend-icon":"mdi-email-outline",label:i.label,disabled:i.disabled,required:i.required,"error-messages":e.messages[s].join(" "),rules:i.rules},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}})],1):e._e(),"url"==i.type?t("v-col",{staticClass:"py-0"},[t("v-text-field",{staticClass:"body-1",attrs:{"prepend-icon":"mdi-web",label:i.label,disabled:i.disabled,required:i.required,"error-messages":e.messages[s].join(" "),rules:i.rules},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}})],1):e._e(),"textarea"==i.type?t("v-col",{staticClass:"py-0"},[t("v-textarea",{staticClass:"body-1",attrs:{"prepend-icon":"mdi-text",label:i.label,disabled:i.disabled,required:i.required,"error-messages":e.messages[s].join(" "),rules:i.rules},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}})],1):e._e(),"switch"==i.type?t("v-col",{staticClass:"py-0"},[t("v-switch",{staticClass:"body-1",attrs:{label:i.label,disabled:i.disabled,color:"primary"},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}})],1):e._e(),"range"==i.type?t("v-col",{staticClass:"py-0"},[t("div",{staticClass:"v-input v-text-field v-input--is-label-active v-input--is-dirty theme--light"},[t("div",{staticClass:"v-input__control"},[t("div",{staticClass:"v-text-field"},[t("label",{staticClass:"v-label v-label--active theme--light",class:e.messages[s].length>0?"error--text":"",staticStyle:{left:"0px",right:"auto",position:"absolute"},attrs:{"aria-hidden":"true"}},[e._v("\n                "+e._s(i.label)+"\n              ")]),t("v-range-slider",{staticClass:"mx-3",attrs:{disabled:i.disabled,max:i.range[1],min:i.range[0],step:i.step,"thumb-size":"24","thumb-label":"always","thumb-color":"primary",ticks:"always","tick-size":"2","error-messages":e.messages[s].join(" "),rules:i.rules},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}})],1)])])]):e._e(),"slider"==i.type?t("v-col",{staticClass:"py-0"},[t("div",{staticClass:"v-input v-text-field v-input--is-label-active v-input--is-dirty theme--light"},[t("div",{staticClass:"v-input__control"},[t("div",{staticClass:"v-text-field"},[t("label",{staticClass:"v-label v-label--active theme--light",class:e.messages[s].length>0?"error--text":"",staticStyle:{left:"0px",right:"auto","font-size":"12px",top:"-26px",position:"relative"},attrs:{"aria-hidden":"true"}},[e._v("\n                "+e._s(i.label)+": ")]),t("v-slider",{staticClass:"mx-3",attrs:{disabled:i.disabled,max:i.range[1],min:i.range[0],step:i.step,"thumb-size":"28","thumb-label":"always","thumb-color":"accent",color:"accent",ticks:"","tick-size":"2","error-messages":e.messages[s].join(" "),rules:i.rules},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}})],1)])])]):e._e(),"dateRange"==i.type?t("v-col",{staticClass:"py-0"},[t("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function({on:l}){return[t("v-text-field",e._g({staticClass:"body-1",attrs:{label:i.label,disabled:i.disabled,required:i.required,"error-messages":e.messages[s].join(" "),rules:i.rules,"prepend-icon":"event",readonly:"",clearable:i.clearable},model:{value:i.displayedValue,callback:function(t){e.$set(i,"displayedValue",t)},expression:"field.displayedValue"}},l))]}}],null,!0),model:{value:i._menu,callback:function(t){e.$set(i,"_menu",t)},expression:"field._menu"}},[t("v-date-picker",{attrs:{min:i.min,max:i.max,range:"","no-title":""},on:{change:function(t){return e.changeDateRange(s)}},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}})],1)],1):e._e(),"time"==i.type?t("v-col",{staticClass:"py-0"},[t("v-menu",{ref:"menu",refInFor:!0,attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function({on:l}){return[t("v-text-field",e._g({staticClass:"body-1",attrs:{label:i.label,disabled:i.disabled,required:i.required,"error-messages":e.messages[s].join(" "),rules:i.rules,"prepend-icon":"access_time",readonly:""},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}},l))]}}],null,!0),model:{value:i._menu,callback:function(t){e.$set(i,"_menu",t)},expression:"field._menu"}},[i._menu?t("v-time-picker",{attrs:{format:"24hr","full-width":""},on:{"click:minute":function(e){i._menu=!1}},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}}):e._e()],1)],1):e._e(),"select"==i.type?t("v-col",{staticClass:"py-0"},[t("v-autocomplete",{staticClass:"body-1",attrs:{items:i.items,filter:i.filter,color:"primary",label:i.label,multiple:i.multiple,clearable:i.multiple,"item-text":i.itemText,"item-value":e=>e,"error-messages":e.messages[s].join(" "),"search-input":i.search},on:{"update:searchInput":function(t){return e.$set(i,"search",t)},"update:search-input":function(t){return e.$set(i,"search",t)}},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"field.value"}})],1):e._e(),"number"==i.type?t("v-col",{staticClass:"py-0"},[t("div",{staticClass:"v-input body-1 v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted"},[t("div",{staticClass:"v-input__prepend-outer"},[t("div",{staticClass:"v-input__icon v-input__icon--prepend"},[t("v-icon",[e._v("mdi-numeric")])],1)]),t("div",{staticClass:"v-input__control"},[t("div",{staticClass:"v-input__slot"},[t("div",{staticClass:"v-text-field__slot"},[t("label",{staticClass:"v-label v-label--active theme--light",staticStyle:{left:"0px",right:"auto",position:"absolute"},attrs:{for:i._rid}},[e._v("\n                  "+e._s(i.label)+"\n                ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.value,expression:"field.value"}],attrs:{id:i._rid,type:"number",min:i.range[0],max:i.range[1]},domProps:{value:i.value},on:{input:function(t){t.target.composing||e.$set(i,"value",t.target.value)}}})])]),t("div",{staticClass:"v-text-field__details"},[t("div",{staticClass:"v-messages theme--light"},[t("div",{staticClass:"v-messages__wrapper"},[e._v(e._s(e.messages[s].join(" "))+".")])])])])])]):e._e()],1)})),1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.minimized,expression:"!minimized"}],staticClass:"pt-3"},[t("v-divider"),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{text:"",color:"secondary",disabled:!e.valid},on:{click:e.resolve}},[e._v(e._s(e.options.buttonName||"Apply"))])],1)],1)],1):e._e()},l=[],a=i("2ef0"),n=i("c555"),r=i("4e14"),d=function(){var e=this,t=e._self._c;return t("config-dialog",{attrs:{options:e.props,submit:e.submit}})},o=[],u=i("a410"),c={name:"AppFooterConfig",components:{"config-dialog":u["a"]},props:["options","submit"],computed:{props(){return{icon:this.options.config.icon,title:`app-footer-widget: ${this.options.config.id} ${this.options.config.name}`,config:this.options.config,editorTree:this.editorTree}}},data(){return{editorTree:[{name:"Configuration",children:[{name:"Widget",editor:()=>i.e("chunk-2d226cca").then(i.bind(null,"e9cc"))},{name:"Options",editor:()=>Promise.all([i.e("chunk-3d2e32d9"),i.e("chunk-0ad95c16")]).then(i.bind(null,"41f1"))},{name:"Style",editor:()=>i.e("chunk-55e9e634").then(i.bind(null,"c59e"))}]}]}}},p=c,m=i("2877"),v=Object(m["a"])(p,d,o,!1,null,null,null),f=v.exports,h=i("c1df"),b=i.n(h),g={name:"inputs-widget",icon:"mdi-file-document-box-outline",mixins:[n["a"],r["a"]],data:()=>({valid:!0,options:null,minimized:!1,search:null,opts:[],result:[],messages:[],rules:{required:e=>!Object(a["isUndefined"])(e)&&null!==e&&""!==e||"Required.",valid_email:e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Invalid e-mail."},valid_url:e=>{const t=/^((https?:\/\/)([a-zA-Z0-9]+[a-zA-Z0-9_-]*)(:\d{0,4})?([a-zA-Z0-9_\-/%={}?+&.:]*))$/;return t.test(e)||"Invalid url."},valid_range:e=>2==e.length||"Required.",valid_one_selection:e=>null!=e||"Required.",valid_multiple_selection:(e,t)=>i=>(e=_.isUndefined(e)?1:e,_.isUndefined(t)?i.length>=e||(1==e?"Required.":`Select ${e} or more items.`):i.length>e&&i.length<=t||`Select ${e}..${t} items.`)}}),watch:{opts:{handler(e){let t=!0,i=[];e.forEach((e,s)=>{if("select"==e.type){let t=JSON.parse(JSON.stringify(e.value));this.res&&this.res[s]&&!Object(a["isEqual"])(this.res[s].value,t)&&(this.opts[s].search="")}if(i.push(JSON.parse(JSON.stringify(e))),e.required){let i=!0;this.messages[s]=[],e.rules.forEach(t=>{let l=t(e.value);1!=l&&this.messages[s].push(l),i=i&&1==l}),t=t&&i}}),this.valid=t,this.res=i},deep:!0}},methods:{onValidate(e,t){if(Object(a["isString"])(e))try{return e=JSON.parse(e),e}catch(i){return{error:i.toString()}}return e},onUpdate({data:e}){if(!e)return this.opts=[],void(this.options=null);this.opts=this.normalizeOptions(e),this.options=e},onReconfigure(e){return this.$dialogManager.showAndWait(f,{width:"90%"},{config:e})},isShowed(e){let t=e.show||[];return t=a["isArray"][t]?t:[t],t=t.map(e=>{let t=Object(a["find"])(this.opts,t=>t.id==e);return!t||t.value}),t.reduce((e,t)=>t&&e,!0)},defaultFilter(e,t){return e=_.isString(e)?e:e.toString(),Object(a["includes"])(e.toLowerCase(),t.toLowerCase())},customFilter(e){return(t,i)=>{let s=_.isString(t)?t.toLowerCase():_.isString(t[e])?t[e].toLowerCase():t[e]?t[e].toString().toLowerCase():"";return Object(a["includes"])(s,i.toLowerCase())}},normalizeOptions(e){let t=[];return e&&e.field?(this.minimized=Object(a["isUndefined"])(e.minimized)||Object(a["isNull"])(e.minimized)?this.minimized:e.minimized,Object(a["keys"])(e.field).forEach(i=>{e.field[i]._rid=this.randomName;let s,l,n,r,d=e.field[i].type||"text",o=e.field[i].value||null,u=e.field[i].required?[this.rules.required].concat(e.field[i].rules?e.field[i].rules:[]):void 0;if("range"==e.field[i].type&&(o=o||[]),"dateRange"==e.field[i].type&&(s=e.field[i].min,l=e.field[i].max,o=o?(Object(a["isArray"])(o)?o:[o]).map(e=>e?b()(new Date(e)).format("YYYY-MM-DD"):null).filter(e=>e):[],n=o.join(" ~ "),n=n||null),"select"==e.field[i].type&&(o=o||(e.field[i].multiple?[]:null),Object(a["isNull"])(o)?r="":(o=e.field[i].multiple?o:Object(a["find"])(e.field[i].items,t=>(e.field[i].itemText?t[e.field[i].itemText]:t)==(e.field[i].itemText?o[e.field[i].itemText]:o)),r=e.field[i].itemText?o[e.field[i].itemText]:o)),e.field[i].required&&"url"==e.field[i].type&&(u=u.concat(this.rules.valid_url)),e.field[i].required&&"email"==e.field[i].type&&(u=u.concat(this.rules.valid_email)),e.field[i].required&&"range"==e.field[i].type&&(u=u.concat(this.rules.valid_range)),e.field[i].required&&"select"==e.field[i].type&&e.field[i].multiple){let t;t=e.field[i].range&&_.isArray(e.field[i].range)?this.rules.valid_multiple_selection(e.field[i].range[0],e.field[i].range[1]):this.rules.valid_multiple_selection(),u=u.concat(t)}let c=e.field[i].range||[];"range"==e.field[i].type&&(c="range"==e.field[i].type&&e.field[i].range&&Object(a["isArray"])(e.field[i].range)&&2==e.field[i].range.length?e.field[i].range:[0,1]),t.push({id:i,_rid:e.field[i]._rid,_menu:!1,type:d,value:o,displayedValue:n,min:s,max:l,label:e.field[i].label||i,range:c,step:e.field[i].range&&Object(a["isArray"])(e.field[i].range)&&2==e.field[i].range.length&&!Object(a["isUndefined"])(e.field[i].step)?e.field[i].step:.1,showChars:!1,show:e.field[i].show,disabled:e.field[i].disabled||!1,required:e.field[i].required||!1,rules:u,items:e.field[i].items?e.field[i].items:[],multiple:!!e.field[i].multiple&&e.field[i].multiple,itemText:e.field[i].itemText?e.field[i].itemText:void 0,filter:e.field[i].itemText?this.customFilter(e.field[i].itemText):this.defaultFilter,search:r}),this.messages.push([])}),t):[]},getOptions(e){return Object(a["zipObject"])(e.map(e=>e.id),e)},changeDateRange(e){this.opts[e]._menu=!1,b()(this.opts[e].value[0]).isAfter(b()(this.opts[e].value[1]))&&this.opts[e].value.reverse(),this.opts[e].displayedValue=this.opts[e].value.join(" ~ "),this.opts[e].displayedValue=this.opts[e].displayedValue?this.opts[e].displayedValue:null},resolve(){let e;e=this.options&&this.options.event?this.options.event:"apply",this.emit(e,this.getOptions(this.res))}},created(){},mounted(){this.$emit("init")}},y=g,x=i("fef8"),w=i.n(x),C=i("c6a6"),k=i("8336"),z=i("b0af"),S=i("99d9"),j=i("62ad"),q=i("2e4b"),O=i("ce7e"),V=i("132d"),$=i("e449"),T=i("5963"),A=i("0fd9"),N=i("ba0d"),R=i("2fa4"),D=i("b73d"),F=i("8654"),J=i("a844"),L=i("c964"),U=i("71d9"),I=i("2a7f"),Z=Object(m["a"])(y,s,l,!1,null,null,null);t["default"]=Z.exports;w()(Z,{VAutocomplete:C["a"],VBtn:k["a"],VCard:z["a"],VCardActions:S["a"],VCardSubtitle:S["b"],VCol:j["a"],VDatePicker:q["a"],VDivider:O["a"],VIcon:V["a"],VMenu:$["a"],VRangeSlider:T["a"],VRow:A["a"],VSlider:N["a"],VSpacer:R["a"],VSwitch:D["a"],VTextField:F["a"],VTextarea:J["a"],VTimePicker:L["a"],VToolbar:U["a"],VToolbarTitle:I["a"]})}}]);
//# sourceMappingURL=chunk-2d0a4b53.3bdc6e45.js.map