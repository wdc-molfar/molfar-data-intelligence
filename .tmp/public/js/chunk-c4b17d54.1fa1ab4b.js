(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4b17d54","chunk-f9d6da72"],{"3e31":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{class:e.editorClass,style:e.editorStyle})},s=[],i=n("c555"),a=n("4e14");let c;var r={name:"editor",mixins:[i["a"],a["a"]],props:{content:{type:String,default:"\n"},lang:{type:String,default:"javascript"},theme:{type:String,default:"tomorrow"},sync:{type:Boolean,default:!0},editorClass:{type:String,default:"editor"},editorStyle:{type:String,default:""}},data:function(){return{editor:null,session:null}},methods:{insert(e){c=c||this.editor.selection.getRange(),c&&this.session.replace(c,e)},setAnnotations(e){this.session.setAnnotations(e)},clearAnnotations(){this.session.clearAnnotations()}},watch:{content:function(e){const t=this;c=this.editor.selection.getRange(),t.sync&&e!==t.session.getValue()&&t.editor.setValue(e,1)},theme:function(e){const t=this;t.editor.setTheme("ace/theme/"+e)}},mounted(){const e=this;var t=e.lang,n=e.theme,o=e.editor=window.ace.edit(e.$el),s=e.session=o.getSession();o.$blockScrolling=1/0,s.setMode("ace/mode/"+t),o.setTheme("ace/theme/"+n),s.setValue(e.content,1),s.on("change",()=>{e.emit("editor-change-content",s.getValue(),e),e.$emit("change",s.getValue())}),o.selection.on("changeSelection",()=>{c=e.editor.selection.getRange().clone()}),this.$emit("mount",this)}},l=r,d=(n("7d38"),n("2877")),u=Object(d["a"])(l,o,s,!1,null,"e859eb34",null);t["default"]=u.exports},"7d38":function(e,t,n){"use strict";n("d67e")},c59e:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("v-container",{attrs:{fluid:""}},[t("v-layout",{attrs:{wrap:""}},[t("v-flex",{attrs:{xs12:""}},[t("editor",{staticStyle:{border:"1px solid #999",height:"28em !important"},attrs:{content:e.embeddedSource,lang:"css",sync:!0},on:{change:e.onUpdateSource}})],1)],1)],1)},s=[],i=n("3e31");var a={name:"options-editor",components:{editor:i["default"]},props:["config"],computed:{embeddedSource(){return this.config.options.style||"\n  widget-style {\n    \n  }\n"}},data:()=>({editor:null}),methods:{setEditor(e){this.editor=e},onUpdateSource(e){this.config.options.style=e}},created(){this.mode=this.config.options.style||"",this.clearWatch=this.$watch("mode",()=>{this.config.options.style=this.mode})},destroyed(){this.clearWatch()}},c=a,r=n("2877"),l=n("fef8"),d=n.n(l),u=n("a523"),h=n("0e8f"),f=n("a722"),g=Object(r["a"])(c,o,s,!1,null,null,null);t["default"]=g.exports;d()(g,{VContainer:u["a"],VFlex:h["a"],VLayout:f["a"]})},d67e:function(e,t,n){}}]);
//# sourceMappingURL=chunk-c4b17d54.1fa1ab4b.js.map