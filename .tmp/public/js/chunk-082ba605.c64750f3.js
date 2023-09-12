(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-082ba605"],{"7b27":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[e.isProductionMode&&e.form&&0==e.access.available?t("v-container",[t("v-layout",{attrs:{column:""}},[t("v-flex",{attrs:{xs12:""}},[t("h3",{staticClass:"headline warning--text font-weight-light"},[e._v(e._s(e.access.title))]),t("p",{staticClass:"subheading warning--text font-weight-light"},[e._v(e._s(e.access.note))])]),t("v-flex",{attrs:{xs12:""}},[t("v-layout",{attrs:{row:"","justify-end":""}},["users"==e.access.type?t("v-btn",{attrs:{text:"",color:"warning"},on:{click:function(t){return e.$djvue.login()}}},[e._v("Login with Google")]):e._e()],1)],1)],1),t("v-divider"),t("v-layout",{attrs:{"align-center":"","justify-end":"",row:""}},[t("p",{staticClass:"ma-0 secondary--text font-weight-light",staticStyle:{"font-size":"10px"}},[e._v("JACE FORMS SERVICE 2018-2021")])])],1):e._e(),e.isProductionMode&&e.form&&1==e.access.available?t("v-container",[e.form.config.access.enabled?e._e():t("v-layout",{staticClass:"mx-0 my-2",attrs:{"align-center":"","justify-end":"",row:""}},[t("p",{staticClass:"subheading warning--text"},[e._v("FORM IS CLOSED")])]),e.form.config.access.enabled?t("v-layout",{staticClass:"mx-0 my-2",attrs:{"align-center":"","justify-end":"",row:""}},[t("div",{staticClass:"primary--text"},[e._v("\n          Respondent: \n        ")]),t("v-avatar",e._g({staticClass:"ml-2",staticStyle:{border:"1px solid rgba(255, 255, 255, 0.3)"},attrs:{size:"32"}},e.on),[t("dj-img",{attrs:{src:e.app.user.photo,icon:"mdi-account"}})],1),t("div",{staticClass:"caption pl-2"},[e._v("\n          "+e._s(e.app.user.name)+"\n        ")]),t("v-spacer"),t("v-btn",{attrs:{text:"",outlined:"",color:"primary",disabled:!e.needUpdateAnswer},on:{click:function(t){return e.submitForm()}}},[e._v("Submit form")])],1):e._e(),t("v-divider"),t("v-layout",{attrs:{"align-center":"","justify-end":"",row:""}},[t("p",{staticClass:"ma-0 secondary--text font-weight-light",staticStyle:{"font-size":"10px"}},[e._v("JACE FORMS SERVICE 2018-2021")])])],1):e._e(),e.isProductionMode?e._e():t("div",[e.loading?t("div",{staticClass:"text-xs-center"}):t("v-tabs",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[t("v-tab",{key:"general",attrs:{ripple:""}},[e._v("General")]),t("v-tab",{key:"access",attrs:{ripple:""}},[e._v("Access")]),"invited"==e.form.config.access.type?t("v-tab",{key:"respondents",attrs:{ripple:""}},[e._v("Respondents")]):e._e(),t("v-tab",{key:"statistic",attrs:{ripple:""}},[e._v("Statistic")]),t("v-tab-item",{key:"general",attrs:{ripple:""}},[t("general-tab",{attrs:{form:e.form},on:{update:e.updateFormLocale}})],1),t("v-tab-item",{key:"access",attrs:{ripple:""}},[t("v-card",{attrs:{flat:""}},[t("v-card-text",[t("access-tab",{attrs:{form:e.form},on:{update:e.updateFormAccess}})],1)],1)],1),"invited"==e.form.config.access.type?t("v-tab-item",{key:"respondents",attrs:{ripple:""}},[t("v-card",{attrs:{flat:""}},[t("v-card-text",[t("respondents-tab",{attrs:{form:e.form},on:{update:e.updateFormAccess}})],1)],1)],1):e._e(),t("v-tab-item",{key:"statistic",attrs:{ripple:""}},[t("v-card",{attrs:{flat:""}},[t("v-container",[t("v-layout",[t("p",{staticClass:"subheading"},[e._v("\n                Form "+e._s(`${e.form.config.access.enabled?"was opened":"was closed"} ${e.form.config.access.lastNotificatedAt?e.timeAgo(e.form.config.access.lastNotificatedAt):""}`)+"\n              ")])]),t("v-layout",{attrs:{row:"","justify-end":""}},[t("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.onExportResponses}},[e._v("Export Responses")])],1),t("v-divider"),t("echart",{attrs:{options:e.eChartOptions,height:"150"}})],1)],1)],1)],1)],1)],1)},s=[],i=r("c555"),a=r("4e14"),o=r("c7cc"),d=r("2ef0"),c={methods:{getQueryString(e){var t={};let r=JSON.parse(JSON.stringify(window.location.href));return r.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),(function(e,r,n,s){t[r]=s})),e?t[e]:t},accessForOwner(){return console.log("accessForOwner ",this.app.user.isAdmin||this.app.user.isOwner||this.app.user.isCollaborator),this.app.user.isAdmin||this.app.user.isOwner||this.app.user.isCollaborator},accessIsAlowed(){if(!this.form.config.access.enabled&&!this.app.user.isAdmin&&!this.app.user.isOwner&&!this.app.user.isCollaborator)return{available:!1,title:"Access denied",note:`Form was closed ${this.form.config.access.lastNotificatedAt?this.timeAgo(this.form.config.access.lastNotificatedAt):""}.`};if(this.app.user.apikey=this.getQueryString("apikey"),"any"==this.form.config.access.type)return this.app.user.id=this.$djvue.randomName(),this.app.user.name="Ananimous",this.app.user.icon="mdi-account-circle-outline",this.app.user.photo=".",{available:!0};if(console.log("Access for user",this.app.user.email),"users"==this.form.config.access.type)return this.app.user.email?{available:!0}:{available:!1,title:"Access denied",note:"Access is alowed for registered respondents. Use your Google+ account for signin.",type:"users"};if("invited"==this.form.config.access.type){if(!this.app.user.id&&!this.app.user.apikey)return{available:!1,title:"Access denied",note:"Access is alowed for invited respondents only."};let e=Object(d["find"])(this.form.config.access.users,e=>e.id&&this.app.user.id?e.id==this.app.user.id:!(!e.apikey||!this.app.user.apikey)&&e.apikey==this.app.user.apikey);return e?(this.app.user=e,{available:!0}):{available:!1,title:"Access denied",note:"Access is alowed for invited respondents only."}}return{available:!1}}}},l={"general-tab":()=>r.e("chunk-2d0ab13b").then(r.bind(null,"1479")),"metadata-tab":()=>Promise.all([r.e("chunk-3faa419a"),r.e("chunk-18bb8606")]).then(r.bind(null,"e251")),"access-tab":()=>r.e("chunk-513ca2a0").then(r.bind(null,"c93e")),"respondents-tab":()=>r.e("chunk-e803df42").then(r.bind(null,"8142")),echart:()=>Promise.all([r.e("chunk-2ecfd031"),r.e("chunk-c2702fe6")]).then(r.bind(null,"3c5a"))},p=r("c1df"),m=r.n(p),f={name:"form-widget",icon:"mdi-cards-variant",mixins:[i["a"],a["a"],o["a"],c],components:l,computed:{eChartOptions:function(){return this.chartOptions||{}}},methods:{onExportResponses(){this.exportResponses(this.form.id).then(e=>{window.location.href=e})},timeAgo(e){return m()(new Date(e)).fromNow()},onPageStart(){this.loadForm(this.config.form).then(this.initiateForm).catch(e=>{console.error(e.toString())})},onLayoutStart(){this.loadForm(this.config.form).then(e=>{this.initiateForm(e)}).catch(e=>{console.error(e.toString())})},onSaveAppConfig(){this.loading=!0,this.updateForm(this.form).then(()=>{this.loading=!1}).catch(e=>{console.error(e.toString())})},submitForm(){this.needExtendForm?this.extendForm(this.form).then(()=>{this.updateAnswer(this.answer).then(()=>{this.needExtendForm=!1,this.needUpdateAnswer=!1,this.setNeedSave(!1)})}).catch(e=>{console.error(e.toString())}):this.updateAnswer(this.answer).then(()=>{this.needExtendForm=!1,this.needUpdateAnswer=!1,this.setNeedSave(!1)}).catch(e=>{console.error(e.toString())})},isDeleteAvailable(){let e=[];Object(d["toPairs"])(this.app.config.skin.holders).map(e=>e[1].widgets).forEach(t=>{e=e.concat(t)}),Object(d["toPairs"])(this.app.currentPage.holders).map(e=>e[1].widgets).forEach(t=>{e=e.concat(t)});let t=e.filter(e=>"question-widget"==e.type||"form-response-widget"==e.type);return!(t.length>0)||(this.$djvue.warning({type:"error",title:"Cannot delete form",text:"One or many questions or response reports detected on page. Delete all questions and reports before."}),!1)},onDelete(){this.deleteForm(this.form.id)},updateFormMetadata(e){this.form.metadata=e,this.setNeedSave(!0)},updateFormLocale(e){this.form.config.locale=e,this.setNeedSave(!0)},updateFormAccess(e){this.loading=!0,e.enabled!=this.config.enabled&&(this.form.config.access.lastNotificatedAt=new Date),this.form.config.access=e,this.updateForm(this.form).then(()=>{this.loading=!1,this.setNeedSave(!0)})},createFormRequest(){let e="\n<p>\n  Dear {{respondent.name || 'Respondent'}}!\n</p> \n<p>\n  We invite you to take part in the survey \n  <a href=\"{{metadata.app_url.value}}\">\n    {{metadata.app_title.value}}\n  </a>\n</p>\n\n",t={metadata:{app_name:{value:this.app.config.name,required:!0,editable:!1},app_title:{value:this.app.config.title,required:!0,editable:!1},app_url:{value:window.location.href,required:!0,editable:!1},app_icon:{value:this.app.config.icon,required:!0,editable:!1},form_title:{value:"Form title...",required:!0,editable:!0},form_note:{value:"Form note...",required:!0,editable:!0}},config:{locale:this.$i18n.locale,access:{type:"any",enabled:!1,users:[],notificationTemplate:e,notificationSubject:"DJVUE-FORMS"},questions:[]}};return this.createForm(t)},loadStatistic(){this.getStat(this.form.id).then(e=>{if(console.log("**************",e),0==e.events.total)return!0;this.stat=e,this.emit("question-set-stat",this.stat);let t=this.getResponseDynamic(this.stat),r=Object(d["max"])(t.map(e=>e.value));return this.chartOptions={redraw:!1,tooltip:{position:"top",formatter:e=>{let t=e.data[0],n=e.data[1];return t=Object(d["isNumber"])(t)?t.toFixed(2):t,n=Math.round(n*r)+" resp.",t+", "+n}},title:[{top:5,textBaseline:"middle",text:"respondent pulse",textStyle:{fontSize:12,fontWeight:"normal"}}],color:[this.$vuetify.theme.themes.light.primary],singleAxis:[{left:150,top:"5%",height:"80%",type:"category",boundaryGap:!1,data:t.map(e=>e.title),axisLabel:{interval:2},axisLine:{show:!0,lineStyle:{width:.5}},axisTick:{show:!1}}],series:[{singleAxisIndex:0,coordinateSystem:"singleAxis",type:"scatter",data:t.map(e=>[e.title,e.height]),symbolSize:function(e){return 80*e[1]+3},itemStyle:{opacity:.5}}]},!0}).catch(e=>{this.chartOptions={},console.error("Cannot load statistic ",e)})},initiateForm(e){if(!e)return void(this.isProductionMode?this.$djvue.warning({type:"error",title:"Application is corrupted"}):this.$djvue.warning({type:"warning",title:"Form is imported from another JACE service",text:"The form for this application will be created"}).then(()=>{this.p=this.progress({text:"",maxStage:5,title:"Recreate Form"}),this.createFormRequest().then(e=>{console.log(e),this.p.set({text:"Scan widgets in current page"}),this.config.form=e.id,e.config.questions=Object(d["flattenDeep"])(Object(d["toPairs"])(this.app.currentPage.holders).map(e=>e[1].widgets)).filter(e=>"question-widget"==e.type).map(e=>({id:e.id,options:e.question.options})),console.log("Updated form",e),this.p.set({text:"Syncronize Form with JACE service"}),this.updateForm(e).then(()=>{this.p.set({text:"Initiate Form on current page"}),this.initiateForm(e),this.p.set({text:"Form ready for use"}),setTimeout(()=>{this.p.cancel(),this.setNeedSave(!0)},800)})})}));e.metadata.app_url.value.startsWith(window.location.origin+window.location.pathname)?window.location.href!=e.metadata.app_url.value?this.isProductionMode?(this.$djvue.warning({type:"error",title:"Application is corrupted"}),this.emit("question-set-disable",!0)):this.$djvue.confirm({type:"warning",title:"Form and page mismath",text:`Current url ${window.location.href} but form ${e.id} links to ${e.metadata.app_url.value}`,resolveText:"Clone form",rejectText:"Fix app link"}).then(()=>{this.cloneForm(e).then(e=>{this.config.form=e.id,this.initiateForm(e),this.emit("question-set-disable",!1),this.setNeedSave(!0)})}).catch(()=>{e.metadata.app_url.value=window.location.href,this.updateFormMetadata(e.metadata),this.loading=!0,this.updateForm(this.form).then(()=>{this.loading=!1,this.emit("question-set-disable",!1)})}):this.emit("question-set-disable",!1):this.isProductionMode?(this.$djvue.warning({type:"error",title:"Application is corrupted"}),e.config.access.enabled&&(e.config.access.enabled=!1,this.updateFormAccess(e.access))):this.$djvue.warning({type:"warning",title:"Form is imported from another application",text:"The form for this application will be cloned"}).then(()=>{this.cloneForm(e).then(e=>{this.config.form=e.id,this.initiateForm(e),this.setNeedSave(!0)})}),this.form=e,this.emit("form-update",e);let t=e.config.locale||"en";this.setLocale(t),e.config.access.users=e.config.access.users||[],e.config.questions=e.config.questions||[],this.loading=!1,this.access=this.accessIsAlowed(),this.access.available||!this.isProductionMode?(this.emit("question-access",!0),!this.access.available&&this.isProductionMode||(this.emit("question-set-options",this.form.config.questions),this.loadAnswer(this.app.user,this.form.id).then(e=>{this.answer=e,this.emit("question-set-answers",this.answer.data),this.emit("answer-update",this.answer.data)}),this.isProductionMode?this.chartOptions={}:this.loadStatistic())):this.emit("question-access",!1)},redrawStat(){this.$nextTick(()=>{this.chartOptions&&(this.chartOptions.redraw=!this.chartOptions.redraw)})}},props:["config"],watch:{active(){this.redrawStat()},isProductionMode(e){Object(d["isUndefined"])(e)||null==e||this.initiateForm(this.form)}},created(){this.config.form||this.createFormRequest().then(e=>{this.config.form=e.id,this.initiateForm(e),this.setNeedSave(!0)}),this.on({event:"form-export",callback:()=>{this.exportForm()},rule:()=>!0}),this.on({event:"form-import",callback:e=>{this.emit("holder-import-widgets",this.$parent.$parent,e)},rule:()=>!0}),this.on({event:"form-response",callback:()=>{this.answer&&(this.emit("form-update",this.form),this.emit("answer-update",this.answer))},rule:()=>!0}),this.on({event:"form-insert-question",callback:e=>{if(!this.form)return;this.form.config.questions=this.form.config.questions||[];let t=Object(d["findIndex"])(this.form.config.questions,t=>t.id==e.id);t<0?(this.form.config.questions.push(e),this.loading=!0,this.updateForm(this.form).then(()=>{this.loading=!1,this.emit("question-set-options",this.form.config.questions),this.emit("form-update",this.form)})):(this.loading=!1,this.$nextTick(()=>{this.emit("question-set-options",this.form.config.questions),this.emit("form-update",this.form)}))},rule:()=>!0}),this.on({event:"form-delete-question",callback:e=>{let t=Object(d["findIndex"])(this.form.config.questions,t=>t.id==e);t>=0&&this.form.config.questions.splice(t,1),this.loading=!0,this.updateForm(this.form).then(()=>{this.emit("form-update",this.form),this.loading=!1})},rule:()=>!0}),this.on({event:"form-update-answer",callback:e=>{if(!this.answer)return;let t=Object(d["findIndex"])(this.answer.data,t=>t.id==e.id);t>=0?this.answer.data.splice(t,1,e):this.answer.data.push(e),this.needUpdateAnswer=!0,this.emit("answer-update",this.answer),this.setNeedSave(!0)},rule:()=>!0}),this.on({event:"form-extend",callback:()=>{this.answer&&(this.needExtendForm=!0,this.needUpdateAnswer=!0,this.setNeedSave(!0))},rule:()=>!0}),this.on({event:"form-get-stat",callback:()=>{this.answer&&(this.stat?this.emit("question-set-stat",this.stat):this.loadStatistic())},rule:()=>!0})},mounted(){this.$emit("init")},data:()=>({active:null,form:null,loading:!0,access:null,answer:null,needExtendForm:!1,needUpdateAnswer:!1,stat:null,chartOptions:null,p:null})},u=f,h=r("2877"),g=r("fef8"),v=r.n(g),y=r("8212"),w=r("8336"),_=r("b0af"),b=r("99d9"),q=r("a523"),$=r("ce7e"),x=r("0e8f"),A=r("a722"),F=r("2fa4"),S=r("71a3"),j=r("c671"),k=r("fe57"),O=Object(h["a"])(u,n,s,!1,null,null,null);t["default"]=O.exports;v()(O,{VAvatar:y["a"],VBtn:w["a"],VCard:_["a"],VCardText:b["c"],VContainer:q["a"],VDivider:$["a"],VFlex:x["a"],VLayout:A["a"],VSpacer:F["a"],VTab:S["a"],VTabItem:j["a"],VTabs:k["a"]})},a523:function(e,t,r){"use strict";r("20f6"),r("4b85");var n=r("e8f2"),s=r("d9f7");t["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:r,children:n}){let i;const{attrs:a}=r;return a&&(r.attrs={},i=Object.keys(a).filter(e=>{if("slot"===e)return!1;const t=a[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t})),t.id&&(r.domProps=r.domProps||{},r.domProps.id=t.id),e(t.tag,Object(s["a"])(r,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(i||[])}),n)}})},c671:function(e,t,r){"use strict";var n=r("1e6c");t["a"]=n["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const e=n["a"].options.methods.genWindowItem.call(this);return e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id||this.value,e}}})},c7cc:function(e,t,r){"use strict";var n=r("c1df"),s=r.n(n),i=r("2ef0"),a="// answer-export.dps\r\n// export responses by form id \r\n// $scope.form is param of script (  form id )\r\n// returns url for responses downloading\r\n\r\n \r\nservice.mongodb.aggregate(\r\n    from:\"dj-storage.answer\",\r\n    query: <? [\r\n          {\r\n            '$match': {\r\n              'form': $scope.form\r\n            }\r\n          }, {\r\n            '$sort': {\r\n              'updatedAt': -1\r\n            }\r\n          }\r\n        ]\r\n    ?>\r\n)\r\n\r\nset(\"responses\")\r\n\r\n\r\nservice.mongodb.aggregate(\r\n    from:\"dj-storage.form\",\r\n    query: <? [\r\n          {\r\n            '$match': {\r\n              'id': $scope.form\r\n            }\r\n          }\r\n        ]\r\n    ?>\r\n)\r\n\r\nset(\"form\")\r\n\r\n\r\n<?javascript\r\n    $scope.form = $scope.form[0]\r\n    \r\n    \r\n    $scope.responses = $scope.responses.map( (r, index) => ({\r\n        response_id: r.id\r\n        ,form: r.form\r\n        ,access: r.updatedAt\r\n        ,respondent_id: (r.user.id) ? r.user.id : null\r\n        ,respondent_apikey: (r.user.apikey) ? r.user.apikey : null\r\n        ,respondent_index: (!r.user.id && !r.user.apikey) ? index : null\r\n        ,data: r.data\r\n    }));\r\n    \r\n    \r\n    \r\n    let rawData = []\r\n    $scope.responses.forEach( r => {\r\n        if(r.data)\r\n            r.data.forEach( q => {\r\n                let q_desc = _.find($scope.form.config.questions, qd => qd.id == q.id)\r\n                rawData.push({\r\n                     response_id: r.response_id\r\n                    ,response_valid: r.response_valid\r\n                    ,form: r.form\r\n                    ,access: r.access\r\n                    ,respondent_id: r.respondent_id\r\n                    ,respondent_apikey: r.respondent_apikey\r\n                    ,respondent_index: r.respondent_index\r\n                    ,question_id: q.id\r\n                    ,question_type: q.type\r\n                    ,question_required: (q_desc) ? q_desc.options.required : null\r\n                    ,response_valid: q.valid\r\n                    ,question_title: (q_desc) ? q_desc.options.title : null\r\n                    ,question_note: (q_desc) ? q_desc.options.note : null\r\n                    ,data: q.data\r\n                })          \r\n            })\r\n    })\r\n    \r\n    rawData = rawData.filter( \r\n        r => _.find($scope.form.config.questions, qd => r.question_id == qd.id)\r\n    );\r\n    \r\n    let rawData1 = []\r\n    \r\n    rawData.forEach( r => {\r\n        r.data.forEach( d => {\r\n            \r\n            let conf = _.find($scope.form.config.questions, q => q.id == r.question_id)\r\n            \r\n            let nominal = null;\r\n            let entity_1 = null;\r\n            let entity_2 = null;\r\n            let factor = null;\r\n            let effect = null;\r\n            let value = null;\r\n            let min = null;\r\n            let max = null;\r\n            let nominal_title = null;\r\n            let entity_1_title = null;\r\n            let entity_2_title = null;\r\n            let factor_title = null;\r\n            let effect_title = null;\r\n            let value_title = null;\r\n            let v;\r\n            \r\n            switch (r.question_type) {\r\n              \r\n                case 'One of many selection' : \r\n                case 'Many of many selection' : \r\n                    let n = _.find(conf.options.nominals, n => n.id == d)\r\n                \r\n                    nominal = d;\r\n                    nominal_title = n.title\r\n                    value = true;\r\n                    break\r\n              \r\n                case 'Association' : \r\n                    let e1 = _.find(conf.options.entities, n => n.id == d.e1)\r\n                    let e2 = _.find(conf.options.entities, n => n.id == d.e2)\r\n                    v = conf.options.scale[d.value-1]\r\n                    entity_1 = d.e1;\r\n                    entity_1_title = e1.title\r\n                    entity_2 = d.e2;\r\n                    entity_2_title = e2.title\r\n                    value = d.value;\r\n                    value_title = (v) ? (v.title) ? v.title : null : null\r\n                    break\r\n                    \r\n                case 'Influence' : \r\n                    let f = _.find(conf.options.factors, n => n.id == d.e1)\r\n                    let e = _.find(conf.options.effects, n => n.id == d.e2)\r\n                    v = conf.options.scale[d.value-1]\r\n                    \r\n                    factor = d.e1;\r\n                    factor_title = f.title\r\n                    effect = d.e2;\r\n                    effect_title = e.title\r\n                    value = d.value;\r\n                    value_title = (v) ? (v.title) ? v.title : null : null\r\n                    break\r\n                    \r\n                case 'Range':\r\n                    min = d[0];\r\n                    max = d[1];\r\n                    value = true;\r\n                    break\r\n                    \r\n                case 'Date':\r\n                    value = d\r\n                    break    \r\n                \r\n                case 'Rate':\r\n                    v = conf.options.scale[d-1]\r\n                    value = d\r\n                    value_title = v.title\r\n                    break\r\n            }\r\n            \r\n            \r\n            rawData1.push({\r\n                 response_id: r.response_id\r\n                ,response_valid: r.response_valid\r\n                ,form: r.form\r\n                ,access: r.access\r\n                ,respondent_id: r.respondent_id\r\n                ,respondent_apikey: r.respondent_apikey\r\n                ,respondent_index: r.respondent_index\r\n                ,question_id: r.question_id\r\n                ,question_type: r.question_type\r\n                ,question_required: r.question_required\r\n                ,question_valid: r.question_valid\r\n                ,question_title: r.question_title\r\n                ,question_note: r.question_note\r\n                ,nominal \r\n                ,nominal_title\r\n                ,entity_1\r\n                ,entity_1_title\r\n                ,entity_2\r\n                ,entity_2_title\r\n                ,factor\r\n                ,factor_title\r\n                ,effect\r\n                ,effect_title\r\n                ,min\r\n                ,max\r\n                ,value\r\n                ,value_title\r\n                \r\n            })\r\n        })\r\n    })\r\n    \r\n    $scope.rawData = rawData1.filter(r => r.value != null)\r\n    $scope.filename = $scope.form.id + \"_\" + _util.format.date(new Date(),\"YYYY_MM_DD_HH_mm\") + \"_responses.xlsx\";\r\n    \r\n?>\r\nget(\"rawData\")\r\nexport({{filename}})",o='// get  all answers by form id\r\n// $scope.form_id is param of script (  form id )\r\n\r\n// returns answers\r\n\r\n \r\nservice.mongodb.aggregate(\r\n    from:"dj-storage.answer",\r\n    query: <? [\r\n          {\r\n            \'$match\': {\r\n              \'form\': $scope.form\r\n            }\r\n          }, {\r\n            \'$sort\': {\r\n              \'updatedAt\': -1\r\n            }\r\n          }\r\n        ]\r\n    ?>\r\n)\r\n\r\nset("answers")\r\n\r\n\r\nservice.mongodb.aggregate(\r\n    from:"dj-storage.form",\r\n    query: <? [\r\n          {\r\n            \'$match\': {\r\n              \'id\': $scope.form\r\n            }\r\n          }\r\n        ]\r\n    ?>\r\n)\r\n\r\nset("form")\r\n\r\n<?javascript\r\n\r\nlet questions = $scope.form[0].config.questions;\r\n\r\nlet answers = $scope.answers.map ((a) => {\r\n  a.data = _.pairs(a.data).map(d => {\r\n    d[1].title = questions[d[0]].options.title;\r\n    \r\n    d[1].id = d[0];\r\n    \r\n    if (!d[1].value) {\r\n      return d[1]\r\n    }\r\n    \r\n    if( ["influences"].indexOf(d[1].type) >=0 ){\r\n      d[1].value = d[1].value.map(v => {\r\n        return {\r\n          entity_id: v.entity,\r\n          entity_title: questions[d[0]].options.entities[v.entity].title,\r\n          property_id: v.property,\r\n          property_title: questions[d[0]].options.properties[v.property].title,\r\n          value:v.value\r\n        }\r\n      }) \r\n    }\r\n\r\n    if( ["pairs","radiopairs"].indexOf(d[1].type) >=0 ){\r\n      d[1].value = d[1].value.map(v => {\r\n        return {\r\n          entity_id: v.entity,\r\n          entity_title: questions[d[0]].options.entities[v.entity].title,\r\n          property_id: v.property,\r\n          property_title: questions[d[0]].options.properties[v.property].title,\r\n          value:1\r\n        }\r\n      }) \r\n    }\r\n\r\n    if( ["radio","check","dropdown"].indexOf(d[1].type) >= 0 ){\r\n      d[1].value = d[1].value.map(v => {\r\n        return {\r\n          entity_id: v,\r\n          entity_title: questions[d[0]].options.nominals[v].title,\r\n          property_id: "",\r\n          property_title:"",\r\n          value:1\r\n        }\r\n      }) \r\n    }\r\n    \r\n    if( ["scales"].indexOf(d[1].type) >= 0 ){\r\n      d[1].value = d[1].value.map(v => {\r\n        return {\r\n          entity_id: v.entity,\r\n          entity_title: questions[d[0]].options.entities[v.entity].title,\r\n          property_id: "",\r\n          property_title:"",\r\n          value:v.value\r\n        }\r\n      }) \r\n    }\r\n    \r\n    \r\n    if( ["text","rate","range","datetime","scale"].indexOf(d[1].type) >= 0 ){\r\n      d[1].value = d[1].value.map(v => {\r\n        return {\r\n          entity_id: "",\r\n          entity_title: "",\r\n          property_id: "",\r\n          property_title:"",\r\n          value:(d[1].type=="datetime")? _util.format.date(new Date(v), "DD/MM/YY HH:mm") : v\r\n        }\r\n      }) \r\n    }\r\n    \r\n    return d[1];\r\n  })\r\n  return a;\r\n});\r\n\r\n\r\n\r\n\r\n\r\nlet responses = [];\r\n\r\nanswers = answers.forEach( a => {\r\n    a.data.forEach( d => {\r\n      if(d.value){\r\n        d.value.forEach( v => {\r\n            responses.push({\r\n              response_id:a.id,\r\n              updatedAt: _util.format.date(a.updatedAt, "DD/MM/YY HH:mm"),\r\n              form:a.form,\r\n              respondent:(a.user.email)? a.user.email : "",\r\n              question_id: d.id,\r\n              question_title: d.title,\r\n              question_type: d.type,\r\n              valid:(d.valid)? 1 : 0,\r\n              entity_id: v.entity_id,\r\n              entity_title:v.entity_title,\r\n              property_id:v.property_id,\r\n              property_title:v.property_title,\r\n              value:v.value     \r\n            })\r\n          })    \r\n      } \r\n    })\r\n});\r\n\r\n$scope.responses = responses;\r\n\r\n?>\r\n\r\nget("responses")',d="// get answers by form id and user info\r\n// $scope.form is param of script (  form id )\r\n// $scope.user is param of script (  user profile )\r\n// returns selected answers\r\n\r\nservice.mongodb.aggregate(\r\n    from:<? \"dj-storage.answer\" ?>,\r\n    query: <? [\r\n            {\r\n                '$match': {\r\n                    'form': $scope.form, \r\n                    'user.email': $scope.user.email\r\n                }\r\n            }, {\r\n                '$sort': {\r\n                    'updatedAt': -1\r\n                }\r\n            }\r\n        ]\r\n    ?>    \r\n)\r\nset(\"response\")\r\nreturn(\"response[0]\")\r\n",c="// answer-load-stat.dps\r\n// get statistics by form id \r\n// $scope.form is param of script (  form id )\r\n// returns selected statistics\r\n\r\n service.mongodb.aggregate(\r\n    from:\"dj-storage.answer\",\r\n    query: <? [\r\n          {\r\n            '$match': {\r\n              'form': $scope.form\r\n            }\r\n          }, {\r\n            '$sort': {\r\n              'updatedAt': 1\r\n            }\r\n          }\r\n        ]\r\n    ?>\r\n)\r\n\r\nset(\"answers\")\r\n\r\n<?javascript\r\n    $scope.answers = $scope.answers.map( item => ({\r\n        date:item.updatedAt,\r\n        v:1\r\n    }))\r\n?>\r\n\r\nreturn(\"answers\")",l='// update answers \r\n// $scope.answer is param of script (  full answers specification )\r\n\r\nservice.mongodb.replace(\r\n    in: <? "dj-storage.answer" ?>,\r\n    where : <? {id: $scope.answer.id}?>,\r\n    doc: <? $scope.answer ?>\r\n)',p='// create or replace form\r\n// $scope.form is param of script ( full form specification )\r\n// returns created form\r\n\r\nclient();\r\nset("owner")\r\n\r\n<?javascript\r\n    $scope.form = {\r\n        id: $scope.form.id,\r\n        metadata: $scope.form.metadata,\r\n        config: $scope.form.config,\r\n        owner: $scope.owner.client.user,\r\n        history: [\r\n            {\r\n                state:"created",\r\n                message:"Create form via "+$scope.owner.client.app,\r\n                user: $scope.owner.client.user,\r\n                date: new Date()\r\n            }\r\n        ]\r\n    }\r\n?>\r\n\r\nservice.mongodb.replace (\r\n    in: <? "dj-storage.form" ?>,\r\n    where : <? {id: $scope.form.id}?>,\r\n    doc: <? $scope.form ?>\r\n)\r\n\r\nservice.mongodb.aggregate (\r\n    from:<? "dj-storage.form" ?>,\r\n    query: <? [{$match:{id: $scope.form.id}}] ?>,\r\n)',m='// delete form by id\r\n// $scope.form is param of script (  form id )\r\n// returns deleted form\r\n\r\nservice.mongodb.aggregate(\r\n    from:<? "dj-storage.form" ?>,\r\n    query: <? [{$match:{id: $scope.form}}] ?>\r\n)\r\n\r\nset("res")\r\n\r\nservice.mongodb.remove(\r\n    from: <? "dj-storage.form" ?>,\r\n    where: <? {id: $scope.form} ?>\r\n)\r\n\r\nreturn("res")',f='// export form as json\r\n// $scope.form is param of script (  full form specification )\r\n// returns url for json downloading\r\n\r\nget("form")\r\nexport("formExport.json")',u='// extends existed form \r\n// $scope.form is param of script (  full form specification )\r\n// returns extended form\r\n\r\nservice.mongodb.find(\r\n    from:<? "dj-storage.form" ?>,\r\n    query: <? [{$match:{id: $scope.form.id}}] ?>\r\n)\r\n\r\nset("baseForm")\r\n\r\n\r\n<?javascript\r\n    $scope.baseForm = $scope.baseForm[0] \r\n    if($scope.form.config.questions && $scope.baseForm.config.questions){\r\n        $scope.form.config.questions.forEach( q => {\r\n            baseQ = _.find($scope.baseForm.config.questions, bq => bq.id == q.id)\r\n            if( baseQ && baseQ.options.nominals){\r\n                q.options.nominals = (q.options.nominals || []).concat(baseQ.options.nominals)\r\n                q.options.nominals = _.unique(q.options.nominals,\'id\') \r\n            }\r\n        })    \r\n    }\r\n    \r\n?>\r\n\r\nservice.mongodb.replace(\r\n    in: <? "dj-storage.form" ?>,\r\n    where : <? {id: $scope.form.id}?>,\r\n    doc: <? $scope.form ?>\r\n)\r\n\r\nservice.mongodb.find(\r\n    from:<? "dj-storage.form" ?>,\r\n    query: <? [{$match:{id: $scope.form.id}}] ?>\r\n)\r\n',h='// get form by id\r\n// $scope.form is param of script (  form id )\r\n// returns form\r\n\r\nservice.mongodb.aggregate(\r\n    from:<? "dj-storage.form" ?>,\r\n    query: <? [{$match:{id: $scope.form}}] ?>\r\n)',g="// get statistics by form id \r\n// $scope.form is param of script (  form id )\r\n// returns selected statistics\r\n\r\nservice.mongodb.aggregate(\r\n    from:\"dj-storage.answer\",\r\n    query: <? [\r\n          {\r\n            '$match': {\r\n              'form': $scope.form\r\n            }\r\n          }, {\r\n            '$sort': {\r\n              'updatedAt': -1\r\n            }\r\n          }\r\n        ]\r\n    ?>\r\n)\r\n\r\nset(\"responses\")\r\n\r\n\r\nservice.mongodb.aggregate(\r\n    from:\"dj-storage.form\",\r\n    query: <? [\r\n          {\r\n            '$match': {\r\n              'id': $scope.form\r\n            }\r\n          }\r\n        ]\r\n    ?>\r\n)\r\n\r\nset(\"form\")\r\n\r\n\r\n<?javascript\r\n    $scope.form = $scope.form[0]\r\n    \r\n    $scope.stat = { events: {\r\n        total: $scope.responses.length,\r\n        range: {\r\n          min: (_.first($scope.responses)) ? _.first($scope.responses).updatedAt : new Date(),\r\n          max: (_.last($scope.responses)) ? _.last($scope.responses).updatedAt : new Date()\r\n        },\r\n        timeline: $scope.responses.map( r => ({\r\n                        user: r.user,\r\n                        date: r.updatedAt\r\n                    }))\r\n    }};\r\n    \r\n    let questions = $scope.form.config.questions;\r\n\r\n    $scope.stat.questions = questions.map( q => ({\r\n        id: q.id,\r\n        responses: $scope.responses.map( r => {\r\n            let f = _.find(r.data, a => a.id == q.id) \r\n            return (f) ? (f.data) ? f.data : null : null\r\n        })\r\n    }))\r\n\r\n?>\r\n\r\nreturn(\"stat\")\r\n",v="// find user by email \r\n// $scope.email is param of script \r\n\r\nprofile.find(<? $scope.email ?>)",y={answerExport:a,answerGetAll:o,answerGet:d,answerLoadStat:c,answerUpdate:l,formCreateOrReplace:p,formDelete:m,formExport:f,formExtend:u,formGet:h,statGet:g,userFind:v};t["a"]={methods:{randomName:()=>Math.random().toString(36).substring(2),createForm(e){return e.id=this.randomName(),e.updatedAt=new Date,e.createddAt=new Date,this.$dps.run({script:y["formCreateOrReplace"],state:{form:e}}).then(e=>e.data[0])},cloneForm(e){let t=JSON.parse(JSON.stringify(e));return t.config.cloned=e.id,t.metadata.app_url.value=location.href,t.id=this.randomName(),t.updatedAt=new Date,t.createdAt=new Date,delete t._id,this.$dps.run({script:y["formCreateOrReplace"],state:{form:t}}).then(e=>e.data[0])},loadForm(e){return this.$dps.run({script:y["formGet"],state:{form:e}}).then(e=>e.data[0])},updateForm(e){return e.updatedAt=new Date,delete e._id,this.$dps.run({script:y["formCreateOrReplace"],state:{form:e}}).then(e=>e.data[0])},extendForm(e){return e.updatedAt=new Date,delete e._id,this.$dps.run({script:y["formExtend"],state:{form:e}})},deleteForm(e){return this.$dps.run({script:y["formDelete"],state:{form:e}})},exportForm(){let e=this.$djvue.selectWidgets(this.$root,e=>e.config&&"question-widget"==e.config.type).map(e=>{let t=JSON.parse(JSON.stringify(e.config));return t.question.options=JSON.parse(JSON.stringify(e.$refs.instance.options)),t}),t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-u,"+encodeURIComponent(JSON.stringify(e,null,"\t"))),t.setAttribute("download","form_config.json"),t.click()},findUserProfile(e){return this.$dps.run({script:y["userFind"],state:{email:e}}).then(e=>e.data)},loadAnswer(e,t){return this.$dps.run({script:y["answerGet"],state:{user:e,form:t}}).then(r=>r.data?r.data:{form:t,user:e,data:[]})},updateAnswer(e){return e.id=this.randomName(),e.updatedAt=new Date,delete e._id,this.$dps.run({script:y["answerUpdate"],state:{answer:e}})},exportResponses(e){return this.$dps.run({script:y["answerExport"],state:{form:e}}).then(e=>this.app.config.dpsURL+e.data.url)},sendMails(e,t){let r={},n="";return i["templateSettings"].interpolate=/{{([\s\S]+?)}}/g,e.forEach((e,s)=>{n+=`sendmail({{o${s}}});\n            `,r["o"+s]={to:e.email,subject:"DJVUE Forms Service notiification",html:Object(i["template"])(t)(e.context)}}),i["templateSettings"].interpolate=/<%=([\s\S]+?)%>/g,this.$dps.run({script:n,state:r})},getStat(e){return new Promise((t,r)=>{this.$dps.run({script:y["statGet"],state:{form:e}}).then(e=>{"error"==e.type?r(e.data):t(e.data)})})},round(e,t,r,n){let i="YYYY-MM-DD HH:mm",a=s()(t).startOf(r).format(i),o=s()(a).add(n,r).format(i);while(!s()(e).isSameOrAfter(a)||!s()(e).isSameOrBefore(o))a=o,o=s()(a).add(n,r).format(i);let d=s()(e).diff(a),c=-s()(e).diff(o);return d<c?a:o},getResponseDynamic(e){let t=e.events.timeline,r="YYYY-MM-DD HH:mm",n=t.map(e=>s()(new Date(e.date))).sort((e,t)=>e.diff(t)).map(e=>e.format(r));n.push(s()(new Date).format(r));let i,a=[["m",1],["m",5],["m",10],["m",15],["m",20],["m",30],["h",1],["h",2],["h",4],["h",12],["d",1],["d",3],["d",7],["M",1],["M",3],["M",6],["y",1],["y",2],["y",5],["y",10]],o=(e,t,n,i)=>{let a=[];e=s()(e).add(-i,n).format(r),t=s()(new Date).format(r);let o=s()(e).startOf(n).format(r),d=s()(o).add(i,n).format(r);a.push(o);while(!s()(t).isSameOrAfter(o)||!s()(t).isSameOrBefore(d))o=d,d=s()(o).add(i,n).format(r),a.push(o);return a.push(d),a},d={m:["HH:mm",""],h:["DD.MM HH:","00"],d:["DD.MM",""],M:["MM.YY",""],y:["YYYY",""]};for(i of a)if(s()(n[n.length-1]).diff(n[0],i[0])/i[1]<=24)break;if(this.u=i,s()(n[n.length-1]).diff(n[0],i[0])<1)return;n.splice(n.length-1,1),n=n.map(e=>this.round(e,n[0],i[0],i[1]));let c=o(n[0],n[n.length-1],i[0],i[1]),l=c.map(e=>n.filter(t=>s()(t).isSame(e,i[0])).length),p=l.reduce((e,t)=>t+e);l=0==p?l.map(()=>0):l.map(e=>e);let m=l.reduce((e,t)=>t>e?t:e);return n=c.map((e,t)=>({title:s()(e).format(d[i[0]][0])+d[i[0]][1],value:l[t],height:m>0?l[t]/m:0})),this.points=c,n}}}}}]);
//# sourceMappingURL=chunk-082ba605.c64750f3.js.map