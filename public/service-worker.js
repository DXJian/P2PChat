!function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s="mnd1")}({"2KUI":function(e,t,s){"use strict";try{self["workbox:expiration:6.2.4"]&&_()}catch(e){}},"5tLK":function(e,t,s){"use strict";try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},Bxln:function(e,t,s){"use strict";try{self["workbox:core:6.2.4"]&&_()}catch(e){}},aqiC:function(e,t,s){"use strict";try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}},jLCR:function(e,t,s){"use strict";try{self["workbox:cacheable-response:6.2.4"]&&_()}catch(e){}},mnd1:function(e,t,s){"use strict";s.r(t);function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var i,o,c={white:"#ffffff",whitish:"#fafbfd",blackish:"#131517",black:"#000000",gray100:"#f8f9fd",gray200:"#e9ecf1",gray300:"#dee2e9",gray400:"#ced4dd",gray500:"#adb5c0",gray600:"#6c7580",gray700:"#495060",gray800:"#343a43",gray900:"#212532",blue:"#5e72e4",indigo:"#581b98",purple:"#7a22a5",pink:"#f3a4b5",red:"#f5365c",redish:"#e00c51",orange:"#fb6340",yellow:"#ffd600",green:"#2dce89",teal:"#2bffc6",cyan:"#11cdef",primary:"#581b98","dark-primary":"#320f57","light-primary":"#7e27d9",secondary:"#e00c51","dark-secondary":"#970837",success:"#2dce89",info:"#11cdef",warning:"#fb6340",danger:"#f5365c",default:"#0a346d","gray-lightest":"#f8f9fd","gray-lighter":"#e9ecf1","gray-light":"#dee2e9",light:"#dee2e9","gray-chalk":"#ced4dd",gray:"#adb5c0",dark:"#6c7580","gray-dark":"#6c7580","gray-darker":"#495060","gray-charcoal":"#343a43","gray-darkest":"#212532"},l={wrap:!0,allowInput:!1,dateFormat:"Y-m-d",altInput:!0,altFormat:"F j, Y",locale:{firstDayOfWeek:1}},h=n(n({},l),{},{mode:"range"}),u=n(n({},l),{},{mode:"multiple"}),d="KodeMint",p="production",f="1.0.0",m={appName:d,appEnv:p,appVersion:f,appKmon:!1,localStorageKey:d+"_"+p,localStorageVersionKey:d+"_"+p+"_version",serviceWorkerKey:d+"_"+p,serviceWorkerVersion:"v1.12.0",defaultDateTimeFormat:"lll",defaultDateFormat:"ll",defaultTimeFormat:"LT",serverTimeFormat:"HH:mm:ss",serverDateFormat:"YYYY-MM-DD",serverDateTimeFormat:"YYYY-MM-DD HH:mm:ss",monthYearFormat:"MMM YYYY",datepickerConfig:l,datepickerWithMonthConfig:{wrap:!0,allowInput:!1,dateFormat:"Y-m-d",altInput:!0,altFormat:"F j, Y, l",locale:{firstDayOfWeek:1}},timepickerConfig:{enableTime:!0,noCalendar:!0,altFormat:"h:i K",dateFormat:"H:i:S",time_24hr:!1,wrap:!0,allowInput:!1,altInput:!0},datepickerRangeConfig:h,datepickerMultipleConfig:u,datetimepickerConfig:{enableTime:!0,wrap:!0,allowInput:!1,altFormat:"F j, Y h:i K",dateFormat:"Y-m-d H:i:S",time_24hr:!1,altInput:!0,locale:{firstDayOfWeek:1}},monthpickerConfig:{wrap:!0,allowInput:!1,dateFormat:"Y-m",altInput:!0,altFormat:"F Y",locale:{firstDayOfWeek:1}},onMonthOrYearChange:function(e,t,s){s.setDate(new Date(s.currentYear,s.currentMonth),!0)},daymonthpickerConfig:{wrap:!0,allowInput:!1,dateFormat:"m-d",altInput:!0,altFormat:"F j",locale:{firstDayOfWeek:1}},momentToDatepicker:{"D-MM-YY":"j-m-y","D-MM-YYYY":"j-m-Y","DD-MM-YYYY":"d-m-Y","MM-DD-YYYY":"m-d-Y","YYYY-MM-DD":"Y-m-d","MMM D, YYYY":"M j, Y","MMMM D, YYYY":"F j, Y","dddd, MMM D, YYYY":"l, M j, Y","dddd, MMMM D, YYYY":"l, F j, Y","D MMM YYYY":"j M Y","D MMMM YYYY":"j F Y","dddd, D MMM YYYY":"l, j M Y","dddd, D MMMM YYYY":"l, j F Y"},momentToTimepicker:{"H:m":"H:i","H:m a":"H:i K","H:m A":"H:i K","H:mm":"H:i K","H:mm a":"H:i K","H:mm A":"H:i K","HH:mm":"H:i K","HH:mm a":"H:i K","HH:mm A":"H:i K","h:m":"h:i K","h:m a":"h:i K","h:m A":"h:i K","h:mm":"h:i K","h:mm a":"h:i K","h:mm A":"h:i K","hh:mm":"h:i K","hh:mm a":"h:i K","hh:mm A":"h:i K","H:m:ss":"H:i:S","H:m:ss a":"H:i:S K","H:m:ss A":"H:i:S K","H:mm:ss":"H:i:S K","H:mm:ss a":"H:i:S K","H:mm:ss A":"H:i:S K","HH:mm:ss":"H:i:S","HH:mm:ss a":"H:i:S K","HH:mm:ss A":"H:i:S K","h:m:ss":"h:i:S K","h:m:ss a":"h:i:S K","h:m:ss A":"h:i:S K","h:mm:ss":"h:i:S K","h:mm:ss a":"h:i:S K","h:mm:ss A":"h:i:S K","hh:mm:ss":"h:i:S K","hh:mm:ss a":"h:i:S K","hh:mm:ss A":"h:i:S K"},momentToMonthpicker:{"MMM YYYY":"M Y","MMMM YYYY":"F Y"},loaderColor:c.primary,colors:c,colorsForStatus:{activated:"success",PENDING_APPROVAL:"info",disapproved:"warning",pending_activation:"primary",banned:"dark",pending:"primary",approved:"success",allotted:"success",rejected:"danger",cancelled:"danger",unpaid:"danger",paid:"success",partially_paid:"warning",not_applicable:"dark",open:"info",closed:"success",partially_closed:"primary",missed:"dark","meeting-scheduled":"primary","meeting-cancelled":"danger","meeting-live":"success"},currencyIcons:{INR:"rupee-sign",USD:"dollar-sign"},keepAddingOptions:[{uuid:"clear_all",name:"clear_all"},{uuid:"clear_all_but_selected",name:"clear_all_but_selected"},{uuid:"clear_only_selected",name:"clear_only_selected"}],defaultCurrency:{description:"United States Dollar",name:"USD",symbol:"$",icon:"dollar-sign",position:"prefix",decimal:2,thousand:3,decimal_delimeter:".",thousand_delimeter:","},momentCalendarShortLocale:{lastDay:"Yesterday",sameDay:"LT",lastWeek:"ll",sameElse:"ll"}};"undefined"!=typeof window&&(i=window.location.hostname,o=(o=(i=i.replace("www.","").replace(/\./g,""))+"_"+d+"_"+p).toLowerCase(),m.appName=d=window.kmenv.name||d,m.appEnv=p=window.kmenv.env||p,m.appVersion=f=window.kmenv.version||f,m.appKmon=window.kmenv.kmon||!1,m.appDss=window.kmenv.dss||!1,m.localStorageKey=o,m.localStorageVersionKey=o+"_version",m.serviceWorkerKey=o);var g=m;s("Bxln");const w=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class y extends Error{constructor(e,t){super(w(e,t)),this.name=e,this.details=t}}const _=new Set;const b={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},v=e=>[b.prefix,e,b.suffix].filter(e=>e&&e.length>0).join("-"),k=e=>{(e=>{for(const t of Object.keys(b))e(t)})(t=>{"string"==typeof e[t]&&(b[t]=e[t])})},M=e=>e||v(b.precache),R=e=>e||v(b.runtime);function x(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}let D;function C(e){e.then(()=>{})}class Y{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const E=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");function K(e){return new Promise(t=>setTimeout(t,e))}function S(e,t){const s=t();return e.waitUntil(s),s}async function O(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new y("cross-origin-copy-response",{origin:s});const a=e.clone(),n={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=t?t(n):n,i=function(){if(void 0===D){const e=new Response("");if("body"in e)try{new Response(e.body),D=!0}catch(e){D=!1}D=!1}return D}()?a.body:await a.blob();return new Response(i,r)}s("xwD5");function L(e){if(!e)throw new y("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new y("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),n=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:n.href}}class T{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class q{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}s("aqiC");function N(e){return"string"==typeof e?new Request(e):e}class U{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new Y,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=N(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new y("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const n=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:n,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:n.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=N(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=N(e);await K(0);const a=await this.getCacheKey(s,"write");if(!t)throw new y("cache-put-with-no-response",{url:E(a.url)});const n=await this._ensureResponseSafeToCache(t);if(!n)return!1;const{cacheName:r,matchOptions:i}=this._strategy,o=await self.caches.open(r),c=this.hasCallback("cacheDidUpdate"),l=c?await async function(e,t,s,a){const n=x(t.url,s);if(t.url===n)return e.match(t,a);const r=Object.assign(Object.assign({},a),{ignoreSearch:!0}),i=await e.keys(t,r);for(const t of i){if(n===x(t.url,s))return e.match(t,a)}}(o,a.clone(),["__WB_REVISION__"],i):null;try{await o.put(a,c?n.clone():n)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of _)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:r,oldResponse:l,newResponse:n.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=N(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class P{constructor(e={}){this.cacheName=R(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new U(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let a=void 0;try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new y("no-response",{url:t.url})}catch(n){if(n instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}class H extends P{constructor(e={}){e.cacheName=M(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(H.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new y("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new y("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==H.copyRedirectedCacheableResponsesPlugin&&(a===H.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(H.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}H.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},H.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await O(e):e};class j{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new H({cacheName:M(e),plugins:[...t,new q({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=L(s),n="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new y("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new y("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,n),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return S(e,async()=>{const t=new T;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return S(e,async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new y("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let I;const A=()=>(I||(I=new j),I);s("5tLK");const F=e=>e&&"object"==typeof e?e:{handle:e};class W{constructor(e,t,s="GET"){this.handler=F(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=F(e)}}class B extends W{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class V{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return void 0;let c;try{c=i.handle({url:s,request:e,event:t,params:n})}catch(e){c=Promise.reject(e)}const l=r&&r.catchHandler;return c instanceof Promise&&(this._catchHandler||l)&&(c=c.catch(async a=>{if(l){0;try{return await l.handle({url:s,request:e,event:t,params:n})}catch(e){e instanceof Error&&(a=e)}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a})),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(n)&&0===n.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,F(e))}setCatchHandler(e){this._catchHandler=F(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new y("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new y("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let Q;const $=()=>(Q||(Q=new V,Q.addFetchListener(),Q.addCacheListener()),Q);function G(e,t,s){let a;if("string"==typeof e){const n=new URL(e,location.href);0;a=new W(({url:e})=>e.href===n.href,t,s)}else if(e instanceof RegExp)a=new B(e,t,s);else if("function"==typeof e)a=new W(e,t,s);else{if(!(e instanceof W))throw new y("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return $().registerRoute(a),a}class J extends W{constructor(e,t){super(({request:s})=>{const a=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(e);if(t)return{cacheKey:t}}},e.strategy)}}function z(e){return A().matchPrecache(e)}function X(e,t){!function(e){A().precache(e)}(e),function(e){const t=A();G(new J(t,e))}(t)}class Z extends P{async _handle(e,t){let s=await t.cacheMatch(e),a=void 0;if(s)0;else{0;try{s=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(a=e)}0}if(!s)throw new y("no-response",{url:e.url,error:a});return s}}const ee={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class te extends P{constructor(e={}){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(ee),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[];const a=[];let n;if(this._networkTimeoutSeconds){const{id:r,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});n=r,a.push(i)}const r=this._getNetworkPromise({timeoutId:n,request:e,logs:s,handler:t});a.push(r);const i=await t.waitUntil((async()=>await t.waitUntil(Promise.race(a))||await r)());if(!i)throw new y("no-response",{url:e.url});return i}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise(t=>{a=setTimeout(async()=>{t(await s.cacheMatch(e))},1e3*this._networkTimeoutSeconds)}),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let n,r;try{r=await a.fetchAndCachePut(t)}catch(e){e instanceof Error&&(n=e)}return e&&clearTimeout(e),!n&&r||(r=await a.cacheMatch(t)),r}}class se extends P{constructor(e={}){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(ee)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch(()=>{});let a,n=await t.cacheMatch(e);if(n)0;else{0;try{n=await s}catch(e){e instanceof Error&&(a=e)}}if(!n)throw new y("no-response",{url:e.url,error:a});return n}}let ae,ne;const re=new WeakMap,ie=new WeakMap,oe=new WeakMap,ce=new WeakMap,le=new WeakMap;let he={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return ie.get(e);if("objectStoreNames"===t)return e.objectStoreNames||oe.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return pe(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ue(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ne||(ne=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(fe(this),t),pe(re.get(this))}:function(...t){return pe(e.apply(fe(this),t))}:function(t,...s){const a=e.call(fe(this),t,...s);return oe.set(a,t.sort?t.sort():[t]),pe(a)}}function de(e){return"function"==typeof e?ue(e):(e instanceof IDBTransaction&&function(e){if(ie.has(e))return;const t=new Promise((t,s)=>{const a=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",r),e.removeEventListener("abort",r)},n=()=>{t(),a()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",n),e.addEventListener("error",r),e.addEventListener("abort",r)});ie.set(e,t)}(e),t=e,(ae||(ae=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,he):e);var t}function pe(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,s)=>{const a=()=>{e.removeEventListener("success",n),e.removeEventListener("error",r)},n=()=>{t(pe(e.result)),a()},r=()=>{s(e.error),a()};e.addEventListener("success",n),e.addEventListener("error",r)});return t.then(t=>{t instanceof IDBCursor&&re.set(t,e)}).catch(()=>{}),le.set(t,e),t}(e);if(ce.has(e))return ce.get(e);const t=de(e);return t!==e&&(ce.set(e,t),le.set(t,e)),t}const fe=e=>le.get(e);const me=["get","getKey","getAll","getAllKeys","count"],ge=["put","add","delete","clear"],we=new Map;function ye(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(we.get(t))return we.get(t);const s=t.replace(/FromIndex$/,""),a=t!==s,n=ge.includes(s);if(!(s in(a?IDBIndex:IDBObjectStore).prototype)||!n&&!me.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,n?"readwrite":"readonly");let i=r.store;return a&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),n&&r.done]))[0]};return we.set(t,r),r}he=(e=>({...e,get:(t,s,a)=>ye(t,s)||e.get(t,s,a),has:(t,s)=>!!ye(t,s)||e.has(t,s)}))(he);s("2KUI");const _e=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class be{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",()=>t()),pe(s).then(()=>{})}(this._cacheName)}async setTimestamp(e,t){const s={url:e=_e(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=await this.getDb();await a.put("cache-entries",s)}async getTimestamp(e){const t=await this.getDb(),s=await t.get("cache-entries",this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let a=await s.transaction("cache-entries").store.index("timestamp").openCursor(null,"prev");const n=[];let r=0;for(;a;){const s=a.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?n.push(a.value):r++),a=await a.continue()}const i=[];for(const e of n)await s.delete("cache-entries",e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+_e(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:a,blocking:n,terminated:r}={}){const i=indexedDB.open(e,t),o=pe(i);return a&&i.addEventListener("upgradeneeded",e=>{a(pe(i.result),e.oldVersion,e.newVersion,pe(i.transaction))}),s&&i.addEventListener("blocked",()=>s()),o.then(e=>{r&&e.addEventListener("close",()=>r()),n&&e.addEventListener("versionchange",()=>n())}).catch(()=>{}),o}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class ve{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new be(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,C(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class ke{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:a})=>{if(!a)return null;const n=this._isResponseDateFresh(a),r=this._getCacheExpiration(s);C(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){0}return n?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&function(e){_.add(e)}(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===R())throw new y("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new ve(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}s("jLCR");class Me{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(t=>e.headers.get(t)===this._headers[t])),t}}class Re{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new Me(e)}}var xe,De;self.skipWaiting(),self.addEventListener("activate",()=>self.clients.claim()),xe={prefix:g.serviceWorkerKey.toLowerCase(),suffix:g.serviceWorkerVersion,precache:"precache",runtime:"runtime",googleAnalytics:"google-analytics"},k(xe),X([{url:"/offline.html",revision:null}]),X([]||[]),G((function(e){return"https://fonts.googleapis.com"===e.url.origin}),new se({cacheName:"google-fonts-stylesheets"})),G((function(e){return"https://fonts.gstatic.com"===e.url.origin}),new Z({cacheName:"google-fonts-webfonts",plugins:[new Re({statuses:[0,200]}),new ke({maxAgeSeconds:31536e3,maxEntries:30})]})),G(new RegExp(".*/fonts/.*$"),new Z({cacheName:"fonts",plugins:[new Re({statuses:[0,200]}),new ke({maxAgeSeconds:31536e3,maxEntries:30})]})),G((function(e){return"image"===e.request.destination}),new Z({cacheName:"images",plugins:[new ke({maxEntries:60,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),G((function(e){return"audio"===e.request.destination}),new Z({cacheName:"audio",plugins:[new ke({maxEntries:50,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),G((function(e){var t=e.request;return"script"===t.destination||"style"===t.destination}),new se({cacheName:"static-resources",plugins:[new ke({maxEntries:50,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),G(new RegExp(".*/api/.*$"),new te({networkTimeoutSeconds:10,cacheName:"apis",plugins:[new ke({maxEntries:50,maxAgeSeconds:600,purgeOnQuotaError:!0})]})),G(new RegExp(".*/app/.*$"),new te({networkTimeoutSeconds:10,cacheName:"pages",plugins:[new ke({maxEntries:50,maxAgeSeconds:600,purgeOnQuotaError:!0})]})),De=function(e){switch(e.event.request.destination){case"document":var t=caches.match(z("/index.php"));return t||z("/offline.html");default:return Response.error()}},$().setCatchHandler(De);var Ce=g.serviceWorkerKey+"-"+g.serviceWorkerVersion;self.addEventListener("message",(function(e){"GET_VERSION"===e.data.type&&e.ports[0].postMessage(Ce)})),self.addEventListener("push",(function(e){if(self.Notification&&"granted"===self.Notification.permission){var t={};if(e.data){var s=(t=e.data.json()).title,a={body:t.body,vibrate:[100,50,100]};t.hasOwnProperty("vibrate")&&t.vibrate&&(a.vibrate=t.vibrate),t.hasOwnProperty("icon")&&t.icon&&(a.icon=t.icon),t.hasOwnProperty("image")&&t.image&&(a.image=t.image),t.hasOwnProperty("actions")&&t.actions&&(a.actions=t.actions),t.hasOwnProperty("data")&&t.data&&(a.data=t.data),e.waitUntil(self.registration.showNotification(s,a))}}})),self.addEventListener("notificationclick",(function(e){var t=e.notification;t.data.primaryKey;"close"===e.action||clients.openWindow(t.data.url),t.close()}))},xwD5:function(e,t,s){"use strict";try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}}});
//# sourceMappingURL=service-worker.js.map