var swfmini=function(){function e(){if(!C){try{var e=T.getElementsByTagName("body")[0].appendChild(p("span"));e.parentNode.removeChild(e)}catch(t){return}C=!0;for(var r=N.length,a=0;r>a;a++)N[a]()}}function t(e){C?e():N[N.length]=e}function r(){}function a(){k&&n()}function n(){var e=T.getElementsByTagName("body")[0],t=p(m);t.setAttribute("type",b);var r=e.appendChild(t);if(r){var a=0;(function(){if(typeof r.GetVariable!=h){var n=r.GetVariable("$version");n&&(n=n.split(" ")[1].split(","),_.pv=[parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10)])}else if(10>a)return a++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),r=null})()}}function i(e){var t=null,r=c(e);if(r&&"OBJECT"==r.nodeName)if(typeof r.SetVariable!=h)t=r;else{var a=r.getElementsByTagName(m)[0];a&&(t=a)}return t}function o(e,t,r){var a,n=c(r);if(_.wk&&312>_.wk)return a;if(n)if(typeof e.id==h&&(e.id=r),_.ie&&_.win){var i="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?i+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(i+=" "+o+'="'+e[o]+'"'));var u="";for(var l in t)t[l]!=Object.prototype[l]&&(u+='<param name="'+l+'" value="'+t[l]+'" />');n.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+u+"</object>",E[E.length]=e.id,a=c(e.id)}else{var d=p(m);d.setAttribute("type",b);for(var f in e)e[f]!=Object.prototype[f]&&("styleclass"==f.toLowerCase()?d.setAttribute("class",e[f]):"classid"!=f.toLowerCase()&&d.setAttribute(f,e[f]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(d,v,t[v]);n.parentNode.replaceChild(d,n),a=d}return a}function s(e,t,r){var a=p("param");a.setAttribute("name",t),a.setAttribute("value",r),e.appendChild(a)}function u(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(_.ie&&_.win?(t.style.display="none",function(){4==t.readyState?l(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function l(e){var t=c(e);if(t){for(var r in t)"function"==typeof t[r]&&(t[r]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=T.getElementById(e)}catch(r){}return t}function p(e){return T.createElement(e)}function d(e){var t=_.pv,r=e.split(".");return r[0]=parseInt(r[0],10),r[1]=parseInt(r[1],10)||0,r[2]=parseInt(r[2],10)||0,t[0]>r[0]||t[0]==r[0]&&t[1]>r[1]||t[0]==r[0]&&t[1]==r[1]&&t[2]>=r[2]?!0:!1}function f(e,t){if(S){var r,a=t?"visible":"hidden";C&&r&&c(e)&&(c(e).style.visibility=a)}}var h="undefined",m="object",v=jQuery.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,T=document,x=navigator,k=!1,N=[a],E=[],A=[],C=!1,S=!0,_=function(){var e=typeof T.getElementById!=h&&typeof T.getElementsByTagName!=h&&typeof T.createElement!=h,t=x.userAgent.toLowerCase(),r=x.platform.toLowerCase(),a=r?/win/.test(r):/win/.test(t),n=r?/mac/.test(r):/mac/.test(t),i=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],u=null;if(typeof x.plugins!=h&&typeof x.plugins[g]==m)u=x.plugins[g].description,!u||typeof x.mimeTypes!=h&&x.mimeTypes[b]&&!x.mimeTypes[b].enabledPlugin||(k=!0,o=!1,u=u.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(u.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(u.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(u)?parseInt(u.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=h)try{var l=new ActiveXObject(y);l&&(u=l.GetVariable("$version"),u&&(o=!0,u=u.split(" ")[1].split(","),s=[parseInt(u[0],10),parseInt(u[1],10),parseInt(u[2],10)]))}catch(c){}return{w3:e,pv:s,wk:i,ie:o,win:a,mac:n}}();return function(){_.ie&&_.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=A.length,t=0;e>t;t++)A[t][0].detachEvent(A[t][1],A[t][2]);for(var r=E.length,a=0;r>a;a++)u(E[a]);for(var n in _)_[n]=null;_=null;for(var i in swfmini)swfmini[i]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return _.w3?i(e):void 0},embedSWF:function(e,r,a,n,i,s,u,l,c,p){var v={success:!1,id:r};_.w3&&!(_.wk&&312>_.wk)&&e&&r&&a&&n&&i?(f(r,!1),t(function(){a+="",n+="";var t={};if(c&&typeof c===m)for(var s in c)t[s]=c[s];t.data=e,t.width=a,t.height=n;var g={};if(l&&typeof l===m)for(var y in l)g[y]=l[y];if(u&&typeof u===m)for(var b in u)typeof g.flashvars!=h?g.flashvars+="&"+b+"="+u[b]:g.flashvars=b+"="+u[b];if(d(i)){var w=o(t,g,r);t.id==r&&f(r,!0),v.success=!0,v.ref=w}else f(r,!0);p&&p(v)})):p&&p(v)},switchOffAutoHideShow:function(){S=!1},ua:_,getFlashPlayerVersion:function(){return{major:_.pv[0],minor:_.pv[1],release:_.pv[2]}},hasFlashPlayerVersion:d,createSWF:function(e,t,r){return _.w3?o(e,t,r):void 0},showExpressInstall:function(){},removeSWF:function(e){_.w3&&u(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:r,expressInstallCallback:function(){}}}();(function(e,t,r){"use strict";var a,n,i=t.audio&&t.video,o=!1,s=r.bugs,u="mediaelement-jaris",l=function(){r.ready(u,function(){r.mediaelement.createSWF||(r.mediaelement.loadSwf=!0,r.reTest([u],i))})},c=r.cfg.mediaelement;if(!c)return r.error("mediaelement wasn't implemented but loaded"),void 0;if(i){var p=document.createElement("video");t.videoBuffered="buffered"in p,o="loop"in p,r.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(r.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:t.videoBuffered,d:["dom-support"]}),r.reTest("mediaelement-native-fix"))}if(i&&!c.preferFlash){var d={1:1,2:1},f=function(t){var a,i;!c.preferFlash&&(e(t.target).is("audio, video")||(i=t.target.parentNode)&&e("source:last",i)[0]==t.target)&&(a=e(t.target).closest("audio, video"))&&!d[a.prop("error")]&&e(function(){n&&!c.preferFlash?(l(),r.ready("WINDOWLOAD "+u,function(){setTimeout(function(){c.preferFlash||!r.mediaelement.createSWF||a.is(".nonnative-api-active")||(c.preferFlash=!0,document.removeEventListener("error",f,!0),e("audio, video").each(function(){r.mediaelement.selectSource(this)}),r.warn("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+a.prop("error")))},9)})):document.removeEventListener("error",f,!0)})};document.addEventListener("error",f,!0),e("audio, video").each(function(){var t=e.prop(this,"error");return t&&!d[t]?(f({target:this}),!1):void 0})}t.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof e("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(t){s.track=!0}var a=r.cfg.track,n=function(t){e(t.target).filter("track").each(i)},i=function(){return s.track||!a.override&&3==e.prop(this,"readyState")?(a.override=!0,r.reTest("track"),document.removeEventListener("error",n,!0),this&&e.nodeName(this,"track")?r.error("track support was overwritten. Please check your vtt including your vtt mime-type"):r.info("track support was overwritten. due to bad browser support"),!1):void 0},o=function(){document.addEventListener("error",n,!0),s.track?i():e("track").each(i)};a.override||(r.isReady("track")?o():e(o))}(),a=t.track&&!s.track,r.register("mediaelement-core",function(e,t,r,s,p){n=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(n?"swf":"no-swf");var d=t.mediaelement;d.parseRtmp=function(e){var r,a,n,i=e.src.split("://"),o=i[1].split("/");for(e.server=i[0]+"://"+o[0]+"/",e.streamId=[],r=1,a=o.length;a>r;r++)n||-1===o[r].indexOf(":")||(o[r]=o[r].split(":")[1],n=!0),n?e.streamId.push(o[r]):e.server+=o[r]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,r){t=e(t);var a,n={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return n.src?(a=t.attr("data-server"),null!=a&&(n.server=a),a=t.attr("type"),a?(n.type=a,n.container=e.trim(a.split(";")[0])):(r||(r=t[0].nodeName.toLowerCase(),"source"==r&&(r=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),n.server?(n.type=r+"/rtmp",n.container=r+"/rtmp"):(a=d.getTypeForSrc(n.src,r,n),a&&(n.type=a,n.container=a))),a=t.attr("media"),a&&(n.media=a),("audio/rtmp"==n.type||"video/rtmp"==n.type)&&(n.server?n.streamId=n.src:d.parseRtmp(n)),n):n},h=!n&&"postMessage"in r&&i,m=function(){m.loaded||(m.loaded=!0,e(function(){t._polyfill(["track"]),t.ready("WINDOWLOAD",function(){t.loader.loadList(["track-ui"])})}))},v=function(){var r;return function(){!r&&h&&(r=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){n?l():v()};t.addPolyfill("mediaelement-yt",{test:!h,d:["dom-support"]}),d.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},d.mimeTypes.source=e.extend({},d.mimeTypes.audio,d.mimeTypes.video),d.getTypeForSrc=function(t,r){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return r+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var a;return e.each(d.mimeTypes[r],function(e,r){return-1!==r.indexOf(t)?(a=e,!1):p}),a},d.srces=function(t,r){if(t=e(t),!r){r=[];var a=t[0].nodeName.toLowerCase(),n=f(t,a);return n.src?r.push(n):e("source",t).each(function(){n=f(this,a),n.src&&r.push(n)}),r}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(r)||(r=[r]),r.forEach(function(e){var r=s.createElement("source");"string"==typeof e&&(e={src:e}),r.setAttribute("src",e.src),e.type&&r.setAttribute("type",e.type),e.media&&r.setAttribute("media",e.media),t.append(r)})},e.fn.loadMediaSrc=function(t,r){return this.each(function(){r!==p&&(e(this).removeAttr("poster"),r&&e.attr(this,"poster",r)),d.srces(this,t),e(this).mediaLoad()})},d.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],d.canThirdPlaySrces=function(t,r){var a="";return(n||h)&&(t=e(t),r=r||d.srces(t),e.each(r,function(e,t){return t.container&&t.src&&(n&&-1!=d.swfMimeTypes.indexOf(t.container)||h&&"video/youtube"==t.container)?(a=t,!1):p})),a};var y={};d.canNativePlaySrces=function(t,r){var a="";if(i){t=e(t);var n=(t[0].nodeName||"").toLowerCase(),o=(y[n]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return a;r=r||d.srces(t),e.each(r,function(e,r){return r.type&&o.call(t[0],r.type)?(a=r,!1):p})}return a};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};d.setError=function(r,a){if(e("source",r).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(r).mediaLoad()}catch(n){}}else a||(a="can't play sources"),e(r).pause().data("mediaerror",a),t.error("mediaelementError: "+a),setTimeout(function(){e(r).data("mediaerror")&&e(r).trigger("mediaerror")},1)};var T=function(){var e;return function(r,a,i){t.ready(n?u:"mediaelement-yt",function(){d.createSWF?d.createSWF(r,a,i):e||(e=!0,g(),T(r,a,i))}),e||!h||d.createSWF||v()}}(),x=function(e,t,r,a,n){var i;r||r!==!1&&t&&"third"==t.isActive?(i=d.canThirdPlaySrces(e,a),i?T(e,i,t):n?d.setError(e,!1):x(e,t,!1,a,!0)):(i=d.canNativePlaySrces(e,a),i?t&&"third"==t.isActive&&d.setActive(e,"html5",t):n?(d.setError(e,!1),t&&"third"==t.isActive&&d.setActive(e,"html5",t)):x(e,t,!0,a,!0))},k=/^(?:embed|object|datalist)$/i,N=function(r,a){var n=t.data(r,"mediaelementBase")||t.data(r,"mediaelementBase",{}),i=d.srces(r),o=r.parentNode;clearTimeout(n.loadTimer),e.data(r,"mediaerror",!1),i.length&&o&&1==o.nodeType&&!k.test(o.nodeName||"")&&(a=a||t.data(r,"mediaelement"),x(r,a,c.preferFlash||p,i))};d.selectSource=N,e(s).on("ended",function(r){var a=t.data(r.target,"mediaelement");(!o||a&&"html5"!=a.isActive||e.prop(r.target,"loop"))&&setTimeout(function(){!e.prop(r.target,"paused")&&e.prop(r.target,"loop")&&e(r.target).prop("currentTime",0).play()},1)}),t.ready("dom-support",function(){o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(r){var a=t.defineNodeNameProperty(r,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");N(this,e),!i||e&&"html5"!=e.isActive||!a.prop._supvalue||a.prop._supvalue.apply(this,arguments)}}});y[r]=t.defineNodeNameProperty(r,"canPlayType",{prop:{value:function(t){var a="";return i&&y[r].prop._supvalue&&(a=y[r].prop._supvalue.call(this,t),"no"==a&&(a="")),!a&&n&&(t=e.trim((t||"").split(";")[0]),-1!=d.swfMimeTypes.indexOf(t)&&(a="maybe")),a}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,r=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(r.loadTimer),r.loadTimer=setTimeout(function(){N(e),e=null},9)}})});var E=function(){var n=function(){if(t.implement(this,"mediaelement")&&(N(this),i)){var a,n,o=this,s=function(){var t=e.prop(o,"buffered");if(t){for(var r="",a=0,n=t.length;n>a;a++)r+=t.end(a);return r}},u=function(){var t=s();t!=n&&(n=t,e(o).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(n=s()),clearTimeout(a),a=setTimeout(u,999)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(n=!1),clearTimeout(a)}}),"ActiveXObject"in r&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}},o=!1;t.ready("dom-support",function(){o=!0,t.addReady(function(t,r){var a=e("video, audio",t).add(r.filter("video, audio")).each(n);!m.loaded&&e("track",a).length&&m(),a=null})}),i&&!o&&t.addReady(function(r,n){o||e("video, audio",r).add(n.filter("video, audio")).each(function(){return a&&!t.modules.track.options.override||m.loaded||!e("track",this).length||m(),d.canNativePlaySrces(this)?p:(g(),o=!0,!1)})})};a&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),i?(t.isReady("mediaelement-core",!0),E(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(u,E)})})(jQuery,Modernizr,jQuery.webshims);