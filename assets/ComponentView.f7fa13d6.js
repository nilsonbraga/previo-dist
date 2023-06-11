import{f as G,g as v,k as D,L as F,M as U,c as p,i as l,h as n,u as f,G as w,F as b,o as m,a,t as E,H as A,b as T,d as z}from"./index.2a01bdce.js";import{_ as g,b as I,D as J,E as K,a as Q,F as W,G as X}from"./auth.75b214dc.js";import{_ as Y,b as Z,a as x,c as ee}from"./SectionTitleLineWithButton.6f9ec719.js";import{_ as k,a as te}from"./CardBoxModal.747049bb.js";import{u as R}from"./component.317f724c.js";import{_ as V}from"./BaseButtons.19f47afb.js";import{C as le,_ as s,a as oe}from"./CardBox.bca85cc1.js";import{_ as $}from"./FormField.75048a21.js";import"./api.5a77c80b.js";const ne={class:"pt-8"},ae={class:"pt-8"},ie=a("p",null,"Ao excluir um item, suas depend\xEAncias tamb\xE9m ser\xE3o exclu\xEDdas automaticamente.",-1),re={class:"pt-8"},se=a("b",null,"verifique se o mesmo j\xE1 existe",-1),ue=a("th",null,null,-1),de={class:"lg:w-1 whitespace-nowrap"},me={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ce={props:{clearMethod:{type:Function}},async mounted(){this.FETCH_COMPONENTS()},methods:{...G(R,["FETCH_COMPONENT","FETCH_COMPONENTS","DELETE_COMPONENT","UPDATE_COMPONENT","RESET_ERRORS"])},data(){return{columns:[{name:"title",title:"T\xEDtulo"},{name:"description",title:"Descri\xE7\xE3o"}]}},components:{CardBoxComponentFooter:le}},ke=Object.assign(ce,{__name:"ComponentView",setup(pe){const i=R();i.$reset();const r=v(()=>i.errors),N=v(()=>i.components),O=D(5),C=D(0);F(N,()=>{C.value=0});const B=v(()=>{const o=N.value;if(!Array.isArray(o))return[];const e=O.value*C.value,t=e+O.value;return o.slice(e,t)}),S=v(()=>Math.ceil(N.value.length/O.value)),H=v(()=>C.value+1),L=v(()=>{const o=[];for(let e=0;e<S.value;e++)o.push(e);return o}),y=o=>{i.FETCH_COMPONENT(o)},j=()=>{i.DELETE_COMPONENT(i.selectedComponent.id)},h=async()=>{const o=i.selectedComponent.id,{title:e,description:t}=c;await i.UPDATE_COMPONENT(o,e,t)&&d("edit")},q=async(o,e)=>{await i.CREATE_COMPONENT(o,e)&&d("new")},u=U({info:!1,new:!1,edit:!1,delete:!1}),d=o=>{u[o]=!u[o],i.RESET_ERRORS()};F(()=>i.selectedComponent,o=>{Object.assign(c,{...M,...o})});const M={title:"",description:""},c=U({...M});return(o,e)=>(m(),p(b,null,[l(k,{modelValue:u.info,"onUpdate:modelValue":e[0]||(e[0]=t=>u.info=t),title:f(i).selectedComponent.title},{default:n(()=>[a("p",null,E(f(i).selectedComponent.description),1)]),_:1},8,["modelValue","title"]),l(k,{modelValue:u.new,"onUpdate:modelValue":e[4]||(e[4]=t=>u.new=t),title:"Adicionar Novo Componente",button:o.info,"is-form":"",onSubmit:e[5]||(e[5]=w(t=>q(o.title,o.description),["prevent"]))},{footer:n(()=>[a("div",ne,[l(V,null,{default:n(()=>[l(s,{label:"Confirmar",color:"info",type:"submit"}),l(s,{label:"Cancelar",color:"info",outline:"",onClick:e[3]||(e[3]=t=>d("new"))})]),_:1})])]),default:n(()=>[l($,{label:"T\xEDtulo",help:r.value.title,error:r.value.title},{default:n(()=>[l(g,{modelValue:o.title,"onUpdate:modelValue":e[1]||(e[1]=t=>o.title=t),name:o.title,error:r.value.title},null,8,["modelValue","name","error"])]),_:1},8,["help","error"]),l($,{label:"Descri\xE7\xE3o",help:r.value.description,error:r.value.description},{default:n(()=>[l(g,{modelValue:o.description,"onUpdate:modelValue":e[2]||(e[2]=t=>o.description=t),name:o.description,error:r.value.description},null,8,["modelValue","name","error"])]),_:1},8,["help","error"])]),_:1},8,["modelValue","button"]),l(k,{modelValue:u.edit,"onUpdate:modelValue":e[9]||(e[9]=t=>u.edit=t),title:"Editar Componente",button:"warning","is-form":"",onSubmit:e[10]||(e[10]=w(t=>h(),["prevent"]))},{footer:n(()=>[a("div",ae,[l(V,null,{default:n(()=>[l(s,{label:"Confirmar",color:"warning",type:"submit"}),l(s,{label:"Cancelar",color:"warning",outline:"",onClick:e[8]||(e[8]=t=>d("edit"))})]),_:1})])]),default:n(()=>[l($,{label:"T\xEDtulo",help:r.value.title,error:r.value.title},{default:n(()=>[l(g,{id:"title",modelValue:c.title,"onUpdate:modelValue":e[6]||(e[6]=t=>c.title=t),name:c.title,error:r.value.title},null,8,["modelValue","name","error"])]),_:1},8,["help","error"]),l($,{label:"Descri\xE7\xE3o",help:r.value.description,error:r.value.description},{default:n(()=>[l(g,{id:"description",modelValue:c.description,"onUpdate:modelValue":e[7]||(e[7]=t=>c.description=t),name:c.description,error:r.value.description},null,8,["modelValue","name","error"])]),_:1},8,["help","error"])]),_:1},8,["modelValue"]),l(k,{modelValue:u.delete,"onUpdate:modelValue":e[13]||(e[13]=t=>u.delete=t),isForm:"",onSubmit:e[14]||(e[14]=w(t=>j(),["prevent"])),title:"Voc\xEA realmente quer excluir este item?",button:"danger"},{footer:n(()=>[a("div",re,[l(V,null,{default:n(()=>[l(s,{label:"Confirmar",color:"danger",type:"submit",onClick:e[11]||(e[11]=t=>d("delete"))}),l(s,{label:"Cancelar",color:"danger",outline:"",onClick:e[12]||(e[12]=t=>d("delete"))})]),_:1})])]),default:n(()=>[ie]),_:1},8,["modelValue"]),l(Y,null,{default:n(()=>[l(Z,null,{default:n(()=>[l(x,{icon:f(I),title:"Componentes",main:""},{default:n(()=>[l(s,{icon:f(J),label:"Novo Componente",color:"contrast","rounded-full":"",small:"",onClick:e[15]||(e[15]=t=>d("new"))},null,8,["icon"])]),_:1},8,["icon"]),l(te,{color:"info",icon:f(K)},{default:n(()=>[A(" Antes de cadastrar um novo componente, "),se,A(". ")]),_:1},8,["icon"]),l(oe,{class:"mb-6","has-table":""},{default:n(()=>[a("table",null,[a("thead",null,[a("tr",null,[(m(!0),p(b,null,T(o.columns,t=>(m(),p("th",{key:t},E(t.title),1))),128)),ue])]),a("tbody",null,[(m(!0),p(b,null,T(B.value,(t,P)=>(m(),p("tr",{key:P},[(m(!0),p(b,null,T(o.columns,_=>(m(),p("td",{key:_},E(t[_.name]),1))),128)),a("td",de,[l(V,{type:"justify-start lg:justify-end","no-wrap":""},{default:n(()=>[l(s,{color:"info",icon:f(Q),small:"",onClick:_=>(y(t.id),d("info"))},null,8,["icon","onClick"]),l(s,{color:"warning",icon:f(W),small:"",onClick:_=>(y(t.id),d("edit"))},null,8,["icon","onClick"]),l(s,{color:"danger",icon:f(X),small:"",onClick:_=>(y(t.id),d("delete"))},null,8,["icon","onClick"])]),_:2},1024)])]))),128))])]),a("div",me,[l(ee,null,{default:n(()=>[l(V,null,{default:n(()=>[(m(!0),p(b,null,T(L.value,t=>(m(),z(s,{key:t,active:t===C.value,label:t+1,color:t===C.value?"lightDark":"whiteDark",small:"",onClick:P=>C.value=t},null,8,["active","label","color","onClick"]))),128))]),_:1}),a("small",null,"P\xE1gina "+E(H.value)+" de "+E(S.value),1)]),_:1})])]),_:1})]),_:1})]),_:1})],64))}});export{ke as default};
