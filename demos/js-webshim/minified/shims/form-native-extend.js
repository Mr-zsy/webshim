jQuery.webshims.register("form-native-extend",function(e,t,n,i,a,r){"use strict";var o=n.Modernizr,s=o.inputtypes;if(o.formvalidation&&!t.bugs.bustedValidity){var u=t.inputTypes,l={},c=function(){var t,n=function(){e(this).prop("validity")},i=function(){e("input").each(n)};return function(){clearTimeout(t),t=setTimeout(i,9)}}();t.addInputType=function(n,i){u[n]=i,e.isDOMReady&&o.formvalidation&&!t.bugs.bustedValidity&&c()},t.addValidityRule=function(e,t){l[e]=t},t.addValidityRule("typeMismatch",function(e,t,n,i){if(""===t)return!1;var a=i.typeMismatch;return"type"in n||(n.type=(e[0].getAttribute("type")||"").toLowerCase()),u[n.type]&&u[n.type].mismatch&&(a=u[n.type].mismatch(t,e)),a});var p=r.overrideMessages,d=!s.number||!s.time||!s.range||p,f=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],h=p?["value","checked"]:["value"],m=[],v=function(t,n){if(t){var a=(t.getAttribute&&t.getAttribute("type")||t.type||"").toLowerCase();(p||u[a])&&(p&&!n&&"radio"==a&&t.name?e(i.getElementsByName(t.name)).each(function(){e.prop(this,"validity")}):e.prop(t,"validity"))}},g={};if(["input","textarea","select"].forEach(function(n){var i=t.defineNodeNameProperty(n,"setCustomValidity",{prop:{value:function(a){a+="";var r="input"==n?e(this).getNativeElement()[0]:this;i.prop._supvalue.call(r,a),d&&(t.data(r,"hasCustomError",!!a),v(r))}}});g[n]=i.prop._supvalue}),(d||p)&&(h.push("min"),h.push("max"),h.push("step"),m.push("input")),p&&(h.push("required"),h.push("pattern"),m.push("select"),m.push("textarea")),d){var y;if(m.forEach(function(n){var i=t.defineNodeNameProperty(n,"validity",{prop:{get:function(){if(!y){var r="input"==n?e(this).getNativeElement()[0]:this,o=i.prop._supget.call(r);if(!o)return o;var s={};if(f.forEach(function(e){s[e]=o[e]}),!e.prop(r,"willValidate"))return s;y=!0;var c,d=e(r),h={type:(r.getAttribute&&r.getAttribute("type")||"").toLowerCase(),nodeName:(r.nodeName||"").toLowerCase()},m=d.val(),v=!!t.data(r,"hasCustomError");if(y=!1,s.customError=v,s.valid&&s.customError)s.valid=!1;else if(!s.valid){var b=!0;e.each(s,function(e,t){return t?(b=!1,!1):a}),b&&(s.valid=!0)}return e.each(l,function(e,i){s[e]=i(d,m,h,s),s[e]&&(s.valid||!c)&&(p||u[h.type]&&u[h.type].mismatch)&&(g[n].call(r,t.createValidationMessage(r,e)),s.valid=!1,c=!0)}),s.valid?(g[n].call(r,""),t.data(r,"hasCustomError",!1)):!p||c||v||e.each(s,function(e,i){return"valid"!==e&&i?(g[n].call(r,t.createValidationMessage(r,e)),!1):a}),s}},writeable:!1}})}),h.forEach(function(e){t.onNodeNamesPropertyModify(m,e,function(){v(this)})}),i.addEventListener){var b,w=function(t){if("form"in t.target){var n=t.target.form;clearTimeout(b),v(t.target),n&&p&&e("input",n).each(function(){"password"==this.type&&v(this)})}};i.addEventListener("change",w,!0),p&&(i.addEventListener("blur",w,!0),i.addEventListener("keydown",function(e){13==e.keyCode&&w(e)},!0)),i.addEventListener("input",function(e){clearTimeout(b),b=setTimeout(function(){v(e.target)},290)},!0)}var T=m.join(",");t.addReady(function(t,n){e(T,t).add(n.filter(T)).each(function(){e.prop(this,"validity")})}),p&&t.ready("DOM form-message",function(){t.activeLang({register:"form-core",callback:function(){e("input, select, textarea").getNativeElement().each(function(){if(!t.data(this,"hasCustomError")){var n,i=this,r=e.prop(i,"validity")||{valid:!0};r.valid||(n=(i.nodeName||"").toLowerCase(),e.each(r,function(e,r){return"valid"!==e&&r?(g[n].call(i,t.createValidationMessage(i,e)),!1):a}))}})}})})}t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,n=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[n]?n:e.type}}})}});