(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7955],{12304:function(e,t,n){const s=n(56168);const r=s.forwardRef((function({title:e,titleId:t,...n},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{fillRule:"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",clipRule:"evenodd"}))}));e.exports=r},31756:function(e,t,n){const s=n(56168);const r=s.forwardRef((function({title:e,titleId:t,...n},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{fillRule:"evenodd",d:"M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z",clipRule:"evenodd"}))}));e.exports=r},38281:function(e,t,n){const s=n(56168);const r=s.forwardRef((function({title:e,titleId:t,...n},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"}))}));e.exports=r},44815:function(e,t,n){const s=n(70498);e.exports=function(){return function(e){s(e,"heading",(e=>{let t=e.children[e.children.length-1];if(t&&"text"===t.type){let n=t.value.replace(/ +$/,""),s=n.match(/ {#([^]+?)}$/);if(s){let r=s[1];r.length&&(e.data||(e.data={}),e.data.hProperties||(e.data.hProperties={}),e.data.id=e.data.hProperties.id=r,n=n.substring(0,s.index),t.value=n)}}}))}}},66341:function(e){"use strict";function t(e){if("string"===typeof e)return function(e){return t;function t(t){return Boolean(t&&t.type===e)}}(e);if(null===e||void 0===e)return r;if("object"===typeof e)return("length"in e?s:n)(e);if("function"===typeof e)return e;throw new Error("Expected function, string, or object as test")}function n(e){return function(t){var n;for(n in e)if(t[n]!==e[n])return!1;return!0}}function s(e){var n=function(e){for(var n=[],s=e.length,r=-1;++r<s;)n[r]=t(e[r]);return n}(e),s=n.length;return function(){var e=-1;for(;++e<s;)if(n[e].apply(this,arguments))return!0;return!1}}function r(){return!0}e.exports=t},11293:function(e,t,n){"use strict";e.exports=i;var s=n(66341),r="skip",l=!1;function i(e,t,n,i){var o;function c(e,s,u){var d,f=[];return(t&&!o(e,s,u[u.length-1]||null)||(f=a(n(e,u)))[0]!==l)&&e.children&&f[0]!==r?(d=a(function(e,t){var n,s=-1,r=i?-1:1,a=(i?e.length:s)+r;for(;a>s&&a<e.length;){if((n=c(e[a],a,t))[0]===l)return n;a="number"===typeof n[1]?n[1]:a+r}}(e.children,u.concat(e))),d[0]===l?d:f):f}"function"===typeof t&&"function"!==typeof n&&(i=n,n=t,t=null),o=s(t),c(e,null,[])}function a(e){return null!==e&&"object"===typeof e&&"length"in e?e:"number"===typeof e?[true,e]:[e]}i.CONTINUE=true,i.SKIP=r,i.EXIT=l},70498:function(e,t,n){"use strict";e.exports=a;var s=n(11293),r=s.CONTINUE,l=s.SKIP,i=s.EXIT;function a(e,t,n,r){"function"===typeof t&&"function"!==typeof n&&(r=n,n=t,t=null),s(e,t,(function(e,t){var s=t[t.length-1],r=s?s.children.indexOf(e):null;return n(e,r,s)}),r)}a.CONTINUE=r,a.SKIP=l,a.EXIT=i},22898:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/guides/stocks/[slug]",function(){return n(80037)}])},44786:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(8014),r=n(75657),l=n.n(r);function i(e){var t=e.href,n=e.children;if(/.xls|.csv|.pdf|.xml|.doc/.test(t))return(0,s.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:n});var r=/^https?:\/\//.test(t)&&!/www.Capitalfideltrade|invest.Capitalfideltrade|signup.Capitalfideltrade/.test(t);return(0,s.jsx)(l(),{href:t,legacyBehavior:!0,children:(0,s.jsx)("a",{ref:t,target:r?"_blank":null,rel:r?"noopener noreferrer":null,children:n})})}},65692:function(e,t,n){"use strict";n.d(t,{aG:function(){return d},ZP:function(){return f}});var s=n(8014),r=n(12304),l=n(75657),i=n.n(l),a=n(75332),o=n(50744),c=n.n(o);var u=function(e){var t=e.title,n=e.href,r=(0,a.useRouter)();return(0,s.jsx)(i(),{href:n,legacyBehavior:!0,children:(0,s.jsx)("a",{className:c()(r.asPath===n&&"text-ft-slate"),children:t})})};var d=function(e){var t=e.paths,n=[];return t.forEach((function(e,l){n.push((0,s.jsx)(u,{title:e.title,href:e.link},e.link)),l<t.length-1&&n.push((0,s.jsx)(r,{width:20,height:20},"breadcrumb-right-".concat(l)))})),(0,s.jsx)("div",{className:"bg-grey-smoke py-5","aria-label":"breadcrumb",children:(0,s.jsx)("div",{className:"container max-w-7xl flex flex-row items-center",children:n})})},f=d},16082:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(21157),r=n(8014),l=n(56168),i=n(46834),a=n(62044),o=n(41833),c=n(39225);var u=function(e){var t=e.title,n=e.subTitle,u=e.classNames,d=e.sources,f=(0,a.Z)("videos").t,h=(0,s.Z)(l.useState(!1),2),v=h[0],g=h[1],p=l.useRef(null),x=l.useCallback((function(){g(!1)}),[]),m=l.useCallback((function(){g(!0)}),[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{handleClick:m,title:t,subTitle:n,classNames:u}),(0,r.jsx)(c.Z,{show:v,title:t,showTitle:!1,handleClose:x,initialFocus:p,children:(0,r.jsx)("div",{className:"my-10",children:(0,r.jsxs)("video",{controls:!0,autoPlay:!0,muted:!0,ref:p,className:"h-auto w-full",children:[d.map((function(e){return e.type?(0,r.jsx)("source",{src:e.src,type:e.type},e.src):(0,r.jsx)("source",{src:e.src},e.src)})),d.length>0&&(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{i18nKey:"video_not_support",ns:"video",components:{a:(0,r.jsx)("a",{href:d[0].src,rel:"noopener noreferrer","aria-label":f("video:download_video"),children:"Download Video"})}})})]})})})]})}},80037:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return T}});var s=n(12042),r=n(99728),l=n(8014),i=n(4510),a=n(75657),o=n.n(a),c=n(75332),u=n(96787),d=n(44815),f=n.n(d),h=n(44786),v=n(31110),g=n(56168),p=n(34512),x=n(14808),m=n(31756),b=n(38281),k=n(62044),j=n(50744),w=n.n(j),y=n(16082),N=n(65692),E=n(22319),I=n(61739),P={option:function(e,t){var n=t.isSelected;return(0,r.Z)((0,s.Z)({},e),{backgroundColor:n?"#508AE1":void 0,color:n?"#FFF":void 0})}};var T=!0;t.default=function(e){var t,n,s=e.title,r=e.subTitle,a=e.content,d=e.slug,j=e.sections,T=e.videos,_=e.seo,C=(0,k.Z)("edu-stocks-slug"),S=C.t,Z=C.lang,B=(0,I.oe)("/resources/guides/stocks/".concat(d),Z,null!==(t=null===_||void 0===_?void 0:_.title)&&void 0!==t?t:s,null!==(n=null===_||void 0===_?void 0:_.description)&&void 0!==n?n:""),F=B.title,O=B.description,R=B.languageAlternates,M=B.canonical,G=(0,c.useRouter)();(0,g.useEffect)((function(){G.isReady&&G.asPath.includes("?")&&G.replace(G.asPath.split("?")[0],void 0,{shallow:!0})}),[G]);var K=g.useCallback((function(e){G.push(e.value)}),[G]),U=g.useCallback((function(e){return S(e.label)}),[S]),A=g.useMemo((function(){return[{title:S("Education Center"),link:"/resources/guides"},{title:S("Stocks Guide"),link:"/resources/guides/stocks/stocks-basics"}]}),[S]),D=g.useMemo((function(){return"en-US"!==Z?[{label:"The Basics",value:"/resources/guides/stocks/stocks-basics"},{label:"Investing in Stocks",value:"/resources/guides/stocks/investing-stocks"},{label:"Other Important Facts about Stocks",value:"/resources/guides/stocks/important-facts-stocks"},{label:"Useful Knowledge",value:"/resources/guides/stocks/useful-knowledge"},{label:"GICS",value:"/resources/guides/stocks/gics"},{label:"Tips",value:"/resources/guides/stocks/tips"},{label:"Investment",value:"/resources/guides/stocks/investment"},{label:"Make Money",value:"/resources/guides/stocks/make-money"},{label:"Debit",value:"/resources/guides/stocks/debit"},{label:"International Withdrawal",value:"/resources/guides/stocks/international-withdrawal"},{label:"Bond Fund",value:"/resources/guides/stocks/bondfund"},{label:"Financial Management",value:"/resources/guides/stocks/financialmanagement"},{label:"Stock Investing",value:"/resources/guides/stocks/stockinvesting"}]:[{label:"The Basics",value:"/resources/guides/stocks/stocks-basics"},{label:"Investing in Stocks",value:"/resources/guides/stocks/investing-stocks"},{label:"Other Important Facts about Stocks",value:"/resources/guides/stocks/important-facts-stocks"},{label:"Useful Knowledge",value:"/resources/guides/stocks/useful-knowledge"}]}),[Z]),X=g.useMemo((function(){return(0,I.Af)(D,G.asPath)}),[G,D]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(E.PB,{title:F,description:O,languageAlternates:R,canonical:M}),(0,l.jsx)(N.aG,{paths:A}),(0,l.jsx)("div",{className:"bg-white py-11",children:(0,l.jsxs)("div",{className:"container grid max-w-7xl grid-cols-12 gap-x-8",children:[(0,l.jsx)("div",{className:"col-span-12 mb-4 lg:hidden",children:(0,l.jsx)(v.ZP,{placeholder:S("Stocks Guide"),className:"w-full",onChange:K,options:D,formatOptionLabel:U,instanceId:g.useId(),defaultValue:X,styles:P,value:X})}),(0,l.jsxs)("div",{className:"col-span-12 lg:col-span-9",children:[(0,l.jsx)("h1",{className:"mb-4 font-futura text-4xl text-ft-blue",children:s}),r&&(0,l.jsx)("div",{className:"mb-4 text-xl",children:r}),a&&(0,l.jsx)(i.D,{remarkPlugins:[u.Z,f()],components:{a:h.Z},children:a}),j&&j.length>0&&(0,l.jsx)("div",{className:"flex flex-col items-start",children:j.map((function(e){return(0,l.jsx)(p.p,{children:function(t){var n=t.open;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(p.p.Button,{className:"my-2 flex w-full flex-row items-center justify-between text-lg",children:[e.Title,n?(0,l.jsx)(m,{className:"h-5 w-5","aria-hidden":"true"}):(0,l.jsx)(b,{className:"h-5 w-5","aria-hidden":"true"})]}),(0,l.jsx)(x.u,{show:n,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,l.jsx)(p.p.Panel,{children:(0,l.jsx)(i.D,{remarkPlugins:[u.Z],components:{a:h.Z},children:e.Description})})})]})}},e.title)}))})]}),(0,l.jsxs)("div",{className:"hidden lg:col-span-3 lg:block",children:[(0,l.jsxs)("div",{className:"mb-8 flex flex-col gap-y-2 divide-y divide-solid divide-grayish-blue rounded-xl bg-grey-smoke px-5 py-4",children:[(0,l.jsx)("div",{className:"mb-4 font-futura text-lg font-semibold",children:S("Stocks Guide")}),D.map((function(e){return(0,l.jsx)(o(),{legacyBehavior:!0,href:e.value,children:(0,l.jsx)("a",{className:w()("pt-2",G.asPath.includes(e.value)?"text-ft-slate":"text-strong-blue"),children:S(e.label)})},e.label)}))]}),T.length>0&&(0,l.jsx)("div",{className:"flex flex-col items-start gap-8",children:T.map((function(e){return(0,l.jsx)("div",{children:(0,l.jsx)(y.Z,{title:e.title,subTitle:e.subTitle,classNames:e.classNames,sources:e.sources})},e.title)}))})]})]})})]})}}},function(e){e.O(0,[2319,1110,1854,9002,9774,2888,179],(function(){return t=22898,e(e.s=t);var t}));var t=e.O();_N_E=t}]);