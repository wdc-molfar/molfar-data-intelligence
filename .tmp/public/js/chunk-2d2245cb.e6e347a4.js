(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2245cb"],{e08b:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t._self._c;return t.options?o("annotator",{ref:"annotator",attrs:{id:t.config.id,data:t.options.document,options:t.getOptions}}):t._e()},i=[],s=n("c4a7"),r=n("99a8"),a=n("c555"),l=n("4e14"),c=n("2ef0"),p=function(){var t=this,o=t._self._c;return o("config-dialog",{attrs:{options:t.props,submit:t.submit}})},d=[],u=n("a410"),h={name:"HtmlConfig",components:{"config-dialog":u["a"]},props:["options","submit"],computed:{props(){return{icon:this.options.config.icon,title:`html-widget: ${this.options.config.id} ${this.options.config.name}`,config:this.options.config,editorTree:this.editorTree}}},data(){return{editorTree:[{name:"Configuration",children:[{name:"Widget",editor:()=>n.e("chunk-2d226cca").then(n.bind(null,"e9cc"))},{name:"Style",editor:()=>n.e("chunk-55e9e634").then(n.bind(null,"c59e"))},{name:"Options",editor:()=>Promise.all([n.e("chunk-3d2e32d9"),n.e("chunk-0ad95c16")]).then(n.bind(null,"41f1"))}]}]}}},g=h,m=n("2877"),f=Object(m["a"])(g,p,d,!1,null,null,null),b=f.exports;let v=(t,o)=>{c["templateSettings"].interpolate=/{{([\s\S]+?)}}/g;let n=Object(c["template"])(t)(o);return c["templateSettings"].interpolate=/<%=([\s\S]+?)%>/g,n};var w={name:"nlp-highlight-widget",components:{annotator:s["a"]},icon:"mdi-format-color-highlight",mixins:[a["a"],l["a"]],props:["config"],data:()=>({options:null}),methods:{getDocument(){return this.options.document},getDecoration(){return this.options.decoration},getAvailableAnnotation(){return this.options.availableAnnotation},getSelection(){return this.options.selection},getEvents(){return this.options.events},getUtils(){return r},getData(){return this.options},getOptions(){if(!this.options)return{};let t=this;return{classes(o){return t.options&&t.options.decoration.classes?t.options.decoration.classes[o.type]:null},color(o){return t.options&&t.options.decoration.color?t.options.decoration.color[o.type]:null},label(o){return t.options&&t.options.decoration.label?v(t.options.decoration.label[o.type],{node:o}):null},tooltip(o){return t.options&&t.options&&t.options.decoration.tooltip&&t.options.decoration.tooltip[o.type]?v(t.options.decoration.tooltip[o.type],{node:o}):null}}},onUpdate({data:t},o){o?(o.override&&Object(c["set"])(this,o.override,t),o.extend&&Object(c["set"])(this,o.extend,Object(c["extend"])(Object(c["get"])(this,o.extend),t))):this.options=t;let n=this.options;this.options=null,this.$nextTick(()=>{if(this.options=n,this.options.events){let t=this.options.events.change||"change-document";this.emit(t,this.options.document,this)}})},onReconfigure(t){return this.$dialogManager.showAndWait(b,{width:"90%"},{config:t})}},created(){},mounted(){this.$emit("init")}},O=w,k=Object(m["a"])(O,e,i,!1,null,null,null);o["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d2245cb.e6e347a4.js.map