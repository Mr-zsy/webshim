(function(c){if(window.jQuery)c(jQuery),c=jQuery.noop;"function"===typeof define&&define.amd&&define.amd.jQuery&&define("polyfiller",["jquery"],c)})(function(c){var z=c(document.scripts||"script"),o=c.event.special,A=c([]),g=window.Modernizr,r=window.asyncWebshims,B=g.addTest,w=parseFloat(c.browser.version,10),p=window.Object;g.genericDOM=!!c("<video><div></div></video>")[0].innerHTML;g.advancedObjectProperties=g.objectAccessor=g.ES5=!!("create"in p&&"seal"in p);var d={version:"1.8.9RC1",cfg:{useImportantStyles:!0,
waitReady:!0,extendNative:!0,loadStyles:!0,basePath:function(){var a=z.filter('[src*="polyfiller.js"]'),a=a[0]||a.end()[a.end().length-1],a=(c.support.hrefNormalized?a.src:a.getAttribute("src",4)).split("?")[0];return a=a.slice(0,a.lastIndexOf("/")+1)+"shims/"}()},bugs:{},browserVersion:w,modules:{},features:{},featureList:[],setOptions:function(a,b){"string"==typeof a&&void 0!==b?n[a]=!c.isPlainObject(b)?b:c.extend(!0,n[a]||{},b):"object"==typeof a&&c.extend(!0,n,a)},addPolyfill:function(a,b){var b=
b||{},e=b.f||a;if(!k[e])k[e]=[],k[e].delayReady=0,d.featureList.push(e),n[e]={};k[e].push(a);b.options=c.extend(n[e],b.options);x(a,b);b.methodNames&&c.each(b.methodNames,function(a,b){d.addMethodName(b)})},polyfill:function(){var a=function(b){var f=[],h,i=function(){c("html").removeClass("loading-polyfills long-loading-polyfills");c(window).unbind(".lP");clearTimeout(h)};f.push("loading-polyfills");c(window).bind("load.lP error.lP",i);h=setTimeout(function(){c("html").addClass("long-loading-polyfills")},
600);n.waitReady&&c.isReady&&d.warn("Call webshims.polyfill before DOM-Ready or set waitReady to false.");q(b,i);n.useImportantStyles&&f.push("polyfill-important");f[0]&&c("html").addClass(f.join(" "));n.loadStyles&&s.loadCSS("styles/shim.css");a=c.noop},b;return function(e){var f=[],e=e||d.featureList;"string"==typeof e&&(e=e.split(" "));b||(b=-1!==c.inArray("forms",e),!b&&-1!==c.inArray("forms-ext",e)&&(e.push("forms"),b=!0));n.waitReady&&(c.readyWait++,q(e,function(){c.ready(!0)}));c.each(e,function(a,
b){k[b]?(b!==k[b][0]&&q(k[b],function(){l(b,!0)}),f=f.concat(k[b])):(d.warn("could not find webshims-feature (aborted): "+b),l(b,!0))});a(e);t(f)}}(),reTest:function(){var a,b,e=function(e,h){var i=m[h],d=h+"Ready",g;if(i&&!i.loaded&&!(i.test&&c.isFunction(i.test)?i.test([]):i.test)){o[d]&&delete o[d];if((g=k[i.f])&&!b)g.delayReady++,q(h,function(){g.delayReady--;l(i.f,g.callReady)});a.push(h)}};return function(d,h){b=h;"string"==typeof d&&(d=d.split(" "));a=[];c.each(d,e);t(a)}}(),isReady:function(a,
b){if(k[a]&&0<k[a].delayReady){if(b)k[a].callReady=!0;return!1}a+="Ready";if(b){if(o[a]&&o[a].add)return!0;o[a]=c.extend(o[a]||{},{add:function(b){b.handler.call(this,a)}});c.event.trigger(a)}return!(!o[a]||!o[a].add)||!1},ready:function(a,b,e){"string"==typeof a&&(a=a.split(" "));e||(a=c.map(c.grep(a,function(a){return!l(a)}),function(a){return a+"Ready"}));a.length?(e=a.shift(),c(document).one(e,function(){q(a,b,!0)})):b(c,d,window,document)},fixHTML5:function(a){return a},capturingEvents:function(a,
b){document.addEventListener&&("string"==typeof a&&(a=[a]),c.each(a,function(a,f){var h=function(a){a=c.event.fix(a);b&&d.capturingEventPrevented&&d.capturingEventPrevented(a);return c.event.handle.call(this,a)};o[f]=o[f]||{};!o[f].setup&&!o[f].teardown&&c.extend(o[f],{setup:function(){this.addEventListener(f,h,!0)},teardown:function(){this.removeEventListener(f,h,!0)}})}))},register:function(a,b){var e=m[a];if(e){if(e.noAutoCallback){var f=function(){b(c,d,window,document,void 0,e.options);l(a,!0)};
e.d?q(e.d,f):f()}}else d.warn("can't find module: "+a)},c:{},loader:{addModule:function(a,b){m[a]=b;b.name=b.name||a;if(!b.c)b.c=[];c.each(b.c,function(b,c){d.c[c]||(d.c[c]=[]);d.c[c].push(a)})},loadList:function(){var a=[],b=function(b,e){"string"==typeof e&&(e=[e]);c.merge(a,e);s.loadScript(b,!1,e)},e=function(b,e){if(l(b)||-1!=c.inArray(b,a))return!0;var d=m[b];if(d)if(d=d.test&&c.isFunction(d.test)?d.test(e):d.test)l(b,!0);else return!1;return!0},f=function(a,b){if(a.d&&a.d.length){var d=function(a,
d){!e(d,b)&&-1==c.inArray(d,b)&&b.push(d)};c.each(a.d,function(a,b){m[b]?d(a,b):k[b]&&(c.each(k[b],d),q(k[b],function(){l(b,!0)}))});if(!a.noAutoCallback)a.noAutoCallback=!0}};return function(h){var i,g=[],j,k,l=function(e,h){k=h;c.each(d.c[h],function(b,d){if(-1==c.inArray(d,g)||-1!=c.inArray(d,a))return k=!1});if(k)return b("combos/"+k,d.c[k]),!1};for(j=0;j<h.length;j++)i=m[h[j]],!i||e(i.name,h)?i||d.warn("could not find: "+h[j]):(i.css&&s.loadCSS(i.css),i.loadInit&&i.loadInit(),i.loaded=!0,f(i,
h),g.push(i.name));for(j=0,h=g.length;j<h;j++)k=!1,i=g[j],-1==c.inArray(i,a)&&("noCombo"!=d.debug&&c.each(m[i].c,l),k||b(m[i].src||i,i))}}(),makePath:function(a){if(-1!=a.indexOf("//")||0===a.indexOf("/"))return a;-1==a.indexOf(".")&&(a+=".js");n.addCacheBuster&&(a+=n.addCacheBuster);return n.basePath+a},loadCSS:function(){var a,b=[];return function(d){d=this.makePath(d);-1==c.inArray(d,b)&&(a=a||c("link, style")[0]||c("script")[0],b.push(d),c('<link rel="stylesheet" />').insertBefore(a).attr({href:d}))}}(),
loadScript:function(){var a=[];return function(b,d,f){b=s.makePath(b);if(-1==c.inArray(b,a)){var h=function(){h=null;d&&d();f&&("string"==typeof f&&(f=f.split(" ")),c.each(f,function(a,b){m[b]&&(m[b].afterLoad&&m[b].afterLoad(),l(!m[b].noAutoCallback?b:b+"FileLoaded",!0))}))};a.push(b);window.require?require([b],h):window.sssl?sssl(b,h):window.yepnope?yepnope.injectJs(b,h):window.steal&&steal(b).then(h)}}}()}};c.webshims=d;var w=("https:"==location.protocol?"https://":"http://")+"ajax.googleapis.com/ajax/libs/",
C=w+"jqueryui/1.8.17/",n=d.cfg,k=d.features,l=d.isReady,q=d.ready,j=d.addPolyfill,m=d.modules,s=d.loader,t=s.loadList,x=s.addModule,u=[],D={warn:1,error:1};d.addMethodName=function(a){var a=a.split(":"),b=a[1];1==a.length&&(b=a[0]);a=a[0];c.fn[a]=function(){return this.callProp(b,arguments)}};c.fn.callProp=function(a,b){var e;b||(b=[]);this.each(function(){var f=c.prop(this,a);if(f&&f.apply){if(e=f.apply(this,b),void 0!==e)return!1}else d.warn(a+" is not a method of "+this)});return void 0!==e?e:
this};d.activeLang=function(){var a=navigator.browserLanguage||navigator.language||"";q("webshimLocalization",function(){d.activeLang(a)});return function(b){if(b)if("string"==typeof b)a=b;else if("object"==typeof b){var c=arguments,f=this;q("webshimLocalization",function(){d.activeLang.apply(f,c)})}return a}}();c.each(["log","error","warn","info"],function(a,b){d[b]=function(a){if((D[b]&&!1!==d.debug||d.debug)&&window.console&&console.log)return console[console[b]?b:"log"](a)}});(function(){c.isDOMReady=
c.isReady;if(c.isDOMReady)l("DOM",!0);else{var a=c.ready;c.ready=function(b){if(!0!==b&&!c.isDOMReady)document.body?(c.isDOMReady=!0,l("DOM",!0),c.ready=a):setTimeout(function(){c.ready(b)},13);return a.apply(this,arguments)}}c(function(){c.isDOMReady=!0;l("DOM",!0);setTimeout(function(){l("WINDOWLOAD",!0)},9999)});c(window).load(function(){l("WINDOWLOAD",!0)})})();(function(){var a=[];c.extend(d,{addReady:function(b){var c=function(a,c){d.ready("DOM",function(){b(a,c)})};a.push(c);c(document,A)},
triggerDomUpdate:function(b){if(!b||!b.nodeType)b&&b.jquery&&b.each(function(){d.triggerDomUpdate(this)});else{var e=b.nodeType;if(!(1!=e&&9!=e)){var f=b!==document?c(b):A;c.each(a,function(a,c){c(b,f)})}}}});c.fn.htmlPolyfill=function(a){a=c.fn.html.call(this,a?d.fixHTML5(a):a);a===this&&c.isDOMReady&&this.each(function(){1==this.nodeType&&d.triggerDomUpdate(this)});return a};c.each(["after","before","append","prepend","replaceWith"],function(a,e){c.fn[e+"Polyfill"]=function(a){a=c(d.fixHTML5(a));
c.fn[e].call(this,a);c.isDOMReady&&a.each(function(){1==this.nodeType&&d.triggerDomUpdate(this)});return this}});c.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(a,e){c.fn[e.replace(/[A-Z]/,function(a){return"Polyfill"+a})]=function(){c.fn[e].apply(this,arguments);d.triggerDomUpdate(this);return this}});c.fn.updatePolyfill=function(){d.triggerDomUpdate(this);return this};c.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(a,d){c.fn[d]=
function(){return this}})})();(function(){var a=p.prototype.hasOwnProperty,b=["configurable","enumerable","writable"],e=function(a){for(var c=0;3>c;c++)if(void 0===a[b[c]]&&("writable"!==b[c]||void 0!==a.value))a[b[c]]=!0},f=function(b){if(b)for(var c in b)a.call(b,c)&&e(b[c])};if(p.create)d.objectCreate=function(a,b,d){f(b);a=p.create(a,b);if(d)a.options=c.extend(!0,{},a.options||{},d),d=a.options;a._create&&c.isFunction(a._create)&&a._create(d);return a};p.defineProperty&&(d.defineProperty=function(a,
b,c){e(c);return p.defineProperty(a,b,c)});if(p.defineProperties)d.defineProperties=function(a,b){f(b);return p.defineProperties(a,b)};d.getOwnPropertyDescriptor=p.getOwnPropertyDescriptor;d.getPrototypeOf=p.getPrototypeOf})();x("jquery-ui",{src:C+"jquery-ui.min.js",test:function(){return!(!c.widget||!c.Widget)}});x("input-widgets",{src:"",test:function(){return!this.src||!(c.widget&&(!c.fn.datepicker||!c.fn.slider))}});x("swfobject",{src:w+"swfobject/2.2/swfobject.js",test:function(){return"swfobject"in
window}});j("es5",{test:!(!g.ES5||!Function.prototype.bind),c:[10,1,22]});j("dom-extend",{f:"dom-support",noAutoCallback:!0,d:["es5"],c:[10,9,12,17,16,8,1,24,19,11,13]});"localstorage"in g&&j("json-storage",{test:g.localstorage&&"sessionStorage"in window&&"JSON"in window,loadInit:function(){t(["swfobject"])},noAutoCallback:!0,c:[14]});"geolocation"in g&&j("geolocation",{test:g.geolocation,options:{destroyWrite:!0},d:["json-storage"],c:[14,15]});(function(){if("canvas"in g){var a;j("canvas",{src:"excanvas",
test:g.canvas,options:{type:"excanvas"},noAutoCallback:!0,loadInit:function(){var b=this.options.type;if(b&&-1!==b.indexOf("flash")&&(!window.swfobject||swfobject.hasFlashPlayerVersion("9.0.0")))window.FlashCanvasOptions=window.FlashCanvasOptions||{},a=FlashCanvasOptions,"flash"==b?(c.extend(a,{swfPath:n.basePath+"FlashCanvas/"}),this.src="FlashCanvas/flashcanvas"):(c.extend(a,{swfPath:n.basePath+"FlashCanvasPro/"}),this.src="FlashCanvasPro/flashcanvas")},afterLoad:function(){d.addReady(function(a,
d){c("canvas",a).add(d.filter("canvas")).each(function(){!this.getContext&&window.G_vmlCanvasManager&&G_vmlCanvasManager.initElement(this)});a==document&&l("canvas",!0)})},methodNames:["getContext"],d:["dom-support"]})}})();var y=g.input,v=g.inputtypes;if(y&&v)B("formvalidation",function(){return!(!y.required||!y.pattern)}),d.validationMessages=d.validityMessages=[],d.inputTypes={},j("form-core",{f:"forms",d:["es5"],test:function(){if(this.options.lightweightDatalist&&!this.datalistLoaded)this.datalistLoaded=
!0,m["form-datalist"].f="forms",d.reTest(["form-datalist"]);return!1},options:{placeholderType:"value",langSrc:"i18n/errormessages-",availabeLangs:"ar,ch-ZN,el,es,fr,he,hi,hu,it,ja,nl,pt-PT,ru".split(",")},methodNames:["setCustomValidity","checkValidity"],c:[3,2,59,17,16,5,4,24,19]}),g.formvalidation?(j("form-extend",{f:"forms",src:"form-native-extend",test:function(a){return(m["form-number-date-api"].test()||-1==c.inArray("form-number-date-api",a||[]))&&!this.options.overrideMessages},d:["form-core",
"dom-support","form-message"],c:[18,7,59,5]}),u=u.concat([2,3,23,21])):(u=u.concat([18,7,4,59,5]),j("form-extend",{f:"forms",src:"form-shim-extend",d:["form-core","dom-support"],c:[3,2,23,21]})),j("form-message",{f:"forms",test:function(a){return!(this.options.customMessages||!g.formvalidation||!m["form-extend"].test(a)||d.bugs.validationMessage)},d:["dom-support"],c:[3,2,23,21,59,17,5,4]}),d.addPolyfill("form-output",{f:"forms",test:"value"in document.createElement("output"),d:["dom-support"],c:[3,
2,23,21]}),j("form-number-date-api",{f:"forms-ext",uiTest:function(){return v.range&&v.date&&v.time&&v.number},test:function(){return this.uiTest()&&!d.bugs.valueAsNumberSet},d:["forms","dom-support"],c:[18,7,6]}),j("form-number-date-ui",{f:"forms-ext",test:function(){return m["form-number-date-api"].test()&&!this.options.replaceUI},d:["forms","dom-support","form-number-date-api"],loadInit:function(){t(["jquery-ui"]);m["input-widgets"].src&&t(["input-widgets"])},options:{stepArrows:{number:1,time:1},
calculateWidth:!0,slider:{},datepicker:{},langSrc:C+"i18n/jquery.ui.datepicker-",recalcWidth:!0},c:[18,7,6]}),j("form-datalist",{f:"forms-ext",test:y.list,d:["form-core","dom-support"],c:[3,59,18,24,19,11]});"details"in g||B("details",function(){return"open"in document.createElement("details")});j("details",{test:g.details,d:["dom-support"],options:{text:"Details"},c:[12,13,15]});if("audio"in g&&"video"in g)d.mediaelement={},j("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,d:["swfobject",
"dom-support"],c:[10,9,12,17,16,8,22,23,24,20]}),j("mediaelement-swf",{f:"mediaelement",options:{hasToPlay:"any",preferFlash:!1,jwVars:{},jwParams:{},jwAttrs:{},changeJW:c.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:["swfobject","dom-support"],test:function(){if(!g.audio||!g.video)return!1;var a=this.options,b=a.hasToPlay;return!((!window.swfobject||window.swfobject.hasFlashPlayerVersion("9.0.115"))&&(a.preferFlash||"any"!=b&&!g.video[b]&&!g.audio[b]))},c:[10,9,22,20]});j("feature-dummy",
{test:!0,loaded:!0,c:u});z.filter("[data-polyfill-cfg]").each(function(){try{d.setOptions(c(this).data("polyfillCfg"))}catch(a){d.warn("error parsing polyfill cfg: "+a)}}).end().filter("[data-polyfill]").each(function(){d.polyfill(c.trim(c(this).data("polyfill")||""))});r&&(r.cfg&&d.setOptions(r.cfg),r.lang&&d.activeLang(r.lang),"polyfill"in r&&d.polyfill(r.polyfill))});
