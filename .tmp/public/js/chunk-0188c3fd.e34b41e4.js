(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0188c3fd","chunk-c2702fe6"],{"0b1e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[t.options&&t.answer?e("v-card",{attrs:{flat:"",color:"transparent"}},[e("v-container",{attrs:{"pa-2":""}},[t.isValid?e("q-view",{attrs:{id:t.config.id,title:t.options.title,note:t.options.note,validation:t.isValid}}):t._e(),e("v-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("v-tab",{key:"response",attrs:{ripple:""}},[t._v(t._s(t.translate("Your_Response")))]),t.options.showResponsesStat?e("v-tab",{key:"statistic",attrs:{ripple:""}},[t._v(t._s(t.translate("Report")))]):t._e(),e("v-tab-item",{key:"response",attrs:{ripple:""}},[e("v-row",{staticClass:"mx-0 px-3 d-flex align-end"},[e("v-rating",{attrs:{length:t.options.scale.length,"empty-icon":`mdi-${t.options.icon}-outline`,"full-icon":"mdi-"+t.options.icon,color:"accent","background-color":"secondary lighten-2"},model:{value:t.answer.data[0],callback:function(e){t.$set(t.answer.data,0,e)},expression:"answer.data[0]"}}),t.answer.data[0]&&(t.options.showValue||t.options.showTitle&&!t.options.scale[t.answer.data[0]-1].title)?e("span",{staticClass:"accent--text caption"},[t._v("\n              "+t._s(t.answer.data[0])+" \n            ")]):t._e(),t.answer.data[0]&&t.options.showTitle&&t.options.scale[t.answer.data[0]-1].title?e("span",{staticClass:"accent--text caption"},[t._v("\n              ( "+t._s(t.options.scale[t.answer.data[0]-1].title)+" )\n            ")]):t._e()],1)],1),t.options.showResponsesStat?e("v-tab-item",{key:"statistic",attrs:{ripple:""}},[e("echart",{attrs:{options:t.statOptions,height:t.height}})],1):t._e()],1)],1)],1):e("div",{staticClass:"text-xs-center"})],1)},s=[],n=i("2ef0"),r=i("c555"),o=i("4e14"),l=i("6633"),h=i("852a"),c=i("5927"),d={mixins:[r["a"],o["a"],l["a"],h["a"]],components:{"q-view":c["a"]},props:["config","options","answer","stat"],computed:{isValid(){return this.options?this.answer?!this.options.required||0!=this.answer.data.length||this.translate("Validation_Error"):"No response data":"Not configured"}},methods:{calculateStat(){let t=this.stat.responses.filter(t=>t),e=[];t.forEach(t=>{e=e.concat(t)});let i=this.options.scale.map(t=>{let i=Object(n["countBy"])(e)[t.value];return{title:`${t.value} ${t.title?" ("+t.title+")":""}`,value:(i||0)/(0==e.length?1:e.length)}}),a={color:[this.$vuetify.theme.themes.light.primary],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",min:0,max:1},yAxis:{type:"category",data:[]},series:[{name:"",type:"bar",data:[],itemStyle:{opacity:.5}}]};return a.yAxis.data=i.map(t=>this.truncate(t.title)).reverse(),a.series[0].data=i.map(t=>t.value).reverse(),this.height=this.options.nominals?36*this.options.nominals.length+50:null,a}},watch:{"answer.data":{handler(t,e){e&&(this.answer&&this.answer.valid!=this.isValid&&(this.answer.valid=this.isValid),this.$emit("update:answer"))},deep:!0}},data:()=>({active:null,height:null,i18n:{en:{Your_Response:"Your Response",Report:"Report",Validation_Error:"No response for this question but it is required.",Answer_not_configured:"Structure of answer not configured",No_data_available:"No data available",Alt_label:'Type your response and press "Enter"'},uk:{Your_Response:"Ваша відповідь",Report:"Звіт",Validation_Error:"Відсутня відповідь на обов'язкове запитання.",Answer_not_configured:"Структура відповіді не визначена",No_data_available:"Дані відсутні",Alt_label:'Надрукуйте Вашу відповідь та натисніть "Enter"'}}}),mounted(){this.$emit("init")}},u=d,p=i("2877"),v=i("fef8"),f=i.n(v),g=i("b0af"),m=i("a523"),w=i("1d4d"),y=i("0fd9"),b=i("71a3"),_=i("c671"),x=i("fe57"),S=Object(p["a"])(u,a,s,!1,null,null,null);e["default"]=S.exports;f()(S,{VCard:g["a"],VContainer:m["a"],VRating:w["a"],VRow:y["a"],VTab:b["a"],VTabItem:_["a"],VTabs:x["a"]})},"1d4d":function(t,e,i){"use strict";i("696f");var a=i("9d26"),s=i("a9ad"),n=i("16b7"),r=i("af2b"),o=i("5311"),l=i("7560"),h=i("80d2"),c=i("58df");e["a"]=Object(c["a"])(s["a"],n["a"],o["a"],r["a"],l["a"]).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps(){const{dark:t,large:e,light:i,medium:a,small:s,size:n,xLarge:r,xSmall:o}=this.$props;return{dark:t,large:e,light:i,medium:a,size:n,small:s,xLarge:r,xSmall:o}},isHovering(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue(t){t!==this.value&&this.$emit("input",t)},value(t){this.internalValue=t}},methods:{createClickFn(t){return e=>{if(this.readonly)return;const i=this.genHoverIndex(e,t);this.clearable&&this.internalValue===i?this.internalValue=0:this.internalValue=i}},createProps(t){const e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex(t,e){let i=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(i=!i),e+(i?.5:1)},getIconName(t){const e=this.isHovering?t.isHovered:t.isFilled,i=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:i?this.halfIcon:this.emptyIcon},getColor(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent(t){if(this.halfIncrements){const e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter(t,e){this.runDelay("open",()=>{this.hoverIndex=this.genHoverIndex(t,e)})},onMouseLeave(){this.runDelay("close",()=>this.hoverIndex=-1)},genItem(t){const e=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);const i={click:e.click};return this.hover&&(i.mouseenter=e=>this.onMouseEnter(e,t),i.mouseleave=this.onMouseLeave,this.halfIncrements&&(i.mousemove=e=>this.onMouseEnter(e,t))),this.$createElement(a["a"],this.setTextColor(this.getColor(e),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,t+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:i}),[this.getIconName(e)])}},render(t){const e=Object(h["j"])(Number(this.length)).map(t=>this.genItem(t));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},e)}})},"36ae":function(t,e,i){"use strict";i("7d82")},"3c5a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"echart",style:t.style})},s=[],n=i("313e"),r=i("4e14"),o={name:"echart",mixins:[r["a"]],computed:{style(){return{height:(this.height||250)+"px"}}},methods:{initChart(t){this.chart=n["init"](this.$el,null,{height:this.height,width:"auto"}),this.resizeHandler=()=>{this.width=this.$el.clientWidth,this.chart.resize()},window.attachEvent?window.attachEvent("onresize",this.resizeHandler):window.addEventListener("resize",this.resizeHandler),t&&setTimeout(()=>{this.chart.setOption(t),this.chart.on("click",t=>{this.$emit("chart-event",t)})},10),this.on({event:"slide-start",callback:()=>{setTimeout(()=>{this.chart&&this.options&&this.chart.setOption(this.options,!0),this.chart.resize()},10)},rule:()=>!0}),this.on({event:"update-dialog-view",callback:()=>{setTimeout(()=>{this.chart&&this.options&&this.chart.setOption(this.options,!0),this.chart.resize()},10)},rule:()=>!0})}},props:["options","height"],watch:{options:{handler:function(t){t&&this.chart&&setTimeout(()=>{this.chart.setOption(t,!0),this.chart.resize()},10)},deep:!0},height(t){setTimeout(()=>{this.chart.resize({height:t},10)})}},mounted(){this.initChart(this.options)},beforeDestroy(){window.attachEvent?window.detachEvent("onresize",this.resizeHandler):window.removeEventListener("resize",this.resizeHandler,!1),this.off()},data:()=>({chart:null,resizeHandler:null})},l=o,h=(i("36ae"),i("2877")),c=Object(h["a"])(l,a,s,!1,null,"7d96c1a5",null);e["default"]=c.exports},5927:function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[e("v-row",{staticClass:"mx-0 pa-5"},[e("v-col",[e("div",{class:"title font-weight-light "+(1!=t.validation?"warning--text":"primary--text"),staticStyle:{"line-height":"1.2em"}},[t._v(t._s(t.title)+"\n      ")]),e("p",{staticClass:"body-2 py-1 pl-5 pr-2 my-0 font-weight-light",staticStyle:{"line-height":"1.2em"}},[t._v(t._s(t.note))])])],1),e("v-divider"),1!=t.validation?e("v-row",{staticClass:"caption",attrs:{color:"warning"}},[e("v-spacer"),e("div",[e("span",{staticClass:"warning--text caption pa-2 font-weight-light font-italic"},[t._v(t._s(t.validation))])])],1):t._e()],1)},s=[],n=i("4e14"),r={props:["id","title","note","validation"],mixins:[n["a"]],watch:{validation(t){this.emit("layout-change-state",this.id,t)}},created(){this.emit("layout-change-state",this.id,this.validation)}},o=r,l=i("2877"),h=i("fef8"),c=i.n(h),d=i("62ad"),u=i("ce7e"),p=i("0fd9"),v=i("2fa4"),f=Object(l["a"])(o,a,s,!1,null,null,null);e["a"]=f.exports;c()(f,{VCol:d["a"],VDivider:u["a"],VRow:p["a"],VSpacer:v["a"]})},6633:function(t,e,i){"use strict";var a=i("3c5a");e["a"]={components:{echart:a["default"]},methods:{truncate(t,e){return e=e||50,t.toString().length<=e?t.toString():t.toString().length-e>10?t.toString().substring(0,e)+"...":t.toString()},redrawStat(){if(this.statOptions){let t=JSON.parse(JSON.stringify(this.statOptions));this.statOptions=null,setTimeout(()=>{this.statOptions=t},1e3)}}},watch:{active(t){t>0&&(this.emit("form-get-stat"),setTimeout(()=>{this.redrawStat()},10))},stat(){this.statOptions=this.calculateStat(),this.statOptions.redraw=!1}},data:()=>({statOptions:null})}},"696f":function(t,e,i){},"7d82":function(t,e,i){},"852a":function(t,e,i){"use strict";var a=i("2ef0");e["a"]={methods:{translate(t){return this.$t(`${this.id}_${t}`)},_initI18n(){if(!this.i18n)return;this.$i18n_id=this.$djvue.randomName();let t={en:Object(a["mapKeys"])(this.i18n.en,(t,e)=>`${this.id}_${e}`),uk:Object(a["mapKeys"])(this.i18n.uk,(t,e)=>`${this.id}_${e}`)};this.$i18n.mergeLocaleMessage("en",t.en),this.$i18n.mergeLocaleMessage("uk",t.uk)},_destroyI18n(){}},created(){this._initI18n()},beforeDestroy(){this._destroyI18n()}}},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var a=i("e8f2"),s=i("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:a}){let n;const{attrs:r}=i;return r&&(i.attrs={},n=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(s["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),a)}})},c671:function(t,e,i){"use strict";var a=i("1e6c");e["a"]=a["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=a["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})}}]);
//# sourceMappingURL=chunk-0188c3fd.e34b41e4.js.map