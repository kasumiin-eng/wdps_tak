!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.lodash},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var c=r.apply(null,a);c&&e.push(c)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/testimonial","title":"Testimonial","description":"Let\'s arrange the voice of the customer.","category":"smb","attributes":{"md":{"type":"number","default":2},"lg":{"type":"number","default":2}},"example":{"innerBlocks":[{"name":"snow-monkey-blocks/testimonial--item","attributes":{"avatarID":1,"name":"Lorem","lede":"ipsum","content":"dolor sit amet"}},{"name":"snow-monkey-blocks/testimonial--item","attributes":{"avatarID":1,"name":"consectetur","lede":"adipiscing","content":"sed do eiusmod tempor"}}]}}')},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.richText},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"metadata",(function(){return u})),n.d(a,"name",(function(){return E})),n.d(a,"settings",(function(){return h}));var r=n(6),o=n.n(r),c=n(0),i=n(1),s=n(8),m=(n(9),n(4)),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==n&&e>n&&(e=n),e},u=n(7),b=n(10),d=n.n(b),p=n(5),_=n.n(p),f=n(3),v=n(2),O=function(e){var t=e.desktop,n=e.tablet,a=e.mobile,r=[];return t&&r.push({name:"desktop",title:Object(c.createElement)(f.Dashicon,{icon:"desktop"})}),n&&r.push({name:"tablet",title:Object(c.createElement)(f.Dashicon,{icon:"tablet"})}),a&&r.push({name:"mobile",title:Object(c.createElement)(f.Dashicon,{icon:"smartphone"})}),Object(c.createElement)(f.TabPanel,{className:"smb-inspector-tabs",tabs:r},(function(e){if(e.name){if("desktop"===e.name)return t();if("tablet"===e.name)return n();if("mobile"===e.name)return a()}}))},j=["snow-monkey-blocks/testimonial--item"],g=[["snow-monkey-blocks/testimonial--item"]];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var w=[{attributes:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u.attributes),save:function(e){var t=e.className,n=_()("smb-testimonial",t);return Object(c.createElement)("div",{className:n},Object(c.createElement)("div",{className:"smb-testimonial__body"},Object(c.createElement)("div",{className:"c-row c-row--margin","data-columns":"1","data-md-columns":"2"},Object(c.createElement)(v.InnerBlocks.Content,null))))}},{save:function(){return Object(c.createElement)("div",{className:"smb-testimonial"},Object(c.createElement)("div",{className:"smb-testimonial__body"},Object(c.createElement)("div",{className:"c-row c-row--margin","data-columns":"1","data-md-columns":"2"},Object(c.createElement)(v.InnerBlocks.Content,null))))}},{attributes:{items:{type:"array",default:[],selector:".smb-testimonial__item",source:"query",query:{avatarID:{type:"number",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"data-image-id",default:0},avatarURL:{type:"string",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"src",default:"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"},name:{source:"html",selector:".smb-testimonial__item__name"},lede:{source:"html",selector:".smb-testimonial__item__lede"},content:{source:"html",selector:".smb-testimonial__item__content"}}},columns:{type:"number",default:1}},migrate:function(e){var t;return[{},(t=void 0===e.items?0:e.items.length,Object(i.times)(t,(function(t){var n=Object(i.get)(e.items,[t,"avatarID"],0),a=Object(i.get)(e.items,[t,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),r=Object(i.get)(e.items,[t,"name"],""),o=Object(i.get)(e.items,[t,"lede"],""),c=Object(i.get)(e.items,[t,"content"],"");return Object(s.createBlock)("snow-monkey-blocks/testimonial--item",{avatarID:Number(n),avatarURL:a,name:r,lede:o,content:c})})))]},save:function(e){var t=e.attributes,n=t.items,a=void 0===t.items?0:t.items.length;return Object(c.createElement)("div",{className:"smb-testimonial"},Object(c.createElement)("div",{className:"smb-testimonial__body"},Object(c.createElement)("div",{className:"c-row c-row--margin"},Object(i.times)(a,(function(e){var t=Object(i.get)(n,[e,"avatarID"],0),a=Object(i.get)(n,[e,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),r=Object(i.get)(n,[e,"name"],""),o=Object(i.get)(n,[e,"lede"],""),s=Object(i.get)(n,[e,"content"],"");return Object(c.createElement)("div",{className:"c-row__col c-row__col--1-1 c-row__col--md-1-2"},Object(c.createElement)("div",{className:"smb-testimonial__item"},Object(c.createElement)("div",{className:"smb-testimonial__item__figure"},Object(c.createElement)("img",{src:a,alt:"",className:"wp-image-".concat(t),"data-image-id":t})),Object(c.createElement)("div",{className:"smb-testimonial__item__body"},Object(c.createElement)("div",{className:"smb-testimonial__item__content"},Object(c.createElement)(v.RichText.Content,{value:s})),Object(c.createElement)("div",{className:"smb-testimonial__item__name"},Object(c.createElement)(v.RichText.Content,{value:r})),!v.RichText.isEmpty(o)&&Object(c.createElement)("div",{className:"smb-testimonial__item__lede"},Object(c.createElement)(v.RichText.Content,{value:o})))))})))))}},{attributes:{items:{type:"array",default:[],selector:".smb-testimonial__item",source:"query",query:{avatarID:{type:"number",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"data-image-id",default:0},avatarURL:{type:"string",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"src",default:"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"},name:{source:"html",selector:".smb-testimonial__item__name"},lede:{source:"html",selector:".smb-testimonial__item__lede"},content:{source:"html",selector:".smb-testimonial__item__content"}}},columns:{type:"number",default:1}},save:function(e){var t=e.attributes,n=t.items,a=t.columns;return Object(c.createElement)("div",{className:"smb-testimonial"},Object(c.createElement)("div",{className:"smb-testimonial__body"},Object(c.createElement)("div",{className:"c-row c-row--margin"},Object(i.times)(a,(function(e){var t=Object(i.get)(n,[e,"avatarID"],0),a=Object(i.get)(n,[e,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),r=Object(i.get)(n,[e,"name"],""),o=Object(i.get)(n,[e,"lede"],""),s=Object(i.get)(n,[e,"content"],"");return Object(c.createElement)("div",{className:"c-row__col c-row__col--1-1 c-row__col--md-1-2"},Object(c.createElement)("div",{className:"smb-testimonial__item"},Object(c.createElement)("div",{className:"smb-testimonial__item__figure"},Object(c.createElement)("img",{src:a,alt:"","data-image-id":t})),Object(c.createElement)("div",{className:"smb-testimonial__item__body"},Object(c.createElement)("div",{className:"smb-testimonial__item__content"},Object(c.createElement)(v.RichText.Content,{value:s})),Object(c.createElement)("div",{className:"smb-testimonial__item__name"},Object(c.createElement)(v.RichText.Content,{value:r})),!v.RichText.isEmpty(o)&&Object(c.createElement)("div",{className:"smb-testimonial__item__lede"},Object(c.createElement)(v.RichText.Content,{value:o})))))})))))}}],E=u.name,h={icon:{foreground:"#cd162c",src:"admin-comments"},edit:function(e){var t=e.attributes,n=e.setAttributes,a=e.className,r=t.md,o=t.lg,i=_()("smb-testimonial",a),s=Object(v.useBlockProps)({className:i}),u=Object(v.__experimentalUseInnerBlocksProps)({className:["c-row","c-row--margin"]},{allowedBlocks:j,template:g,templateLock:!1,renderAppender:v.InnerBlocks.ButtonBlockAppender,orientation:"horizontal"}),b=function(e){return n({lg:l(e,1,4)})},p=function(e){return n({md:l(e,1,2)})};return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(v.InspectorControls,null,Object(c.createElement)(f.PanelBody,{title:Object(m.__)("Block Settings","snow-monkey-blocks")},Object(c.createElement)(O,{desktop:function(){return Object(c.createElement)(f.RangeControl,{label:Object(m.__)("Columns per row (Large window)","snow-monkey-blocks"),value:o,onChange:b,min:"1",max:"4"})},tablet:function(){return Object(c.createElement)(f.RangeControl,{label:Object(m.__)("Columns per row (Medium window)","snow-monkey-blocks"),value:r,onChange:p,min:"1",max:"2"})}}))),Object(c.createElement)("div",s,Object(c.createElement)("div",{className:"smb-testimonial__body"},Object(c.createElement)("div",d()({},u,{"data-columns":"1","data-md-columns":r,"data-lg-columns":o})))))},save:function(e){var t=e.attributes,n=e.className,a=t.md,r=t.lg,o=_()("smb-testimonial",n);return Object(c.createElement)("div",v.useBlockProps.save({className:o}),Object(c.createElement)("div",{className:"smb-testimonial__body"},Object(c.createElement)("div",{className:"c-row c-row--margin","data-columns":"1","data-md-columns":a,"data-lg-columns":r},Object(c.createElement)(v.InnerBlocks.Content,null))))},deprecated:w};!function(e){if(e){var t=e.metadata,n=e.settings,a=e.name;t&&(t.title&&(t.title=Object(m.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=Object(m.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=Object(m.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords),Object(s.unstable__bootstrapServerSideBlockDefinitions)(o()({},a,t))),Object(s.registerBlockType)(a,n)}}(a)}]);