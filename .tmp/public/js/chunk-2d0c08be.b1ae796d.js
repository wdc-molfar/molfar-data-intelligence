(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c08be"],{"41f1":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{wrap:""}},[e("v-switch",{attrs:{label:"YAML notation"},model:{value:t.yamlNotation,callback:function(e){t.yamlNotation=e},expression:"yamlNotation"}}),e("v-flex",{directives:[{name:"show",rawName:"v-show",value:!t.yamlNotation,expression:"!yamlNotation"}],attrs:{xs12:""}},[e("editor",{ref:"jsonEditor",staticStyle:{border:"1px solid #999",height:"28em !important"},attrs:{content:t.JSON_Source,lang:"json",sync:!0},on:{change:t.onUpdateJSON}})],1),e("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.yamlNotation,expression:"yamlNotation"}],attrs:{xs12:""}},[e("editor",{ref:"yamlEditor",staticStyle:{border:"1px solid #999",height:"28em !important"},attrs:{content:t.YAML_Source,lang:"yaml",sync:!0},on:{change:t.onUpdateYAML}})],1)],1)],1)},i=[],n=o("3e31"),s=(o("2ef0"),o("e2c1")),r={name:"options-editor",components:{editor:n["default"]},props:["config"],data:()=>({editor:null,yamlNotation:!1,JSON_Source:"{}",YAML_Source:""}),watch:{yamlNotation(t){t?(this.YAML_Source=s["dump"](JSON.parse(this.JSON_Source)),this.$nextTick(()=>{this.$refs.yamlEditor.editor.gotoLine(0,0)})):(this.JSON_Source=JSON.stringify(s["load"](this.YAML_Source),null," "),this.$nextTick(()=>{this.$refs.jsonEditor.editor.gotoLine(0,0)}))}},methods:{onUpdateJSON(t){this.JSON_Source=t},onUpdateYAML(t){this.YAML_Source=t}},created(){this.JSON_Source=JSON.stringify(this.config.data.embedded,null," "),this.YAML_Source=s["dump"](this.config.data.embedded)},beforeDestroy(){this.yamlNotation?this.config.data.embedded=s["load"](this.YAML_Source):this.config.data.embedded=JSON.parse(this.JSON_Source)}},d=r,c=o("2877"),l=o("fef8"),u=o.n(l),h=o("a523"),m=o("0e8f"),S=o("a722"),f=o("b73d"),p=Object(c["a"])(d,a,i,!1,null,null,null);e["default"]=p.exports;u()(p,{VContainer:h["a"],VFlex:m["a"],VLayout:S["a"],VSwitch:f["a"]})}}]);
//# sourceMappingURL=chunk-2d0c08be.b1ae796d.js.map