(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{343:function(t,e){t.exports='<kf-components-menu>\n    <div>\n        <h1>Discovery Detail</h1>\n        <span data-text="discoveryId"></span>\n    </div>\n</kf-components-menu>'},348:function(t,e,n){"use strict";n.r(e);var o=n(343),r=n.n(o),i=n(65);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(a.prototype,HTMLElement.prototype),Object.setPrototypeOf(a,HTMLElement);var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,f(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,a),function(t,e,n){e&&u(t.prototype,e),n&&u(t,n)}(e,[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var t=Object(i.b)(r.a);Object(i.a)(t,this,"click","input"),Object(i.c)(t,this),this.appendChild(t),this.style.display="block",console.log(this.discoveryId)}},{key:"discoveryId",get:function(){return this.getAttribute("discovery-id")},set:function(t){this.setAttribute("discovery-id",t)}}]),e}();window.customElements.define("kf-pages-discovery-detail",l)}}]);