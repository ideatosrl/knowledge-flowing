(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{341:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},342:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},343:function(e,t,n){"use strict";var r=n(65),o=n.n(r),i=function(e){var t=e.name,n=e.mimeType,r=e.body,o=e.parent,i=e.bodyMimeType,a=void 0===i?"application/octet-stream":i,u=e.boundary,c="--"+u+"--",s="--"+u+"\r\nContent-Type: application/json\r\n\r\n";return s+=JSON.stringify({name:t,parents:[o],mimeType:n})+"\r\n",s+="--"+u+"\r\nContent-Type: ".concat(a,"\r\n\r\n"),s+="".concat(r,"\r\n"),s+=c},a=n(348),u=n.n(a),c=n(31);function s(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,u,"next",e)}function u(e){s(i,r,o,a,u,"throw",e)}a(void 0)})}}t.a=function(){var e=function(){var e=p(regeneratorRuntime.mark(function e(t){var n,r,o,a,s,p,f,d,l,v,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.data,o=t.mimeType,a=void 0===o?"application/json":o,s=t.parent,p=void 0===s?"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD":s,f=u.a.v4(),d=new window.Headers({Authorization:"Bearer ".concat(c.a.getToken()),"Content-Type":"multipart/related; boundary=".concat(f)}),l=i({name:n,boundary:f,body:r,parent:p,mimeType:a}),v="https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",m={method:"POST",headers:d,body:l},e.abrupt("return",window.fetch(v,m).then(function(e){return e.json()}).then(function(e){return e.id}));case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=p(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://content.googleapis.com/drive/v3/files/".concat(t,"?alt=media&fields=webContentLink&key=").concat("AIzaSyCctCJMLPaod4CCB2ywGgkYwpSzZYPvD3c"),r=new window.Headers({Authorization:"Bearer ".concat(c.a.getToken())}),o={method:"GET",headers:r},e.abrupt("return",window.fetch(n,o).then(function(e){return e.text()}));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n=function(){var e=p(regeneratorRuntime.mark(function e(t){var n,r,i,a,u=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(u.length>1&&void 0!==u[1])||u[1],r=u.length>2?u[2]:void 0,i=u.length>3?u[3]:void 0,a="trashed = false and name ".concat(n?"=":"contains"," '").concat(t,"'"),r&&(a="".concat(a," and '").concat(r,"' in parents")),i&&(a="".concat(a," and mimeType='").concat(i)),e.abrupt("return",gapi.client.drive.files.list({q:a,pageSize:1,fields:"files(id, name, webViewLink)"}).then(function(e){return o()(e,"result.files.0")}));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=p(regeneratorRuntime.mark(function e(t){var r,o,i=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=!(i.length>1&&void 0!==i[1])||i[1],o=i.length>2&&void 0!==i[2]?i[2]:"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD",e.abrupt("return",n({name:t,equal:r,parent:o,mimeType:"application/vnd.google-apps.folder"}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return{list:function(){var e=p(regeneratorRuntime.mark(function e(){var t,n,r,i,a,u=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},n=t.mimeType,r=void 0===n?"application/vnd.google-apps.folder":n,i=t.parent,a=void 0===i?"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD":i,e.abrupt("return",gapi.client.drive.files.list({q:"mimeType='".concat(r,"' and trashed = false and '").concat(a,"' in parents"),orderBy:"name desc",pageSize:1e3,fields:"files(id, name, webViewLink)"}).then(function(e){return o()(e,"result.files")}));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),find:n,findDirectory:r,createDirectory:function(){var e=p(regeneratorRuntime.mark(function e(t){var n,r,o=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD",r={name:t,parents:[n],mimeType:"application/vnd.google-apps.folder"},e.abrupt("return",gapi.client.drive.files.create({resource:r,fields:"id, name, webViewLink"}).then(function(e){return e.result}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),createFile:e,download:t}}()},344:function(e,t,n){"use strict";n.d(t,"b",function(){return o});var r=n(95),o=function(e){var t=window.parseInt(e,10);if(!Number.isNaN(t))return t;var n=new RegExp("https://".concat("ideato",".pipedrive.com/deal/([0-9]+)")),r=e.match(n);return r&&r[1]};t.a={get:function(e){Object(r.a)(e,"Id is required for search");var t="https://".concat("ideato",".pipedrive.com/v1/deals/").concat(e,"?api_token=").concat("40f9fdd51f3051900f39038894050212e3930a88");return window.fetch(t).then(function(e){return e.json()})}}},345:function(e,t,n){"use strict";var r=n(344),o=n(343);function i(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}var a={getData:function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){i(a,r,o,u,c,"next",e)}function c(e){i(a,r,o,u,c,"throw",e)}u(void 0)})}}(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.sheets.spreadsheets.values.get({spreadsheetId:t,range:n});case 2:return r=e.sent,e.abrupt("return",r.result);case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},u=n(65),c=n.n(u);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){p(i,r,o,a,u,"next",e)}function u(e){p(i,r,o,a,u,"throw",e)}a(void 0)})}}var d=function(e){return e.toString().padStart(5,"0")},l=function(e){var t=e.name.split(" - ");return{directoryId:e.id,id:parseInt(t[0]),title:t[1],webViewLink:e.webViewLink}};t.a=function(e){var t=function(){var e=f(regeneratorRuntime.mark(function e(t){var n,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.find("".concat(t,".json"),!0);case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:return r=n.id,e.next=8,o.a.download(r);case 8:if(i=e.sent){e.next=11;break}return e.abrupt("return");case 11:return e.abrupt("return",JSON.parse(i));case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return{create:function(){var t=f(regeneratorRuntime.mark(function t(n){var r,i,a,u,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get(n);case 2:return r=t.sent,i=c()(r,"data.title"),a="".concat(d(n)," - ").concat(i),t.next=7,o.a.createDirectory(a);case 7:return u=t.sent,s={id:n,directory:u,title:i,elements:[]},t.abrupt("return",o.a.createFile({name:"".concat(n,".json"),parent:u.id,data:JSON.stringify(s)}));case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),list:function(){var e=f(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.list();case 2:return t=e.sent,e.abrupt("return",t.map(l));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),listElements:function(){var e=f(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getData("1Naop1VImN2N6EZAyxVdrqIg_s4onjVbD1MHdX3C43q0","Elements!A2:C");case 2:return t=e.sent,n=c()(t,"values",[]),e.abrupt("return",n.map(function(e,t){var n=s(e,3);return{id:t,name:n[0],length:n[1],notes:n[2]}}));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),get:t}}(r.a)},346:function(e,t,n){var r=n(342),o=n(341);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var u=0;u<16;++u)t[i+u]=a[u];return t||o(a)}},347:function(e,t,n){var r,o,i=n(342),a=n(341),u=0,c=0;e.exports=function(e,t,n){var s=t&&n||0,p=t||[],f=(e=e||{}).node||r,d=void 0!==e.clockseq?e.clockseq:o;if(null==f||null==d){var l=i();null==f&&(f=r=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==d&&(d=o=16383&(l[6]<<8|l[7]))}var v=void 0!==e.msecs?e.msecs:(new Date).getTime(),m=void 0!==e.nsecs?e.nsecs:c+1,h=v-u+(m-c)/1e4;if(h<0&&void 0===e.clockseq&&(d=d+1&16383),(h<0||v>u)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=v,c=m,o=d;var y=(1e4*(268435455&(v+=122192928e5))+m)%4294967296;p[s++]=y>>>24&255,p[s++]=y>>>16&255,p[s++]=y>>>8&255,p[s++]=255&y;var w=v/4294967296*1e4&268435455;p[s++]=w>>>8&255,p[s++]=255&w,p[s++]=w>>>24&15|16,p[s++]=w>>>16&255,p[s++]=d>>>8|128,p[s++]=255&d;for(var g=0;g<6;++g)p[s+g]=f[g];return t||a(p)}},348:function(e,t,n){var r=n(347),o=n(346),i=o;i.v1=r,i.v4=o,e.exports=i},349:function(e,t){e.exports='<kf-components-menu>\n    <div>\n        <h1>Discovery Detail</h1>\n        <span data-text="printableDiscovery"></span>\n        <ul data-discovery-elements></ul>\n        <button class="ui primary button" data-bind-click="save">\n            Save Document\n        </button>\n    </div>\n</kf-components-menu>'},354:function(e,t,n){"use strict";n.r(t);var r=n(349),o=n.n(r),i=n(66),a=n(345),u=n(343);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,u,"next",e)}function u(e){s(i,r,o,a,u,"throw",e)}a(void 0)})}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(m.prototype,HTMLElement.prototype),Object.setPrototypeOf(m,HTMLElement);var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,l(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,m),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(t,[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var e=Object(i.b)(o.a);Object(i.a)(e,this,"click","input"),Object(i.c)(e,this),this.appendChild(e),this.style.display="block",this.renderList(),this.load()}},{key:"load",value:function(){var e=p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.get(this.discoveryId);case 2:this.discovery=e.sent,Object(i.c)(this);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderList",value:function(){var e=p(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.listElements();case 2:t=e.sent,(n=this.querySelector("ul")).innerHTML="",t.map(function(e){return"<li>".concat(e.name," (").concat(e.length,") minutes</li>")}).map(i.b).forEach(function(e){n.appendChild(e)});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.createFile({name:this.printableDiscovery,data:"<html></body>".concat(this.innerHTML,"</body></html>"),parent:this.discovery.directoryId,mimeType:"application/vnd.google-apps.document"});case 2:swal("File Saved");case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"discoveryId",get:function(){return this.getAttribute("discovery-id")},set:function(e){this.setAttribute("discovery-id",e)}},{key:"printableDiscovery",get:function(){return this.discovery?"".concat(this.discovery.id," - ").concat(this.discovery.title):this.discoveryId}}]),t}();window.customElements.define("kf-pages-discovery-detail",h)}}]);