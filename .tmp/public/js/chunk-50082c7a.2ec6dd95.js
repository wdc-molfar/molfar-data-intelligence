(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50082c7a","chunk-c2702fe6"],{1069:function(t,e,i){"use strict";var a=i("c1df"),s=i.n(a);let n=(t,e,i,a)=>{let n="YYYY-MM-DD HH:mm",o=s()(e).startOf(i).format(n),r=s()(o).add(a,i).format(n);while(!s()(t).isSameOrAfter(o)||!s()(t).isSameOrBefore(r))o=r,r=s()(o).add(a,i).format(n);let l=s()(t).diff(o),h=-s()(t).diff(r);return l<h?o:r};e["a"]=t=>{let e,i="YYYY-MM-DD HH:mm",a=t.map(t=>s()(new Date(t))).sort((t,e)=>t.diff(e)).map(t=>t.format(i)),o=[["m",1],["m",5],["m",10],["m",15],["m",20],["m",30],["h",1],["h",2],["h",4],["h",12],["d",1],["d",3],["d",7],["M",1],["M",3],["M",6],["y",1],["y",2],["y",5],["y",10]],r=(t,e,a,n)=>{let o=[];t=s()(t).add(-n,a).format(i),e=s()(e).add(n,a).format(i);let r=s()(t).startOf(a).format(i),l=s()(r).add(n,a).format(i);o.push(r);while(!s()(e).isSameOrAfter(r)||!s()(e).isSameOrBefore(l))r=l,l=s()(r).add(n,a).format(i),o.push(r);return o.push(l),o},l={m:["HH:mm",""],h:["DD.MM HH:","00"],d:["DD.MM.YY",""],M:["MM.YYYY",""],y:["YYYY",""]};for(e of o)if(s()(a[a.length-1]).diff(a[0],e[0])/e[1]<=24)break;if(s()(a[a.length-1]).diff(a[0],e[0])<1)return;a=a.map(t=>n(t,a[0],e[0],e[1]));let h=r(a[0],a[a.length-1],e[0],e[1]),c=h.map(t=>a.filter(i=>s()(i).isSame(t,e[0])).length);return a=h.map((t,i)=>({title:s()(t).format(l[e[0]][0])+l[e[0]][1],value:c[i]})),a}},"36ae":function(t,e,i){"use strict";i("7d82")},"3c5a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"echart",style:t.style})},s=[],n=i("313e"),o=i("4e14"),r={name:"echart",mixins:[o["a"]],computed:{style(){return{height:(this.height||250)+"px"}}},methods:{initChart(t){this.chart=n["init"](this.$el,null,{height:this.height,width:"auto"}),this.resizeHandler=()=>{this.width=this.$el.clientWidth,this.chart.resize()},window.attachEvent?window.attachEvent("onresize",this.resizeHandler):window.addEventListener("resize",this.resizeHandler),t&&setTimeout(()=>{this.chart.setOption(t),this.chart.on("click",t=>{this.$emit("chart-event",t)})},10),this.on({event:"slide-start",callback:()=>{setTimeout(()=>{this.chart&&this.options&&this.chart.setOption(this.options,!0),this.chart.resize()},10)},rule:()=>!0}),this.on({event:"update-dialog-view",callback:()=>{setTimeout(()=>{this.chart&&this.options&&this.chart.setOption(this.options,!0),this.chart.resize()},10)},rule:()=>!0})}},props:["options","height"],watch:{options:{handler:function(t){t&&this.chart&&setTimeout(()=>{this.chart.setOption(t,!0),this.chart.resize()},10)},deep:!0},height(t){setTimeout(()=>{this.chart.resize({height:t},10)})}},mounted(){this.initChart(this.options)},beforeDestroy(){window.attachEvent?window.detachEvent("onresize",this.resizeHandler):window.removeEventListener("resize",this.resizeHandler,!1),this.off()},data:()=>({chart:null,resizeHandler:null})},l=r,h=(i("36ae"),i("2877")),c=Object(h["a"])(l,a,s,!1,null,"7d96c1a5",null);e["default"]=c.exports},4204:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[t.options?e("v-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("v-tab",{key:"general",attrs:{ripple:""}},[t._v("General")]),e("v-tab",{key:"statistic",attrs:{ripple:""}},[t._v("Statistic")]),e("v-tab-item",{key:"general",attrs:{ripple:""}},[e("v-card",{attrs:{flat:""}},[e("v-container",[e("h3",{staticClass:"headline"},[t._v("Date")]),e("v-switch",{attrs:{hint:t.options.required?"All constraints will be checked":"Response validation will be disabled","persistent-hint":"",label:"Required"},on:{change:function(e){return t.$emit("update:options",t.options)}},model:{value:t.options.required,callback:function(e){t.$set(t.options,"required",e)},expression:"options.required"}}),e("v-divider"),e("v-textarea",{attrs:{label:"Question"},model:{value:t.options.title,callback:function(e){t.$set(t.options,"title",e)},expression:"options.title"}}),e("v-textarea",{attrs:{label:"Note"},model:{value:t.options.note,callback:function(e){t.$set(t.options,"note",e)},expression:"options.note"}})],1)],1)],1),e("v-tab-item",{key:"statistic",attrs:{ripple:""}},[e("v-card",{attrs:{flat:""}},[e("v-container",[e("v-switch",{attrs:{hint:t.options.showResponsesStat?"Show statistical distribution in production mode":"","persistent-hint":"",label:"Statistical hints"},on:{change:function(e){return t.$emit("update:options",t.options)}},model:{value:t.options.showResponsesStat,callback:function(e){t.$set(t.options,"showResponsesStat",e)},expression:"options.showResponsesStat"}}),e("v-divider"),e("echart",{attrs:{options:t.statOptions,height:t.height}})],1)],1)],1)],1):e("div",{staticClass:"text-xs-center"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"secondary ligten-2"}})],1)],1)},s=[],n=i("c555"),o=i("4e14"),r=i("6633"),l=i("1069"),h={mixins:[n["a"],o["a"],r["a"]],props:["config","options","stat"],methods:{calculateStat(){let t=this.stat.responses.filter(t=>t),e=[];t.forEach(t=>{e=e.concat(t)});let i=Object(l["a"])(e);if(!i)return{};let a={color:[this.$vuetify.theme.themes.light.primary],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value"},series:[{name:"",type:"bar",itemStyle:{opacity:.5},data:[]}]};return a.xAxis.data=i.map(t=>t.title),a.series[0].data=i.map(t=>t.value),this.height=250,a},changeIcon(){this.options.icon=this.icon.title,this.onChange()},generateScale(){if(this.max!=this.options.scale.length){let t=[];for(let e=0;e<this.max;e++)t.push({value:e+1});this.options.scale=t,this.onChange()}},onChange(){this.$emit("update:options",this.options)}},data:()=>({active:null,height:null,date:null,l:null,qq:1}),mounted(){this.l="uk"==this.$i18n.locale?"ua-uk":null,this.$emit("init")}},c=h,d=i("2877"),p=i("fef8"),u=i.n(p),m=i("b0af"),f=i("a523"),v=i("ce7e"),g=i("490a"),b=i("b73d"),w=i("71a3"),y=i("c671"),S=i("fe57"),O=i("a844"),x=Object(d["a"])(c,a,s,!1,null,null,null);e["default"]=x.exports;u()(x,{VCard:m["a"],VContainer:f["a"],VDivider:v["a"],VProgressCircular:g["a"],VSwitch:b["a"],VTab:w["a"],VTabItem:y["a"],VTabs:S["a"],VTextarea:O["a"]})},6633:function(t,e,i){"use strict";var a=i("3c5a");e["a"]={components:{echart:a["default"]},methods:{truncate(t,e){return e=e||50,t.toString().length<=e?t.toString():t.toString().length-e>10?t.toString().substring(0,e)+"...":t.toString()},redrawStat(){if(this.statOptions){let t=JSON.parse(JSON.stringify(this.statOptions));this.statOptions=null,setTimeout(()=>{this.statOptions=t},1e3)}}},watch:{active(t){t>0&&(this.emit("form-get-stat"),setTimeout(()=>{this.redrawStat()},10))},stat(){this.statOptions=this.calculateStat(),this.statOptions.redraw=!1}},data:()=>({statOptions:null})}},"7d82":function(t,e,i){},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var a=i("e8f2"),s=i("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:a}){let n;const{attrs:o}=i;return o&&(i.attrs={},n=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(s["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),a)}})},c671:function(t,e,i){"use strict";var a=i("1e6c");e["a"]=a["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=a["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})}}]);
//# sourceMappingURL=chunk-50082c7a.2ec6dd95.js.map