(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-950f2a84"],{1476:function(t,e,n){"use strict";n("5ce3")},"5ce3":function(t,e,n){},e2a9:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return t.options?e("div",{staticClass:"d-flex",class:t.options.decoration.classes},t._l(t.options.buttons,(function(n,o){return e("div",{key:o,class:`${n.decoration&&n.decoration.classes||""} ${n.spacer?"spacer":""}`},[n.avatar?e("v-avatar",[e("dj-img",{attrs:{src:t.getPropertyValue(n.avatar.src),icon:t.getPropertyValue(n.avatar.icon)}})],1):t._e(),n.icon&&!n.text?e("v-icon",[t._v("\n       "+t._s(t.getPropertyValue(n.icon))+"\n     ")]):t._e(),n.text&&!n.icon?e("div",[t._v("\n       "+t._s(t.getPropertyValue(n.text))+"\n     ")]):t._e(),!n.textField||n.icon||n.text?t._e():e("v-text-field",{attrs:{label:n.label||"label",value:n.model,outlined:"",dense:"","hide-details":!0},model:{value:n.model,callback:function(e){t.$set(n,"model",e)},expression:"b.model"}}),n.spacer||n.menu||n.text||n.icon||n.avatar||n.textField?t._e():e("v-btn",{staticClass:"mr-1",staticStyle:{"text-transform":"none !important","font-weight":"inherit !important","letter-spacing":"inherit !important","font-size":"inherit !important"},attrs:{disabled:n.disabled,color:n.decoration&&n.decoration.color||"",outlined:n.decoration&&n.decoration.outlined||!1,rounded:n.decoration&&n.decoration.rounded||!1,text:n.decoration&&n.decoration.text||!1},on:{click:function(e){return e.stopPropagation(),t.resolve(n)}}},[n.decoration&&n.decoration.icon?e("v-icon",{attrs:{left:""}},[t._v("\n         "+t._s(t.getPropertyValue(n.decoration.icon))+"\n       ")]):t._e(),t._v("\n       "+t._s(t.getPropertyValue(n.title))+"\n     ")],1),n.spacer||!n.menu||n.text||n.icon||n.avatar||n.textField?t._e():e("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:o,attrs:i}){return[e("v-btn",t._g(t._b({staticClass:"mr-1",staticStyle:{"text-transform":"none !important","font-weight":"inherit !important","letter-spacing":"inherit !important","font-size":"inherit !important"},attrs:{disabled:n.disabled,color:n.decoration&&n.decoration.color||"",outlined:n.decoration&&n.decoration.outlined||!1,rounded:n.decoration&&n.decoration.rounded||!1,text:n.decoration&&n.decoration.text||!1}},"v-btn",i,!1),o),[n.decoration&&n.decoration.icon?e("v-icon",{attrs:{left:""}},[t._v("\n             "+t._s(t.getPropertyValue(n.decoration.icon))+"\n           ")]):t._e(),t._v("\n           "+t._s(n.title)+"\n           "),e("v-icon",{attrs:{right:""}},[t._v("\n             mdi-menu-down\n           ")])],1)]}}],null,!0)},[e("v-list",{attrs:{dense:""}},t._l(n.menu,(function(n,o){return e("v-list-item",{key:o,on:{click:function(e){return t.resolve(n)}}},[n.icon?e("v-list-item-icon",{staticClass:"mr-1"},[e("v-icon",{domProps:{textContent:t._s(n.icon)}})],1):t._e(),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(n.title)}})],1)],1)})),1)],1)],1)})),0):t._e()},i=[],a=n("c555"),r=n("4e14"),s=n("2ef0"),c=function(){var t=this,e=t._self._c;return e("config-dialog",{attrs:{options:t.props,submit:t.submit}})},d=[],l=n("a410"),u={name:"ButtonBarConfig",components:{"config-dialog":l["a"]},props:["options","submit"],computed:{props(){return{icon:this.options.config.icon,title:`edu-editor-widget: ${this.options.config.id} ${this.options.config.name}`,config:this.options.config,editorTree:this.editorTree}}},data(){return{editorTree:[{name:"Configuration",children:[{name:"Widget",editor:()=>n.e("chunk-2d226cca").then(n.bind(null,"e9cc"))},{name:"Style",editor:()=>n.e("chunk-55e9e634").then(n.bind(null,"c59e"))},{name:"Options",editor:()=>Promise.all([n.e("chunk-3d2e32d9"),n.e("chunk-0ad95c16")]).then(n.bind(null,"41f1"))}]}]}}},p=u,m=n("2877"),f=Object(m["a"])(p,c,d,!1,null,null,null),v=f.exports,g={name:"button-bar-widget",icon:"mdi-table-row",mixins:[a["a"],r["a"]],methods:{getPropertyValue(t){return/^\{\{.+\}\}$/gi.test(t)?Object(s["get"])(this,t.replace("{{","").replace("}}","").trim()):t},getOptions(){return this.options},onUpdate({data:t}){this.config.data.embedded=[],this.$nextTick(()=>{this.config.data.embedded=t})},resolve(t){let e=t.event||"push";this.emit(e,t)},onReconfigure(t){return this.$dialogManager.showAndWait(v,{width:"90%"},{config:t})}},props:["config"],computed:{options(){return this.config.data.embedded}},mounted(){this.$emit("init")}},h=g,_=(n("1476"),n("fef8")),b=n.n(_),x=n("8212"),V=n("8336"),y=n("132d"),k=n("8860"),w=n("da13"),P=n("5d23"),C=n("34c3"),$=n("e449"),I=n("8654"),T=Object(m["a"])(h,o,i,!1,null,"9e0fb134",null);e["default"]=T.exports;b()(T,{VAvatar:x["a"],VBtn:V["a"],VIcon:y["a"],VList:k["a"],VListItem:w["a"],VListItemContent:P["a"],VListItemIcon:C["a"],VListItemTitle:P["c"],VMenu:$["a"],VTextField:I["a"]})}}]);
//# sourceMappingURL=chunk-950f2a84.75222ec2.js.map