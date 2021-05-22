!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=12)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t,o){var n;!function(){"use strict";var o={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=c.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var r in n)o.call(n,r)&&n[r]&&e.push(r);else e.push(n.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.lodash},function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/section-side-heading","title":"Section (Side heading)","description":"Contents can be separated by appropriate margins.","category":"smb-section","attributes":{"wrapperTagName":{"type":"string","default":"div"},"titleTagName":{"type":"string","default":"h2"},"title":{"type":"string","source":"html","selector":".smb-section__title","default":""},"subtitle":{"type":"string","source":"html","selector":".smb-section__subtitle","default":""},"lede":{"type":"string","source":"html","selector":".smb-section__lede","default":""},"backgroundHorizontalPosition":{"type":"number","default":0},"backgroundVerticalPosition":{"type":"number","default":0},"isBackgroundNoOver":{"type":"boolean","default":false},"backgroundColor":{"type":"string"},"backgroundGradientColor":{"type":"string"},"backgroundTexture":{"type":"string"},"backgroundTextureOpacity":{"type":"number","default":1},"fixedBackgroundColor":{"type":"string"},"fixedBackgroundGradientColor":{"type":"string"},"fixedBackgroundTexture":{"type":"string"},"fixedBackgroundTextureOpacity":{"type":"number","default":1},"textColor":{"type":"string"},"isSlim":{"type":"boolean","default":false},"headingPosition":{"type":"string","default":"left"},"headingColumnSize":{"type":"string","default":33},"topDividerType":{"type":"string","default":"tilt"},"topDividerLevel":{"type":"number","default":0},"topDividerColor":{"type":"string","default":"#fff"},"topDividerVerticalPosition":{"type":"number","default":0},"bottomDividerType":{"type":"string","default":"tilt"},"bottomDividerLevel":{"type":"number","default":0},"bottomDividerColor":{"type":"string","default":"#fff"},"bottomDividerVerticalPosition":{"type":"number","default":0}},"supports":{"align":["wide","full"],"anchor":true},"example":{"attributes":{"title":"Lorem"},"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}}]}}')},function(e,t){e.exports=window.wp.blocks},function(e,t,o){"use strict";var n=function(e){return parseInt(e,16)};e.exports=function(e,t){var o,c;return function(e,t){var o,n=e.r,c=e.g,i=e.b,a=e.a,r=(o=t,!isNaN(parseFloat(o))&&isFinite(o)?t:a);return"rgba(".concat(n,", ").concat(c,", ").concat(i,", ").concat(r,")")}(function(e){var t=e.g,o=e.b,c=e.a;return{r:n(e.r),g:n(t),b:n(o),a:+(n(c)/255).toFixed(2)}}({r:(c=3===(o=function(e){return"#"===e.charAt(0)?e.slice(1):e}(e)).length||4===o.length)?"".concat(o.slice(0,1)).concat(o.slice(0,1)):o.slice(0,2),g:c?"".concat(o.slice(1,2)).concat(o.slice(1,2)):o.slice(2,4),b:c?"".concat(o.slice(2,3)).concat(o.slice(2,3)):o.slice(4,6),a:(c?"".concat(o.slice(3,4)).concat(o.slice(3,4)):o.slice(6,8))||"ff"}),t)}},function(e,t){e.exports=window.wp.richText},function(e,t){e.exports=window.wp.data},function(e,t,o){"use strict";o.r(t);var n={};o.r(n),o.d(n,"metadata",(function(){return u})),o.d(n,"name",(function(){return C})),o.d(n,"settings",(function(){return E}));var c=o(6),i=o.n(c),a=o(0),r=o(5),l=o(8),s=(o(10),o(1)),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==o&&e>o&&(e=o),e},b=function(e){var t="1-3",o="2-3";return 75===parseInt(e)?(t="1-4",o="3-4"):66===parseInt(e)?(t="1-3",o="2-3"):50===parseInt(e)?(t="1-2",o="1-2"):33===parseInt(e)?(t="2-3",o="1-3"):25===parseInt(e)&&(t="3-4",o="1-4"),{textColumnWidth:t,mediaColumnWidth:o,imageColumnWidth:o}},m=function(e,t,o){if(o=o||"#fff",0!==t)return Object(a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"},function(){switch(e){case"tilt":return 0>t?Object(a.createElement)("path",{d:"m100,".concat(100+t," L100,100 L0,100 z"),strokeWidth:"0",fill:o}):Object(a.createElement)("path",{d:"m0,".concat(100-t," L100,100 L0,100 z"),strokeWidth:"0",fill:o});case"curve":return 0>t?Object(a.createElement)("path",{d:"m0,100 L100,100 Q50,".concat(2*t+100,",0,100 z"),strokeWidth:"0",fill:o}):Object(a.createElement)("path",{d:"m0,".concat(100-t," q50,").concat(2*t,",100,0 V100 L0,100 z"),strokeWidth:"0",fill:o});case"wave":return 0>t?Object(a.createElement)("path",{d:"m0,".concat(100+t/2," q20,").concat(t,",40,0 t40,0 t40,0 V100 L0,100 z"),strokeWidth:"0",fill:o}):Object(a.createElement)("path",{d:"m0,".concat(100-t/2," q20,").concat(t,",40,0 t40,0 t40,0 V100 L0,100 z"),strokeWidth:"0",fill:o});case"triangle":return t=Math.abs(t),Object(a.createElement)("path",{d:"m".concat((100-t)/2,",100 l").concat(t,",0 l").concat(-1*t/2,",").concat(-1*t," z"),strokeWidth:"0",fill:o})}}())},u=o(7),_=o(3),g=o.n(_),p=o(2),v=o(4),k=o(11),O=o(9),y=o.n(O);function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?h(Object(o),!0).forEach((function(t){i()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var j=u.attributes,w=[{attributes:f({},j),supports:{align:["wide","full"],anchor:!0},save:function(e){var t=e.attributes,o=e.className,n=t.wrapperTagName,c=t.titleTagName,i=t.title,r=t.subtitle,l=t.lede,s=t.backgroundColor,d=t.backgroundGradientColor,u=t.textColor,_=t.headingPosition,v=t.headingColumnSize,k=t.isSlim,O=t.topDividerType,y=t.topDividerLevel,h=t.topDividerColor,f=t.bottomDividerType,j=t.bottomDividerLevel,w=t.bottomDividerColor,C=b(v),E=C.textColumnWidth,x=C.imageColumnWidth,N=n,T=g()("smb-section","smb-section-side-heading",o),B=g()("smb-section__divider","smb-section__divider--top","smb-section__divider--".concat(O)),D=g()("smb-section__divider","smb-section__divider--bottom","smb-section__divider--".concat(f)),P=g()("c-container",{"u-slim-width":!!k}),S=g()("c-row","c-row--md-margin",{"c-row--reverse":"right"===_}),R=g()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(x)),L=g()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(E)),M={};u&&(M.color=u),(s||d)&&(M.backgroundColor=s,M.backgroundImage=d);var W={paddingTop:Math.abs(y),paddingBottom:Math.abs(j)};return Object(a.createElement)(N,p.useBlockProps.save({className:T,style:M}),!!y&&Object(a.createElement)("div",{className:B},m(O,y,h)),!!j&&Object(a.createElement)("div",{className:D},m(f,j,w)),Object(a.createElement)("div",{className:"smb-section__inner",style:W},Object(a.createElement)("div",{className:P},Object(a.createElement)("div",{className:S},Object(a.createElement)("div",{className:R},!p.RichText.isEmpty(i)&&!p.RichText.isEmpty(r)&&Object(a.createElement)(p.RichText.Content,{tagName:"div",className:"smb-section__subtitle smb-section-side-heading__subtitle",value:r}),!p.RichText.isEmpty(i)&&Object(a.createElement)(p.RichText.Content,{tagName:c,className:"smb-section__title smb-section-side-heading__title",value:i}),!p.RichText.isEmpty(i)&&!p.RichText.isEmpty(l)&&Object(a.createElement)(p.RichText.Content,{tagName:"div",className:"smb-section__lede smb-section-side-heading__lede",value:l})),Object(a.createElement)("div",{className:L},Object(a.createElement)("div",{className:"smb-section__body smb-section-side-heading__body"},Object(a.createElement)(p.InnerBlocks.Content,null)))))))}},{attributes:f(f({},j),{},{backgroundColor2:{type:"string"},backgroundColorAngle:{type:"number",default:0}}),migrate:function(e){var t;return e.backgroundColor2&&(t="linear-gradient(".concat(e.backgroundColorAngle,"deg, ").concat(y()(e.backgroundColor)," 0%, ").concat(y()(e.backgroundColor2)," 100%)"),e.backgroundColor=void 0),f(f({},e),{},{backgroundGradientColor:t})},supports:{align:["wide","full"],anchor:!0},save:function(e){var t=e.attributes,o=e.className,n=t.wrapperTagName,c=t.titleTagName,i=t.title,r=t.subtitle,l=t.lede,s=t.backgroundColor,d=t.backgroundColor2,u=t.backgroundColorAngle,_=t.textColor,v=t.headingPosition,k=t.headingColumnSize,O=t.isSlim,y=t.topDividerType,h=t.topDividerLevel,f=t.topDividerColor,j=t.bottomDividerType,w=t.bottomDividerLevel,C=t.bottomDividerColor,E=b(k),x=E.textColumnWidth,N=E.imageColumnWidth,T=n,B=g()("smb-section","smb-section-side-heading",o),D=g()("smb-section__divider","smb-section__divider--top","smb-section__divider--".concat(y)),P=g()("smb-section__divider","smb-section__divider--bottom","smb-section__divider--".concat(j)),S=g()("c-container",{"u-slim-width":!!O}),R=g()("c-row","c-row--md-margin",{"c-row--reverse":"right"===v}),L=g()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(N)),M=g()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(x)),W={};_&&(W.color=_),s&&(W.backgroundColor=s,d&&(W.backgroundImage="linear-gradient(".concat(u,"deg, ").concat(s," 0%, ").concat(d," 100%)")));var I={paddingTop:Math.abs(h),paddingBottom:Math.abs(w)};return Object(a.createElement)(T,p.useBlockProps.save({className:B,style:W}),!!h&&Object(a.createElement)("div",{className:D},m(y,h,f)),!!w&&Object(a.createElement)("div",{className:P},m(j,w,C)),Object(a.createElement)("div",{className:"smb-section__inner",style:I},Object(a.createElement)("div",{className:S},Object(a.createElement)("div",{className:R},Object(a.createElement)("div",{className:L},!p.RichText.isEmpty(i)&&!p.RichText.isEmpty(r)&&Object(a.createElement)(p.RichText.Content,{tagName:"div",className:"smb-section__subtitle smb-section-side-heading__subtitle",value:r}),!p.RichText.isEmpty(i)&&Object(a.createElement)(p.RichText.Content,{tagName:c,className:"smb-section__title smb-section-side-heading__title",value:i}),!p.RichText.isEmpty(i)&&!p.RichText.isEmpty(l)&&Object(a.createElement)(p.RichText.Content,{tagName:"div",className:"smb-section__lede smb-section-side-heading__lede",value:l})),Object(a.createElement)("div",{className:M},Object(a.createElement)("div",{className:"smb-section__body smb-section-side-heading__body"},Object(a.createElement)(p.InnerBlocks.Content,null)))))))}},{attributes:f(f({},j),{},{backgroundColor2:{type:"string"},backgroundColorAngle:{type:"number",default:0}}),supports:{align:["wide","full"],anchor:!0},save:function(e){var t=e.attributes,o=e.className,n=t.wrapperTagName,c=t.titleTagName,i=t.title,r=t.backgroundColor,l=t.backgroundColor2,s=t.backgroundColorAngle,d=t.textColor,u=t.headingPosition,_=t.headingColumnSize,v=t.isSlim,k=t.topDividerType,O=t.topDividerLevel,y=t.topDividerColor,h=t.bottomDividerType,f=t.bottomDividerLevel,j=t.bottomDividerColor,w=b(_),C=w.textColumnWidth,E=w.imageColumnWidth,x=n,N=g()("smb-section","smb-section-side-heading",o),T=g()("smb-section__divider","smb-section__divider--top","smb-section__divider--".concat(k)),B=g()("smb-section__divider","smb-section__divider--bottom","smb-section__divider--".concat(h)),D=g()("c-container",{"u-slim-width":!!v}),P=g()("c-row","c-row--md-margin",{"c-row--reverse":"right"===u}),S=g()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(E)),R=g()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(C)),L={};d&&(L.color=d),r&&(L.backgroundColor=r,l&&(L.backgroundImage="linear-gradient(".concat(s,"deg, ").concat(r," 0%, ").concat(l," 100%)")));var M={paddingTop:Math.abs(O),paddingBottom:Math.abs(f)};return Object(a.createElement)(x,{className:N,style:L},!!O&&Object(a.createElement)("div",{className:T},m(k,O,y)),!!f&&Object(a.createElement)("div",{className:B},m(h,f,j)),Object(a.createElement)("div",{className:"smb-section__inner",style:M},Object(a.createElement)("div",{className:D},Object(a.createElement)("div",{className:P},Object(a.createElement)("div",{className:S},!p.RichText.isEmpty(i)&&Object(a.createElement)(p.RichText.Content,{tagName:c,className:"smb-section__title",value:i})),Object(a.createElement)("div",{className:R},Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(p.InnerBlocks.Content,null)))))))}}],C=u.name,E={icon:{foreground:"#cd162c",src:"text"},edit:function(e){var t=e.attributes,o=e.setAttributes,n=e.isSelected,c=e.className,i=e.clientId,l=t.wrapperTagName,u=t.titleTagName,_=t.title,O=t.subtitle,y=t.lede,h=t.backgroundHorizontalPosition,f=t.backgroundVerticalPosition,j=t.isBackgroundNoOver,w=t.backgroundColor,C=t.backgroundGradientColor,E=t.backgroundTexture,x=t.backgroundTextureOpacity,N=t.fixedBackgroundColor,T=t.fixedBackgroundGradientColor,B=t.fixedBackgroundTexture,D=t.fixedBackgroundTextureOpacity,P=t.textColor,S=t.headingPosition,R=t.headingColumnSize,L=t.isSlim,M=t.topDividerType,W=t.topDividerLevel,I=t.topDividerColor,V=t.topDividerVerticalPosition,z=t.bottomDividerType,G=t.bottomDividerLevel,A=t.bottomDividerColor,F=t.bottomDividerVerticalPosition,H=Object(k.useSelect)((function(e){var t=(0,e("core/block-editor").getBlock)(i);return!(!t||!t.innerBlocks.length)}),[i]),U=b(R),q=U.textColumnWidth,J=U.imageColumnWidth,Q=["div","section","aside"],K=["h1","h2","h3","none"],X=l,Y=g()("smb-section","smb-section-side-heading",c),Z=g()("smb-section__divider","smb-section__divider--top","smb-section__divider--".concat(M)),$=g()("smb-section__divider","smb-section__divider--bottom","smb-section__divider--".concat(z)),ee=g()("c-container",{"u-slim-width":!!L}),te=g()("c-row","c-row--md-margin",{"c-row--reverse":"right"===S}),oe=g()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(J)),ne=g()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(q)),ce=w||C,ie=N||T,ae=E,re=B,le=!!W,se=!!G,de=!p.RichText.isEmpty(_)&&"none"!==u,be=!p.RichText.isEmpty(O),me=!p.RichText.isEmpty(y),ue={};P&&(ue.color=P);var _e={paddingTop:Math.abs(W),paddingBottom:Math.abs(G),backgroundColor:N,backgroundImage:T},ge={backgroundImage:re?"url(".concat(smb.pluginUrl,"/dist/block/section/img/").concat(B,".png)"):void 0,opacity:D||void 0},pe={};V&&(pe.top="".concat(V,"%")),F&&(pe.bottom="".concat(F,"%"));var ve={};ce&&(ve.backgroundColor=w,ve.backgroundImage=C,j?(0<h?ve.left="".concat(Math.abs(h),"%"):0>h&&(ve.right="".concat(Math.abs(h),"%")),0<f?ve.top="".concat(Math.abs(f),"%"):0>f&&(ve.bottom="".concat(Math.abs(f),"%"))):(h||f)&&(ve.transform="translate(".concat(h||0,"%, ").concat(f||0,"%)")));var ke={backgroundImage:ae?"url(".concat(smb.pluginUrl,"/dist/block/section/img/").concat(E,".png)"):void 0,opacity:x||void 0},Oe=Object(p.useBlockProps)({className:Y,style:ue}),ye=Object(p.__experimentalUseInnerBlocksProps)({className:["smb-section__body","smb-section-side-heading__body"]},{renderAppender:H?void 0:p.InnerBlocks.ButtonBlockAppender}),he=[{value:void 0,label:Object(s.__)("None","snow-monkey-blocks")},{value:"stripe",label:Object(s.__)("Stripe","snow-monkey-blocks")},{value:"noise",label:Object(s.__)("Noise","snow-monkey-blocks")},{value:"dots",label:Object(s.__)("Dots","snow-monkey-blocks")},{value:"dots2",label:Object(s.__)("Dots 2","snow-monkey-blocks")}];return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(p.InspectorControls,null,Object(a.createElement)(v.PanelBody,{title:Object(s.__)("Block Settings","snow-monkey-blocks")},Object(a.createElement)(v.BaseControl,{label:Object(s.__)("Wrapper Tag","snow-monkey-blocks"),id:"snow-monkey-blocks/section-side-heading/wrapper-tag-name"},Object(a.createElement)("div",{className:"smb-list-icon-selector"},Object(r.times)(Q.length,(function(e){var t=l===Q[e];return Object(a.createElement)(v.Button,{isPrimary:t,isSecondary:!t,onClick:function(){return o({wrapperTagName:Q[e]})},key:e},Q[e])})))),Object(a.createElement)(v.BaseControl,{label:Object(s.__)("Title Tag","snow-monkey-blocks"),id:"snow-monkey-blocks/section-side-heading/title-tag"},Object(a.createElement)("div",{className:"smb-list-icon-selector"},Object(r.times)(K.length,(function(e){var t=u===K[e];return Object(a.createElement)(v.Button,{isPrimary:t,isSecondary:!t,onClick:function(){return o({titleTagName:K[e]})},key:e},K[e])})))),Object(a.createElement)(v.SelectControl,{label:Object(s.__)("Heading Position","snow-monkey-blocks"),value:S,options:[{value:"right",label:Object(s.__)("Right side","snow-monkey-blocks")},{value:"left",label:Object(s.__)("Left side","snow-monkey-blocks")}],onChange:function(e){return o({headingPosition:e})}}),Object(a.createElement)(v.SelectControl,{label:Object(s.__)("Heading column size","snow-monkey-blocks"),value:R,onChange:function(e){return o({headingColumnSize:e})},options:[{value:50,label:Object(s.__)("50%","snow-monkey-blocks")},{value:33,label:Object(s.__)("33%","snow-monkey-blocks")},{value:25,label:Object(s.__)("25%","snow-monkey-blocks")}]}),Object(a.createElement)(v.ToggleControl,{label:Object(s.__)("Make the content width slim","snow-monkey-blocks"),checked:L,onChange:function(e){return o({isSlim:e})}})),Object(a.createElement)(v.PanelBody,{title:Object(s.__)("Background (Movable) Settings","snow-monkey-blocks"),initialOpen:!1},Object(a.createElement)(p.__experimentalColorGradientControl,{label:Object(s.__)("Color","snow-monkey-blocks"),colorValue:w,gradientValue:C,onColorChange:function(e){return o({backgroundColor:e})},onGradientChange:function(e){return o({backgroundGradientColor:e})}}),ce&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)(v.RangeControl,{label:Object(s.__)("Background Position (Left / Right)","snow-monkey-blocks"),value:h,onChange:function(e){return o({backgroundHorizontalPosition:d(e,-90,90)})},min:"-90",max:"90"}),Object(a.createElement)(v.RangeControl,{label:Object(s.__)("Background Position (Top / Bottom)","snow-monkey-blocks"),value:f,onChange:function(e){return o({backgroundVerticalPosition:d(e,-90,90)})},min:"-90",max:"90"}),(0!==h||0!==f)&&Object(a.createElement)(v.ToggleControl,{label:Object(s.__)("Make sure the background doesn't overflow to the outside","snow-monkey-blocks"),checked:j,onChange:function(e){return o({isBackgroundNoOver:e})}})),Object(a.createElement)(v.SelectControl,{label:Object(s.__)("Texture","snow-monkey-blocks"),value:E,onChange:function(e){return o({backgroundTexture:e})},options:he}),ae&&Object(a.createElement)(v.RangeControl,{label:Object(s.__)("Texture Opacity","snow-monkey-blocks"),value:Number(x.toFixed(1)),onChange:function(e){return o({backgroundTextureOpacity:d(e,.1,1)})},min:.1,max:1,step:.1})),Object(a.createElement)(v.PanelBody,{title:Object(s.__)("Background (Fixed) Settings","snow-monkey-blocks"),initialOpen:!1},Object(a.createElement)(p.__experimentalColorGradientControl,{label:Object(s.__)("Color","snow-monkey-blocks"),colorValue:N,gradientValue:T,onColorChange:function(e){return o({fixedBackgroundColor:e})},onGradientChange:function(e){return o({fixedBackgroundGradientColor:e})}}),Object(a.createElement)(v.SelectControl,{label:Object(s.__)("Texture","snow-monkey-blocks"),value:B,onChange:function(e){return o({fixedBackgroundTexture:e})},options:he}),re&&Object(a.createElement)(v.RangeControl,{label:Object(s.__)("Texture Opacity","snow-monkey-blocks"),value:Number(D.toFixed(1)),onChange:function(e){return o({fixedBackgroundTextureOpacity:d(e,.1,1)})},min:.1,max:1,step:.1})),Object(a.createElement)(v.PanelBody,{title:Object(s.__)("Top divider Settings","snow-monkey-blocks"),initialOpen:!1},Object(a.createElement)(v.SelectControl,{label:Object(s.__)("Type","snow-monkey-blocks"),value:M,onChange:function(e){return o({topDividerType:e})},options:[{value:"tilt",label:Object(s.__)("Tilt","snow-monkey-blocks")},{value:"curve",label:Object(s.__)("Curve","snow-monkey-blocks")},{value:"wave",label:Object(s.__)("Wave","snow-monkey-blocks")},{value:"triangle",label:Object(s.__)("Triangle","snow-monkey-blocks")}]}),Object(a.createElement)(v.RangeControl,{label:Object(s.__)("Level","snow-monkey-blocks"),value:W,onChange:function(e){return o({topDividerLevel:d(e,-100,100)})},min:"-100",max:"100"}),Object(a.createElement)(p.__experimentalColorGradientControl,{label:Object(s.__)("Color","snow-monkey-blocks"),colorValue:I,onColorChange:function(e){return o({topDividerColor:e})}}),Object(a.createElement)(v.RangeControl,{label:Object(s.__)("Position (Top / Bottom)","snow-monkey-blocks"),value:V,onChange:function(e){return o({topDividerVerticalPosition:e})},min:"-90",max:"90"})),Object(a.createElement)(v.PanelBody,{title:Object(s.__)("Bottom divider Settings","snow-monkey-blocks"),initialOpen:!1},Object(a.createElement)(v.SelectControl,{label:Object(s.__)("Type","snow-monkey-blocks"),value:z,onChange:function(e){return o({bottomDividerType:e})},options:[{value:"tilt",label:Object(s.__)("Tilt","snow-monkey-blocks")},{value:"curve",label:Object(s.__)("Curve","snow-monkey-blocks")},{value:"wave",label:Object(s.__)("Wave","snow-monkey-blocks")},{value:"triangle",label:Object(s.__)("Triangle","snow-monkey-blocks")}]}),Object(a.createElement)(v.RangeControl,{label:Object(s.__)("Level","snow-monkey-blocks"),value:G,onChange:function(e){return o({bottomDividerLevel:d(e,-100,100)})},min:"-100",max:"100"}),Object(a.createElement)(p.__experimentalColorGradientControl,{label:Object(s.__)("Color","snow-monkey-blocks"),colorValue:A,onColorChange:function(e){return o({bottomDividerColor:e})}}),Object(a.createElement)(v.RangeControl,{label:Object(s.__)("Position (Top / Bottom)","snow-monkey-blocks"),value:F,onChange:function(e){return o({bottomDividerVerticalPosition:e})},min:"-90",max:"90"})),Object(a.createElement)(p.__experimentalPanelColorGradientSettings,{title:Object(s.__)("Color Settings","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:P,onColorChange:function(e){return o({textColor:e})},label:Object(s.__)("Text Color","snow-monkey-blocks")}]})),Object(a.createElement)(X,Oe,(ie||re||ce||ae||le||se)&&Object(a.createElement)("div",{className:"smb-section__fixed-background",style:_e},re&&Object(a.createElement)("div",{className:"smb-section__fixed-background__texture",style:ge}),(ce||ae)&&Object(a.createElement)("div",{className:"smb-section__background",style:ve},ae&&Object(a.createElement)("div",{className:"smb-section__background__texture",style:ke})),(le||se)&&Object(a.createElement)("div",{className:"smb-section__dividers",style:pe},le&&Object(a.createElement)("div",{className:Z},m(M,W,I)),se&&Object(a.createElement)("div",{className:$},m(z,G,A)))),Object(a.createElement)("div",{className:"smb-section__inner",style:{}},Object(a.createElement)("div",{className:ee},Object(a.createElement)("div",{className:te},Object(a.createElement)("div",{className:oe},de&&(be||n)&&Object(a.createElement)(p.RichText,{className:"smb-section__subtitle smb-section-side-heading__subtitle",value:O,onChange:function(e){return o({subtitle:e})},placeholder:Object(s.__)("Write subtitle…","snow-monkey-blocks")}),(de||n&&"none"!==u)&&Object(a.createElement)(p.RichText,{className:"smb-section__title smb-section-side-heading__title",tagName:u,value:_,onChange:function(e){return o({title:e})},placeholder:Object(s.__)("Write title…","snow-monkey-blocks")}),de&&(me||n)&&Object(a.createElement)(p.RichText,{className:"smb-section__lede smb-section-side-heading__lede",value:y,onChange:function(e){return o({lede:e})},placeholder:Object(s.__)("Write lede…","snow-monkey-blocks")})),Object(a.createElement)("div",{className:ne},Object(a.createElement)("div",ye)))))))},save:function(e){var t=e.attributes,o=e.className,n=t.wrapperTagName,c=t.titleTagName,i=t.title,r=t.subtitle,l=t.lede,s=t.backgroundHorizontalPosition,d=t.backgroundVerticalPosition,u=t.isBackgroundNoOver,_=t.backgroundColor,v=t.backgroundGradientColor,k=t.backgroundTexture,O=t.backgroundTextureOpacity,y=t.fixedBackgroundColor,h=t.fixedBackgroundGradientColor,f=t.fixedBackgroundTexture,j=t.fixedBackgroundTextureOpacity,w=t.textColor,C=t.headingPosition,E=t.headingColumnSize,x=t.isSlim,N=t.topDividerType,T=t.topDividerLevel,B=t.topDividerColor,D=t.topDividerVerticalPosition,P=t.bottomDividerType,S=t.bottomDividerLevel,R=t.bottomDividerColor,L=t.bottomDividerVerticalPosition,M=b(E),W=M.textColumnWidth,I=M.imageColumnWidth,V=n,z=g()("smb-section","smb-section-side-heading",o),G=g()("smb-section__divider","smb-section__divider--top","smb-section__divider--".concat(N)),A=g()("smb-section__divider","smb-section__divider--bottom","smb-section__divider--".concat(P)),F=g()("c-container",{"u-slim-width":!!x}),H=g()("c-row","c-row--md-margin",{"c-row--reverse":"right"===C}),U=g()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(I)),q=g()("c-row__col","c-row__col--1-1","c-row__col--md-".concat(W)),J=_||v,Q=y||h,K=k,X=f,Y=!!T,Z=!!S,$=!p.RichText.isEmpty(i)&&"none"!==c,ee=!p.RichText.isEmpty(r),te=!p.RichText.isEmpty(l),oe={};w&&(oe.color=w);var ne={paddingTop:Math.abs(T),paddingBottom:Math.abs(S),backgroundColor:y,backgroundImage:h},ce={backgroundImage:X?"url(".concat(smb.pluginUrl,"/dist/block/section/img/").concat(f,".png)"):void 0,opacity:j||void 0},ie={};D&&(ie.top="".concat(D,"%")),L&&(ie.bottom="".concat(L,"%"));var ae={};J&&(ae.backgroundColor=_,ae.backgroundImage=v,u?(0<s?ae.left="".concat(Math.abs(s),"%"):0>s&&(ae.right="".concat(Math.abs(s),"%")),0<d?ae.top="".concat(Math.abs(d),"%"):0>d&&(ae.bottom="".concat(Math.abs(d),"%"))):(s||d)&&(ae.transform="translate(".concat(s||0,"%, ").concat(d||0,"%)")));var re={backgroundImage:K?"url(".concat(smb.pluginUrl,"/dist/block/section/img/").concat(k,".png)"):void 0,opacity:O||void 0};return Object(a.createElement)(V,p.useBlockProps.save({className:z,style:oe}),(Q||X||J||K||Y||Z)&&Object(a.createElement)("div",{className:"smb-section__fixed-background",style:ne},X&&Object(a.createElement)("div",{className:"smb-section__fixed-background__texture",style:ce}),(J||K)&&Object(a.createElement)("div",{className:"smb-section__background",style:ae},K&&Object(a.createElement)("div",{className:"smb-section__background__texture",style:re})),(Y||Z)&&Object(a.createElement)("div",{className:"smb-section__dividers",style:ie},Y&&Object(a.createElement)("div",{className:G},m(N,T,B)),Z&&Object(a.createElement)("div",{className:A},m(P,S,R)))),Object(a.createElement)("div",{className:"smb-section__inner",style:{}},Object(a.createElement)("div",{className:F},Object(a.createElement)("div",{className:H},Object(a.createElement)("div",{className:U},$&&ee&&Object(a.createElement)(p.RichText.Content,{tagName:"div",className:"smb-section__subtitle smb-section-side-heading__subtitle",value:r}),$&&Object(a.createElement)(p.RichText.Content,{tagName:c,className:"smb-section__title smb-section-side-heading__title",value:i}),$&&te&&Object(a.createElement)(p.RichText.Content,{tagName:"div",className:"smb-section__lede smb-section-side-heading__lede",value:l})),Object(a.createElement)("div",{className:q},Object(a.createElement)("div",{className:"smb-section__body smb-section-side-heading__body"},Object(a.createElement)(p.InnerBlocks.Content,null)))))))},deprecated:w};!function(e){if(e){var t=e.metadata,o=e.settings,n=e.name;t&&(t.title&&(t.title=Object(s.__)(t.title,"snow-monkey-blocks"),o.title=t.title),t.description&&(t.description=Object(s.__)(t.description,"snow-monkey-blocks"),o.description=t.description),t.keywords&&(t.keywords=Object(s.__)(t.keywords,"snow-monkey-blocks"),o.keywords=t.keywords),Object(l.unstable__bootstrapServerSideBlockDefinitions)(i()({},n,t))),Object(l.registerBlockType)(n,o)}}(n)}]);