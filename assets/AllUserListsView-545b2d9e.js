import{d as w,i as C,D as I,r as x,o as t,c as e,a as s,F as p,b as g,u as l,t as h,e as c,w as n,f as v,B as S,p as V,g as b,_ as B}from"./index-ab018db0.js";import{_ as U}from"./NoImage-da54b66b.js";import{u as N}from"./useListsCategories-8d5a96c8.js";const f=a=>(V("data-v-e9497271"),a=a(),b(),a),A={class:"all-lists"},R=f(()=>s("div",{class:"all-lists__title title"},"Все ваши списки",-1)),T={class:"all-lists__categories"},D={class:"all-lists__category"},F={class:"all-lists__category-info"},$={class:"all-lists__category-image _ibg"},E=["src","alt"],G={class:"all-lists__category-name"},O={key:0,class:"all-lists__lists"},j={class:"category-list__body"},q={class:"category-list__row"},z=["src"],H={key:1,src:U,alt:"No image availible"},J={class:"category-list__name"},K=["onClick"],M={key:1,class:"all-lists__no-items"},P=f(()=>s("p",{class:"all-lists__no-items-text"}," Пока вы не добавили ни одного списка ",-1)),Q={class:"all-lists__category-btn"},W=w({__name:"AllUserListsView",setup(a){const m=C(),{filterListsByCategory:_}=I(m),{allCategories:y,getImgUrl:L}=N(),k=r=>{window.confirm("Вы уверены что хотите удалить список "+r+" ?")&&m.deleteList(r)};return(r,X)=>{const d=x("RouterLink");return t(),e("div",A,[R,s("div",T,[(t(!0),e(p,null,g(l(y),i=>(t(),e("div",D,[s("div",F,[s("div",$,[s("img",{src:l(L)(i.picture),alt:i.picture},null,8,E)]),s("div",G,h(i.title),1)]),l(_)(i.title).length?(t(),e("div",O,[c(S,{name:"list"},{default:n(()=>[(t(!0),e(p,null,g(l(_)(i.title),([o,Y],u)=>(t(),e("div",{key:o,class:"all-lists__category-list category-list"},[s("div",j,[s("div",q,[c(d,{to:{name:"single-list",params:{name:o}},class:"category-list__list-image"},{default:n(()=>[l(_)(i.title)[u][1].listItems.length?(t(),e("img",{key:0,src:l(_)(i.title)[u][1].listItems[0].image,alt:"Первый элемент в списке"},null,8,z)):(t(),e("img",H))]),_:2},1032,["to"]),s("div",J,[c(d,{to:{name:"single-list",params:{name:o}}},{default:n(()=>[v(h(o),1)]),_:2},1032,["to"])])]),s("div",{onClick:Z=>k(o),class:"category-list__remove-icon icon-close"},null,8,K)])]))),128))]),_:2},1024)])):(t(),e("div",M,[P,s("div",Q,[c(d,{to:`/create/${i.title}`},{default:n(()=>[v("Создать список !")]),_:2},1032,["to"])])]))]))),256))])])}}});const is=B(W,[["__scopeId","data-v-e9497271"]]);export{is as default};
