_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[73],{"/B0Q":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a}));var r=t("W1cA");const i=Symbol("implicit");function a(){var e=new Map,n=[],t=[],o=i;function c(r){var a=r+"",c=e.get(a);if(!c){if(o!==i)return o;e.set(a,c=n.push(r))}return t[(c-1)%t.length]}return c.domain=function(t){if(!arguments.length)return n.slice();n=[],e=new Map;for(const r of t){const t=r+"";e.has(t)||e.set(t,n.push(r))}return c},c.range=function(e){return arguments.length?(t=Array.from(e),c):t.slice()},c.unknown=function(e){return arguments.length?(o=e,c):o},c.copy=function(){return a(n,t).unknown(o)},r.b.apply(c,arguments),c}},"1Wmu":function(e,n,t){"use strict";function r(e,n){e(n)}t.d(n,"a",(function(){return r}))},"201w":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("J4UP");function i(e){return Object(r.a)(e)}},"Cf/J":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("aWzz"),i=t.n(r),a=t("ERkP"),o=t.n(a);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e){var n=e.children,t=e.id,r=e.from,i=e.to,a=e.x1,u=e.y1,d=e.x2,s=e.y2,l=e.fromOffset,f=void 0===l?"0%":l,g=e.fromOpacity,p=void 0===g?1:g,y=e.toOffset,h=void 0===y?"100%":y,m=e.toOpacity,x=void 0===m?1:m,b=e.rotate,v=e.transform,O=e.vertical,j=void 0===O||O,w=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),S=a,_=d,D=u,E=s;return!j||S||_||D||E||(S="0",_="0",D="0",E="1"),o.a.createElement("defs",null,o.a.createElement("linearGradient",c({id:t,x1:S,y1:D,x2:_,y2:E,gradientTransform:b?"rotate("+b+")":v},w),!!n&&n,!n&&o.a.createElement("stop",{offset:f,stopColor:r,stopOpacity:p}),!n&&o.a.createElement("stop",{offset:h,stopColor:i,stopOpacity:x})))}u.propTypes={id:i.a.string.isRequired,from:i.a.string,to:i.a.string,x1:i.a.oneOfType([i.a.string,i.a.number]),x2:i.a.oneOfType([i.a.string,i.a.number]),y1:i.a.oneOfType([i.a.string,i.a.number]),y2:i.a.oneOfType([i.a.string,i.a.number]),fromOffset:i.a.oneOfType([i.a.string,i.a.number]),fromOpacity:i.a.oneOfType([i.a.string,i.a.number]),toOffset:i.a.oneOfType([i.a.string,i.a.number]),toOpacity:i.a.oneOfType([i.a.string,i.a.number]),rotate:i.a.oneOfType([i.a.string,i.a.number]),transform:i.a.string,children:i.a.node,vertical:i.a.bool}},"D+es":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("/B0Q"),i=t("xx0A"),a=Object(i.b)("domain","range","reverse","unknown");function o(e){return a(Object(r.a)(),e)}},D5YV:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var r=t("jg1C"),i=(t("ERkP"),t("w3y7")),a=t("i9k6"),o=t("wEgr");t.d(n,"packageJson",(function(){return o}));var c={background:"#c4c3cb",borderRadius:14},u={color:"#6437d6",zIndex:1};function d(){return Object(r.jsx)(a.a,{title:"Drag i",description:"<Drag.Drag />>",exampleRenderer:i.a,exampleUrl:"/drag-i",tileStyles:c,detailsStyles:u})}},J4UP:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));const r=1/4294967296;function i(e=Math.random()){let n=0|(0<=e&&e<1?e/r:Math.abs(e));return()=>(n=1664525*n+1013904223|0,r*(n>>>0))}},"PL/t":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/drag",function(){return t("mz/g")}])},"VB+g":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("rkTo"),i=t("ZQHj");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={x:0,y:0};function c(e,n){if(!e||!n)return null;var t=function(e){if(!e)return a({},o);if(Object(i.g)(e))return e.changedTouches.length>0?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:a({},o);if(Object(i.c)(e))return{x:e.clientX,y:e.clientY};var n=null==e?void 0:e.target,t=n&&"getBoundingClientRect"in n?n.getBoundingClientRect():null;return t?{x:t.x+t.width/2,y:t.y+t.height/2}:a({},o)}(n),c=Object(i.d)(e)?e.ownerSVGElement:e,u=Object(i.e)(c)?c.getScreenCTM():null;if(Object(i.f)(c)&&u){var d=c.createSVGPoint();return d.x=t.x,d.y=t.y,d=d.matrixTransform(u.inverse()),new r.a({x:d.x,y:d.y})}var s=e.getBoundingClientRect();return new r.a({x:t.x-s.left-e.clientLeft,y:t.y-s.top-e.clientTop})}},Vi0D:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return s}));var r=t("+Y26"),i=t("M3gT"),a=t("Ddjo"),o=t("Xyxy"),c=t("Q4nK"),u={expand:r.a,diverging:i.a,none:a.a,silhouette:o.a,wiggle:c.a},d=Object.keys(u);function s(e){return e&&u[e]||u.none}},ZQHj:function(e,n,t){"use strict";function r(e){return!!e&&e instanceof Element}function i(e){return!!e&&(e instanceof SVGElement||"ownerSVGElement"in e)}function a(e){return!!e&&"createSVGPoint"in e}function o(e){return!!e&&"getScreenCTM"in e}function c(e){return!!e&&"changedTouches"in e}function u(e){return!!e&&"clientX"in e}function d(e){return!!e&&(e instanceof Event||"nativeEvent"in e&&e.nativeEvent instanceof Event)}t.d(n,"a",(function(){return r})),t.d(n,"d",(function(){return i})),t.d(n,"f",(function(){return a})),t.d(n,"e",(function(){return o})),t.d(n,"g",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return d}))},dGDr:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return g})),t.d(n,"c",(function(){return p})),t.d(n,"d",(function(){return y})),t.d(n,"e",(function(){return h})),t.d(n,"f",(function(){return m}));var r=t("mBAT"),i=t("KdQ8"),a=t("+pY8"),o=t("lg8u"),c=t("FVKn"),u=t("uvDt"),d=t("1Wmu"),s=t("oWfS"),l=t("Vi0D");function f(e){var n=void 0===e?{}:e,t=n.innerRadius,i=n.outerRadius,a=n.cornerRadius,o=n.startAngle,c=n.endAngle,u=n.padAngle,s=n.padRadius,l=Object(r.a)();return null!=t&&Object(d.a)(l.innerRadius,t),null!=i&&Object(d.a)(l.outerRadius,i),null!=a&&Object(d.a)(l.cornerRadius,a),null!=o&&Object(d.a)(l.startAngle,o),null!=c&&Object(d.a)(l.endAngle,c),null!=u&&Object(d.a)(l.padAngle,u),null!=s&&Object(d.a)(l.padRadius,s),l}function g(e){var n=void 0===e?{}:e,t=n.x,r=n.x0,a=n.x1,o=n.y,c=n.y0,u=n.y1,s=n.defined,l=n.curve,f=Object(i.a)();return t&&Object(d.a)(f.x,t),r&&Object(d.a)(f.x0,r),a&&Object(d.a)(f.x1,a),o&&Object(d.a)(f.y,o),c&&Object(d.a)(f.y0,c),u&&Object(d.a)(f.y1,u),s&&f.defined(s),l&&f.curve(l),f}function p(e){var n=void 0===e?{}:e,t=n.x,r=n.y,i=n.defined,o=n.curve,c=Object(a.a)();return t&&Object(d.a)(c.x,t),r&&Object(d.a)(c.y,r),i&&c.defined(i),o&&c.curve(o),c}function y(e){var n=void 0===e?{}:e,t=n.startAngle,r=n.endAngle,i=n.padAngle,a=n.value,c=n.sort,u=n.sortValues,s=Object(o.a)();return(null===c||null!=c)&&s.sort(c),(null===u||null!=u)&&s.sortValues(u),null!=a&&s.value(a),null!=i&&Object(d.a)(s.padAngle,i),null!=t&&Object(d.a)(s.startAngle,t),null!=r&&Object(d.a)(s.endAngle,r),s}function h(e){var n=void 0===e?{}:e,t=n.angle,r=n.radius,i=n.defined,a=n.curve,o=Object(c.a)();return t&&Object(d.a)(o.angle,t),r&&Object(d.a)(o.radius,r),i&&o.defined(i),a&&o.curve(a),o}function m(e){var n=e.keys,t=e.value,r=e.order,i=e.offset,a=Object(u.a)();return n&&a.keys(n),t&&Object(d.a)(a.value,t),r&&a.order(Object(s.c)(r)),i&&a.offset(Object(l.c)(i)),a}},geX1:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("ERkP"),i=t.n(r),a=t("O94r"),o=t.n(a),c=t("dGDr");function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e){var n=e.children,t=e.data,r=void 0===t?[]:t,a=e.x,d=e.y,s=e.fill,l=void 0===s?"transparent":s,f=e.className,g=e.curve,p=e.innerRef,y=e.defined,h=void 0===y?function(){return!0}:y,m=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["children","data","x","y","fill","className","curve","innerRef","defined"]),x=Object(c.c)({x:a,y:d,defined:h,curve:g});return n?i.a.createElement(i.a.Fragment,null,n({path:x})):i.a.createElement("path",u({ref:p,className:o()("visx-linepath",f),d:x(r)||"",fill:l,strokeLinecap:"round"},m))}},i6Tx:function(e,n,t){"use strict";n.__esModule=!0,n.default=s;var r=u(t("aWzz")),i=u(t("RNvQ")),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c();if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(t,i,a):t[i]=e[i]}t.default=e,n&&n.set(e,t);return t}(t("ERkP")),o=u(t("LaGA"));function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e){var n=e.className,t=e.children,r=e.debounceTime,c=void 0===r?300:r,u=e.ignoreDimensions,s=void 0===u?[]:u,l=e.parentSizeStyles,f=void 0===l?{width:"100%",height:"100%"}:l,g=e.enableDebounceLeadingCall,p=void 0===g||g,y=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"]),h=(0,a.useRef)(null),m=(0,a.useRef)(0),x=(0,a.useState)({width:0,height:0,top:0,left:0}),b=x[0],v=x[1],O=(0,a.useMemo)((function(){var e=Array.isArray(s)?s:[s];return(0,i.default)((function(n){v((function(t){return Object.keys(t).filter((function(e){return t[e]!==n[e]})).every((function(n){return e.includes(n)}))?t:n}))}),c,{leading:p})}),[c,p,s]);return(0,a.useEffect)((function(){var e=new o.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var n=e.contentRect,t=n.left,r=n.top,i=n.width,a=n.height;m.current=window.requestAnimationFrame((function(){O({width:i,height:a,top:r,left:t})}))}))}));return h.current&&e.observe(h.current),function(){window.cancelAnimationFrame(m.current),e.disconnect(),O&&O.cancel&&O.cancel()}}),[O]),a.default.createElement("div",d({style:f,ref:h,className:n},y),t(d({},b,{ref:h.current,resize:O})))}s.propTypes={className:r.default.string,debounceTime:r.default.number,enableDebounceLeadingCall:r.default.bool,ignoreDimensions:r.default.oneOfType([r.default.any,r.default.arrayOf(r.default.any)]),children:r.default.func.isRequired}},i9k6:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("zjfJ"),i=t("jg1C"),a=t("yFcC"),o=t.n(a),c=t("ERkP"),u=t.n(c),d=t("jvFD"),s=t.n(d),l=t("i6Tx"),f=t.n(l);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){var n,t,a=e.description,c=e.detailsHeight,d=void 0===c?76:c,l=e.detailsStyles,p=e.exampleProps,y=e.exampleRenderer,h=e.exampleUrl,m=e.tileStyles,x=e.title;return Object(i.jsxs)(i.Fragment,{children:[(n=h,t=Object(i.jsxs)("div",{style:m,className:"jsx-713312509 gallery-tile",children:[Object(i.jsx)("div",{className:"jsx-713312509 image",children:Object(i.jsx)(f.a,{children:function(e){var n=e.width,t=e.height;return u.a.createElement(y,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({width:n,height:t+(x||a?d:0)},p))}})}),(x||a)&&Object(i.jsxs)("div",{style:l,className:"jsx-713312509 details",children:[x&&Object(i.jsx)("div",{className:"jsx-713312509 title",children:x}),a&&Object(i.jsx)("div",{className:"jsx-713312509 description",children:Object(i.jsx)("pre",{className:"jsx-713312509",children:a})})]})]}),n?Object(i.jsx)(s.a,{href:n,children:t}):t),Object(i.jsx)(o.a,{id:"713312509",children:["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]})]})}try{p.displayName="GalleryTile",p.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:p.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(y){}},jpI8:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("VB+g"),i=t("ZQHj");function a(e,n){if(Object(i.a)(e)&&n)return Object(r.a)(e,n);if(Object(i.b)(e)){var t=e,a=t.target;if(a)return Object(r.a)(a,t)}return null}},"m+Ft":function(e,n,t){"use strict";function r(e,n,t){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+n)/6,(e._y0+4*e._y1+t)/6)}function i(e){this._context=e}t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return i})),i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:r(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:r(this,e,n)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}},n.b=function(e){return new i(e)}},"mz/g":function(e,n,t){"use strict";t.r(n);var r=t("jg1C"),i=t("ERkP"),a=t("zjfJ"),o=t("zygG"),c=t("jpI8");function u(e){var n=Object(i.useState)(e),t=n[0],r=n[1],a=Object(i.useRef)(null),o=Object(i.useCallback)((function(e,n){a.current=n||null,r(e)}),[r]);return Object(i.useLayoutEffect)((function(){a.current&&(a.current(t),a.current=null)}),[t]),[t,o]}try{u.displayName="useStateWithCallback",u.__docgenInfo={description:"A hook that exposes a setState(state, callback) API similar to a component class.",displayName:"useStateWithCallback",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-drag/src/util/useStateWithCallback.ts#useStateWithCallback"]={docgenInfo:u.__docgenInfo,name:"useStateWithCallback",path:"../visx-drag/src/util/useStateWithCallback.ts#useStateWithCallback"})}catch(x){}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.resetOnStart,t=void 0!==n&&n,r=e.onDragEnd,a=e.onDragMove,d=e.onDragStart,l=e.x,f=e.y,g=e.dx,p=e.dy,y=e.isDragging,h=Object(i.useRef)({x:l,y:f,dx:g,dy:p}),m=u({x:l,y:f,dx:null!==g&&void 0!==g?g:0,dy:null!==p&&void 0!==p?p:0,isDragging:!1}),x=Object(o.a)(m,2),b=x[0],v=x[1];Object(i.useEffect)((function(){h.current.x===l&&h.current.y===f&&h.current.dx===g&&h.current.dy===p||(h.current={x:l,y:f,dx:g,dy:p},v((function(e){return s(s({},e),{},{x:l,y:f,dx:null!==g&&void 0!==g?g:0,dy:null!==p&&void 0!==p?p:0})})))})),Object(i.useEffect)((function(){void 0!==y&&b.isDragging!==y&&v((function(e){return s(s({},e),{},{isDragging:y})}))}),[b.isDragging,y,v]);var O=Object(i.useCallback)((function(e){e.persist(),v((function(n){var r=Object(c.a)(e)||{x:0,y:0};return{isDragging:!0,dx:t?0:n.dx,dy:t?0:n.dy,x:t?r.x:r.x-n.dx,y:t?r.y:r.y-n.dy}}),d&&function(n){d(s(s({},n),{},{event:e}))})}),[d,t,v]),j=Object(i.useCallback)((function(e){e.persist(),v((function(n){var t=Object(c.a)(e)||{x:0,y:0};return n.isDragging?s(s({},n),{},{isDragging:!0,dx:t.x-(n.x||0),dy:t.y-(n.y||0)}):n}),a&&function(n){n.isDragging&&a(s(s({},n),{},{event:e}))})}),[a,v]),w=Object(i.useCallback)((function(e){e.persist(),v((function(e){return s(s({},e),{},{isDragging:!1})}),r&&function(n){r(s(s({},n),{},{event:e}))})}),[r,v]);return s(s({},b),{},{dragEnd:w,dragMove:j,dragStart:O})}try{l.displayName="useDrag",l.__docgenInfo={description:"Hook for dragging, returns a `UseDrag` object.",displayName:"useDrag",props:{resetOnStart:{defaultValue:{value:!1},description:"Whether to reset drag state upon the start of a new drag.",name:"resetOnStart",required:!1,type:{name:"boolean | undefined"}},onDragEnd:{defaultValue:null,description:"Optional callback invoked upon drag end.",name:"onDragEnd",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},onDragMove:{defaultValue:null,description:"Optional callback invoked upon drag movement.",name:"onDragMove",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},onDragStart:{defaultValue:null,description:"Optional callback invoked upon drag start.",name:"onDragStart",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},x:{defaultValue:null,description:"Optionally set the initial drag x, or override the current drag x.",name:"x",required:!1,type:{name:"number | undefined"}},y:{defaultValue:null,description:"Optionally set the initial drag y, or override the current drag y.",name:"y",required:!1,type:{name:"number | undefined"}},dx:{defaultValue:null,description:"Optionally set the initial drag dx, or override the current drag dx.",name:"dx",required:!1,type:{name:"number | undefined"}},dy:{defaultValue:null,description:"Optionally set the initial drag dy, or override the current drag dy.",name:"dy",required:!1,type:{name:"number | undefined"}},isDragging:{defaultValue:null,description:"If defined, parent controls dragging state.",name:"isDragging",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-drag/src/useDrag.ts#useDrag"]={docgenInfo:l.__docgenInfo,name:"useDrag",path:"../visx-drag/src/useDrag.ts#useDrag"})}catch(x){}function f(e){var n=e.captureDragArea,t=void 0===n||n,i=e.children,a=e.dx,o=e.dy,c=e.height,u=e.onDragEnd,d=e.onDragMove,s=e.onDragStart,f=e.resetOnStart,g=e.width,p=l({resetOnStart:f,onDragEnd:u,onDragMove:d,onDragStart:s,x:e.x,y:e.y,dx:a,dy:o,isDragging:e.isDragging});return Object(r.jsxs)(r.Fragment,{children:[p.isDragging&&t&&Object(r.jsx)("rect",{width:g,height:c,onPointerDown:p.dragStart,onPointerMove:p.dragMove,onPointerUp:p.dragEnd,fill:"transparent"}),i(p)]})}try{f.displayName="Drag",f.__docgenInfo={description:"",displayName:"Drag",props:{resetOnStart:{defaultValue:null,description:"Whether to reset drag state upon the start of a new drag.",name:"resetOnStart",required:!1,type:{name:"boolean | undefined"}},onDragEnd:{defaultValue:null,description:"Optional callback invoked upon drag end.",name:"onDragEnd",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},onDragMove:{defaultValue:null,description:"Optional callback invoked upon drag movement.",name:"onDragMove",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},onDragStart:{defaultValue:null,description:"Optional callback invoked upon drag start.",name:"onDragStart",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},x:{defaultValue:null,description:"Optionally set the initial drag x, or override the current drag x.",name:"x",required:!1,type:{name:"number | undefined"}},y:{defaultValue:null,description:"Optionally set the initial drag y, or override the current drag y.",name:"y",required:!1,type:{name:"number | undefined"}},dx:{defaultValue:null,description:"Optionally set the initial drag dx, or override the current drag dx.",name:"dx",required:!1,type:{name:"number | undefined"}},dy:{defaultValue:null,description:"Optionally set the initial drag dy, or override the current drag dy.",name:"dy",required:!1,type:{name:"number | undefined"}},isDragging:{defaultValue:null,description:"If defined, parent controls dragging state.\nIf defined, parent controls dragging state.",name:"isDragging",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"Children render function which is passed the state of dragging and callbacks for drag start/end/move.",name:"children",required:!0,type:{name:"(args: UseDrag) => ReactNode"}},width:{defaultValue:null,description:"Width of the drag container.",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"Height of the drag container.",name:"height",required:!0,type:{name:"number"}},captureDragArea:{defaultValue:{value:!0},description:"Whether to render an invisible rect below children to capture the drag area as defined by width and height.",name:"captureDragArea",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-drag/src/Drag.tsx#Drag"]={docgenInfo:f.__docgenInfo,name:"Drag",path:"../visx-drag/src/Drag.tsx#Drag"})}catch(x){}var g=t("QnPE"),p=t("D5YV"),y=t("sU+B"),h=[l,f],m=[p.default,y.default];n.default=function(){return Object(r.jsx)(g.a,{components:h,examples:m,readme:'# @visx/drag\n\n<a title="@visx/drag npm downloads" href="https://www.npmjs.com/package/@visx/drag">\n  <img src="https://img.shields.io/npm/dm/@visx/drag.svg?style=flat-square" />\n</a>\n\n`@visx/drag` provides `react` components and hooks for making items within an interface (or chart) draggable.\n\n## Installation\n\n```\nnpm install --save @visx/drag\n```\n',visxPackage:"drag"})}},oWfS:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return s}));var r=t("Zx3a"),i=t("c6zU"),a=t("yU24"),o=t("V+6I"),c=t("NKRu"),u={ascending:r.a,descending:i.a,insideout:a.a,none:o.a,reverse:c.a},d=Object.keys(u);function s(e){return e&&u[e]||u.none}},rkTo:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return i}));var i=function(){function e(e){var n=e.x,t=void 0===n?0:n,i=e.y,a=void 0===i?0:i;r(this,"x",0),r(this,"y",0),this.x=t,this.y=a}var n=e.prototype;return n.value=function(){return{x:this.x,y:this.y}},n.toArray=function(){return[this.x,this.y]},e}()},w3y7:function(e,n,t){"use strict";t.d(n,"a",(function(){return x}));var r=t("jg1C"),i=t("yFcC"),a=t.n(i),o=t("ERkP"),c=t.n(o),u=t("D+es"),d=t("Cf/J"),s=t("aWzz"),l=t.n(s),f=t("OSpJ");function g(e){var n=e.captureDragArea,t=void 0===n||n,r=e.children,i=e.dx,a=e.dy,o=e.height,u=e.onDragEnd,d=e.onDragMove,s=e.onDragStart,l=e.resetOnStart,g=e.width,p=e.x,y=e.y,h=e.isDragging,m=Object(f.a)({resetOnStart:l,onDragEnd:u,onDragMove:d,onDragStart:s,x:p,y:y,dx:i,dy:a,isDragging:h});return c.a.createElement(c.a.Fragment,null,m.isDragging&&t&&c.a.createElement("rect",{width:g,height:o,onPointerDown:m.dragStart,onPointerMove:m.dragMove,onPointerUp:m.dragEnd,fill:"transparent"}),r(m))}g.propTypes={children:l.a.func.isRequired,width:l.a.number.isRequired,height:l.a.number.isRequired,captureDragArea:l.a.bool,isDragging:l.a.bool};var p=t("201w"),y=function(e){var n=e.width,t=e.height,r=Object(p.a)(.2),i=Object(p.a)(.3),a=Object(p.a)(.4);return new Array(n<360?40:185).fill(1).map((function(e,o){var c=25-20*r();return{id:"".concat(o),radius:c,x:Math.round(i()*(n-2*c)+c),y:Math.round(a()*(t-2*c)+c)}}))},h=y;try{y.displayName="generateCircles",y.__docgenInfo={description:"",displayName:"generateCircles",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-drag-i/generateCircles.ts#generateCircles"]={docgenInfo:y.__docgenInfo,name:"generateCircles",path:"src/sandboxes/visx-drag-i/generateCircles.ts#generateCircles"})}catch(b){}var m=["#025aac","#02cff9","#02efff","#03aeed","#0384d7","#edfdff","#ab31ff","#5924d7","#d145ff","#1a02b1","#e582ff","#ff00d4","#270eff","#827ce2"];function x(e){var n=e.width,t=e.height,i=Object(o.useState)([]),c=i[0],s=i[1];Object(o.useEffect)((function(){n>10&&t>10&&s(h({width:n,height:t}))}),[n,t]);var l=Object(o.useMemo)((function(){return Object(u.a)({range:m,domain:c.map((function(e){return e.id}))})}),[n,t]);return 0===c.length||n<10?null:Object(r.jsxs)("div",{style:{touchAction:"none"},className:"jsx-856181217 Drag",children:[Object(r.jsxs)("svg",{width:n,height:t,className:"jsx-856181217",children:[Object(r.jsx)(d.a,{id:"stroke",from:"#ff00a5",to:"#ffc500"}),Object(r.jsx)("rect",{fill:"#c4c3cb",width:n,height:t,rx:14,className:"jsx-856181217"}),c.map((function(e,i){return Object(r.jsx)(g,{width:n,height:t,x:e.x,y:e.y,onDragStart:function(){s(function(e,n){var t=[].concat(e),r=t.length-1,i=t.splice(n,1)[0];return t.splice(r,0,i),t}(c,i))},children:function(n){var t=n.dragStart,i=n.dragEnd,a=n.dragMove,o=n.isDragging,c=n.x,u=n.y,d=n.dx,s=n.dy;return Object(r.jsx)("circle",{cx:c,cy:u,r:o?e.radius+4:e.radius,fill:o?"url(#stroke)":l(e.id),transform:"translate(".concat(d,", ").concat(s,")"),fillOpacity:.9,stroke:o?"white":"transparent",strokeWidth:2,onMouseMove:a,onMouseUp:i,onMouseDown:t,onTouchStart:t,onTouchMove:a,onTouchEnd:i,className:"jsx-856181217"},"dot-".concat(e.id))}},"drag-".concat(e.id))}))]}),Object(r.jsx)("div",{className:"jsx-856181217 deets",children:Object(r.jsxs)("div",{className:"jsx-856181217",children:["Based on Mike Bostock's"," ",Object(r.jsx)("a",{href:"https://bl.ocks.org/mbostock/c206c20294258c18832ff80d8fd395c3",className:"jsx-856181217",children:"Circle Dragging II"})]})}),Object(r.jsx)(a.a,{id:"856181217",children:[".Drag.jsx-856181217{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}","svg.jsx-856181217{margin:1rem 0;}",".deets.jsx-856181217{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:12px;}",".deets.jsx-856181217>div.jsx-856181217{margin:0.25rem;}"]})]})}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-drag-i/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-drag-i/Example.tsx#Example"})}catch(b){}},wEgr:function(e){e.exports=JSON.parse('{"name":"@visx/demo-drag-i","description":"Standalone visx drag demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/drag":"latest","@visx/gradient":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","drag"]}')},zjfJ:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))}},[["PL/t",0,2,1,3,4,7,8,9,10,41]]]);