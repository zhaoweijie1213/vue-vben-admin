import{b as d}from"./antd-BmrhB3rb.js";import{r as s}from"./index-C_A6cd1S.js";function m(a,f){for(var e=0;e<f.length;e++){const n=f[e];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in a)){const i=Object.getOwnPropertyDescriptor(n,t);i&&Object.defineProperty(a,t,i.get?i:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var g={exports:{}};(function(a,f){(function(e){e(s())})(function(e){e.defineMode("rpm-changes",function(){var n=/^-+$/,t=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /,i=/^[\w+.-]+@[\w.-]+/;return{token:function(c){return c.sol()&&(c.match(n)||c.match(t))?"tag":c.match(i)?"string":(c.next(),null)}}}),e.defineMIME("text/x-rpm-changes","rpm-changes"),e.defineMode("rpm-spec",function(){var n=/^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/,t=/^[a-zA-Z0-9()]+:/,i=/^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/,c=/^%(ifnarch|ifarch|if)/,l=/^%(else|endif)/,u=/^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;return{startState:function(){return{controlFlow:!1,macroParameters:!1,section:!1}},token:function(r,o){var h=r.peek();if(h=="#")return r.skipToEnd(),"comment";if(r.sol()){if(r.match(t))return"header";if(r.match(i))return"atom"}if(r.match(/^\$\w+/)||r.match(/^\$\{\w+\}/))return"def";if(r.match(l))return"keyword";if(r.match(c))return o.controlFlow=!0,"keyword";if(o.controlFlow){if(r.match(u))return"operator";if(r.match(/^(\d+)/))return"number";r.eol()&&(o.controlFlow=!1)}if(r.match(n))return r.eol()&&(o.controlFlow=!1),"number";if(r.match(/^%[\w]+/))return r.match("(")&&(o.macroParameters=!0),"keyword";if(o.macroParameters){if(r.match(/^\d+/))return"number";if(r.match(")"))return o.macroParameters=!1,"keyword"}return r.match(/^%\{\??[\w \-\:\!]+\}/)?(r.eol()&&(o.controlFlow=!1),"def"):(r.next(),null)}}}),e.defineMIME("text/x-rpm-spec","rpm-spec")})})();var p=g.exports;const w=d(p),b=m({__proto__:null,default:w},[p]);export{b as r};
