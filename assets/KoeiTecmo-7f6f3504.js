import{r as h,u as k,c as s,j as S,C as p,l as F,p as L,g as M,S as Y,A,G}from"./index-e7972934.js";import{p as I,q as K,r as N,t as R,u as V,d as _,g as $,G as z,v as H}from"./GRAPH_SOFTWARE_SALES-bea26abe.js";import{v as U,w as W,x as j,G as B,S as y,a as O,d as x,y as q,b as D}from"./GRAPH_CONSOLIDATED_EARNINGS-1ea880c3.js";import{S as b}from"./Space-5aabf5a4.js";import"./ChevronIcon-745d3af1.js";const i=new Map;i.set(i.size,I);i.set(i.size,K);i.set(i.size,N);i.set(i.size,R);i.set(i.size,V);const E=new Map,Q=new Map;i.forEach((o,r,u)=>{E.set(r,_(o,u.get(r+1),41,"Million","One Thousand")),Q.set(r,$(o,u.get(r+1),"Million","One Thousand"))});i.clear();function J(o){const[r,u]=h.useState(""),e=k(a=>a),t=Array.from({length:o.yearLength},(a,n)=>{var l;return[{name:"Data Sources",value:(l=U)==null?void 0:l[n]},{name:"Consolidated Operating Results",value:W.get(n),graph:s(B,{setData:j.get(n)})},{name:"Software Sales",value:E.get(n),graph:s(z,{setData:Q.get(n)})}].filter(c=>c.value!==void 0)}),d=t[o.setIndex].map(a=>a.name),g=a=>n=>{let[l]=a.filter(c=>n===c.name);return(l==null?void 0:l.value)||""},v=(a=>n=>{let[l]=a.filter(c=>n===c.name);return l==null?void 0:l.graph})(t[o.setIndex]),C=g(t[o.setIndex]);function f(){setTimeout(()=>{u("")},10)}return S("div",{children:[d.filter(a=>a===r).length===0&&r.length!==0?f():s(y,{fullWidth:!0,orientation:"vertical",value:r,onChange:u,data:d}),r==="Data Sources"?C(r):s(p,{onCopy:a=>O(a,x),style:{backgroundColor:`${e.colour}`,color:e.fontColor==="dark"?"#fff":"#000000"},block:!0,children:C(r)}),v(r)]})}function X(){const[o,r]=h.useState(""),[u,e]=h.useState(6),[t,d]=h.useState("FY Cumulative"),g=k(a=>a);h.useEffect(()=>{switch(o){case"Koei Tecmo Consolidated Operating Results - Cumulative":e(t==="1st Quarter"?0:t==="2nd Quarter"?1:t==="3rd Quarter"?2:t==="4th Quarter"?3:t==="First Half"?4:t==="First Three Quarters"?5:6);break;case"Koei Tecmo Sales Per Software Unit - Cumulative":e(t==="1st Quarter"?0:t==="2nd Quarter"?1:t==="3rd Quarter"?2:t==="4th Quarter"?3:t==="First Half"?4:t==="First Three Quarters"?5:6);break}},[o,t]);const m=[{name:"Koei Tecmo Consolidated Operating Results - Cumulative",value:q[u]},{name:"Koei Tecmo Sales Per Software Unit - Cumulative",value:H[u]}],v=m.map(a=>a.name),f=(a=>n=>{let[l]=a.filter(c=>n===c.name);return l?l.value:""})(m);return S("div",{children:[s(y,{fullWidth:!0,orientation:"vertical",value:o,onChange:r,data:v}),S(p,{onCopy:a=>O(a,x),style:{backgroundColor:`${g.colour}`,color:g.fontColor==="dark"?"#fff":"#000000"},block:!0,children:[o==="Koei Tecmo Consolidated Operating Results - Cumulative"||o==="Koei Tecmo Sales Per Software Unit - Cumulative"?s(D,{data:["1st Quarter","2nd Quarter","3rd Quarter","4th Quarter","First Half","First Three Quarters","FY Cumulative"],defaultValue:"FY Cumulative",label:"Select a time period:",radius:"xl",value:t,onChange:d}):void 0,f(o)]}),s(b,{h:"xl"}),s(b,{h:"xl"}),s(b,{h:"xl"}),s(b,{h:"xl"})]})}const T=2023,Z=2023-2010,w=Array.from({length:Z+1},(o,r)=>"FY3/"+(T-r));function re(){const o=F(L("Also, visit Install Base. It's a place to discuss and elaborate on the business side of the video game industry.",40),"=","top",!0,40),u=M("Koei Tecmo (They publish Hyrule Warriors), this is where you can find archived data.",40,"−",80),[e,t]=h.useState(""),[d,g]=h.useState("Data by Fiscal Year"),m=k(f=>f),C=(f=>a=>{let[n]=f.map((c,P)=>a===c?P:-1).filter(c=>c!==-1),l=f.length;return n>=0?s(J,{setIndex:n,yearLength:l}):null})(w);return S("div",{children:[s(Y,{mb:"md",align:"center",children:s(p,{style:{backgroundColor:`${m.colour}`,color:m.fontColor==="dark"?"#fff":"#000000"},block:!0,children:u})}),s(Y,{align:"center",children:S(p,{style:{backgroundColor:`${m.colour}`,color:m.fontColor==="dark"?"#fff":"#000000"},block:!0,children:[o,s(A,{className:"fade",style:{textAlign:"center"},mb:"sm",href:"https://www.installbaseforum.com/",target:"_blank",children:s(p,{style:{backgroundColor:`${m.colour}`,color:m.fontColor==="dark"?"#fff":"#000000"},block:!0,children:F(L("https://www.installbaseforum.com/",36),"=","both",!0,36)})})]})}),s(y,{mb:"sm",mt:"sm",fullWidth:!0,orientation:"horizontal",value:d,onChange:g,data:["Data by Fiscal Year","Special Page"]}),d==="Data by Fiscal Year"?s(G,{position:"center",children:s(D,{dropdownPosition:"bottom",mb:"sm",mr:"md",placeholder:"Select",label:`Select a Fiscal Year from ${T-(w.length-1)} to ${T}.`,description:`Fiscal Year ending March ${Number(e==null?void 0:e.slice(4,8))?e==null?void 0:e.slice(4,8):""}.`,radius:"xl",size:"md",data:w,value:e,onChange:t})}):s(X,{}),d==="Data by Fiscal Year"&&typeof e=="string"?C(e):null]})}export{re as default};