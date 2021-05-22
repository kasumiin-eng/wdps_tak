!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.lodash},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/rating-box--item","title":"Item","description":"It is a child block of the rating box block.","category":"smb","parent":["snow-monkey-blocks/rating-box"],"attributes":{"title":{"type":"string","source":"html","selector":".smb-rating-box__item__title","default":""},"rating":{"type":"number","default":0},"color":{"type":"string"}}}')},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.richText},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"metadata",(function(){return b})),n.d(r,"name",(function(){return g})),n.d(r,"settings",(function(){return v}));var o=n(4),i=n.n(o),a=n(0),c=(n(3),n(7)),l=(n(9),n(2)),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==n&&e>n&&(e=n),e},b=n(5),u=n(6),m=n.n(u),_=n(8),d=n(1);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=[{attributes:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},b.attributes),save:function(e){var t=e.attributes,n=t.title,r=t.rating,o=t.color;return Object(a.createElement)("div",{className:"smb-rating-box__item"},Object(a.createElement)("div",{className:"smb-rating-box__item__title"},Object(a.createElement)(d.RichText.Content,{value:n})),Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation"},Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation__bar"},Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation__numeric"},r),Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation__rating",style:{width:"".concat(10*r,"%"),backgroundColor:o}}))))}}],g=b.name,v={icon:{foreground:"#cd162c",src:"editor-alignleft"},edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.className,o=t.title,i=t.rating,c=t.color,b=m()("smb-rating-box__item",r),u={width:"".concat(10*i,"%"),backgroundColor:c||void 0},p=Object(d.useBlockProps)({className:b});return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(d.InspectorControls,null,Object(a.createElement)(_.PanelBody,{title:Object(l.__)("Block Settings","snow-monkey-blocks")},Object(a.createElement)(_.RangeControl,{label:Object(l.__)("Rating","snow-monkey-blocks"),value:i,onChange:function(e){return n({rating:s(e,0,10)})},min:"1",max:"10"})),Object(a.createElement)(d.PanelColorSettings,{title:Object(l.__)("Color Settings","snow-monkey-blocks"),initialOpen:!1,colorSettings:[{value:c,onChange:function(e){return n({color:e})},label:Object(l.__)("Bar Color","snow-monkey-blocks")}]})),Object(a.createElement)("div",p,Object(a.createElement)(d.RichText,{className:"smb-rating-box__item__title",placeholder:Object(l.__)("Write title…","snow-monkey-blocks"),value:o,multiline:!1,onChange:function(e){return n({title:e})}}),Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation"},Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation__bar"},Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation__numeric"},i),Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation__rating",style:u})))))},save:function(e){var t=e.attributes,n=e.className,r=t.title,o=t.rating,i=t.color,c=m()("smb-rating-box__item",n),l={width:"".concat(10*o,"%"),backgroundColor:i||void 0};return Object(a.createElement)("div",d.useBlockProps.save({className:c}),Object(a.createElement)("div",{className:"smb-rating-box__item__title"},Object(a.createElement)(d.RichText.Content,{value:r})),Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation"},Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation__bar"},Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation__numeric"},o),Object(a.createElement)("div",{className:"smb-rating-box__item__evaluation__rating",style:l}))))},deprecated:f};!function(e){if(e){var t=e.metadata,n=e.settings,r=e.name;t&&(t.title&&(t.title=Object(l.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=Object(l.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=Object(l.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords),Object(c.unstable__bootstrapServerSideBlockDefinitions)(i()({},r,t))),Object(c.registerBlockType)(r,n)}}(r)}]);