/*! For license information please see component---src-pages-index-tsx-35276a402553f5f0b4ee.js.LICENSE.txt */
(self.webpackChunkMerlin_May_Author=self.webpackChunkMerlin_May_Author||[]).push([[691],{3999:function(e,t){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},316:function(e,t,n){"use strict";t.Z=void 0;var r,a=(r=n(365))&&r.__esModule?r:{default:r},o=n(3999);var i=function(e,t,n){var r=(0,o.validate)(e),i=encodeURIComponent(e);if(!r)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var s="https://merlinmay.us22.list-manage.com/subscribe/post?u=99ea9d07200ddc8eb050e1303&amp;id=824e7e1c2a&amp;f_id=00d3c7e1f0";arguments.length<3&&"string"==typeof t?s=t:"string"==typeof n&&(s=n),s=s.replace(/\/post/g,"/post-json");var c="&EMAIL=".concat(i).concat(function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r="group["===n.substring(0,6)?n:n.toUpperCase();t=t.concat("&".concat(r,"=").concat(e[n]))}return t}(t));return function(e){var t=e.url,n=e.timeout;return new Promise((function(e,r){return(0,a.default)(t,{param:"c",timeout:n},(function(t,n){t&&r(t),n&&e(n)}))}))}({url:"".concat(s).concat(c),timeout:3500})};t.Z=i},432:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return O},default:function(){return _}});var r=n(4316),a=n(1310),o=n(897),i=n(8032),s=n(316),c=n(3967),u=n.n(c),l=n(7294),f=n(5893);const d=["xxl","xl","lg","md","sm","xs"],p=l.createContext({prefixes:{},breakpoints:d,minBreakpoint:"xs"}),{Consumer:m,Provider:g}=p;function h(e,t){const{prefixes:n}=(0,l.useContext)(p);return e||n[t]||t}const b=l.forwardRef((({bsPrefix:e,variant:t,animation:n="border",size:r,as:a="div",className:o,...i},s)=>{const c=`${e=h(e,"spinner")}-${n}`;return(0,f.jsx)(a,{ref:s,...i,className:u()(o,c,r&&`${c}-${r}`,t&&`text-${t}`)})}));b.displayName="Spinner";var w=b,y=n(917);const v=(0,r.Z)("div",{target:"e1o2w87m6"})({name:"yli3cj",styles:"width:100%;padding:0rem 1rem 1rem 1rem"}),x=(0,r.Z)("input",{target:"e1o2w87m5"})({name:"1i0t4n3",styles:"border-radius:10px;border:2px solid #95a7b0;width:70%;margin-right:1rem"}),Z=(0,r.Z)("div",{target:"e1o2w87m4"})({name:"ho1qnd",styles:"display:flex;flex-direction:row"}),M=(0,r.Z)("button",{target:"e1o2w87m3"})({name:"gujzpv",styles:":disabled{background-color:#fff;color:#e5e9eb;border:2px solid #e5e9eb;}width:20%;color:rgba(0, 0, 0, 0.75);border:2px solid #95a7b0;border-radius:10px;background-color:#e5e9eb;padding:5px 10px 5px 10px"}),S=(0,r.Z)("div",{target:"e1o2w87m2"})({name:"1x6ralq",styles:"padding:0rem"}),A=(0,r.Z)("div",{target:"e1o2w87m1"})({name:"1ureh8n",styles:"padding:0rem;color:rgba(0, 0, 0, 0.65)"}),k=(0,r.Z)("div",{target:"e1o2w87m0"})({name:"sfrrpw",styles:"padding:0rem;color:rgba(225, 0, 0, 0.65)"});function C(e){const[t,n]=l.useState(""),[r,a]=l.useState(!1),[o,i]=l.useState(!1),[c,u]=l.useState(!1);l.useEffect((()=>()=>{isMounted.current=!1}),[]);const f=l.useCallback((async()=>{if(!r){a(!0);try{await(0,s.Z)(t),i(!0)}catch(e){u(!0),i(!1)}a(!1)}}),[r,t,i,a,u]);return(0,y.tZ)(v,null,(0,y.tZ)(S,null,"Email address:"),(0,y.tZ)(Z,null,(0,y.tZ)(x,{onChange:e=>{n(e.target.value),i(!1),a(!1)}}),(0,y.tZ)(M,{disabled:r||o||!(t.includes(".")&&t.includes("@")),onClick:()=>{f()}},(0,y.tZ)(l.Fragment,null,r&&(0,y.tZ)(l.Fragment,null,(0,y.tZ)(w,{size:"sm"})," ",(0,y.tZ)(l.Fragment,null," ")),"Subscribe"))),o&&(0,y.tZ)(A,null,"Thank you for subscribing!"),c&&(0,y.tZ)(k,null,"Oops! Something went wrong..."))}const z=(0,r.Z)("div",{target:"e1xy6q063"})({name:"99rot3",styles:"@media (max-width: 600px){flex-direction:column;}display:flex;flex-direction:row;align-items:center"}),E=(0,r.Z)("div",{target:"e1xy6q062"})({name:"io8biv",styles:"@media (max-width: 600px){width:100%;padding:0.5rem;}width:50%;padding:1rem"}),N=(0,r.Z)("div",{target:"e1xy6q061"})({name:"1fa402u",styles:"@media (max-width: 600px){height:5%;width:100%;padding:0.5rem;}width:9%;padding:1rem"}),j=(0,r.Z)("div",{target:"e1xy6q060"})({name:"13ns6z5",styles:"@media (max-width: 600px){width:100%;padding:0.5rem;}width:41%;padding:1rem;align-content:right"});var _=()=>(0,y.tZ)(a.Z,{page:"About",title:"Merlin May - Author",SeoDescription:"The official website of Merlin May.",SeoKeywords:["Merlin May","Author","Author Merlin May","fiction writer Merlin May"]},(0,y.tZ)(o.uT,null,(0,y.tZ)(o.NZ,null,"About Merlin"),(0,y.tZ)(z,null,(0,y.tZ)(E,null,"Merlin May is a software engineer and author based in London, United Kingdom. They hope to write their first novel soon, if they can stop getting distracted by every single detail in their own homebrew TTRPG. Merlin has a degree in Computer Science from Oxford University, but don't hold that against them."),(0,y.tZ)(N,null),(0,y.tZ)(j,null,(0,y.tZ)(i.S,{style:{alignSelf:"right",borderRadius:"40px",boxShadow:"0 2px 1px hsl(220, 7%, 83%)"},width:200,height:200,alt:"Stylised drawing of Merlin May who is a bit shy about showing their face, so this will have to do.",src:"../images/merlin.png",__imageData:n(4114)}))),(0,y.tZ)(o.NZ,null,"Subscribe for updates"),(0,y.tZ)(C,null)));const O=()=>(0,y.tZ)("title",null,"Home Page")},365:function(e,t,n){var r=n(1445)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var i,s,c=t.prefix||"__jp",u=t.name||c+a++,l=t.param||"callback",f=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;f&&(s=setTimeout((function(){m(),n&&n(new Error("Timeout"))}),f));function m(){i.parentNode&&i.parentNode.removeChild(i),window[u]=o,s&&clearTimeout(s)}return window[u]=function(e){r("jsonp got",e),m(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+d(u)).replace("?&","?"),r('jsonp req "%s"',e),(i=document.createElement("script")).src=e,p.parentNode.insertBefore(i,p),function(){window[u]&&m()}};var a=0;function o(){}},1445:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(t=e.exports=n(4805)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},4805:function(e,t,n){var r;function a(e){function n(){if(n.enabled){var e=n,a=+new Date,o=a-(r||a);e.diff=o,e.prev=r,e.curr=a,r=a;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var a=t.formatters[r];if("function"==typeof a){var o=i[c];n=a.call(e,o),i.splice(c,1),c--}return n})),t.formatArgs.call(e,i),(n.log||t.log||console.log.bind(console)).apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,a=0;a<r;a++)n[a]&&("-"===(e=n[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(971),t.names=[],t.skips=[],t.formatters={}},971:function(e){var t=1e3,n=60*t,r=60*n,a=24*r,o=365.25*a;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,s){s=s||{};var c,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*o;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===u&&!1===isNaN(e))return s.long?i(c=e,a,"day")||i(c,r,"hour")||i(c,n,"minute")||i(c,t,"second")||c+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},3967:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},4114:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/8b7fae8801eb74b5a4516f5aafcf4ef3/5aead/merlin.png","srcSet":"/static/8b7fae8801eb74b5a4516f5aafcf4ef3/e9fba/merlin.png 50w,\\n/static/8b7fae8801eb74b5a4516f5aafcf4ef3/15e42/merlin.png 100w,\\n/static/8b7fae8801eb74b5a4516f5aafcf4ef3/5aead/merlin.png 200w,\\n/static/8b7fae8801eb74b5a4516f5aafcf4ef3/d6138/merlin.png 400w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/8b7fae8801eb74b5a4516f5aafcf4ef3/dbc4a/merlin.webp 50w,\\n/static/8b7fae8801eb74b5a4516f5aafcf4ef3/d8057/merlin.webp 100w,\\n/static/8b7fae8801eb74b5a4516f5aafcf4ef3/2e34e/merlin.webp 200w,\\n/static/8b7fae8801eb74b5a4516f5aafcf4ef3/416c3/merlin.webp 400w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-35276a402553f5f0b4ee.js.map