(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1643eeb0"],{"0e2f":function(t,e,i){},"3ebb":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dj-checkboxes"},[t.options&&t.options.data?e("div",{class:t.options.decoration?t.getPropertyValue(t.options.decoration.classes):"",style:t.options.decoration?t.getPropertyValue(t.options.decoration.style):""},t._l(t.vars,(function(i,o){return e("v-checkbox",{key:o,attrs:{"hide-details":"",disabled:!!t.options.data&&t.getPropertyValue(t.options.data.disabled),readonly:!!t.options.data&&t.getPropertyValue(t.options.data.readonly),color:t.options.decoration?t.getPropertyValue(t.options.decoration.color):"",flat:!!t.options.decoration&&t.getPropertyValue(t.options.decoration.flat),inset:!!t.options.decoration&&t.getPropertyValue(t.options.decoration.inset),dense:!!t.options.decoration&&t.getPropertyValue(t.options.decoration.dense),messages:t.options.decoration?t.getPropertyValue(t.options.decoration.messages):[]},on:{change:t.inputData},scopedSlots:t._u([{key:"label",fn:function(){return[e("div",{class:t.options.decoration?t.getPropertyValue(t.options.decoration.labelClass):"",style:t.options.decoration?t.getPropertyValue(t.options.decoration.labelStyle):""},[t._v("\n          "+t._s(t.options.data?t.getPropertyValue(i):"")+"\n        ")])]},proxy:!0}],null,!0),model:{value:t.selection[o],callback:function(e){t.$set(t.selection,o,e)},expression:"selection[index]"}})})),1):t._e()])},n=[],s=i("b187"),a=s["a"],r=(i("7174"),i("2877")),_=i("fef8"),c=i.n(_),d=i("ac7c"),l=Object(r["a"])(a,o,n,!1,null,"bb2363bc",null);e["default"]=l.exports;c()(l,{VCheckbox:d["a"]})},"6ca7":function(t,e,i){},7174:function(t,e,i){"use strict";i("0e2f")},"8ab0":function(t,e,i){"use strict";var o=function(){var t=this,e=t._self._c;return e("config-dialog",{attrs:{options:t.props,submit:t.submit}})},n=[],s=i("a410"),a={name:"ManyOfConfig",components:{"config-dialog":s["a"]},props:["options","submit"],computed:{props(){return{icon:this.options.config.icon,title:`edu-editor-widget: ${this.options.config.id} ${this.options.config.name}`,config:this.options.config,editorTree:this.editorTree}}},data(){return{editorTree:[{name:"Configuration",children:[{name:"Widget",editor:()=>i.e("chunk-2d226cca").then(i.bind(null,"e9cc"))},{name:"Style",editor:()=>i.e("chunk-55e9e634").then(i.bind(null,"c59e"))},{name:"Options",editor:()=>Promise.all([i.e("chunk-3d2e32d9"),i.e("chunk-0ad95c16")]).then(i.bind(null,"41f1"))}]}]}}},r=a,_=i("2877"),c=Object(_["a"])(r,o,n,!1,null,null,null);e["a"]=c.exports},ac7c:function(t,e,i){"use strict";i("6ca7"),i("ec29");var o=i("9d26"),n=i("c37a"),s=i("fe09");e["a"]=s["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...n["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(o["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},b187:function(module,__webpack_exports__,__webpack_require__){"use strict";var _mixins_core_djvue_mixin_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("c555"),_mixins_core_listener_mixin_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("4e14"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("2ef0"),lodash__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__),_many_of_config_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("8ab0");__webpack_exports__["a"]={name:"many-of-widget",icon:"mdi-checkbox-marked-outline",mixins:[_mixins_core_djvue_mixin_js__WEBPACK_IMPORTED_MODULE_0__["a"],_mixins_core_listener_mixin_js__WEBPACK_IMPORTED_MODULE_1__["a"]],props:["config"],data:()=>({response:"",selection:[],options:null}),computed:{vars(){let t=this.getPropertyValue(this.options.data.variants);return t&&Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(t)?t:[]}},watch:{options:{handler(){this.upd()},deep:!0},config:{handler(){this.config&&(this.options=this.config.data.embedded)},deep:!0}},methods:{upd(){if(this.options&&this.options.data){this.options.decoration=this.config.data.embedded.decoration;let t=this.getPropertyValue(this.options.data.value)||[],e=this.getPropertyValue(this.options.data.variants||[]);if(e&&Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(e)){let i=e.map(e=>t.includes(e));this.selection=i}}},getPropertyValue(v){try{if(/^\{\{.+\}\}$/gi.test(v))return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this,v.replace("{{","").replace("}}","").trim());if(/^\$\{.+\}$/gi.test(v)){let f=`(${v.replace("${","").replace(/}$/gim,"")})`;return eval(f)}return v}catch(e){return this.isProductionMode?"":"Cannot getPropertyValue: "+e.toString()}},getOptions(){return this.options},onUpdate({data:t},e){e?(e.override&&Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(this,e.override,t),e.extend&&Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(this,e.extend,Object(lodash__WEBPACK_IMPORTED_MODULE_2__["extend"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this,e.extend),t))):this.options=t;let i=Object(lodash__WEBPACK_IMPORTED_MODULE_2__["extend"])({},this.options);this.options=null,this.$nextTick(()=>{this.options=i})},onReconfigure(t){return this.$dialogManager.showAndWait(_many_of_config_vue__WEBPACK_IMPORTED_MODULE_3__["a"],{width:"90%"},{config:t})},inputData(data){if(!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.options)&&!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.options.data)&&!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.options.data.value)){if(/^\{\{.+\}\}$/gi.test(this.options.data.value))Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(this,this.options.data.value.replace("{{","").replace("}}","").trim(),this.vars.filter((t,e)=>this.selection[e]));else if(/^\$\{.+\}$/gi.test(this.options.data.value)){let f=this.options.data.value.replace("${","").replace(/}$/gim,"").replace(/this\./gim,"");f=f+" = "+JSON.stringify(this.vars.filter((t,e)=>this.selection[e])),eval(f)}else this.options.data.value=this.vars.filter((t,e)=>this.selection[e]);let event=this.options.data.event||"input-data";this.emit(event,this,this.vars.filter((t,e)=>this.selection[e]))}}},mounted(){this.$emit("init")},created(){this.options=this.config.data.embedded}}}}]);
//# sourceMappingURL=chunk-1643eeb0.62259919.js.map