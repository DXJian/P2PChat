(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{H4zV:function(t,e,r){"use strict";r.r(e);var i=r("UPFT"),s={extends:r("lSlZ").a},n=r("KHd+"),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("filter-wrapper",{attrs:{boxed:t.boxed,"is-loading":t.isLoading},on:{close:function(e){return t.$emit("close")}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mb-3"},[r("date-between",{attrs:{label:t.$t("global.between",{attribute:t.$t("activity.activities")}),start:t.filters.startDate,end:t.filters.endDate,disabled:t.isLoading},on:{"update:start":function(e){return t.$set(t.filters,"startDate",e)},"update:end":function(e){return t.$set(t.filters,"endDate",e)}}})],1)])])}),[],!1,null,null,null).exports,a=r("K4CH"),l={components:{FilterForm:o},extends:i.a,data:function(){return{fields:[{key:"createdAt",label:$t("activity.props.created_at"),sort:"created_at"},{key:"causer",label:$t("user.user")},{key:"description",label:$t("activity.props.description")},{key:"ip",label:$t("activity.props.ip")},{key:"browser",label:$t("activity.props.browser")},{key:"os",label:$t("activity.props.os")}],filtersOptions:{startDate:"",endDate:""},sortOptions:{hasScroll:!0},columnsOptions:{hasScroll:!0},exportOptions:{orientation:"l"},initUrl:"activities",dataType:"activity"}},methods:{getAgent:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=new a.UAParser(t);return i=i.getResult(),r?"".concat(i[e].name," (").concat(i[e].version,")"):i[e]}},mounted:function(){this.updatePageMeta()}},c=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"entity-list-container"},[r("collapse-transition",{attrs:{group:!0,duration:300,tag:"div"}},[t.showFilters?r("filter-form",{key:"filters",attrs:{boxed:!0},on:{close:t.toggleFilter}}):t._e(),t._v(" "),r("base-container",{key:"list",staticClass:"p-0",attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[t.isInitialized?r("table-wrapper",{attrs:{meta:t.entities.meta,filtered:t.isFiltered,"entity-title":"activity.activity","entities-title":"activity.activities","entity-description":"activity.module_description"}},[r("b-table",{directives:[{name:"show",rawName:"v-show",value:t.entities.meta.total,expression:"entities.meta.total"}],ref:"btable",attrs:{items:t.itemsProvider,fields:t.fields,busy:t.isLoading,hover:"",striped:"",stacked:"sm","per-page":t.entities.meta.perPage,"current-page":t.entities.meta.currentPage,filters:null},on:{"update:busy":function(e){t.isLoading=e}},scopedSlots:t._u([{key:"cell(createdAt)",fn:function(t){return[r("view-date",{staticClass:"mb-0",attrs:{value:t.item.createdAt,"with-tz":"",tag:"span"}})]}},{key:"cell(causer)",fn:function(e){return[e.item.causer?r("view-user",{staticClass:"m-0",attrs:{value:e.item.causer,"show-sub":!1,"inline-sub":"","show-image":!1,"data-classes":"m-0"}}):r("span",{staticClass:"text-muted"},[t._v("-")])]}},{key:"cell(ip)",fn:function(e){return[e.item.properties&&e.item.properties.ip?r("span",[t._v(t._s(e.item.properties.ip))]):r("span",{staticClass:"text-muted"},[t._v("-")])]}},{key:"cell(browser)",fn:function(e){return[e.item.properties&&e.item.properties.userAgent?r("span",[t._v(t._s(t.getAgent(e.item.properties.userAgent,"browser",!0)))]):r("span",{staticClass:"text-muted"},[t._v("-")])]}},{key:"cell(os)",fn:function(e){return[e.item.properties&&e.item.properties.userAgent?r("span",[t._v(t._s(t.getAgent(e.item.properties.userAgent,"os",!0)))]):r("span",{staticClass:"text-muted"},[t._v("-")])]}}],null,!1,2465401647)})],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports},lSlZ:function(t,e,r){"use strict";var i=r("L2JU"),s=r("BcCH");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={props:{boxed:{type:Boolean,default:!1},showCloseBtn:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},filterRouteFn:{type:Function}},computed:o(o({},Object(i.c)("common",["filters"])),Object(i.c)("config",["vars"])),methods:{submit:function(){var t=o(o(o({},this.$route.query),this.filters),{},{filtered:!0,filtered_at:moment().unix()});this.filterRouteFn&&_.isFunction(this.filterRouteFn)?this.filterRouteFn(t):this.$router.push({path:this.$route.path,query:t}).catch((function(t){}))},reset:function(){s.a.$emit("CLEAR_FILTERS")}}},c=r("KHd+"),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-container",{staticClass:"mb-element",attrs:{boxed:t.boxed,"with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[t.showCloseBtn?r("close-button",{attrs:{title:t.$t("general.close")},on:{click:function(e){return t.$emit("close")}}}):t._e(),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[t._t("default"),t._v(" "),t._t("footer",(function(){return[t.showFooter?r("div",{staticClass:"form-footer mt-3"},[r("div",{staticClass:"left-side"},[r("base-button",{attrs:{type:"button",design:"light",disabled:t.isLoading},on:{click:function(e){return t.$emit("close")}}},[t._v(t._s(t.$t("general.close")))])],1),t._v(" "),r("div",{staticClass:"right-side"},[r("base-button",{attrs:{type:"button",design:"light",disabled:t.isLoading},on:{click:t.reset}},[t._v(t._s(t.$t("general.clear")))]),t._v(" "),r("base-button",{attrs:{type:"submit",design:"primary",disabled:t.isLoading}},[t._v(t._s(t.$t("general.filter")))])],1)]):t._e()]}))],2)],1)}),[],!1,null,null,null).exports;function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={components:{FilterWrapper:u},props:{preRequisite:{type:Object,default:function(){return{}}},boxed:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},computed:d(d({},Object(i.c)("common",["filters"])),Object(i.c)("config",["vars"]))}}}]);
//# sourceMappingURL=index.js.map?id=b8258fa806617aad657f