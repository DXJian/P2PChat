(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{SokU:function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=9)}([function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(6),o=n(7);e.exports=function(e){return r(o(e))}},function(e,t,n){var r=n(30);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(10));t.Avatar=r.default,t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),o=n.n(r),i=n(41),a=n(11)(o.a,i.a,!1,null,null,null);t.default=a.exports},function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var u,c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=u):r&&(u=r),u){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(e,t){return u.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:a,exports:s,options:c}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(13)),o=function(e){for(var t=e.split(/[ -]/),n="",r=0;r<t.length;r++)n+=t[r].charAt(0);return n.length>3&&-1!==n.search(/[A-Z]/)&&(n=n.replace(/[a-z]+/g,"")),n.substr(0,3).toUpperCase()};t.default={name:"avatar",props:{username:{type:String},initials:{type:String},backgroundColor:{type:String},color:{type:String},customStyle:{type:Object},inline:{type:Boolean},size:{type:Number,default:50},src:{type:String},rounded:{type:Boolean,default:!0},lighten:{type:Number,default:80},parser:{type:Function,default:o,validator:function(e){return"string"==typeof e("John",o)}}},data:function(){return{backgroundColors:["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"],imgError:!1}},mounted:function(){this.isImage||this.$emit("avatar-initials",this.username,this.userInitial)},computed:{background:function(){if(!this.isImage)return this.backgroundColor||this.randomBackgroundColor(this.username.length,this.backgroundColors)},fontColor:function(){if(!this.isImage)return this.color||this.lightenColor(this.background,this.lighten)},isImage:function(){return!this.imgError&&Boolean(this.src)},style:function(){var e={display:this.inline?"inline-flex":"flex",width:this.size+"px",height:this.size+"px",borderRadius:this.rounded?"50%":0,lineHeight:this.size+Math.floor(this.size/20)+"px",fontWeight:"bold",alignItems:"center",justifyContent:"center",textAlign:"center",userSelect:"none"},t={background:"transparent url('"+this.src+"') no-repeat scroll 0% 0% / "+this.size+"px "+this.size+"px content-box border-box"},n={backgroundColor:this.background,font:Math.floor(this.size/2.5)+"px/"+this.size+"px Helvetica, Arial, sans-serif",color:this.fontColor},o=this.isImage?t:n;return(0,r.default)(e,o),e},userInitial:function(){return this.isImage?"":this.initials||this.parser(this.username,o)}},methods:{initial:o,onImgError:function(e){this.imgError=!0},randomBackgroundColor:function(e,t){return t[e%t.length]},lightenColor:function(e,t){var n=!1;"#"===e[0]&&(e=e.slice(1),n=!0);var r=parseInt(e,16),o=(r>>16)+t;o>255?o=255:o<0&&(o=0);var i=(r>>8&255)+t;i>255?i=255:i<0&&(i=0);var a=(255&r)+t;return a>255?a=255:a<0&&(a=0),(n?"#":"")+(a|i<<8|o<<16).toString(16)}}}},function(e,t,n){e.exports={default:n(14),__esModule:!0}},function(e,t,n){n(15),e.exports=n(4).Object.assign},function(e,t,n){var r=n(16);r(r.S+r.F,"Object",{assign:n(26)})},function(e,t,n){var r=n(0),o=n(4),i=n(17),a=n(19),s=function(e,t,n){var l,u,c,d=e&s.F,f=e&s.G,p=e&s.S,h=e&s.P,_=e&s.B,m=e&s.W,g=f?o:o[t]||(o[t]={}),b=g.prototype,v=f?r:p?r[t]:(r[t]||{}).prototype;for(l in f&&(n=t),n)(u=!d&&v&&void 0!==v[l])&&l in g||(c=u?v[l]:n[l],g[l]=f&&"function"!=typeof v[l]?n[l]:_&&u?i(c,r):m&&v[l]==c?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(c):h&&"function"==typeof c?i(Function.call,c):c,h&&((g.virtual||(g.virtual={}))[l]=c,e&s.R&&b&&!b[l]&&a(b,l,c)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t,n){var r=n(18);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(20),o=n(25);e.exports=n(2)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(21),o=n(22),i=n(24),a=Object.defineProperty;t.f=n(2)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(1);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){e.exports=!n(2)&&!n(3)((function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(1),o=n(0).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var r=n(1);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){"use strict";var r=n(27),o=n(38),i=n(39),a=n(40),s=n(6),l=Object.assign;e.exports=!l||n(3)((function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=r}))?function(e,t){for(var n=a(e),l=arguments.length,u=1,c=o.f,d=i.f;l>u;)for(var f,p=s(arguments[u++]),h=c?r(p).concat(c(p)):r(p),_=h.length,m=0;_>m;)d.call(p,f=h[m++])&&(n[f]=p[f]);return n}:l},function(e,t,n){var r=n(28),o=n(37);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(29),o=n(5),i=n(31)(!1),a=n(34)("IE_PROTO");e.exports=function(e,t){var n,s=o(e),l=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);for(;t.length>l;)r(s,n=t[l++])&&(~i(u,n)||u.push(n));return u}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(5),o=n(32),i=n(33);e.exports=function(e){return function(t,n,a){var s,l=r(t),u=o(l.length),c=i(a,u);if(e&&n!=n){for(;u>c;)if((s=l[c++])!=s)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===n)return e||c||0;return!e&&-1}}},function(e,t,n){var r=n(8),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){var r=n(8),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},function(e,t,n){var r=n(35)("keys"),o=n(36);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){var r=n(7);e.exports=function(e){return Object(r(e))}},function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-avatar--wrapper",style:[e.style,e.customStyle],attrs:{"aria-hidden":"true"}},[this.isImage?n("img",{staticStyle:{display:"none"},attrs:{src:this.src},on:{error:e.onImgError}}):e._e(),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!this.isImage,expression:"!this.isImage"}]},[e._v(e._s(e.userInitial))])])},staticRenderFns:[]};t.a=r}])},Zp8j:function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist-module/",t(t.s=3)}([function(e,t,n){var r=n(4)(n(1),n(5),null,null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(2)),o=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")};t.default={props:{search:{type:String,required:!1,default:""},emojiTable:{type:Object,required:!1,default:function(){return r.default}}},data:function(){return{display:{x:0,y:0,visible:!1}}},computed:{emojis:function(){if(this.search){var e={};for(var t in this.emojiTable){for(var n in e[t]={},this.emojiTable[t])new RegExp(".*"+o(this.search)+".*").test(n)&&(e[t][n]=this.emojiTable[t][n]);0===Object.keys(e[t]).length&&delete e[t]}return e}return this.emojiTable}},methods:{insert:function(e){this.$emit("emoji",e)},toggle:function(e){this.display.visible=!this.display.visible,this.display.x=e.clientX,this.display.y=e.clientY},hide:function(){this.display.visible=!1},escape:function(e){!0===this.display.visible&&27===e.keyCode&&(this.display.visible=!1)}},directives:{"click-outside":{bind:function(e,t,n){if("function"==typeof t.value){var r=t.modifiers.bubble,o=function(n){(r||!e.contains(n.target)&&e!==n.target)&&t.value(n)};e.__vueClickOutside__=o,document.addEventListener("click",o)}},unbind:function(e,t){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}},mounted:function(){document.addEventListener("keyup",this.escape)},destroyed:function(){document.removeEventListener("keyup",this.escape)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"Frequently used":{thumbs_up:"👍","-1":"👎",sob:"😭",confused:"😕",neutral_face:"😐",blush:"😊",heart_eyes:"😍"},People:{smile:"😄",smiley:"😃",grinning:"😀",blush:"😊",wink:"😉",heart_eyes:"😍",kissing_heart:"😘",kissing_closed_eyes:"😚",kissing:"😗",kissing_smiling_eyes:"😙",stuck_out_tongue_winking_eye:"😜",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue:"😛",flushed:"😳",grin:"😁",pensive:"😔",relieved:"😌",unamused:"😒",disappointed:"😞",persevere:"😣",cry:"😢",joy:"😂",sob:"😭",sleepy:"😪",disappointed_relieved:"😥",cold_sweat:"😰",sweat_smile:"😅",sweat:"😓",weary:"😩",tired_face:"😫",fearful:"😨",scream:"😱",angry:"😠",rage:"😡",triumph:"😤",confounded:"😖",laughing:"😆",yum:"😋",mask:"😷",sunglasses:"😎",sleeping:"😴",dizzy_face:"😵",astonished:"😲",worried:"😟",frowning:"😦",anguished:"😧",imp:"👿",open_mouth:"😮",grimacing:"😬",neutral_face:"😐",confused:"😕",hushed:"😯",smirk:"😏",expressionless:"😑",man_with_gua_pi_mao:"👲",man_with_turban:"👳",cop:"👮",construction_worker:"👷",guardsman:"💂",baby:"👶",boy:"👦",girl:"👧",man:"👨",woman:"👩",older_man:"👴",older_woman:"👵",person_with_blond_hair:"👱",angel:"👼",princess:"👸",smiley_cat:"😺",smile_cat:"😸",heart_eyes_cat:"😻",kissing_cat:"😽",smirk_cat:"😼",scream_cat:"🙀",crying_cat_face:"😿",joy_cat:"😹",pouting_cat:"😾",japanese_ogre:"👹",japanese_goblin:"👺",see_no_evil:"🙈",hear_no_evil:"🙉",speak_no_evil:"🙊",skull:"💀",alien:"👽",hankey:"💩",fire:"🔥",sparkles:"✨",star2:"🌟",dizzy:"💫",boom:"💥",anger:"💢",sweat_drops:"💦",droplet:"💧",zzz:"💤",dash:"💨",ear:"👂",eyes:"👀",nose:"👃",tongue:"👅",lips:"👄",thumbs_up:"👍","-1":"👎",ok_hand:"👌",facepunch:"👊",fist:"✊",wave:"👋",hand:"✋",open_hands:"👐",point_up_2:"👆",point_down:"👇",point_right:"👉",point_left:"👈",raised_hands:"🙌",pray:"🙏",clap:"👏",muscle:"💪",walking:"🚶",runner:"🏃",dancer:"💃",couple:"👫",family:"👪",couplekiss:"💏",couple_with_heart:"💑",dancers:"👯",ok_woman:"🙆",no_good:"🙅",information_desk_person:"💁",raising_hand:"🙋",massage:"💆",haircut:"💇",nail_care:"💅",bride_with_veil:"👰",person_with_pouting_face:"🙎",person_frowning:"🙍",bow:"🙇",tophat:"🎩",crown:"👑",womans_hat:"👒",athletic_shoe:"👟",mans_shoe:"👞",sandal:"👡",high_heel:"👠",boot:"👢",shirt:"👕",necktie:"👔",womans_clothes:"👚",dress:"👗",running_shirt_with_sash:"🎽",jeans:"👖",kimono:"👘",bikini:"👙",briefcase:"💼",handbag:"👜",pouch:"👝",purse:"👛",eyeglasses:"👓",ribbon:"🎀",closed_umbrella:"🌂",lipstick:"💄",yellow_heart:"💛",blue_heart:"💙",purple_heart:"💜",green_heart:"💚",broken_heart:"💔",heartpulse:"💗",heartbeat:"💓",two_hearts:"💕",sparkling_heart:"💖",revolving_hearts:"💞",cupid:"💘",love_letter:"💌",kiss:"💋",ring:"💍",gem:"💎",bust_in_silhouette:"👤",speech_balloon:"💬",footprints:"👣"},Nature:{dog:"🐶",wolf:"🐺",cat:"🐱",mouse:"🐭",hamster:"🐹",rabbit:"🐰",frog:"🐸",tiger:"🐯",koala:"🐨",bear:"🐻",pig:"🐷",pig_nose:"🐽",cow:"🐮",boar:"🐗",monkey_face:"🐵",monkey:"🐒",horse:"🐴",sheep:"🐑",elephant:"🐘",panda_face:"🐼",penguin:"🐧",bird:"🐦",baby_chick:"🐤",hatched_chick:"🐥",hatching_chick:"🐣",chicken:"🐔",snake:"🐍",turtle:"🐢",bug:"🐛",bee:"🐝",ant:"🐜",beetle:"🐞",snail:"🐌",octopus:"🐙",shell:"🐚",tropical_fish:"🐠",fish:"🐟",dolphin:"🐬",whale:"🐳",racehorse:"🐎",dragon_face:"🐲",blowfish:"🐡",camel:"🐫",poodle:"🐩",feet:"🐾",bouquet:"💐",cherry_blossom:"🌸",tulip:"🌷",four_leaf_clover:"🍀",rose:"🌹",sunflower:"🌻",hibiscus:"🌺",maple_leaf:"🍁",leaves:"🍃",fallen_leaf:"🍂",herb:"🌿",ear_of_rice:"🌾",mushroom:"🍄",cactus:"🌵",palm_tree:"🌴",chestnut:"🌰",seedling:"🌱",blossom:"🌼",new_moon:"🌑",first_quarter_moon:"🌓",moon:"🌔",full_moon:"🌕",first_quarter_moon_with_face:"🌛",crescent_moon:"🌙",earth_asia:"🌏",volcano:"🌋",milky_way:"🌌",stars:"🌠",partly_sunny:"⛅",snowman:"⛄",cyclone:"🌀",foggy:"🌁",rainbow:"🌈",ocean:"🌊"},Objects:{bamboo:"🎍",gift_heart:"💝",dolls:"🎎",school_satchel:"🎒",mortar_board:"🎓",flags:"🎏",fireworks:"🎆",sparkler:"🎇",wind_chime:"🎐",rice_scene:"🎑",jack_o_lantern:"🎃",ghost:"👻",santa:"🎅",christmas_tree:"🎄",gift:"🎁",tanabata_tree:"🎋",tada:"🎉",confetti_ball:"🎊",balloon:"🎈",crossed_flags:"🎌",crystal_ball:"🔮",movie_camera:"🎥",camera:"📷",video_camera:"📹",vhs:"📼",cd:"💿",dvd:"📀",minidisc:"💽",floppy_disk:"💾",computer:"💻",iphone:"📱",telephone_receiver:"📞",pager:"📟",fax:"📠",satellite:"📡",tv:"📺",radio:"📻",loud_sound:"🔊",bell:"🔔",loudspeaker:"📢",mega:"📣",hourglass_flowing_sand:"⏳",hourglass:"⌛",alarm_clock:"⏰",watch:"⌚",unlock:"🔓",lock:"🔒",lock_with_ink_pen:"🔏",closed_lock_with_key:"🔐",key:"🔑",mag_right:"🔎",bulb:"💡",flashlight:"🔦",electric_plug:"🔌",battery:"🔋",mag:"🔍",bath:"🛀",toilet:"🚽",wrench:"🔧",nut_and_bolt:"🔩",hammer:"🔨",door:"🚪",smoking:"🚬",bomb:"💣",gun:"🔫",hocho:"🔪",pill:"💊",syringe:"💉",moneybag:"💰",yen:"💴",dollar:"💵",credit_card:"💳",money_with_wings:"💸",calling:"📲","e-mail":"📧",inbox_tray:"📥",outbox_tray:"📤",envelope_with_arrow:"📩",incoming_envelope:"📨",mailbox:"📫",mailbox_closed:"📪",postbox:"📮",package:"📦",memo:"📝",page_facing_up:"📄",page_with_curl:"📃",bookmark_tabs:"📑",bar_chart:"📊",chart_with_upwards_trend:"📈",chart_with_downwards_trend:"📉",scroll:"📜",clipboard:"📋",date:"📅",calendar:"📆",card_index:"📇",file_folder:"📁",open_file_folder:"📂",pushpin:"📌",paperclip:"📎",straight_ruler:"📏",triangular_ruler:"📐",closed_book:"📕",green_book:"📗",blue_book:"📘",orange_book:"📙",notebook:"📓",notebook_with_decorative_cover:"📔",ledger:"📒",books:"📚",book:"📖",bookmark:"🔖",name_badge:"📛",newspaper:"📰",art:"🎨",clapper:"🎬",microphone:"🎤",headphones:"🎧",musical_score:"🎼",musical_note:"🎵",notes:"🎶",musical_keyboard:"🎹",violin:"🎻",trumpet:"🎺",saxophone:"🎷",guitar:"🎸",space_invader:"👾",video_game:"🎮",black_joker:"🃏",flower_playing_cards:"🎴",mahjong:"🀄",game_die:"🎲",dart:"🎯",football:"🏈",basketball:"🏀",soccer:"⚽",baseball:"⚾",tennis:"🎾","8ball":"🎱",bowling:"🎳",golf:"⛳",checkered_flag:"🏁",trophy:"🏆",ski:"🎿",snowboarder:"🏂",swimmer:"🏊",surfer:"🏄",fishing_pole_and_fish:"🎣",tea:"🍵",sake:"🍶",beer:"🍺",beers:"🍻",cocktail:"🍸",tropical_drink:"🍹",wine_glass:"🍷",fork_and_knife:"🍴",pizza:"🍕",hamburger:"🍔",fries:"🍟",poultry_leg:"🍗",meat_on_bone:"🍖",spaghetti:"🍝",curry:"🍛",fried_shrimp:"🍤",bento:"🍱",sushi:"🍣",fish_cake:"🍥",rice_ball:"🍙",rice_cracker:"🍘",rice:"🍚",ramen:"🍜",stew:"🍲",oden:"🍢",dango:"🍡",egg:"🍳",bread:"🍞",doughnut:"🍩",custard:"🍮",icecream:"🍦",ice_cream:"🍨",shaved_ice:"🍧",birthday:"🎂",cake:"🍰",cookie:"🍪",chocolate_bar:"🍫",candy:"🍬",lollipop:"🍭",honey_pot:"🍯",apple:"🍎",green_apple:"🍏",tangerine:"🍊",cherries:"🍒",grapes:"🍇",watermelon:"🍉",strawberry:"🍓",peach:"🍑",melon:"🍈",banana:"🍌",pineapple:"🍍",sweet_potato:"🍠",eggplant:"🍆",tomato:"🍅",corn:"🌽"},Places:{house:"🏠",house_with_garden:"🏡",school:"🏫",office:"🏢",post_office:"🏣",hospital:"🏥",bank:"🏦",convenience_store:"🏪",love_hotel:"🏩",hotel:"🏨",wedding:"💒",church:"⛪",department_store:"🏬",city_sunrise:"🌇",city_sunset:"🌆",japanese_castle:"🏯",european_castle:"🏰",tent:"⛺",factory:"🏭",tokyo_tower:"🗼",japan:"🗾",mount_fuji:"🗻",sunrise_over_mountains:"🌄",sunrise:"🌅",night_with_stars:"🌃",statue_of_liberty:"🗽",bridge_at_night:"🌉",carousel_horse:"🎠",ferris_wheel:"🎡",fountain:"⛲",roller_coaster:"🎢",ship:"🚢",boat:"⛵",speedboat:"🚤",rocket:"🚀",seat:"💺",station:"🚉",bullettrain_side:"🚄",bullettrain_front:"🚅",metro:"🚇",railway_car:"🚃",bus:"🚌",blue_car:"🚙",car:"🚗",taxi:"🚕",truck:"🚚",rotating_light:"🚨",police_car:"🚓",fire_engine:"🚒",ambulance:"🚑",bike:"🚲",barber:"💈",busstop:"🚏",ticket:"🎫",traffic_light:"🚥",construction:"🚧",beginner:"🔰",fuelpump:"⛽",izakaya_lantern:"🏮",slot_machine:"🎰",moyai:"🗿",circus_tent:"🎪",performing_arts:"🎭",round_pushpin:"📍",triangular_flag_on_post:"🚩"},Symbols:{keycap_ten:"🔟",1234:"🔢",symbols:"🔣",capital_abcd:"🔠",abcd:"🔡",abc:"🔤",arrow_up_small:"🔼",arrow_down_small:"🔽",rewind:"⏪",fast_forward:"⏩",arrow_double_up:"⏫",arrow_double_down:"⏬",ok:"🆗",new:"🆕",up:"🆙",cool:"🆒",free:"🆓",ng:"🆖",signal_strength:"📶",cinema:"🎦",koko:"🈁",u6307:"🈯",u7a7a:"🈳",u6e80:"🈵",u5408:"🈴",u7981:"🈲",ideograph_advantage:"🉐",u5272:"🈹",u55b6:"🈺",u6709:"🈶",u7121:"🈚",restroom:"🚻",mens:"🚹",womens:"🚺",baby_symbol:"🚼",wc:"🚾",no_smoking:"🚭",u7533:"🈸",accept:"🉑",cl:"🆑",sos:"🆘",id:"🆔",no_entry_sign:"🚫",underage:"🔞",no_entry:"⛔",negative_squared_cross_mark:"❎",white_check_mark:"✅",heart_decoration:"💟",vs:"🆚",vibration_mode:"📳",mobile_phone_off:"📴",ab:"🆎",diamond_shape_with_a_dot_inside:"💠",ophiuchus:"⛎",six_pointed_star:"🔯",atm:"🏧",chart:"💹",heavy_dollar_sign:"💲",currency_exchange:"💱",x:"❌",exclamation:"❗",question:"❓",grey_exclamation:"❕",grey_question:"❔",o:"⭕",top:"🔝",end:"🔚",back:"🔙",on:"🔛",soon:"🔜",arrows_clockwise:"🔃",clock12:"🕛",clock1:"🕐",clock2:"🕑",clock3:"🕒",clock4:"🕓",clock5:"🕔",clock6:"🕕",clock7:"🕖",clock8:"🕗",clock9:"🕘",clock10:"🕙",clock11:"🕚",heavy_plus_sign:"➕",heavy_minus_sign:"➖",heavy_division_sign:"➗",white_flower:"💮",100:"💯",radio_button:"🔘",link:"🔗",curly_loop:"➰",trident:"🔱",small_red_triangle:"🔺",black_square_button:"🔲",white_square_button:"🔳",red_circle:"🔴",large_blue_circle:"🔵",small_red_triangle_down:"🔻",white_large_square:"⬜",black_large_square:"⬛",large_orange_diamond:"🔶",large_blue_diamond:"🔷",small_orange_diamond:"🔸",small_blue_diamond:"🔹"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmojiPickerPlugin=t.EmojiPicker=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),o={install:function(e){e.component("emoji-picker",r.default)}};"undefined"!=typeof window&&(window.EmojiPicker=o),t.EmojiPicker=r.default,t.EmojiPickerPlugin=o,t.default=r.default},function(e,t){e.exports=function(e,t,n,r,o){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var l,u="function"==typeof a?a.options:a;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):n&&(l=n),l){var c=u.functional,d=c?u.render:u.beforeCreate;c?u.render=function(e,t){return l.call(t),d(e,t)}:u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:i,exports:a,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("emoji-invoker",null,{events:{click:function(t){return e.toggle(t)}}}),e._v(" "),e.display.visible?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide,expression:"hide"}]},[e._t("emoji-picker",null,{emojis:e.emojis,insert:e.insert,display:e.display})],2):e._e()],2)},staticRenderFns:[]}}])},ofXV:function(e,t){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach((function(e){var t=r[e];l[e]=function(){return t}}))}return{esModule:o,exports:i,options:s}}},function(e,t,n){"use strict";function r(){var e=window.getSelection();if(e&&e.rangeCount>0)return e.getRangeAt(0)}t.f=function(e,t){if(e.scrollIntoViewIfNeeded)e.scrollIntoViewIfNeeded(!1);else{var n=e.offsetTop-t.scrollTop;(n<0||n>t.offsetHeight-e.offsetHeight)&&((t=t||e.parentElement).scrollTop=e.offsetTop)}},t.e=function(e){var t=window.getSelection();t&&(t.removeAllRanges(),t.addRange(e))},t.d=r,t.a=function(e,t){return t.map((function(t){return{at:t,index:e.lastIndexOf(t)}})).reduce((function(e,t){return e.index>t.index?e:t}))},t.b=function(e,t){t=t||window;for(var n={top:e.offsetTop,left:e.offsetLeft},r=e.offsetParent;null!=r&&r!=t;)n.left+=r.offsetLeft,n.top+=r.offsetTop,r=r.offsetParent;return n},t.g=function(e,t){do{if(t(e))return e}while(e=e&&e.parentNode)},t.c=function(){var e=r();if(e){var t=e.cloneRange();return t.collapse(!0),t.setStart(t.endContainer,0),t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(6),i=n.n(o),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default={name:"At",mixins:[i.a],props:{value:{type:String,default:null},at:{type:String,default:null},ats:{type:Array,default:function(){return["@"]}},suffix:{type:String,default:" "},loop:{type:Boolean,default:!0},allowSpaces:{type:Boolean,default:!0},tabSelect:{type:Boolean,default:!1},avoidEmail:{type:Boolean,default:!0},showUnique:{type:Boolean,default:!0},hoverSelect:{type:Boolean,default:!0},members:{type:Array,default:function(){return[]}},nameKey:{type:String,default:""},filterMatch:{type:Function,default:function(e,t,n){return e.toLowerCase().indexOf(t.toLowerCase())>-1}},deleteMatch:{type:Function,default:function(e,t,n){return t===e+n}},scrollRef:{type:String,default:""}},data:function(){return{bindsValue:null!=this.value,customsEmbedded:!1,hasComposition:!1,atwho:null}},computed:{atItems:function(){return this.at?[this.at]:this.ats},currentItem:function(){return this.atwho?this.atwho.list[this.atwho.cur]:""},style:function(){if(this.atwho){var e=this.atwho,t=(e.list,e.cur,e.x),o=e.y,i=this.$refs.wrap;if(i){var a=n.i(r.b)(i),s=this.scrollRef?document.querySelector(this.scrollRef).scrollLeft:0,l=this.scrollRef?document.querySelector(this.scrollRef).scrollTop:0;return{left:t+s+window.pageXOffset-a.left+"px",top:o+l+window.pageYOffset-a.top+"px"}}}return null}},watch:{"atwho.cur":function(e){var t=this;null!=e&&this.$nextTick((function(){t.scrollToCur()}))},members:function(){this.handleInput(!0)},value:function(e,t){this.bindsValue&&this.handleValueUpdate(e)}},mounted:function(){this.$scopedSlots.embeddedItem&&(this.customsEmbedded=!0),this.bindsValue&&this.handleValueUpdate(this.value)},methods:{itemName:function(e){var t=this.nameKey;return t?e[t]:e},isCur:function(e){return e===this.atwho.cur},handleValueUpdate:function(e){var t=this.$el.querySelector("[contenteditable]");e!==t.innerHTML&&(t.innerHTML=e,this.dispatchInput())},dispatchInput:function(){var e=this.$el.querySelector("[contenteditable]"),t=new Event("input",{bubbles:!0});e.dispatchEvent(t)},handleItemHover:function(e){this.hoverSelect&&this.selectByMouse(e)},handleItemClick:function(e){this.selectByMouse(e),this.insertItem()},handleDelete:function(e){var t=n.i(r.c)();if(t){if(this.customsEmbedded&&t.endOffset>=1){var o=t.endContainer.childNodes[t.endOffset]||t.endContainer.childNodes[t.endOffset-1];if(!o||o.nodeType===Node.TEXT_NODE&&!/^\s?$/.test(o.data))return;o.nodeType===Node.TEXT_NODE?o.previousSibling&&(o=o.previousSibling):o.previousElementSibling&&(o=o.previousElementSibling);var i=[].slice.call(o.childNodes);(i=[].reverse.call(i)).unshift(o);var a=void 0;if([].some.call(i,(function(e){if(e.getAttribute&&null!=e.getAttribute("data-at-embedded"))return a=e,!0})),a){e.preventDefault(),e.stopPropagation();var s=n.i(r.d)();s&&(s.setStartBefore(a),s.deleteContents(),n.i(r.e)(s),this.handleInput())}return}var l=this.atItems,u=this.members,c=this.suffix,d=this.deleteMatch,f=this.itemName,p=t.toString(),h=n.i(r.a)(p,l),_=h.at,m=h.index;if(m>-1){var g=p.slice(m+_.length);if(u.some((function(e){var t=f(e);return d(t,g,c)}))){e.preventDefault(),e.stopPropagation();var b=n.i(r.d)();b&&(b.setStart(b.endContainer,m),b.deleteContents(),n.i(r.e)(b),this.handleInput())}}}},handleKeyDown:function(e){var t=this;if(this.atwho){if(38===e.keyCode||40===e.keyCode)return void(e.metaKey||e.ctrlKey||(e.preventDefault(),e.stopPropagation(),this.selectByKeyboard(e)));if(13===e.keyCode||this.tabSelect&&9===e.keyCode)return this.insertItem(),e.preventDefault(),void e.stopPropagation();if(27===e.keyCode)return void this.closePanel()}(e.keyCode>=48&&e.keyCode<=90||8===e.keyCode)&&setTimeout((function(){t.handleInput()}),50),8===e.keyCode&&this.handleDelete(e)},handleCompositionStart:function(){this.hasComposition=!0},handleCompositionEnd:function(){this.hasComposition=!1,this.handleInput()},handleInput:function(e){if(!this.hasComposition){var t=this.$el.querySelector("[contenteditable]");this.$emit("input",t.innerHTML);var o=n.i(r.c)();if(o){var i=this.atItems,a=this.avoidEmail,s=this.allowSpaces,l=this.showUnique,u=!0,c=o.toString(),d=n.i(r.a)(c,i),f=d.at,p=d.index;p<0&&(u=!1);var h=c[p-1],_=c.slice(p+f.length,c.length);if(a&&/^[a-z0-9]$/i.test(h)&&(u=!1),!s&&/\s/.test(_)&&(u=!1),/^\s/.test(_)&&(u=!1),u){var m=this.members,g=this.filterMatch,b=this.itemName;!e&&_&&this.$emit("at",_);var v=m.filter((function(e){var t=b(e);return g(t,_,f)}));if(u=!1,v.length&&(u=!0,!l)){var y=v[0];_===b(y)&&(u=!1)}u?this.openPanel(v,o,p,f):this.closePanel()}else this.closePanel()}}},closePanel:function(){this.atwho&&(this.atwho=null)},openPanel:function(e,t,n,r){var o=this,i=function(){var i=t.cloneRange();i.setStart(i.endContainer,n+r.length);var a=i.getClientRects()[0];o.atwho={range:t,offset:n,list:e,x:a.left,y:a.top-4,cur:0}};this.atwho?i():setTimeout(i,10)},scrollToCur:function(){var e=this.$refs.cur[0],t=e.parentElement.parentElement;n.i(r.f)(e,t)},selectByMouse:function(e){var t=+n.i(r.g)(e.target,(function(e){return e.getAttribute("data-index")})).getAttribute("data-index");this.atwho=a({},this.atwho,{cur:t})},selectByKeyboard:function(e){var t=38===e.keyCode?-1:1,n=this.atwho,r=n.cur,o=n.list,i=this.loop?(r+t+o.length)%o.length:Math.max(0,Math.min(r+t,o.length-1));this.atwho=a({},this.atwho,{cur:i})},insertText:function(e,t){t.deleteContents();var o=t.endContainer;if(o.nodeType===Node.TEXT_NODE){var i=t.endOffset;o.data=o.data.slice(0,i)+e+o.data.slice(i),t.setEnd(o,i+e.length)}else{var a=document.createTextNode(e);t.insertNode(a),t.setEndAfter(a)}t.collapse(!1),n.i(r.e)(t),this.dispatchInput()},insertHtml:function(e,t){t.deleteContents();var o=t.endContainer,i=document.createElement("span");if(i.appendChild(document.createTextNode(" ")),i.appendChild(this.htmlToElement(e)),i.appendChild(document.createTextNode(" ")),i.setAttribute("data-at-embedded",""),i.setAttribute("contenteditable",!1),o.nodeType===Node.TEXT_NODE){var a=t.endOffset,s=o.splitText(a);o.parentNode.insertBefore(i,s),t.setEndBefore(s)}else{var l=document.createTextNode(suffix);t.insertNode(i),t.setEndAfter(i),t.insertNode(l),t.setEndAfter(l)}t.collapse(!1),n.i(r.e)(t)},insertItem:function(){var e=this.atwho,t=e.range,o=(e.offset,e.list),i=e.cur,a=this.suffix,s=this.atItems,l=this.itemName,u=this.customsEmbedded,c=t.cloneRange(),d=t.toString(),f=n.i(r.a)(d,s),p=f.at,h=f.index,_=u?h:h+p.length;c.setStart(c.endContainer,_),n.i(r.e)(c),n.i(r.e)(c);var m=o[i];if(u){var g=this.$refs.embeddedItem.firstChild.innerHTML;this.insertHtml(g,c)}else{var b=l(m)+a;this.insertText(b,c)}this.$emit("insert",m),this.handleInput()},htmlToElement:function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}}},function(e,t,n){(e.exports=n(4)()).push([e.i,".atwho-view{color:#000;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,.1);min-width:120px;z-index:11110!important}.atwho-ul{list-style:none}.atwho-li{display:block}.atwho-view{border-radius:6px;box-shadow:0 0 10px 0 hsla(211,9%,44%,.5)}.atwho-ul{max-height:135px;padding:0;margin:0}.atwho-li{box-sizing:border-box;height:27px;padding:0 12px;white-space:nowrap;display:flex;align-items:center}.atwho-li span{overflow:hidden;text-overflow:ellipsis}.atwho-cur{background:#5bb8ff;color:#fff}.atwho-wrap{position:relative}.atwho-panel{position:absolute}.atwho-inner{position:relative}.atwho-view{position:absolute;bottom:0;left:-.8em;cursor:default;background-color:hsla(0,0%,100%,.94);min-width:140px;max-width:180px;max-height:200px;overflow-y:auto}.atwho-view::-webkit-scrollbar{width:11px;height:11px}.atwho-view::-webkit-scrollbar-track{background-color:#f5f5f5}.atwho-view::-webkit-scrollbar-thumb{min-height:36px;border:2px solid transparent;border-top:3px solid transparent;border-bottom:3px solid transparent;background-clip:padding-box;border-radius:7px;background-color:#c4c4c4}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){var r=n(0)(n(2),null,null,null);e.exports=r.exports},function(e,t,n){n(9);var r=n(0)(null,n(7),null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrap",staticClass:"atwho-wrap",on:{compositionstart:e.handleCompositionStart,compositionend:e.handleCompositionEnd,input:function(t){e.handleInput()},"!keydown":function(t){return e.handleKeyDown(t)}}},[e.atwho?n("div",{staticClass:"atwho-panel",style:e.style},[n("div",{staticClass:"atwho-inner"},[n("div",{staticClass:"atwho-view"},[n("ul",{staticClass:"atwho-ul"},e._l(e.atwho.list,(function(t,r){return n("li",{key:r,ref:e.isCur(r)&&"cur",refInFor:!0,staticClass:"atwho-li",class:e.isCur(r)&&"atwho-cur",attrs:{"data-index":r},on:{mouseenter:e.handleItemHover,click:e.handleItemClick}},[e._t("item",[n("span",{domProps:{textContent:e._s(e.itemName(t))}})],{item:t})],2)})))])])]):e._e(),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"embeddedItem"},[e._t("embeddedItem",null,{current:e.currentItem})],2),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},function(e,t){var n={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},o=r((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),i=r((function(){return document.head||document.getElementsByTagName("head")[0]})),a=null,s=0,l=[];function u(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=n[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(f(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(f(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:s}}}}function c(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(a):t.push(n[i]={id:i,parts:[a]})}return t}function d(e){var t=document.createElement("style");return t.type="text/css",function(e,t){var n=i(),r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}(e,t),t}function f(e,t){var n,r,o;if(t.singleton){var i=s++;n=a||(a=d(t)),r=_.bind(null,n,i,!1),o=_.bind(null,n,i,!0)}else n=d(t),r=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){!function(e){e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(t=t||{}).singleton&&(t.singleton=o()),void 0===t.insertAt&&(t.insertAt="bottom");var r=c(e);return u(r,t),function(e){for(var o=[],i=0;i<r.length;i++){var a=r[i];(s=n[a.id]).refs--,o.push(s)}for(e&&u(c(e),t),i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete n[s.id]}}}};var p,h=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]),n(8)(r,{}),r.locals&&(e.exports=r.locals)}])}}]);
//# sourceMappingURL=app-layout.js.map?id=e0975c37e6e61d992205