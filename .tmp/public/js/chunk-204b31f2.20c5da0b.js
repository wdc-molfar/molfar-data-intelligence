(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-204b31f2"],{"16bc":function(t,s,e){"use strict";e("8453")},8453:function(t,s,e){},a523:function(t,s,e){"use strict";e("20f6"),e("4b85");var i=e("e8f2"),a=e("d9f7");s["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:s,data:e,children:i}){let n;const{attrs:r}=e;return r&&(e.attrs={},n=Object.keys(r).filter(t=>{if("slot"===t)return!1;const s=r[t];return t.startsWith("data-")?(e.attrs[t]=s,!1):s||"string"===typeof s})),s.id&&(e.domProps=e.domProps||{},e.domProps.id=s.id),t(s.tag,Object(a["a"])(e,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(n||[])}),i)}})},c671:function(t,s,e){"use strict";var i=e("1e6c");s["a"]=i["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=i["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},caa6:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return t.isProductionMode?t._e():s("v-container",{staticStyle:{border:"1px solid #dcdcdc"},attrs:{"pa-0":""}},[s("v-row",{staticClass:"mx-0"},[s("v-btn",{attrs:{icon:"",disabled:0==t.scripts.length},on:{click:function(s){t.showSnippets=!t.showSnippets}}},[s("v-icon",{staticClass:"primary--text"},[t._v(t._s(t.showSnippets?"mdi-arrow-collapse-left":"mdi-arrow-expand-right"))])],1),s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:function(s){return t.createScript()}}},[s("v-icon",{staticClass:"primary--text"},[t._v("mdi-plus")])],1),s("v-btn",{attrs:{icon:"",disabled:0==t.scripts.length},on:{click:function(s){return t.renameScript()}}},[s("v-icon",{staticClass:"primary--text"},[t._v("mdi-square-edit-outline")])],1),s("v-divider",{staticClass:"mx-3",attrs:{vertical:""}}),s("v-btn",{attrs:{icon:"",loading:t.process,disabled:t.process},on:{click:function(s){t.showResults=!t.showResults}}},[t.success?s("v-icon",{attrs:{color:"success"}},[t._v("mdi-sync")]):s("v-icon",{staticClass:"error white--text",staticStyle:{"border-radius":"50%",padding:"2px"}},[t._v("mdi-sync-off")])],1),s("v-btn",{attrs:{icon:"",disabled:0==t.scripts.length},on:{click:t.runScript}},[s("v-icon",{staticClass:"primary--text"},[t._v("mdi-play")])],1),s("v-btn",{attrs:{icon:"",disabled:0==t.scripts.length},on:{click:function(s){return t.uploadAndRunScript()}}},[s("v-icon",{staticClass:"primary--text"},[t._v("mdi-animation-play-outline")])],1),s("v-divider",{staticClass:"mx-3",attrs:{vertical:""}}),s("v-btn",{attrs:{icon:"",disabled:0==t.scripts.length},on:{click:t.deleteScript}},[s("v-icon",{staticClass:"primary--text"},[t._v("mdi-trash-can-outline")])],1)],1),s("v-divider"),0==t.scripts.length?s("v-col",{staticClass:"text-center"},[s("h3",{staticClass:"warning--text font-weight-light"},[t._v(" NO DATA PROCESSING SCRIPT AVAILABLE ")])]):s("v-row",[s("v-expand-x-transition",[t.showSnippets?s("v-col",{staticClass:"pa-0 ml-3",attrs:{cols:"3"}},[s("v-toolbar",{attrs:{dark:"",flat:"",color:"primary",height:"36"}},[s("v-toolbar-title",{staticClass:"subheading white--text"},[t._v(" Snippets ")])],1),s("snippet-tree",{staticStyle:{height:"600px",overflow:"auto"},attrs:{editor:t.editor}})],1):t._e()],1),t.showSnippets?s("v-divider",{attrs:{vertical:""}}):t._e(),s("v-col",{staticClass:"pa-0",class:t.showSnippets?"ml-0 mr-3":"mx-3"},[s("v-tabs",{attrs:{"show-arrows":""},model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[s("v-tabs-slider"),t._l(t.scripts,(function(e,i){return s("v-tab",{key:i,attrs:{href:"#tab-"+e.name}},[s("span",{staticClass:"my-0 py-0 caption font-weight-bold"},[t._v(t._s(e.name))])])})),t._l(t.scripts,(function(e,i){return s("v-tab-item",{key:i,attrs:{value:"tab-"+e.name}},[s("v-card",{attrs:{flat:""}},[s("editor",{attrs:{content:e.script,lang:"dps",sync:!0},on:{change:t.onUpdateScript,mount:t.setEditor}})],1)],1)}))],2)],1)],1),s("v-divider"),t.showResults&&t.dpsResult&&t.scripts.length>0?s("v-divider"):t._e(),t.showResults&&t.dpsResult&&t.scripts.length>0?s("v-col",{staticClass:"mx-0 pa-0",staticStyle:{"max-height":"35em",overflow:"auto"}},[t.success?s("v-flex",[s("highlight",{attrs:{content:t.result,lang:t.lang}})],1):s("pre",{staticClass:"body-2 error--text pl-2"},[t._v(t._s(t.result.message))])],1):t._e()],1)},a=[],n=e("c555"),r=e("4e14"),c=e("2ef0"),l=function(){var t=this,s=t._self._c;return s("v-card",[s("v-card-title",{staticClass:"white--text title primary py-1"},[s("v-icon",{staticClass:"white--text",attrs:{small:""}},[t._v("mdi-plus")]),s("span",{staticClass:"ml-1 font-weight-light"},[t._v("Create Data Processing Script")]),s("v-spacer"),s("v-btn",{attrs:{text:"",icon:"",small:""},on:{click:t.reject}},[s("v-icon",{staticClass:"white--text",attrs:{small:""}},[t._v("mdi-close")])],1)],1),s("v-flex",{attrs:{xs12:"","pl-3":"","pr-3":"","justify-center":""}},[s("v-text-field",{attrs:{label:"Script name"},model:{value:t.name,callback:function(s){t.name=s},expression:"name"}})],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{text:"",color:"secondary"},on:{click:t.reject}},[t._v("Cancel")]),s("v-btn",{attrs:{text:"",color:"secondary"},on:{click:t.resolve}},[t._v("Create")])],1)],1)},o=[],d={props:["submit"],data:()=>({name:""}),methods:{resolve(){this.submit(this.name)},reject(){this.submit(null)}}},p=d,h=e("2877"),u=e("fef8"),v=e.n(u),m=e("8336"),b=e("b0af"),f=e("99d9"),g=e("ce7e"),x=e("0e8f"),S=e("132d"),w=e("2fa4"),C=e("8654"),y=Object(h["a"])(p,l,o,!1,null,null,null),j=y.exports;v()(y,{VBtn:m["a"],VCard:b["a"],VCardActions:f["a"],VCardTitle:f["d"],VDivider:g["a"],VFlex:x["a"],VIcon:S["a"],VSpacer:w["a"],VTextField:C["a"]});var R=function(){var t=this,s=t._self._c;return s("v-card",[s("v-card-title",{staticClass:"white--text title primary py-1"},[s("v-icon",{staticClass:"white--text",attrs:{small:""}},[t._v("mdi-square-edit-outline")]),s("span",{staticClass:"ml-1 font-weight-light"},[t._v("Rename  Script")]),s("v-spacer"),s("v-btn",{attrs:{text:"",icon:"",small:""},on:{click:t.reject}},[s("v-icon",{staticClass:"white--text",attrs:{small:""}},[t._v("mdi-close")])],1)],1),s("v-flex",{attrs:{xs12:"","pl-3":"","pr-3":"","justify-center":""}},[s("v-text-field",{attrs:{label:"Script name"},model:{value:t.name,callback:function(s){t.name=s},expression:"name"}})],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{text:"",color:"secondary"},on:{click:t.reject}},[t._v("Cancel")]),s("v-btn",{attrs:{text:"",color:"secondary"},on:{click:t.resolve}},[t._v("Create")])],1)],1)},_=[],V={props:["submit"],data:()=>({name:""}),methods:{resolve(){this.submit(this.name)},reject(){this.submit(null)}}},k=V,T=Object(h["a"])(k,R,_,!1,null,null,null),I=T.exports;v()(T,{VBtn:m["a"],VCard:b["a"],VCardActions:f["a"],VCardTitle:f["d"],VDivider:g["a"],VFlex:x["a"],VIcon:S["a"],VSpacer:w["a"],VTextField:C["a"]});let O={"snippet-tree":()=>e.e("chunk-4df0e2c8").then(e.bind(null,"7604")),editor:()=>e.e("chunk-f9d6da72").then(e.bind(null,"3e31")),highlight:()=>e.e("chunk-40a7e677").then(e.bind(null,"a24c"))},A={text:"text",string:"text",xml:"xml",csv:"csv",javascript:"javascript",json:"json",object:"json",function:"json",dps:"dps",dataset:"json",error:"json",table:"json",help:"json",html:"html",bar:"json",hbar:"json",line:"json",area:"json",scatter:"json",radar:"json",deps:"json",pie:"json"};var N={name:"dps-suite-widget",icon:"mdi-card-text-outline",mixins:[n["a"],r["a"]],components:O,methods:{createScript(){this.$dialogManager.showAndWait(j,{width:"30%"}).then(t=>{t&&this.resolve(t)})},renameScript(){this.$dialogManager.showAndWait(I,{width:"30%"}).then(t=>{t&&this.resolveRename(t)})},uploadAndRunScript(){this.selectFile().then(t=>{t&&this.resolveFile(t)})},setEditor(t){this.editor=t},resolveFile(t){this.process=!0,this.dpsResult=null,this.$dps.run({script:this.selected.script,state:{},file:t}).then(t=>{this.process=!1,this.success=!0,this.dpsResult=t.data}).catch(t=>{this.process=!1,this.success=!1,this.dpsResult={message:t.toString()}})},onUpdateScript(t){this.selected.script=t,this.setNeedSave(!0)},checkDpsURL(){this.process=!0,this.$http.get(this.app.config.dpsURL).then(()=>{this.process=!1,this.success=!0}).catch(()=>{this.process=!1,this.success=!1,this.dpsResult={message:"Data processing server not available."}})},runScript(){this.process=!0,this.dpsResult=null,this.$dps.run({script:this.selected.script}).then(t=>{this.process=!1,"error"!=t.type?(this.success=!0,this.dpsResult=t):(this.success=!1,this.dpsResult=t)}).catch(t=>{this.process=!1,this.success=!1,this.dpsResult={message:t.toString()},window.console.warn(t)})},deleteScript(){this.$djvue.confirm({type:"warning",text:"Do you want delete script "+this.selected.name,rejectText:"Cancel",resolveText:"Delete"}).then(()=>{let t=Object(c["findIndex"])(this.scripts,t=>t.name==this.selected.name),s=1==this.scripts.length?-1:t==this.scripts.length-1?this.scripts.length-2:t;this.scripts.splice(t,1),this.scripts.length>0&&(this.selected=this.scripts[s],this.tab="tab-"+this.selected.name),this.setNeedSave(!0)})},validateScriptName(t){return!(!t||""==t)&&-1==Object(c["findIndex"])(this.scripts,s=>s.name==t)},resolve(t){this.validateScriptName(t)?(this.scripts.push({name:t,script:`\n/**\n **\n **     DATA PROCESSING SCRIPT: ${t}\n **     SERVICE: ${this.app.config.dpsURL}\n **\n **/\n`}),this.selected=Object(c["findIndex"])(this.scripts,s=>s.name==t),this.currentScript="tab-"+t,this.setNeedSave(!0)):this.$djvue.warning({type:"error",title:"Cannot create dps",text:"Script name is empty or doublicated"}),this.$nextTick(()=>{this.tab="tab-"+t})},resolveRename(t){this.validateScriptName(t)?(this.renameDpsDialog=!1,this.selected.name=t,this.currentScript="tab-"+t,this.newScriptName=null,this.setNeedSave(!0)):this.$djvue.warning({type:"error",title:"Cannot rename dps",text:"Script name is empty or doublicates detected."})}},computed:{tabs(){return this.scripts.map(t=>t.name)},lang(){return A[this.dpsResult.type]||"json"},result(){let t=A[this.dpsResult.type]||"json";return"error"==this.dpsResult.type?this.dpsResult.message?this.dpsResult:this.dpsResult.data:"json"==t?this.dpsResult.data?JSON.stringify(this.dpsResult.data,null,"\t"):JSON.stringify(this.dpsResult):this.dpsResult.data?this.dpsResult.data:this.dpsResult}},mounted(){this.scripts.length>0&&(this.tab="tab-"+this.scripts[0].name),this.$emit("init")},data:()=>({tab:null,scripts:[],selected:null,currentScript:null,process:!1,success:!1,showSnippets:!1,dpsResult:null,newScriptName:null,file:null,editor:null,showResults:!1}),watch:{tab(t){t&&(this.selected=Object(c["find"])(this.scripts,s=>s.name==t.substring(4)))}},created(){this.scripts=this.config.scripts,this.scripts.length>0&&(this.selected=this.scripts[0]),this.checkDpsURL()},props:["config"]},D=N,P=(e("16bc"),e("62ad")),$=e("a523"),E=e("0789"),F=e("0fd9"),L=e("71a3"),U=e("c671"),B=e("fe57"),W=e("9a96"),J=e("71d9"),M=e("2a7f"),q=Object(h["a"])(D,i,a,!1,null,null,null);s["default"]=q.exports;v()(q,{VBtn:m["a"],VCard:b["a"],VCol:P["a"],VContainer:$["a"],VDivider:g["a"],VExpandXTransition:E["b"],VFlex:x["a"],VIcon:S["a"],VRow:F["a"],VSpacer:w["a"],VTab:L["a"],VTabItem:U["a"],VTabs:B["a"],VTabsSlider:W["a"],VToolbar:J["a"],VToolbarTitle:M["a"]})}}]);
//# sourceMappingURL=chunk-204b31f2.20c5da0b.js.map