(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-601775f4","chunk-c2702fe6"],{1069:function(t,e,i){"use strict";var a=i("c1df"),s=i.n(a);let n=(t,e,i,a)=>{let n="YYYY-MM-DD HH:mm",r=s()(e).startOf(i).format(n),o=s()(r).add(a,i).format(n);while(!s()(t).isSameOrAfter(r)||!s()(t).isSameOrBefore(o))r=o,o=s()(r).add(a,i).format(n);let l=s()(t).diff(r),h=-s()(t).diff(o);return l<h?r:o};e["a"]=t=>{let e,i="YYYY-MM-DD HH:mm",a=t.map(t=>s()(new Date(t))).sort((t,e)=>t.diff(e)).map(t=>t.format(i)),r=[["m",1],["m",5],["m",10],["m",15],["m",20],["m",30],["h",1],["h",2],["h",4],["h",12],["d",1],["d",3],["d",7],["M",1],["M",3],["M",6],["y",1],["y",2],["y",5],["y",10]],o=(t,e,a,n)=>{let r=[];t=s()(t).add(-n,a).format(i),e=s()(e).add(n,a).format(i);let o=s()(t).startOf(a).format(i),l=s()(o).add(n,a).format(i);r.push(o);while(!s()(e).isSameOrAfter(o)||!s()(e).isSameOrBefore(l))o=l,l=s()(o).add(n,a).format(i),r.push(o);return r.push(l),r},l={m:["HH:mm",""],h:["DD.MM HH:","00"],d:["DD.MM.YY",""],M:["MM.YYYY",""],y:["YYYY",""]};for(e of r)if(s()(a[a.length-1]).diff(a[0],e[0])/e[1]<=24)break;if(s()(a[a.length-1]).diff(a[0],e[0])<1)return;a=a.map(t=>n(t,a[0],e[0],e[1]));let h=o(a[0],a[a.length-1],e[0],e[1]),d=h.map(t=>a.filter(i=>s()(i).isSame(t,e[0])).length);return a=h.map((t,i)=>({title:s()(t).format(l[e[0]][0])+l[e[0]][1],value:d[i]})),a}},"36ae":function(t,e,i){"use strict";i("7d82")},"3c5a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"echart",style:t.style})},s=[],n=i("313e"),r=i("4e14"),o={name:"echart",mixins:[r["a"]],computed:{style(){return{height:(this.height||250)+"px"}}},methods:{initChart(t){this.chart=n["init"](this.$el,null,{height:this.height,width:"auto"}),this.resizeHandler=()=>{this.width=this.$el.clientWidth,this.chart.resize()},window.attachEvent?window.attachEvent("onresize",this.resizeHandler):window.addEventListener("resize",this.resizeHandler),t&&setTimeout(()=>{this.chart.setOption(t),this.chart.on("click",t=>{this.$emit("chart-event",t)})},10),this.on({event:"slide-start",callback:()=>{setTimeout(()=>{this.chart&&this.options&&this.chart.setOption(this.options,!0),this.chart.resize()},10)},rule:()=>!0}),this.on({event:"update-dialog-view",callback:()=>{setTimeout(()=>{this.chart&&this.options&&this.chart.setOption(this.options,!0),this.chart.resize()},10)},rule:()=>!0})}},props:["options","height"],watch:{options:{handler:function(t){t&&this.chart&&setTimeout(()=>{this.chart.setOption(t,!0),this.chart.resize()},10)},deep:!0},height(t){setTimeout(()=>{this.chart.resize({height:t},10)})}},mounted(){this.initChart(this.options)},beforeDestroy(){window.attachEvent?window.detachEvent("onresize",this.resizeHandler):window.removeEventListener("resize",this.resizeHandler,!1),this.off()},data:()=>({chart:null,resizeHandler:null})},l=o,h=(i("36ae"),i("2877")),d=Object(h["a"])(l,a,s,!1,null,"7d96c1a5",null);e["default"]=d.exports},5927:function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[e("v-row",{staticClass:"mx-0 pa-5"},[e("v-col",[e("div",{class:"title font-weight-light "+(1!=t.validation?"warning--text":"primary--text"),staticStyle:{"line-height":"1.2em"}},[t._v(t._s(t.title)+"\n      ")]),e("p",{staticClass:"body-2 py-1 pl-5 pr-2 my-0 font-weight-light",staticStyle:{"line-height":"1.2em"}},[t._v(t._s(t.note))])])],1),e("v-divider"),1!=t.validation?e("v-row",{staticClass:"caption",attrs:{color:"warning"}},[e("v-spacer"),e("div",[e("span",{staticClass:"warning--text caption pa-2 font-weight-light font-italic"},[t._v(t._s(t.validation))])])],1):t._e()],1)},s=[],n=i("4e14"),r={props:["id","title","note","validation"],mixins:[n["a"]],watch:{validation(t){this.emit("layout-change-state",this.id,t)}},created(){this.emit("layout-change-state",this.id,this.validation)}},o=r,l=i("2877"),h=i("fef8"),d=i.n(h),c=i("62ad"),p=i("ce7e"),u=i("0fd9"),f=i("2fa4"),m=Object(l["a"])(o,a,s,!1,null,null,null);e["a"]=m.exports;d()(m,{VCol:c["a"],VDivider:p["a"],VRow:u["a"],VSpacer:f["a"]})},6633:function(t,e,i){"use strict";var a=i("3c5a");e["a"]={components:{echart:a["default"]},methods:{truncate(t,e){return e=e||50,t.toString().length<=e?t.toString():t.toString().length-e>10?t.toString().substring(0,e)+"...":t.toString()},redrawStat(){if(this.statOptions){let t=JSON.parse(JSON.stringify(this.statOptions));this.statOptions=null,setTimeout(()=>{this.statOptions=t},1e3)}}},watch:{active(t){t>0&&(this.emit("form-get-stat"),setTimeout(()=>{this.redrawStat()},10))},stat(){this.statOptions=this.calculateStat(),this.statOptions.redraw=!1}},data:()=>({statOptions:null})}},"7d82":function(t,e,i){},"852a":function(t,e,i){"use strict";var a=i("2ef0");e["a"]={methods:{translate(t){return this.$t(`${this.id}_${t}`)},_initI18n(){if(!this.i18n)return;this.$i18n_id=this.$djvue.randomName();let t={en:Object(a["mapKeys"])(this.i18n.en,(t,e)=>`${this.id}_${e}`),uk:Object(a["mapKeys"])(this.i18n.uk,(t,e)=>`${this.id}_${e}`)};this.$i18n.mergeLocaleMessage("en",t.en),this.$i18n.mergeLocaleMessage("uk",t.uk)},_destroyI18n(){}},created(){this._initI18n()},beforeDestroy(){this._destroyI18n()}}},8900:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[t.options&&t.answer?e("v-card",{attrs:{flat:"",color:"transparent"}},[e("v-container",{attrs:{"pa-2":""}},[t.isValid?e("q-view",{attrs:{id:t.config.id,title:t.options.title,note:t.options.note,validation:t.isValid}}):t._e(),e("v-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("v-tab",{key:"response",attrs:{ripple:""}},[t._v(t._s(t.translate("Your_Response")))]),t.options.showResponsesStat?e("v-tab",{key:"statistic",attrs:{ripple:""}},[t._v(t._s(t.translate("Report")))]):t._e(),e("v-tab-item",{key:"response",attrs:{ripple:""}},[t.options?e("v-row",{staticClass:"mx-0 pa-3 d-flex justify-center"},[e("v-col",{attrs:{cols:"8"}},[e("v-date-picker",{staticClass:"mt-3 v-card--flat",staticStyle:{border:"1px solid #dedede"},attrs:{"full-width":"",landscape:"",locale:t.l},model:{value:t.answer.data[0],callback:function(e){t.$set(t.answer.data,0,e)},expression:"answer.data[0]"}})],1)],1):t._e()],1),t.options.showResponsesStat?e("v-tab-item",{key:"statistic",attrs:{ripple:""}},[e("echart",{attrs:{options:t.statOptions,height:t.height}})],1):t._e()],1)],1)],1):e("div",{staticClass:"text-xs-center"})],1)},s=[],n=i("c555"),r=i("4e14"),o=i("6633"),l=i("1069"),h=i("852a"),d=i("5927"),c={mixins:[n["a"],r["a"],o["a"],h["a"]],components:{"q-view":d["a"]},props:["config","options","answer","stat"],computed:{isValid(){return this.options?this.answer?!this.options.required||0!=this.answer.data.length||this.translate("Validation_Error"):"No response data":"Not configured"}},methods:{calculateStat(){let t=this.stat.responses.filter(t=>t),e=[];t.forEach(t=>{e=e.concat(t)});let i=Object(l["a"])(e);if(!i)return{};let a={color:[this.$vuetify.theme.themes.light.primary],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value"},series:[{name:"",type:"bar",itemStyle:{opacity:.5},data:[]}]};return a.xAxis.data=i.map(t=>t.title),a.series[0].data=i.map(t=>t.value),this.height=250,a}},watch:{"answer.data":{handler(t,e){e&&(this.answer&&this.answer.valid!=this.isValid&&(this.answer.valid=this.isValid),this.$emit("update:answer"))},deep:!0}},data:()=>({active:null,newAltTitle:null,selection:[],height:null,l:null,i18n:{en:{Your_Response:"Your Response",Report:"Report",Validation_Error:"No response for this question but it is required.",Answer_not_configured:"Structure of answer not configured",No_data_available:"No data available",Alt_label:'Type your response and press "Enter"'},uk:{Your_Response:"Ваша відповідь",Report:"Звіт",Validation_Error:"Відсутня відповідь на обов'язкове запитання.",Answer_not_configured:"Структура відповіді не визначена",No_data_available:"Дані відсутні",Alt_label:'Надрукуйте Вашу відповідь та натисніть "Enter"'}}}),mounted(){this.$emit("init")}},p=c,u=i("2877"),f=i("fef8"),m=i.n(f),v=i("b0af"),w=i("62ad"),g=i("a523"),y=i("2e4b"),_=i("0fd9"),b=i("71a3"),O=i("c671"),S=i("fe57"),x=Object(u["a"])(p,a,s,!1,null,null,null);e["default"]=x.exports;m()(x,{VCard:v["a"],VCol:w["a"],VContainer:g["a"],VDatePicker:y["a"],VRow:_["a"],VTab:b["a"],VTabItem:O["a"],VTabs:S["a"]})},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var a=i("e8f2"),s=i("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:a}){let n;const{attrs:r}=i;return r&&(i.attrs={},n=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(s["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),a)}})},c671:function(t,e,i){"use strict";var a=i("1e6c");e["a"]=a["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=a["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})}}]);
//# sourceMappingURL=chunk-601775f4.571e8e4f.js.map