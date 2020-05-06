(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?t(exports):typeof define==="function"&&define.amd?define(["exports"],t):t(e["fontawesome-free-conflict-detection"]={})})(this,function(e){"use strict";function t(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){t=function e(t){return typeof t}}else{t=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return t(e)}function n(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}function o(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};var r=Object.keys(o);if(typeof Object.getOwnPropertySymbols==="function"){r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))}r.forEach(function(t){n(e,t,o[t])})}return e}var r={};var i={};try{if(typeof window!=="undefined")r=window;if(typeof document!=="undefined")i=document}catch(z){}var c=r.navigator||{},a=c.userAgent,f=a===void 0?"":a;var s=r;var u=i;var l=!!s.document;var d=!!u.documentElement&&!!u.head&&typeof u.addEventListener==="function"&&typeof u.createElement==="function";var m=~f.indexOf("MSIE")||~f.indexOf("Trident/");var v=[];var h=function e(){u.removeEventListener("DOMContentLoaded",e);g=1;v.map(function(e){return e()})};var g=false;if(d){g=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState);if(!g)u.addEventListener("DOMContentLoaded",h)}function p(e){if(!d)return;g?setTimeout(e,0):v.push(e)}function y(e){var t=e.nodesTested,n=e.nodesFound;var o={};for(var r in n){if(!(t.conflict[r]||t.noConflict[r])){o[r]=n[r]}}var i=Object.keys(t.conflict).length;if(i>0){console.info("%cConflict".concat(i>1?"s":""," found:"),"color: darkred; font-size: large");var c={};for(var a in t.conflict){var f=t.conflict[a];c[a]={tagName:f.tagName,"src/href":f.src||f.href||"n/a","innerText excerpt":f.innerText&&f.innerText!==""?f.innerText.slice(0,200)+"...":"(empty)"}}console.table(c)}var s=Object.keys(t.noConflict).length;if(s>0){console.info("%cNo conflict".concat(s>1?"s":""," found with ").concat(s==1?"this":"these",":"),"color: green; font-size: large");var u={};for(var l in t.noConflict){var d=t.noConflict[l];u[l]={tagName:d.tagName,"src/href":d.src||d.href||"n/a","innerText excerpt":d.innerText&&d.innerText!==""?d.innerText.slice(0,200)+"...":"(empty)"}}console.table(u)}var m=Object.keys(o).length;if(m>0){console.info("%cLeftovers--we timed out before collecting test results for ".concat(m==1?"this":"these",":"),"color: blue; font-size: large");var v={};for(var h in o){var g=o[h];v[h]={tagName:g.tagName,"src/href":g.src||g.href||"n/a","innerText excerpt":g.innerText&&g.innerText!==""?g.innerText.slice(0,200)+"...":"(empty)"}}console.table(v)}}var b=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function w(e,t){return t={exports:{}},e(t,t.exports),t.exports}var x=w(function(e){(function(t){function n(e,t){var n=(e&65535)+(t&65535);var o=(e>>16)+(t>>16)+(n>>16);return o<<16|n&65535}function o(e,t){return e<<t|e>>>32-t}function r(e,t,r,i,c,a){return n(o(n(n(t,e),n(i,a)),c),r)}function i(e,t,n,o,i,c,a){return r(t&n|~t&o,e,t,i,c,a)}function c(e,t,n,o,i,c,a){return r(t&o|n&~o,e,t,i,c,a)}function a(e,t,n,o,i,c,a){return r(t^n^o,e,t,i,c,a)}function f(e,t,n,o,i,c,a){return r(n^(t|~o),e,t,i,c,a)}function s(e,t){e[t>>5]|=128<<t%32;e[(t+64>>>9<<4)+14]=t;var o;var r;var s;var u;var l;var d=1732584193;var m=-271733879;var v=-1732584194;var h=271733878;for(o=0;o<e.length;o+=16){r=d;s=m;u=v;l=h;d=i(d,m,v,h,e[o],7,-680876936);h=i(h,d,m,v,e[o+1],12,-389564586);v=i(v,h,d,m,e[o+2],17,606105819);m=i(m,v,h,d,e[o+3],22,-1044525330);d=i(d,m,v,h,e[o+4],7,-176418897);h=i(h,d,m,v,e[o+5],12,1200080426);v=i(v,h,d,m,e[o+6],17,-1473231341);m=i(m,v,h,d,e[o+7],22,-45705983);d=i(d,m,v,h,e[o+8],7,1770035416);h=i(h,d,m,v,e[o+9],12,-1958414417);v=i(v,h,d,m,e[o+10],17,-42063);m=i(m,v,h,d,e[o+11],22,-1990404162);d=i(d,m,v,h,e[o+12],7,1804603682);h=i(h,d,m,v,e[o+13],12,-40341101);v=i(v,h,d,m,e[o+14],17,-1502002290);m=i(m,v,h,d,e[o+15],22,1236535329);d=c(d,m,v,h,e[o+1],5,-165796510);h=c(h,d,m,v,e[o+6],9,-1069501632);v=c(v,h,d,m,e[o+11],14,643717713);m=c(m,v,h,d,e[o],20,-373897302);d=c(d,m,v,h,e[o+5],5,-701558691);h=c(h,d,m,v,e[o+10],9,38016083);v=c(v,h,d,m,e[o+15],14,-660478335);m=c(m,v,h,d,e[o+4],20,-405537848);d=c(d,m,v,h,e[o+9],5,568446438);h=c(h,d,m,v,e[o+14],9,-1019803690);v=c(v,h,d,m,e[o+3],14,-187363961);m=c(m,v,h,d,e[o+8],20,1163531501);d=c(d,m,v,h,e[o+13],5,-1444681467);h=c(h,d,m,v,e[o+2],9,-51403784);v=c(v,h,d,m,e[o+7],14,1735328473);m=c(m,v,h,d,e[o+12],20,-1926607734);d=a(d,m,v,h,e[o+5],4,-378558);h=a(h,d,m,v,e[o+8],11,-2022574463);v=a(v,h,d,m,e[o+11],16,1839030562);m=a(m,v,h,d,e[o+14],23,-35309556);d=a(d,m,v,h,e[o+1],4,-1530992060);h=a(h,d,m,v,e[o+4],11,1272893353);v=a(v,h,d,m,e[o+7],16,-155497632);m=a(m,v,h,d,e[o+10],23,-1094730640);d=a(d,m,v,h,e[o+13],4,681279174);h=a(h,d,m,v,e[o],11,-358537222);v=a(v,h,d,m,e[o+3],16,-722521979);m=a(m,v,h,d,e[o+6],23,76029189);d=a(d,m,v,h,e[o+9],4,-640364487);h=a(h,d,m,v,e[o+12],11,-421815835);v=a(v,h,d,m,e[o+15],16,530742520);m=a(m,v,h,d,e[o+2],23,-995338651);d=f(d,m,v,h,e[o],6,-198630844);h=f(h,d,m,v,e[o+7],10,1126891415);v=f(v,h,d,m,e[o+14],15,-1416354905);m=f(m,v,h,d,e[o+5],21,-57434055);d=f(d,m,v,h,e[o+12],6,1700485571);h=f(h,d,m,v,e[o+3],10,-1894986606);v=f(v,h,d,m,e[o+10],15,-1051523);m=f(m,v,h,d,e[o+1],21,-2054922799);d=f(d,m,v,h,e[o+8],6,1873313359);h=f(h,d,m,v,e[o+15],10,-30611744);v=f(v,h,d,m,e[o+6],15,-1560198380);m=f(m,v,h,d,e[o+13],21,1309151649);d=f(d,m,v,h,e[o+4],6,-145523070);h=f(h,d,m,v,e[o+11],10,-1120210379);v=f(v,h,d,m,e[o+2],15,718787259);m=f(m,v,h,d,e[o+9],21,-343485551);d=n(d,r);m=n(m,s);v=n(v,u);h=n(h,l)}return[d,m,v,h]}function u(e){var t;var n="";var o=e.length*32;for(t=0;t<o;t+=8){n+=String.fromCharCode(e[t>>5]>>>t%32&255)}return n}function l(e){var t;var n=[];n[(e.length>>2)-1]=undefined;for(t=0;t<n.length;t+=1){n[t]=0}var o=e.length*8;for(t=0;t<o;t+=8){n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32}return n}function d(e){return u(s(l(e),e.length*8))}function m(e,t){var n;var o=l(e);var r=[];var i=[];var c;r[15]=i[15]=undefined;if(o.length>16){o=s(o,e.length*8)}for(n=0;n<16;n+=1){r[n]=o[n]^909522486;i[n]=o[n]^1549556828}c=s(r.concat(l(t)),512+t.length*8);return u(s(i.concat(c),512+128))}function v(e){var t="0123456789abcdef";var n="";var o;var r;for(r=0;r<e.length;r+=1){o=e.charCodeAt(r);n+=t.charAt(o>>>4&15)+t.charAt(o&15)}return n}function h(e){return unescape(encodeURIComponent(e))}function g(e){return d(h(e))}function p(e){return v(g(e))}function y(e,t){return m(h(e),h(t))}function b(e,t){return v(y(e,t))}function w(e,t,n){if(!t){if(!n){return p(e)}return g(e)}if(!n){return b(t,e)}return y(t,e)}if(e.exports){e.exports=w}else{t.md5=w}})(b)});function A(e){if(null===e||"object"!==t(e))return undefined;if(e.src){return x(e.src)}else if(e.href){return x(e.href)}else if(e.innerText&&""!==e.innerText){return x(e.innerText)}else{return undefined}}var T="fa-kits-diag";var D="fa-kits-node-under-test";var F="data-md5";var E="data-fa-detection-ignore";var C="data-fa-detection-timeout";var O="data-fa-detection-results-collection-max-wait";function N(e){var t=e.fn,n=t===void 0?function(){return true}:t,o=e.initialDuration,r=o===void 0?1:o,i=e.maxDuration,c=i===void 0?s.FontAwesomeDetection.timeout:i,a=e.showProgress,f=a===void 0?false:a,u=e.progressIndicator;return new Promise(function(e,t){function o(r,i){setTimeout(function(){var r=n();if(f){console.info(u)}if(!!r){e(r)}else{var a=250;var s=a+i;if(s<=c){o(a,s)}else{t("timeout")}}},r)}o(r,0)})}function j(){var e=Array.from(u.getElementsByTagName("link")).filter(function(e){return!e.hasAttribute(E)});var t=Array.from(u.getElementsByTagName("style")).filter(function(e){if(e.hasAttribute(E)){return false}if(s.FontAwesomeConfig&&e.innerText.match(new RegExp("svg:not\\(:root\\)\\.".concat(s.FontAwesomeConfig.replacementClass)))){return false}return true});function n(e,t){var n=u.createElement("iframe");n.setAttribute("style","visibility: hidden; position: absolute; height: 0; width: 0;");var o="fa-test-icon-"+t;var r=u.createElement("i");r.setAttribute("class","fa fa-coffee");r.setAttribute("id",o);var i=u.createElement("script");i.setAttribute("id",T);var c=function e(t,n,o,r){parent.FontAwesomeDetection.__pollUntil({fn:function e(){var t=document.getElementById(n);var o=window.getComputedStyle(t);var r=o.getPropertyValue("font-family");if(!!r.match(/FontAwesome/)||!!r.match(/Font Awesome 5/)){return true}else{return false}}}).then(function(){var e=document.getElementById(t);parent.postMessage({type:"fontawesome-conflict",technology:"webfont",href:e.href,innerText:e.innerText,tagName:e.tagName,md5:o},r)}).catch(function(e){var n=document.getElementById(t);if(e==="timeout"){parent.postMessage({type:"no-conflict",technology:"webfont",href:n.src,innerText:n.innerText,tagName:n.tagName,md5:o},r)}else{console.error(e)}})};var a=s.location.origin==="file://"?"*":s.location.origin;i.innerText="(".concat(c.toString(),")('").concat(D,"', '").concat(o||"foo","', '").concat(t,"', '").concat(a,"');");n.onload=function(){n.contentDocument.head.appendChild(i);n.contentDocument.head.appendChild(e);n.contentDocument.body.appendChild(r)};p(function(){return u.body.appendChild(n)})}var o={};for(var r=0;r<e.length;r++){var i=u.createElement("link");i.setAttribute("id",D);i.setAttribute("href",e[r].href);i.setAttribute("rel",e[r].rel);var c=A(e[r]);i.setAttribute(F,c);o[c]=e[r];n(i,c)}for(var a=0;a<t.length;a++){var f=u.createElement("style");f.setAttribute("id",D);var l=A(t[a]);f.setAttribute(F,l);f.innerText=t[a].innerText;o[l]=t[a];n(f,l)}return o}function S(e){var t=Array.from(u.scripts).filter(function(t){return!t.hasAttribute(E)&&t!==e});var n={};var o=function e(o){var r=u.createElement("iframe");r.setAttribute("style","display:none;");var i=u.createElement("script");i.setAttribute("id",D);var c=A(t[o]);i.setAttribute(F,c);n[c]=t[o];if(t[o].src!==""){i.src=t[o].src}if(t[o].innerText!==""){i.innerText=t[o].innerText}i.async=true;var a=u.createElement("script");a.setAttribute("id",T);var f=s.location.origin==="file://"?"*":s.location.origin;var l=function e(t,n,o){parent.FontAwesomeDetection.__pollUntil({fn:function e(){return!!window.FontAwesomeConfig}}).then(function(){var e=document.getElementById(t);parent.postMessage({type:"fontawesome-conflict",technology:"js",src:e.src,innerText:e.innerText,tagName:e.tagName,md5:n},o)}).catch(function(e){var r=document.getElementById(t);if(e==="timeout"){parent.postMessage({type:"no-conflict",src:r.src,innerText:r.innerText,tagName:r.tagName,md5:n},o)}else{console.error(e)}})};a.innerText="(".concat(l.toString(),")('").concat(D,"', '").concat(c,"', '").concat(f,"');");r.onload=function(){r.contentDocument.head.appendChild(a);r.contentDocument.head.appendChild(i)};p(function(){return u.body.appendChild(r)})};for(var r=0;r<t.length;r++){o(r)}return n}function M(e){var t=e.nodesTested,n=e.nodesFound;s.FontAwesomeDetection=s.FontAwesomeDetection||{};s.FontAwesomeDetection.nodesTested=t;s.FontAwesomeDetection.nodesFound=n;s.FontAwesomeDetection.detectionDone=true}function k(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(){};var t={conflict:{},noConflict:{}};s.onmessage=function(e){if(s.location.origin==="file://"||e.origin===s.location.origin){if(e&&e.data){if(e.data.type==="fontawesome-conflict"){t.conflict[e.data.md5]=e.data}else if(e.data.type==="no-conflict"){t.noConflict[e.data.md5]=e.data}}}};var n=S(u.currentScript);var r=j();var i=o({},n,r);var c=Object.keys(n).length+Object.keys(r).length;var a=s.FontAwesomeDetection.timeout+s.FontAwesomeDetection.resultsCollectionMaxWait;console.group("Font Awesome Detector");if(c===0){console.info("%cAll Good!","color: green; font-size: large");console.info("We didn't find anything that needs testing for conflicts. Ergo, no conflicts.")}else{console.info("Testing ".concat(c," possible conflicts."));console.info("We'll wait about ".concat(Math.round(s.FontAwesomeDetection.timeout/10)/100," seconds while testing these and\n")+"then up to another ".concat(Math.round(s.FontAwesomeDetection.resultsCollectionMaxWait/10)/100," to allow the browser time\n")+"to accumulate the results. But we'll probably be outta here way before then.\n\n");console.info("You can adjust those durations by assigning values to these attributes on the <script> element that loads this detection:");console.info("\t%c".concat(C,"%c: milliseconds to wait for each test before deciding whether it's a conflict."),"font-weight: bold;","font-size: normal;");console.info("\t%c".concat(O,"%c: milliseconds to wait for the browser to accumulate test results before giving up."),"font-weight: bold;","font-size: normal;");N({maxDuration:a,showProgress:true,progressIndicator:"waiting...",fn:function e(){return Object.keys(t.conflict).length+Object.keys(t.noConflict).length>=c}}).then(function(){console.info("DONE!");M({nodesTested:t,nodesFound:i});e({nodesTested:t,nodesFound:i});console.groupEnd()}).catch(function(n){if(n==="timeout"){console.info("TIME OUT! We waited until we got tired. Here's what we found:");M({nodesTested:t,nodesFound:i});e({nodesTested:t,nodesFound:i})}else{console.info("Whoops! We hit an error:",n);console.info("Here's what we'd found up until that error:");M({nodesTested:t,nodesFound:i});e({nodesTested:t,nodesFound:i})}console.groupEnd()})}}var I=s.FontAwesomeDetection||{};var P={report:y,timeout:+(u.currentScript.getAttribute(C)||"2000"),resultsCollectionMaxWait:+(u.currentScript.getAttribute(O)||"5000")};var _=o({},P,I,{__pollUntil:N,md5ForNode:A,detectionDone:false,nodesTested:null,nodesFound:null});s.FontAwesomeDetection=_;var B=function(){try{return process.env.NODE_ENV==="production"}catch(z){return false}}();function W(e){try{e()}catch(z){if(!B){throw z}}}W(function(){if(l&&d){k(window.FontAwesomeDetection.report)}});e.conflictDetection=k;Object.defineProperty(e,"__esModule",{value:true})});