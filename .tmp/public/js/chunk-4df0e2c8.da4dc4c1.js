(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4df0e2c8"],{7604:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("v-treeview",{staticClass:"dj-tree pa-2 body-2",attrs:{items:t.tree,"open-on-click":"",open:t.open,transition:"","item-text":"",dense:""},scopedSlots:t._u([{key:"prepend",fn:function({item:n}){return[n.snippet?e("div",{staticClass:"subheading font-weight-light primary--text",on:{click:function(e){return t.insert(n.snippet)}}},[t._v("\n      "+t._s(n.title)+"\n    ")]):e("div",{staticClass:"subheading font-weight-light secondary--text"},[t._v("\n      "+t._s(n.title)+"\n    ")])]}}])})},r=[],l=[{title:"Injection",children:[{title:"javascript",snippet:"\n<?javascript \n?>\n"},{title:"json",snippet:"\n<?json \n?>\n"},{title:"csv",snippet:"\n<?csv \n?>\n"},{title:"xml",snippet:"\n<?xml \n?>\n"},{title:"text",snippet:"\n<?text \n?>\n"},{title:"html",snippet:"\n<?html \n?>\n"}]},{title:"Attributes",children:[{title:"bindable",snippet:"{{variable}}"},{title:"scriptable",snippet:"<? d => d ?>"}]},{title:"Variables",children:[{title:"set",snippet:'\nset("variable")\n'},{title:"get",snippet:'\nget("variable")\n'},{title:"return",snippet:'\nreturn("variable")\n'}]},{title:"Data Definition",children:[{title:"Get collection definition"},{title:"Create collection"},{title:"Drop collection"},{title:"Alter collection"},{title:"Create collection"}]},{title:"Data Manipulation",children:[{title:"Select data",snippet:"dml.select(\n    from:'sdi-wbgini',\n    return:'value',\n    where: <? d => d.value.year == '2015' ?>,\n    into: 'gini'\n)"},{title:"Update data"},{title:"Insert data"},{title:"Insert or Update data"},{title:"Delete data"},{title:"Load data"}]},{title:"Data Transformation",children:[{title:"Select"},{title:"Order by"},{title:"Group by"},{title:"Inner join"},{title:"Left join"},{title:"Outer join"},{title:"Map"},{title:"Count by"},{title:"Unique by"},{title:"Limit (take)"}]},{title:"Statistic",children:[{title:"Min",children:[]},{title:"Max",children:[]},{title:"Rank",children:[]},{title:"Median",children:[]},{title:"Average",children:[]},{title:"Entropy",children:[]},{title:"Granulation",children:[]},{title:"Correlation",children:[]},{title:"K-means (clusters)",children:[]},{title:"K-means (centroids)",children:[]},{title:"PCA (eigen values)",children:[]},{title:"PCA (scores)",children:[]},{title:"PCA (loadings)",children:[]}]},{title:"Widgets",children:[{title:"Table",snippet:'\n\t\t\t\t\t// ==> snippet "Table" \n\t\t\t\t\tdml.select(from:"wdi-countries", return:"value")\n\t\t\t\t\tset("countries")\n\n\t\t\t\t\tdml.select(from:"sdi-wbgini", return:"value", where:<? d => d.value.year == "2015" ?>)\n\t\t\t\t\tset("gini")\n\n\t\t\t\t\tdml.select(from:"sdi-wbsf", return:"value", where:<? d => d.value.year == "2015" ?>)\n\t\t\t\t\tset("sf")\n\n\t\t\t\t\tget("countries")\n\t\t\t\t\tc.innerJoin(with:{{gini}}, on:"3_alpha_code")\n\t\t\t\t\tc.map(<? \n\t\t\t\t\t    d => ({\n\t\t\t\t\t        "3_alpha_code": d.left["3_alpha_code"],\n\t\t\t\t\t        country: d.left.short_name,\n\t\t\t\t\t        gini: d.right.value\n\t\t\t\t\t    })\n\t\t\t\t\t?>)\n\t\t\t\t\tc.innerJoin(with:{{sf}}, on:"3_alpha_code")\n\t\t\t\t\tc.map(<? \n\t\t\t\t\t    d => ({\n\t\t\t\t\t        country: d.left.country,\n\t\t\t\t\t        gini_2015: Number.parseFloat(Number.parseFloat(d.left.gini).toFixed(3)),\n\t\t\t\t\t        sf_2015: Number.parseFloat(Number.parseFloat(d.right.value).toFixed(3))\n\t\t\t\t\t    })\n\t\t\t\t\t?>)\n\n\t\t\t\t\tc.order(by:"sf_2015",as:"asc")\n\t\t\t\t\tset("data")\n\n\t\t\t\t\t<?javascript\n\t\t\t\t\t    $scope.result = {\n\t\t\t\t\t        dataset:{\n\t\t\t\t\t            "dimensions": Object.keys($scope.data[0]),\n\t\t\t\t\t            "source": $scope.data\n\t\t\t\t\t        }\n\t\t\t\t\t    };\n\t\t\t\t\t?>\n\t\t\t\t\treturn("result")\n\t\t\t\t\t// <== snippet "Table"\n\t\t\t\t'},{title:"Data Selector",snippet:'\n\t\t\t\t\t// ==> snippet "Data Selector"\n\t\t\t\t\tdml.select(from:"wdi-countries", return:"value")\n\t\t\t\t\tset("countries")\n\t\t\t\t\tdml.select(from:"sdi-wbsf", return:"value")\n\t\t\t\t\tc.unique("3_alpha_code")\n\t\t\t\t\tc.order()\n\t\t\t\t\tc.innerJoin(with:{{countries}}, on:<? (a,b)=> a == b["3_alpha_code"] ?>)\n\t\t\t\t\tc.map(<? \n\t\t\t\t\t    d => ({\n\t\t\t\t\t        title: d.right.short_name,\n\t\t\t\t\t        id: d.left\n\t\t\t\t\t    })\n\t\t\t\t\t?>)\n\t\t\t\t\t// <== snippet "Data Selector"\n\t\t\t\t'},{title:"Bar Chart",snippet:'\n\t\t\t\t\t\n\t\t\t\t\tdml.select(\n\t\t\t\t\t    from:"sdi-wbsf", \n\t\t\t\t\t    return:"value", \n\t\t\t\t\t    where:<? d => d.value.year == "2015" ?>,\n\t\t\t\t\t    into:"sdi_wbsf"\n\t\t\t\t\t)\n\n\t\t\t\t\tdml.select(from:"sdi-ni", \n\t\t\t\t\t    return:"value", \n\t\t\t\t\t    where:<? d => d.value.year == "2015" ?>,\n\t\t\t\t\t    into:"sdi_ni"\n\t\t\t\t\t)\n\n\t\t\t\t\tdml.select(from:"sdi-cp",\n\t\t\t\t\t    return:"value", \n\t\t\t\t\t    where:<? d => d.value.year == "2015" ?>,\n\t\t\t\t\t    into:\'sdi_cp\'\n\t\t\t\t\t)\n\n\t\t\t\t\tdml.select(from:"wdi-countries", return:"value")\n\n\t\t\t\t\tc.innerJoin(\n\t\t\t\t\t    with:{{sdi_wbsf}}, \n\t\t\t\t\t    on:"3_alpha_code", \n\t\t\t\t\t    return:<? d => {\n\t\t\t\t\t        let res = d.left\n\t\t\t\t\t        res["State Fragility"] = Number.parseFloat(Number.parseFloat(d.right.value).toFixed(3))\n\t\t\t\t\t        return res\n\t\t\t\t\t    } ?>\n\t\t\t\t\t)\n\n\t\t\t\t\tc.innerJoin(\n\t\t\t\t\t    with:{{sdi_ni}}, \n\t\t\t\t\t    on:"3_alpha_code", \n\t\t\t\t\t    return:<? d => {\n\t\t\t\t\t        let res = d.left\n\t\t\t\t\t        res["Prolifiration Index"] =  Number.parseFloat(Number.parseFloat(d.right.value).toFixed(3))\n\t\t\t\t\t        return res\n\t\t\t\t\t    } ?>\n\t\t\t\t\t)\n\n\t\t\t\t\tc.innerJoin(\n\t\t\t\t\t    with:{{sdi_cp}}, \n\t\t\t\t\t    on:"3_alpha_code", \n\t\t\t\t\t    return:<? d => {\n\t\t\t\t\t        let res = d.left\n\t\t\t\t\t        res["Corruption Perception"] =  Number.parseFloat(Number.parseFloat(d.right.value).toFixed(3))\n\t\t\t\t\t        return res\n\t\t\t\t\t    } ?>\n\t\t\t\t\t)\n\n\t\t\t\t\tset("data")\n\n\t\t\t\t\t<?javascript\n\n\t\t\t\t\t    $scope.res = {\n\t\t\t\t\t        \n\t\t\t\t\t        yAxis: ["State Fragility", "Prolifiration Index", "Corruption Perception"],     \n\t\t\t\t\t        series: $scope.data.map( d => {\n\t\t\t\t\t            return {\n\t\t\t\t\t                name: d.short_name,\n\t\t\t\t\t                selector: d["3_alpha_code"],\n\t\t\t\t\t                type:"bar",\n\t\t\t\t\t                data: [d[\'State Fragility\']]\n\t\t\t\t\t                        .concat([d[\'Prolifiration Index\']])\n\t\t\t\t\t                        .concat([d[\'Corruption Perception\']])\n\t\t\t\t\t            }\n\t\t\t\t\t        })\n\t\t\t\t\t    };    \n\n\t\t\t\t\t?>\n\n\t\t\t\t\treturn ("res")\n\n\t\t\t\t'},{title:"Line Chart",children:[]},{title:"Scatter Chart",children:[]},{title:"Radar Chart",children:[]},{title:"Geo Chart",children:[]}]}],a={props:["editor"],methods:{insert(t){this.editor&&this.editor.insert(t)}},data:()=>({open:[],active:[],tree:l})},s=a,o=(n("aa3e"),n("2877")),d=n("fef8"),c=n.n(d),p=n("eb2a"),u=Object(o["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports;c()(u,{VTreeview:p["a"]})},aa3e:function(t,e,n){"use strict";n("cfaf")},cfaf:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4df0e2c8.da4dc4c1.js.map