(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16aa4df2"],{"0117":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("v-timeline",[t("v-timeline-item",[e._v("timeline item")]),t("v-timeline-item",{staticClass:"text-right"},[e._v("\n    timeline item\n  ")]),t("v-timeline-item",[e._v("timeline item")])],1)},n=[],l=i("2877"),o=i("fef8"),r=i.n(o),a=i("8414"),m=i("1e06"),h={},c=Object(l["a"])(h,s,n,!1,null,null,null);t["default"]=c.exports;r()(c,{VTimeline:a["a"],VTimelineItem:m["a"]})},"0160":function(e,t,i){},"1e06":function(e,t,i){"use strict";var s=i("58df"),n=i("9d26"),l=i("7560"),o=i("a9ad");const r=Object(s["a"])(o["a"],l["a"]);t["a"]=r.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon(){return!!this.icon||!!this.$slots.icon}},methods:{genBody(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon(){return this.$slots.icon?this.$slots.icon:this.$createElement(n["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot(){const e=this.setBackgroundColor(this.color);return this.$createElement("div",{staticClass:"v-timeline-item__inner-dot",...e},[this.hasIcon&&this.genIcon()])},genDot(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider(){const e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render(e){const t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:{"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right,...this.themeClasses}},t)}})},8414:function(e,t,i){"use strict";i("0160");var s=i("58df"),n=i("7560");t["a"]=Object(s["a"])(n["a"]).extend({name:"v-timeline",provide(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes(){return{"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse,...this.themeClasses}}},render(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-16aa4df2.1788fe94.js.map