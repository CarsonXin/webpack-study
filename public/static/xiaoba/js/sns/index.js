webpackJsonp([1],[,function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):r&&(d=r),d){var f=u.functional,l=f?u.render:u.beforeCreate;f?(u._injectStyles=d,u.render=function(e,t){return d.call(t),l(e,t)}):u.beforeCreate=l?[].concat(l,d):[d]}return{esModule:a,exports:s,options:u}}},function(e,t){e.exports=window.Vue},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(g){var i=p++;r=l||(l=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(5),d={},f=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,h=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=u(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=d[a.id];s.refs--,n.push(s)}t?(o=u(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],c=i[2],u=i[3],d={id:e+":"+o,css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(d):n.push(r[a]={id:a,parts:[d]})}return n}},function(e,t){},function(e,t,n){"use strict";function r(e){n(31)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),i=n.n(o),a=n(27),s=n(1),c=r,u=s(i.a,a.a,!1,c,null,null);t.default=u.exports},,,,,function(e,t,n){"use strict";e.exports={data:function(){return{title:"vue title",hasOption:!1,showSearchBar:!1}}}},,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(2),i=r(o),a=n(0),s=r(a),c=n(7),u=r(c);n(6);new i.default({el:"#demo",components:{pageHeader:u.default},data:{text:"hello world",lan:"CN"},methods:{backToTop:s.default.backToTop(),test:function(e,t){s.default.testFunc(e,t)}},mounted:function(){this.test("cc","hh")}})},,,,,function(e,t,n){t=e.exports=n(3)(void 0),t.push([e.i,".header-container{background:-webkit-gradient(linear,left top,right top,from(#1dbc9c),color-stop(50%,#34c1ae),to(#50c9c2));background:linear-gradient(90deg,#1dbc9c,#34c1ae 50%,#50c9c2);position:relative;height:3rem;margin-bottom:.5rem;padding:.5rem 1rem;-webkit-box-sizing:border-box;box-sizing:border-box}.logo{height:2rem;width:2rem}.logo img{width:100%}.title{left:0;right:0;height:3rem;text-align:center;color:#fff;font-size:1.1rem}.header-option-button{height:2rem;width:2rem}",""])},,,,function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-container flex-row flex-center"},[n("div",{staticClass:"logo"}),e._v(" "),n("div",{staticClass:"title flex-1"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"header-option-button"})])},o=[],i={render:r,staticRenderFns:o};t.a=i},,,,function(e,t,n){var r=n(23);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(4)("6de4ba40",r,!0)}],[18]);