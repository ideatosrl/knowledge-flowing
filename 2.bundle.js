(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{341:function(t,n){for(var e=[],r=0;r<256;++r)e[r]=(r+256).toString(16).substr(1);t.exports=function(t,n){var r=n||0,o=e;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")}},342:function(t,n){var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var r=new Uint8Array(16);t.exports=function(){return e(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,n=0;n<16;n++)0==(3&n)&&(t=4294967296*Math.random()),o[n]=t>>>((3&n)<<3)&255;return o}}},343:function(t,n,e){"use strict";var r=e(65),o=e.n(r),i=function(t){var n=t.name,e=t.mimeType,r=t.body,o=t.parent,i=t.bodyMimeType,a=void 0===i?"application/octet-stream":i,u=t.boundary,c="--"+u+"--",s="--"+u+"\r\nContent-Type: application/json\r\n\r\n";return s+=JSON.stringify({name:n,parents:[o],mimeType:e})+"\r\n",s+="--"+u+"\r\nContent-Type: ".concat(a,"\r\n\r\n"),s+="".concat(r,"\r\n"),s+=c},a=e(348),u=e.n(a);function c(t,n,e,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function s(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var i=t.apply(n,e);function a(t){c(i,r,o,a,u,"next",t)}function u(t){c(i,r,o,a,u,"throw",t)}a(void 0)})}}n.a=function(){var t=function(){var t=s(regeneratorRuntime.mark(function t(n){var e,r,o,a,c,s,p,f,l,d,v,m,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.name,r=n.data,o=n.mimeType,a=void 0===o?"application/json":o,c=n.parent,s=void 0===c?"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD":c,p=gapi.auth2.getAuthInstance().currentUser.get(),f=p.getAuthResponse(!0).access_token,l=u.a.v4(),d=new window.Headers({Authorization:"Bearer ".concat(f),"Content-Type":"multipart/related; boundary=".concat(l)}),v=i({name:e,boundary:l,body:r,parent:s,mimeType:a}),m="https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",h={method:"POST",headers:d,body:v},t.abrupt("return",window.fetch(m,h).then(function(t){return t.json()}).then(function(t){return t.id}));case 9:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}(),n=function(){var t=s(regeneratorRuntime.mark(function t(n){var e,r,i,a=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(a.length>1&&void 0!==a[1])||a[1],r=a.length>2&&void 0!==a[2]?a[2]:"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD",i=e?"=":"contains",t.abrupt("return",gapi.client.drive.files.list({q:"mimeType='".concat("application/vnd.google-apps.folder","' and trashed = false and name ").concat(i," '").concat(n,"' and '").concat(r,"' in parents"),pageSize:1,fields:"files(id, name, webViewLink)"}).then(function(t){return o()(t,"result.files.0")}));case 4:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}();return{list:function(){var t=s(regeneratorRuntime.mark(function t(){var n,e,r,i,a,u=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>0&&void 0!==u[0]?u[0]:{},e=n.mimeType,r=void 0===e?"application/vnd.google-apps.folder":e,i=n.parent,a=void 0===i?"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD":i,t.abrupt("return",gapi.client.drive.files.list({q:"mimeType='".concat(r,"' and trashed = false and '").concat(a,"' in parents"),orderBy:"name desc",pageSize:1e3,fields:"files(id, name, webViewLink)"}).then(function(t){return o()(t,"result.files")}));case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),findDirectory:n,createDirectory:function(){var t=s(regeneratorRuntime.mark(function t(n){var e,r,o=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD",r={name:n,parents:[e],mimeType:"application/vnd.google-apps.folder"},t.abrupt("return",gapi.client.drive.files.create({resource:r,fields:"id, name, webViewLink"}).then(function(t){return t.result}));case 3:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}(),createFile:t}}()},344:function(t,n,e){"use strict";e.d(n,"b",function(){return o});var r=e(95),o=function(t){var n=window.parseInt(t,10);if(!Number.isNaN(n))return n;var e=new RegExp("https://".concat("ideato",".pipedrive.com/deal/([0-9]+)")),r=t.match(e);return r&&r[1]};n.a={get:function(t){Object(r.a)(t,"Id is required for search");var n="https://".concat("ideato",".pipedrive.com/v1/deals/").concat(t,"?api_token=").concat("40f9fdd51f3051900f39038894050212e3930a88");return window.fetch(n).then(function(t){return t.json()})}}},345:function(t,n,e){"use strict";var r=e(344),o=e(343);function i(t,n,e,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var a={getData:function(){var t=function(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var a=t.apply(n,e);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)})}}(regeneratorRuntime.mark(function t(n,e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,gapi.client.sheets.spreadsheets.values.get({spreadsheetId:n,range:e});case 2:return r=t.sent,t.abrupt("return",r.result);case 4:case"end":return t.stop()}},t,this)}));return function(n,e){return t.apply(this,arguments)}}()},u=e(65),c=e.n(u);function s(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(t,n,e,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var i=t.apply(n,e);function a(t){p(i,r,o,a,u,"next",t)}function u(t){p(i,r,o,a,u,"throw",t)}a(void 0)})}}var l=function(t){return t.toString().padStart(5,"0")},d=function(t){var n=t.name.split(" - ");return{directoryId:t.id,id:parseInt(n[0]),title:n[1],webViewLink:t.webViewLink}};n.a=function(t){var n=function(){var t=f(regeneratorRuntime.mark(function t(n){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=l(n),t.next=3,o.a.findDirectory(e,!1);case 3:if(r=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.abrupt("return",d(r));case 7:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}();return{create:function(){var n=f(regeneratorRuntime.mark(function n(e){var r,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.get(e);case 2:return r=n.sent,i="".concat(l(e)," - ").concat(c()(r,"data.title")),n.abrupt("return",o.a.createDirectory(i));case 5:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}(),list:function(){var t=f(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.list();case 2:return n=t.sent,t.abrupt("return",n.map(d));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),listElements:function(){var t=f(regeneratorRuntime.mark(function t(){var n,e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.getData("1Naop1VImN2N6EZAyxVdrqIg_s4onjVbD1MHdX3C43q0","Elements!A2:C");case 2:return n=t.sent,e=c()(n,"values",[]),t.abrupt("return",e.map(function(t){var n=s(t,3);return{name:n[0],length:n[1],notes:n[2]}}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),get:n}}(r.a)},346:function(t,n,e){var r=e(342),o=e(341);t.exports=function(t,n,e){var i=n&&e||0;"string"==typeof t&&(n="binary"===t?new Array(16):null,t=null);var a=(t=t||{}).random||(t.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var u=0;u<16;++u)n[i+u]=a[u];return n||o(a)}},347:function(t,n,e){var r,o,i=e(342),a=e(341),u=0,c=0;t.exports=function(t,n,e){var s=n&&e||0,p=n||[],f=(t=t||{}).node||r,l=void 0!==t.clockseq?t.clockseq:o;if(null==f||null==l){var d=i();null==f&&(f=r=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==l&&(l=o=16383&(d[6]<<8|d[7]))}var v=void 0!==t.msecs?t.msecs:(new Date).getTime(),m=void 0!==t.nsecs?t.nsecs:c+1,h=v-u+(m-c)/1e4;if(h<0&&void 0===t.clockseq&&(l=l+1&16383),(h<0||v>u)&&void 0===t.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=v,c=m,o=l;var y=(1e4*(268435455&(v+=122192928e5))+m)%4294967296;p[s++]=y>>>24&255,p[s++]=y>>>16&255,p[s++]=y>>>8&255,p[s++]=255&y;var b=v/4294967296*1e4&268435455;p[s++]=b>>>8&255,p[s++]=255&b,p[s++]=b>>>24&15|16,p[s++]=b>>>16&255,p[s++]=l>>>8|128,p[s++]=255&l;for(var w=0;w<6;++w)p[s+w]=f[w];return n||a(p)}},348:function(t,n,e){var r=e(347),o=e(346),i=o;i.v1=r,i.v4=o,t.exports=i},351:function(t,n){t.exports='<kf-components-menu>\n    <div>\n       <h1>Archive</h1>\n       <table class="ui very basic table">\n        <thead>\n          <tr>\n            <th>Deal</th>\n            <th>Name</th>\n            <th>Link</th>\n          </tr>\n        </thead>\n        <tbody>\n         \n        </tbody>\n      </table>\n    </div>\n</kf-components-menu>'},356:function(t,n,e){"use strict";e.r(n);var r=e(351),o=e.n(r),i=e(66),a=e(345),u=e(43);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,n,e,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,n){return!n||"object"!==c(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,n){return(d=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function v(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(v.prototype,HTMLElement.prototype),Object.setPrototypeOf(v,HTMLElement);var m=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),f(this,l(n).apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&d(t,n)}(n,v),function(t,n,e){n&&p(t.prototype,n),e&&p(t,e)}(n,[{key:"connectedCallback",value:function(){this.render(),this.tableBody=this.querySelector("tbody"),this.list()}},{key:"list",value:function(){var t=function(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var i=t.apply(n,e);function a(t){s(i,r,o,a,u,"next",t)}function u(t){s(i,r,o,a,u,"throw",t)}a(void 0)})}}(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(i.b)("<tbody></tbody>"),t.next=3,a.a.list();case 3:t.sent.map(function(t){return"<tr>\n            <td>".concat(t.id,"</td>\n            <td>").concat(t.title,'</td>\n            <td>\n              <a class="ui button primary" target="_blank" data-navigo href="discovery/').concat(t.id,'">\n                Open\n              </a>\n              <a class="ui button" target="_blank" href="').concat(t.webViewLink,'">\n                <i class="google drive icon"></i>\n                Drive\n              </a>\n            </td>\n        </tr>')}).map(i.b).forEach(function(t){n.appendChild(t)}),this.tableBody.replaceWith(n),u.a.getRouter().updatePageLinks();case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=Object(i.b)(o.a);Object(i.a)(t,this,"click","input"),this.appendChild(t),this.style.display="block"}}]),n}();window.customElements.define("kf-pages-archive",m)}}]);