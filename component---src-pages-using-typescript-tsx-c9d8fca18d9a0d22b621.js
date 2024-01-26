/*! For license information please see component---src-pages-using-typescript-tsx-c9d8fca18d9a0d22b621.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[970],{8619:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return c}});var o=n(7294),a=n(1883),r=n(5592),i=n(9357);const c=()=>o.createElement(i.Z,{title:"Using TypeScript"});t.default=e=>{let{data:t,location:n}=e;return o.createElement(r.Z,null,o.createElement("h1",null,"Gatsby supports ",o.createElement("b",null,"TypeScript by default")),o.createElement("p",null,"This means that you can create and write ",o.createElement("code",null,".ts/.tsx")," files for your pages, components, and ",o.createElement("code",null,"gatsby-*")," configuration files (for example ",o.createElement("code",null,"gatsby-config.ts"),")."),o.createElement("p",null,"For type checking you'll want to install ",o.createElement("code",null,"typescript")," via npm and run ",o.createElement("code",null,"tsc --init")," to create a ",o.createElement("code",null,"tsconfig")," file."),o.createElement("p",null,"You're currently on the page ",o.createElement("code",null,n.pathname)," which was built on ",t.site.buildTime,"."),o.createElement("p",null,"To learn more, head over to our"," ",o.createElement("a",{href:"https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/"},"documentation about TypeScript"),"."),o.createElement(a.Link,{to:"/"},"Go back to the homepage"))}},5592:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(7294),a=n(1883);var r=e=>{let{siteTitle:t}=e;return o.createElement("header",{style:{margin:"0 auto",padding:"var(--space-4) var(--size-gutter)",display:"flex",alignItems:"center",justifyContent:"space-between"}},o.createElement(a.Link,{to:"/",style:{fontSize:"var(--font-sm)",textDecoration:"none",color:"var(--color-primary)",fontWeight:"bold",position:"relative"}},t),o.createElement("a",{href:"#meet-team",onClick:e=>{e.preventDefault();const t=document.getElementById("meet-team");t&&t.scrollIntoView({behavior:"smooth",block:"start"})},style:{color:"var(--color-primary)",fontWeight:"bold",cursor:"pointer",position:"relative",textDecoration:"underline",transition:"color 0.3s ease-in-out"},onMouseEnter:e=>e.target.style.color="var(--color-secondary)",onMouseLeave:e=>e.target.style.color="var(--color-primary)"},"Team"))};var i=e=>{var t;let{children:i}=e;const c=(0,a.useStaticQuery)("3649515864");return"undefined"!=typeof window&&n(3002)('a[href*="#"]'),o.createElement(o.Fragment,null,o.createElement(r,{siteTitle:(null===(t=c.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),o.createElement("div",{style:{margin:"0 auto",padding:"var(--size-gutter)",background:"rgb(172,219,232)",background:"linear-gradient(rgba(230,246,251,1), rgba(170,220,224,1), rgba(111,178,192,1))"}},o.createElement("main",null,i),o.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",o.createElement("a",{href:"https://www.gatsbyjs.com",style:{color:"black"}},"Gatsby"))))}},9357:function(e,t,n){"use strict";var o=n(7294),a=n(1883);t.Z=function(e){var t,n;let{description:r,title:i,children:c}=e;const{site:l}=(0,a.useStaticQuery)("63159454"),s=r||l.siteMetadata.description,u=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return o.createElement(o.Fragment,null,o.createElement("title",null,u?i+" | "+u:i),o.createElement("meta",{name:"description",content:s}),o.createElement("meta",{property:"og:title",content:i}),o.createElement("meta",{property:"og:description",content:s}),o.createElement("meta",{property:"og:type",content:"website"}),o.createElement("meta",{name:"twitter:card",content:"summary"}),o.createElement("meta",{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""}),o.createElement("meta",{name:"twitter:title",content:i}),o.createElement("meta",{name:"twitter:description",content:s}),c)}},3002:function(e,t,n){var o,a;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),a=Math.max(0,16-(o-e)),r=window.setTimeout((function(){t(o+a)}),a);return e=o+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),a=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},a=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n},i=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},c=function(t,n,o,a){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:a}});document.dispatchEvent(r)}};return function(l,s){var u,m,d,f,p={cancelScroll:function(e){cancelAnimationFrame(f),f=null,e||c("scrollCancel",u)},animateScroll:function(o,l,s){p.cancelScroll();var m=n(u||t,s||{}),h="[object Number]"===Object.prototype.toString.call(o),g=h||!o.tagName?null:o;if(h||g){var y=e.pageYOffset;m.header&&!d&&(d=document.querySelector(m.header));var v,E,w,b,S,A,C,M,O=r(d),T=h?o:function(t,n,o,r){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-o,0),r&&(i=Math.min(i,a()-e.innerHeight)),i}(g,O,parseInt("function"==typeof m.offset?m.offset(o,l):m.offset,10),m.clip),I=T-y,F=a(),k=0,q=(v=I,w=(E=m).speedAsDuration?E.speed:Math.abs(v/1e3*E.speed),E.durationMax&&w>E.durationMax?E.durationMax:E.durationMin&&w<E.durationMin?E.durationMin:parseInt(w,10)),x=function(t){var n,a,r;b||(b=t),k+=t-b,A=y+I*(a=S=1<(S=0===q?0:k/q)?1:S,"easeInQuad"===(n=m).easing&&(r=a*a),"easeOutQuad"===n.easing&&(r=a*(2-a)),"easeInOutQuad"===n.easing&&(r=a<.5?2*a*a:(4-2*a)*a-1),"easeInCubic"===n.easing&&(r=a*a*a),"easeOutCubic"===n.easing&&(r=--a*a*a+1),"easeInOutCubic"===n.easing&&(r=a<.5?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1),"easeInQuart"===n.easing&&(r=a*a*a*a),"easeOutQuart"===n.easing&&(r=1- --a*a*a*a),"easeInOutQuart"===n.easing&&(r=a<.5?8*a*a*a*a:1-8*--a*a*a*a),"easeInQuint"===n.easing&&(r=a*a*a*a*a),"easeOutQuint"===n.easing&&(r=1+--a*a*a*a*a),"easeInOutQuint"===n.easing&&(r=a<.5?16*a*a*a*a*a:1+16*--a*a*a*a*a),n.customEasing&&(r=n.customEasing(a)),r||a),e.scrollTo(0,Math.floor(A)),function(t,n){var a=e.pageYOffset;if(t==n||a==n||(y<n&&e.innerHeight+a)>=F)return p.cancelScroll(!0),i(o,n,h),c("scrollStop",m,o,l),!(f=b=null)}(A,T)||(f=e.requestAnimationFrame(x),b=t)};0===e.pageYOffset&&e.scrollTo(0,0),C=o,M=m,h||history.pushState&&M.updateURL&&history.pushState({smoothScroll:JSON.stringify(M),anchor:C.id},document.title,C===document.documentElement?"#top":"#"+C.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(o,Math.floor(T),!1):(c("scrollStart",m,o,l),p.cancelScroll(!0),e.requestAnimationFrame(x))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(m=t.target.closest(l))&&"a"===m.tagName.toLowerCase()&&!t.target.closest(u.ignore)&&m.hostname===e.location.hostname&&m.pathname===e.location.pathname&&/#/.test(m.href)){var n,a;try{n=o(decodeURIComponent(m.hash))}catch(t){n=o(m.hash)}if("#"===n){if(!u.topOnEmptyHash)return;a=document.documentElement}else a=document.querySelector(n);(a=a||"#top"!==n?a:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(u),p.animateScroll(a,m))}},g=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||p.animateScroll(t,null,{updateURL:!1})}};return p.destroy=function(){u&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",g,!1),p.cancelScroll(),f=d=m=u=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),u=n(t,s||{}),d=u.header?document.querySelector(u.header):null,document.addEventListener("click",h,!1),u.updateURL&&u.popstate&&e.addEventListener("popstate",g,!1)}(),p}}(a)}.apply(t,[]),void 0===o||(e.exports=o)}}]);
//# sourceMappingURL=component---src-pages-using-typescript-tsx-c9d8fca18d9a0d22b621.js.map