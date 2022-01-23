(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"+4wr":function(e,t,r){"use strict";r.r(t);var s=r("UPFT"),i={extends:r("lSlZ").a},n=r("KHd+"),a={components:{FilterForm:Object(n.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("filter-wrapper",{attrs:{boxed:e.boxed,"is-loading":e.isLoading},on:{close:function(t){return e.$emit("close")}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("base-input",{attrs:{label:e.$t("site.subscriber.props.email"),type:"text",disabled:e.isLoading},model:{value:e.filters.email,callback:function(t){e.$set(e.filters,"email",t)},expression:"filters.email"}})],1)])])}),[],!1,null,null,null).exports},extends:s.a,data:function(){return{fields:[{key:"email",label:$t("site.subscriber.props.email")},{key:"createdAt",label:$t("site.subscriber.props.subscribed_at"),sort:"created_at",transformer:"date"},{key:"isSubscribed",label:$t("site.subscriber.props.is_subscribed"),transformer:"badgeStatusCompleted",formatter:function(e,t,r){return!r.unsubscribedAt}},{key:"unsubscribedAt",label:$t("site.subscriber.props.unsubscribed_at"),sort:"unsubscribed_at",transformer:"date"},{key:"updatedAt",label:$t("general.updated_at"),sort:"updated_at",transformer:"date",thClass:"d-none",tdClass:"d-none"},{key:"actions",label:"",cantHide:!0,tdClass:"actions-dropdown-wrapper"}],filtersOptions:{email:""},initUrl:"site/subscribers",dataType:"subscriber"}},mounted:function(){this.updatePageMeta()}},o=Object(n.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"entity-list-container"},[r("collapse-transition",{attrs:{group:!0,duration:300,tag:"div"}},[e.showFilters?r("filter-form",{key:"filters",attrs:{boxed:!0,"pre-requisite":e.preRequisite,"is-loading":e.isLoading},on:{close:e.toggleFilter}}):e._e(),e._v(" "),r("base-container",{key:"list",staticClass:"p-0",attrs:{boxed:"","with-loader":"","is-loading":e.isLoading,"loader-color":e.vars.loaderColor}},[e.isInitialized?r("table-wrapper",{attrs:{meta:e.entities.meta,filtered:e.isFiltered,"entity-title":"site.subscriber.subscriber","entities-title":"site.subscriber.subscribers","entity-description":"site.subscriber.module_description"}},[r("b-table",{directives:[{name:"show",rawName:"v-show",value:e.entities.meta.total,expression:"entities.meta.total"}],ref:"btable",attrs:{items:e.itemsProvider,fields:e.fields,busy:e.isLoading,hover:"",striped:"",stacked:"sm","per-page":e.entities.meta.perPage,"current-page":e.entities.meta.currentPage,filters:null},on:{"update:busy":function(t){e.isLoading=t}},scopedSlots:e._u([{key:"cell(createdAt)",fn:function(e){return[r("view-date",{staticClass:"mb-0",attrs:{value:e.item.createdAt,"with-tz":"",tag:"span"}})]}},{key:"cell(updatedAt)",fn:function(e){return[r("view-date",{staticClass:"mb-0",attrs:{value:e.item.updatedAt,"with-tz":"",tag:"span"}})]}},{key:"cell(unsubscribedAt)",fn:function(e){return[r("view-date",{staticClass:"mb-0",attrs:{value:e.item.unsubscribedAt,"with-tz":"",tag:"span"}})]}},{key:"cell(isSubscribed)",fn:function(t){return[t.value?r("badge",{attrs:{rounded:"",type:"success"}},[r("i",{staticClass:"fas fa-circle"}),e._v(" "+e._s(e.$t("general.yes")))]):r("badge",{attrs:{rounded:"",type:"dark"}},[r("i",{staticClass:"far fa-circle"}),e._v(" "+e._s(e.$t("general.no")))])]}},{key:"cell(actions)",fn:function(t){return[r("table-row-actions",[e.hasPermission("delete-subscriber")?r("a",{staticClass:"dropdown-item",on:{click:function(r){return r.stopPropagation(),e.deleteEntity(t.item)}}},[r("i",{staticClass:"fas fa-trash"}),e._v(" "+e._s(e.$t("global.delete",{attribute:e.$t("site.subscriber.subscriber")})))]):e._e()])]}}],null,!1,3088696207)})],1):e._e()],1)],1)],1)}),[],!1,null,null,null);t.default=o.exports},lSlZ:function(e,t,r){"use strict";var s=r("L2JU"),i=r("BcCH");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={props:{boxed:{type:Boolean,default:!1},showCloseBtn:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},filterRouteFn:{type:Function}},computed:a(a({},Object(s.c)("common",["filters"])),Object(s.c)("config",["vars"])),methods:{submit:function(){var e=a(a(a({},this.$route.query),this.filters),{},{filtered:!0,filtered_at:moment().unix()});this.filterRouteFn&&_.isFunction(this.filterRouteFn)?this.filterRouteFn(e):this.$router.push({path:this.$route.path,query:e}).catch((function(e){}))},reset:function(){i.a.$emit("CLEAR_FILTERS")}}},c=r("KHd+"),u=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("base-container",{staticClass:"mb-element",attrs:{boxed:e.boxed,"with-loader":"","is-loading":e.isLoading,"loader-color":e.vars.loaderColor}},[e.showCloseBtn?r("close-button",{attrs:{title:e.$t("general.close")},on:{click:function(t){return e.$emit("close")}}}):e._e(),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[e._t("default"),e._v(" "),e._t("footer",(function(){return[e.showFooter?r("div",{staticClass:"form-footer mt-3"},[r("div",{staticClass:"left-side"},[r("base-button",{attrs:{type:"button",design:"light",disabled:e.isLoading},on:{click:function(t){return e.$emit("close")}}},[e._v(e._s(e.$t("general.close")))])],1),e._v(" "),r("div",{staticClass:"right-side"},[r("base-button",{attrs:{type:"button",design:"light",disabled:e.isLoading},on:{click:e.reset}},[e._v(e._s(e.$t("general.clear")))]),e._v(" "),r("base-button",{attrs:{type:"submit",design:"primary",disabled:e.isLoading}},[e._v(e._s(e.$t("general.filter")))])],1)]):e._e()]}))],2)],1)}),[],!1,null,null,null).exports;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a={components:{FilterWrapper:u},props:{preRequisite:{type:Object,default:function(){return{}}},boxed:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},computed:d(d({},Object(s.c)("common",["filters"])),Object(s.c)("config",["vars"]))}}}]);
//# sourceMappingURL=index.js.map?id=3b0cbfe5ba393dba25d8