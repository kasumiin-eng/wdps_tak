!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.lodash},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.primitives},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/items--item--block-link","title":"Item (Block Link)","description":"It is a child block of the items block.","category":"smb","parent":["snow-monkey-blocks/items"],"attributes":{"titleTagName":{"type":"string","default":"div"},"title":{"type":"string","source":"html","selector":".smb-items__item__title","default":""},"lede":{"type":"string","source":"html","selector":".smb-items__item__lede","default":""},"summary":{"type":"string","source":"html","selector":".smb-items__item__content","default":""},"url":{"type":"string","default":""},"target":{"type":"string","default":"_self"},"imageID":{"type":"number","default":0},"imageURL":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"src","default":""},"imageAlt":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"alt","default":""},"imageWidth":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"width","default":""},"imageHeight":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"height","default":""},"imageSizeSlug":{"type":"string","default":"large"},"btnLabel":{"type":"string","source":"html","selector":".smb-items__item__btn > .smb-btn__label","default":""},"btnBackgroundColor":{"type":"string"},"btnTextColor":{"type":"string"},"btnSize":{"type":"string","default":""},"btnBorderRadius":{"type":"number"},"btnWrap":{"type":"boolean","default":false}}}')},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.richText},function(e,t,n){var r=n(14),o=n(15),i=n(16),a=n(18);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],_n=!0,a=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);_n=!0);}catch(e){a=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(a)throw o}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(17);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"metadata",(function(){return d})),n.d(r,"name",(function(){return U})),n.d(r,"settings",(function(){return W}));var o=n(4),i=n.n(o),a=n(0),c=n(5),l=n(7),s=(n(11),n(2));function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e,t){return t?Object(c.reduce)(e,(function(e,n){var r=Object(c.get)(t,["sizes",n.slug,"url"]),o=Object(c.get)(t,["media_details","sizes",n.slug,"source_url"]),a=Object(c.get)(t,["sizes",n.slug,"width"]),l=Object(c.get)(t,["media_details","sizes",n.slug,"width"]),s=Object(c.get)(t,["sizes",n.slug,"height"]),m=Object(c.get)(t,["media_details","sizes",n.slug,"height"]);return b(b({},e),{},i()({},n.slug,{url:r||o,width:a||l,height:s||m}))}),{}):{}},d=n(9),_=n(12),p=n.n(_),g=n(6),f=n.n(g),O=n(10),j=n(3),v=n(1),y=n(8),h=Object(a.createElement)(y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(y.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),k=Object(a.createElement)(y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(y.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),w=n(13),E=n.n(w),x=function(e){var t=e.id,n=e.src,r=e.allowedTypes,o=e.accept,i=e.onSelect,c=e.onSelectURL,l=e.onRemove;return Object(a.createElement)(v.BlockControls,null,Object(a.createElement)(v.MediaReplaceFlow,{mediaId:t,mediaURL:n,allowedTypes:r,accept:o,onSelect:i,onSelectURL:c}),!!n&&!!l&&Object(a.createElement)(j.ToolbarGroup,null,Object(a.createElement)(j.ToolbarItem,{as:j.Button,onClick:l},Object(s.__)("Release","snow-monkey-blocks"))))},C=function(e){var t=e.src,n=e.alt,r=e.id,o=e.style;return Object(a.createElement)("img",{src:t,alt:n,className:"wp-image-".concat(r),style:o})},N=function(e){var t=e.src,n=e.style;return Object(a.createElement)("video",{controls:!0,src:t,style:n})},R=Object(a.memo)((function(e){var t,n,r=e.id,o=e.src,i=e.alt,l=e.url,s=e.target,m=e.allowedTypes,b=e.accept,u=e.onSelect,d=e.onSelectURL,_=e.onRemove,p=e.mediaType,g=e.style,f=e.rel,O=e.linkClass;return"image"===p?(t=Object(a.createElement)(C,{src:o,alt:i,id:r,style:g}),n=f?Object(c.isEmpty)(f)?void 0:f:"_self"!==s&&s?"noopener noreferrer":void 0,l&&(t=Object(a.createElement)("span",{href:l,target:"_self"===s?void 0:s,rel:n,className:O},t))):"video"===p&&(t=Object(a.createElement)(N,{src:o,style:g})),Object(a.createElement)(a.Fragment,null,Object(a.createElement)(x,{id:r,src:o,allowedTypes:m,accept:b,onSelect:u,onSelectURL:d,onRemove:_}),t)}),(function(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];if(e[o]!==t[o])return!1}return!0})),T=function(e){var t=e.src,n=e.onSelect,r=e.onSelectURL,o=e.mediaType,i=e.allowedTypes,c=void 0===i?["image"]:i,l=!o&&t?"image":o,m=Object(s.__)("Media","snow-monkey-blocks");1===c.length&&("image"===c[0]?m=Object(s.__)("Image","snow-monkey-blocks"):"video"===c[0]&&(m=Object(s.__)("Video","snow-monkey-blocks")));var b=Object(a.useMemo)((function(){return c.map((function(e){return"".concat(e,"/*")})).join(",")}),[c]);return t?Object(a.createElement)(R,E()({},e,{accept:b,mediaType:l})):Object(a.createElement)(v.MediaPlaceholder,{icon:"format-image",labels:{title:m},onSelect:n,onSelectURL:r,accept:b,allowedTypes:c})},S=function(e){return"_self"!==e&&("_blank"===e||void 0)},z=function(e){var t=e.url,n=e.target,r=e.onChange;return Object(a.createElement)(v.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:t,opensInNewTab:S(n)},onChange:r})},B=function(e){var t=e.label,n=e.id,r=e.slug,o=e.onChange;if(!n)return null;var i=Object(O.useSelect)((function(e){var t=(0,e("core").getMedia)(n);if(!t)return{options:[]};var r=(0,e("core/block-editor").getSettings)().imageSizes,o=u(r,t);return{options:r.map((function(e){return!!o[e.slug]&&{value:e.slug,label:e.name}})).filter((function(e){return e}))}})).options;return 1>i.length?null:Object(a.createElement)(j.SelectControl,{label:t,value:r,options:i,onChange:o})};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=d.attributes,M=[{attributes:L({},I),save:function(e){var t,n=e.attributes,r=e.className,o=n.titleTagName,c=n.title,l=n.lede,s=n.summary,m=n.url,b=n.target,u=n.imageID,d=n.imageURL,_=n.imageAlt,p=n.imageWidth,g=n.imageHeight,O=n.btnLabel,j=n.btnBackgroundColor,y=n.btnTextColor,h=n.btnSize,k=n.btnBorderRadius,w=n.btnWrap,E=f()("c-row__col",r),x=f()("smb-items__item__btn","smb-btn",(t={},i()(t,"smb-btn--".concat(h),!!h),i()(t,"smb-btn--wrap",w),t)),C={color:y||void 0},N={backgroundColor:j||void 0,borderRadius:void 0!==k?"".concat(k,"px"):void 0};return Object(a.createElement)("div",{className:E},Object(a.createElement)("a",{className:"smb-items__item smb-items__item--block-link",href:m,target:"_self"===b?void 0:b,rel:"_self"===b?void 0:"noopener noreferrer"},!!d&&Object(a.createElement)("div",{className:"smb-items__item__figure"},Object(a.createElement)("img",{src:d,alt:_,width:!!p&&p,height:!!g&&g,className:"wp-image-".concat(u)})),"none"!==o&&Object(a.createElement)(v.RichText.Content,{tagName:o,className:"smb-items__item__title",value:c}),!v.RichText.isEmpty(l)&&Object(a.createElement)("div",{className:"smb-items__item__lede"},Object(a.createElement)(v.RichText.Content,{value:l})),!v.RichText.isEmpty(s)&&Object(a.createElement)("div",{className:"smb-items__item__content"},Object(a.createElement)(v.RichText.Content,{value:s})),!v.RichText.isEmpty(O)&&!!m&&Object(a.createElement)("div",{className:"smb-items__item__action"},Object(a.createElement)("span",{className:x,style:N},Object(a.createElement)("span",{className:"smb-btn__label",style:C},Object(a.createElement)(v.RichText.Content,{value:O}))))))}},{attributes:L({},I),save:function(e){var t,n=e.attributes,r=e.className,o=n.titleTagName,c=n.title,l=n.lede,s=n.summary,m=n.url,b=n.target,u=n.imageID,d=n.imageURL,_=n.imageAlt,p=n.imageWidth,g=n.imageHeight,O=n.btnLabel,j=n.btnBackgroundColor,y=n.btnTextColor,h=n.btnSize,k=n.btnBorderRadius,w=n.btnWrap,E=f()("c-row__col",r),x=f()("smb-items__item__btn","smb-btn",(t={},i()(t,"smb-btn--".concat(h),!!h),i()(t,"smb-btn--wrap",w),t)),C={color:y||void 0},N={backgroundColor:j||void 0,borderRadius:void 0!==k?"".concat(k,"px"):void 0};return Object(a.createElement)("div",{className:E},Object(a.createElement)("div",{className:"smb-items__item smb-items__item--block-link"},!!d&&Object(a.createElement)("div",{className:"smb-items__item__figure"},Object(a.createElement)("img",{src:d,alt:_,width:!!p&&p,height:!!g&&g,className:"wp-image-".concat(u)})),"none"!==o&&Object(a.createElement)(v.RichText.Content,{tagName:o,className:"smb-items__item__title",value:c}),!v.RichText.isEmpty(l)&&Object(a.createElement)("div",{className:"smb-items__item__lede"},Object(a.createElement)(v.RichText.Content,{value:l})),!v.RichText.isEmpty(s)&&Object(a.createElement)("div",{className:"smb-items__item__content"},Object(a.createElement)(v.RichText.Content,{value:s})),!v.RichText.isEmpty(O)&&!!m&&Object(a.createElement)("div",{className:"smb-items__item__action"},Object(a.createElement)("a",{className:x,href:m,style:N,target:"_self"===b?void 0:b,rel:"_self"===b?void 0:"noopener noreferrer"},Object(a.createElement)("span",{className:"smb-btn__label",style:C},Object(a.createElement)(v.RichText.Content,{value:O}))))))}},{attributes:L({},I),save:function(e){var t=e.attributes,n=e.className,r=t.titleTagName,o=t.title,i=t.lede,c=t.summary,l=t.btnLabel,s=t.url,m=t.target,b=t.btnBackgroundColor,u=t.btnTextColor,d=t.imageID,_=t.imageURL,p=t.imageAlt,g=t.imageWidth,O=t.imageHeight,j=f()("c-row__col",n),y={color:u||void 0},h={backgroundColor:b||void 0};return Object(a.createElement)("div",{className:j},Object(a.createElement)("a",{className:"smb-items__item",href:s,target:"_self"===m?void 0:m,rel:"_self"===m?void 0:"noopener noreferrer"},!!_&&Object(a.createElement)("div",{className:"smb-items__item__figure"},Object(a.createElement)("img",{src:_,alt:p,width:!!g&&g,height:!!O&&O,className:"wp-image-".concat(d)})),"none"!==r&&Object(a.createElement)(v.RichText.Content,{tagName:r,className:"smb-items__item__title",value:o}),!v.RichText.isEmpty(i)&&Object(a.createElement)("div",{className:"smb-items__item__lede"},Object(a.createElement)(v.RichText.Content,{value:i})),!v.RichText.isEmpty(c)&&Object(a.createElement)("div",{className:"smb-items__item__content"},Object(a.createElement)(v.RichText.Content,{value:c})),!v.RichText.isEmpty(l)&&!!s&&Object(a.createElement)("div",{className:"smb-items__item__action"},Object(a.createElement)("span",{className:"smb-items__item__btn smb-btn",style:h},Object(a.createElement)("span",{className:"smb-btn__label",style:y},Object(a.createElement)(v.RichText.Content,{value:l}))))))}}],H={to:[{type:"block",blocks:["snow-monkey-blocks/items--item--standard"],transform:function(e){return Object(l.createBlock)("snow-monkey-blocks/items--item--standard",e)}},{type:"block",blocks:["snow-monkey-blocks/items--banner"],transform:function(e){return Object(l.createBlock)("snow-monkey-blocks/items--banner",e)}},{type:"block",blocks:["snow-monkey-blocks/items--item--free"],transform:function(e){return Object(l.createBlock)("snow-monkey-blocks/items--item--free",{},[Object(l.createBlock)("core/paragraph",{content:e.summary})])}}]},U=d.name,W={icon:{foreground:"#cd162c",src:"screenoptions"},edit:function(e){var t,n=e.attributes,r=e.setAttributes,o=e.isSelected,l=e.className,m=n.titleTagName,b=n.title,d=n.lede,_=n.summary,g=n.url,y=n.target,w=n.imageID,E=n.imageURL,x=n.imageAlt,C=n.imageWidth,N=n.imageHeight,R=n.imageSizeSlug,S=n.btnLabel,P=n.btnBackgroundColor,L=n.btnTextColor,I=n.btnSize,M=n.btnBorderRadius,H=n.btnWrap,U=Object(a.useState)(!1),W=p()(U,2),D=W[0],A=W[1],F=!!g,V=F&&o,G=Object(O.useSelect)((function(e){if(!w)return{resizedImages:{}};var t=(0,e("core").getMedia)(w);if(!t)return{resizedImages:{}};var n=(0,e("core/block-editor").getSettings)().imageSizes;return{resizedImages:u(n,t)}})).resizedImages,J=["div","h2","h3","none"],$=f()("c-row__col",l),q=f()("smb-items__item__btn","smb-btn",(t={},i()(t,"smb-btn--".concat(I),!!I),i()(t,"smb-btn--wrap",H),t)),K={color:L||void 0},Q={backgroundColor:P||void 0,borderRadius:void 0!==M?"".concat(M,"px"):void 0},X=Object(a.useRef)(),Y=Object(v.useBlockProps)({className:$,ref:X}),Z=function(e){var t=e.url,n=e.opensInNewTab;return r({url:t,target:n?"_blank":"_self"})};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(v.InspectorControls,null,Object(a.createElement)(j.PanelBody,{title:Object(s.__)("Block Settings","snow-monkey-blocks")},Object(a.createElement)(j.BaseControl,{label:Object(s.__)("Title Tag","snow-monkey-blocks"),id:"snow-monkey-blocks/items--item--block-link/title-tag-name"},Object(a.createElement)("div",{className:"smb-list-icon-selector"},Object(c.times)(J.length,(function(e){var t=m===J[e];return Object(a.createElement)(j.Button,{isPrimary:t,isSecondary:!t,onClick:function(){r({titleTagName:J[e]})},key:e},J[e])})))),Object(a.createElement)(B,{label:Object(s.__)("Images size","snow-monkey-blocks"),id:w,slug:R,onChange:function(e){var t=E;G[e]&&G[e].url&&(t=G[e].url);var n=C;G[e]&&G[e].width&&(n=G[e].width);var o=N;G[e]&&G[e].height&&(o=G[e].height),r({imageURL:t,imageWidth:n,imageHeight:o,imageSizeSlug:e})}})),Object(a.createElement)(j.PanelBody,{title:Object(s.__)("Button Settings","snow-monkey-blocks")},Object(a.createElement)(j.SelectControl,{label:Object(s.__)("Button size","snow-monkey-blocks"),value:I,onChange:function(e){return r({btnSize:e})},options:[{value:"",label:Object(s.__)("Normal size","snow-monkey-blocks")},{value:"little-wider",label:Object(s.__)("Litle wider","snow-monkey-blocks")},{value:"wider",label:Object(s.__)("Wider","snow-monkey-blocks")},{value:"more-wider",label:Object(s.__)("More wider","snow-monkey-blocks")},{value:"full",label:Object(s.__)("Full size","snow-monkey-blocks")}]}),Object(a.createElement)(j.RangeControl,{label:Object(s.__)("Border radius","snow-monkey-blocks"),value:M,onChange:function(e){return r({btnBorderRadius:e})},min:"0",max:"50",initialPosition:"6",allowReset:!0}),Object(a.createElement)(j.CheckboxControl,{label:Object(s.__)("Wrap","snow-monkey-blocks"),checked:H,onChange:function(e){return r({btnWrap:e})}}),Object(a.createElement)(v.__experimentalColorGradientControl,{label:Object(s.__)("Background Color","snow-monkey-blocks"),colorValue:P,onColorChange:function(e){return r({btnBackgroundColor:e})}}),Object(a.createElement)(v.__experimentalColorGradientControl,{label:Object(s.__)("Text Color","snow-monkey-blocks"),colorValue:L,onColorChange:function(e){return r({btnTextColor:e})}}),Object(a.createElement)(v.ContrastChecker,{backgroundColor:P,textColor:L}))),Object(a.createElement)("div",Y,Object(a.createElement)("div",{className:"smb-items__item smb-items__item--block-link"},(!!E||o)&&Object(a.createElement)("div",{className:"smb-items__item__figure"},Object(a.createElement)(T,{src:E,id:w,alt:x,onSelect:function(e){var t=e.sizes&&e.sizes[R]?e.sizes[R].url:e.url,n=e.sizes&&e.sizes[R]?e.sizes[R].width:e.width,o=e.sizes&&e.sizes[R]?e.sizes[R].height:e.height;r({imageURL:t,imageID:e.id,imageAlt:e.alt,imageWidth:n,imageHeight:o})},onSelectURL:function(e){e!==E&&r({imageURL:e,imageID:0,imageSizeSlug:"large"})},onRemove:function(){return r({imageURL:"",imageAlt:"",imageWidth:"",imageHeight:"",imageID:0})},isSelected:o})),Object(a.createElement)("div",{className:"smb-items__item__body"},"none"!==m&&Object(a.createElement)(v.RichText,{tagName:m,className:"smb-items__item__title",placeholder:Object(s.__)("Write title…","snow-monkey-blocks"),value:b,onChange:function(e){return r({title:e})},keepPlaceholderOnFocus:!0}),(!v.RichText.isEmpty(d)||o)&&Object(a.createElement)(v.RichText,{className:"smb-items__item__lede",placeholder:Object(s.__)("Write lede…","snow-monkey-blocks"),value:d,onChange:function(e){return r({lede:e})},keepPlaceholderOnFocus:!0}),(!v.RichText.isEmpty(_)||o)&&Object(a.createElement)(v.RichText,{className:"smb-items__item__content",placeholder:Object(s.__)("Write content…","snow-monkey-blocks"),value:_,onChange:function(e){return r({summary:e})},keepPlaceholderOnFocus:!0}),(!v.RichText.isEmpty(S)||o)&&Object(a.createElement)("div",{className:"smb-items__item__action"},Object(a.createElement)("span",{className:q,style:Q},Object(a.createElement)(v.RichText,{className:"smb-btn__label",style:K,value:S,keepPlaceholderOnFocus:!0,placeholder:Object(s.__)("Button","snow-monkey-blocks"),onChange:function(e){return r({btnLabel:e})},withoutInteractiveFormatting:!0}),(D||V)&&Object(a.createElement)(j.Popover,{position:"bottom center",anchorRef:X.current,onClose:function(){return A(!1)}},Object(a.createElement)(z,{url:g,target:y,onChange:Z}))))))),Object(a.createElement)(v.BlockControls,null,Object(a.createElement)(j.ToolbarGroup,null,!F&&Object(a.createElement)(j.ToolbarButton,{icon:h,label:Object(s.__)("Link","snow-monkey-blocks"),"aria-expanded":D,onClick:function(){return A(!D)}}),V&&Object(a.createElement)(j.ToolbarButton,{isPressed:!0,icon:k,label:Object(s.__)("Unlink","snow-monkey-blocks"),onClick:function(){return Z("")}}))))},save:function(e){var t,n=e.attributes,r=e.className,o=n.titleTagName,c=n.title,l=n.lede,s=n.summary,m=n.url,b=n.target,u=n.imageID,d=n.imageURL,_=n.imageAlt,p=n.imageWidth,g=n.imageHeight,O=n.btnLabel,j=n.btnBackgroundColor,y=n.btnTextColor,h=n.btnSize,k=n.btnBorderRadius,w=n.btnWrap,E=f()("c-row__col",r),x=f()("smb-items__item__btn","smb-btn",(t={},i()(t,"smb-btn--".concat(h),!!h),i()(t,"smb-btn--wrap",w),t)),C={color:y||void 0},N={backgroundColor:j||void 0,borderRadius:void 0!==k?"".concat(k,"px"):void 0};return Object(a.createElement)("div",v.useBlockProps.save({className:E}),Object(a.createElement)("a",{className:"smb-items__item smb-items__item--block-link",href:m,target:"_self"===b?void 0:b,rel:"_self"===b?void 0:"noopener noreferrer"},!!d&&Object(a.createElement)("div",{className:"smb-items__item__figure"},Object(a.createElement)("img",{src:d,alt:_,width:!!p&&p,height:!!g&&g,className:"wp-image-".concat(u)})),Object(a.createElement)("div",{className:"smb-items__item__body"},"none"!==o&&Object(a.createElement)(v.RichText.Content,{tagName:o,className:"smb-items__item__title",value:c}),!v.RichText.isEmpty(l)&&Object(a.createElement)("div",{className:"smb-items__item__lede"},Object(a.createElement)(v.RichText.Content,{value:l})),!v.RichText.isEmpty(s)&&Object(a.createElement)("div",{className:"smb-items__item__content"},Object(a.createElement)(v.RichText.Content,{value:s})),!v.RichText.isEmpty(O)&&!!m&&Object(a.createElement)("div",{className:"smb-items__item__action"},Object(a.createElement)("span",{className:x,href:m,style:N,target:"_self"===b?void 0:b,rel:"_self"===b?void 0:"noopener noreferrer"},Object(a.createElement)("span",{className:"smb-btn__label",style:C},Object(a.createElement)(v.RichText.Content,{value:O})))))))},deprecated:M,transforms:H};!function(e){if(e){var t=e.metadata,n=e.settings,r=e.name;t&&(t.title&&(t.title=Object(s.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=Object(s.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=Object(s.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords),Object(l.unstable__bootstrapServerSideBlockDefinitions)(i()({},r,t))),Object(l.registerBlockType)(r,n)}}(r)}]);