(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209530"],{a924:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("v-layout",{attrs:{column:"",wrap:"","pa-2":""}},[t("v-flex",{attrs:{xs12:"",md8:""}},[t("v-input",{attrs:{label:"Chart Height"}},[t("div",{staticStyle:{padding:"0 0 0 1em"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.options.widget.height,expression:"config.options.widget.height"}],staticStyle:{border:"1px solid #e0e0e0"},attrs:{type:"number",min:"0"},domProps:{value:e.config.options.widget.height},on:{input:function(t){t.target.composing||e.$set(e.config.options.widget,"height",t.target.value)}}})])])],1),t("v-flex",{attrs:{xs12:"",md8:""}},[t("palette-picker",{attrs:{value:e.config.options.palette},on:{change:e.onChangePalette}})],1)],1)},i=[],a=o("1d99"),s={name:"name-editor",props:["config"],methods:{onChangePalette(e){let t=JSON.parse(JSON.stringify(e)).color;e.isReverse&&t.reverse(),this.config.options.color=t,this.config.options.palette=e}},components:{"palette-picker":a["a"]}},p=s,r=o("2877"),l=o("fef8"),c=o.n(l),g=o("0e8f"),u=o("b675"),d=o("a722"),f=Object(r["a"])(p,n,i,!1,null,null,null);t["default"]=f.exports;c()(f,{VFlex:g["a"],VInput:u["a"],VLayout:d["a"]})}}]);
//# sourceMappingURL=chunk-2d209530.0080746a.js.map