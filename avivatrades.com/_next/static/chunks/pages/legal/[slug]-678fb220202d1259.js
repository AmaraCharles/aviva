(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9038],{81289:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/legal/[slug]",function(){return n(37715)}])},44786:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(8014),a=n(75657),i=n.n(a);function l(t){var e=t.href,n=t.children;if(/.xls|.csv|.pdf|.xml|.doc/.test(e))return(0,r.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:n});var a=/^https?:\/\//.test(e)&&!/www.Capitaltradenow|invest.Capitaltradenow|signup.Capitaltradenow/.test(e);return(0,r.jsx)(i(),{href:e,legacyBehavior:!0,children:(0,r.jsx)("a",{ref:e,target:a?"_blank":null,rel:a?"noopener noreferrer":null,children:n})})}},61739:function(t,e,n){"use strict";n.d(e,{Af:function(){return p},F3:function(){return d},lj:function(){return g},oe:function(){return f},xG:function(){return h}});var r=n(43692),a=n(12042),i=n(99728),l=n(21157),u=n(61557),o=n(65954),s=function(t){return"zh-CN"===t?"zh-CN":"zh-Hant"===t?"zh-TW":"en-US"},c=function(t,e,n){return("en-US"===n?"".concat(t).concat(e):"".concat(t,"/").concat(n).concat(e)).replace(/\/+$/,"")},f=function(t,e,n,r){var a="https://www.proultimatewealth.com",i={title:n||"",description:r||""};return i.canonical=c(a,t,e),i.languageAlternates=[{href:c(a,t,"en-US"),hrefLang:"en"},{href:c(a,t,"zh-CN"),hrefLang:"zh-hans"},{href:c(a,t,"zh-TW"),hrefLang:"zh-hant"},{href:c(a,t,"en-US"),hrefLang:"x-default"}],i},d=function(t,e){if(t.length<=e)return[t];for(var n=[],r=0;r<t.length;)n.push(t.slice(r,r+e)),r+=e;return n},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,i.Z)((0,a.Z)({style:"currency"},n),{currency:e})).format(t)},g=function(t,e,n){return 1===t?e*(1+n):g(t-1,e,n)+e*Math.pow(1+n,t)},p=(function(){var t=(0,r.Z)((function(t,e){var n,r,a,i,l,c,f,d,h,g,p,v=arguments;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return n=v.length>2&&void 0!==v[2]&&v[2],r=[],a=function(n){var r={fields:["Slug","locale"],locale:"all",pagination:{page:n,pageSize:100}};return e&&(r.filters=e),(0,o.s1)(t,{params:r})},i=function(t){t.length&&t.forEach((function(t){var e=s(t.attributes.locale);r.push({params:n?{slug:[t.attributes.Slug]}:{slug:t.attributes.Slug},locale:e})}))},[4,a(1)];case 1:if(l=u.sent(),c=l.data,f=c.data,d=c.meta,i(f),!(d.pagination.pageCount>1))return[3,3];for(h=[],g=2;g<=d.pagination.pageCount;g+=1)p=a(g),h.push(p);return[4,Promise.all(h)];case 2:u.sent().forEach((function(t){var e=t.data.data;i(e)})),u.label=3;case 3:return[2,r]}}))}))}(),function(){var t=(0,r.Z)((function(t,e,n){var r,a,i,s,c,f,d,h,g,p,v,b,m,S,_,w,x,N,z;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return c=t.params.slug,f=t.locale,d=function(t){return"zh-CN"===t?"zh-CN":"zh-TW"===t?"zh-Hant":"en"}(f),h={},g=[(0,o.s1)("/api/guides",{params:{locale:d,filters:{Slug:{$eq:c},Category:{$eq:e}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],n&&g.push((0,o.s1)("/api/videos",{params:{locale:d,filters:{Slug:{$eq:n}},populate:"Videos"}})),[4,Promise.all(g)];case 1:return p=l.Z.apply(void 0,[u.sent(),2]),v=p[0],b=p[1],m=v.data,(null===(S=m.data)||void 0===S?void 0:S.length)?(_=(0,l.Z)(S,1),w=_[0],h.title=w.attributes.Title,h.subTitle=w.attributes.Subtitle||"",h.slug=w.attributes.Slug,h.content=w.attributes.Content||"",h.sections=w.attributes.Section||null,h.seo={title:(null===(r=w.attributes)||void 0===r||null===(a=r.SEO)||void 0===a?void 0:a.Title)||null,description:(null===(i=w.attributes)||void 0===i||null===(s=i.SEO)||void 0===s?void 0:s.Description)||null},h.videos=[],n&&(x=b.data,(null===(N=x.data)||void 0===N?void 0:N.length)&&(z=(0,l.Z)(N,1),z[0].attributes.Videos.forEach((function(t){var e={title:t.Title,subTitle:t.Time,classNames:"bg-".concat(t.Theme),alt:t.Alt,sources:[{src:t.URL,type:"video/mp4"}]};h.videos.push(e)})))),[2,h]):[2,!1]}}))}))}(),function(t,e){for(var n=null,r=0;r<t.length;r+=1){if(e.includes(t[r].value)){n=t[r];break}if(t[r].options&&(n=p(t[r].options,e)))break}return n})},37715:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return d}});var r=n(8014),a=n(1984),i=n.n(a),l=n(22319),u=n(4510),o=n(96787),s=n(44786),c=n(75332),f=n(61739);var d=!0;e.default=function(t){var e=t.title,n=t.content,a=t.slug,d=t.seo,h=(0,c.useRouter)().locale,g=(0,f.oe)("/legal/".concat(a),h,(null===d||void 0===d?void 0:d.title)||e,(null===d||void 0===d?void 0:d.description)||""),p=g.title,v=g.description,b=g.canonical,m=g.languageAlternates;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.PB,{title:p,description:v,canonical:b,languageAlternates:m}),(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:e})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"wrapper mx-2 my-6 lg:my-10",children:[(0,r.jsx)("h1",{className:"mb-4",children:e}),(0,r.jsx)(u.D,{remarkPlugins:[o.Z],components:{a:s.Z},children:n})]})})]})}}},function(t){t.O(0,[2319,1854,9774,2888,179],(function(){return e=81289,t(t.s=e);var e}));var e=t.O();_N_E=e}]);