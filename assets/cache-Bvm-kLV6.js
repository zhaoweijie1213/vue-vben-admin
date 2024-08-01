import{g as E}from"./mock-api-CPZhPesm.js";import{P as y}from"./index-BB9V0GyI.js";import{b8 as r,B as F,R as i,Y as h,E as D,j as k}from"./antd-BmrhB3rb.js";import{u as p,c as K}from"./index-Cw2evmpm.js";import{d as c,k as u,f as C,G as e,u as d,F as B}from"./vue-BjERyvPm.js";import"./entry/index-DShbtsWl.js";import"./useContentViewHeight-w3jL8fd7.js";import"./useWindowSizeFn-Cuml40XT.js";import"./onMountedOrActivated-DcvTUt7V.js";const o=c({props:{cacheKey:{type:String,default:"cacheKey-demo"}},setup(l){const{loading:n,data:a}=p(E,{cacheKey:l.cacheKey});return()=>{var t,s;return u(B,null,[u("p",null,[e("Background loading: "),n.value?"true":"false"]),u("p",null,[e("Latest request time: "),(t=d(a))==null?void 0:t.time]),u("p",null,[(s=d(a))==null?void 0:s.data])])}}}),P=c({setup(){const l=C(!1),n=a=>{l.value=a!=null?a:!l.value};return()=>u(i,{title:"SWR"},{default:()=>[u(r,null,{default:()=>[u(r.Paragraph,null,{default:()=>[e("下面的示例，我们设置了"),u(r.Text,{type:"danger"},{default:()=>[e(" cacheKey ")]}),e("，在组件第二次加载时，会优先返回缓存的内容，然后在背后重新发起请求。你可以通过点击按钮来体验效果。")]})]}),u("div",{class:"mt-4"},[u(F,{type:"primary",onClick:()=>n()},{default:()=>[l.value?"hidden":"show"]}),l.value&&u(o,null,null)])]})}}),T=c({setup(){const{loading:l,data:n}=p(E,{cacheKey:"staleTime-demo",staleTime:5e3});return()=>{var a,t;return u(B,null,[u("p",null,[e("Background loading: "),l.value?"true":"false"]),u("p",null,[e("Latest request time: "),(a=d(n))==null?void 0:a.time]),u("p",null,[(t=d(n))==null?void 0:t.data])])}}}),q=c({setup(){const l=C(!1),n=a=>{l.value=a!=null?a:!l.value};return()=>u(i,{title:"数据保持新鲜",class:"mt-2"},{default:()=>[u(r,null,{default:()=>[u(r.Paragraph,null,{default:()=>[e("通过设置"),u(r.Text,{type:"danger"},{default:()=>[e(" staleTime ")]}),e("，我们可以指定数据新鲜时间，在这个时间内，不会重新发起请求。下面的示例设置了 5s 的新鲜时间，你可以通过点击按钮来体验效果")]})]}),u("div",{class:"mt-4"},[u(F,{type:"primary",onClick:()=>n()},{default:()=>[l.value?"hidden":"show"]}),l.value&&u(T,null,null)])]})}}),g=c({setup(){const{loading:l,data:n,refresh:a}=p(E,{cacheKey:"cacheKey-share"});return()=>{var t,s;return u(B,null,[u("p",null,[e("Background loading: "),l.value?"true":"false"]),u(F,{type:"primary",onClick:a},{default:()=>[e("更新")]}),u("p",null,[e("Latest request time: "),(t=d(n))==null?void 0:t.time]),u("p",null,[(s=d(n))==null?void 0:s.data])])}}}),x=c({setup(){return()=>u(i,{title:"数据共享",class:"mt-2"},{default:()=>[u(r,null,{default:()=>[u(r.Paragraph,null,{default:()=>[e("同一个"),u(r.Text,{type:"danger"},{default:()=>[e(" cacheKey ")]}),e("的内容，在全局是共享的，这会带来以下几个特性")]}),u(r.Paragraph,null,{default:()=>[u("ul",null,[u("li",null,[e("请求 Promise 共享，相同的"),u(r.Text,{type:"danger"},{default:()=>[e(" cacheKey ")]}),e("同时只会有一个在发起请求，后发起的会共用同一个请求 Promise")]),u("li",null,[e("数据同步，任何时候，当我们改变其中某个 cacheKey 的内容时，其它相同"),u(r.Text,{type:"danger"},{default:()=>[e(" cacheKey ")]}),e("的内容均会同步")])])]})]}),u("div",{class:"mt-4"},[u("h2",null,[e("Article 1")]),u(g,null,null),u("h2",null,[e("Article 2")]),u(g,null,null)])]})}}),S=c({setup(){var m;const{loading:l,data:n,params:a,run:t}=p(E,{cacheKey:"cacheKey-share4"}),s=C(((m=a.value)==null?void 0:m[0])||"");return()=>{var A,f;return u(B,null,[u(h,null,{default:()=>[u(D,{value:s.value,"onUpdate:value":v=>s.value=v},null),u(F,{onClick:()=>t(s.value)},{default:()=>[e("Get")]})]}),u("p",null,[e("Background loading: "),l.value?"true":"false"]),u("p",null,[e("Latest request time: "),(A=d(n))==null?void 0:A.time]),u("p",null,[e("Latest request data: "),(f=d(n))==null?void 0:f.data]),u("p",null,[e("keyword: "),s.value])])}}}),w=c({setup(){const l=C(!1),n=a=>{l.value=a!=null?a:!l.value};return()=>u(i,{title:"参数缓存",class:"mt-2"},{default:()=>[u(r,null,{default:()=>[u(r.Paragraph,null,{default:()=>[e("缓存的数据包括 data 和 params，通过 params 缓存机制，我们可以记忆上一次请求的条件，并在下次初始化")]})]}),u("div",{class:"mt-4"},[u(F,{type:"primary",onClick:()=>n()},{default:()=>[l.value?"hidden":"show"]}),u("div",{class:"mt-2"},[l.value&&u(S,null,null)])])]})}}),L=c({setup(){const l=C(!1),n=t=>{l.value=t!=null?t:!l.value},a=t=>{K(t);const s=Array.isArray(t)?t.join("、"):t;k.success(`Clear ${s!=null?s:"All"} finished`)};return()=>u(i,{title:"删除缓存",class:"mt-2"},{default:()=>[u(r,null,{default:()=>[u(r.Paragraph,null,{default:()=>[e("useRequest 提供了一个 clearCache 方法，可以清除指定 cacheKey 的缓存数据。")]})]}),u("div",{class:"mt-4"},[u(h,null,{default:()=>[u(F,{type:"primary",onClick:()=>n()},{default:()=>[l.value?"hidden":"show"]}),u(F,{onClick:()=>a("Article1")},{default:()=>[e("Clear Article1")]}),u(F,{onClick:()=>a("Article2")},{default:()=>[e("Clear Article2")]}),u(F,{onClick:()=>a(["Article2","Article3"])},{default:()=>[e("Clear Article2 and Article3")]}),u(F,{onClick:()=>a()},{default:()=>[e("Clear All")]})]}),u("h2",null,[e("Article 1")]),l.value&&u(o,{cacheKey:"Article1"},null),u("h2",null,[e("Article 2")]),l.value&&u(o,{cacheKey:"Article2"},null),u("h2",null,[e("Article 3")]),l.value&&u(o,{cacheKey:"Article3"},null)])]})}}),I=c({setup(){const l="setCache-demo6",{loading:n,data:a}=p(E,{cacheKey:l,setCache:t=>localStorage.setItem(l,JSON.stringify(t)),getCache:()=>JSON.parse(localStorage.getItem(l)||"{}")});return()=>{var t,s;return u(B,null,[u("p",null,[e("Background loading: "),n.value?"true":"false"]),u("p",null,[e("Latest request time: "),(t=d(a))==null?void 0:t.time]),u("p",null,[(s=d(a))==null?void 0:s.data])])}}}),N=c({setup(){const l=C(!1),n=a=>{l.value=a!=null?a:!l.value};return()=>u(i,{title:"自定义缓存",class:"mt-2"},{default:()=>[u(r,null,{default:()=>[u(r.Paragraph,null,{default:()=>[e("通过配置 setCache 和 getCache，可以自定义数据缓存，比如可以将数据存储到 localStorage、IndexDB 等。")]})]}),u("div",{class:"mt-4"},[u(F,{type:"primary",onClick:()=>n()},{default:()=>[l.value?"hidden":"show"]}),u("div",{class:"mt-2"},[l.value&&u(I,null,null)])])]})}}),$=c({setup(){return()=>u(y,null,{default:()=>[u(P,null,null),u(q,null,null),u(x,null,null),u(w,null,null),u(L,null,null),u(N,null,null)]})}});export{$ as default};
