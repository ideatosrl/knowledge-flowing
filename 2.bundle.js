(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{341:function(t,e){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);t.exports=function(t,e){var r=e||0,o=n;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")}},342:function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);t.exports=function(){return n(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),o[e]=t>>>((3&e)<<3)&255;return o}}},343:function(t,e,n){"use strict";var r=n(65),o=n.n(r),a=function(t){var e=t.name,n=t.mimeType,r=t.body,o=t.parent,a=t.bodyMimeType,i=void 0===a?"application/octet-stream":a,u=t.boundary,c="--"+u+"--",s="--"+u+"\r\nContent-Type: application/json\r\n\r\n";return s+=JSON.stringify({name:e,parents:[o],mimeType:n})+"\r\n",s+="--"+u+"\r\nContent-Type: ".concat(i,"\r\n\r\n"),s+="".concat(r,"\r\n"),s+=c},i=n(348),u=n.n(i),c=n(31);function s(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t){s(a,r,o,i,u,"next",t)}function u(t){s(a,r,o,i,u,"throw",t)}i(void 0)})}}e.a=function(){var t=function(){var t=p(regeneratorRuntime.mark(function t(e){var n,r,o,i,s,p,f,l,d,v,m;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,r=e.data,o=e.mimeType,i=void 0===o?"application/json":o,s=e.parent,p=void 0===s?"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD":s,f=u.a.v4(),l=new window.Headers({Authorization:"Bearer ".concat(c.a.getToken()),"Content-Type":"multipart/related; boundary=".concat(f)}),d=a({name:n,boundary:f,body:r,parent:p,mimeType:i}),v="https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",m={method:"POST",headers:l,body:d},t.abrupt("return",window.fetch(v,m).then(function(t){return t.json()}).then(function(t){return t.id}));case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e=function(){var t=p(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://content.googleapis.com/drive/v3/files/".concat(e,"?alt=media&fields=webContentLink&key=").concat("AIzaSyCctCJMLPaod4CCB2ywGgkYwpSzZYPvD3c"),r=new window.Headers({Authorization:"Bearer ".concat(c.a.getToken())}),o={method:"GET",headers:r},t.abrupt("return",window.fetch(n,o).then(function(t){return t.text()}));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n=function(){var t=p(regeneratorRuntime.mark(function t(e){var n,r,a,i,u=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=!(u.length>1&&void 0!==u[1])||u[1],r=u.length>2?u[2]:void 0,a=u.length>3?u[3]:void 0,i="trashed = false and name ".concat(n?"=":"contains"," '").concat(e,"'"),r&&(i="".concat(i," and '").concat(r,"' in parents")),a&&(i="".concat(i," and mimeType='").concat(a)),t.abrupt("return",gapi.client.drive.files.list({q:i,pageSize:1,fields:"files(id, name, webViewLink)"}).then(function(t){return o()(t,"result.files.0")}));case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),r=function(){var t=p(regeneratorRuntime.mark(function t(e){var r,o,a=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=!(a.length>1&&void 0!==a[1])||a[1],o=a.length>2&&void 0!==a[2]?a[2]:"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD",t.abrupt("return",n({name:e,equal:r,parent:o,mimeType:"application/vnd.google-apps.folder"}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();return{list:function(){var t=p(regeneratorRuntime.mark(function t(){var e,n,r,a,i,u=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:{},n=e.mimeType,r=void 0===n?"application/vnd.google-apps.folder":n,a=e.parent,i=void 0===a?"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD":a,t.abrupt("return",gapi.client.drive.files.list({q:"mimeType='".concat(r,"' and trashed = false and '").concat(i,"' in parents"),orderBy:"name desc",pageSize:1e3,fields:"files(id, name, webViewLink)"}).then(function(t){return o()(t,"result.files")}));case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),find:n,findDirectory:r,createDirectory:function(){var t=p(regeneratorRuntime.mark(function t(e){var n,r,o=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD",r={name:e,parents:[n],mimeType:"application/vnd.google-apps.folder"},t.abrupt("return",gapi.client.drive.files.create({resource:r,fields:"id, name, webViewLink"}).then(function(t){return t.result}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),createFile:t,download:e}}()},344:function(t,e,n){"use strict";n.d(e,"b",function(){return o});var r=n(95),o=function(t){var e=window.parseInt(t,10);if(!Number.isNaN(e))return e;var n=new RegExp("https://".concat("ideato",".pipedrive.com/deal/([0-9]+)")),r=t.match(n);return r&&r[1]};e.a={get:function(t){Object(r.a)(t,"Id is required for search");var e="https://".concat("ideato",".pipedrive.com/v1/deals/").concat(t,"?api_token=").concat("40f9fdd51f3051900f39038894050212e3930a88");return window.fetch(e).then(function(t){return t.json()})}}},345:function(t,e,n){"use strict";var r=n(344),o=n(343);function a(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}var i={getData:function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)})}}(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,gapi.client.sheets.spreadsheets.values.get({spreadsheetId:e,range:n});case 2:return r=t.sent,t.abrupt("return",r.result);case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},u=n(65),c=n.n(u);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t){p(a,r,o,i,u,"next",t)}function u(t){p(a,r,o,i,u,"throw",t)}i(void 0)})}}var l=function(t){return t.toString().padStart(5,"0")},d=function(t){var e=t.name.split(" - ");return{directoryId:t.id,id:parseInt(e[0]),title:e[1],webViewLink:t.webViewLink}};e.a=function(t){var e=function(){var t=f(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.find("".concat(e,".json"),!0);case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:return r=n.id,t.next=8,o.a.download(r);case 8:if(a=t.sent){t.next=11;break}return t.abrupt("return");case 11:return t.abrupt("return",JSON.parse(a));case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();return{create:function(){var e=f(regeneratorRuntime.mark(function e(n){var r,a,i,u,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(n);case 2:return r=e.sent,a=c()(r,"data.title"),i="".concat(l(n)," - ").concat(a),e.next=7,o.a.createDirectory(i);case 7:return u=e.sent,s={id:n,directory:u,title:a,elements:[]},e.abrupt("return",o.a.createFile({name:"".concat(n,".json"),parent:u.id,data:JSON.stringify(s)}));case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),list:function(){var t=f(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.list();case 2:return e=t.sent,t.abrupt("return",e.map(d));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),listElements:function(){var t=f(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.getData("1Naop1VImN2N6EZAyxVdrqIg_s4onjVbD1MHdX3C43q0","Elements!A2:C");case 2:return e=t.sent,n=c()(e,"values",[]),t.abrupt("return",n.map(function(t,e){var n=s(t,3);return{id:e,name:n[0],length:n[1],notes:n[2]}}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),get:e}}(r.a)},346:function(t,e,n){var r=n(342),o=n(341);t.exports=function(t,e,n){var a=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var i=(t=t||{}).random||(t.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e)for(var u=0;u<16;++u)e[a+u]=i[u];return e||o(i)}},347:function(t,e,n){var r,o,a=n(342),i=n(341),u=0,c=0;t.exports=function(t,e,n){var s=e&&n||0,p=e||[],f=(t=t||{}).node||r,l=void 0!==t.clockseq?t.clockseq:o;if(null==f||null==l){var d=a();null==f&&(f=r=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==l&&(l=o=16383&(d[6]<<8|d[7]))}var v=void 0!==t.msecs?t.msecs:(new Date).getTime(),m=void 0!==t.nsecs?t.nsecs:c+1,h=v-u+(m-c)/1e4;if(h<0&&void 0===t.clockseq&&(l=l+1&16383),(h<0||v>u)&&void 0===t.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=v,c=m,o=l;var y=(1e4*(268435455&(v+=122192928e5))+m)%4294967296;p[s++]=y>>>24&255,p[s++]=y>>>16&255,p[s++]=y>>>8&255,p[s++]=255&y;var w=v/4294967296*1e4&268435455;p[s++]=w>>>8&255,p[s++]=255&w,p[s++]=w>>>24&15|16,p[s++]=w>>>16&255,p[s++]=l>>>8|128,p[s++]=255&l;for(var b=0;b<6;++b)p[s+b]=f[b];return e||i(p)}},348:function(t,e,n){var r=n(347),o=n(346),a=o;a.v1=r,a.v4=o,t.exports=a},351:function(t,e){t.exports='<kf-components-menu>\n    <div>\n       <h1>Archive</h1>\n       <table class="ui very basic table">\n        <thead>\n          <tr>\n            <th>Deal</th>\n            <th>Name</th>\n            <th>Link</th>\n          </tr>\n        </thead>\n        <tbody>\n         \n        </tbody>\n      </table>\n    </div>\n</kf-components-menu>'},356:function(t,e,n){"use strict";n.r(e);var r=n(351),o=n.n(r),a=n(66),i=n(345),u=n(43);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(v.prototype,HTMLElement.prototype),Object.setPrototypeOf(v,HTMLElement);var m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,l(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,v),function(t,e,n){e&&p(t.prototype,e),n&&p(t,n)}(e,[{key:"connectedCallback",value:function(){this.render(),this.tableBody=this.querySelector("tbody"),this.list()}},{key:"list",value:function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t){s(a,r,o,i,u,"next",t)}function u(t){s(a,r,o,i,u,"throw",t)}i(void 0)})}}(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(a.b)("<tbody></tbody>"),t.next=3,i.a.list();case 3:t.sent.map(function(t){return"<tr>\n            <td>".concat(t.id,"</td>\n            <td>").concat(t.title,'</td>\n            <td>\n              <a class="ui button primary" target="_blank" data-navigo href="discovery/').concat(t.id,'">\n                Open\n              </a>\n              <a class="ui button" target="_blank" href="').concat(t.webViewLink,'">\n                <i class="google drive icon"></i>\n                Drive\n              </a>\n            </td>\n        </tr>')}).map(a.b).forEach(function(t){e.appendChild(t)}),this.tableBody.replaceWith(e),u.a.getRouter().updatePageLinks();case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=Object(a.b)(o.a);Object(a.a)(t,this,"click","input"),this.appendChild(t),this.style.display="block"}}]),e}();window.customElements.define("kf-pages-archive",m)}}]);