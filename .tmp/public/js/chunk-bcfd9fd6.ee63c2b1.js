(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bcfd9fd6","chunk-f9d6da72"],{"3e31":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{class:t.editorClass,style:t.editorStyle})},i=[],s=n("c555"),r=n("4e14");let a;var c={name:"editor",mixins:[s["a"],r["a"]],props:{content:{type:String,default:"\n"},lang:{type:String,default:"javascript"},theme:{type:String,default:"tomorrow"},sync:{type:Boolean,default:!0},editorClass:{type:String,default:"editor"},editorStyle:{type:String,default:""}},data:function(){return{editor:null,session:null}},methods:{insert(t){a=a||this.editor.selection.getRange(),a&&this.session.replace(a,t)},setAnnotations(t){this.session.setAnnotations(t)},clearAnnotations(){this.session.clearAnnotations()}},watch:{content:function(t){const e=this;a=this.editor.selection.getRange(),e.sync&&t!==e.session.getValue()&&e.editor.setValue(t,1)},theme:function(t){const e=this;e.editor.setTheme("ace/theme/"+t)}},mounted(){const t=this;var e=t.lang,n=t.theme,o=t.editor=window.ace.edit(t.$el),i=t.session=o.getSession();o.$blockScrolling=1/0,i.setMode("ace/mode/"+e),o.setTheme("ace/theme/"+n),i.setValue(t.content,1),i.on("change",()=>{t.emit("editor-change-content",i.getValue(),t),t.$emit("change",i.getValue())}),o.selection.on("changeSelection",()=>{a=t.editor.selection.getRange().clone()}),this.$emit("mount",this)}},d=c,l=(n("7d38"),n("2877")),u=Object(l["a"])(d,o,i,!1,null,"e859eb34",null);e["default"]=u.exports},"7d38":function(t,e,n){"use strict";n("d67e")},a523:function(t,e,n){"use strict";n("20f6"),n("4b85");var o=n("e8f2"),i=n("d9f7");e["a"]=Object(o["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:o}){let s;const{attrs:r}=n;return r&&(n.attrs={},s=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(i["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),o)}})},d67e:function(t,e,n){},df74:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("editor",{staticStyle:{border:"1px solid #999",height:"28em !important"},attrs:{content:t.embeddedSource,lang:"json",sync:!0},on:{change:t.onUpdateSource}})],1)],1)],1)},i=[],s=n("3e31"),r=n("2ef0"),a={name:"options-editor",components:{editor:s["default"]},props:["config"],computed:{embeddedSource(){return Object(r["isString"])(this.config.options)?this.config.options:JSON.stringify(this.config.options,null,"\t")}},data:()=>({editor:null,esource:null}),methods:{setEditor(t){this.editor=t},onUpdateSource(t){this.esource=t},onUpdateScript(t){this.config.data.script=t}},created(){this.esource=Object(r["isString"])(this.config.options)?this.config.options:JSON.stringify(this.config.options,null,"\t")},beforeDestroy(){try{this.config.options=JSON.parse(this.esource)}catch(t){this.config.options=this.esource,this.warning({type:"error",title:"Data error",text:t.toString()})}},destroyed(){}},c=a,d=n("2877"),l=n("fef8"),u=n.n(l),f=n("a523"),h=n("0e8f"),p=n("a722"),g=Object(d["a"])(c,o,i,!1,null,null,null);e["default"]=g.exports;u()(g,{VContainer:f["a"],VFlex:h["a"],VLayout:p["a"]})}}]);
//# sourceMappingURL=chunk-bcfd9fd6.ee63c2b1.js.map