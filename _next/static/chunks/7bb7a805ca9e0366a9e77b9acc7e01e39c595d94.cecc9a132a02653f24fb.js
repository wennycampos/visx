(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{"3Ng6":function(e){e.exports=JSON.parse('{"name":"@visx/demo-annotation","description":"Standalone visx annotation demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/annotation":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.8.0","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","annotation"]}')},HbGN:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}n.d(t,"a",(function(){return a}))},erk3:function(e,t,n){"use strict";n.d(t,"b",(function(){return _})),n.d(t,"a",(function(){return A}));var a=n("HbGN"),s=n("jg1C"),c=n("ERkP"),i=n("/GET"),o=n("Xr0V"),r=n("amCE"),l=n("tNN4"),d=n("geX1"),u=n("zjfJ"),j=n("yFcC"),x=n.n(j),b=n("oT5u"),p=n.n(b),h=n("cjvV"),m=n("67po"),O=n("ue4z"),f=n("xH1m"),y=n("5srZ");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=p.a.slice(-100),S=function(e){return new Date(e.date).valueOf()},C=function(e){return e.close},k=N[Math.floor(N.length/2)+4];function w(e){var t,n,a=e.width,i=e.height,o=e.compact,r=void 0!==o&&o,l=e.children,d=Object(c.useMemo)((function(){return Object(h.a)({domain:Object(O.b)(N,(function(e){return S(e)})),range:[0,a]})}),[a]),u=Object(c.useMemo)((function(){return Object(m.a)({domain:Object(O.b)(N,(function(e){return C(e)})),range:[i-100,100]})}),[i]),j=Object(c.useState)(!1),b=j[0],p=j[1],v=Object(c.useState)(!1),w=v[0],E=v[1],_=Object(c.useState)("Title"),A=_[0],T=_[1],P=Object(c.useState)(r?"Subtitle":"Subtitle with deets and deets and deets and deets"),V=P[0],z=P[1],D=Object(c.useState)("elbow"),L=D[0],R=D[1],q=Object(c.useState)("circle"),I=q[0],H=q[1],B=Object(c.useState)(!0),K=B[0],Y=B[1],J=Object(c.useState)("auto"),F=J[0],G=J[1],M=Object(c.useState)("auto"),W=M[0],X=M[1],Z=Object(c.useState)(r?100:175)[0],Q=Object(c.useState)({x:null!==(t=d(S(k)))&&void 0!==t?t:0,y:null!==(n=u(C(k)))&&void 0!==n?n:0,dx:r?-50:-100,dy:r?-30:-50}),U=Q[0],$=Q[1];return Object(c.useEffect)((function(){$((function(e){var t,n;return g(g({},e),{},{x:null!==(t=d(S(k)))&&void 0!==t?t:0,y:null!==(n=u(C(k)))&&void 0!==n?n:0})}))}),[d,u]),Object(s.jsxs)(s.Fragment,{children:[l({AnnotationComponent:b||w?f.a:y.a,annotationPosition:U,approxTooltipHeight:70,connectorType:L,data:N,editLabelPosition:b,editSubjectPosition:w,getDate:S,getStockValue:C,horizontalAnchor:"auto"===W?void 0:W,labelWidth:Z,setAnnotationPosition:$,showAnchorLine:K,subjectType:I,subtitle:V,title:A,verticalAnchor:"auto"===F?void 0:F,xScale:d,yScale:u}),!r&&Object(s.jsxs)("div",{className:"jsx-272244364 controls",children:[Object(s.jsxs)("div",{className:"jsx-272244364",children:[Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("strong",{className:"jsx-272244364",children:"Title"}),"\xa0\xa0",Object(s.jsx)("input",{type:"text",onChange:function(e){return T(e.target.value)},value:A,className:"jsx-272244364"})]}),"\xa0\xa0\xa0",Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("strong",{className:"jsx-272244364",children:"Subtitle"}),"\xa0\xa0",Object(s.jsx)("input",{type:"text",onChange:function(e){return z(e.target.value)},value:V,className:"jsx-272244364"})]}),"\xa0\xa0\xa0",Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"checkbox",onChange:function(){return E(!w)},checked:w,className:"jsx-272244364"}),"Edit subject position"]}),"\xa0\xa0",Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"checkbox",onChange:function(){return p(!b)},checked:b,className:"jsx-272244364"}),"Edit label position"]})]}),Object(s.jsxs)("div",{className:"jsx-272244364",children:[Object(s.jsx)("strong",{className:"jsx-272244364",children:"Connector type"}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return R("elbow")},checked:"elbow"===L,className:"jsx-272244364"}),"Elbow"]}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return R("line")},checked:"line"===L,className:"jsx-272244364"}),"Straight line"]})]}),Object(s.jsxs)("div",{className:"jsx-272244364",children:[Object(s.jsx)("strong",{className:"jsx-272244364",children:"Subject type"}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return H("circle")},checked:"circle"===I,className:"jsx-272244364"}),"Circle"]}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return H("vertical-line")},checked:"vertical-line"===I,className:"jsx-272244364"}),"Vertical line"]}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return H("horizontal-line")},checked:"horizontal-line"===I,className:"jsx-272244364"}),"Horizontal line"]})]}),Object(s.jsxs)("div",{className:"jsx-272244364",children:[Object(s.jsx)("strong",{className:"jsx-272244364",children:"Horizontal label anchor"}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return X("auto")},checked:"auto"===W,className:"jsx-272244364"}),"auto"]}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return X("start")},checked:"start"===W,className:"jsx-272244364"}),"left"]}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return X("middle")},checked:"middle"===W,className:"jsx-272244364"}),"middle"]}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return X("end")},checked:"end"===W,className:"jsx-272244364"}),"right"]})]}),Object(s.jsxs)("div",{className:"jsx-272244364",children:[Object(s.jsx)("strong",{className:"jsx-272244364",children:"Vertical label anchor"}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return G("auto")},checked:"auto"===F,className:"jsx-272244364"}),"auto"]}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return G("start")},checked:"start"===F,className:"jsx-272244364"}),"top"]}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return G("middle")},checked:"middle"===F,className:"jsx-272244364"}),"middle"]}),Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"radio",onChange:function(){return G("end")},checked:"end"===F,className:"jsx-272244364"}),"bottom"]}),Object(s.jsx)("div",{className:"jsx-272244364",children:Object(s.jsxs)("label",{className:"jsx-272244364",children:[Object(s.jsx)("input",{type:"checkbox",onChange:function(){return Y(!K)},checked:K,className:"jsx-272244364"}),"Show anchor line"]})})]})]}),Object(s.jsx)(x.a,{id:"272244364",children:[".controls.jsx-272244364{font-size:13px;line-height:1.5em;}",".controls.jsx-272244364>div.jsx-272244364{margin-bottom:4px;}"]})]})}try{w.displayName="ExampleControls",w.__docgenInfo={description:"",displayName:"ExampleControls",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},compact:{defaultValue:{value:!1},description:"",name:"compact",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/ExampleControls.tsx#ExampleControls"]={docgenInfo:w.__docgenInfo,name:"ExampleControls",path:"src/sandboxes/visx-annotation/ExampleControls.tsx#ExampleControls"})}catch(T){}function E(e){var t=e.value,n=e.scale,a=e.accessor,s=e.data,c=Object(O.a)(a).left,i=n.invert(t),o=c(s,i,1),r=s[o-1],l=s[o],d=r;return l&&a(l)&&(d=i-a(r)>a(l)-i?l:r),d}try{E.displayName="findNearestDatum",E.__docgenInfo={description:"",displayName:"findNearestDatum",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},scale:{defaultValue:null,description:"",name:"scale",required:!0,type:{name:"ScaleLinear<unknown, unknown, never> | ScaleTime<unknown, unknown, never>"}},accessor:{defaultValue:null,description:"",name:"accessor",required:!0,type:{name:"(d: AppleStock) => number"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"AppleStock[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/findNearestDatum.ts#findNearestDatum"]={docgenInfo:E.__docgenInfo,name:"findNearestDatum",path:"src/sandboxes/visx-annotation/findNearestDatum.ts#findNearestDatum"})}catch(T){}var _=["#ecf4f3","#68b0ab","#006a71"];function A(e){var t=e.width,n=e.height,c=e.compact,u=void 0!==c&&c;return Object(s.jsx)(w,{width:t,height:n,compact:u,children:function(e){var c=e.AnnotationComponent,u=e.annotationPosition,j=e.approxTooltipHeight,x=e.connectorType,b=e.data,p=e.editLabelPosition,h=e.editSubjectPosition,m=e.getDate,O=e.getStockValue,f=e.horizontalAnchor,y=e.labelWidth,v=e.setAnnotationPosition,g=e.showAnchorLine,N=e.subjectType,S=e.subtitle,C=e.title,k=e.verticalAnchor,w=e.xScale,A=e.yScale;return Object(s.jsxs)("svg",{width:t,height:n,children:[Object(s.jsx)("rect",{width:t,height:n,fill:_[0]}),Object(s.jsx)(d.a,{stroke:_[2],strokeWidth:2,data:b,x:function(e){var t;return null!==(t=w(m(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=A(O(e)))&&void 0!==t?t:0}}),Object(s.jsxs)(c,{width:t,height:n,x:u.x,y:u.y,dx:u.dx,dy:u.dy,canEditLabel:p,canEditSubject:h,onDragEnd:function(e){e.event;var s,c,i=Object(a.a)(e,["event"]),o=E({accessor:"horizontal-line"===N?O:m,data:b,scale:"horizontal-line"===N?A:w,value:"horizontal-line"===N?i.y:i.x}),r=null!==(s=w(m(o)))&&void 0!==s?s:0,l=null!==(c=A(O(o)))&&void 0!==c?c:0,d=i.dx>0&&r+i.dx+y>t||i.dx<0&&r+i.dx-y<=0,u=i.dy>0&&n-(l+i.dy)<j||i.dy<0&&l+i.dy-j<=0;v({x:r,y:l,dx:(d?-1:1)*i.dx,dy:(u?-1:1)*i.dy})},children:[Object(s.jsx)(i.a,{stroke:"#ff7e67",type:x}),Object(s.jsx)(o.a,{backgroundFill:"white",showAnchorLine:g,anchorLineStroke:_[2],backgroundProps:{stroke:_[1]},fontColor:_[2],horizontalAnchor:f,subtitle:S,title:C,verticalAnchor:k,width:y}),"circle"===N&&Object(s.jsx)(r.a,{stroke:"#ff7e67"}),"circle"!==N&&Object(s.jsx)(l.a,{orientation:"vertical-line"===N?"vertical":"horizontal",stroke:"#ff7e67",min:0,max:"vertical-line"===N?n:t})]})]})}})}try{A.displayName="Example",A.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},compact:{defaultValue:{value:!1},description:"",name:"compact",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/Example.tsx#Example"]={docgenInfo:A.__docgenInfo,name:"Example",path:"src/sandboxes/visx-annotation/Example.tsx#Example"})}catch(T){}}}]);