"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10667],{85744:(e,s,t)=>{t.d(s,{A:()=>n});let n=t.p+"assets/images/social-card-105335e6b4ebb3f62aa9b04e33a76dea.png"},18764:(e,s,t)=>{t.d(s,{A:()=>a});var n=t(62540);t(63696);var r=t(70361);function a({url:e}){return(0,n.jsx)("div",{style:{padding:10},children:(0,n.jsx)(r.A,{url:e,style:{minWidth:"min(100%,45vw)",width:800,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,n.jsx)("iframe",{src:e,title:e,style:{display:"block",width:"100%",height:300}})})})}},70361:(e,s,t)=>{t.d(s,{A:()=>o});var n=t(62540);t(63696);var r=t(11750);let a="dot_giz1",i="bar_rrRL";function o({children:e,minHeight:s,url:t="http://localhost:3000",style:o,bodyStyle:l}){var c,d;return(0,n.jsxs)("div",{className:"browserWindow_my1Q",style:(c=function(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(s){var n;n=t[s],s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n})}return e}({},o),d=d={minHeight:s},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(d)):(function(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t})(Object(d)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(d,e))}),c),children:[(0,n.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,n.jsxs)("div",{className:"buttons_uHc7",children:[(0,n.jsx)("span",{className:a,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:a,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:a,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,r.A)("browserWindowAddressBar_Pd8y","text--truncate"),children:t}),(0,n.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:i}),(0,n.jsx)("span",{className:i}),(0,n.jsx)("span",{className:i})]})})]}),(0,n.jsx)("div",{className:"browserWindowBody_Idgs",style:l,children:e})]})}},15453:(e,s,t)=>{t.d(s,{A:()=>n});let n=t.p+"assets/images/social-card-105335e6b4ebb3f62aa9b04e33a76dea.png"},74088:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>d});var n=t(12485),r=t(62540),a=t(43023);t(70361);var i=t(18764);let o={title:"Docusaurus 3.3",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2024-05-03T00:00:00.000Z")},l=void 0,c={image:t(85744).A,authorsImageUrls:[void 0]},d=[{value:"Highlights",id:"highlights",level:2},{value:"Prepare for React 19",id:"prepare-for-react-19",level:3},{value:"<code>createSitemapItems</code>",id:"createsitemapitems",level:3},{value:"Pages plugin improvements",id:"pages-plugin-improvements",level:3},{value:"Other changes",id:"other-changes",level:2}];function h(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["We are happy to announce ",(0,r.jsx)(s.strong,{children:"Docusaurus 3.3"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Upgrading should be easy. Our ",(0,r.jsx)(s.a,{href:"/community/release-process",children:"release process"})," respects ",(0,r.jsx)(s.a,{href:"https://semver.org/",children:"Semantic Versioning"}),". Minor versions do not include any breaking changes."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Docusaurus blog post social card",src:t(15453).A+"",width:"1200",height:"600"})}),"\n","\n",(0,r.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(s.h3,{id:"prepare-for-react-19",children:"Prepare for React 19"}),"\n",(0,r.jsxs)(s.p,{children:["The React core team recently ",(0,r.jsxs)(s.a,{href:"https://react.dev/blog/2024/04/25/react-19",children:["released the first ",(0,r.jsx)(s.strong,{children:"React 19 beta"})]}),". They also ",(0,r.jsxs)(s.a,{href:"https://react.dev/blog/2024/04/25/react-19-upgrade-guide",children:["published an upgrade guide and a ",(0,r.jsx)(s.strong,{children:"React v18.3 release"})]})," with new warnings to help us identify issues ",(0,r.jsx)(s.strong,{children:"before upgrading to React 19"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Docusaurus v3 depends on React ",(0,r.jsx)(s.code,{children:"18.x"}),". When initializing a new Docusaurus sites, it will use that new React ",(0,r.jsx)(s.code,{children:"18.3"})," release. It's also the case if you decide to upgrade your dependencies, or re-generate your package manager lockfile."]}),"\n",(0,r.jsxs)(s.p,{children:["It turns out in its current state, ",(0,r.jsx)(s.strong,{children:"Docusaurus had a few of those extra warnings to fix"}),", notably this one immediately appearing on your dev console on any page load and navigation:"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Warning: LoadableComponent uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10079",children:"#10079"}),", we got Docusaurus ready for React 19. We fixed all the React 18.3 warnings we encountered. In case we missed any, don't hesitate to ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/10099",children:(0,r.jsx)(s.strong,{children:"report new warnings"})})," if you see them, to us but also to other Docusaurus third-party plugin authors."]}),"\n",(0,r.jsx)(s.h3,{id:"createsitemapitems",children:(0,r.jsx)(s.code,{children:"createSitemapItems"})}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10083",children:"#10083"}),", we introduced a new flexible ",(0,r.jsx)(s.code,{children:"createSitemapItems()"})," hook to the sitemap plugin. This enables users to create/filter/transform/enhance the sitemap items with their own custom logic."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        sitemap: {\n          // highlight-start\n          createSitemapItems: async ({\n            defaultCreateSitemapItems,\n            ...params\n          }) => {\n            const items = await defaultCreateSitemapItems(params);\n            return items.filter((item) => !item.url.includes('/tags/'));\n          },\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(s.h3,{id:"pages-plugin-improvements",children:"Pages plugin improvements"}),"\n",(0,r.jsxs)(s.p,{children:["The Docusaurus ",(0,r.jsx)(s.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-pages",children:"pages plugin"})," has historically been lagging behind the docs and blog plugins in terms of available feature."]}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10032",children:"#10032"})," we normalized the options available on each core content plugins by adding a few the missing page plugins APIs related to the edit url and the last update metadata displayed at the bottom on Markdown pages."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        pages: {\n          // highlight-start\n          editUrl:\n            'https://github.com/facebook/docusaurus/tree/main/website/src/pages',\n          editLocalizedFiles: true,\n          showLastUpdateAuthor: true,\n          showLastUpdateTime: true,\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(i.A,{url:"/examples/markdownPageExample"}),"\n",(0,r.jsx)(s.admonition,{title:"Only for Markdown pages",type:"note",children:(0,r.jsx)(s.p,{children:"These new plugin options only apply to Markdown pages, and have no effect on React pages for which you have full control over the layout with JSX."})}),"\n",(0,r.jsx)(s.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsx)(s.p,{children:"Other notable changes include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10064",children:"#10064"}),": new site config option ",(0,r.jsx)(s.code,{children:"siteConfig.markdown.anchors.maintainCase"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9767",children:"#9767"}),": new ",(0,r.jsx)(s.code,{children:"docusaurus deploy --target-dir"})," option"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10042",children:"#10042"}),": new (experimental) plugin API: ",(0,r.jsx)(s.code,{children:"route.props"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10060",children:"#10060"}),": optimizes the App entrypoint, avoid useless re-renders on navigations"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10080",children:"#10080"}),": ",(0,r.jsx)(s.code,{children:"<Admonition>"})," component can render properly without heading/icon"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10091",children:"#10091"}),": ",(0,r.jsx)(s.code,{children:"<Tabs>"})," props can now override defaults"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10090",children:"#10090"}),": ",(0,r.jsx)(s.code,{children:"docusaurus serve"})," works better with a ",(0,r.jsx)(s.code,{children:"/baseUrl/"})," pathname prefix"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10070",children:"#10070"}),": add missing theme translations for ",(0,r.jsx)(s.code,{children:"pt-BR"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10025",children:"#10025"}),": doc sidebar item label now impacts the doc pagination label"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Check the ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/changelog/3.3.0",children:"3.3.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function u(e={}){let{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},43023:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var n=t(63696);let r={},a=n.createContext(r);function i(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}},12485:e=>{e.exports=JSON.parse('{"permalink":"/blog/releases/3.3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/3.3/index.mdx","source":"@site/blog/releases/3.3/index.mdx","title":"Docusaurus 3.3","description":"We are happy to announce Docusaurus 3.3.","date":"2024-05-03T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":2.56,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.\\n","socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 3.3","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2024-05-03T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1727448384000,"lastUpdatedBy":"dependabot[bot]","prevItem":{"title":"Docusaurus 3.4","permalink":"/blog/releases/3.4"},"nextItem":{"title":"Docusaurus 3.2","permalink":"/blog/releases/3.2"}}')}}]);