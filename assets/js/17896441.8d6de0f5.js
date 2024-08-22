"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8401],{2877:(e,t,n)=>{n.r(t),n.d(t,{default:()=>le});var s=n(3696),a=n(6666),i=n(5198),o=n(2540);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(1750),m=n(2575),h=n(6590),b=n(3587);function x(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,o.jsxs)(b.A,{className:(0,u.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}function p(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(x,{...t,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(x,{...n,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=c();return(0,o.jsx)(p,{previous:e.previous,next:e.next})}var g=n(7032),j=n(4548),f=n(3237),A=n(9092),_=n(4435);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function N(e){const t=C[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(b.A,{to:n,onClick:s,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,g.A)(),{pluginId:a}=(0,j.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,A.g1)(a),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,j.HW)(a),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.A)(t,f.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(N,{siteTitle:s,versionMetadata:n})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(L,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,_.r)();return n.banner?(0,o.jsx)(k,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,_.r)();return n.badge?(0,o.jsx)("span",{className:(0,u.A)(t,f.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const M={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};function y(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,o.jsxs)(b.A,{href:t,title:a,className:(0,u.A)(M.tag,s?M.tagWithCount:M.tagRegular),children:[n,s&&(0,o.jsx)("span",{children:s})]})}const B={tags:"tags_Ow0B",tag:"tag_DFxh"};function I(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,u.A)(B.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:B.tag,children:(0,o.jsx)(y,{...e})},e.permalink)))})]})}var H=n(147);function V(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,l=!!(t||n||s);return i||l?(0,o.jsxs)("footer",{className:(0,u.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",f.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(I,{tags:a})})}),l&&(0,o.jsx)(H.A,{className:(0,u.A)("margin-top--sm",f.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var G=n(51),P=n(5397);const E={tocCollapsibleButton:"tocCollapsibleButton_iI2p",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_cHjC"};function F(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",E.tocCollapsibleButton,!t&&E.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const R={tocCollapsible:"tocCollapsible_wXna",tocCollapsibleContent:"tocCollapsibleContent_vea0",tocCollapsibleExpanded:"tocCollapsibleExpanded_BbRn"};function S(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,G.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(R.tocCollapsible,!i&&R.tocCollapsibleExpanded,n),children:[(0,o.jsx)(F,{collapsed:i,onClick:l}),(0,o.jsx)(G.N,{lazy:!0,className:R.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(P.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const D={tocMobile:"tocMobile_Ojys"};function U(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(S,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(f.G.docs.docTocMobile,D.tocMobile)})}var O=n(3077);function W(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(O.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var z=n(1381),Q=n(9954);function X(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(f.G.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(z.A,{as:"h1",children:n})}),(0,o.jsx)(Q.A,{children:t})]})}var Z=n(2454),$=n(4379),q=n(883);function J(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const K={breadcrumbHomeIcon:"breadcrumbHomeIcon_sfvy"};function Y(){const e=(0,q.Ay)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(b.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(J,{className:K.breadcrumbHomeIcon})})})}const ee={breadcrumbsContainer:"breadcrumbsContainer_T5ub"};function te(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,o.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,o.jsx)(b.A,{className:a,href:n,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:a,children:t})}function ne(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,o.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function se(){const e=(0,Z.OF)(),t=(0,$.Dt)();return e?(0,o.jsx)("nav",{className:(0,u.A)(f.G.docs.docBreadcrumbs,ee.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(Y,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(ne,{active:s,index:n,addMicrodata:!!a,children:(0,o.jsx)(te,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var ae=n(3518);const ie={docItemContainer:"docItemContainer_tjFy",docItemCol:"docItemCol_Qr34"};function oe(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,o.jsx)(U,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(W,{})}}(),{metadata:s}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&ie.docItemCol),children:[(0,o.jsx)(ae.A,{metadata:s}),(0,o.jsx)(T,{}),(0,o.jsxs)("div",{className:ie.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(se,{}),(0,o.jsx)(w,{}),n.mobile,(0,o.jsx)(X,{children:t}),(0,o.jsx)(V,{})]}),(0,o.jsx)(v,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function le(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(oe,{children:(0,o.jsx)(n,{})})]})})}},4846:(e,t,n)=>{n.d(t,{A:()=>o});n(3696);var s=n(3587),a=n(3603),i=n(2540);function o(e){return"cli"!==e.type?(0,i.jsx)(a.A,{...e}):(0,i.jsx)(a.A,{icon:(0,i.jsx)(l,{}),title:"Vendure CLI",...e,children:(0,i.jsxs)(i.Fragment,{children:[e.children,(0,i.jsxs)("div",{style:{fontSize:"12px"},children:["Learn more about the"," ",(0,i.jsx)(s.A,{href:"/guides/developer-guide/cli/",children:"Vendure CLI"})]})]})})}function l(){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",style:{fill:"rgb(8 32 41)",stroke:"#fff"},children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"})})}}}]);