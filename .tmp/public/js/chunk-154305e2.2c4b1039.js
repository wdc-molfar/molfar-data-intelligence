(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-154305e2","chunk-f9d6da72"],{"2b5d":function(t,e,n){"use strict";n("2bfd");var i=n("b974"),s=n("c6a6"),a=n("80d2");e["a"]=s["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:()=>[]},returnObject:{type:Boolean,default:!0}},data:()=>({editingIndex:-1}),computed:{computedCounterValue(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot(){return i["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed(){return!0},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty(){return null!=this.internalSearch}},methods:{onInternalSearchChanged(t){if(t&&this.multiple&&this.delimiters.length){const e=this.delimiters.find(e=>t.endsWith(e));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput(){const t=s["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection(t,e){const n=i["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(n.componentOptions.listeners={...n.componentOptions.listeners,dblclick:()=>{this.editingIndex=e,this.internalSearch=this.getText(t),this.selectedIndex=-1}}),n},onChipInput(t){i["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[a["z"].home,a["z"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===a["z"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===a["z"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();s["a"].options.methods.onTabDown.call(this,t)},selectItem(t){this.editingIndex>-1?this.updateEditing():(s["a"].options.methods.selectItem.call(this,t),this.internalSearch&&this.multiple&&this.getText(t).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue(t){i["a"].options.methods.setValue.call(this,void 0===t?this.internalSearch:t)},updateEditing(){const t=this.internalValue.slice(),e=this.selectedItems.findIndex(t=>this.getText(t)===this.internalSearch);if(e>-1){const n="object"===typeof t[e]?Object.assign({},t[e]):t[e];t.splice(e,1),t.push(n)}else t[this.editingIndex]=this.internalSearch;this.setValue(t),this.editingIndex=-1,this.internalSearch=null},updateCombobox(){if(!this.searchIsDirty)return;this.internalSearch!==this.getText(this.internalValue)&&this.setValue();const t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&(this.internalSearch=null)},updateSelf(){this.multiple?this.updateTags():this.updateCombobox()},updateTags(){const t=this.getMenuIndex();if(t<0&&!this.searchIsDirty||!this.internalSearch)return;if(this.editingIndex>-1)return this.updateEditing();const e=this.selectedItems.findIndex(t=>this.internalSearch===this.getText(t)),n=e>-1&&"object"===typeof this.selectedItems[e]?Object.assign({},this.selectedItems[e]):this.internalSearch;if(e>-1){const t=this.internalValue.slice();t.splice(e,1),this.setValue(t)}if(t>-1)return this.internalSearch=null;this.selectItem(n),this.internalSearch=null},onPaste(t){var e;if(this.$emit("paste",t),!this.multiple||this.searchIsDirty)return;const n=null===(e=t.clipboardData)||void 0===e?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(t.preventDefault(),i["a"].options.methods.selectItem.call(this,n))},clearableCallback(){this.editingIndex=-1,s["a"].options.methods.clearableCallback.call(this)}}})},"3e31":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{class:t.editorClass,style:t.editorStyle})},s=[],a=n("c555"),r=n("4e14");let l;var o={name:"editor",mixins:[a["a"],r["a"]],props:{content:{type:String,default:"\n"},lang:{type:String,default:"javascript"},theme:{type:String,default:"tomorrow"},sync:{type:Boolean,default:!0},editorClass:{type:String,default:"editor"},editorStyle:{type:String,default:""}},data:function(){return{editor:null,session:null}},methods:{insert(t){l=l||this.editor.selection.getRange(),l&&this.session.replace(l,t)},setAnnotations(t){this.session.setAnnotations(t)},clearAnnotations(){this.session.clearAnnotations()}},watch:{content:function(t){const e=this;l=this.editor.selection.getRange(),e.sync&&t!==e.session.getValue()&&e.editor.setValue(t,1)},theme:function(t){const e=this;e.editor.setTheme("ace/theme/"+t)}},mounted(){const t=this;var e=t.lang,n=t.theme,i=t.editor=window.ace.edit(t.$el),s=t.session=i.getSession();i.$blockScrolling=1/0,s.setMode("ace/mode/"+e),i.setTheme("ace/theme/"+n),s.setValue(t.content,1),s.on("change",()=>{t.emit("editor-change-content",s.getValue(),t),t.$emit("change",s.getValue())}),i.selection.on("changeSelection",()=>{l=t.editor.selection.getRange().clone()}),this.$emit("mount",this)}},d=o,c=(n("7d38"),n("2877")),h=Object(c["a"])(d,i,s,!1,null,"e859eb34",null);e["default"]=h.exports},"7d38":function(t,e,n){"use strict";n("d67e")},a523:function(t,e,n){"use strict";n("20f6"),n("4b85");var i=n("e8f2"),s=n("d9f7");e["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let a;const{attrs:r}=n;return r&&(n.attrs={},a=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(s["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),i)}})},c3f2:function(t,e,n){},c8fb:function(t,e,n){"use strict";n("c3f2")},d67e:function(t,e,n){},dd38:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-combobox",{attrs:{items:t.sourceTypes,dense:"",label:"Select a data source type"},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{directives:[{name:"show",rawName:"v-show",value:"url"==t.mode,expression:"mode == 'url'"}],attrs:{label:"url",hint:"For example, djvue/components/widgets/html/1.htm"},model:{value:t.config.data.url,callback:function(e){t.$set(t.config.data,"url",e)},expression:"config.data.url"}}),e("editor",{directives:[{name:"show",rawName:"v-show",value:"embedded"==t.mode,expression:"mode == 'embedded'"}],staticStyle:{border:"1px solid #999"},attrs:{content:t.embeddedSource,lang:"dot",sync:!0},on:{change:t.onUpdateSource}}),e("v-layout",{directives:[{name:"show",rawName:"v-show",value:"dps"==t.mode,expression:"mode == 'dps'"}],attrs:{column:""}},[e("v-dialog",{attrs:{"max-width":"50%"},model:{value:t.snippets,callback:function(e){t.snippets=e},expression:"snippets"}},[e("v-layout",{attrs:{slot:"activator",row:""},slot:"activator"},[e("v-spacer"),e("v-btn",{staticClass:"primary--text",attrs:{flat:"",disabled:!t.editor}},[t._v("Snippets")])],1),e("v-card",{attrs:{flat:""}},[e("snippet-tree",{attrs:{editor:t.editor},on:{select:function(e){t.snippets=!1}}})],1)],1),e("editor",{staticStyle:{border:"1px solid #999",height:"350px !important"},attrs:{content:t.config.data.script,lang:"dps",sync:!0},on:{change:t.onUpdateScript,mount:t.setEditor}})],1)],1)],1)],1)},s=[],a=n("3e31"),r=function(){var t=this,e=t._self._c;return e("v-treeview",{staticClass:"dj-tree pa-2",attrs:{items:t.tree,"open-on-click":"",open:t.open,transition:"","item-text":""},scopedSlots:t._u([{key:"prepend",fn:function({item:n}){return[n.snippet?e("div",{staticClass:"subheading font-weight-light primary--text",on:{click:function(e){return t.insert(n.snippet)}}},[t._v("\n      "+t._s(n.title)+"\n    ")]):e("div",{staticClass:"subheading font-weight-light secondary--text"},[t._v("\n      "+t._s(n.title)+"\n    ")])]}}])})},l=[],o=[{title:"Injection",children:[{title:"javascript",snippet:"\n<?javascript \n?>\n"},{title:"json",snippet:"\n<?json \n?>\n"},{title:"csv",snippet:"\n<?csv \n?>\n"},{title:"xml",snippet:"\n<?xml \n?>\n"},{title:"text",snippet:"\n<?text \n?>\n"},{title:"html",snippet:"\n<?html \n?>\n"}]},{title:"Attributes",children:[{title:"bindable",snippet:"{{variable}}"},{title:"scriptable",snippet:"<? d => d ?>"}]},{title:"Variables",children:[{title:"set",snippet:'\nset("variable")\n'},{title:"get",snippet:'\nget("variable")\n'},{title:"return",snippet:'\nreturn("variable")\n'}]},{title:"Data Definition",children:[{title:"Get collection definition"},{title:"Create collection"},{title:"Drop collection"},{title:"Alter collection"},{title:"Create collection"}]},{title:"Data Manipulation",children:[{title:"Select data",snippet:"dml.select(\n    from:'sdi-wbgini',\n    return:'value',\n    where: <? d => d.value.year == '2015' ?>,\n    into: 'gini'\n)"},{title:"Update data"},{title:"Insert data"},{title:"Insert or Update data"},{title:"Delete data"},{title:"Load data"}]},{title:"Data Transformation",children:[{title:"Select"},{title:"Order by"},{title:"Group by"},{title:"Inner join"},{title:"Left join"},{title:"Outer join"},{title:"Map"},{title:"Count by"},{title:"Unique by"},{title:"Limit (take)"}]},{title:"Statistic",children:[{title:"Min",children:[]},{title:"Max",children:[]},{title:"Rank",children:[]},{title:"Median",children:[]},{title:"Average",children:[]},{title:"Entropy",children:[]},{title:"Granulation",children:[]},{title:"Correlation",children:[]},{title:"K-means (clusters)",children:[]},{title:"K-means (centroids)",children:[]},{title:"PCA (eigen values)",children:[]},{title:"PCA (scores)",children:[]},{title:"PCA (loadings)",children:[]}]},{title:"Widgets",children:[{title:"Table",snippet:'\n\t\t\t\t\t// ==> snippet "Table" \n\t\t\t\t\tdml.select(from:"wdi-countries", return:"value")\n\t\t\t\t\tset("countries")\n\n\t\t\t\t\tdml.select(from:"sdi-wbgini", return:"value", where:<? d => d.value.year == "2015" ?>)\n\t\t\t\t\tset("gini")\n\n\t\t\t\t\tdml.select(from:"sdi-wbsf", return:"value", where:<? d => d.value.year == "2015" ?>)\n\t\t\t\t\tset("sf")\n\n\t\t\t\t\tget("countries")\n\t\t\t\t\tc.innerJoin(with:{{gini}}, on:"3_alpha_code")\n\t\t\t\t\tc.map(<? \n\t\t\t\t\t    d => ({\n\t\t\t\t\t        "3_alpha_code": d.left["3_alpha_code"],\n\t\t\t\t\t        country: d.left.short_name,\n\t\t\t\t\t        gini: d.right.value\n\t\t\t\t\t    })\n\t\t\t\t\t?>)\n\t\t\t\t\tc.innerJoin(with:{{sf}}, on:"3_alpha_code")\n\t\t\t\t\tc.map(<? \n\t\t\t\t\t    d => ({\n\t\t\t\t\t        country: d.left.country,\n\t\t\t\t\t        gini_2015: Number.parseFloat(Number.parseFloat(d.left.gini).toFixed(3)),\n\t\t\t\t\t        sf_2015: Number.parseFloat(Number.parseFloat(d.right.value).toFixed(3))\n\t\t\t\t\t    })\n\t\t\t\t\t?>)\n\n\t\t\t\t\tc.order(by:"sf_2015",as:"asc")\n\t\t\t\t\tset("data")\n\n\t\t\t\t\t<?javascript\n\t\t\t\t\t    $scope.result = {\n\t\t\t\t\t        dataset:{\n\t\t\t\t\t            "dimensions": Object.keys($scope.data[0]),\n\t\t\t\t\t            "source": $scope.data\n\t\t\t\t\t        }\n\t\t\t\t\t    };\n\t\t\t\t\t?>\n\t\t\t\t\treturn("result")\n\t\t\t\t\t// <== snippet "Table"\n\t\t\t\t'},{title:"Data Selector",snippet:'\n\t\t\t\t\t// ==> snippet "Data Selector"\n\t\t\t\t\tdml.select(from:"wdi-countries", return:"value")\n\t\t\t\t\tset("countries")\n\t\t\t\t\tdml.select(from:"sdi-wbsf", return:"value")\n\t\t\t\t\tc.unique("3_alpha_code")\n\t\t\t\t\tc.order()\n\t\t\t\t\tc.innerJoin(with:{{countries}}, on:<? (a,b)=> a == b["3_alpha_code"] ?>)\n\t\t\t\t\tc.map(<? \n\t\t\t\t\t    d => ({\n\t\t\t\t\t        title: d.right.short_name,\n\t\t\t\t\t        id: d.left\n\t\t\t\t\t    })\n\t\t\t\t\t?>)\n\t\t\t\t\t// <== snippet "Data Selector"\n\t\t\t\t'},{title:"Bar Chart",snippet:'\n\t\t\t\t\t\n\t\t\t\t\tdml.select(\n\t\t\t\t\t    from:"sdi-wbsf", \n\t\t\t\t\t    return:"value", \n\t\t\t\t\t    where:<? d => d.value.year == "2015" ?>,\n\t\t\t\t\t    into:"sdi_wbsf"\n\t\t\t\t\t)\n\n\t\t\t\t\tdml.select(from:"sdi-ni", \n\t\t\t\t\t    return:"value", \n\t\t\t\t\t    where:<? d => d.value.year == "2015" ?>,\n\t\t\t\t\t    into:"sdi_ni"\n\t\t\t\t\t)\n\n\t\t\t\t\tdml.select(from:"sdi-cp",\n\t\t\t\t\t    return:"value", \n\t\t\t\t\t    where:<? d => d.value.year == "2015" ?>,\n\t\t\t\t\t    into:\'sdi_cp\'\n\t\t\t\t\t)\n\n\t\t\t\t\tdml.select(from:"wdi-countries", return:"value")\n\n\t\t\t\t\tc.innerJoin(\n\t\t\t\t\t    with:{{sdi_wbsf}}, \n\t\t\t\t\t    on:"3_alpha_code", \n\t\t\t\t\t    return:<? d => {\n\t\t\t\t\t        let res = d.left\n\t\t\t\t\t        res["State Fragility"] = Number.parseFloat(Number.parseFloat(d.right.value).toFixed(3))\n\t\t\t\t\t        return res\n\t\t\t\t\t    } ?>\n\t\t\t\t\t)\n\n\t\t\t\t\tc.innerJoin(\n\t\t\t\t\t    with:{{sdi_ni}}, \n\t\t\t\t\t    on:"3_alpha_code", \n\t\t\t\t\t    return:<? d => {\n\t\t\t\t\t        let res = d.left\n\t\t\t\t\t        res["Prolifiration Index"] =  Number.parseFloat(Number.parseFloat(d.right.value).toFixed(3))\n\t\t\t\t\t        return res\n\t\t\t\t\t    } ?>\n\t\t\t\t\t)\n\n\t\t\t\t\tc.innerJoin(\n\t\t\t\t\t    with:{{sdi_cp}}, \n\t\t\t\t\t    on:"3_alpha_code", \n\t\t\t\t\t    return:<? d => {\n\t\t\t\t\t        let res = d.left\n\t\t\t\t\t        res["Corruption Perception"] =  Number.parseFloat(Number.parseFloat(d.right.value).toFixed(3))\n\t\t\t\t\t        return res\n\t\t\t\t\t    } ?>\n\t\t\t\t\t)\n\n\t\t\t\t\tset("data")\n\n\t\t\t\t\t<?javascript\n\n\t\t\t\t\t    $scope.res = {\n\t\t\t\t\t        \n\t\t\t\t\t        yAxis: ["State Fragility", "Prolifiration Index", "Corruption Perception"],     \n\t\t\t\t\t        series: $scope.data.map( d => {\n\t\t\t\t\t            return {\n\t\t\t\t\t                name: d.short_name,\n\t\t\t\t\t                selector: d["3_alpha_code"],\n\t\t\t\t\t                type:"bar",\n\t\t\t\t\t                data: [d[\'State Fragility\']]\n\t\t\t\t\t                        .concat([d[\'Prolifiration Index\']])\n\t\t\t\t\t                        .concat([d[\'Corruption Perception\']])\n\t\t\t\t\t            }\n\t\t\t\t\t        })\n\t\t\t\t\t    };    \n\n\t\t\t\t\t?>\n\n\t\t\t\t\treturn ("res")\n\n\t\t\t\t'},{title:"Line Chart",children:[]},{title:"Scatter Chart",children:[]},{title:"Radar Chart",children:[]},{title:"Geo Chart",children:[]}]}],d={props:["editor"],methods:{insert(t){this.editor&&(this.editor.insert(t),this.$emit("select"))}},data:()=>({open:[],active:[],tree:o})},c=d,h=(n("c8fb"),n("2877")),u=n("fef8"),p=n.n(u),m=n("eb2a"),f=Object(h["a"])(c,r,l,!1,null,null,null),g=f.exports;p()(f,{VTreeview:m["a"]});var b={name:"flowchart-editor",components:{editor:a["default"],"snippet-tree":g},props:["config"],computed:{embeddedSource(){return this.config.data.embedded}},data:()=>({sourceTypes:["url","dps","embedded"],mode:"",snippets:!1,editor:null}),methods:{setEditor(t){this.editor=t},onUpdateSource(t){this.config.data.embedded=t},onUpdateScript(t){this.config.data.script=t}},created(){this.mode=this.config.data.source,this.clearWatch=this.$watch("mode",()=>{this.config.data.source=this.mode})},destroyed(){this.clearWatch()}},v=b,x=n("8336"),y=n("b0af"),S=n("2b5d"),w=n("a523"),I=n("169a"),_=n("0e8f"),C=n("a722"),V=n("2fa4"),D=n("8654"),j=Object(h["a"])(v,i,s,!1,null,null,null);e["default"]=j.exports;p()(j,{VBtn:x["a"],VCard:y["a"],VCombobox:S["a"],VContainer:w["a"],VDialog:I["a"],VFlex:_["a"],VLayout:C["a"],VSpacer:V["a"],VTextField:D["a"]})}}]);
//# sourceMappingURL=chunk-154305e2.2c4b1039.js.map