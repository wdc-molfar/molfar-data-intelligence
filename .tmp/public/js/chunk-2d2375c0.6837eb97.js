(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2375c0"],{fb7e:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("v-row",{staticClass:"pa-2 mx-0"},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"primary--text caption pr-5"},[t._v(t._s(t.title))]),e("div",t._l(t.items,(function(i,s){return e("a",{key:s,on:{click:function(e){return t.select(s)}}},[e("span",{class:t.decoration(s)},[t._v(t._s(i))])])})),0)]),e("v-spacer"),e("div",[e("v-btn",{staticClass:"ma-3",attrs:{text:"",outlined:"",color:"primary","x-small":""},on:{click:function(e){return t.control()}}},[e("span",{staticClass:"caption"},[t._v("\n      "+t._s(t.timer?"stop":"play")+"\n      "),e("v-icon",{staticClass:"primary--text",attrs:{small:""}},[t._v(t._s(t.timer?"mdi-stop":"mdi-play"))])],1)])],1)],1)},n=[],o=i("c555"),a=i("4e14"),r=function(){var t=this,e=t._self._c;return e("config-dialog",{attrs:{options:t.props,submit:t.submit}})},l=[],c=i("a410"),h={name:"DataLegendConfig",props:["options","submit"],components:{"config-dialog":c["a"]},computed:{props(){return{icon:this.options.config.icon,title:`data-legend-widget: ${this.options.config.id} ${this.options.config.name}`,config:this.options.config,editorTree:this.editorTree}}},data(){return{editorTree:[{name:"Configuration",children:[{name:"Widget",editor:()=>i.e("chunk-2d226cca").then(i.bind(null,"e9cc"))},{name:"Data",editor:()=>i.e("chunk-b7c95ba4").then(i.bind(null,"1850"))}]}]}}},p=h,u=i("2877"),d=Object(u["a"])(p,r,l,!1,null,null,null),m=d.exports,f=i("2ef0"),g={props:["config"],mixins:[o["a"],a["a"]],computed:{items(){if(this.source)return this.source}},methods:{onValidate(t,e){if(Object(f["isString"])(t))try{return t=JSON.parse(t),t}catch(i){return{error:i.toString()}}return t},onUpdate({data:t}){this.stop(),this.title=t.title||"",this.source=t.items,this.event=t.event,this.$nextTick(()=>{this.selection=0})},onReconfigure(t){return this.$dialogManager.showAndWait(m,{width:"90%"},{config:t})},onClear(){this.onUpdate({data:[]})},decoration(t){return" body-1 px-1  "+(this.selection==t?"primary--text font-weight-bold":"secondary--text font-weight-light")},select(t){this.stop(),this.selection=t},control(){this.timer?this.stop():this.start()},stop(){this.timer&&(clearInterval(this.timer),this.timer=null)},start(t){this.stop(),t=t||2e3,this.timer=setInterval(()=>{this.selection=this.selection<this.items.length-1?this.selection+1:0},t)}},watch:{selection(t){Object(f["isNull"])(t)||Object(f["isNull"])(this.event)||this.emit(this.event,this,this.items[t])}},data:()=>({selection:null,source:null,timer:null,event:null,title:""}),mounted(){this.on({event:"page-stop",callback:()=>{this.stop(),console.log("page-stop")},rule:()=>!0}),this.on({event:"start-timer",callback:(t,e)=>{this.start()},rule:()=>!0}),this.on({event:"stop-timer",callback:(t,e)=>{this.stop()},rule:()=>!0}),this.$emit("init")}},v=g,b=i("fef8"),w=i.n(b),x=i("8336"),_=i("132d"),k=i("0fd9"),y=i("2fa4"),C=Object(u["a"])(v,s,n,!1,null,null,null);e["default"]=C.exports;w()(C,{VBtn:x["a"],VIcon:_["a"],VRow:k["a"],VSpacer:y["a"]})}}]);
//# sourceMappingURL=chunk-2d2375c0.6837eb97.js.map