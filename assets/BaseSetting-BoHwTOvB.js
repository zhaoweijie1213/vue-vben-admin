var f=(e,m,a)=>new Promise((u,i)=>{var d=t=>{try{r(a.next(t))}catch(n){i(n)}},l=t=>{try{r(a.throw(t))}catch(n){i(n)}},r=t=>t.done?u(t.value):Promise.resolve(t.value).then(d,l);r((a=a.apply(e,m)).next())});import{l as v,C as g,a as b,c as C}from"./entry/index-DShbtsWl.js";import{C as I}from"./index-Dy3692QU.js";import{_ as S}from"./BasicForm.vue_vue_type_script_setup_true_lang-pWatLDmD.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CcmMJY8X.js";import"./componentMap-D7_wXCrD.js";import{u as x}from"./useForm-DDSjB-3j.js";import{a as A}from"./account-DqTA37tw.js";import{u as w}from"./upload-DluXGMqe.js";import{h as B}from"./header-OZa5fSDc.js";import{b as U}from"./data-CMLH8mPi.js";import{d as V,o as k,c as y,a7 as M,Z as N,a8 as R,a9 as p,k as s,u as o,$ as h,G as F,a2 as G,a3 as T}from"./vue-BjERyvPm.js";import{U as $,V as _}from"./antd-BmrhB3rb.js";import"./index-wJ08BCMi.js";import"./useWindowSizeFn-Cuml40XT.js";import"./base64Conver-bBv-IO2K.js";import"./FormItem.vue_vue_type_script_lang-BlYZUeGm.js";import"./helper-3Z_qR1GZ.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DHk6Ws1t.js";import"./index-Dkr6VmKA.js";import"./uuid-D0SLUWHI.js";import"./useSortable-JDCtAH92.js";import"./download-D1UiuoyS.js";import"./index-M4UvXH9o.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D6Hk7opE.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-BO8b0fR2.js";const E=e=>(G("data-v-54663cbe"),e=e(),T(),e),P={class:"change-avatar"},W=E(()=>h("div",{class:"mb-2"},"头像",-1)),Z=V({__name:"BaseSetting",setup(e){const{createMessage:m}=b(),a=v(),[u,{setFieldsValue:i}]=x({labelWidth:120,schemas:U,showActionButtonGroup:!1});k(()=>f(this,null,function*(){const t=yield A();i(t)}));const d=y(()=>{const{avatar:t}=a.getUserInfo;return t||B});function l({src:t,data:n}){const c=a.getUserInfo;c.avatar=t,a.setUserInfo(c)}function r(){m.success("更新成功！")}return(t,n)=>{const c=M("a-button");return N(),R(o(g),{title:"基本设置",canExpand:!1},{default:p(()=>[s(o($),{gutter:24},{default:p(()=>[s(o(_),{span:14},{default:p(()=>[s(o(S),{onRegister:o(u)},null,8,["onRegister"])]),_:1}),s(o(_),{span:10},{default:p(()=>[h("div",P,[W,s(o(I),{uploadApi:o(w),value:d.value,btnText:"更换头像",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:l,width:"150"},null,8,["uploadApi","value"])])]),_:1})]),_:1}),s(c,{type:"primary",onClick:r},{default:p(()=>[F(" 更新基本信息 ")]),_:1})]),_:1})}}}),ht=C(Z,[["__scopeId","data-v-54663cbe"]]);export{ht as default};
