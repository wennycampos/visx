_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[130],{"/Mxz":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/treemap",function(){return t("64y0")}])},"64y0":function(n,e,t){"use strict";t.r(e);var r=t("jg1C"),a=(t("ERkP"),t("6wy5")),o=t("GtZW"),i=t("a41g");e.default=function(){return Object(r.jsx)(a.a,{component:o.c,title:"Treemap",codeSandboxDirectoryName:"visx-treemap",packageJson:i,children:"import React, { useState } from 'react';\nimport { Group } from '@visx/group';\nimport {\n  Treemap,\n  hierarchy,\n  stratify,\n  treemapSquarify,\n  treemapBinary,\n  treemapDice,\n  treemapResquarify,\n  treemapSlice,\n  treemapSliceDice,\n} from '@visx/hierarchy';\nimport { TileMethod } from '@visx/hierarchy/lib/types';\nimport shakespeare, { Shakespeare } from '@visx/mock-data/lib/mocks/shakespeare';\n\nimport { scaleLinear } from '@visx/scale';\n\nexport const color1 = '#f3e9d2';\nconst color2 = '#4281a4';\nexport const background = '#114b5f';\n\nconst colorScale = scaleLinear<string>({\n  domain: [0, Math.max(...shakespeare.map(d => d.size || 0))],\n  range: [color2, color1],\n});\n\nconst data = stratify<Shakespeare>()\n  .id(d => d.id)\n  .parentId(d => d.parent)(shakespeare)\n  .sum(d => d.size || 0);\n\nconst tileMethods: { [tile: string]: TileMethod<typeof data> } = {\n  treemapSquarify,\n  treemapBinary,\n  treemapDice,\n  treemapResquarify,\n  treemapSlice,\n  treemapSliceDice,\n};\n\nconst defaultMargin = { top: 10, left: 10, right: 10, bottom: 10 };\n\nexport type TreemapProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default function TreemapDemo({ width, height, margin = defaultMargin }: TreemapProps) {\n  const [tileMethod, setTileMethod] = useState<string>('treemapSquarify');\n  const xMax = width - margin.left - margin.right;\n  const yMax = height - margin.top - margin.bottom;\n  const root = hierarchy(data).sort((a, b) => (b.value || 0) - (a.value || 0));\n\n  return width < 10 ? null : (\n    <div>\n      <label>tile method</label>{' '}\n      <select\n        onClick={e => e.stopPropagation()}\n        onChange={e => setTileMethod(e.target.value)}\n        value={tileMethod}\n      >\n        {Object.keys(tileMethods).map(tile => (\n          <option key={tile} value={tile}>\n            {tile}\n          </option>\n        ))}\n      </select>\n      <div>\n        <svg width={width} height={height}>\n          <rect width={width} height={height} rx={14} fill={background} />\n          <Treemap<typeof data>\n            top={margin.top}\n            root={root}\n            size={[xMax, yMax]}\n            tile={tileMethods[tileMethod]}\n            round\n          >\n            {treemap => (\n              <Group>\n                {treemap\n                  .descendants()\n                  .reverse()\n                  .map((node, i) => {\n                    const nodeWidth = node.x1 - node.x0;\n                    const nodeHeight = node.y1 - node.y0;\n                    return (\n                      <Group\n                        key={`node-${i}`}\n                        top={node.y0 + margin.top}\n                        left={node.x0 + margin.left}\n                      >\n                        {node.depth === 1 && (\n                          <rect\n                            width={nodeWidth}\n                            height={nodeHeight}\n                            stroke={background}\n                            strokeWidth={4}\n                            fill=\"transparent\"\n                          />\n                        )}\n                        {node.depth > 2 && (\n                          <rect\n                            width={nodeWidth}\n                            height={nodeHeight}\n                            stroke={background}\n                            fill={colorScale(node.value || 0)}\n                          />\n                        )}\n                      </Group>\n                    );\n                  })}\n              </Group>\n            )}\n          </Treemap>\n        </svg>\n      </div>\n    </div>\n  );\n}\n"})}},"67po":function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t("uKU/"),a=t("xx0A"),o=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function i(n){return o(Object(r.a)(),n)}},HO86:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t("lEbO");function a(n,e){if(n){if("string"===typeof n)return Object(r.a)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(n,e):void 0}}},JmwF:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var r=t("aWzz"),a=t.n(r),o=t("ERkP"),i=t.n(o),c=t("O94r"),s=t.n(c);function u(){return(u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function l(n){var e=n.top,t=void 0===e?0:e,r=n.left,a=void 0===r?0:r,o=n.transform,c=n.className,l=n.children,p=n.innerRef,d=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["top","left","transform","className","children","innerRef"]);return i.a.createElement("g",u({ref:p,className:s()("visx-group",c),transform:o||"translate("+a+", "+t+")"},d),l)}l.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},Zbhd:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t("PB0s"),a=t("XAd9"),o=t("Cyas"),i=t("VBI3");function c(n,e,t,c){var s,u=Object(r.c)(n,e,t);switch((c=Object(a.a)(null==c?",f":c)).type){case"s":var l=Math.max(Math.abs(n),Math.abs(e));return null!=c.precision||isNaN(s=function(n,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(o.a)(e)/3)))-Object(o.a)(Math.abs(n)))}(u,l))||(c.precision=s),Object(i.b)(c,l);case"":case"e":case"g":case"p":case"r":null!=c.precision||isNaN(s=function(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Object(o.a)(e)-Object(o.a)(n))+1}(u,Math.max(Math.abs(n),Math.abs(e))))||(c.precision=s-("e"===c.type));break;case"f":case"%":null!=c.precision||isNaN(s=function(n){return Math.max(0,-Object(o.a)(Math.abs(n)))}(u))||(c.precision=s-2*("%"===c.type))}return Object(i.a)(c)}},fGyu:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t("lEbO");var a=t("HO86");function o(n){return function(n){if(Array.isArray(n))return Object(r.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||Object(a.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},lEbO:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t.d(e,"a",(function(){return r}))},"uKU/":function(n,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return s}));var r=t("PB0s"),a=t("2+fR"),o=t("W1cA"),i=t("Zbhd");function c(n){var e=n.domain;return n.ticks=function(n){var t=e();return Object(r.a)(t[0],t[t.length-1],null==n?10:n)},n.tickFormat=function(n,t){var r=e();return Object(i.a)(r[0],r[r.length-1],null==n?10:n,t)},n.nice=function(t){null==t&&(t=10);var a,o,i=e(),c=0,s=i.length-1,u=i[c],l=i[s],p=10;for(l<u&&(o=u,u=l,l=o,o=c,c=s,s=o);p-- >0;){if((o=Object(r.b)(u,l,t))===a)return i[c]=u,i[s]=l,e(i);if(o>0)u=Math.floor(u/o)*o,l=Math.ceil(l/o)*o;else{if(!(o<0))break;u=Math.ceil(u*o)/o,l=Math.floor(l*o)/o}a=o}return n},n}function s(){var n=Object(a.b)();return n.copy=function(){return Object(a.a)(n,s())},o.b.apply(n,arguments),c(n)}}},[["/Mxz",0,2,1,3,4,5,6,31]]]);