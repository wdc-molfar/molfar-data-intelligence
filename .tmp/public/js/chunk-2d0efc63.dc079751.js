(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0efc63"],{"9a16":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return t.options?e("annotator",{ref:"annotator",attrs:{id:t.config.id,data:t.options.document,options:t.getOptions},on:{select:t.onSelectNodes}}):t._e()},i=[],s=n("c4a7"),l=n("99a8"),a=n("c555"),c=n("4e14"),r=n("2ef0"),p=n("029e"),d=function(){var t=this,e=t._self._c;return e("config-dialog",{attrs:{options:t.props,submit:t.submit}})},h=[],u=n("a410"),g={name:"NlpAnnotatorConfig",components:{"config-dialog":u["a"]},props:["options","submit"],computed:{props(){return{icon:this.options.config.icon,title:`html-widget: ${this.options.config.id} ${this.options.config.name}`,config:this.options.config,editorTree:this.editorTree}}},data(){return{editorTree:[{name:"Configuration",children:[{name:"Widget",editor:()=>n.e("chunk-2d226cca").then(n.bind(null,"e9cc"))},{name:"Style",editor:()=>n.e("chunk-55e9e634").then(n.bind(null,"c59e"))},{name:"Options",editor:()=>Promise.all([n.e("chunk-3d2e32d9"),n.e("chunk-0ad95c16")]).then(n.bind(null,"41f1"))}]}]}}},m=g,f=n("2877"),v=Object(f["a"])(m,d,h,!1,null,null,null),b=v.exports;let y=(t,e)=>{r["templateSettings"].interpolate=/{{([\s\S]+?)}}/g;let n=Object(r["template"])(t)(e);return r["templateSettings"].interpolate=/<%=([\s\S]+?)%>/g,n};var O={name:"nlp-annotator-widget",components:{annotator:s["a"]},icon:"mdi-format-color-highlight",mixins:[a["a"],c["a"]],props:["config"],data:()=>({options:null}),methods:{getDocument(){return this.options.document},getDecoration(){return this.options.decoration},getAvailableAnnotation(){return this.options.availableAnnotation},getSelection(){return this.options.selection},getEvents(){return this.options.events},getUtils(){return l},getData(){return this.options},onSelectNodes(t){if(this.options.events){let e=this.options.events.select||"select-nodes";this.emit(e,t,this)}},createAnnotation(t){return e=>{if(0==e.length)return;let n=l["getParent"](e[0],this.options.document),o=Object(r["findIndex"])(n.childs,t=>t.id==e[0].id),i=Object(r["findIndex"])(n.childs,t=>t.id==e[e.length-1].id),s=n.childs.splice(o,i-o+1),a={type:t,childs:s,concept:"SEMANTIC",id:`${this.config.id}-${Object(p["v4"])()}`,value:s.map(t=>t.value).join("")};if(s[0].pos&&(a.pos=[s[0].pos[0],s[s.length-1].pos[1]]),n.childs.splice(o,0,a),this.$nextTick(()=>{this.$refs.annotator.select(a)}),this.options.events){let t=this.options.events.create||"create-annotation";this.emit(t,a,this)}if(this.options.events){let t=this.options.events.change||"change-document";this.emit(t,this.options.document,this)}}},nestingTest(t,e){let n=this.options.availableAnnotation[e];if(!n)return!0;n.nestedIn=n.nestedIn||[];let o=l["getParent"](t,this.options.document);return o&&n.nestedIn.includes(o.type)||0==n.nestedIn.length},_remove(t){if(0==t.length||t.length>1)return;let e=l["getParent"](t[0],this.options.document);if(e){let n=Object(r["findIndex"])(e.childs,e=>e.id==t[0].id);e.childs.splice(n,1),e.childs.splice(n,0,t[0].childs),e.childs=Object(r["flattenDeep"])(e.childs),e.childs.forEach(t=>{this.nestingTest(t,t.type)||this._remove([t])})}if(this.options.events){let n=this.options.events.remove||"remove-annotation";this.emit(n,t[0],this,e)}if(this.options.events){let t=this.options.events.change||"change-document";this.emit(t,this.options.document,this)}},removeAnnotation(t){this._remove(t),this.$refs.annotator.select(t[0].childs),this.onUpdate({data:this.options})},getOptions(){if(!this.options)return{};let t=this;return{availableSelectionMode(){return["singly","bundly"]},menu(e){if(e&&Object(r["keys"])(t.options.selection).includes(e.type))return t.options.availableAnnotation[e.type]?[{title:e.type,action:t.removeAnnotation,icon:"mdi-pen-off",color:"#ff9999"}]:Object(r["keys"])(t.options.availableAnnotation).filter(n=>t.nestingTest(e,n)).map(e=>({icon:"mdi-pen",title:e,action:t.createAnnotation(e),color:t.options.decoration.color[e]||"#aaaaaa"}))},selectable(e){return e&&t.options&&t.options.selection&&t.options.selection[e.type]?Object(r["isArray"])(t.options.selection[e.type])?t.options.selection[e.type]:t.options.selection[e.type].split(",").map(t=>t.trim()):null},classes(e){return e&&t.options&&t.options.decoration.classes?y(t.options.decoration.classes[e.type],{node:e}):null},color(e){return e&&t.options&&t.options.decoration.color?y(t.options.decoration.color[e.type],{node:e}):null},label(e){return e&&t.options&&t.options.decoration.label?y(t.options.decoration.label[e.type],{node:e}):null},tooltip(e){return t.options&&e&&t.config&&t.options.decoration.tooltip&&t.options.decoration.tooltip[e.type]?y(t.options.decoration.tooltip[e.type],{node:e}):null}}},onUpdate({data:t},e){e?(e.override&&Object(r["set"])(this,e.override,t),e.extend&&Object(r["set"])(this,e.extend,Object(r["extend"])(Object(r["get"])(this,e.extend),t))):this.options=t;let n=this.options;this.options=null,this.$nextTick(()=>{if(this.options=n,this.options.events){let t=this.options.events.change||"change-document";this.emit(t,this.options.document,this)}})},onReconfigure(t){return this.$dialogManager.showAndWait(b,{width:"90%"},{config:t})}},created(){},mounted(){this.$emit("init")}},j=O,A=Object(f["a"])(j,o,i,!1,null,null,null);e["default"]=A.exports}}]);
//# sourceMappingURL=chunk-2d0efc63.dc079751.js.map