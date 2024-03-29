(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bec71d0","chunk-2d21447c"],{a523:function(t,e,n){"use strict";n("20f6"),n("4b85");var s=n("e8f2"),a=n("d9f7");e["a"]=Object(s["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:s}){let o;const{attrs:r}=n;return r&&(n.attrs={},o=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(a["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(o||[])}),s)}})},afef:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[t.message?e("v-container",[e("v-flex",{attrs:{xs12:""}},[e("h2",{staticClass:"warning--text font-weight-light headline"},[t._v(t._s(t.message))])]),e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.uploadCollections()}}},[t._v("Upload collections...")])],1):e("v-container",{attrs:{"pa-0":""}},[t.collections?t._e():e("v-row",{staticClass:"mx-0"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1),t.collections?e("v-layout",{attrs:{column:""}},[t.collections?e("div",[e("v-row",{staticClass:"mx-0",attrs:{"align-center":""}},[e("h3",{staticClass:"primary--text font-weight-light subheading"},[t._v('\n            Schema: "dj-data" ( '+t._s(t.collections.length)+" items )\n          ")]),e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.uploadCollections()}}},[t._v("Upload collections...")])],1),e("v-flex",{staticStyle:{"max-height":"10em",overflow:"auto",border:"1px solid #dedede"},attrs:{xs12:"","pa-2":""}},t._l(t.collections,(function(n,s){return e("v-row",{key:s,staticClass:"pt-2 mx-0",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.select(n)}}},[e("v-icon",{staticClass:"body-1 pr-2",class:t.selected&&n==t.selected?"primary--text":"secondary--text font-weight-light"},[t._v("\n              mdi-grid-large\n            ")]),e("h3",{staticClass:"body-1",class:t.selected&&n==t.selected?"primary--text":"secondary--text font-weight-light"},[t._v("\n              "+t._s(n)+"\n            ")])],1)})),1)],1):t._e(),t.sampleTable?e("div",[e("v-flex",{attrs:{xs12:"","pa-2":""}},[e("v-layout",{attrs:{row:"","align-center":""}},[e("h3",{staticClass:"primary--text subheading font-weight-light"},[t._v('\n              Sample from "'+t._s(t.selected)+'"\n            ')]),e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.exportCollection(t.selected)}}},[t._v("Download")])],1),e("v-data-table",{staticStyle:{display:"inline-grid"},attrs:{headers:t.sampleTable.headers,items:t.sampleTable.rows,dense:"","calculate-widths":"","items-per-page":Number.POSITIVE_INFINITY,"hide-default-footer":"",height:"300px","fixed-header":""},scopedSlots:t._u([{key:"header",fn:function(n){return[e("td",{attrs:{colspan:t.sampleTable.headers.length}},[e("v-divider")],1)]}},{key:"body",fn:function(n){return[e("tbody",t._l(n.items,(function(n,s){return e("tr",{key:s},t._l(t.sampleTable.headers,(function(s,a){return e("td",{key:a,staticClass:"caption"},[t._v("\n                    "+t._s(n[s.value])+"\n                  ")])})),0)})),0)]}}],null,!1,3181246690)})],1)],1):t._e()]):t._e()],1)],1)},a=[],o=n("2ef0"),r={methods:{dpsDownloadCollection(t){return this.$dps.run({script:`\n\t\t\t\t\t<?javascript\n\t\t\t\t\t    $scope.mapper = d => {\n\t\t\t\t\t        let res = d.value;\n\t\t\t\t\t        res.id = d.id\n\t\t\t\t\t        return res\n\t\t\t\t\t    };\n\t\t\t\t\t?>\n\n\t\t\t\t\tdml.select(from:"${t}", map:{{mapper}})\n\t\t\t\t\tset("data")\n\n\t\t\t\t\t<?javascript\n\t\t\t\t\t    $scope.attr = $scope.data.map( d => Object.keys(d));\n\t\t\t\t\t    $scope.field = [];\n\t\t\t\t\t    $scope.attr.forEach( a => {\n\t\t\t\t\t        $scope.field = _.union($scope.field,a)\n\t\t\t\t\t    });\n\t\t\t\t\t    \n\t\t\t\t\t    $scope.publisher = d => {\n\t\t\t\t\t        let res ={}\n\t\t\t\t\t        $scope.field.forEach( f => {\n\t\t\t\t\t            res[f] = ( d[f] ) ? d[f] : null\n\t\t\t\t\t        })\n\t\t\t\t\t        return res\n\t\t\t\t\t    }    \n\t\t\t\t\t?>\n\t\t\t\t\tget("data")\n\t\t\t\t\tc.map({{publisher}})\n\n\n\t\t\t\t\texport("${t}.xlsx")\n\n\t\t\t`}).then(t=>this.$dps.getBaseURL()+t.data.url)},dpsLoadCollectionSample(t){return this.$dps.run({script:`\n\t\t\t\t\t<?javascript\n\t\t\t\t\t    $scope.mapper = d => {\n\t\t\t\t\t        let res = d.value;\n\t\t\t\t\t        res.id = d.id\n\t\t\t\t\t        return res\n\t\t\t\t\t    };\n\t\t\t\t\t?>\n\n\t\t\t\t\tdml.select(from:"${t}", map:{{mapper}})\n\n\t\t\t\t\tset("data")\n\n\t\t\t\t\t<?javascript\n\t\t\t\t\t    $scope.attr = $scope.data.map( d => Object.keys(d));\n\t\t\t\t\t    $scope.field = [];\n\t\t\t\t\t    $scope.attr.forEach( a => {\n\t\t\t\t\t        $scope.field = _.union($scope.field,a)\n\t\t\t\t\t    });\n\t\t\t\t\t    \n\t\t\t\t\t    $scope.publisher = d => {\n\t\t\t\t\t        let res ={}\n\t\t\t\t\t        $scope.field.forEach( f => {\n\t\t\t\t\t            res[f] = ( d[f] ) ? d[f] : null\n\t\t\t\t\t        })\n\t\t\t\t\t        return res\n\t\t\t\t\t    };    \n\t\t\t\t\t?>\n\t\t\t\t\tget("data")\n\t\t\t\t\tc.limit()\n\t\t\t\t\tc.map({{publisher}})\n\t\t\t\t\tset("data")\n\t\t\t\t\t<?javascript\n\t\t\t\t\t    $scope.res = {\n\t\t\t\t\t        dataset:{\n\t\t\t\t\t            dimensions: Object.keys($scope.data[0]),\n\t\t\t\t\t            source: $scope.data\n\t\t\t\t\t        }\n\t\t\t\t\t    };\n\t\t\t\t\t?>\n\t\t\t\t\treturn("res")\n\t\t\t\t`}).then(t=>t.data)},dpsLoadSchema(){return new Promise((t,e)=>{this.$dps.run({script:'\n\t\t\t\t\t<?javascript\n\t\t\t\t\t    $scope.mapper = d => d.identity\n\t\t\t\t\t?>\n\t\t\t\t\tddl.desc("dj-data")\n\t\t\t\t\tc.map({{mapper}})\n\t\t\t\t'}).then(n=>{"error"==n.type?e(n.data):t(n.data)})})},dpsUploadCollections(t){return this.$dps.run({script:'\n\n\t\t\t\t\t<?javascript\n\t\t\t\t\t    $scope.file = $scope.$file.name;\n\t\t\t\t\t?>\n\n\t\t\t\t\tfile.load({{file}})\n\t\t\t\t\tset("db")\n\t\t\t\t\tddl.desc()\n\t\t\t\t\tset("collections")\n\n\n\t\t\t\t\t<?javascript\n\t\t\t\t\t    let m = {\n\t\t\t\t\t        "identity": "",\n\t\t\t\t\t        "schema": "dj-data",\n\t\t\t\t\t        "attributes": {\n\t\t\t\t\t            "value": {\n\t\t\t\t\t                "type": "json"\n\t\t\t\t\t            }\n\t\t\t\t\t        },\n\t\t\t\t\t        "permissions": {\n\t\t\t\t\t            "create": {\n\t\t\t\t\t                "role": [\n\t\t\t\t\t                    "owner",\n\t\t\t\t\t                    "administrator"\n\t\t\t\t\t                ]\n\t\t\t\t\t            },\n\t\t\t\t\t            "alter": {\n\t\t\t\t\t                "role": [\n\t\t\t\t\t                    "owner",\n\t\t\t\t\t                    "administrator"\n\t\t\t\t\t                ]\n\t\t\t\t\t            },\n\t\t\t\t\t            "drop": {\n\t\t\t\t\t                "role": [\n\t\t\t\t\t                    "owner",\n\t\t\t\t\t                    "administrator"\n\t\t\t\t\t                ]\n\t\t\t\t\t            },\n\t\t\t\t\t            "desc": {\n\t\t\t\t\t                "role": [\n\t\t\t\t\t                    "owner",\n\t\t\t\t\t                    "administrator"\n\t\t\t\t\t                ]\n\t\t\t\t\t            },\n\t\t\t\t\t            "select": {\n\t\t\t\t\t                "role": [\n\t\t\t\t\t                    "any",\n\t\t\t\t\t                    "owner",\n\t\t\t\t\t                    "administrator"\n\t\t\t\t\t                ]\n\t\t\t\t\t            },\n\t\t\t\t\t            "insert": {\n\t\t\t\t\t                "role": [\n\t\t\t\t\t                    "owner",\n\t\t\t\t\t                    "administrator"\n\t\t\t\t\t                ]\n\t\t\t\t\t            },\n\t\t\t\t\t            "update": {\n\t\t\t\t\t                "role": [\n\t\t\t\t\t                    "owner",\n\t\t\t\t\t                    "administrator"\n\t\t\t\t\t                ]\n\t\t\t\t\t            },\n\t\t\t\t\t            "delete": {\n\t\t\t\t\t                "role": [\n\t\t\t\t\t                    "owner",\n\t\t\t\t\t                    "administrator"\n\t\t\t\t\t                ]\n\t\t\t\t\t            }\n\t\t\t\t\t        },\n\t\t\t\t\t    };    \n\t\t\t\t\t    \n\n\t\t\t\t\t    \n\t\t\t\t\t    $scope.sheets = Object.keys($scope.db);\n\t\t\t\t\t    $scope.collections = $scope.collections.map(c => c.identity)\n\n\t\t\t\t\t    $scope.toBeDrop = $scope.sheets\n\t\t\t\t\t                        .filter( s => _.find($scope.collections, c => c == s))\n\n\t\t\t\t\t    $scope.toBeCreate = $scope.sheets\n\t\t\t\t\t                .map( s => {\n\t\t\t\t\t\t                 let res = Object.assign({},m);\n\t\t\t\t\t\t                 res.identity = s\n\t\t\t\t\t\t                 return res\n\t\t\t\t\t                });\n\t\t\t\t\t    $scope.values = $scope.sheets.map( s => $scope.db[s].map(v=> ({id:v.id, value:v})));\n\t\t\t\t\t    \n\t\t\t\t\t    $scope.ddlDropScript = $scope.toBeDrop\n\t\t\t\t\t        .map( c => \n\t\t\t\t\t            \'ddl.drop(model:"\'+c+\'");info("\'+c+\'")\'\n\t\t\t\t\t        )\n\t\t\t\t\t        .join(";")\n\t\t\t\t\t    $scope.ddlDropScript = ($scope.ddlDropScript) ? $scope.ddlDropScript : "ctx(\'noop\')"\n\t\t\t\t\t    \n\t\t\t\t\t    $scope.ddlCreateScript = $scope.toBeCreate\n\t\t\t\t\t        .map( ( c, index ) => \n\t\t\t\t\t            \'info({{toBeCreate[\'+index+\'].identity}});ddl.create(model:{{toBeCreate[\'+index+\']}})\'\n\t\t\t\t\t        )\n\t\t\t\t\t        .join(";");\n\t\t\t\t\t    $scope.ddlCreateScript = ($scope.ddlCreateScript) ? $scope.ddlCreateScript : "ctx(\'noop\')"\n\t\t\t\t\t    \n\t\t\t\t\t    $scope.dmlScript = $scope.sheets\n\t\t\t\t\t        .map( ( s, index ) => \n\t\t\t\t\t            \'info("\'+s+\'");dml.insertOrUpdate(into:"\'+s+\'", values:{{values[\'+index+\']}});info()\'\n\t\t\t\t\t        )\n\t\t\t\t\t        .join(";");\n\t\t\t\t\t    \n\t\t\t\t\t?>\n\t\t\t\t\tinfo("Drop collections")\n\t\t\t\t\trun({{ddlDropScript}})\n\t\t\t\t\tinfo("Create collections")\n\t\t\t\t\trun({{ddlCreateScript}})\n\t\t\t\t\tinfo("Insert or update values")\n\t\t\t\t\trun({{dmlScript}})\n\t\t\t\t\tlog()\n\t\t\t\t\t',state:{},file:t}).then(t=>t.data)}}};let l={isString:o["isString"]};var i={name:"dataset-management",props:["config"],mixins:[r],methods:{exportCollection(t){this.dpsDownloadCollection(t).then(t=>{window.location.href=t})},loadCollections(){this.collections=null,this.dpsLoadSchema().then(t=>{this.collections=t,this.message=null}).catch(()=>{this.message='Schema "dj-data" is empty.'})},select(t){this.selected?this.selected=this.selected==t?null:t:this.selected=t},uploadCollections(){this.selectFile().then(t=>{t&&this.resolveFile(t)})},resolveFile(t){this.selectFileDialog=!1,this.sample=null,this.collections=null,this.message="Uploading...",this.dpsUploadCollections(t).then(t=>{let e=t.data.map(t=>{let e=JSON.parse(t.message[0]);return e=l.isString(e)?e:JSON.stringify(e.data),e}).join("\n");this.$djvue.warning({type:"success",title:"Upload Collections",text:e}),this.message="Loading...",this.loadCollections()}).catch(t=>{this.$djvue.warning({type:"error",title:"Cannot Upload Collections",text:t.toString()})})}},computed:{sampleTable(){return this.sample?{headers:this.sample.dataset.dimensions.map(t=>({text:t,align:"center",value:t})),rows:this.sample.dataset.source}:null}},watch:{selected(t){t?this.dpsLoadCollectionSample(t).then(t=>{this.sample=t}):this.sample=null}},data:()=>({collections:null,selected:null,sample:null,file:null,selectFileDialog:!1,message:"Loading..."}),created(){this.loadCollections()}},c=i,d=n("2877"),p=n("fef8"),u=n.n(p),m=n("8336"),h=n("a523"),f=n("8fea"),v=n("ce7e"),$=n("0e8f"),g=n("132d"),y=n("a722"),x=n("490a"),b=n("0fd9"),C=n("2fa4"),w=Object(d["a"])(c,s,a,!1,null,null,null);e["default"]=w.exports;u()(w,{VBtn:m["a"],VContainer:h["a"],VDataTable:f["a"],VDivider:v["a"],VFlex:$["a"],VIcon:g["a"],VLayout:y["a"],VProgressCircular:x["a"],VRow:b["a"],VSpacer:C["a"]})}}]);
//# sourceMappingURL=chunk-7bec71d0.42dab72a.js.map