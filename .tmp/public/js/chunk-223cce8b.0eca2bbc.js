(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-223cce8b","chunk-c2702fe6"],{"33eb":function(t,e,i){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",[e("v-layout",{attrs:{column:"","justify-center":""}},[e("h3",{staticClass:"primary--text body-2 pt-2 pb-0",staticStyle:{"text-align":"center"}},[t._v("\n      "+t._s(t.config.title)+"\n    ")]),t.options?e("p",{staticClass:"caption font-italic font-weight-light ma-0 pa-0",staticStyle:{"text-align":"center"}},[t._v("\n      "+t._s(t.config.note)+"\n    ")]):t._e(),t.options?e("echart",{attrs:{options:t.chartOptions,height:t.options.widget.height},on:{"chart-event":t.chartEventHandler}}):t._e()],1)],1)},s=[],o=i("c555"),a=i("4e14"),r=i("3c5a"),h=i("2ef0"),c=function(){var t=this,e=t._self._c;return e("config-dialog",{attrs:{options:t.props,submit:t.submit}})},l=[],d=i("a410"),u={name:"chartConfigDialog",props:["options","submit"],components:{"config-dialog":d["a"]},computed:{props(){return{icon:this.options.config.icon,title:`echart-widget: ${this.options.config.id} ${this.options.config.name}`,config:this.options.config,editorTree:this.editorTree}}},data(){return{editorTree:[{name:"Configuration",children:[{name:"Widget",editor:()=>i.e("chunk-2d226cca").then(i.bind(null,"e9cc"))},{name:"Style",editor:()=>i.e("chunk-55e9e634").then(i.bind(null,"c59e"))},{name:"Data",editor:()=>i.e("chunk-b7c95ba4").then(i.bind(null,"1850"))},{name:"Decoration",editor:()=>Promise.all([i.e("chunk-09e74d02"),i.e("chunk-2d209530")]).then(i.bind(null,"a924"))},{name:"Select-data Behavior",editor:()=>i.e("chunk-53103cfa").then(i.bind(null,"73df"))}]}]}}},p=u,f=i("2877"),g=Object(f["a"])(p,c,l,!1,null,null,null),m=g.exports,w={name:"echart-widget",icon:"mdi-chart-bar",mixins:[o["a"],a["a"]],components:{echart:r["default"]},methods:{chartEventHandler(t){this.emit("chart-event",this,t)},onValidate(t,e){if(Object(h["isString"])(t))try{return t=JSON.parse(t),t}catch(i){return{error:i.toString()}}return t.message?{error:"\nDATA PROCESSING SCRIPT\n"+t.message}:t},onReconfigure(t){return this.$dialogManager.showAndWait(m,{width:"90%"},{config:t})},onSlideStart(t){t._updateConfig()}},props:["config"],mounted(){this.$emit("init")}},b=w,v=(i("c304"),i("fef8")),z=i.n(v),_=i("a722"),k=Object(f["a"])(b,n,s,!1,null,"60f5990a",null);e["a"]=k.exports;z()(k,{VLayout:_["a"]})},"36ae":function(t,e,i){"use strict";i("7d82")},"3c5a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"echart",style:t.style})},s=[],o=i("313e"),a=i("4e14"),r={name:"echart",mixins:[a["a"]],computed:{style(){return{height:(this.height||250)+"px"}}},methods:{initChart(t){this.chart=o["init"](this.$el,null,{height:this.height,width:"auto"}),this.resizeHandler=()=>{this.width=this.$el.clientWidth,this.chart.resize()},window.attachEvent?window.attachEvent("onresize",this.resizeHandler):window.addEventListener("resize",this.resizeHandler),t&&setTimeout(()=>{this.chart.setOption(t),this.chart.on("click",t=>{this.$emit("chart-event",t)})},10),this.on({event:"slide-start",callback:()=>{setTimeout(()=>{this.chart&&this.options&&this.chart.setOption(this.options,!0),this.chart.resize()},10)},rule:()=>!0}),this.on({event:"update-dialog-view",callback:()=>{setTimeout(()=>{this.chart&&this.options&&this.chart.setOption(this.options,!0),this.chart.resize()},10)},rule:()=>!0})}},props:["options","height"],watch:{options:{handler:function(t){t&&this.chart&&setTimeout(()=>{this.chart.setOption(t,!0),this.chart.resize()},10)},deep:!0},height(t){setTimeout(()=>{this.chart.resize({height:t},10)})}},mounted(){this.initChart(this.options)},beforeDestroy(){window.attachEvent?window.detachEvent("onresize",this.resizeHandler):window.removeEventListener("resize",this.resizeHandler,!1),this.off()},data:()=>({chart:null,resizeHandler:null})},h=r,c=(i("36ae"),i("2877")),l=Object(c["a"])(h,n,s,!1,null,"7d96c1a5",null);e["default"]=l.exports},"7d82":function(t,e,i){},b32d:function(t,e,i){},c304:function(t,e,i){"use strict";i("b32d")},e057:function(t,e,i){"use strict";i.r(e);var n,s,o=i("33eb"),a=(i("2ef0"),{extends:o["a"],name:"chart-low-level-widget",icon:"mdi-graphql",computed:{chartOptions(){if(this.options)return this.options}},methods:{onUpdate({data:t,options:e}){t&&(this.options=_.extend({widget:e.widget},t))}},data:()=>({options:null})}),r=a,h=i("2877"),c=Object(h["a"])(r,n,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-223cce8b.0eca2bbc.js.map