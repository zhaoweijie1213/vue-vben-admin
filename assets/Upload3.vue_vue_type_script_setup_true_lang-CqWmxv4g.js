import{_ as p}from"./BasicForm.vue_vue_type_script_setup_true_lang-pWatLDmD.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CcmMJY8X.js";import"./componentMap-D7_wXCrD.js";import{u}from"./useForm-DDSjB-3j.js";import{a as c}from"./entry/index-DShbtsWl.js";import{u as r}from"./upload-DluXGMqe.js";import{d,Z as f,_,k as l,u as t,F as g}from"./vue-BjERyvPm.js";import{aE as F}from"./antd-BmrhB3rb.js";const B=d({__name:"Upload3",setup(h){const{createMessage:n}=c(),m=[{field:"field3",component:"Upload",label:"字段3",componentProps:{resultField:"data3.url",api:(e,s)=>new Promise(a=>{r(e,s).then(o=>{a({code:200,data3:{url:o.data.url}})})})}},{field:"field4",component:"ImageUpload",label:"字段4(ImageUpload)",colProps:{span:8},componentProps:{resultField:"data4.url",api:(e,s)=>new Promise(a=>{r(e,s).then(o=>{a({code:200,data4:{url:o.data.url}})})})}}],[i,{getFieldsValue:P}]=u({labelWidth:160,schemas:m,actionColOptions:{span:18},submitFunc:()=>new Promise(e=>{e(),n.success("请到控制台查看结果")})});return(e,s)=>(f(),_(g,null,[l(t(F),{message:"嵌入表单,加入resultFiled自定义返回值"}),l(t(p),{onRegister:t(i),class:"my-5"},null,8,["onRegister"])],64))}});export{B as _};
