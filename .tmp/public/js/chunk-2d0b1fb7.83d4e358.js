(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1fb7"],{"21bd":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[e.config.options.widget.chips?e._e():t("div",[e.source?t("v-autocomplete",{staticClass:"body-1",attrs:{items:e.items,filter:e.filter,color:"primary",outlined:"",dense:"",label:e.config.options.widget.label,multiple:e.config.options.widget.multiple,clearable:e.config.options.widget.multiple,"item-text":"title","item-value":e=>e,"search-input":e.search},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}}):e._e()],1),e.config.options.widget.chips?t("div",[e.source?t("v-autocomplete",{staticClass:"body-1",attrs:{items:e.items,filter:e.filter,color:"primary",outlined:"",dense:"",label:e.config.options.widget.label,multiple:e.config.options.widget.multiple,clearable:e.config.options.widget.multiple,"item-text":"title","item-value":e=>e,"search-input":e.search,chips:""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},scopedSlots:e._u([{key:"selection",fn:function(i){return[t("v-chip",e._b({staticStyle:{margin:"0.2em"},attrs:{"input-value":i.item.title,close:"",outlined:"",label:"",color:"primary--text"},on:{"click:close":function(t){return e.remove(i.item)}}},"v-chip",i.attrs,!1),[e._v("\n          "+e._s(i.item.title)+"\n        ")])]}}],null,!1,2096744593),model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}}):e._e()],1):e._e()])},o=[],s=i("c555"),c=i("4e14"),l=function(){var e=this,t=e._self._c;return t("config-dialog",{attrs:{options:e.props,submit:e.submit}})},r=[],a=i("a410"),u={name:"DataKeywordsConfig",props:["options","submit"],components:{"config-dialog":a["a"]},computed:{props(){return{icon:this.options.config.icon,title:`data-selector-widget: ${this.options.config.id} ${this.options.config.name}`,config:this.options.config,editorTree:this.editorTree}}},data(){return{editorTree:[{name:"Configuration",children:[{name:"Widget",editor:()=>i.e("chunk-2d226cca").then(i.bind(null,"e9cc"))},{name:"Style",editor:()=>i.e("chunk-55e9e634").then(i.bind(null,"c59e"))},{name:"Options",editor:()=>i.e("chunk-2d22dba7").then(i.bind(null,"f975"))},{name:"Data",editor:()=>i.e("chunk-b7c95ba4").then(i.bind(null,"1850"))}]}]}}},d=u,p=i("2877"),h=Object(p["a"])(d,l,r,!1,null,null,null),f=h.exports,m=i("2ef0"),g={props:["config"],mixins:[s["a"],c["a"]],computed:{items(){if(this.source)return this.source}},methods:{onValidate(e,t){if(Object(m["isString"])(e))try{return e=JSON.parse(e),e}catch(i){return{error:i.toString()}}return e.message?{error:"\nDATA PROCESSING SCRIPT \n"+e.message}:e},onUpdate({data:e}){this.source=e,this.config.options.widget.anywaySelectFirst?this.$nextTick(()=>{this.selection=this.config.options.widget.multiple?[this.items[0]]:this.items[0]}):this.$nextTick(()=>{this.selection=this.config.options.widget.multiple?[]:null})},onReconfigure(e){return this.$dialogManager.showAndWait(f,{width:"90%"},{config:e})},onClear(){this.onUpdate({data:[]})},filter(e,t){return Object(m["includes"])(e.title.toLowerCase(),t.toLowerCase())},text(e){return e.title},remove(e){if(1==this.selection.length)return;const t=this.selection.indexOf(e);t>=0&&this.selection.splice(t,1)}},watch:{selection(e){if(!this.items)return;if(this.search=null,!e)return;let t={selection:Object(m["sortBy"])(this.items.map(t=>(t.index=Object(m["findIndex"])(Object(m["isArray"])(e)?e:[e],e=>e==t),{entity:t,selected:Object(m["findIndex"])(Object(m["isArray"])(e)?e:[e],e=>e==t)>=0})),e=>e.entity.index)},i=this.config.options.widget.event||"data-select";this.emit(i,this,t)}},data:()=>({selection:[],source:null,search:null}),mounted(){this.$emit("init")}},b=g,w=i("fef8"),v=i.n(w),y=i("c6a6"),x=i("cc20"),k=Object(p["a"])(b,n,o,!1,null,null,null);t["default"]=k.exports;v()(k,{VAutocomplete:y["a"],VChip:x["a"]})}}]);
//# sourceMappingURL=chunk-2d0b1fb7.83d4e358.js.map