(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[48],{"Hn+V":function(e,t,n){"use strict";n.d(t,"a",(function(){return ne})),n.d(t,"b",(function(){return re}));var r=n("zjfJ"),a=n("jg1C"),i=n("ERkP"),o=n.n(i),s=n("cjvV"),u=n("67po"),l=n("oT5u"),h=n.n(l),d=n("aWzz"),c=n.n(d),f=n("JmwF"),g=n("g2fB"),p=n("wQia"),x=n.n(p);function y(e,t){if(!e.invert){var n=e.range(),r=n[0],a=n[1],i=0,o=e.step()*(a-r)/Math.abs(a-r);if(o>0)for(;t>r+o*(i+1);)i+=1;else for(;t<r+o*(i+1);)i+=1;return i}return e.invert(t)}function m(e,t,n,r){var a,i=y(e,t+(t<n?-r:r)),o=y(e,n+(n<t?-r:r)),s=Math.min(i,o),u=Math.max(i,o);if(e.invert)a={start:s,end:u};else{for(var l=[],h=e.domain(),d=s;d<=u;d+=1)l.push(h[d]);a={values:l}}return a}function v(e){if("undefined"!==typeof window&&window.TouchEvent&&e instanceof TouchEvent)return{pageX:e.touches[0].pageX,pageY:e.touches[0].pageY};var t=e;return{pageX:t.pageX,pageY:t.pageY}}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return w(M(t=e.call.apply(e,[this].concat(r))||this),"handleDragStart",(function(e){var n=t.props,r=n.onBrushHandleChange,a=n.type,i=n.onBrushStart;r&&r(a,v(e.event)),i&&i(e)})),w(M(t),"handleDragMove",(function(e){var n=t.props,r=n.updateBrush,a=n.type,i=n.isControlled;e.isDragging&&!i&&r((function(t){var n=t.start,r=t.end,i=0,o=Math.max(n.x,r.x),s=Math.min(n.x,r.x),u=Math.max(n.y,r.y),l=Math.min(n.y,r.y);switch(a){case"right":return i=o+e.dx,b({},t,{activeHandle:a,extent:b({},t.extent,{x0:Math.max(Math.min(i,n.x),t.bounds.x0),x1:Math.min(Math.max(i,n.x),t.bounds.x1)})});case"left":return i=s+e.dx,b({},t,{activeHandle:a,extent:b({},t.extent,{x0:Math.min(i,r.x),x1:Math.max(i,r.x)})});case"bottom":return i=u+e.dy,b({},t,{activeHandle:a,extent:b({},t.extent,{y0:Math.min(i,n.y),y1:Math.max(i,n.y)})});case"top":return i=l+e.dy,b({},t,{activeHandle:a,extent:b({},t.extent,{y0:Math.min(i,r.y),y1:Math.max(i,r.y)})});default:return t}}))})),w(M(t),"handleDragEnd",(function(){var e=t.props,n=e.updateBrush,r=e.onBrushEnd,a=e.onBrushHandleChange;e.isControlled||n((function(e){var t=e.start,n=e.end,a=e.extent;t.x=Math.min(a.x0,a.x1),t.y=Math.min(a.y0,a.y0),n.x=Math.max(a.x0,a.x1),n.y=Math.max(a.y0,a.y1);var i=b({},e,{start:t,end:n,activeHandle:null,isBrushing:!1,extent:{x0:Math.min(t.x,n.x),x1:Math.max(t.x,n.x),y0:Math.min(t.y,n.y),y1:Math.max(t.y,n.y)}});return r&&r(i),i})),a&&a()})),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.stageWidth,n=e.stageHeight,r=e.brush,a=e.type,i=e.handle,s=e.isControlled,u=e.isDragInProgress,l=i.x,h=i.y,d=i.width,c=i.height,f="right"===a||"left"===a?"ew-resize":"ns-resize";return o.a.createElement(x.a,{width:t,height:n,onDragStart:this.handleDragStart,onDragMove:this.handleDragMove,onDragEnd:this.handleDragEnd,resetOnStart:!0,isDragging:s?u:void 0},(function(e){var i=e.dragStart,u=e.dragEnd,g=e.dragMove,p=e.isDragging;return o.a.createElement("g",null,p&&o.a.createElement("rect",{fill:"transparent",width:t,height:n,style:{cursor:f},onPointerMove:g,onPointerUp:s?void 0:u,onPointerLeave:s?void 0:u}),o.a.createElement("rect",{x:l,y:h,width:d,height:c,fill:"transparent",className:"visx-brush-handle-"+a,onPointerDown:i,onPointerMove:g,onPointerUp:s?void 0:u,style:{cursor:f,pointerEvents:r.activeHandle||r.isBrushing?"none":"all"}}))}))},r}(o.a.Component);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}w(O,"propTypes",{stageWidth:c.a.number.isRequired,stageHeight:c.a.number.isRequired,updateBrush:c.a.func.isRequired,onBrushStart:c.a.func,onBrushEnd:c.a.func,handle:c.a.shape({x:c.a.number.isRequired,y:c.a.number.isRequired,width:c.a.number.isRequired,height:c.a.number.isRequired}).isRequired,isControlled:c.a.bool,isDragInProgress:c.a.bool,onBrushHandleChange:c.a.func});var D=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return B(E(t=e.call.apply(e,[this].concat(r))||this),"cornerDragMove",(function(e){var n=t.props,r=n.updateBrush,a=n.type;e.isDragging&&r((function(t){var n=t.start,r=t.end,i=Math.max(n.x,r.x),o=Math.min(n.x,r.x),s=Math.max(n.y,r.y),u=Math.min(n.y,r.y),l=0,h=0;switch(a){case"topRight":return l=i+e.dx,h=u+e.dy,S({},t,{activeHandle:a,extent:S({},t.extent,{x0:Math.max(Math.min(l,n.x),t.bounds.x0),x1:Math.min(Math.max(l,n.x),t.bounds.x1),y0:Math.max(Math.min(h,r.y),t.bounds.y0),y1:Math.min(Math.max(h,r.y),t.bounds.y1)})});case"topLeft":return l=o+e.dx,h=u+e.dy,S({},t,{activeHandle:a,extent:S({},t.extent,{x0:Math.max(Math.min(l,r.x),t.bounds.x0),x1:Math.min(Math.max(l,r.x),t.bounds.x1),y0:Math.max(Math.min(h,r.y),t.bounds.y0),y1:Math.min(Math.max(h,r.y),t.bounds.y1)})});case"bottomLeft":return l=o+e.dx,h=s+e.dy,S({},t,{activeHandle:a,extent:S({},t.extent,{x0:Math.max(Math.min(l,r.x),t.bounds.x0),x1:Math.min(Math.max(l,r.x),t.bounds.x1),y0:Math.max(Math.min(h,n.y),t.bounds.y0),y1:Math.min(Math.max(h,n.y),t.bounds.y1)})});case"bottomRight":return l=i+e.dx,h=s+e.dy,S({},t,{activeHandle:a,extent:S({},t.extent,{x0:Math.max(Math.min(l,n.x),t.bounds.x0),x1:Math.min(Math.max(l,n.x),t.bounds.x1),y0:Math.max(Math.min(h,n.y),t.bounds.y0),y1:Math.min(Math.max(h,n.y),t.bounds.y1)})});default:return t}}))})),B(E(t),"cornerDragEnd",(function(){var e=t.props,n=e.updateBrush,r=e.onBrushEnd;n((function(e){var t=e.start,n=e.end,a=e.extent;t.x=Math.min(a.x0,a.x1),t.y=Math.min(a.y0,a.y0),n.x=Math.max(a.x0,a.x1),n.y=Math.max(a.y0,a.y1);var i=S({},e,{start:t,end:n,activeHandle:null,domain:{x0:Math.min(t.x,n.x),x1:Math.max(t.x,n.x),y0:Math.min(t.y,n.y),y1:Math.max(t.y,n.y)}});return r&&r(i),i}))})),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.type,n=e.brush,r=e.stageWidth,a=e.stageHeight,i=e.style,s=e.corner,u=(null==i?void 0:i.cursor)||("topLeft"===t||"bottomRight"===t?"nwse-resize":"nesw-resize"),l=n.activeHandle||n.isBrushing?"none":"all";return o.a.createElement(x.a,{width:r,height:a,onDragMove:this.cornerDragMove,onDragEnd:this.cornerDragEnd,resetOnStart:!0},(function(e){var n=e.dragMove,h=e.dragEnd,d=e.dragStart,c=e.isDragging;return o.a.createElement("g",null,c&&o.a.createElement("rect",{fill:"transparent",width:r,height:a,style:{cursor:u},onPointerMove:n,onPointerUp:h}),o.a.createElement("rect",S({fill:"transparent",onPointerDown:d,onPointerMove:n,onPointerUp:h,className:"visx-brush-corner-"+t,style:S({cursor:u,pointerEvents:l},i)},s)))}))},r}(o.a.Component);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}B(D,"propTypes",{stageWidth:c.a.number.isRequired,stageHeight:c.a.number.isRequired,updateBrush:c.a.func.isRequired,onBrushEnd:c.a.func,corner:c.a.shape({x:c.a.number.isRequired,y:c.a.number.isRequired,width:c.a.number.isRequired,height:c.a.number.isRequired}).isRequired}),B(D,"defaultProps",{style:{}});var k={cursor:"move"},R=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return C(P(t=e.call.apply(e,[this].concat(r))||this),"selectionDragStart",(function(e){var n=t.props,r=n.onMoveSelectionChange,a=n.onBrushStart;r&&r("move",v(e.event)),a&&a(e)})),C(P(t),"selectionDragMove",(function(e){var n=t.props,r=n.updateBrush;n.isControlled||r((function(t){var n=t.start,r=n.x,a=n.y,i=t.end,o=i.x,s=i.y,u=e.dx>0?Math.min(e.dx,t.bounds.x1-o):Math.max(e.dx,t.bounds.x0-r),l=e.dy>0?Math.min(e.dy,t.bounds.y1-s):Math.max(e.dy,t.bounds.y0-a);return j({},t,{isBrushing:!0,extent:j({},t.extent,{x0:r+u,x1:o+u,y0:a+l,y1:s+l})})}))})),C(P(t),"selectionDragEnd",(function(){var e=t.props,n=e.updateBrush,r=e.onBrushEnd,a=e.onMoveSelectionChange;e.isControlled||n((function(e){var t=j({},e,{isBrushing:!1,start:j({},e.start,{x:Math.min(e.extent.x0,e.extent.x1),y:Math.min(e.extent.y0,e.extent.y1)}),end:j({},e.end,{x:Math.max(e.extent.x0,e.extent.x1),y:Math.max(e.extent.y0,e.extent.y1)})});return r&&r(t),t})),a&&a()})),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.width,n=e.height,r=e.stageWidth,a=e.stageHeight,i=e.brush,s=e.disableDraggingSelection,u=e.onMouseLeave,l=e.onMouseMove,h=e.onMouseUp,d=e.onClick,c=e.selectedBoxStyle,f=e.isControlled,g=e.isDragInProgress;return o.a.createElement(x.a,{width:t,height:n,resetOnStart:!0,onDragStart:this.selectionDragStart,onDragMove:this.selectionDragMove,onDragEnd:this.selectionDragEnd,isDragging:f?g:void 0},(function(e){var g=e.isDragging,p=e.dragStart,x=e.dragEnd,y=e.dragMove;return o.a.createElement("g",null,g&&o.a.createElement("rect",{width:r,height:a,fill:"transparent",onPointerUp:f?void 0:x,onPointerMove:y,onPointerLeave:f?void 0:x,style:k}),o.a.createElement("rect",j({x:Math.min(i.extent.x0,i.extent.x1),y:Math.min(i.extent.y0,i.extent.y1),width:t,height:n,className:"visx-brush-selection",onPointerDown:s?void 0:p,onPointerLeave:function(e){u&&u(e)},onPointerMove:function(e){y(e),l&&l(e)},onPointerUp:function(e){f||x(e),h&&h(e)},onClick:function(e){d&&d(e)},style:{pointerEvents:i.isBrushing||i.activeHandle?"none":"all",cursor:s?void 0:"move"}},c)))}))},r}(o.a.Component);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}C(R,"propTypes",{width:c.a.number.isRequired,height:c.a.number.isRequired,stageWidth:c.a.number.isRequired,stageHeight:c.a.number.isRequired,updateBrush:c.a.func.isRequired,onMoveSelectionChange:c.a.func,onBrushStart:c.a.func,onBrushEnd:c.a.func,disableDraggingSelection:c.a.bool.isRequired,onMouseLeave:c.a.func,onMouseMove:c.a.func,onMouseUp:c.a.func,onClick:c.a.func,isControlled:c.a.bool,isDragInProgress:c.a.bool}),C(R,"defaultProps",{onMouseLeave:null,onMouseUp:null,onMouseMove:null,onClick:null});var T={cursor:"crosshair"},q=function(e){var t,n;function r(t){var n;L(_(n=e.call(this,t)||this),"mouseUpTime",0),L(_(n),"mouseDownTime",0),L(_(n),"handleWindowPointerUp",(function(){var e=n.props,t=e.useWindowMoveEvents,r=e.onBrushEnd,a=e.resetOnEnd,i=n.state.brushingType;t&&i&&n.updateBrush((function(e){var t=e.start,i=e.end,o=e.extent;t.x=Math.min(o.x0,o.x1),t.y=Math.min(o.y0,o.y0),i.x=Math.max(o.x0,o.x1),i.y=Math.max(o.y0,o.y1);var s=A({},e,{activeHandle:null,isBrushing:!1,brushingType:void 0});return r&&r(s),a&&n.reset(),s}))})),L(_(n),"handleWindowPointerMove",(function(e){var t=n.props.useWindowMoveEvents,r=n.state,a=r.brushingType,i=r.isBrushing,o=r.brushPageOffset,s=r.start;if(t&&i){var u=e.pageX-((null==o?void 0:o.pageX)||0),l=e.pageY-((null==o?void 0:o.pageY)||0);["left","right","top","bottom"].includes(null!=a?a:"")&&n.updateBrush((function(e){var t=e.start,r=t.x,i=t.y,o=e.end,s=o.x,h=o.y;return A({},e,{isBrushing:!0,extent:A({},e.extent,n.getExtent({x:"left"===a?Math.min(Math.max(r+u,e.bounds.x0),e.bounds.x1):r,y:"bottom"===a?Math.min(Math.max(i+l,e.bounds.y0),e.bounds.y1):i},{x:"right"===a?Math.min(Math.max(s+u,e.bounds.x0),e.bounds.x1):s,y:"bottom"===a?Math.min(Math.max(h+l,e.bounds.y0),e.bounds.y1):h}))})})),"move"===a&&n.updateBrush((function(e){var t=e.start,n=t.x,r=t.y,a=e.end,i=a.x,o=a.y,s=u>0?Math.min(u,e.bounds.x1-i):Math.max(u,e.bounds.x0-n),h=l>0?Math.min(l,e.bounds.y1-o):Math.max(l,e.bounds.y0-r);return A({},e,{isBrushing:!0,extent:A({},e.extent,{x0:n+s,y0:r+h,x1:i+s,y1:o+h})})})),"select"===a&&n.updateBrush((function(e){var t=e.start,r=t.x,a=t.y,i={x:Math.min(Math.max(r+u,e.bounds.x0),e.bounds.x1),y:Math.min(Math.max(a+l,e.bounds.y0),e.bounds.y1)};return A({},e,{end:i,extent:n.getExtent(s,i)})}))}})),L(_(n),"getExtent",(function(e,t){var r=n.props,a=r.brushDirection,i=r.width,o=r.height;return{x0:"vertical"===a?0:Math.min(e.x||0,t.x||0),x1:"vertical"===a?i:Math.max(e.x||0,t.x||0),y0:"horizontal"===a?0:Math.min(e.y||0,t.y||0),y1:"horizontal"===a?o:Math.max(e.y||0,t.y||0)}})),L(_(n),"handleDragStart",(function(e){var t=n.props,r=t.onBrushStart,a=t.left,i=t.top,o=t.inheritedMargin,s=t.useWindowMoveEvents,u=(null==o?void 0:o.left)?o.left:0,l=(null==o?void 0:o.top)?o.top:0,h={x:(e.x||0)+e.dx-a-u,y:(e.y||0)+e.dy-i-l},d=A({},h);r&&r(h),n.updateBrush((function(t){return A({},t,{start:h,end:d,extent:{x0:-1,x1:-1,y0:-1,y1:-1},isBrushing:!0,brushingType:"select",brushPageOffset:s?v(e.event):void 0})}))})),L(_(n),"handleBrushStart",(function(e){var t=n.props,r=t.onBrushStart,a=t.left,i=t.top,o=t.inheritedMargin;if(r){var s=(null==o?void 0:o.left)?o.left:0,u=(null==o?void 0:o.top)?o.top:0;r({x:(e.x||0)+e.dx-a-s,y:(e.y||0)+e.dy-i-u})}})),L(_(n),"handleDragMove",(function(e){var t=n.props,r=t.left,a=t.top,i=t.inheritedMargin,o=t.useWindowMoveEvents;if(e.isDragging&&!o){var s=(null==i?void 0:i.left)||0,u=(null==i?void 0:i.top)||0,l={x:(e.x||0)+e.dx-r-s,y:(e.y||0)+e.dy-a-u};n.updateBrush((function(e){var t=e.start,r=n.getExtent(t,l);return A({},e,{end:l,extent:r})}))}})),L(_(n),"handleDragEnd",(function(){var e=n.props,t=e.onBrushEnd,r=e.resetOnEnd;e.useWindowMoveEvents||n.updateBrush((function(e){var a=e.extent,i=A({},e,{start:{x:a.x0,y:a.y0},end:{x:a.x1,y:a.y1},isBrushing:!1,brushingType:void 0,activeHandle:null});return t&&t(i),r&&n.reset(),i}))})),L(_(n),"getBrushWidth",(function(){var e=n.state.extent,t=e.x0,r=e.x1;return Math.max(Math.max(t,r)-Math.min(t,r),0)})),L(_(n),"getBrushHeight",(function(){var e=n.state.extent,t=e.y1,r=e.y0;return Math.max(Math.max(r,t)-Math.min(r,t),0)})),L(_(n),"handles",(function(){var e=n.props.handleSize,t=n.state.extent,r=t.x0,a=t.x1,i=t.y0,o=t.y1,s=e/2,u=n.getBrushWidth(),l=n.getBrushHeight();return{top:{x:r-s,y:i-s,height:e,width:u+e},bottom:{x:r-s,y:o-s,height:e,width:u+e},right:{x:a-s,y:i-s,height:l+e,width:e},left:{x:r-s,y:i-s,height:l+e,width:e}}})),L(_(n),"corners",(function(){var e=n.props.handleSize,t=n.state.extent,r=t.x0,a=t.x1,i=t.y0,o=t.y1,s=e/2,u=e,l=e;return{topLeft:{x:Math.min(r,a)-s,y:Math.min(i,o)-s,width:u,height:l},topRight:{x:Math.max(r,a)-s,y:Math.min(i,o)-s,width:u,height:l},bottomLeft:{x:Math.min(r,a)-s,y:Math.max(i,o)-s,width:u,height:l},bottomRight:{x:Math.max(r,a)-s,y:Math.max(i,o)-s,width:u,height:l}}})),L(_(n),"updateBrush",(function(e){var t=n.props.onChange;n.setState(e,(function(){t&&t(n.state)}))})),L(_(n),"reset",(function(){var e=n.props,t=e.width,r=e.height;n.updateBrush((function(){return{start:{x:0,y:0},end:{x:0,y:0},extent:{x0:-1,x1:-1,y0:-1,y1:-1},bounds:{x0:0,x1:t,y0:0,y1:r},isBrushing:!1,brushPageOffset:void 0,activeHandle:null,brushingType:void 0}}))})),L(_(n),"handleBrushingTypeChange",(function(e,t){n.updateBrush((function(n){var r=A({},n,{brushingType:e,isBrushing:void 0!==e});return(t||void 0===e)&&(r.brushPageOffset=t),r}))}));var r=t.initialBrushPosition,a=r?n.getExtent(r.start,r.end):{x0:-1,x1:-1,y0:-1,y1:-1};return n.state={start:{x:Math.max(0,a.x0),y:Math.max(0,a.y0)},end:{x:Math.max(0,a.x1),y:Math.max(0,a.y1)},extent:a,bounds:{x0:0,x1:n.props.width,y0:0,y1:n.props.height},isBrushing:!1,brushingType:void 0,activeHandle:null},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentDidUpdate=function(e){var t=this;this.props.width===e.width&&this.props.height===e.height||this.setState((function(){return{bounds:{x0:0,x1:t.props.width,y0:0,y1:t.props.height}}}))},a.componentDidMount=function(){this.props.useWindowMoveEvents&&(window.addEventListener("mouseup",this.handleWindowPointerUp),window.addEventListener("mousemove",this.handleWindowPointerMove))},a.componentWillUnmount=function(){this.props.useWindowMoveEvents&&(window.removeEventListener("mouseup",this.handleWindowPointerUp),window.removeEventListener("mousemove",this.handleWindowPointerMove))},a.render=function(){var e=this,t=this.state,n=t.start,r=t.end,a=this.props,i=a.top,s=a.left,u=a.width,l=a.height,h=a.onMouseLeave,d=a.onMouseUp,c=a.onMouseMove,p=a.onBrushEnd,y=a.onClick,m=a.resizeTriggerAreas,v=a.selectedBoxStyle,b=a.disableDraggingSelection,M=a.clickSensitivity,w=a.useWindowMoveEvents,S=this.state.brushingType,E=this.handles(),B=this.corners(),j=this.getBrushWidth(),P=this.getBrushHeight(),C=new Set(m);return o.a.createElement(f.a,{className:"visx-brush",top:i,left:s},o.a.createElement(x.a,{width:u,height:l,resetOnStart:!0,onDragStart:this.handleDragStart,onDragMove:this.handleDragMove,onDragEnd:this.handleDragEnd,isDragging:w?"select"===S:void 0},(function(t){var n=t.dragStart,r=t.isDragging,a=t.dragMove,i=t.dragEnd;return o.a.createElement(g.a,{className:"visx-brush-overlay",fill:"transparent",x:0,y:0,width:u,height:l,onDoubleClick:function(){return e.reset()},onClick:function(t){var n=e.mouseUpTime-e.mouseDownTime;y&&n<M&&y(t)},onPointerDown:function(t){e.mouseDownTime=Date.now(),n(t)},onPointerLeave:function(e){h&&h(e)},onPointerMove:function(e){!r&&c&&c(e),r&&a(e)},onPointerUp:function(t){e.mouseUpTime=Date.now(),d&&d(t),i(t)},style:T})})),n&&r&&o.a.createElement(R,{updateBrush:this.updateBrush,width:j,height:P,stageWidth:u,stageHeight:l,brush:this.state,disableDraggingSelection:b,onBrushEnd:p,onBrushStart:this.handleBrushStart,onMouseLeave:h,onMouseMove:c,onMouseUp:d,onMoveSelectionChange:this.handleBrushingTypeChange,onClick:y,selectedBoxStyle:v,isControlled:w,isDragInProgress:w?"move"===S:void 0}),n&&r&&Object.keys(E).filter((function(e){return C.has(e)})).map((function(t){var n=E[t];return n&&o.a.createElement(O,{key:"handle-"+t,type:t,handle:n,stageWidth:u,stageHeight:l,updateBrush:e.updateBrush,brush:e.state,onBrushStart:e.handleBrushStart,onBrushEnd:p,isControlled:w,isDragInProgress:w?S===t:void 0,onBrushHandleChange:e.handleBrushingTypeChange})})),n&&r&&Object.keys(B).filter((function(e){return C.has(e)})).map((function(t){var n=B[t];return n&&o.a.createElement(D,{key:"corner-"+t,type:t,brush:e.state,updateBrush:e.updateBrush,stageWidth:u,stageHeight:l,corner:n,onBrushEnd:p})})))},r}(o.a.Component);function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}L(q,"propTypes",{brushDirection:c.a.oneOf(["horizontal","vertical","both"]),width:c.a.number.isRequired,height:c.a.number.isRequired,left:c.a.number.isRequired,top:c.a.number.isRequired,onChange:c.a.func,handleSize:c.a.number,resizeTriggerAreas:c.a.array,onBrushStart:c.a.func,onBrushEnd:c.a.func,onMouseLeave:c.a.func,onMouseUp:c.a.func,onMouseMove:c.a.func,onClick:c.a.func,clickSensitivity:c.a.number,disableDraggingSelection:c.a.bool,resetOnEnd:c.a.bool,useWindowMoveEvents:c.a.bool}),L(q,"defaultProps",{brushDirection:"both",inheritedMargin:{left:0,top:0,right:0,bottom:0},onChange:null,handleSize:4,resizeTriggerAreas:["left","right"],onBrushStart:null,onBrushEnd:null,onMouseLeave:null,onMouseUp:null,onMouseMove:null,onClick:null,disableDraggingSelection:!1,clickSensitivity:200,resetOnEnd:!1,initialBrushPosition:null,useWindowMoveEvents:!1});var H=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return z(W(t=e.call.apply(e,[this].concat(r))||this),"handleChange",(function(e){var n=t.props.onChange;if(n){var r=e.extent.x0;if("undefined"===typeof r||r<0)n(null);else n(t.convertRangeToDomain(e))}})),z(W(t),"handleBrushStart",(function(e){var n=t.props.onBrushStart;if(n){var r=e.x,a=e.y,i=t.props,o=i.xScale,s=i.yScale,u=y(o,r),l=y(s,a);n({x:o.invert?u:o.domain()[u],y:s.invert?l:s.domain()[l]})}})),z(W(t),"handleBrushEnd",(function(e){var n=t.props.onBrushEnd;if(n){var r=e.extent.x0;if("undefined"===typeof r||r<0)n(null);else n(t.convertRangeToDomain(e))}})),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.convertRangeToDomain=function(e){var t=this.props,n=t.xScale,r=t.yScale,a=e.extent,i=a.x0,o=a.x1,s=a.y0,u=a.y1,l=m(n,i||0,o||0,2),h=m(r,s||0,u||0,2);return{x0:l.start||0,x1:l.end||0,xValues:l.values,y0:h.start||0,y1:h.end||0,yValues:h.values}},a.render=function(){var e,t,n,r,a=this.props,i=a.xScale,s=a.yScale,u=a.height,l=a.width,h=a.margin,d=a.brushDirection,c=a.initialBrushPosition,f=a.innerRef,g=a.resizeTriggerAreas,p=a.brushRegion,x=a.yAxisOrientation,y=a.xAxisOrientation,m=a.selectedBoxStyle,v=a.disableDraggingSelection,b=a.resetOnEnd,M=a.onMouseLeave,w=a.onMouseMove,O=a.onClick,S=a.handleSize,E=a.useWindowMoveEvents;if(!i||!s)return null;var B=h&&h.left?h.left:0,D=h&&h.top?h.top:0,j=h&&h.right?h.right:0,P=h&&h.bottom?h.bottom:0;return"chart"===p?(n=0,r=0,e=l,t=u):"yAxis"===p?(r=0,t=u,"right"===x?(n=l,e=j):(n=-B,e=B)):(n=0,e=l,"bottom"===y?(r=u,t=P):(r=-D,t=D)),o.a.createElement(q,{width:e,height:t,left:n,top:r,brushDirection:d,disableDraggingSelection:v,handleSize:S,inheritedMargin:h,initialBrushPosition:c,ref:f,resetOnEnd:b,resizeTriggerAreas:g,selectedBoxStyle:m,onBrushEnd:this.handleBrushEnd,onBrushStart:this.handleBrushStart,onChange:this.handleChange,onClick:O,onMouseLeave:M,onMouseMove:w,useWindowMoveEvents:E})},r}(i.Component);z(H,"propTypes",{height:c.a.number,width:c.a.number,onChange:c.a.func,onBrushEnd:c.a.func,brushDirection:c.a.oneOf(["vertical","horizontal","both"]),resizeTriggerAreas:c.a.array,brushRegion:c.a.oneOf(["xAxis","yAxis","chart"]),yAxisOrientation:c.a.oneOf(["left","right"]),xAxisOrientation:c.a.oneOf(["top","bottom"]),disableDraggingSelection:c.a.bool,resetOnEnd:c.a.bool,handleSize:c.a.number,useWindowMoveEvents:c.a.bool}),z(H,"defaultProps",{xScale:null,yScale:null,onChange:null,height:0,width:0,selectedBoxStyle:{fill:"steelblue",fillOpacity:.2,stroke:"steelblue",strokeWidth:1,strokeOpacity:.8},margin:{top:0,left:0,right:0,bottom:0},handleSize:4,brushDirection:"horizontal",initialBrushPosition:null,resizeTriggerAreas:["left","right"],brushRegion:"chart",yAxisOrientation:"right",xAxisOrientation:"bottom",onBrushStart:null,onBrushEnd:null,disableDraggingSelection:!1,resetOnEnd:!1,onMouseMove:null,onMouseLeave:null,onClick:null,useWindowMoveEvents:!1});var N=H,U=n("a49c"),V=n("Cf/J"),I=n("ue4z"),Y=n("9Jhr"),F=n("a7GN"),J=n("KRsa"),K=n("EbDF"),X={textAnchor:"middle",fontFamily:"Arial",fontSize:10,fill:"#fff"},G={dx:"-0.25em",dy:"0.25em",fontFamily:"Arial",fontSize:10,textAnchor:"end",fill:"#fff"};function Q(e){var t=e.data,n=e.gradientColor,r=e.width,i=e.yMax,o=e.margin,s=e.xScale,u=e.yScale,l=e.hideBottomAxis,h=void 0!==l&&l,d=e.hideLeftAxis,c=void 0!==d&&d,g=e.top,p=e.left,x=e.children;return r<10?null:Object(a.jsxs)(f.a,{left:p||o.left,top:g||o.top,children:[Object(a.jsx)(V.a,{id:"gradient",from:n,fromOpacity:1,to:n,toOpacity:.2}),Object(a.jsx)(Y.a,{data:t,x:function(e){return s(function(e){return new Date(e.date)}(e))||0},y:function(e){return u(function(e){return e.close}(e))||0},yScale:u,strokeWidth:1,stroke:"url(#gradient)",fill:"url(#gradient)",curve:K.a}),!h&&Object(a.jsx)(F.a,{top:i,scale:s,numTicks:r>520?10:5,stroke:"#fff",tickStroke:"#fff",tickLabelProps:function(){return X}}),!c&&Object(a.jsx)(J.a,{scale:u,numTicks:5,stroke:"#fff",tickStroke:"#fff",tickLabelProps:function(){return G}}),x]})}try{Q.displayName="AreaChart",Q.__docgenInfo={description:"",displayName:"AreaChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"AppleStock[]"}},gradientColor:{defaultValue:null,description:"",name:"gradientColor",required:!0,type:{name:"string"}},xScale:{defaultValue:null,description:"",name:"xScale",required:!0,type:{name:"ScaleRadial<number, number, never> | ScaleTime<number, number, never> | ScaleLinear<number, number, never> | ScaleLogarithmic<number, number, never> | ... 7 more ... | ScaleOrdinal<...>"}},yScale:{defaultValue:null,description:"",name:"yScale",required:!0,type:{name:"ScaleRadial<number, number, never> | ScaleTime<number, number, never> | ScaleLinear<number, number, never> | ScaleLogarithmic<number, number, never> | ... 7 more ... | ScaleOrdinal<...>"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},yMax:{defaultValue:null,description:"",name:"yMax",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!0,type:{name:"{ top: number; right: number; bottom: number; left: number; }"}},hideBottomAxis:{defaultValue:{value:!1},description:"",name:"hideBottomAxis",required:!1,type:{name:"boolean | undefined"}},hideLeftAxis:{defaultValue:{value:!1},description:"",name:"hideLeftAxis",required:!1,type:{name:"boolean | undefined"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"number | undefined"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"number | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-brush/AreaChart.tsx#AreaChart"]={docgenInfo:Q.__docgenInfo,name:"AreaChart",path:"src/sandboxes/visx-brush/AreaChart.tsx#AreaChart"})}catch(ue){}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=h.a.slice(1e3),te={top:10,bottom:15,left:50,right:20},ne="#f6acc8",re="#584153",ae={fill:"url(#".concat("brush_pattern",")"),stroke:"white"},ie=function(e){return new Date(e.date)},oe=function(e){return e.close};function se(e){var t=e.compact,n=void 0!==t&&t,r=e.width,o=e.height,l=e.margin,h=void 0===l?{top:20,left:50,bottom:20,right:20}:l,d=Object(i.useRef)(null),c=Object(i.useState)(ee),f=c[0],g=c[1],p=o-h.top-h.bottom,x=n?15:40,y=.8*p-x,m=p-y-30,v=Math.max(r-h.left-h.right,0),b=Math.max(y,0),M=Math.max(r-te.left-te.right,0),w=Math.max(m-te.top-te.bottom,0),O=Object(i.useMemo)((function(){return Object(s.a)({range:[0,v],domain:Object(I.b)(f,ie)})}),[v,f]),S=Object(i.useMemo)((function(){return Object(u.a)({range:[b,0],domain:[0,Object(I.c)(f,oe)||0],nice:!0})}),[b,f]),E=Object(i.useMemo)((function(){return Object(s.a)({range:[0,M],domain:Object(I.b)(ee,ie)})}),[M]),B=Object(i.useMemo)((function(){return Object(u.a)({range:[w,0],domain:[0,Object(I.c)(ee,oe)||0],nice:!0})}),[w]),D=Object(i.useMemo)((function(){return{start:{x:E(ie(ee[50]))},end:{x:E(ie(ee[100]))}}}),[E]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("svg",{width:r,height:o,children:[Object(a.jsx)(V.a,{id:"brush_gradient",from:re,to:"#af8baf",rotate:45}),Object(a.jsx)("rect",{x:0,y:0,width:r,height:o,fill:"url(#".concat("brush_gradient",")"),rx:14}),Object(a.jsx)(Q,{hideBottomAxis:n,data:f,width:r,margin:$($({},h),{},{bottom:x}),yMax:b,xScale:O,yScale:S,gradientColor:"#af8baf"}),Object(a.jsxs)(Q,{hideBottomAxis:!0,hideLeftAxis:!0,data:ee,width:r,yMax:w,xScale:E,yScale:B,margin:te,top:y+x+h.top,gradientColor:"#af8baf",children:[Object(a.jsx)(U.a,{id:"brush_pattern",height:8,width:8,stroke:ne,strokeWidth:1,orientation:["diagonal"]}),Object(a.jsx)(N,{xScale:E,yScale:B,width:M,height:w,margin:te,handleSize:8,innerRef:d,resizeTriggerAreas:["left","right"],brushDirection:"horizontal",initialBrushPosition:D,onChange:function(e){if(e){var t=e.x0,n=e.x1,r=e.y0,a=e.y1,i=ee.filter((function(e){var i=ie(e).getTime(),o=oe(e);return i>t&&i<n&&o>r&&o<a}));g(i)}},onClick:function(){return g(ee)},selectedBoxStyle:ae,useWindowMoveEvents:!0})]})]}),Object(a.jsx)("button",{onClick:function(){(null===d||void 0===d?void 0:d.current)&&(g(ee),d.current.reset())},children:"Clear"}),"\xa0",Object(a.jsx)("button",{onClick:function(){if(null===d||void 0===d?void 0:d.current){d.current.updateBrush((function(e){var t=d.current.getExtent(D.start,D.end);return $($({},e),{},{start:{y:t.y0,x:t.x0},end:{y:t.y1,x:t.x1},extent:t})}))}},children:"Reset"})]})}t.c=se;try{se.displayName="BrushChart",se.__docgenInfo={description:"",displayName:"BrushChart",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:{value:"{\n    top: 20,\n    left: 50,\n    bottom: 20,\n    right: 20,\n  }"},description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},compact:{defaultValue:{value:!1},description:"",name:"compact",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-brush/Example.tsx#BrushChart"]={docgenInfo:se.__docgenInfo,name:"BrushChart",path:"src/sandboxes/visx-brush/Example.tsx#BrushChart"})}catch(ue){}},KRsa:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),s=n("5Nbk"),u=n("pn27");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=function(){return{dx:"-0.25em",dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"end"}};function d(e){var t=e.axisClassName,n=e.labelOffset,r=void 0===n?36:n,i=e.tickLabelProps,d=void 0===i?h:i,c=e.tickLength,f=void 0===c?8:c,g=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return a.a.createElement(s.a,l({axisClassName:o()("visx-axis-left",t),labelOffset:r,orientation:u.a.left,tickLabelProps:d,tickLength:f},g))}},LpNs:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=void 0===e?{}:e,n=t.resetOnStart,r=void 0!==n&&n,u=t.onDragEnd,l=t.onDragMove,h=t.onDragStart,d=t.x,c=t.y,f=t.dx,g=t.dy,p=t.isDragging,x=(0,a.useRef)({x:d,y:c,dx:f,dy:g}),y=(0,o.default)({x:d,y:c,dx:null!=f?f:0,dy:null!=g?g:0,isDragging:!1}),m=y[0],v=y[1];(0,a.useEffect)((function(){x.current.x===d&&x.current.y===c&&x.current.dx===f&&x.current.dy===g||(x.current={x:d,y:c,dx:f,dy:g},v((function(e){return s({},e,{x:d,y:c,dx:null!=f?f:0,dy:null!=g?g:0})})))})),(0,a.useEffect)((function(){void 0!==p&&m.isDragging!==p&&v((function(e){return s({},e,{isDragging:p})}))}),[m.isDragging,p,v]);var b=(0,a.useCallback)((function(e){e.persist(),v((function(t){var n=(0,i.localPoint)(e)||{x:0,y:0};return{isDragging:!0,dx:r?0:t.dx,dy:r?0:t.dy,x:r?n.x:n.x-t.dx,y:r?n.y:n.y-t.dy}}),h&&function(t){h(s({},t,{event:e}))})}),[h,r,v]),M=(0,a.useCallback)((function(e){e.persist(),v((function(t){var n=(0,i.localPoint)(e)||{x:0,y:0};return t.isDragging?s({},t,{isDragging:!0,dx:n.x-(t.x||0),dy:n.y-(t.y||0)}):t}),l&&function(t){t.isDragging&&l(s({},t,{event:e}))})}),[l,v]),w=(0,a.useCallback)((function(e){e.persist(),v((function(e){return s({},e,{isDragging:!1})}),u&&function(t){u(s({},t,{event:e}))})}),[u,v]);return s({},m,{dragEnd:w,dragMove:M,dragStart:b})};var r,a=n("ERkP"),i=n("MiVw"),o=(r=n("NzS/"))&&r.__esModule?r:{default:r};function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},MiVw:function(e,t,n){"use strict";n.r(t);var r=n("jpI8");n.d(t,"localPoint",(function(){return r.a}));var a=n("VB+g");n.d(t,"touchPoint",(function(){return a.a}))},MrGM:function(e){e.exports=JSON.parse('{"name":"@visx/demo-brush","description":"Standalone visx brush demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/axis":"latest","@visx/brush":"latest","@visx/curve":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/pattern":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.4.0","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","brush","interaction"]}')},"NzS/":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=(0,r.useState)(e),n=t[0],a=t[1],i=(0,r.useRef)(null),o=(0,r.useCallback)((function(e,t){i.current=t||null,a(e)}),[a]);return(0,r.useLayoutEffect)((function(){i.current&&(i.current(n),i.current=null)}),[n]),[n,o]};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("ERkP"));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}},a7GN:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),s=n("5Nbk"),u=n("pn27");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=function(){return{dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"middle"}};function d(e){var t=e.axisClassName,n=e.labelOffset,r=void 0===n?8:n,i=e.tickLabelProps,d=void 0===i?h:i,c=e.tickLength,f=void 0===c?8:c,g=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return a.a.createElement(s.a,l({axisClassName:o()("visx-axis-bottom",t),labelOffset:r,orientation:u.a.bottom,tickLabelProps:d,tickLength:f},g))}},wQia:function(e,t,n){"use strict";t.__esModule=!0,t.default=s;var r=o(n("aWzz")),a=o(n("ERkP")),i=o(n("LpNs"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.captureDragArea,n=void 0===t||t,r=e.children,o=e.dx,s=e.dy,u=e.height,l=e.onDragEnd,h=e.onDragMove,d=e.onDragStart,c=e.resetOnStart,f=e.width,g=e.x,p=e.y,x=e.isDragging,y=(0,i.default)({resetOnStart:c,onDragEnd:l,onDragMove:h,onDragStart:d,x:g,y:p,dx:o,dy:s,isDragging:x});return a.default.createElement(a.default.Fragment,null,y.isDragging&&n&&a.default.createElement("rect",{width:f,height:u,onPointerDown:y.dragStart,onPointerMove:y.dragMove,onPointerUp:y.dragEnd,fill:"transparent"}),r(y))}s.propTypes={children:r.default.func.isRequired,width:r.default.number.isRequired,height:r.default.number.isRequired,captureDragArea:r.default.bool,isDragging:r.default.bool}}}]);