!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}({1:function(e,t,n){"use strict";function r(){var e=document.getElementsByTagName("html");if(!(1>e.length))return e[0]}function i(){return document.getElementById("body")}function o(){return document.getElementById("footer-sticky-nav")}function u(){var e=document.getElementsByClassName("l-header");if(!(1>e.length))return e[0]}function c(){var e=document.getElementsByClassName("l-header__drop-nav");if(!(1>e.length))return e[0]}function d(){return document.getElementById("wpadminbar")}function a(){return document.getElementById("drawer-nav")}function s(e,t){if(e)return window.getComputedStyle(e).getPropertyValue(t)}function f(e,t,n){e.style[t]=n}function l(){var e=u(),t=c();return!(!e||!t)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=d(),n=0;t&&(n="fixed"===s(t,"position")?parseInt(s(r(),"margin-top")):n);var i=u();if(i){var o=s(i,"position");if("fixed"===o||"sticky"===o){var a=i.scrollHeight<window.innerHeight?i.offsetHeight:0;return a+n}var f=c();if(f){var v=!0===e.forceDropNav||l()?f.offsetHeight:0;return v+n}}return n}function w(e){e.setAttribute("aria-hidden","true")}function g(e){e.setAttribute("aria-hidden","false")}function h(e,t){var n=arguments,r=this,i=Date.now();return function(){i+t-Date.now()<0&&(e.apply(r,n),i=Date.now())}}function m(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return a})),n.d(t,"i",(function(){return s})),n.d(t,"l",(function(){return f})),n.d(t,"h",(function(){return v})),n.d(t,"j",(function(){return w})),n.d(t,"m",(function(){return g})),n.d(t,"n",(function(){return h})),n.d(t,"k",(function(){return m})),n(2)},2:function(e,t,n){"use strict";t.a=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{n=new CustomEvent(t,{bubbles:i,cancelable:o,detail:r})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,o,r)}e.dispatchEvent(n)}},24:function(e,t,n){"use strict";n.r(t),n(7);var r=n(1),i=function(e){var t="sticky"===Object(r.i)(e,"position"),n=(parseInt(Object(r.i)(e,"margin-top")),Object(r.h)({forceDropNav:!0})),i=function(){var t=e.previousElementSibling;(function(){if(t){var n=t.getBoundingClientRect();return n.y+n.height}return e.parentNode.getBoundingClientRect().y})()<=n&&Object(r.l)(e,"top","".concat(n,"px"))};t?window.addEventListener("scroll",i,!1):(window.removeEventListener("scroll",i,!1),Object(r.l)(e,"top",""))};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".l-sidebar-sticky-widget-area");e&&(i(e),window.addEventListener("resize:width",(function(){return i(e)}),!1))}),!1)},7:function(e,t,n){"use strict";var r,i=function(e,t){var n;try{n=new CustomEvent(t)}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent(t,!1,!1,null)}e.dispatchEvent(n)},o=window.innerWidth,u=window.innerHeight;r="inc2734/dispatch-custom-resize-event/dispatch",Boolean(sessionStorage.getItem(r))||window.addEventListener("resize",(function(){window.innerWidth!==o?(i(window,"resize:width"),o=window.innerWidth,u=window.innerHeight):function(){if(i(window,"resize:height"),window.innerHeight===u)i(window,"resize:height:undo");else{i(window,"resize:height:update");var e=/iP(hone|(o|a)d)/.test(navigator.userAgent);49<Math.abs(window.innerHeight-u)&&e&&i(window,"resize:height:ios")}}()}),!1),sessionStorage.setItem(r,!0),window.addEventListener("beforeunload",(function(){return sessionStorage.removeItem(r)}),!1)}});