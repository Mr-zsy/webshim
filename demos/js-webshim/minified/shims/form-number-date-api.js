jQuery.webshims.register("form-number-date-api",function(e,t,n,a){"use strict";t.addInputType||t.error("you can not call forms-ext feature after calling forms feature. call both at once instead: $.webshims.polyfill('forms forms-ext')"),t.getStep||(t.getStep=function(t,n){var a=e.attr(t,"step");return"any"===a?a:(n=n||u(t),r[n]&&r[n].step?(a=v.number.asNumber(a),(!isNaN(a)&&a>0?a:r[n].step)*(r[n].stepScaleFactor||1)):a)}),t.addMinMaxNumberToCache||(t.addMinMaxNumberToCache=function(e,t,n){e+"AsNumber"in n||(n[e+"AsNumber"]=r[n.type].asNumber(t.attr(e)),isNaN(n[e+"AsNumber"])&&e+"Default"in r[n.type]&&(n[e+"AsNumber"]=r[n.type][e+"Default"]))});var i=parseInt("NaN",10),r=t.inputTypes,o=function(e){return"number"==typeof e||e&&e==1*e},s=function(t){return e('<input type="'+t+'" />').prop("type")===t},u=function(e){return(e.getAttribute("type")||"").toLowerCase()},l=function(e){return e&&!isNaN(1*e)},c=t.addMinMaxNumberToCache,p=function(e,t){e=""+e,t-=e.length;for(var n=0;t>n;n++)e="0"+e;return e},d=1e-7,f=t.bugs.bustedValidity;t.addValidityRule("stepMismatch",function(e,n,a,i){if(""===n)return!1;"type"in a||(a.type=u(e[0]));var o,s=(i||{}).stepMismatch||!1;if(r[a.type]&&r[a.type].step){if("step"in a||(a.step=t.getStep(e[0],a.type)),"any"==a.step)return!1;if("valueAsNumber"in a||(a.valueAsNumber=r[a.type].asNumber(n)),isNaN(a.valueAsNumber))return!1;c("min",e,a),o=a.minAsNumber,isNaN(o)&&(o=r[a.type].stepBase||0),s=Math.abs((a.valueAsNumber-o)%a.step),s=!(d>=s||d>=Math.abs(s-a.step))}return s}),[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(e){t.addValidityRule(e.name,function(t,n,a,i){var o=(i||{})[e.name]||!1;if(""===n)return o;if("type"in a||(a.type=u(t[0])),r[a.type]&&r[a.type].asNumber){if("valueAsNumber"in a||(a.valueAsNumber=r[a.type].asNumber(n)),isNaN(a.valueAsNumber))return!1;if(c(e.attr,t,a),isNaN(a[e.attr+"AsNumber"]))return o;o=a[e.attr+"AsNumber"]*e.factor<a.valueAsNumber*e.factor-d}return o})}),t.reflectProperties(["input"],["max","min","step"]);var h=t.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var t=this,n=u(t),a=r[n]&&r[n].asNumber?r[n].asNumber(e.prop(t,"value")):h.prop._supget&&h.prop._supget.apply(t,arguments);return null==a&&(a=i),a},set:function(n){var a=this,i=u(a);if(r[i]&&r[i].numberToString){if(isNaN(n))return e.prop(a,"value",""),undefined;var o=r[i].numberToString(n);o!==!1?e.prop(a,"value",o):t.error("INVALID_STATE_ERR: DOM Exception 11")}else h.prop._supset&&h.prop._supset.apply(a,arguments)}}}),m=t.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var t=this,n=u(t);return r[n]&&r[n].asDate&&!r[n].noAsDate?r[n].asDate(e.prop(t,"value")):m.prop._supget&&m.prop._supget.call(t)||null},set:function(n){var a=this,i=u(a);if(!r[i]||!r[i].dateToString||r[i].noAsDate)return m.prop._supset&&m.prop._supset.apply(a,arguments)||null;if(null===n)return e.prop(a,"value",""),"";var o=r[i].dateToString(n);return o!==!1?(e.prop(a,"value",o),o):(t.error("INVALID_STATE_ERR: DOM Exception 11"),undefined)}}});e.each({stepUp:1,stepDown:-1},function(n,a){var i=t.defineNodeNameProperty("input",n,{prop:{value:function(n){var o,s,l,c,p,f,h=u(this);if(!r[h]||!r[h].asNumber){if(i.prop&&i.prop.value)return i.prop.value.apply(this,arguments);throw t.info("no step method for type: "+h),"invalid state error"}if(f={type:h},n||(n=1,t.info("you should always use a factor for stepUp/stepDown")),n*=a,s=e.prop(this,"valueAsNumber"),isNaN(s))throw t.info("valueAsNumber is NaN can't apply stepUp/stepDown "),"invalid state error";if(o=t.getStep(this,h),"any"==o)throw t.info("step is 'any' can't apply stepUp/stepDown"),"invalid state error";if(t.addMinMaxNumberToCache("min",e(this),f),t.addMinMaxNumberToCache("max",e(this),f),o*=n,s=1*(s+o).toFixed(5),c=(s-(f.minAsNumber||0))%o,c&&Math.abs(c)>d&&(p=s-c,p+=c>0?o:-o,s=1*p.toFixed(5)),!isNaN(f.maxAsNumber)&&s>f.maxAsNumber||!isNaN(f.minAsNumber)&&f.minAsNumber>s)throw t.info("max/min overflow can't apply stepUp/stepDown"),"invalid state error";l?e.prop(this,"valueAsDate",l):e.prop(this,"valueAsNumber",s)}}})});var v={number:{mismatch:function(e){return!o(e)},step:1,stepScaleFactor:1,asNumber:function(e){return o(e)?1*e:i},numberToString:function(e){return o(e)?e:!1}},range:{minDefault:0,maxDefault:100},color:{mismatch:function(e){return e&&7==e.length&&/^\u0023/.test(e)?isNaN(parseInt(e.charAt(1)+e.charAt(2),16))||isNaN(parseInt(e.charAt(3)+e.charAt(4),16))||isNaN(parseInt(e.charAt(5)+e.charAt(6),16)):!0}},date:{mismatch:function(e){if(!e||!e.split||!/\d$/.test(e))return!0;var t,n=e.split(/\u002D/);if(3!==n.length)return!0;var a=!1;if(4>n[0].length||2!=n[1].length||n[1]>12||2!=n[2].length||n[2]>33)a=!0;else for(t=0;3>t;t++)if(!l(n[t])){a=!0;break}return a||e!==this.dateToString(this.asDate(e,!0))},step:1,stepScaleFactor:864e5,asDate:function(e,t){return!t&&this.mismatch(e)?null:new Date(this.asNumber(e,!0))},asNumber:function(e,t){var n=i;return(t||!this.mismatch(e))&&(e=e.split(/\u002D/),n=Date.UTC(e[0],e[1]-1,e[2])),n},numberToString:function(e){return o(e)?this.dateToString(new Date(1*e)):!1},dateToString:function(e){return e&&e.getFullYear?p(e.getUTCFullYear(),4)+"-"+p(e.getUTCMonth()+1,2)+"-"+p(e.getUTCDate(),2):!1}},time:{mismatch:function(t,n){if(!t||!t.split||!/\d$/.test(t))return!0;if(t=t.split(/\u003A/),2>t.length||t.length>3)return!0;var a,i=!1;return t[2]&&(t[2]=t[2].split(/\u002E/),a=parseInt(t[2][1],10),t[2]=t[2][0]),e.each(t,function(e,t){return l(t)&&2===t.length?undefined:(i=!0,!1)}),i?!0:t[0]>23||0>t[0]||t[1]>59||0>t[1]?!0:t[2]&&(t[2]>59||0>t[2])?!0:a&&isNaN(a)?!0:(a&&(100>a?a*=100:10>a&&(a*=10)),n===!0?[t,a]:!1)},step:60,stepBase:0,stepScaleFactor:1e3,asDate:function(e){return e=new Date(this.asNumber(e)),isNaN(e)?null:e},asNumber:function(e){var t=i;return e=this.mismatch(e,!0),e!==!0&&(t=Date.UTC("1970",0,1,e[0][0],e[0][1],e[0][2]||0),e[1]&&(t+=e[1])),t},dateToString:function(e){if(e&&e.getUTCHours){var t=p(e.getUTCHours(),2)+":"+p(e.getUTCMinutes(),2),n=e.getSeconds();return"0"!=n&&(t+=":"+p(n,2)),n=e.getUTCMilliseconds(),"0"!=n&&(t+="."+p(n,3)),t}return!1}},month:{mismatch:function(e){return v.date.mismatch(e+"-01")},step:1,stepScaleFactor:!1,asDate:function(e){return new Date(v.date.asNumber(e+"-01"))},asNumber:function(e){var t=i;return e&&!this.mismatch(e)&&(e=e.split(/\u002D/),e[0]=1*e[0]-1970,e[1]=1*e[1]-1,t=12*e[0]+e[1]),t},numberToString:function(e){var t,n=!1;return o(e)&&(t=e%12,e=(e-t)/12+1970,t+=1,1>t&&(e-=1,t+=12),n=p(e,4)+"-"+p(t,2)),n},dateToString:function(e){if(e&&e.getUTCHours){var t=v.date.dateToString(e);return t.split&&(t=t.split(/\u002D/))?t[0]+"-"+t[1]:!1}return!1}}};!f&&s("range")&&s("time")&&s("month")||(v.range=e.extend({},v.number,v.range),v.time=e.extend({},v.date,v.time),v.month=e.extend({},v.date,v.month)),["number","month","range","date","time","color"].forEach(function(e){(f||!s(e))&&t.addInputType(e,v[e])}),null==e("<input />").prop("labels")&&t.defineNodeNamesProperty("button, input, keygen, meter, output, progress, select, textarea","labels",{prop:{get:function(){if("hidden"==this.type)return null;var t=this.id,n=e(this).closest("label").filter(function(){var e=this.attributes["for"]||{};return!e.specified||e.value==t});return t&&(n=n.add('label[for="'+t+'"]')),n.get()},writeable:!1}})});