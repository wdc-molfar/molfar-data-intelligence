(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8646"],{"554d":function(o,t,n){"use strict";n.r(t);var i=function(){var o=this,t=o._self._c;return t("v-layout",{attrs:{column:"",wrap:"","pa-2":""}},[t("v-row",[t("v-col",[t("v-combobox",{attrs:{items:o.typography,label:"Select a typography display class"},model:{value:o.config.options.typography,callback:function(t){o.$set(o.config.options,"typography",t)},expression:"config.options.typography"}})],1),t("v-col",[t("v-combobox",{attrs:{items:o.txcolors,label:"Select a text color"},model:{value:o.config.options.textColor,callback:function(t){o.$set(o.config.options,"textColor",t)},expression:"config.options.textColor"}})],1),t("v-col",[t("v-combobox",{attrs:{items:o.bgcolors,label:"Select a text background"},model:{value:o.config.options.textBackground,callback:function(t){o.$set(o.config.options,"textBackground",t)},expression:"config.options.textBackground"}})],1)],1),t("v-row",[t("v-col",[t("v-switch",{attrs:{label:"Dense",color:"primary"},on:{change:o.onchangeDense},model:{value:o.config.options.dense,callback:function(t){o.$set(o.config.options,"dense",t)},expression:"config.options.dense"}})],1),t("v-col",[t("v-switch",{attrs:{label:"Pagination",color:"primary"},on:{change:o.onchangePagination},model:{value:o.config.options.pagination,callback:function(t){o.$set(o.config.options,"pagination",t)},expression:"config.options.pagination"}})],1)],1),t("v-switch",{attrs:{label:"Use colors",color:"primary"},on:{change:o.onchangeColorSettings},model:{value:o.config.options.useColors,callback:function(t){o.$set(o.config.options,"useColors",t)},expression:"config.options.useColors"}}),o.showColorSettings?t("v-combobox",{attrs:{items:["row","column","table"],label:"Use colors for"},model:{value:o.config.options.colorMode,callback:function(t){o.$set(o.config.options,"colorMode",t)},expression:"config.options.colorMode"}}):o._e(),o.showColorSettings?t("v-flex",{attrs:{xs12:"",md8:""}},[t("palette-picker",{attrs:{value:o.config.options.palette},on:{change:o.onChangePalette}})],1):o._e()],1)},e=[],s=n("1d99"),a={name:"name-editor",props:["config"],data:()=>({showColorSettings:!1,typography:["display-4","display-3","display-2","display-1","headline","title","subtitle-1","subtitle-2","body-1","body-2","caption","overline"],bgcolors:["default","primary darken-2","primary darken-1","primary","primary lighten-1","primary lighten-2","secondary","accent","error","warning","info","success"],txcolors:["default","white","primary","secondary","accent","error","warning","info","success"]}),methods:{onChangePalette(o){this.config.options.palette=o,console.log("CHANGE PALETTE",this.config.options)},onchangeColorSettings(o){this.showColorSettings=o},onchangeDense(o){this.config.options.dense=o},onchangeFixedHeader(o){this.config.options.fixedHeader=o},onchangePagination(o){this.config.options.pagination=o}},components:{"palette-picker":s["a"]},created(){this.showColorSettings=this.config.options.useColors,this.config.options.headerTextOrientation=this.config.options.headerTextOrientation||"horizontal",this.config.options.dense=this.config.options.dense||!1,this.config.options.fixedHeader=this.config.options.fixedHeader||!1,this.config.options.pagination=!!this.config.options.pagination,this.config.options.typography=this.config.options.typography||"body-2",this.config.options.textColor=this.config.options.textColor||"default",this.config.options.textBackground=this.config.options.textBackground||"default"}},c=a,l=n("2877"),r=n("fef8"),p=n.n(r),g=n("62ad"),f=n("2b5d"),d=n("0e8f"),h=n("a722"),u=n("0fd9"),b=n("b73d"),y=Object(l["a"])(c,i,e,!1,null,null,null);t["default"]=y.exports;p()(y,{VCol:g["a"],VCombobox:f["a"],VFlex:d["a"],VLayout:h["a"],VRow:u["a"],VSwitch:b["a"]})}}]);
//# sourceMappingURL=chunk-2d0c8646.fc13b021.js.map