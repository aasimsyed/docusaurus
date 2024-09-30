"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90888],{15995:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(62540);r(63696);var o=r(11750);function i({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.A)("tabItem_pnkT",r),hidden:t,children:e})}},27446:(e,t,r)=>{r.d(t,{A:()=>O});var n=r(62540),o=r(63696),i=r(11750),s=r(7846),l=r(49519),c=r(96439),a=r(19739),u=r(66904),d=r(79244);function p(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b({value:e,tabValues:t}){return t.some(t=>t.value===e)}var h=r(10709);function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function j(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function m({className:e,block:t,selectedValue:r,selectValue:o,tabValues:l}){let c=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),u=e=>{let t=e.currentTarget,n=l[c.indexOf(t)].value;n!==r&&(a(t),o(n))},d=e=>{var t,r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=null!==(t=c[r])&&void 0!==t?t:c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=null!==(r=c[t])&&void 0!==r?r:c[c.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},e),children:l.map(({value:e,label:t,attributes:o})=>(0,n.jsx)("li",j(f({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>c.push(e),onKeyDown:d,onClick:u},o),{className:(0,i.A)("tabs__item","tabItem_AQgk",null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function g({lazy:e,children:t,selectedValue:r}){let s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=s.find(e=>e.props.value===r);return e?(0,o.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function y(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,i=function(e){let{values:t,children:r}=e;return(0,o.useMemo)(()=>{let e=null!=t?t:p(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n}));return!function(e){let t=(0,u.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[s,h]=(0,o.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:i})),[f,j]=function({queryString:e=!1,groupId:t}){let r=(0,l.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,a.aZ)(n),(0,o.useCallback)(e=>{var t,o;if(!n)return;let i=new URLSearchParams(r.location.search);i.set(n,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r.location),o=o={search:i.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}),t))},[n,r])]}({queryString:r,groupId:n}),[m,g]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,d.Dv)(t);return[r,(0,o.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),y=(()=>{let e=null!=f?f:m;return b({value:e,tabValues:i})?e:null})();return(0,c.A)(()=>{y&&h(y)},[y]),{selectedValue:s,selectValue:(0,o.useCallback)(e=>{if(!b({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);h(e),j(e),g(e)},[j,g,i]),tabValues:i}}(e);return(0,n.jsxs)("div",{className:(0,i.A)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(m,f({},t,e)),(0,n.jsx)(g,f({},t,e))]})}function O(e){let t=(0,h.A)();return(0,n.jsx)(y,j(f({},e),{children:p(e.children)}),String(t))}},40576:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(62540);r(63696);var o=r(10709);function i({children:e,fallback:t}){return(0,o.A)()?(0,n.jsx)(n.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},59273:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(62540),o=r(63696),i=r(52711),s=r(49519);let l=o.forwardRef(function({name:e,children:t},r){let l=function(e){let t=e;for(;(0,o.isValidElement)(t);)[t]=o.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(t),c=e?`${e}-${l}`:l,a=`#${c}`,u=(0,s.W6)();return(0,i.A)().collectAnchor(c),(0,n.jsx)("tr",{id:c,tabIndex:0,ref:u.location.hash===a?r:void 0,onClick:e=>{"A"!==e.target.tagName.toUpperCase()&&u.push(a)},onKeyDown:e=>{"Enter"===e.key&&u.push(a)},children:t.props.children})});function c({children:e,name:t}){if("table"!==e.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[r,i]=o.Children.toArray(e.props.children),s=(0,o.useRef)(null);(0,o.useEffect)(()=>{var e;null===(e=s.current)||void 0===e||e.focus()},[s]);let c=o.Children.map(i.props.children,e=>(0,n.jsx)(l,{name:t,ref:s,children:e}));return(0,n.jsxs)("table",{className:"apiTable_e8hp",children:[r,(0,n.jsx)("tbody",{children:c})]})}},59433:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(62540);r(63696);var o=r(36372),i=r(69615),s=r(81912),l=r(27446),c=r(15995),a=r(55887);let u=void 0;function d({code:e,pluginName:t,presetOptionName:r}){let d=(0,i.ir)(u).path;return(0,n.jsxs)(l.A,{groupId:"api-config-ex",children:[(0,n.jsxs)(c.A,{value:"preset",label:(0,s.T)({message:"Preset options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(s.A,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,n.jsx)(o.A,{to:`${d}/using-plugins#docusauruspreset-classic`,children:(0,n.jsx)(s.A,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,n.jsx)(a.A,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${r}: ${e.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,n.jsxs)(c.A,{value:"plugin",label:(0,s.T)({message:"Plugin options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(s.A,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,n.jsx)(a.A,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${t}',
      // highlight-start
      ${e.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},55887:(e,t,r)=>{r.d(t,{A:()=>el});var n,o,i,s={};r.r(s),r.d(s,{ButtonExample:()=>C});var l=r(62540),c=r(63696),a=r(11750),u=r(10709),d=r(55152),p=r(81912),b=r(99468),h=r(40576),f=r(1495),j=r(66659),m=r(25436);function g(){let{prism:e}=(0,m.p)(),{colorMode:t}=(0,j.G)(),r=e.theme,n=e.darkTheme||r;return"dark"===t?n:r}var y=r(43758);function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function v({children:e}){return(0,l.jsx)("div",{className:(0,a.A)("playgroundHeader_Tvsk"),children:e})}function x(){return(0,l.jsx)("div",{children:"Loading..."})}function w(){return(0,l.jsx)(h.A,{fallback:(0,l.jsx)(x,{}),children:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.A,{fallback:e=>(0,l.jsx)(f.MN,O({},e)),children:(0,l.jsx)(d.pA,{})}),(0,l.jsx)(d.p1,{})]})})}function P(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{children:(0,l.jsx)(p.A,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,l.jsx)("div",{className:"playgroundPreview_mApW",children:(0,l.jsx)(w,{})})]})}function k(){let e=(0,u.A)();return(0,l.jsx)(d.w,{className:"playgroundEditor_TySg"},String(e))}function S(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{children:(0,l.jsx)(p.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,l.jsx)(k,{})]})}let A=e=>`${e};`;function E(e){var t,r,n,o,{children:i,transformCode:s}=e,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children","transformCode"]);let{siteConfig:{themeConfig:a}}=(0,b.A)(),{liveCodeBlock:{playgroundPosition:u}}=a,p=g(),h=null!==(o=null===(n=c.metastring)||void 0===n?void 0:n.includes("noInline"))&&void 0!==o&&o;return(0,l.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,l.jsx)(d.Q,(t=O({code:null==i?void 0:i.replace(/\n$/,""),noInline:h,transformCode:null!=s?s:A,theme:p},c),r=r={children:"top"===u?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(P,{}),(0,l.jsx)(S,{})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(S,{}),(0,l.jsx)(P,{})]})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))})}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function C(e){var t,r;return(0,l.jsx)("button",(t=D({type:"button"},e),r=r={style:D({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let B=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({React:c},c,s);var N=r(12653),I=r(19934),T=r.n(I);let L=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),_=RegExp("\\{(?<range>[\\d,-]+)\\}"),$={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"<!--",end:"-->"}},R=(n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},$),o=o={lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}),n),M=Object.keys($);function F(e,t){let r=e.map(e=>{let{start:r,end:n}=R[e];return`(?:${r}\\s*(${t.flatMap(e=>{var t,r;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(r=e.block)||void 0===r?void 0:r.end].filter(Boolean)}).join("|")})\\s*${n})`}).join("|");return RegExp(`^\\s*(?:${r})\\s*$`)}function q(e){var t,r,{as:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["as"]);let i=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach(([e,n])=>{let o=t[e];o&&"string"==typeof n&&(r[o]=n)}),r}(g());return(0,l.jsx)(n,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={style:i,className:(0,a.A)(o.className,"codeBlockContainer_jDV4",N.G.common.codeBlock)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let V={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function W({children:e,className:t}){return(0,l.jsx)(q,{as:"pre",tabIndex:0,className:(0,a.A)(V.codeBlockStandalone,"thin-scrollbar",t),children:(0,l.jsx)("code",{className:V.codeBlockLines,children:e})})}var H=r(2550);let U={attributes:!0,characterData:!0,childList:!0,subtree:!0};var Y=r(27663);let G={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function Q({line:e,classNames:t,showLineNumbers:r,getLineProps:n,getTokenProps:o}){var i,s;1===e.length&&"\n"===e[0].content&&(e[0].content="");let c=n({line:e,className:(0,a.A)(t,r&&G.codeLine)}),u=e.map((e,t)=>(0,l.jsx)("span",z({},o({token:e})),t));return(0,l.jsxs)("span",(i=z({},c),s=s={children:[r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:G.codeLineNumber}),(0,l.jsx)("span",{className:G.codeLineContent,children:u})]}):u,(0,l.jsx)("br",{})]},Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(s)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(s)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(s,e))}),i))}var J=r(936);function X(e){var t,r;return(0,l.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,l.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}function Z(e){var t,r;return(0,l.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,l.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee({code:e,className:t}){let[r,n]=(0,c.useState)(!1),o=(0,c.useRef)(void 0),i=(0,c.useCallback)(()=>{(0,J.A)(e),n(!0),o.current=window.setTimeout(()=>{n(!1)},1e3)},[e]);return(0,c.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,l.jsx)("button",{type:"button","aria-label":r?(0,p.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,p.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,p.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.A)("clean-btn",t,K.copyButton,r&&K.copyButtonCopied),onClick:i,children:(0,l.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,l.jsx)(X,{className:K.copyButtonIcon}),(0,l.jsx)(Z,{className:K.copyButtonSuccessIcon})]})})}function et(e){var t,r;return(0,l.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,l.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let er={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function en({className:e,onClick:t,isEnabled:r}){let n=(0,p.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,l.jsx)("button",{type:"button",onClick:t,className:(0,a.A)("clean-btn",e,r&&er.wordWrapButtonEnabled),"aria-label":n,title:n,children:(0,l.jsx)(et,{className:er.wordWrapButtonIcon,"aria-hidden":"true"})})}function eo({children:e,className:t="",metastring:r,title:n,showLineNumbers:o,language:i}){var s,u,d,p;let{prism:{defaultLanguage:b,magicComments:h}}=(0,m.p)(),f=null==(u=null!==(s=null!=i?i:function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==s?s:b)?void 0:u.toLowerCase(),j=g(),y=function(){let[e,t]=(0,c.useState)(!1),[r,n]=(0,c.useState)(!1),o=(0,c.useRef)(null),i=(0,c.useCallback)(()=>{let r=o.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t(e=>!e)},[o,e]),s=(0,c.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=o.current;n(e>t||o.current.querySelector("code").hasAttribute("style"))},[o]);return!function(e,t){let[r,n]=(0,c.useState)(),o=(0,c.useCallback)(()=>{var t;n(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))},[e,n]);(0,c.useEffect)(()=>{o()},[o]),function(e,t,r=U){let n=(0,H._q)(t),o=(0,H.Be)(r);(0,c.useEffect)(()=>{let t=new MutationObserver(n);return e&&t.observe(e,o),()=>t.disconnect()},[e,n,o])}(r,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(o,s),(0,c.useEffect)(()=>{s()},[e,s]),(0,c.useEffect)(()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)}),[s]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:r,toggle:i}}(),O=(null!==(p=null==r?void 0:null===(d=r.match(L))||void 0===d?void 0:d.groups.title)&&void 0!==p?p:"")||n,{lineClassNames:v,code:x}=function(e,t){let r=e.replace(/\n$/,""),{language:n,magicComments:o,metastring:i}=t;if(i&&_.test(i)){let e=i.match(_).groups.range;if(0===o.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=o[0].className;return{lineClassNames:Object.fromEntries(T()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:r}}if(void 0===n)return{lineClassNames:{},code:r};let s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return F(["js","jsBlock"],t);case"jsx":case"tsx":return F(["js","jsBlock","jsx"],t);case"html":return F(["js","jsBlock","html"],t);case"python":case"py":case"bash":return F(["bash"],t);case"markdown":case"md":return F(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return F(["tex"],t);case"lua":case"haskell":case"sql":return F(["lua"],t);case"wasm":return F(["wasm"],t);case"vb":case"vba":case"visual-basic":return F(["vb","rem"],t);case"vbnet":return F(["vbnet","rem"],t);case"batch":return F(["rem"],t);case"basic":return F(["rem","f90"],t);case"fsharp":return F(["js","ml"],t);case"ocaml":case"sml":return F(["ml"],t);case"fortran":return F(["f90"],t);case"cobol":return F(["cobol"],t);default:return F(M,t)}}(n,o),l=r.split("\n"),c=Object.fromEntries(o.map(e=>[e.className,{start:0,range:""}])),a=Object.fromEntries(o.filter(e=>e.line).map(({className:e,line:t})=>[t,e])),u=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.start,e])),d=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.end,e]));for(let e=0;e<l.length;){let t=l[e].match(s);if(!t){e+=1;continue}let r=t.slice(1).find(e=>void 0!==e);a[r]?c[a[r]].range+=`${e},`:u[r]?c[u[r]].start=e:d[r]&&(c[d[r]].range+=`${c[d[r]].start}-${e-1},`),l.splice(e,1)}r=l.join("\n");let p={};return Object.entries(c).forEach(([e,{range:t}])=>{T()(t).forEach(t=>{var r;null!==(r=p[t])&&void 0!==r||(p[t]=[]),p[t].push(e)})}),{lineClassNames:p,code:r}}(e,{metastring:r,language:f,magicComments:h}),w=null!=o?o:!!(null==r?void 0:r.includes("showLineNumbers"));return(0,l.jsxs)(q,{as:"div",className:(0,a.A)(t,f&&!t.includes(`language-${f}`)&&`language-${f}`),children:[O&&(0,l.jsx)("div",{className:V.codeBlockTitle,children:O}),(0,l.jsxs)("div",{className:V.codeBlockContent,children:[(0,l.jsx)(Y.f4,{theme:j,code:x,language:null!=f?f:"text",children:({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:o})=>(0,l.jsx)("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,a.A)(e,V.codeBlock,"thin-scrollbar"),style:t,children:(0,l.jsx)("code",{className:(0,a.A)(V.codeBlockLines,w&&V.codeBlockLinesWithNumbering),children:r.map((e,t)=>(0,l.jsx)(Q,{line:e,getLineProps:n,getTokenProps:o,classNames:v[t],showLineNumbers:w},t))})})}),(0,l.jsxs)("div",{className:V.buttonGroup,children:[(y.isEnabled||y.isCodeScrollable)&&(0,l.jsx)(en,{className:V.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),(0,l.jsx)(ee,{className:V.codeButton,code:x})]})]})]})}function ei(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}let es=(i=function(e){var t,r,{children:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children"]);let i=(0,u.A)(),s=c.Children.toArray(n).some(e=>(0,c.isValidElement)(e))?n:Array.isArray(n)?n.join(""):n,a="string"==typeof s?eo:W;return(0,l.jsx)(a,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={children:s},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t),String(i))},function(e){return e.live?(0,l.jsx)(E,ei({scope:B},e)):(0,l.jsx)(i,ei({},e))});function el(e){return(0,l.jsx)(es,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e))}},40173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>n,toc:()=>b});let n=JSON.parse('{"id":"api/plugins/plugin-sitemap","title":"\u{1F4E6} plugin-sitemap","description":"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately.","source":"@site/docs/api/plugins/plugin-sitemap.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-sitemap","permalink":"/docs/api/plugins/@docusaurus/plugin-sitemap","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-sitemap.mdx","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1727448384000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"slug":"/api/plugins/@docusaurus/plugin-sitemap"},"sidebar":"api","previous":{"title":"\u{1F4E6} plugin-pwa","permalink":"/docs/api/plugins/@docusaurus/plugin-pwa"},"next":{"title":"\u{1F4E6} plugin-vercel-analytics","permalink":"/docs/api/plugins/@docusaurus/plugin-vercel-analytics"}}');var o=r(62540),i=r(43023),s=r(27446),l=r(15995),c=r(59273),a=r(59433);let u={sidebar_position:10,slug:"/api/plugins/@docusaurus/plugin-sitemap"},d="\u{1F4E6} plugin-sitemap",p={},b=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>CreateSitemapItemsFn</code>",id:"CreateSitemapItemsFn",level:4},{value:"Example configuration",id:"ex-config",level:3}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"-plugin-sitemap",children:"\u{1F4E6} plugin-sitemap"})}),"\n","\n",(0,o.jsx)(t.p,{children:"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately."}),"\n",(0,o.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,o.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,o.jsx)(t.strong,{children:"only active in production"})," because it works on the build output."]})}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,o.jsx)(l.A,{value:"npm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-sitemap\n"})})}),(0,o.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-sitemap\n"})})}),(0,o.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-sitemap\n"})})})]}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.p,{children:["If you use the preset ",(0,o.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,o.jsxs)(t.p,{children:["You can configure this plugin through the ",(0,o.jsx)(t.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,o.jsx)(c.A,{children:(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"lastmod"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"'date' | 'datetime' | null"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"null"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:"date"})," is YYYY-MM-DD. ",(0,o.jsx)(t.code,{children:"datetime"})," is a ISO 8601 datetime. ",(0,o.jsx)(t.code,{children:"null"})," is disabled. See ",(0,o.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"}),"."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"changefreq"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"string | null"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"'weekly'"})}),(0,o.jsxs)(t.td,{children:["See ",(0,o.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"priority"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"number | null"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"0.5"})}),(0,o.jsxs)(t.td,{children:["See ",(0,o.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"ignorePatterns"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"string[]"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"[]"})}),(0,o.jsx)(t.td,{children:"A list of glob patterns; matching route paths will be filtered from the sitemap. Note that you may need to include the base URL in here."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"filename"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"string"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"sitemap.xml"})}),(0,o.jsx)(t.td,{children:"The path to the created sitemap file, relative to the output directory. Useful if you have two plugin instances outputting two files."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"createSitemapItems"})}),(0,o.jsx)(t.td,{children:(0,o.jsxs)("code",{children:[(0,o.jsx)(t.a,{href:"#CreateSitemapItemsFn",children:"CreateSitemapItemsFn"})," | undefined"]})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"undefined"})}),(0,o.jsx)(t.td,{children:"An optional function which can be used to transform and / or filter the items in the sitemap."})]})]})]})}),"\n",(0,o.jsx)(t.h3,{id:"types",children:"Types"}),"\n",(0,o.jsx)(t.h4,{id:"CreateSitemapItemsFn",children:(0,o.jsx)(t.code,{children:"CreateSitemapItemsFn"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"type CreateSitemapItemsFn = (params: {\n  siteConfig: DocusaurusConfig;\n  routes: RouteConfig[];\n  defaultCreateSitemapItems: CreateSitemapItemsFn;\n}) => Promise<SitemapItem[]>;\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.p,{children:"This plugin also respects some site config:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/api/docusaurus-config#noIndex",children:(0,o.jsx)(t.code,{children:"noIndex"})}),": results in no sitemap generated"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/api/docusaurus-config#trailingSlash",children:(0,o.jsx)(t.code,{children:"trailingSlash"})}),": determines if the URLs in the sitemap have trailing slashes"]}),"\n"]})]}),"\n",(0,o.jsxs)(t.admonition,{type:"note",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["About ",(0,o.jsx)(t.code,{children:"lastmod"})]}),(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"lastmod"})," option will only output a sitemap ",(0,o.jsx)(t.code,{children:"<lastmod>"})," tag if plugins provide ",(0,o.jsx)(t.a,{href:"/docs/api/plugin-methods/lifecycle-apis#addRoute",children:"route metadata"})," attributes ",(0,o.jsx)(t.code,{children:"sourceFilePath"})," and/or ",(0,o.jsx)(t.code,{children:"lastUpdatedAt"}),"."]}),(0,o.jsxs)(t.p,{children:["All the official content plugins provide the metadata for routes backed by a content file (Markdown, MDX or React page components), but it is possible third-party plugin authors do not provide this information, and the plugin will not be able to output a ",(0,o.jsx)(t.code,{children:"<lastmod>"})," tag for their routes."]})]}),"\n",(0,o.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,o.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,o.jsx)(a.A,{pluginName:"@docusaurus/plugin-sitemap",presetOptionName:"sitemap",code:"{\n  lastmod: 'date',\n  changefreq: 'weekly',\n  priority: 0.5,\n  ignorePatterns: ['/tags/**'],\n  filename: 'sitemap.xml',\n  createSitemapItems: async (params) => {\n    const {defaultCreateSitemapItems, ...rest} = params;\n    const items = await defaultCreateSitemapItems(rest);\n    return items.filter((item) => !item.url.includes('/page/'));\n  },\n}"}),"\n",(0,o.jsxs)(t.p,{children:["You can find your sitemap at ",(0,o.jsx)(t.code,{children:"/sitemap.xml"}),"."]})]})}function f(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);