/*! For license information please see component---src-pages-index-js-2b841ed999ab15e0c2fb.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5592:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(1883);var i=e=>{let{siteTitle:t}=e;return r.createElement("header",{style:{margin:"0 auto",padding:"var(--space-4) var(--size-gutter)",display:"flex",alignItems:"center",justifyContent:"space-between"}},r.createElement(a.Link,{to:"/",style:{fontSize:"var(--font-sm)",textDecoration:"none",color:"var(--color-primary)",fontWeight:"bold",position:"relative"}},t),r.createElement("a",{href:"#meet-team",onClick:e=>{e.preventDefault();const t=document.getElementById("meet-team");t&&t.scrollIntoView({behavior:"smooth",block:"start"})},style:{color:"var(--color-primary)",fontWeight:"bold",cursor:"pointer",position:"relative",textDecoration:"underline",transition:"color 0.3s ease-in-out"},onMouseEnter:e=>e.target.style.color="var(--color-secondary)",onMouseLeave:e=>e.target.style.color="var(--color-primary)"},"Team"))};var o=e=>{var t;let{children:o}=e;const c=(0,a.useStaticQuery)("3649515864");return"undefined"!=typeof window&&n(3002)('a[href*="#"]'),r.createElement(r.Fragment,null,r.createElement(i,{siteTitle:(null===(t=c.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("div",{style:{margin:"0 auto",padding:"var(--size-gutter)",background:"linear-gradient(rgba(230,246,251,1), rgba(170,220,224,1), rgba(230,246,251,1))"}},r.createElement("main",null,o),r.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com",style:{color:"black"}},"Gatsby"))))}},9357:function(e,t,n){"use strict";var r=n(7294),a=n(1883);t.Z=function(e){var t,n;let{description:i,title:o,children:c}=e;const{site:l}=(0,a.useStaticQuery)("63159454"),s=i||l.siteMetadata.description,u=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?o+" | "+u:o),r.createElement("meta",{name:"description",content:s}),r.createElement("meta",{property:"og:title",content:o}),r.createElement("meta",{property:"og:description",content:s}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""}),r.createElement("meta",{name:"twitter:title",content:o}),r.createElement("meta",{name:"twitter:description",content:s}),c)}},6194:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return I},default:function(){return A}});var r=n(7294),a=n(5592),i=n(9357),o=n.p+"static/profile-mar-739c6760831e8c101644ea5acf46ca37.jpg",c=n.p+"static/profile-vicente-b2a9c5989e2dd4d69bf18f7e8470a7b1.jpg",l=n.p+"static/profile-liz-74f120a52adbe8702423acb11f66134e.jpg",s=n.p+"static/profile-ricardo-14ce457a6e51195c0071c44f15e527dc.jpg",u=n.p+"static/profile-montse-b207e9a7627e02eab2f455e94b970a5f.jpg",m=n.p+"static/profile-iker-e82f1619a9a92b64c739f63d3304f632.jpg",d=n.p+"static/profile-pedro-a3e234f9b13dcb232cab17b3d8fc3af2.jpg";var f=e=>{let{name:t,description:n,imageNumber:a,linkedinUrl:i}=e;const f=(()=>{switch(a){case 1:return o;case 2:return c;case 3:return l;case 4:return s;case 5:return u;case 6:return m;case 7:return d;default:return null}})();return r.createElement("div",{className:"MemberCard-module--memberCard--4a783"},r.createElement("div",{className:"MemberCard-module--roundedImage--40e0b"},f&&r.createElement("img",{src:f,alt:"",width:100,height:100})),r.createElement("div",{className:"MemberCard-module--memberInfo--02f61"},r.createElement("h3",null,r.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},t)),r.createElement("p",null,n)))},p=Object.defineProperty,h=(e,t,n)=>(((e,t,n)=>{t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n),g=new Map,b=new WeakMap,v=0,y=void 0;function w(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(b.has(n)||(v+=1,b.set(n,v.toString())),b.get(n)):"0"):e[t]}`;var n})).toString()}function E(e,t,n={},r=y){if(void 0===window.IntersectionObserver&&void 0!==r){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:i,elements:o}=function(e){let t=w(e),n=g.get(t);if(!n){const r=new Map;let a;const i=new IntersectionObserver((t=>{t.forEach((t=>{var n;const i=t.isIntersecting&&a.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(n=r.get(t.target))||n.forEach((e=>{e(i,t)}))}))}),e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},g.set(t,n)}return n}(n);let c=o.get(e)||[];return o.has(e)||o.set(e,c),c.push(t),i.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(o.delete(e),i.unobserve(e)),0===o.size&&(i.disconnect(),g.delete(a))}}r.Component;var S=n.p+"static/TMR-5-daf5e13d8a341c7b4d31a0c66b295314.jpeg",O=n.p+"static/TMR-2-4038f87d0d0a63be82bc40c9db2e2fcd.jpg",C=n.p+"static/TMR-3-9dae82fa475dc1ac5fc3cd5e814c3f49.jpg",M=n.p+"static/TMR-6-103d66125be778f9e1e919f433298a44.jpeg";var k=e=>{let{text:t,imageNumber:n,reverse:a}=e;const[i,o]=function({threshold:e,delay:t,trackVisibility:n,rootMargin:a,root:i,triggerOnce:o,skip:c,initialInView:l,fallbackInView:s,onChange:u}={}){var m;const[d,f]=r.useState(null),p=r.useRef(),[h,g]=r.useState({inView:!!l,entry:void 0});p.current=u,r.useEffect((()=>{if(c||!d)return;let r;return r=E(d,((e,t)=>{g({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&o&&r&&(r(),r=void 0)}),{root:i,rootMargin:a,threshold:e,trackVisibility:n,delay:t},s),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,d,i,a,o,c,n,s,t]);const b=null==(m=h.entry)?void 0:m.target,v=r.useRef();d||!b||o||c||v.current===b||(v.current=b,g({inView:!!l,entry:void 0}));const y=[f,h.inView,h.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}({triggerOnce:!0}),c=(()=>{switch(n){case 1:return S;case 2:return O;case 3:return M;case 4:return C;default:return null}})();return r.createElement("div",{ref:i,className:"InfoSection-module--container--3f90b "+(a?"InfoSection-module--reverse--b96f7":"")+" "+(o?"InfoSection-module--visible--86937":"")},r.createElement("h2",{className:"InfoSection-module--text--a6dbe"},t),r.createElement("div",{className:"InfoSection-module--rectangle--b5d15"},c&&r.createElement("img",{src:c,alt:"",className:"InfoSection-module--img--91bf2"})))},N="index-module--icon--be16c",j=n(2091);const x=[{name:"Marlene Cobian",description:"Mechatronics Engineer",imageNumber:1,linkedinUrl:"https://www.linkedin.com/in/marlene-cobian/"},{name:"Vicente Ruiz",description:"Mechatronics Eng. Student",imageNumber:2,linkedinUrl:"https://www.linkedin.com/in/vicenteimt2023/"},{name:"Lizette Cruz",description:"Mechatronics Eng. Student",imageNumber:3,linkedinUrl:"linkedin.com/in/lizette-cruz-rodríguez-2b2b7427b"},{name:"Ricardo Berumen",description:"Mechatronics Eng. Student",imageNumber:4,linkedinUrl:"https://www.linkedin.com/in/ricardo-berumen-arellano/"},{name:"Montserrat Ballesteros",description:"Mechatronics Eng. Student",imageNumber:5,linkedinUrl:"https://www.linkedin.com/in/montserratballesterosherrera/"},{name:"Iker Casillas",description:"Computer Science Student",imageNumber:6,linkedinUrl:"https://www.linkedin.com/in/ikercasillass/"},{name:"Pedro Deniz",description:"Mechatronics Engineer",imageNumber:7,linkedinUrl:"https://www.linkedin.com/in/pedro-deniz/"}],I=()=>r.createElement(i.Z,{title:"Home"});var A=()=>r.createElement(a.Z,null,r.createElement("div",null,r.createElement("div",{className:"index-module--textCenter--5cd6d"},r.createElement("h1",{className:"index-module--title--b96c1"},"Welcome to ",r.createElement("b",null,"Blenders FC!")),r.createElement("div",null,r.createElement("p",{className:"index-module--description--c0179"},"We are a passionate Mexican robotics team based in Guadalajara, Mexico. Preparing for potential entry into the RoboCup Humanoid League KidSize Soccer division. Within this website, we proudly share our ongoing advancements, innovative pursuits, and the collective spirit that defines us. 🤖⚽🥅"),r.createElement("div",{className:"index-module--iconContainer--bbef6"},r.createElement("a",{href:"https://github.com/BlendersFC",target:"_blank",rel:"noopener noreferrer"},r.createElement(j.hJX,{className:N})),r.createElement("a",{href:"https://www.instagram.com/robotec.gdl/",target:"_blank",rel:"noopener noreferrer"},r.createElement(j.Zf_,{className:N}))))),r.createElement("br",null),r.createElement("div",{className:"index-module--mainSection--574ef"},r.createElement(k,{text:"Witness the magic of the only team that could sign Lionel Mechssi and Cristiano Robonaldo",imageNumber:1,reverse:!1}),r.createElement(k,{text:"We're proudly representing Tecnológico de Monterrey",imageNumber:2,reverse:!0}),r.createElement(k,{text:"We actively participated in the Mexican Tournament of Robotics 2023",imageNumber:3,reverse:!1}),r.createElement(k,{text:"Join our journey to conquer the RoboCup championship!",imageNumber:4,reverse:!0})),r.createElement("div",{className:"index-module--memberSection--8334a"},r.createElement("h2",{className:"index-module--memberSectionTitle--ebe60",id:"meet-team"},"Meet the Team!"),r.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.createElement("div",{className:"index-module--memberContainer--0aded"},x.map(((e,t)=>t%2==0&&r.createElement("div",{key:t,className:"index-module--memberCardGroup--da9b2"},r.createElement(f,x[t]),t+1<x.length&&r.createElement(f,x[t+1])))))),r.createElement("br",null))))},3002:function(e,t,n){var r,a;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),r=this;do{for(t=n.length;0<=--t&&n.item(t)!==r;);}while(t<0&&(r=r.parentElement));return r}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),a=Math.max(0,16-(r-e)),i=window.setTimeout((function(){t(r+a)}),a);return e=r+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),a=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,a=-1,i="",o=n.charCodeAt(0);++a<r;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===o?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+i},a=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n},o=function(t,n,r){0===t&&document.body.focus(),r||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},c=function(t,n,r,a){if(n.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:a}});document.dispatchEvent(i)}};return function(l,s){var u,m,d,f,p={cancelScroll:function(e){cancelAnimationFrame(f),f=null,e||c("scrollCancel",u)},animateScroll:function(r,l,s){p.cancelScroll();var m=n(u||t,s||{}),h="[object Number]"===Object.prototype.toString.call(r),g=h||!r.tagName?null:r;if(h||g){var b=e.pageYOffset;m.header&&!d&&(d=document.querySelector(m.header));var v,y,w,E,S,O,C,M,k=i(d),N=h?r:function(t,n,r,i){var o=0;if(t.offsetParent)for(;o+=t.offsetTop,t=t.offsetParent;);return o=Math.max(o-n-r,0),i&&(o=Math.min(o,a()-e.innerHeight)),o}(g,k,parseInt("function"==typeof m.offset?m.offset(r,l):m.offset,10),m.clip),j=N-b,x=a(),I=0,A=(v=j,w=(y=m).speedAsDuration?y.speed:Math.abs(v/1e3*y.speed),y.durationMax&&w>y.durationMax?y.durationMax:y.durationMin&&w<y.durationMin?y.durationMin:parseInt(w,10)),R=function(t){var n,a,i;E||(E=t),I+=t-E,O=b+j*(a=S=1<(S=0===A?0:I/A)?1:S,"easeInQuad"===(n=m).easing&&(i=a*a),"easeOutQuad"===n.easing&&(i=a*(2-a)),"easeInOutQuad"===n.easing&&(i=a<.5?2*a*a:(4-2*a)*a-1),"easeInCubic"===n.easing&&(i=a*a*a),"easeOutCubic"===n.easing&&(i=--a*a*a+1),"easeInOutCubic"===n.easing&&(i=a<.5?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1),"easeInQuart"===n.easing&&(i=a*a*a*a),"easeOutQuart"===n.easing&&(i=1- --a*a*a*a),"easeInOutQuart"===n.easing&&(i=a<.5?8*a*a*a*a:1-8*--a*a*a*a),"easeInQuint"===n.easing&&(i=a*a*a*a*a),"easeOutQuint"===n.easing&&(i=1+--a*a*a*a*a),"easeInOutQuint"===n.easing&&(i=a<.5?16*a*a*a*a*a:1+16*--a*a*a*a*a),n.customEasing&&(i=n.customEasing(a)),i||a),e.scrollTo(0,Math.floor(O)),function(t,n){var a=e.pageYOffset;if(t==n||a==n||(b<n&&e.innerHeight+a)>=x)return p.cancelScroll(!0),o(r,n,h),c("scrollStop",m,r,l),!(f=E=null)}(O,N)||(f=e.requestAnimationFrame(R),E=t)};0===e.pageYOffset&&e.scrollTo(0,0),C=r,M=m,h||history.pushState&&M.updateURL&&history.pushState({smoothScroll:JSON.stringify(M),anchor:C.id},document.title,C===document.documentElement?"#top":"#"+C.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?o(r,Math.floor(N),!1):(c("scrollStart",m,r,l),p.cancelScroll(!0),e.requestAnimationFrame(R))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(m=t.target.closest(l))&&"a"===m.tagName.toLowerCase()&&!t.target.closest(u.ignore)&&m.hostname===e.location.hostname&&m.pathname===e.location.pathname&&/#/.test(m.href)){var n,a;try{n=r(decodeURIComponent(m.hash))}catch(t){n=r(m.hash)}if("#"===n){if(!u.topOnEmptyHash)return;a=document.documentElement}else a=document.querySelector(n);(a=a||"#top"!==n?a:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(u),p.animateScroll(a,m))}},g=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||p.animateScroll(t,null,{updateURL:!1})}};return p.destroy=function(){u&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",g,!1),p.cancelScroll(),f=d=m=u=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),u=n(t,s||{}),d=u.header?document.querySelector(u.header):null,document.addEventListener("click",h,!1),u.updateURL&&u.popstate&&e.addEventListener("popstate",g,!1)}(),p}}(a)}.apply(t,[]),void 0===r||(e.exports=r)},3621:function(e,t,n){"use strict";n.d(t,{w_:function(){return f}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=["attr","size","title"];function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.map(((e,t)=>r.createElement(e.tag,u({key:t},e.attr),d(e.child))))}function f(e){return t=>r.createElement(p,l({attr:u({},e.attr)},t),d(e.child))}function p(e){var t=t=>{var n,{attr:a,size:i,title:s}=e,m=c(e,o),d=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,m,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-2b841ed999ab15e0c2fb.js.map