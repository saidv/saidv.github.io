(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(5893),a=n(7294);t.default=function({html:e,height:t=null,width:n=null,children:i,dataNtpc:o=""}){return(0,a.useEffect)(()=>{o&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${o}`}})},[o]),(0,r.jsxs)(r.Fragment,{children:[i,e?(0,r.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=n?`${n}px`:"auto"},"data-ntpc":o,dangerouslySetInnerHTML:{__html:e}}):null]})}},7834:function(e,t,n){"use strict";let r;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let i=n(5893),o=n(7294),s=a(n(4298));t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===r&&(r=n),(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${n}'] = window['${n}'] || [];
          function gtag(){window['${n}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`}}),(0,i.jsx)(s.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`})]})},t.sendGAEvent=function(...e){if(void 0===r){console.warn("@next/third-parties: GA has not been initialized");return}window[r]?window[r].push(arguments):console.warn(`@next/third-parties: GA dataLayer ${r} does not exist`)}},3632:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(5893),i=n(6257),o=r(n(9477));t.default=function(e){let{apiKey:t,...n}=e,r={...n,key:t},{html:s}=(0,i.GoogleMapsEmbed)(r);return(0,a.jsx)(o.default,{height:r.height||null,width:r.width||null,html:s,dataNtpc:"GoogleMapsEmbed"})}},674:function(e,t,n){"use strict";let r;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let i=n(5893),o=n(7294),s=a(n(4298));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:a,preview:l,dataLayer:c}=e;void 0===r&&(r=n);let u="dataLayer"!==n?`&l=${n}`:"",d=a?`&gtm_auth=${a}`:"",p=l?`&gtm_preview=${l}&gtm_cookies_win=x`:"";return(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${c?`w[l].push(${JSON.stringify(c)})`:""}
      })(window,'${n}');`}}),(0,i.jsx)(s.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${u}${d}${p}`})]})},t.sendGTMEvent=e=>{if(void 0===r){console.warn("@next/third-parties: GTM has not been initialized");return}window[r]?window[r].push(e):console.warn(`@next/third-parties: GTM dataLayer ${r} does not exist`)}},9692:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var a=n(3632);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return r(a).default}});var i=n(1494);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return r(i).default}});var o=n(674);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return o.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return o.sendGTMEvent}});var s=n(7834);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return s.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return s.sendGAEvent}})},1494:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(5893),i=r(n(4298)),o=n(6257),s=r(n(9477)),l={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:n,stylesheets:r}=(0,o.YouTubeEmbed)(e);return(0,a.jsx)(s.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==n?void 0:n.map(e=>(0,a.jsx)(i.default,{src:e.url,strategy:l[e.strategy],stylesheets:r},e.url))})}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8946)}])},5740:function(e,t,n){"use strict";n.d(t,{Fw:function(){return c},HG:function(){return l},IS:function(){return a},KD:function(){return i},Kn:function(){return o},fK:function(){return s},hY:function(){return d},uN:function(){return u}});var r=n(5893);let a={author:"Said hourdane",title:"Portfolio | Said Hourdane",description:"Said Hourdane is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",siteUrl:"https://www.shubhporwal.me/",twitterHandle:"@shubhporwal24",keywords:"Said Hourdane, Frontend Engineer, React Native Developer, Software Engineer, Portfolio, Devfolio, Folio",image:"https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",language:"English",themeColor:"#000000"},i=[{name:"Home",ref:"home"},{name:"Skills",ref:"skills"},{name:"Projects",ref:"projects"},{name:"Work",ref:"work"},{name:"Contact",ref:"contact"}],o=["A pragmatic Frontend Developer","I build things for the web","I create aesthetic and modern apps"],s=[{name:"mail",url:"mailto: shubhporwal73@gmail.com"},{name:"linkedin",url:"https://www.linkedin.com/"},{name:"github",url:"https://github.com/"},{name:"instagram",url:"https://www.instagram.com//"},{name:"twitter",url:"https://x.com/"}],l={languagesAndTools:["html","css","javascript","typescript","sass","nodejs","webpack","vite","firebase","figma","tanstack-query"],librariesAndFrameworks:["react","redux","nextjs","tailwindcss","styledcomponents","antdesign","chakra-ui"],databases:["mysql","mongodb"],other:["git","sanity-io"]},c=[{name:"Airbnb",image:"/projects/airbnb.webp",blurImage:"/projects/blur/airbnb-blur.webp",description:"Airbnb UI clone using NextJS + Tailwind CSS \uD83D\uDECF️",gradient:["#F14658","#DC2537"],url:"https://shubh73-airbnb.vercel.app/",tech:["react","nextjs","tailwindcss","mapbox"]},{name:"Medium",image:"/projects/medium.webp",blurImage:"/projects/blur/medium-blur.webp",description:"Medium UI clone using NextJS + Tailwind CSS ✍\uD83C\uDFFB",gradient:["#FFA62E","#EA4D2C"],url:"https://shubh73-medium.vercel.app/",tech:["typescript","react","nextjs","tailwindcss","sanity.io"]},{name:"Inshorts",image:"/projects/inshorts.webp",blurImage:"/projects/blur/airbnb-blur.webp",description:"Conversational Voice Controlled React News Application using Alan AI \uD83C\uDF99",gradient:["#000066","#6699FF"],url:"https://shubh73-inshorts.netlify.app/",tech:["react","chakra-ui","alan"]},{name:"Tesla",image:"/projects/tesla.webp",blurImage:"/projects/blur/tesla-blur.webp",description:"A Tesla React Native App \uD83C\uDFCE️",gradient:["#142D46","#2E4964"],url:"https://github.com/shubh73/tesla",tech:["react"]}],u={DUKAAN:[{title:"Dukaan",description:"Dukaan is a platform that enables businesses to launch their online stores at ease.",content:(0,r.jsx)("div",{className:"h-full w-full flex items-center justify-center text-white px-4",children:"Revolutionizing commerce, one click at a time"})},{title:"Transformation",description:"Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",content:(0,r.jsx)("div",{className:"h-full w-full flex items-center justify-center text-white px-4",children:"Senior Frontend Engineer"})},{title:"Evolution",description:"Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",content:(0,r.jsx)("div",{className:"h-full w-full flex items-center justify-center text-white px-4",children:"Frontend Engineer"})},{title:"Optimization",description:"Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",content:(0,r.jsx)("div",{className:"h-full w-full flex items-center justify-center text-white px-4",children:"Frontend Engineer Intern"})}],AVIATE:[{title:"Aviate",description:"Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",content:(0,r.jsx)("div",{className:"h-full w-full flex items-center justify-center text-white px-4",children:"Finding the right job isn't fate, it's navigation"})},{title:"Innovation",description:"I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",content:(0,r.jsx)("div",{className:"h-full w-full flex items-center justify-center text-white px-4",children:"Frontend Developer Intern"})}],SPACENOS:[{title:"Spacenos",description:"A dynamic startup dedicated to creating innovative products that make the world a better place.",content:(0,r.jsx)("div",{className:"h-full w-full flex items-center justify-center text-white px-4",children:"We build apps that solve problems for the next billion people"})},{title:"Trailblazing",description:"I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",content:(0,r.jsx)("div",{className:"h-full w-full flex items-center justify-center text-white px-4",children:"Web Developer Intern"})}]},d=""},8946:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),a=n(5571),i=n.n(a),o=n(3601),s=n.n(o),l=n(9692),c=n(9008),u=n.n(c),d=n(5740),p=()=>(0,r.jsxs)(u(),{children:[(0,r.jsx)("title",{children:d.IS.title}),(0,r.jsx)("meta",{name:"description",content:d.IS.description}),(0,r.jsx)("meta",{name:"keywords",content:d.IS.keywords}),(0,r.jsx)("meta",{name:"robots",content:"index,follow"}),(0,r.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,r.jsx)("meta",{name:"language",content:d.IS.language}),(0,r.jsx)("meta",{name:"author",content:d.IS.author}),(0,r.jsx)("meta",{name:"theme-color",content:d.IS.themeColor}),(0,r.jsx)("meta",{httpEquiv:"content-language",content:"en"}),(0,r.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:d.IS.title}),(0,r.jsx)("meta",{property:"og:description",content:d.IS.description}),(0,r.jsx)("meta",{property:"og:image",content:d.IS.image}),(0,r.jsx)("meta",{property:"og:url",content:d.IS.siteUrl}),(0,r.jsx)("meta",{property:"og:site_name",content:d.IS.title}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:title",content:d.IS.title}),(0,r.jsx)("meta",{property:"twitter:description",content:d.IS.description}),(0,r.jsx)("meta",{property:"twitter:site",content:d.IS.twitterHandle}),(0,r.jsx)("meta",{name:"twitter:creator",content:d.IS.twitterHandle}),(0,r.jsx)("meta",{property:"twitter:url",content:d.IS.siteUrl}),(0,r.jsx)("meta",{property:"twitter:image",content:d.IS.image}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#7000FF"}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.json"})]});n(2877);var m=e=>{let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsxs)("main",{className:"".concat(i().variable," font-sans ").concat(s().variable," font-mono"),children:[(0,r.jsx)(t,{...n}),(0,r.jsx)(l.GoogleAnalytics,{gaId:d.hY})]})]})}},2877:function(){},3601:function(e){e.exports={style:{fontFamily:"'__JetBrains_Mono_3c557b', '__JetBrains_Mono_Fallback_3c557b'",fontStyle:"normal"},className:"__className_3c557b",variable:"__variable_3c557b"}},5571:function(e){e.exports={style:{fontFamily:"'__calibre_00c660', '__calibre_Fallback_00c660'"},className:"__className_00c660",variable:"__variable_00c660"}},9008:function(e,t,n){e.exports=n(7828)},4298:function(e,t,n){e.exports=n(2892)},6257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var r=n(3494);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return r.GoogleAnalytics}});var a=n(4248);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return a.GoogleMapsEmbed}});var i=n(2239);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return i.YouTubeEmbed}})},3494:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let i=a(n(9426)),o=n(7058);t.GoogleAnalytics=e=>{var t=r(e,[]);return(0,o.formatData)(i.default,t)}},4248:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let i=a(n(7395)),o=n(7058);t.GoogleMapsEmbed=e=>{var t=r(e,[]);return(0,o.formatData)(i.default,t)}},2239:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let i=a(n(8420)),o=n(7058);t.YouTubeEmbed=e=>{var t=r(e,[]);return(0,o.formatData)(i.default,t)}},7058:function(e,t){"use strict";function n(e,t,n=!1){return t?Object.keys(e).filter(e=>n?!t.includes(e):t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}):{}}function r(e,t,n,r){let a=r&&Object.keys(r).length>0?new URL(Object.values(r)[0],e):new URL(e);return t&&n&&t.forEach(e=>{n[e]&&a.searchParams.set(e,n[e])}),a.toString()}function a(e,t,n,a,i){var o;if(!t)return`<${e}></${e}>`;let s=(null===(o=t.src)||void 0===o?void 0:o.url)?Object.assign(Object.assign({},t),{src:r(t.src.url,t.src.params,a,i)}):t,l=Object.keys(Object.assign(Object.assign({},s),n)).reduce((e,t)=>{let r=null==n?void 0:n[t],a=s[t],i=null!=r?r:a,o=!0===i?t:`${t}="${i}"`;return i?e+` ${o}`:e},"");return`<${e}${l}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=r,t.createHtml=a,t.formatData=function(e,t){var i,o,s,l,c;let u=n(t,null===(i=e.scripts)||void 0===i?void 0:i.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),d=n(t,null===(s=null===(o=e.html)||void 0===o?void 0:o.attributes.src)||void 0===s?void 0:s.params),p=n(t,[null===(c=null===(l=e.html)||void 0===l?void 0:l.attributes.src)||void 0===c?void 0:c.slugParam]),m=n(t,[...Object.keys(u),...Object.keys(d),...Object.keys(p)],!0);return Object.assign(Object.assign({},e),{html:e.html?a(e.html.element,e.html.attributes,m,d,p):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:r(e.url,e.params,u)})):null})}},9426:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},7395:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},8420:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);