(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ad95c16","chunk-2d0c08be"],{"41f1":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{wrap:""}},[e("v-switch",{attrs:{label:"YAML notation"},model:{value:t.yamlNotation,callback:function(e){t.yamlNotation=e},expression:"yamlNotation"}}),e("v-flex",{directives:[{name:"show",rawName:"v-show",value:!t.yamlNotation,expression:"!yamlNotation"}],attrs:{xs12:""}},[e("editor",{ref:"jsonEditor",staticStyle:{border:"1px solid #999",height:"28em !important"},attrs:{content:t.JSON_Source,lang:"json",sync:!0},on:{change:t.onUpdateJSON}})],1),e("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.yamlNotation,expression:"yamlNotation"}],attrs:{xs12:""}},[e("editor",{ref:"yamlEditor",staticStyle:{border:"1px solid #999",height:"28em !important"},attrs:{content:t.YAML_Source,lang:"yaml",sync:!0},on:{change:t.onUpdateYAML}})],1)],1)],1)},i=[],n=o("3e31"),r=(o("2ef0"),o("e2c1")),s={name:"options-editor",components:{editor:n["default"]},props:["config"],data:()=>({editor:null,yamlNotation:!1,JSON_Source:"{}",YAML_Source:""}),watch:{yamlNotation(t){t?(this.YAML_Source=r["dump"](JSON.parse(this.JSON_Source)),this.$nextTick(()=>{this.$refs.yamlEditor.editor.gotoLine(0,0)})):(this.JSON_Source=JSON.stringify(r["load"](this.YAML_Source),null," "),this.$nextTick(()=>{this.$refs.jsonEditor.editor.gotoLine(0,0)}))}},methods:{onUpdateJSON(t){this.JSON_Source=t},onUpdateYAML(t){this.YAML_Source=t}},created(){this.JSON_Source=JSON.stringify(this.config.data.embedded,null," "),this.YAML_Source=r["dump"](this.config.data.embedded)},beforeDestroy(){this.yamlNotation?this.config.data.embedded=r["load"](this.YAML_Source):this.config.data.embedded=JSON.parse(this.JSON_Source)}},d=s,c=o("2877"),l=o("fef8"),u=o.n(l),f=o("a523"),h=o("0e8f"),p=o("a722"),m=o("b73d"),S=Object(c["a"])(d,a,i,!1,null,null,null);e["default"]=S.exports;u()(S,{VContainer:f["a"],VFlex:h["a"],VLayout:p["a"],VSwitch:m["a"]})},a523:function(t,e,o){"use strict";o("20f6"),o("4b85");var a=o("e8f2"),i=o("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:o,children:a}){let n;const{attrs:r}=o;return r&&(o.attrs={},n=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(o.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(o.domProps=o.domProps||{},o.domProps.id=e.id),t(e.tag,Object(i["a"])(o,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),a)}})}}]);
//# sourceMappingURL=chunk-0ad95c16.4c60364f.js.map