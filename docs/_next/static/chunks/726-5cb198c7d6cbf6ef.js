"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{578:function(t,n,e){e.d(n,{z:function(){return c}});var r=e(8530),i=e(2784),o=e(8908),u={maskWrapper:function(){return{opacity:.7,left:0,top:0,position:"fixed",zIndex:99999,pointerEvents:"none",color:"#000"}},svgWrapper:function(t){var n=t.windowWidth,e=t.windowHeight,r=t.wpx,i=t.wpy;return{width:n,height:e,left:Number(r)/2,top:Number(i)/2,position:"fixed"}},maskArea:function(t){return{x:t.x,y:t.y,width:t.width,height:t.height,fill:"black",rx:0}},maskRect:function(t){var n=t.windowWidth,e=t.windowHeight,r=t.maskID;return{x:0,y:0,width:n,height:e,fill:"currentColor",mask:"url(#".concat(r,")")}},clickArea:function(t){var n=t.windowWidth,e=t.windowHeight,r=t.clipID;return{x:0,y:0,width:n,height:e,fill:"currentcolor",pointerEvents:"auto",clipPath:"url(#".concat(r,")")}},highlightedArea:function(t){return{x:t.x,y:t.y,width:t.width,height:t.height,pointerEvents:"auto",fill:"transparent",display:"none"}}};var c=function(t){var n=t.padding,e=void 0===n?10:n,c=t.wrapperPadding,l=void 0===c?0:c,d=t.onClick,f=t.onClickHighlighted,s=t.styles,h=void 0===s?{}:s,v=t.sizes,w=t.className,m=t.highlightedAreaClassName,g=t.maskId,p=t.clipId,y=g||a("mask__"),b=p||a("clip__"),x=function(t){return function(n,e){var r=u[n](e),i=t[n];return i?i(r,e):r}}(h),E=(0,r.Z)((0,o.tQ)(e),2),k=E[0],A=E[1],N=(0,r.Z)((0,o.tQ)(l),2),z=N[0],W=N[1],S=(0,o.Jj)(),C=S.w,I=S.h,Z=(0,o.Tw)((null==v?void 0:v.width)+2*k),H=(0,o.Tw)((null==v?void 0:v.height)+2*A),_=(0,o.Tw)((null==v?void 0:v.top)-A-W/2),R=(0,o.Tw)((null==v?void 0:v.left)-k-z/2),O=C-z,X=I-W,j=x("maskArea",{x:R,y:_,width:Z,height:H});return i.createElement("div",{style:x("maskWrapper",{}),onClick:d,className:w},i.createElement("svg",{width:O,height:X,xmlns:"http://www.w3.org/2000/svg",style:x("svgWrapper",{windowWidth:O,windowHeight:X,wpx:z,wpy:W})},i.createElement("defs",null,i.createElement("mask",{id:y},i.createElement("rect",{x:0,y:0,width:O,height:X,fill:"white"}),i.createElement("rect",{style:j,rx:j.rx?1:void 0})),i.createElement("clipPath",{id:b},i.createElement("polygon",{points:"0 0, 0 ".concat(X,", ").concat(R," ").concat(X,", ").concat(R," ").concat(_,", ").concat(R+Z," ").concat(_,", ").concat(R+Z," ").concat(_+H,", ").concat(R," ").concat(_+H,", ").concat(R," ").concat(X,", ").concat(O," ").concat(X,", ").concat(O," 0")}))),i.createElement("rect",{style:x("maskRect",{windowWidth:O,windowHeight:X,maskID:y})}),i.createElement("rect",{style:x("clickArea",{windowWidth:O,windowHeight:X,top:_,left:R,width:Z,height:H,clipID:b})}),i.createElement("rect",{style:x("highlightedArea",{x:R,y:_,width:Z,height:H}),className:m,onClick:f})))};function a(t){return t+Math.random().toString(36).substring(2,16)}},5071:function(t,n,e){e.d(n,{J:function(){return d}});var r=e(865),i=e(6670),o=e(6297),u=e(8530),c=e(2784),a=e(8908),l={popover:function(){return{position:"fixed",maxWidth:353,backgroundColor:"#fff",padding:"24px 30px",boxShadow:"0 0.5em 3em rgba(0, 0, 0, 0.3)",color:"inherit",zIndex:1e5,transition:"transform 0.3s",top:0,left:0}}};var d=function(t){var n=t.children,e=t.position,d=void 0===e?"bottom":e,f=t.padding,s=void 0===f?10:f,h=t.styles,v=void 0===h?{}:h,w=t.sizes,m=t.refresher,g=(0,o.Z)(t,["children","position","padding","styles","sizes","refresher"]),p=(0,c.useRef)(null),y=(0,c.useRef)(""),b=(0,c.useRef)(""),x=(0,c.useRef)(""),E=(0,a.Jj)(),k=E.w,A=E.h,N=function(t){return function(n,e){var r=l[n](e),i=t[n];return i?i(r,e):r}}(v),z=(0,a.EL)(p,m),W=z.width,S=z.height,C=null==w?void 0:w.left,I=null==w?void 0:w.top,Z=null==w?void 0:w.right,H=null==w?void 0:w.bottom,_=d&&"function"===typeof d?d({width:W,height:S,windowWidth:k,windowHeight:A,top:I,left:C,right:Z,bottom:H,x:w.x,y:w.y},z):d,R={left:C,right:k-Z,top:I,bottom:A-H},O=(0,u.Z)((0,a.tQ)(s),2),X=O[0],j=O[1],M=function(t){return R[t]>((0,a.Fz)(t)?W+2*X:S+2*j)},T=function(t){if(Array.isArray(t)){var n=(0,a.Xs)(t[0],k),e=(0,a.At)(t[1],A);return y.current="custom",[n?k/2-W/2:t[0],e?A/2-S/2:t[1]]}var r=(0,a.Xs)(C+W,k)?Z-W+X:C-X,i=r>X?r:X,o=(0,a.At)(I+S,A)?H-S+j:I-j,u=o>j?o:j;(0,a.At)(I+S,A)?b.current="bottom":b.current="top",(0,a.Xs)(C+W,k)?x.current="left":x.current="right";var c={top:[i,I-S-2*j],right:[Z+2*X,u],bottom:[i,H+2*j],left:[C-W-2*X,u],center:[k/2-W/2,A/2-S/2]};return"center"===t||M(t)?(y.current=t,c[t]):function(t){for(var n=(0,a.vq)(R),e=0;e<n.length;e++)if(M(n[e]))return y.current=n[e],t[n[e]];return y.current="center",t.center}(c)}(_);return c.createElement("div",(0,r.Z)({className:"reactour__popover",style:(0,i.Z)((0,r.Z)({},N("popover",{position:y.current,verticalAlign:b.current,horizontalAlign:x.current})),{transform:"translate(".concat(Math.round(T[0]),"px, ").concat(Math.round(T[1]),"px)")}),ref:p},g),n)}},8908:function(t,n,e){e.d(n,{At:function(){return y},Dz:function(){return l},EL:function(){return d},Fz:function(){return g},Jj:function(){return w},S1:function(){return h},Tw:function(){return v},XS:function(){return a},Xs:function(){return p},jF:function(){return m},ld:function(){return s},tQ:function(){return E},vq:function(){return b}});var r=e(2838),i=e(8530),o=e(2784),u=e(3771),c=e(7209),a=function(t){var n=t.mutationObservables,e=t.resizeObservables,r=t.refresh,i=function(t){var e=Array.from(t),i=!0,o=!1,u=void 0;try{for(var c,a=function(){var t=c.value;if(n){if(!t.attributes)return"continue";n.find((function(n){return t.matches(n)}))&&r(!0)}},l=e[Symbol.iterator]();!(i=(c=l.next()).done);i=!0)a()}catch(d){o=!0,u=d}finally{try{i||null==l.return||l.return()}finally{if(o)throw u}}},a=function(t){var n=Array.from(t),r=!0,i=!1,o=void 0;try{for(var u,c=function(){var t=u.value;if(e){if(!t.attributes)return"continue";e.find((function(n){return t.matches(n)}))&&f(d+1)}},a=n[Symbol.iterator]();!(r=(u=a.next()).done);r=!0)c()}catch(l){i=!0,o=l}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}},l=(0,o.useState)(0),d=l[0],f=l[1],s=(0,o.useRef)(document.documentElement||document.body);return(0,u.Z)(s,(function(t){var n=!0,e=!1,r=void 0;try{for(var o,u=t[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var c=o.value;0!==c.addedNodes.length&&(i(c.addedNodes),a(c.addedNodes)),0!==c.removedNodes.length&&(i(c.removedNodes),a(c.removedNodes))}}catch(l){e=!0,r=l}finally{try{n||null==u.return||u.return()}finally{if(e)throw r}}}),{childList:!0,subtree:!0}),(0,o.useEffect)((function(){if(e){var t=new c.Z((function(){r()})),n=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done);n=!0){var l=u.value,d=document.querySelector(l);d&&t.observe(d)}}catch(f){i=!0,o=f}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return function(){t.disconnect()}}}),[e,r,d]),null};function l(t){var n=f;t&&(n=t.getBoundingClientRect());return n}function d(t,n){var e=(0,o.useState)(f),r=e[0],i=e[1],u=(0,o.useCallback)((function(){(null==t?void 0:t.current)&&i(l(null==t?void 0:t.current))}),[null==t?void 0:t.current]);return(0,o.useEffect)((function(){return u(),window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}}),[null==t?void 0:t.current,n]),r}var f={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0};function s(t,n){return new Promise((function(e){if(!(0,r.Z)(t,Element))throw new TypeError("Argument 1 must be an Element");var i=0,o=null,u=Object.assign({behavior:"smooth"},n);t.scrollIntoView(u),requestAnimationFrame((function n(){var r=null==t?void 0:t.getBoundingClientRect().top;if(r===o){if(i++>2)return e(null)}else i=0,o=r;requestAnimationFrame(n)}))}))}function h(t,n){var e=n.threshold,r=void 0===e?0:e,u=n.root,c=void 0===u?null:u,a=n.rootMargin,l=void 0===a?"0%":a,d=n.freezeOnceVisible,f=void 0!==d&&d,s=(0,o.useState)(),h=s[0],v=s[1],w=(null==h?void 0:h.isIntersecting)&&f,m=function(t){var n=(0,i.Z)(t,1)[0];v(n)};return(0,o.useEffect)((function(){var n=null==t?void 0:t.current;if(!!window.IntersectionObserver&&!w&&n){var e=new IntersectionObserver(m,{threshold:r,root:c,rootMargin:l});return e.observe(n),function(){return e.disconnect()}}}),[t,JSON.stringify(r),c,l,w]),h}function v(t){return t<0?0:t}function w(){return{w:Math.max(document.documentElement.clientWidth,window.innerWidth||0),h:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function m(t){var n=t.top,e=t.right,r=t.bottom,i=t.left,o=t.threshold,u=w(),c=u.w,a=u.h,l=function(t){return"object"===typeof t&&null!==t?{thresholdX:t.x||0,thresholdY:t.y||0}:{thresholdX:t||0,thresholdY:t||0}}(o),d=l.thresholdX,f=l.thresholdY;return n<0&&r-n>a||n>=0+f&&i>=0+d&&r<=a-f&&e<=c-d}var g=function(t){return/(left|right)/.test(t)},p=function(t,n){return t>n},y=function(t,n){return t>n};function b(t){return Object.keys(t).map((function(n){return{position:n,value:t[n]}})).sort((function(t,n){return n.value-t.value})).map((function(t){return t.position}))}var x=10;function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return Array.isArray(t)?t[0]?[t[0],t[1]?t[1]:t[0]]:[x,x]:[t,t]}}}]);