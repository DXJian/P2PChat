(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{CL1i:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".progress-ring-wrapper{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;background:hsla(0,0%,100%,.7);display:flex;justify-content:center;align-items:center;padding-bottom:2.5rem;z-index:1}",""])},DUHD:function(t,e,a){"use strict";a("xexB");var r=a("bPil"),o=a.n(r),i=(a("1qIj"),a("yPMx")),s=a.n(i),n=(a("ghrA"),a("jijp"),a("Uj6y"),a("zjZG"),a("uI7J"),a("fAvY"),a("rmCP"),a("/11s"),a("TR9W"),a("8dmp"),a("P3R9"),a("ZaQH"),a("zogX"),a("/dVY"),a("Uqfo"),a("Ol/C"),a("LBFR"),a("7VnU"),a("nZ3r"),a("lUM2")),l=Object(n.b)(),u={image:{dropdown:["insertImage","upload"],ico:"insertImage"},textAlign:{dropdown:["justifyLeft","justifyCenter","justifyRight","justifyFull"],ico:"justifyFull"},textDecoration:{dropdown:["underline","del","superscript","subscript"],ico:"underline"},lists:{dropdown:["unorderedList","orderedList"],ico:"unorderedList"},extras:{dropdown:["removeformat","undo","redo","horizontalRule","preformatted"],ico:"removeformat"}},d={name:"editor-wrapper",components:{Trumbowyg:o.a},props:{disabled:{type:Boolean,default:!1,description:"Whether input is required (adds an asterix *)"},required:{type:Boolean,default:!1,description:"Whether input is required (adds an asterix *)"},config:{type:[String,Object]},autogrow:{type:Boolean,default:!1},height:{type:String,default:""},label:{type:String,default:"Enter content"},value:{type:String,description:"Selected value"},error:{type:String,description:"Select error (below select)"}},data:function(){return{configObj:{btnsDef:{image:u.image,textAlign:u.textAlign,textDecoration:u.textDecoration,lists:u.lists},btns:[["undo","redo"],["formatting","strong","em","textDecoration"],["foreColor","backColor"],["textAlign","lists"],["horizontalRule","link","image","table","specialChars","emoji"],["preformatted"],["removeformat"],["fullscreen"]],plugins:{resizimg:{minSize:64,step:16},table:{rows:8,columns:8},upload:{serverPath:"/api/uploads/image",fileFieldName:"image",headers:{"X-Requested-With":"XMLHttpRequest",withCredentials:!0,"x-xsrf-token":"".concat(l)},urlPropertyName:"url",error:function(t){}}},autogrow:!1,imageWidthModalEdit:!0,tagsToRemove:["script","link","iframe","input"],tagsToKeep:["hr","img","embed"],svgPath:s.a},minConfigObj:{btnsDef:{image:u.image,textAlign:u.textAlign,textDecoration:u.textDecoration,lists:u.lists,extras:u.extras},btns:[["formatting","strong","em","textDecoration"],["foreColor","backColor"],["textAlign","lists"],["image","extras"],["fullscreen"]],plugins:{resizimg:{minSize:64,step:16},table:{rows:8,columns:8},upload:{serverPath:"/api/uploads/image",fileFieldName:"image",headers:{"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer ".concat(l)},urlPropertyName:"url",error:function(t){}}},autogrow:!1,imageWidthModalEdit:!0,tagsToRemove:["script","link","iframe","input"],tagsToKeep:["hr","img","embed"],svgPath:s.a},leastConfigObj:{btnsDef:{image:u.image,textAlign:u.textAlign,textDecoration:u.textDecoration,lists:u.lists,extras:u.extras},btns:[["formatting","strong","em","textDecoration"],["foreColor","backColor"],["textAlign"],["extras"]],plugins:{resizimg:{minSize:64,step:16}},autogrow:!1,imageWidthModalEdit:!0,tagsToRemove:["script","link","iframe","input"],tagsToKeep:["hr","img","embed"],svgPath:s.a}}},computed:{content:{get:function(){return this.value},set:function(t){t=t.replace(/<[^>]+/gim,(function(t){return t.replace(/ on\w+="[^"]*"/gim,"")})),this.$emit("input",t),this.$emit("update:error","")}},computedConfig:function(){return this.config?"minimal"===this.config?this.minConfigObj:"least"===this.config?this.leastConfigObj:this.config.hasOwnProperty("btnsDef")?this.config:this.configObj:this.configObj}},methods:{},mounted:function(){this.configObj.autogrow=this.autogrow,this.minConfigObj.autogrow=this.autogrow,this.leastConfigObj.autogrow=this.autogrow}},c=(a("dnLm"),a("KHd+")),m=Object(c.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["editor-wrapper",{"not-empty":!!t.value},{required:t.required},t.height?"height-"+t.height:""]},[a("label",{staticClass:"input-group-material-label"},[t._v(t._s(t.label)+" "),t.required?a("span",{staticClass:"required-asterix"},[t._v("*")]):t._e()]),t._v(" "),t._t("default",(function(){return[a("trumbowyg",{staticClass:"form-control",attrs:{config:t.computedConfig,name:"content"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})]})),t._v(" "),t._t("errorBlock",(function(){return[t.error?a("div",{staticClass:"text-danger invalid-feedback error-block"},[t._v("\n            "+t._s(t.error)+"\n        ")]):t._e()]}))],2)}),[],!1,null,null,null);e.a=m.exports},Q7RW:function(t,e,a){"use strict";var r=a("BcCH"),o=a("ICll"),i=a("L2JU");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u={name:"image-uploader",props:{existingImage:{type:String,default:""},existingMedia:{type:Object,default:null},placeholder:{type:String,default:"https://via.placeholder.com/200/e1e2e4/b1b2b4/?text=Upload%20Image"},url:{type:String,required:!0},buttonColor:{type:String,default:"primary"},actionLabel:{type:String,default:"global.choose"},nameLabel:{type:String,default:"upload.image"},darkBg:{type:Boolean,default:!1},profile:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},removeButton:{type:Boolean,default:!0},removeFromServer:{type:Boolean,default:!0},showProgress:{type:Boolean,default:!0},size:{type:String,default:""},fieldName:{type:String,default:"file"}},data:function(){return{isLoading:!1,imageRemoved:!1,uploadedImage:"",imageToUpload:"",actionLabelUpdated:"",files:[]}},computed:n(n({},Object(i.c)("config",["configs","vars"])),{},{imageSource:function(){var t=this.imageToUpload?this.imageToUpload:this.uploadedImage?this.uploadedImage:this.existingImage?this.existingImage:"";return t||this.placeholder},computedActionLabel:function(){return this.existingImage||this.uploadedImage?"global.change":this.actionLabel},showWhileUploading:function(){return!(!this.imageToUpload||!this.files[0]||"uploading"!==this.files[0].status)}}),methods:{generateImagePreview:function(t){var e=this;this.isLoading=!0;setTimeout((function(){for(var t=e.$refs.file.files,a=/(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i,r=0;r<t.length;r++)a.test(t[r].name)?e.configs.system&&e.configs.system.postMaxSize&&t[r].size>e.configs.system.postMaxSize?(e.isLoading=!1,e.$toasted.error(e.$t("global.file_too_large",{attribute:t[r].name}),e.$toastConfig.error)):e.files.push({uuid:uuid(),file:t[r],status:"waiting",progress:0}):(e.isLoading=!1,e.$toasted.error(e.$t("global.file_not_supported",{attribute:t[r].name.split(".").pop()}),e.$toastConfig.error));e.files.length?e.createImage(e.files[0].file):e.isLoading=!1}),1e3)},createImage:function(t){var e=this,a=new FileReader;a.onload=function(t){e.imageToUpload=t.target.result},a.onerror=function(t){console.error("File could not be read! Code "+t.target.error.code)},a.readAsDataURL(t),this.isLoading=!1},cancelUpload:function(){this.files=[],this.imageToUpload=""},uploadImage:function(){var t=this,e=this.files[0];e.status="waiting";var a=new FormData;this.files[0].file&&this.files[0].file.size>this.configs.system.postMaxSize?this.$toasted.error(this.t("upload.file_too_large"),this.$toastConfig.error):(a.append(this.fieldName,this.files[0].file),e.status="uploading",o.d({url:this.url,data:a},(function(t){e.progress=Math.round(100*t.loaded/t.total)})).then((function(a){e.status="uploaded",delete e.cancel,t.$toasted.success(a.message,t.$toastConfig.success),t.imageToUpload="",t.files=[],t.uploadedImage=a.image,t.$emit("uploaded",a.image)})).catch((function(a){e.status="error",t.$emit("error",a),formUtil.handleErrors(a)})))},removeImage:function(){var t=this;this.removeFromServer?formUtil.confirmAction().then((function(e){e.value&&(t.isLoading=!0,o.b({url:t.url}).then((function(e){t.$toasted.success(e.message,t.$toastConfig.success),t.imageRemoved=!0,t.uploadedImage="",t.$emit("removed"),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)})))})):(this.imageRemoved=!0,this.uploadedImage="",this.$emit("removed"))},startUpload:function(){this.files.length?this.uploadImage():this.$emit("noNeed")}},mounted:function(){r.a.$off("START_UPLOAD",this.startUpload),r.a.$on("START_UPLOAD",this.startUpload),r.a.$off("CANCEL_UPLOAD",this.cancelUpload),r.a.$on("CANCEL_UPLOAD",this.cancelUpload),this.uploadButtonText=this.label},destroyed:function(){r.a.$off("START_UPLOAD",this.startUpload),r.a.$off("CANCEL_UPLOAD",this.cancelUpload)}},d=(a("fPNp"),a("KHd+")),c=Object(d.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["sm-uploader image-uploader",t.size]},[a("animated-loader",{attrs:{"is-loading":t.isLoading||!t.showProgress&&t.showWhileUploading,"loader-color":t.vars.loaderColor}}),t._v(" "),t.showProgress&&t.showWhileUploading?a("div",{staticClass:"progress-ring-wrapper"},[a("progress-ring",{attrs:{value:t.files[0].progress,"stroke-color":t.vars.loaderColor}})],1):t._e(),t._v(" "),t.imageSource?a("div",{class:["image-display-wrapper",{"dark-bg":t.darkBg}]},[a("div",{class:["image-display",{"image-profile":t.profile}]},[t.imageToUpload?a("img",{staticClass:"img-responsive",attrs:{src:t.imageToUpload}}):a("img",{staticClass:"img-responsive",attrs:{src:t.imageSource}})]),t._v(" "),t.imageToUpload?a("div",{staticClass:"submit-actions"},[a("base-button",{attrs:{type:"button",design:"light",size:"sm"},on:{click:t.cancelUpload}},[a("i",{staticClass:"fas fa-times"}),t._v(" "+t._s(t.$t("general.cancel")))]),t._v(" "),t.showUploadButton?a("base-button",{attrs:{type:"button",design:"success",size:"sm"},on:{click:t.uploadImage}},[a("i",{staticClass:"fas fa-arrow-circle-right"}),t._v(" "+t._s(t.$t("general.upload")))]):a("base-button",{attrs:{type:"button",design:t.buttonColor,size:"sm"}},[a("i",{staticClass:"far fa-image"}),t._v(" "+t._s(t.$t("global.change",{attribute:t.$t(t.nameLabel)})))])],1):t._e()]):t._e(),t._v(" "),t.imageToUpload?t._e():a("div",{staticClass:"image-uploader-form"},[t.existingImage&&t.removeButton?a("div",{staticClass:"existing-image-actions"},[a("base-button",{attrs:{type:"button",design:"danger",size:"sm"},on:{click:t.removeImage}},[a("i",{staticClass:"fas fa-trash"}),t._v(" "+t._s(t.$t("general.remove")))])],1):t._e(),t._v(" "),a("div",{staticClass:"file-selector"},[a("label",{class:"btn btn-"+t.buttonColor+" btn-sm"},[a("input",{ref:"file",staticClass:"selector-input",attrs:{name:"file",type:"file",id:"file",accept:"image/*"},on:{change:t.generateImagePreview}}),t._v(" "),t._m(0),t._v(" "),a("span",{staticClass:"button-label"},[t._v(t._s(t.$t(t.computedActionLabel,{attribute:t.$t(t.nameLabel)})))])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"button-icon"},[e("i",{staticClass:"fas fa-upload"})])}],!1,null,null,null);e.a=c.exports},dnLm:function(t,e,a){"use strict";a("xusK")},fPNp:function(t,e,a){"use strict";a("oq77")},fbZs:function(t,e,a){"use strict";a.r(e);var r=a("g+26"),o=a("DUHD"),i=a("Q7RW"),s=a("BcCH"),n=a("7m4s"),l=a.n(n),u={extends:r.a,components:{EditorWrapper:o.a,ImageUploader:i.a,KProgress:l.a},data:function(){return{formData:{uuid:null,title:"",body:"",slug:"",status:!1,template:null,parent:null,media:null,meta:{seoTitle:"",keywords:"",description:"",showFooter:!1}},preRequisite:{templates:[],parents:[]},initUrl:"utility/notes",seoRecommendedMinChars:180,seoRecommendedMaxChars:220,progressBarColors:["#f5365c","#fb6340","#ffd600","#5e72e4","#2dce89"]}},computed:{imageUploadURL:function(){return"notes/".concat(this.formData.uuid,"/media")},seoTitleProgressStatus:function(){var t=this.getProgress(this.formData.meta.seoTitle,50);return t<50?"error":t<99?"success":"warning"},seoDescProgressStatus:function(){var t=this.getProgress(this.formData.meta.description,145,5);return t<50?"error":t<99?"success":"warning"},formStatus:function(){return this.formData.uuid?this.editData&&!this.duplicate?"editing":"saved":"creating"},seoTitle:{get:function(){return this.formData.meta.seoTitle||this.formData.title},set:function(t){this.formData.meta.seoTitle=t}},seoDescription:{get:function(){return this.formData.meta.description?this.formData.meta.description:this.getExcerpt(this.formData.body)},set:function(t){this.formData.meta.description=t}},seoUrl:function(){return this.getLocation()+"/.../"+this.formData.slug}},methods:{getProgress:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=parseInt((t.length/(e+a)*100).toFixed(0));return r>100?100:r},publish:function(){this.formData.status=!0,this.submit()},draft:function(){this.formData.status=!1,this.submit()},createSlug:function(){this.showKeepAdding&&this.formData.title!=this.initialFormData.title?this.formData.slug=this.formData.title.kebabCase():this.formData.slug=this.formData.slug?this.formData.slug:this.formData.title.kebabCase()},getLocation:function(){return document.location.origin},uploadedImage:function(){"editing"===this.formStatus?this.getEntityData():this.$router.back()},uploadedImageError:function(){"saved"===this.formStatus?this.$router.back():s.a.$emit("CANCEL_UPLOAD")},noNeedCallback:function(){"saved"===this.formStatus?this.$router.back():this.getEntityData()},afterEditData:function(){this.duplicate&&(this.formData.uuid=null,this.formData.status=!1,this.formData.media=null)},afterSubmit:function(t){this.formData.uuid||(this.formData.uuid=t.page.uuid),this.initialFormData=_.cloneDeep(this.formData),this.formData.uuid&&this.$nextTick((function(){s.a.$emit("START_UPLOAD")}))},getExcerpt:function(t){return formUtil.getExcerpt(formUtil.stripHtml(t),300)}},mounted:function(){this.getInitialData()}},d=a("KHd+"),c=Object(d.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.doNothing.apply(null,arguments)}}},[a("animated-loader",{attrs:{"is-loading":t.isLoading||t.isFetching,"loader-color":t.vars.loaderColor}}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-9"},[a("base-container",{attrs:{boxed:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-3"},[a("base-input",{attrs:{"auto-focus":"",label:t.$t("utility.note.props.title"),type:"text",error:t.formErrors.title,required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"title",e)},blur:t.createSlug},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("div",{staticClass:"col-12 mt-4 mb-3"},[a("editor-wrapper",{attrs:{label:t.$t("utility.note.props.body"),error:t.formErrors.body,required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"body",e)}},model:{value:t.formData.body,callback:function(e){t.$set(t.formData,"body",e)},expression:"formData.body"}})],1),t._v(" "),a("div",{staticClass:"col-12 mb-3"},[a("base-input",{attrs:{label:t.$t("utility.note.props.slug"),type:"text",error:t.formErrors.slug,format:"kebabCase",required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"slug",e)},blur:t.createSlug,focus:t.createSlug},model:{value:t.formData.slug,callback:function(e){t.$set(t.formData,"slug",e)},expression:"formData.slug"}}),t._v(" "),t.formData.slug?a("div",{staticClass:"small text-muted"},[t._v(t._s(t.getLocation()+"/.../"+t.formData.slug))]):t._e()],1)]),t._v(" "),a("fieldset",{staticClass:"fieldset primary mt-5"},[a("legend",[t._v(t._s(t.$t("site.seo")))]),t._v(" "),t.seoTitle?a("div",{staticClass:"search-preview-wrapper mb-4"},[a("h6",{staticClass:"text-muted mb-3"},[t._v(t._s(t.$t("site.google_preview")))]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t._f("charLimit")(t.seoTitle,50)))]),t._v(" "),a("div",{staticClass:"url"},[t._v(t._s(t._f("charLimit")(t.seoUrl,70)))]),t._v(" "),a("div",{staticClass:"description"},[t._v(t._s(t._f("charLimit")(t.seoDescription,145)))])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-3"},[a("base-input",{attrs:{label:t.$t("utility.note.props.seo_title"),type:"text",error:t.formErrors.seoTitle},on:{"update:error":function(e){return t.$set(t.formErrors,"seoTitle",e)}},model:{value:t.formData.meta.seoTitle,callback:function(e){t.$set(t.formData.meta,"seoTitle",e)},expression:"formData.meta.seoTitle"}}),t._v(" "),t.formData.meta.seoTitle?a("k-progress",{attrs:{"show-text":!1,percent:t.getProgress(t.formData.meta.seoTitle,50),status:t.seoTitleProgressStatus}}):t._e()],1),t._v(" "),a("div",{staticClass:"col-12 mb-3"},[a("base-textarea",{attrs:{rows:"2",label:t.$t("utility.note.props.description"),error:t.formErrors.description,"char-count":""},on:{"update:error":function(e){return t.$set(t.formErrors,"description",e)}},model:{value:t.formData.meta.description,callback:function(e){t.$set(t.formData.meta,"description",e)},expression:"formData.meta.description"}}),t._v(" "),t.formData.meta.description?a("k-progress",{attrs:{"show-text":!1,percent:t.getProgress(t.formData.meta.description,145,5),status:t.seoDescProgressStatus}}):t._e()],1),t._v(" "),a("div",{staticClass:"col-12"},[a("base-textarea",{attrs:{rows:"2",label:t.$t("utility.note.props.keywords"),error:t.formErrors.keywords},on:{"update:error":function(e){return t.$set(t.formErrors,"keywords",e)}},model:{value:t.formData.meta.keywords,callback:function(e){t.$set(t.formData.meta,"keywords",e)},expression:"formData.meta.keywords"}})],1)])])])],1),t._v(" "),a("div",{staticClass:"col-12 col-md-3 d-flex flex-column"},[a("card",{staticClass:"mb-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("view-single",{attrs:{"data-classes":"small",label:t.$t("utility.note.note")+" "+t.$t("utility.note.props.status"),value:t.formData.status?t.$t("site.published"):t.$t("site.draft")}})],1),t._v(" "),t.editData&&!t.duplicate?[a("div",{staticClass:"col-12"},[a("view-date",{attrs:{"data-classes":"small",label:t.$t("general.created_at"),value:t.formData.createdAt,"to-format":t.vars.defaultDateTimeFormat}})],1),t._v(" "),a("div",{staticClass:"col-12"},[a("view-date",{attrs:{"data-classes":"small",label:t.$t("general.updated_at"),value:t.formData.updatedAt,"to-format":t.vars.defaultDateTimeFormat}})],1)]:t._e()],2),t._v(" "),t.formHasErrors?a("div",{staticClass:"alert alert-danger my-3",attrs:{role:"alert"}},[a("h6",{staticClass:"m-0"},[t._v(t._s(t.$t("general.form_has_errors")))])]):t._e(),t._v(" "),a("div",{staticClass:"form-footer mt-3"},[t.formData.status?a("div",{key:"published",staticClass:"both-side"},[a("base-button",{staticClass:"text-center",attrs:{type:"button",design:"link",tabindex:"-1"},on:{click:t.draft}},[t._v(t._s(t.$t("site.unpublish")))]),t._v(" "),a("base-button",{attrs:{type:"button",design:"primary"},on:{click:t.publish}},[t._v(t._s(t.$t("general.update")))])],1):a("div",{key:"draft",staticClass:"both-side"},[a("base-button",{attrs:{type:"button",design:"light"},on:{click:t.draft}},[t.formData.uuid?[t._v(t._s(t.$t("general.update")))]:[t._v(t._s(t.$t("general.save")))]],2),t._v(" "),a("base-button",{attrs:{type:"button",design:"primary"},on:{click:t.publish}},[t._v(t._s(t.$t("general.publish")))])],1)])]),t._v(" "),a("card",{staticClass:"mb-4",attrs:{title:t.$t("site.featured_image")}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 d-flex justify-content-center"},[a("image-uploader",{attrs:{url:t.imageUploadURL,"existing-image":t.formData.media?t.formData.media.url:null,"existing-media":t.formData.media,"show-upload-button":!t.showKeepAdding},on:{uploaded:t.uploadedImage,error:t.uploadedImageError,noNeed:t.noNeedCallback,removed:t.getEntityData}})],1)])]),t._v(" "),a("card",{staticClass:"mb-4",attrs:{title:t.$t("site.attributes")}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-3"},[a("base-select",{attrs:{options:t.preRequisite.templates,label:t.$t("site.page_template.template"),error:t.formErrors.template,required:"","preselect-first":""},on:{"update:error":function(e){return t.$set(t.formErrors,"template",e)}},model:{value:t.formData.template,callback:function(e){t.$set(t.formData,"template",e)},expression:"formData.template"}})],1),t._v(" "),a("div",{staticClass:"col-12 mb-3"},[a("base-select",{attrs:{options:t.preRequisite.pages,label:t.$t("utility.note.props.parent"),error:t.formErrors.parent,"allow-empty":!0},on:{"update:error":function(e){return t.$set(t.formErrors,"parent",e)}},model:{value:t.formData.parent,callback:function(e){t.$set(t.formData,"parent",e)},expression:"formData.parent"}})],1)])]),t._v(" "),a("card",{staticClass:"flex-grow",attrs:{title:t.$t("site.options")}},[a("div",{staticClass:"row"})])],1)])],1)}),[],!1,null,null,null);e.default=c.exports},oq77:function(t,e,a){var r=a("CL1i");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(t.exports=r.locals)},vwhl:function(t,e,a){(e=t.exports=a("I1BE")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);",""]),e.push([t.i,".trumbowyg-box,.trumbowyg-editor{margin-top:0}.trumbowyg-box{border-radius:.25rem;border:.0625rem solid #e9ecf1;transition:box-shadow .15s ease;box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02)}.trumbowyg-box .trumbowyg-button-pane{background:#f5f6f7;border-radius:.25rem .25rem 0 0;border-bottom:.0625rem solid #e9ecf1;z-index:auto}.trumbowyg-box .trumbowyg-button-pane .trumbowyg-button-group:after,.trumbowyg-box .trumbowyg-button-pane:after{background:#e9ecf1}.editor-wrapper.height-xs .trumbowyg-box,.editor-wrapper.height-xs .trumbowyg-editor{min-height:100px}.editor-wrapper.height-sm .trumbowyg-box,.editor-wrapper.height-sm .trumbowyg-editor{min-height:150px}.editor-wrapper.height-md .trumbowyg-box,.editor-wrapper.height-md .trumbowyg-editor{min-height:300px}.editor-wrapper.height-lg .trumbowyg-box,.editor-wrapper.height-lg .trumbowyg-editor{min-height:450px}.editor-wrapper.height-xl .trumbowyg-box,.editor-wrapper.height-xl .trumbowyg-editor{min-height:600px}.editor-wrapper.height-xxl .trumbowyg-box,.editor-wrapper.height-xxl .trumbowyg-editor{min-height:750px}",""])},xusK:function(t,e,a){var r=a("vwhl");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(t.exports=r.locals)},yPMx:function(t,e){t.exports="/images/trumbowyg-icons.svg?5b01ba8be11eb713b41763472b62eefe"}}]);
//# sourceMappingURL=view.js.map?id=8c2be5528527777b954b