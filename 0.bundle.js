(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{337:function(t,n,e){(function(n){var e="Expected a function",r="__lodash_hash_undefined__",o=1/0,i="[object Function]",u="[object GeneratorFunction]",a="[object Symbol]",c=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,f=/^\w*$/,s=/^\./,l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,h=/^\[object .+?Constructor\]$/,v="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,y=v||d||Function("return this")();var _=Array.prototype,b=Function.prototype,g=Object.prototype,m=y["__core-js_shared__"],w=function(){var t=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),O=b.toString,E=g.hasOwnProperty,k=g.toString,j=RegExp("^"+O.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=y.Symbol,R=_.splice,S=G(y,"Map"),x=G(Object,"create"),I=P?P.prototype:void 0,C=I?I.toString:void 0;function T(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function A(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function D(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function L(t,n){for(var e=t.length;e--;)if(H(t[e][0],n))return e;return-1}function V(t,n){for(var e=0,r=(n=function(t,n){if(Y(t))return!1;var e=typeof t;if("number"==e||"symbol"==e||"boolean"==e||null==t||J(t))return!0;return f.test(t)||!c.test(t)||null!=n&&t in Object(n)}(n,t)?[n]:function(t){return Y(t)?t:N(t)}(n)).length;null!=t&&e<r;)t=t[q(n[e++])];return e&&e==r?t:void 0}function M(t){return!(!B(t)||function(t){return!!w&&w in t}(t))&&(function(t){var n=B(t)?k.call(t):"";return n==i||n==u}(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t)?j:h).test(function(t){if(null!=t){try{return O.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function $(t,n){var e=t.__data__;return function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}(n)?e["string"==typeof n?"string":"hash"]:e.map}function G(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return M(e)?e:void 0}T.prototype.clear=function(){this.__data__=x?x(null):{}},T.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},T.prototype.get=function(t){var n=this.__data__;if(x){var e=n[t];return e===r?void 0:e}return E.call(n,t)?n[t]:void 0},T.prototype.has=function(t){var n=this.__data__;return x?void 0!==n[t]:E.call(n,t)},T.prototype.set=function(t,n){return this.__data__[t]=x&&void 0===n?r:n,this},A.prototype.clear=function(){this.__data__=[]},A.prototype.delete=function(t){var n=this.__data__,e=L(n,t);return!(e<0||(e==n.length-1?n.pop():R.call(n,e,1),0))},A.prototype.get=function(t){var n=this.__data__,e=L(n,t);return e<0?void 0:n[e][1]},A.prototype.has=function(t){return L(this.__data__,t)>-1},A.prototype.set=function(t,n){var e=this.__data__,r=L(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},D.prototype.clear=function(){this.__data__={hash:new T,map:new(S||A),string:new T}},D.prototype.delete=function(t){return $(this,t).delete(t)},D.prototype.get=function(t){return $(this,t).get(t)},D.prototype.has=function(t){return $(this,t).has(t)},D.prototype.set=function(t,n){return $(this,t).set(t,n),this};var N=F(function(t){t=function(t){return null==t?"":function(t){if("string"==typeof t)return t;if(J(t))return C?C.call(t):"";var n=t+"";return"0"==n&&1/t==-o?"-0":n}(t)}(t);var n=[];return s.test(t)&&n.push(""),t.replace(l,function(t,e,r,o){n.push(r?o.replace(p,"$1"):e||t)}),n});function q(t){if("string"==typeof t||J(t))return t;var n=t+"";return"0"==n&&1/t==-o?"-0":n}function F(t,n){if("function"!=typeof t||n&&"function"!=typeof n)throw new TypeError(e);var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return r.cache=i.set(o,u),u};return r.cache=new(F.Cache||D),r}function H(t,n){return t===n||t!=t&&n!=n}F.Cache=D;var Y=Array.isArray;function B(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function J(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&k.call(t)==a}t.exports=function(t,n,e){var r=null==t?void 0:V(t,n);return void 0===r?e:r}}).call(this,e(91))},338:function(t,n,e){"use strict";e.d(n,"b",function(){return r}),e.d(n,"a",function(){return o});e(337);var r=function(t){var n=document.createElement("template");return n.innerHTML=t,n.content.firstChild},o=function(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];r.forEach(function(e){var r="data-bind-".concat(e);Array.from(t.querySelectorAll("[".concat(r,"]"))).forEach(function(t){var o=n[t.getAttribute(r)].bind(n);t.addEventListener(e,o)})})}},339:function(t,n,e){"use strict";(function(t){var r=e(337),o=e.n(r);function i(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}function u(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var u=t.apply(n,e);function a(t){i(u,r,o,a,c,"next",t)}function c(t){i(u,r,o,a,c,"throw",t)}a(void 0)})}}n.a={findDirectory:function(){var n=u(regeneratorRuntime.mark(function n(e){var r,i=arguments;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:t.env.BASE_GOOGLE_DRIVE_DIRECTORY,n.abrupt("return",gapi.client.drive.files.list({q:"mimeType='application/vnd.google-apps.folder' and trashed = false and name = '".concat(e,"' and '").concat(r,"' in parents"),pageSize:1,fields:"files(id, name, webViewLink)"}).then(function(t){return o()(t,"result.files.0")}));case 2:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}(),createDirectory:function(){var n=u(regeneratorRuntime.mark(function n(e){var r,o,i=arguments;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:t.env.BASE_GOOGLE_DRIVE_DIRECTORY,o={name:e,parents:[r],mimeType:"application/vnd.google-apps.folder"},n.abrupt("return",gapi.client.drive.files.create({resource:o,fields:"id, name, webViewLink"}).then(function(t){return t.result}));case 3:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}()}}).call(this,e(127))},340:function(t,n,e){"use strict";n.a=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Invariant Violation";if(!t){var e=new Error(n);throw e.name="Invariant Violation",e.framesToPop=1,e}}},341:function(t,n,e){"use strict";(function(t){var r=e(340);n.a={get:function(n){Object(r.a)(n,"Id is required for search");var e="https://".concat(t.env.PIPEDRIVE_COMPANY_DOMAIN,".pipedrive.com/v1/deals/").concat(n,"?api_token=").concat(t.env.PIPEDRIVE_API_TOKEN);return window.fetch(e).then(function(t){return t.json()})}}}).call(this,e(127))},342:function(t,n,e){"use strict";var r=e(341),o=e(339),i=e(337),u=e.n(i);function a(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}n.a=function(t){return{create:function(){var n=function(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var i=t.apply(n,e);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)})}}(regeneratorRuntime.mark(function n(e){var r,i,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.get(e);case 2:return r=n.sent,i="".concat(e," - ").concat(u()(r,"data.title")),n.next=6,o.a.findDirectory(i);case 6:if(!(a=n.sent)){n.next=9;break}return n.abrupt("return",a);case 9:return n.abrupt("return",o.a.createDirectory(i));case 10:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}()}}(r.a)},343:function(t,n){t.exports='<div class="ui container">\n    <div class="ui action input">\n        <input type="text" placeholder="Insert PipeDrive URL..." data-bind-input="onInputChange">\n        <button class="ui button" data-bind-click="onSearchClick">Search</button>\n    </div>\n    <div class="ui divider"></div>\n    <a data-drive-directory href="" target="_blank"></a>\n    <br/>\n    <button class="ui primary button" data-bind-click="onLogoutClick">\n        Logout\n    </button>\n</div>'},345:function(t,n,e){"use strict";e.r(n),function(t){var n=e(343),r=e.n(n),o=e(338),i=e(342),u=e(49);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}function f(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,n){return!n||"object"!==a(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,n){return(p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function h(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(h.prototype,HTMLElement.prototype),Object.setPrototypeOf(h,HTMLElement);var v=function(n){var e=new RegExp("https://".concat(t.env.PIPEDRIVE_COMPANY_DOMAIN,".pipedrive.com/deal/([0-9]+)")),r=n.match(e);return r&&r[1]},d=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),s(this,l(n).apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}(n,h),function(t,n,e){n&&f(t.prototype,n),e&&f(t,e)}(n,[{key:"connectedCallback",value:function(){this.render(),this.inputValue=""}},{key:"render",value:function(){var t=Object(o.b)(r.a);Object(o.a)(t,this,"click","input"),this.appendChild(t),this.style.display="block"}},{key:"onInputChange",value:function(t){this.inputValue=t.target.value}},{key:"onSearchClick",value:function(){var t=function(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var i=t.apply(n,e);function u(t){c(i,r,o,u,a,"next",t)}function a(t){c(i,r,o,u,a,"throw",t)}u(void 0)})}}(regeneratorRuntime.mark(function t(){var n,e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=v(this.inputValue),e=this.querySelector("[data-drive-directory]"),t.next=4,i.a.create(n);case 4:r=t.sent,e.innerText=r.name,e.href=r.webViewLink;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"onLogoutClick",value:function(){u.a.signOut()}}]),n}();window.customElements.define("kf-pages-home",d)}.call(this,e(127))}}]);