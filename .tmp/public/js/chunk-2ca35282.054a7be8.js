(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ca35282"],{"2b5d":function(t,e,i){"use strict";i("2bfd");var a=i("b974"),s=i("c6a6"),n=i("80d2");e["a"]=s["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:()=>[]},returnObject:{type:Boolean,default:!0}},data:()=>({editingIndex:-1}),computed:{computedCounterValue(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot(){return a["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed(){return!0},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty(){return null!=this.internalSearch}},methods:{onInternalSearchChanged(t){if(t&&this.multiple&&this.delimiters.length){const e=this.delimiters.find(e=>t.endsWith(e));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput(){const t=s["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection(t,e){const i=a["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(i.componentOptions.listeners={...i.componentOptions.listeners,dblclick:()=>{this.editingIndex=e,this.internalSearch=this.getText(t),this.selectedIndex=-1}}),i},onChipInput(t){a["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[n["z"].home,n["z"].end].includes(e)||a["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===n["z"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===n["z"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();s["a"].options.methods.onTabDown.call(this,t)},selectItem(t){this.editingIndex>-1?this.updateEditing():(s["a"].options.methods.selectItem.call(this,t),this.internalSearch&&this.multiple&&this.getText(t).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue(t){a["a"].options.methods.setValue.call(this,void 0===t?this.internalSearch:t)},updateEditing(){const t=this.internalValue.slice(),e=this.selectedItems.findIndex(t=>this.getText(t)===this.internalSearch);if(e>-1){const i="object"===typeof t[e]?Object.assign({},t[e]):t[e];t.splice(e,1),t.push(i)}else t[this.editingIndex]=this.internalSearch;this.setValue(t),this.editingIndex=-1,this.internalSearch=null},updateCombobox(){if(!this.searchIsDirty)return;this.internalSearch!==this.getText(this.internalValue)&&this.setValue();const t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&(this.internalSearch=null)},updateSelf(){this.multiple?this.updateTags():this.updateCombobox()},updateTags(){const t=this.getMenuIndex();if(t<0&&!this.searchIsDirty||!this.internalSearch)return;if(this.editingIndex>-1)return this.updateEditing();const e=this.selectedItems.findIndex(t=>this.internalSearch===this.getText(t)),i=e>-1&&"object"===typeof this.selectedItems[e]?Object.assign({},this.selectedItems[e]):this.internalSearch;if(e>-1){const t=this.internalValue.slice();t.splice(e,1),this.setValue(t)}if(t>-1)return this.internalSearch=null;this.selectItem(i),this.internalSearch=null},onPaste(t){var e;if(this.$emit("paste",t),!this.multiple||this.searchIsDirty)return;const i=null===(e=t.clipboardData)||void 0===e?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");i&&-1===this.findExistingIndex(i)&&(t.preventDefault(),a["a"].options.methods.selectItem.call(this,i))},clearableCallback(){this.editingIndex=-1,s["a"].options.methods.clearableCallback.call(this)}}})},7679:function(t,e,i){"use strict";i("c79c");var a=i("e4d3"),s=i("7560"),n=i("80d2"),l=i("afdd"),o=i("326d"),r=i("58df");e["a"]=Object(r["a"])(a["a"],s["a"]).extend({name:"v-edit-dialog",props:{cancelText:{default:"Cancel"},large:Boolean,eager:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data(){return{isActive:!1}},watch:{isActive(t){t?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel(){this.isActive=!1,this.$emit("cancel")},focus(){const t=this.$refs.content.querySelector("input");t&&t.focus()},genButton(t,e){return this.$createElement(l["a"],{props:{text:!0,color:"primary",light:!0},on:{click:t}},e)},genActions(){return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton(()=>{this.save(this.returnValue),this.$emit("save")},this.saveText)])},genContent(){return this.$createElement("div",{staticClass:"v-small-dialog__content",on:{keydown:t=>{t.keyCode===n["z"].esc&&this.cancel(),t.keyCode===n["z"].enter&&(this.save(this.returnValue),this.$emit("save"))}},ref:"content"},[this.$slots.input])}},render(t){return t(o["a"],{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__menu-content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,eager:this.eager,light:this.light,dark:this.dark},on:{input:t=>this.isActive=t},scopedSlots:{activator:({on:e})=>t("div",{staticClass:"v-small-dialog__activator",on:e},[t("span",{staticClass:"v-small-dialog__activator__content"},this.$slots.default)])}},[this.genContent(),this.large?this.genActions():null])}})},"7e50":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("v-data-table",{staticStyle:{"max-height":"600px",overflow:"auto"},attrs:{elevation:"0",headers:t.headers,items:t.pages,dense:"","show-select":""},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-row",{staticClass:"mx-2 my-0"},[e("v-spacer"),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e("v-btn",t._g({staticClass:"primary--text pr-1",attrs:{icon:"",small:""},on:{click:function(e){return t.createPage()}}},i),[e("v-icon",[t._v("mdi-plus")])],1)]}}])},[e("span",[t._v(t._s(t.translate("CREATE")))])]),e("v-divider",{staticClass:"mx-2",attrs:{vertical:""}}),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e("v-btn",t._g({staticClass:"primary--text pr-1",attrs:{icon:"",small:"",disabled:1!=t.selected.length},on:{click:function(e){return t.exportPage()}}},i),[e("v-icon",[t._v("mdi-export")])],1)]}}])},[e("span",[t._v(t._s(t.translate("EXPORT")))])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e("v-btn",t._g({staticClass:"primary--text pr-1",attrs:{slot:"activator",icon:"",small:""},on:{click:t.importPage},slot:"activator"},i),[e("v-icon",[t._v("mdi-import")])],1)]}}])},[e("span",[t._v(t._s(t.translate("IMPORT")))])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e("v-btn",t._g({staticClass:"primary--text pr-1",attrs:{icon:"",small:"",disabled:1!=t.selected.length},on:{click:t.clonePage}},i),[e("v-icon",[t._v("mdi-content-copy")])],1)]}}])},[e("span",[t._v(t._s(t.translate("CLONE")))])]),e("v-divider",{staticClass:"mx-2",attrs:{vertical:""}}),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e("v-btn",t._g({staticClass:"primary--text pr-1",attrs:{icon:"",small:"",disabled:0==t.selected.length},on:{click:function(e){return t.deletePages()}}},i),[e("v-icon",[t._v("mdi-trash-can-outline")])],1)]}}])},[e("span",[t._v(t._s(t.translate("DELETE")))])])],1),e("v-divider")]},proxy:!0},{key:"item.title",fn:function(i){return[e("v-edit-dialog",{staticClass:"primary--text",attrs:{"return-value":i.item.title},on:{"update:returnValue":function(e){return t.$set(i.item,"title",e)},"update:return-value":function(e){return t.$set(i.item,"title",e)},save:function(e){return t.onSaveTitle(i.item)}},scopedSlots:t._u([{key:"input",fn:function(){return[e("v-text-field",{attrs:{label:"Edit","single-line":""},model:{value:i.item.title,callback:function(e){t.$set(i.item,"title",e)},expression:"props.item.title"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(i.item.title)+"\n      ")])]}},{key:"item.path",fn:function(i){return[e("v-edit-dialog",{attrs:{"return-value":i.item.path},on:{"update:returnValue":function(e){return t.$set(i.item,"path",e)},"update:return-value":function(e){return t.$set(i.item,"path",e)},save:function(e){return t.onSavePath(i.item)},open:function(e){return t.onEditPath(i.item)}},scopedSlots:t._u([{key:"input",fn:function(){return[e("v-text-field",{attrs:{rules:[t.unique],required:"",label:"Edit","single-line":""},model:{value:i.item.path,callback:function(e){t.$set(i.item,"path",e)},expression:"props.item.path"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(i.item.path)+"\n      ")])]}},{key:"item.layout",fn:function(i){return[e("v-avatar",{attrs:{tile:"",size:"18"}},[e("v-img",{attrs:{src:i.item.layoutIcon}})],1),t._v("\n    "+t._s(i.item.layout)+"\n  ")]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},s=[],n=i("c555"),l=i("2a7a"),o=i("2ef0"),r=function(){var t=this,e=t._self._c;return e("v-card",[e("v-card-title",{staticClass:"white--text title primary py-1"},[e("v-icon",{staticClass:"white--text",attrs:{small:""}},[t._v("mdi-file-document-box-multiple-outline")]),e("span",{staticClass:"ml-1 font-weight-light"},[t._v(t._s(t.translate("NEW_PAGE")))]),e("v-spacer"),e("v-btn",{attrs:{text:"",icon:"",small:""},on:{click:t.reject}},[e("v-icon",{staticClass:"white--text",attrs:{small:""}},[t._v("mdi-close")])],1)],1),e("v-flex",{attrs:{xs12:"","pl-3":"","pr-3":"","justify-center":""}},[e("v-text-field",{attrs:{label:"Page title"},model:{value:t.pageTitle,callback:function(e){t.pageTitle=e},expression:"pageTitle"}})],1),e("v-flex",{attrs:{xs12:"","pl-3":"","pr-3":"","justify-center":""}},[e("v-text-field",{attrs:{label:"Page path",prefix:"/",hint:"Enter unique page path"},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),e("v-flex",{attrs:{xs12:"","pl-3":"","pr-3":"","justify-center":""}},[e("v-combobox",{attrs:{items:t.options.layouts,label:"Select layout"},on:{change:t.onChangeSelectedLayout},scopedSlots:t._u([{key:"item",fn:function(i){return[e("v-avatar",{attrs:{tile:"",size:"24"}},[e("dj-img",{attrs:{src:i.item.layoutIcon,icon:"mdi-application",width:"24"}})],1),e("span",{staticClass:"caption",staticStyle:{"padding-left":"1em"}},[t._v(t._s(i.item.name))])]}},{key:"selection",fn:function(i){return[e("v-avatar",{attrs:{tile:"",size:"24"}},[e("dj-img",{attrs:{src:i.item.layoutIcon,icon:"mdi-application",small:"",width:"24"}})],1),e("span",{staticClass:"caption",staticStyle:{"padding-left":"1em"}},[t._v(t._s(i.item.name))])]}}]),model:{value:t.layout,callback:function(e){t.layout=e},expression:"layout"}})],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.reject()}}},[t._v(t._s(t.translate("CANCEL")))]),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.resolve()}}},[t._v(t._s(t.translate("OK")))])],1)],1)},c=[];let d={uk:{"#RELOAD":"всеодно перезавантажити","#SAVE_RELOAD":"зберегти та перезавантажити","#DO_YOU_WANT_TO_DELETE":"ви дійсно бажаєте видалити цю сторінку","#CH_MAY_BE_NOT_SAVED":"внесені зміни, можливо, не буде збережено","#CONFIG_CHANGED":"конфігурація змінена",OK:"Tак",NEW_PAGE:"Нова сторінка","#NO":"ні","#SAVE":"зберегти",CANCEL:"Cкасувати",error:"помилка","#Cannot_update_path":"Неможливо оновити шлях","#CLOSE":"Закрити"},en:{"#RELOAD":"anyway reload","#SAVE_RELOAD":"save and reloag","#DO_YOU_WANT_TO_DELETE":"Do you really want to delete this page","#CH_MAY_BE_NOT_SAVED":"The changes you made may not be saved","#CONFIG_CHANGED":"configuration changed",OK:"Ok",NEW_PAGE:"New Page","#NO":"no","#SAVE":"save",CANCEL:"Cancel",error:"error","#Cannot_update_path":"Cannot update path","#CLOSE":"Close"}};var h={props:["options","submit"],mixins:[n["a"]],data(){return{layout:null,id:"",pageTitle:"",i18n:d}},methods:{onChangeSelectedLayout(t){this.layout=t},resolve(){let t=this.layout.getPageTemplate();t.id=this.id,t.title=this.pageTitle,this.submit(t)},reject(){this.submit(null)}}},u=h,p=i("2877"),m=i("fef8"),g=i.n(m),v=i("8212"),f=i("8336"),_=i("b0af"),x=i("99d9"),y=i("2b5d"),C=i("ce7e"),E=i("0e8f"),b=i("132d"),O=i("2fa4"),S=i("8654"),T=Object(p["a"])(u,r,c,!1,null,null,null),A=T.exports;g()(T,{VAvatar:v["a"],VBtn:f["a"],VCard:_["a"],VCardActions:x["a"],VCardTitle:x["d"],VCombobox:y["a"],VDivider:C["a"],VFlex:E["a"],VIcon:b["a"],VSpacer:O["a"],VTextField:S["a"]});var I=function(){var t=this,e=t._self._c;return e("v-card",[e("v-card-title",{staticClass:"white--text title primary py-1"},[e("v-icon",{staticClass:"white--text",attrs:{small:""}},[t._v("mdi-import")]),e("span",{staticClass:"ml-1 font-weight-light"},[t._v(t._s(t.translate("IMPORT_PAGE")))]),e("v-spacer"),e("v-btn",{attrs:{text:"",icon:"",small:""},on:{click:t.reject}},[e("v-icon",{staticClass:"white--text",attrs:{small:""}},[t._v("mdi-close")])],1)],1),e("v-layout",{attrs:{column:""}},[e("v-flex",{attrs:{xs12:"","pl-3":"","pr-3":"","justify-center":""}},[e("v-text-field",{attrs:{label:"Page title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),e("v-flex",{attrs:{xs12:"","px-3":"","justify-center":""}},[e("v-text-field",{attrs:{label:"Page path",hint:"Enter unique page path"},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),e("v-flex",{attrs:{xs1:"","px-3":"","justify-center":""}}),e("v-flex",{attrs:{xs11:"","px-3":"","pt-3":"","justify-center":""}},[e("v-file-input",{attrs:{type:"file",label:"file"},on:{change:t.fileChanged}})],1)],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.reject()}}},[t._v(t._s(t.translate("CANCEL")))]),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.resolve()}}},[t._v(t._s(t.translate("OK")))])],1)],1)},P=[];let V={uk:{"#RELOAD":"всеодно перезавантажити","#SAVE_RELOAD":"зберегти та перезавантажити","#DO_YOU_WANT_TO_DELETE":"ви дійсно бажаєте видалити цю сторінку","#CH_MAY_BE_NOT_SAVED":"внесені зміни, можливо, не буде збережено","#CONFIG_CHANGED":"конфігурація змінена",OK:"Tак",IMPORT_PAGE:"Імпорт сторінки","#NO":"ні","#SAVE":"зберегти",CANCEL:"Cкасувати",error:"помилка","#Cannot_update_path":"Неможливо оновити шлях","#CLOSE":"Закрити"},en:{"#RELOAD":"anyway reload","#SAVE_RELOAD":"save and reloag","#DO_YOU_WANT_TO_DELETE":"Do you really want to delete this page","#CH_MAY_BE_NOT_SAVED":"The changes you made may not be saved","#CONFIG_CHANGED":"configuration changed",OK:"Ok",IMPORT_PAGE:"Import Page","#NO":"no","#SAVE":"save",CANCEL:"Cancel",error:"error","#Cannot_update_path":"Cannot update path","#CLOSE":"Close"}};var D={props:["options","submit"],mixins:[n["a"]],data(){return{file:null,id:"",title:"",i18n:V}},methods:{fileChanged(t){this.file=t},resolve(){let t=(this.id.startsWith("/")?this.id:"/"+this.id).trim().substring(1);this.submit({id:t,title:this.title,file:this.file})},reject(){this.submit(null)}}},k=D,w=i("23a7"),L=i("a722"),N=Object(p["a"])(k,I,P,!1,null,null,null),j=N.exports;g()(N,{VBtn:f["a"],VCard:_["a"],VCardActions:x["a"],VCardTitle:x["d"],VDivider:C["a"],VFileInput:w["a"],VFlex:E["a"],VIcon:b["a"],VLayout:L["a"],VSpacer:O["a"],VTextField:S["a"]});let $={uk:{CLOSE:"Закрити",PAGE_MANAGER:"Управління сторінками",TITLE:"Назва",PATH:"Шлях",LAYOUT:"Шаблон",CREATE:"Створити сторінку",EXPORT:"Експортувати сторінку",IMPORT:"Імпортувати сторінку",CLONE:"Клонувати сторінку",DELETE:"Видалити сторінки",Cannot_update_path:"Cannot Update Page Path"},en:{CLOSE:"Close",PAGE_MANAGER:"Page Manager",TITLE:"Title",PATH:"Path",LAYOUT:"Layout",CREATE:"Create page",EXPORT:"Export page",IMPORT:"Import page",CLONE:"Clone page",DELETE:"Delete pages",Cannot_update_path:"Cannot Update Page Path"}};var R={name:"PageManager",mixins:[n["a"]],data(){return{headers:[],pages:[],layouts:[],newPageLayout:null,newPageId:"",newPageTitle:"",i18n:$,selected:[],editedItem:null,edition:!1,unique:t=>{let e=(t.startsWith("/")?t:"/"+t).trim(),i=e.substring(1);return""!=i?!Object(o["find"])(this.pages.filter(t=>t.id!=this.editedItem.id),t=>t.path==e)||"Doublicate path!":!Object(o["find"])(this.pages.filter(t=>!t.id),t=>t.path==e)||"Doublicate path!"}}},methods:{onSaveTitle(t){let e=Object(o["find"])(this.app.pages,e=>e.id==t.id);e&&(e.title=t.title,this.getPages())},onEditPath(t){this.edition=!0,this.editedItem=t},onSavePath(t){this.edition=!1,setTimeout(()=>{if(1!=this.unique(this.editedItem.path))this.editedItem.path=this.editedItem._path;else{let e=this.editedItem.path;e=(e.startsWith("/")?e:"/"+e).trim();let i=Object(o["find"])(this.app.pages,t=>t.id==this.editedItem.id);i&&(i.id=e.substring(1),i.id=""==i.id?void 0:i.id,t.id=i.id,t.path=i.id?"/"+i.id:"/",t._path=t.path)}},0)},createPage(){this.$dialogManager.showAndWait(A,{width:"40%"},{layouts:this.layouts}).then(t=>{t&&(this.app.pages.push(t),this.getPages())})},getPages(){this.pages=this.app.pages.map(t=>({id:t.id,path:t.id?"/"+t.id:"/",_path:t.id?"/"+t.id:"/",title:t.title,_title:t.title,layout:t.layout,selected:!0,layoutIcon:`./modules/layouts/icons/${t.layout}.png`})),this.selection=this.pages.filter(t=>t.selected).map(t=>t.path)},getLayouts(){this.layouts=Object(o["toPairs"])(l["a"]).map(t=>({id:t[0],name:t[0],layoutIcon:`./modules/layouts/icons/${t[0]}.png`,data:t[1].data,getPageTemplate:t[1].getPageTemplate})).filter(t=>"empty"!=t.id)},clonePage(){let t=Object(o["find"])(this.app.pages,t=>t.id==this.selected[0].id),e=JSON.parse(JSON.stringify(t));e.id=(e.id?e.id:"")+"clone",e.title=e.title+" (Clone)",this.app.pages.push(e),this.getPages()},exportPage(){let t=Object(o["find"])(this.app.pages,t=>t.id==this.selected[0].id),e=JSON.parse(JSON.stringify(t));e.title=e.title+" (ExportPage)",this.$djvue.saveLocalFile(e.title+".json",JSON.stringify(e,null," "))},importPage(){this.$dialogManager.showAndWait(j,{width:"40%"}).then(t=>{t&&(t.file?this.app.pages.filter(e=>""==t.id?!e.id:e.id==t.id).length>0?this.warning({type:"error",title:"Doublicate path",text:"Page path should be unique."}):this.loadLocalFile(t.file).then(e=>{let i=JSON.parse(e);i.title=t.title,i.id=""==t.id?void 0:t.id,this.app.pages.push(i),this.getPages(),this.setNeedSave(!0)}):this.warning({type:"error",title:"Cannot import page",text:"Page configuration file not selected"}))})},deletePages(){this.selected.forEach(t=>{if(t.id==this.app.currentPage.id)return void this.$djvue.warning({type:"warning",title:`Cannot delete page "${t.title}"`,text:`Switch to another page and delete "${t.title}" page`});let e=Object(o["findIndex"])(this.app.pages,e=>e.id==t.id);e>=0&&this.app.pages.splice(e,1)}),this.selected=[],this.getPages()}},created(){this.getPages(),this.getLayouts(),this.headers=[{text:this.translate("TITLE"),value:"title",class:"text-xs-left",sortable:!1},{text:this.translate("PATH"),value:"path",class:"text-xs-left",sortable:!1},{text:this.translate("LAYOUT"),value:"layout",class:"text-xs-left",sortable:!1}]}},M=R,G=i("8fea"),B=i("7679"),F=i("adda"),W=i("0fd9"),H=i("3a2f"),Y=Object(p["a"])(M,a,s,!1,null,null,null);e["default"]=Y.exports;g()(Y,{VAvatar:v["a"],VBtn:f["a"],VDataTable:G["a"],VDivider:C["a"],VEditDialog:B["a"],VIcon:b["a"],VImg:F["a"],VRow:W["a"],VSpacer:O["a"],VTextField:S["a"],VTooltip:H["a"]})},c79c:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2ca35282.054a7be8.js.map