(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-513ca2a0"],{"2b5d":function(e,t,s){"use strict";s("2bfd");var i=s("b974"),n=s("c6a6"),a=s("80d2");t["a"]=n["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:()=>[]},returnObject:{type:Boolean,default:!0}},data:()=>({editingIndex:-1}),computed:{computedCounterValue(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot(){return i["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed(){return!0},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty(){return null!=this.internalSearch}},methods:{onInternalSearchChanged(e){if(e&&this.multiple&&this.delimiters.length){const t=this.delimiters.find(t=>e.endsWith(t));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput(){const e=n["a"].options.methods.genInput.call(this);return delete e.data.attrs.name,e.data.on.paste=this.onPaste,e},genChipSelection(e,t){const s=i["a"].options.methods.genChipSelection.call(this,e,t);return this.multiple&&(s.componentOptions.listeners={...s.componentOptions.listeners,dblclick:()=>{this.editingIndex=t,this.internalSearch=this.getText(e),this.selectedIndex=-1}}),s},onChipInput(e){i["a"].options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[a["z"].home,a["z"].end].includes(t)||i["a"].options.methods.onKeyDown.call(this,e),this.multiple&&t===a["z"].left&&0===this.$refs.input.selectionStart?this.updateSelf():t===a["z"].enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();n["a"].options.methods.onTabDown.call(this,e)},selectItem(e){this.editingIndex>-1?this.updateEditing():(n["a"].options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue(e){i["a"].options.methods.setValue.call(this,void 0===e?this.internalSearch:e)},updateEditing(){const e=this.internalValue.slice(),t=this.selectedItems.findIndex(e=>this.getText(e)===this.internalSearch);if(t>-1){const s="object"===typeof e[t]?Object.assign({},e[t]):e[t];e.splice(t,1),e.push(s)}else e[this.editingIndex]=this.internalSearch;this.setValue(e),this.editingIndex=-1,this.internalSearch=null},updateCombobox(){if(!this.searchIsDirty)return;this.internalSearch!==this.getText(this.internalValue)&&this.setValue();const e=Boolean(this.$scopedSlots.selection)||this.hasChips;e&&(this.internalSearch=null)},updateSelf(){this.multiple?this.updateTags():this.updateCombobox()},updateTags(){const e=this.getMenuIndex();if(e<0&&!this.searchIsDirty||!this.internalSearch)return;if(this.editingIndex>-1)return this.updateEditing();const t=this.selectedItems.findIndex(e=>this.internalSearch===this.getText(e)),s=t>-1&&"object"===typeof this.selectedItems[t]?Object.assign({},this.selectedItems[t]):this.internalSearch;if(t>-1){const e=this.internalValue.slice();e.splice(t,1),this.setValue(e)}if(e>-1)return this.internalSearch=null;this.selectItem(s),this.internalSearch=null},onPaste(e){var t;if(this.$emit("paste",e),!this.multiple||this.searchIsDirty)return;const s=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");s&&-1===this.findExistingIndex(s)&&(e.preventDefault(),i["a"].options.methods.selectItem.call(this,s))},clearableCallback(){this.editingIndex=-1,n["a"].options.methods.clearableCallback.call(this)}}})},c93e:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e._self._c;return t("v-card",{attrs:{flat:""}},[t("v-flex",{attrs:{xs4:""}},[t("v-combobox",{staticClass:"xs4",attrs:{items:e.accessModes,label:"Access for"},on:{input:function(t){return e.onUpdateAccess()}},scopedSlots:e._u([{key:"selection",fn:function(s){return[t("v-icon",[e._v(e._s(s.item.icon))]),t("span",{staticClass:"pl-1"},[e._v(e._s(s.item.text))])]}},{key:"item",fn:function(s){return[t("v-icon",[e._v(e._s(s.item.icon))]),t("span",{staticClass:"pl-1"},[e._v(e._s(s.item.text))])]}}]),model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}})],1),t("v-switch",{attrs:{label:`${e.form.config.access.enabled?"was opened":"was closed"} ${e.form.config.access.lastNotificatedAt?e.timeAgo(e.form.config.access.lastNotificatedAt):""}`,disabled:!e.form.config.questions},on:{change:function(t){return e.onUpdateAccess()}},model:{value:e.form.config.access.enabled,callback:function(t){e.$set(e.form.config.access,"enabled",t)},expression:"form.config.access.enabled"}}),e.form.config.questions?e._e():t("v-layout",{staticClass:"warning darken-1",attrs:{column:"",wrap:""}},[t("v-card-text",{staticClass:"pa-1 white--text subheading"},[t("v-icon",{attrs:{color:"white"}},[e._v("mdi-alert-outline")]),e._v("\n      No questions detected\n    ")],1),t("v-card-text",{staticClass:"pa-1 pt-0 pb-0 white--text caption"},[e._v("No questions detected on this page. Add one or more question widgets.")])],1),"invited"!=e.form.config.access.type||e.form.config.access.users&&0!=e.form.config.access.users.length?e._e():t("v-layout",{attrs:{column:"",wrap:""}},[t("v-divider"),t("h3",{staticClass:"headline info--text font-weight-light pl-3 pt-3"},[e._v("Manage your invited respondents on Respondents tab.")])],1)],1)},n=[],a=s("c555"),o=s("4e14"),l=s("c1df"),c=s.n(l),h=s("2ef0"),r={mixins:[a["a"],o["a"]],props:["form"],methods:{timeAgo(e){return c()(new Date(e)).fromNow()},onUpdateAccess(){this.form.config.access.type=this.selection.key,this.$emit("update",this.form.config.access)}},created(){this.selection=Object(h["find"])(this.accessModes,e=>e.key==this.form.config.access.type)},watch:{form(e){this.selection=Object(h["find"])(this.accessModes,t=>t.key==e.config.access.type)}},data:()=>({accessModes:[{key:"any",icon:"mdi-account",text:"Any respondents"},{key:"users",icon:"mdi-account-key",text:"Logged user"},{key:"invited",icon:"mdi-account-star",text:"Invited respondents"}],selection:null})},d=r,u=s("2877"),p=s("fef8"),m=s.n(p),f=s("b0af"),g=s("99d9"),x=s("2b5d"),b=s("ce7e"),v=s("0e8f"),I=s("132d"),y=s("a722"),S=s("b73d"),w=Object(u["a"])(d,i,n,!1,null,null,null);t["default"]=w.exports;m()(w,{VCard:f["a"],VCardText:g["c"],VCombobox:x["a"],VDivider:b["a"],VFlex:v["a"],VIcon:I["a"],VLayout:y["a"],VSwitch:S["a"]})}}]);
//# sourceMappingURL=chunk-513ca2a0.9499e048.js.map