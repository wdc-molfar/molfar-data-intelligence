(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00fcfc2d"],{"2afb":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e._self._c;return t("v-container",[t("v-layout",{attrs:{row:"","align-center":""}},[t("v-flex",{attrs:{xs1:"","pl-3":"","pr-3":"","justify-center":""}}),t("v-flex",{attrs:{xs11:"","pl-3":"","pr-3":"","justify-center":""}},[t("theme-peaker",{attrs:{value:e.$vuetify.theme.themes.light},on:{change:e.onSetTheme}})],1)],1),t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs1:"","pl-3":"","pr-3":"","justify-center":"","align-self-center":""}},[t("v-avatar",{attrs:{tile:"",size:"36"}},[t("dj-img",{attrs:{src:e.app.config.icon,icon:"mdi-image-off",color:"error"}})],1)],1),t("v-flex",{attrs:{xs11:"","pl-3":"","pr-3":"","justify-center":""}},[t("v-text-field",{attrs:{label:"App icon"},model:{value:e.app.config.icon,callback:function(t){e.$set(e.app.config,"icon",t)},expression:"app.config.icon"}})],1)],1),t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs1:"","pl-3":"","pr-3":"","justify-center":""}}),t("v-flex",{attrs:{xs11:"","pl-3":"","pr-3":"","justify-center":""}},[t("v-text-field",{attrs:{label:"App name"},model:{value:e.app.config.name,callback:function(t){e.$set(e.app.config,"name",t)},expression:"app.config.name"}})],1)],1),t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs1:"","pl-3":"","pr-3":"","justify-center":""}}),t("v-flex",{attrs:{xs11:"","pl-3":"","pr-3":"","justify-center":""}},[t("v-text-field",{attrs:{label:"App title"},model:{value:e.app.config.title,callback:function(t){e.$set(e.app.config,"title",t)},expression:"app.config.title"}})],1)],1),t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs1:"","pl-3":"","pr-3":"","justify-center":""}}),t("v-flex",{attrs:{xs11:"","pl-3":"","pr-3":"","justify-center":""}},[t("v-textarea",{attrs:{label:"App description"},model:{value:e.app.config.description,callback:function(t){e.$set(e.app.config,"description",t)},expression:"app.config.description"}})],1)],1),t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs1:"","pl-3":"","pr-3":"","justify-center":""}}),t("v-flex",{attrs:{xs11:"","pl-3":"","pr-3":"","justify-center":""}})],1),t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs1:"","pl-3":"","pr-3":"","justify-center":""}}),t("v-flex",{attrs:{xs11:"","pl-3":"","pr-3":"","justify-center":""}},[t("v-autocomplete",{attrs:{items:e.availableKeywords,color:"primary",label:"Keywords",multiple:"","search-input":e.searchKeyword,chips:""},on:{"update:searchInput":function(t){e.searchKeyword=t},"update:search-input":function(t){e.searchKeyword=t}},scopedSlots:e._u([{key:"selection",fn:function(s){return[t("v-chip",e._b({attrs:{"close-icon":"mdi-close-outline",close:"",color:"primary",outlined:"",label:"","input-value":s.selected},on:{click:s.select,"click:close":function(t){return e.removeKeyword(s.item)}}},"v-chip",s.attrs,!1),[e._v("\n            "+e._s(s.item)+"\n          ")])]}},{key:"item",fn:function(s){return[t("v-list-item-content",{domProps:{textContent:e._s(s.item)}})]}}]),model:{value:e.appKeywords,callback:function(t){e.appKeywords=t},expression:"appKeywords"}},[t("template",{slot:"no-data"},[t("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.createKeyword(e.searchKeyword)}}},[e._v('\n            Create "'+e._s(e.searchKeyword)+'"\n          ')])],1)],2)],1)],1),t("v-layout",{attrs:{row:"","align-center":""}},[t("v-flex",{attrs:{xs1:"","pl-3":"","pr-3":"","justify-center":""}},[e.checkURL?t("v-progress-circular",{attrs:{indeterminate:"",color:"secondary lighten-4",size:"24"}}):e.validURL?t("v-icon",{attrs:{color:"success"}},[e._v("mdi-sync")]):e.validURL?e._e():t("v-icon",{attrs:{color:"error"}},[e._v("mdi-sync-off")])],1),t("v-flex",{attrs:{xs11:"","pl-3":"","pr-3":"","justify-center":""}},[t("v-text-field",{attrs:{label:"DPS url"},on:{input:e.onInputHandler},model:{value:e.app.config.dpsURL,callback:function(t){e.$set(e.app.config,"dpsURL",t)},expression:"app.config.dpsURL"}})],1)],1)],1)},i=[],a=s("c555"),r=s("8a23"),o=s("b0e4"),c=s("2ef0");let l={en:{Application_settings:"Application settings"},uk:{Application_settings:"Налаштування застосунку"}};var p={name:"app-editor",props:["config"],mixins:[a["a"],r["a"]],components:{"theme-peaker":o["a"]},data(){return{availableKeywords:[],searchKeyword:null,appKeywords:[],checkURL:!1,validURL:!1,timer:null,i18n:l}},methods:{onSetTheme(e){this.app.config.theme=e,this.$vuetify.theme.themes.light=this.app.config.theme},onInputHandler(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.checkDpsURL()},1e3)},checkDpsURL(){this.checkURL=!0,this.$http.get(this.app.config.dpsURL).then(()=>{this.checkURL=!1,this.validURL=!0}).catch(()=>{this.checkURL=!1,this.validURL=!1})},createKeyword(e){this.availableKeywords.push(e),this.appKeywords.push(e)},initiate(){this.appKeywords=this.app.config.keywords.map(e=>e),this.availableKeywords=this.app.config.keywords.map(e=>e),this.$portal.get("api/app/get-list").then(e=>{e.data.forEach(e=>{this.availableKeywords=Object(c["union"])(this.availableKeywords,e.keywords)}),Object(c["remove"])(this.availableKeywords,e=>""==e)}),this.checkDpsURL()},removeKeyword(e){const t=this.appKeywords.indexOf(e);t>=0&&this.appKeywords.splice(t,1)}},watch:{appKeywords:{handler(e){this.app.config.keywords=e},deep:!0}},created(){this.initiate()}},h=p,d=s("2877"),u=s("fef8"),f=s.n(u),m=s("c6a6"),y=s("8212"),g=s("8336"),v=s("cc20"),x=s("a523"),w=s("0e8f"),F=s("132d"),b=s("a722"),A=s("5d23"),D=s("490a"),E=s("8654"),C=s("a844"),I=Object(d["a"])(h,n,i,!1,null,null,null);t["default"]=I.exports;f()(I,{VAutocomplete:m["a"],VAvatar:y["a"],VBtn:g["a"],VChip:v["a"],VContainer:x["a"],VFlex:w["a"],VIcon:F["a"],VLayout:b["a"],VListItemContent:A["a"],VProgressCircular:D["a"],VTextField:E["a"],VTextarea:C["a"]})},"2b5d":function(e,t,s){"use strict";s("2bfd");var n=s("b974"),i=s("c6a6"),a=s("80d2");t["a"]=i["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:()=>[]},returnObject:{type:Boolean,default:!0}},data:()=>({editingIndex:-1}),computed:{computedCounterValue(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot(){return n["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed(){return!0},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty(){return null!=this.internalSearch}},methods:{onInternalSearchChanged(e){if(e&&this.multiple&&this.delimiters.length){const t=this.delimiters.find(t=>e.endsWith(t));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput(){const e=i["a"].options.methods.genInput.call(this);return delete e.data.attrs.name,e.data.on.paste=this.onPaste,e},genChipSelection(e,t){const s=n["a"].options.methods.genChipSelection.call(this,e,t);return this.multiple&&(s.componentOptions.listeners={...s.componentOptions.listeners,dblclick:()=>{this.editingIndex=t,this.internalSearch=this.getText(e),this.selectedIndex=-1}}),s},onChipInput(e){n["a"].options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[a["z"].home,a["z"].end].includes(t)||n["a"].options.methods.onKeyDown.call(this,e),this.multiple&&t===a["z"].left&&0===this.$refs.input.selectionStart?this.updateSelf():t===a["z"].enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();i["a"].options.methods.onTabDown.call(this,e)},selectItem(e){this.editingIndex>-1?this.updateEditing():(i["a"].options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue(e){n["a"].options.methods.setValue.call(this,void 0===e?this.internalSearch:e)},updateEditing(){const e=this.internalValue.slice(),t=this.selectedItems.findIndex(e=>this.getText(e)===this.internalSearch);if(t>-1){const s="object"===typeof e[t]?Object.assign({},e[t]):e[t];e.splice(t,1),e.push(s)}else e[this.editingIndex]=this.internalSearch;this.setValue(e),this.editingIndex=-1,this.internalSearch=null},updateCombobox(){if(!this.searchIsDirty)return;this.internalSearch!==this.getText(this.internalValue)&&this.setValue();const e=Boolean(this.$scopedSlots.selection)||this.hasChips;e&&(this.internalSearch=null)},updateSelf(){this.multiple?this.updateTags():this.updateCombobox()},updateTags(){const e=this.getMenuIndex();if(e<0&&!this.searchIsDirty||!this.internalSearch)return;if(this.editingIndex>-1)return this.updateEditing();const t=this.selectedItems.findIndex(e=>this.internalSearch===this.getText(e)),s=t>-1&&"object"===typeof this.selectedItems[t]?Object.assign({},this.selectedItems[t]):this.internalSearch;if(t>-1){const e=this.internalValue.slice();e.splice(t,1),this.setValue(e)}if(e>-1)return this.internalSearch=null;this.selectItem(s),this.internalSearch=null},onPaste(e){var t;if(this.$emit("paste",e),!this.multiple||this.searchIsDirty)return;const s=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");s&&-1===this.findExistingIndex(s)&&(e.preventDefault(),n["a"].options.methods.selectItem.call(this,s))},clearableCallback(){this.editingIndex=-1,i["a"].options.methods.clearableCallback.call(this)}}})},a523:function(e,t,s){"use strict";s("20f6"),s("4b85");var n=s("e8f2"),i=s("d9f7");t["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:s,children:n}){let a;const{attrs:r}=s;return r&&(s.attrs={},a=Object.keys(r).filter(e=>{if("slot"===e)return!1;const t=r[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"===typeof t})),t.id&&(s.domProps=s.domProps||{},s.domProps.id=t.id),e(t.tag,Object(i["a"])(s,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(a||[])}),n)}})},b0e4:function(e,t,s){"use strict";var n=function(){var e=this,t=e._self._c;return t("v-layout",{attrs:{column:""}},[t("v-combobox",{attrs:{label:"Theme Palette",items:e.themes,dense:""},on:{input:e.onChange},scopedSlots:e._u([{key:"selection",fn:function({item:s}){return s===Object(s)?e._l(s,(function(e){return t("span",{key:e,style:`margin:0; padding:0; background:${e};  width:16px; height:20px;`})})):void 0}},{key:"item",fn:function({item:s}){return[t("v-layout",{attrs:{row:""}},e._l(s,(function(e){return t("span",{key:e,style:`margin:0; padding:0; background:${e};  width:16px; height:20px;`})})),0)]}}],null,!0),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)},i=[],a=[{primary:"#3C5F70",accent:"#615B62",secondary:"#1B272C",success:"#008048",info:"#00D5FF",warning:"#FB7F00",error:"#bc3442"},{primary:"#769CB2",accent:"#615B62",secondary:"#1B272C",success:"#00D176",info:"#00D5FF",warning:"#FB7F00",error:"#FF475A"},{primary:"#232F3D",accent:"#615B62",secondary:"#18191e",success:"#27752A",info:"#2196F3",warning:"#FB7F00",error:"#F62929"},{primary:"#696969",accent:"#8E8D8E",secondary:"#18191e",success:"#27752A",info:"#2196F3",warning:"#FB7F00",error:"#F62929"},{primary:"#2E3F5D",accent:"#7D7C7D",secondary:"#101010",success:"#056013",info:"#064D69",warning:"#F87206",error:"#BE0404"},{primary:"#2E3F5D",accent:"#ADA7AC",secondary:"#505151",success:"#9EBEA3",info:"#6799AD",warning:"#DE9D05",error:"#BE0404"},{primary:"#3F5858",accent:"#ADA7AC",secondary:"#505151",success:"#9EBEA3",info:"#6799AD",warning:"#DE9D05",error:"#BE0404"},{primary:"#696C70",accent:"#BC87B1",secondary:"#393F42",success:"#BDCABF",info:"#859AAB",warning:"#BFA98E",error:"#D7AFAF"},{primary:"#7A9ABA",accent:"#E782D1",secondary:"#393F42",success:"#B5D7B8",info:"#91C6F2",warning:"#EDBA7A",error:"#E88787"},{primary:"#06305a",secondary:"#121b1f",accent:"#8E24AA",error:"#f44336",warning:"#E65100",info:"#0091EA",success:"#388E3C"},{primary:"#0065a4",secondary:"#37474F",accent:"#8E24AA",error:"#f44336",warning:"#E65100",info:"#0091EA",success:"#388E3C"},{primary:"#00695C",secondary:"#37474F",accent:"#9c27b0",error:"#f44336",warning:"#EF6C00",info:"#1565C0",success:"#009688"},{primary:"#0097A7",secondary:"#607D8B",accent:"#8E24AA",error:"#E53935",warning:"#EF6C00",info:"#1565C0",success:"#2E7D32"},{primary:"#26A69A",secondary:"#455A64",accent:"#00796B",error:"#EF5350",warning:"#FF9800",info:"#42A5F5",success:"#00C853"},{primary:"#1565C0",secondary:"#757575",accent:"#448AFF",error:"#f44336",warning:"#FF8F00",info:"#1E88E5",success:"#2E7D32"},{primary:"#512DA8",secondary:"#546E7A",accent:"#9c27b0",error:"#f44336",warning:"#FF8F00",info:"#1E88E5",success:"#2E7D32"},{primary:"#00838F",secondary:"#546E7A",accent:"#4DD0E1",error:"#EC407A",warning:"#FF8F00",info:"#42A5F5",success:"#43A047"},{primary:"#FF7043",secondary:"#A1887F",accent:"#FF8A65",error:"#EF5350",warning:"#FF9800",info:"#42A5F5",success:"#00C853"},{primary:"#7CB342",secondary:"#90A4AE",accent:"#9CCC65",error:"#EF5350",warning:"#FF9800",info:"#42A5F5",success:"#00C853"},{primary:"#00897B",secondary:"#546E7A",accent:"#9c27b0",error:"#D32F2F",warning:"#EF6C00",info:"#1976D2",success:"#2E7D32"},{primary:"#303F9F",secondary:"#90A4AE",accent:"#D81B60",error:"#D32F2F",warning:"#EF6C00",info:"#1976D2",success:"#2E7D32"}],r={props:["value"],data:()=>({model:{},themes:a}),created(){this.model=this.value,this.$emit("change",this.model)},methods:{onChange(){this.model&&this.$emit("change",this.model)}}},o=r,c=s("2877"),l=s("fef8"),p=s.n(l),h=s("2b5d"),d=s("a722"),u=Object(c["a"])(o,n,i,!1,null,null,null);t["a"]=u.exports;p()(u,{VCombobox:h["a"],VLayout:d["a"]})}}]);
//# sourceMappingURL=chunk-00fcfc2d.0fb12f73.js.map