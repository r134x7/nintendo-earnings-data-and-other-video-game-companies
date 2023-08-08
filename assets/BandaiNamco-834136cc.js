import{g as H,r as m,u as x,t as U,c as a,j as _,C as g,F as V,l as y,p as T,B as L,f as q,k as J,A as K,S as O,G as X}from"./index-211ae5f4.js";import{a as Z,g as ee,k as ae,l as te,m as re,n as se,o as le,p as oe,G as ne,q as ie}from"./GRAPH_SOFTWARE_SALES-fc700025.js";import{k as ce,l as Q}from"./annual_report_cumulative-a909ed10.js";import{p as ue,q as de,t as me,G as fe,S as D,a as $,d as E,u as he,b as G}from"./GRAPH_CONSOLIDATED_EARNINGS-44c7b3fe.js";import{T as M}from"./TextInput-ee1cc7a7.js";import{S as F}from"./Space-0e360811.js";import"./ChevronIcon-2552590f.js";const j=H(new Map,Object.assign({"./Software_Sales/software_sales_fy3_2019.json":ae,"./Software_Sales/software_sales_fy3_2020.json":te,"./Software_Sales/software_sales_fy3_2021.json":re,"./Software_Sales/software_sales_fy3_2022.json":se,"./Software_Sales/software_sales_fy3_2023.json":le,"./Software_Sales/software_sales_fy3_2024.json":oe}),"Descending"),W=new Map,z=new Map;j.forEach((r,t,f)=>{W.set(t,Z(r,f.get(t+1),38,"Billion","One Thousand")),z.set(t,ee(r,f.get(t+1),"Billion","One Thousand"))});j.clear();function pe(r){const[t,f]=m.useState(""),h=x(e=>e.colour),c=x(e=>e.fontColor),[s,b]=m.useState(""),[C,S]=m.useState(0);let o=-1,l=ce.get(r.setIndex+o),i=new Set,p=U(l,"FY Series IP",t,s,i);const u=[{value:p.sectionTitle,placeholder:"Search specific series",label:`Series Search - Number of game series shown: ${C}`,description:"Clear field to show all game series listed."}].filter(e=>e.value===t);m.useEffect(()=>{switch(t){case p.sectionTitle:S(p.titlesLength.length);break}},[s,t]);const w=Array.from({length:r.yearLength},(e,n)=>[{name:"Data Sources",value:ue.get(n)},{name:"Consolidated Operating Results",value:de.get(n),graph:a(fe,{setData:me.get(n)})},{name:"Software Sales",value:W.get(n),graph:a(ne,{setData:z.get(n)})},{name:"FY Series IP",value:p.table}].filter(d=>d.value!==void 0)),v=w[r.setIndex].map(e=>e.name),k=e=>n=>{let[d]=e.filter(N=>n===N.name);return(d==null?void 0:d.value)||""},Y=(e=>n=>{let[d]=e.filter(N=>n===N.name);return d==null?void 0:d.graph})(w[r.setIndex]),B=k(w[r.setIndex]);function A(){setTimeout(()=>{f("")},10)}return _("div",{children:[v.filter(e=>e===t).length===0&&t.length!==0?A():a(D,{fullWidth:!0,orientation:"vertical",value:t,onChange:f,data:v}),t==="Data Sources"?B(t):_(g,{onCopy:e=>$(e,E),style:{backgroundColor:`${h}`,color:c==="dark"?"#fff":"#000000"},block:!0,children:[t===p.sectionTitle?_(V,{children:[a(M,{placeholder:u[0].placeholder,label:u[0].label,description:u[0].description,radius:"xl",value:s,onChange:e=>{b(e.target.value.toLocaleLowerCase())}}),i.size>0&&s!==i.values().next().value?y(T("Nearest single word search: (To use, click on a word)",40),"−","both",!0,40):void 0,i.size>0&&s!==i.values().next().value?[...i].flatMap((e,n)=>n>3?[]:a(L,{onClick:()=>b(e),radius:"xl",ml:"sm",mb:"sm",variant:"subtle",compact:!0,children:a(g,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${h}`,color:c==="dark"?"#fff":"#000000"},children:e})},e)):s===i.values().next().value||C===0?a(L,{onClick:()=>b(""),radius:"xl",m:"sm",variant:"subtle",compact:!0,children:a(g,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${h}`,color:c==="dark"?"#fff":"#000000"},children:"Clear Search"})}):void 0,a("br",{})]}):void 0,B(t)]}),Y(t)]})}function ge(){const[r,t]=m.useState(""),f=x(e=>e.colour),h=x(e=>e.fontColor),[c,s]=m.useState(""),[b,C]=m.useState(0),[S,o]=m.useState(6),[l,i]=m.useState("FY Cumulative");let p=q(Q.titleList,c),u=new Set;c.length!==0&&r==="Bandai Namco FY Series IP - Cumulative"&&p.map(e=>[...e.title.toLowerCase().matchAll(new RegExp(`(?=\\w*${c})\\w+`,"g"))].flat().map(n=>u.add(n)));let w=p.reduce((e,n)=>e+n.table,""),v=Q.header+w;const k=[{value:"Bandai Namco FY Series IP - Cumulative",placeholder:"Search specific series",label:`Series Search - Number of game series shown: ${b}`,description:"Clear field to show all game series listed."}].filter(e=>e.value===r);m.useEffect(()=>{switch(r){case"Bandai Namco Consolidated Operating Results - Cumulative":o(l==="1st Quarter"?0:l==="2nd Quarter"?1:l==="3rd Quarter"?2:l==="4th Quarter"?3:l==="First Half"?4:l==="First Three Quarters"?5:6);break;case"Bandai Namco Sales Per Software Unit - Cumulative":o(l==="1st Quarter"?0:l==="2nd Quarter"?1:l==="3rd Quarter"?2:l==="4th Quarter"?3:l==="First Half"?4:l==="First Three Quarters"?5:6);break;case"Bandai Namco FY Series IP - Cumulative":C(p.length);break}},[c,r,l]);const R=[{name:"Bandai Namco Consolidated Operating Results - Cumulative",value:he[S]},{name:"Bandai Namco Sales Per Software Unit - Cumulative",value:ie[S]},{name:"Bandai Namco FY Series IP - Cumulative",value:v}],Y=R.map(e=>e.name),A=(e=>n=>{let[d]=e.filter(N=>n===N.name);return d?d.value:""})(R);return _("div",{children:[a(D,{fullWidth:!0,orientation:"vertical",value:r,onChange:t,data:Y}),_(g,{onCopy:e=>$(e,E),style:{backgroundColor:`${f}`,color:h==="dark"?"#fff":"#000000"},block:!0,children:[r==="Bandai Namco Consolidated Operating Results - Cumulative"||r==="Bandai Namco Sales Per Software Unit - Cumulative"?a(G,{data:["1st Quarter","2nd Quarter","3rd Quarter","4th Quarter","First Half","First Three Quarters","FY Cumulative"],defaultValue:"FY Cumulative",label:"Select a time period:",radius:"xl",value:l,onChange:i}):void 0,r==="Bandai Namco FY Series IP - Cumulative"?_(V,{children:[a(M,{placeholder:k[0].placeholder,label:k[0].label,description:k[0].description,radius:"xl",value:c,onChange:e=>{s(e.target.value.toLowerCase())}}),u.size>0&&c!==u.values().next().value?y(T("Nearest single word search: (To use, click on a word)",40),"−","both",!0,40):void 0,u.size>0&&c!==u.values().next().value?[...u].flatMap((e,n)=>n>3?[]:a(L,{onClick:()=>s(e),radius:"xl",ml:"sm",mb:"sm",variant:"subtle",compact:!0,children:a(g,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${f}`,color:h==="dark"?"#fff":"#000000"},children:e})},e)):c===u.values().next().value||b===0?a(L,{onClick:()=>s(""),radius:"xl",m:"sm",variant:"subtle",compact:!0,children:a(g,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${f}`,color:h==="dark"?"#fff":"#000000"},children:"Clear Search"})}):void 0,a("br",{})]}):void 0,A(r)]}),a(F,{h:"xl"}),a(F,{h:"xl"}),a(F,{h:"xl"}),a(F,{h:"xl"})]})}const I=2024,be=I-2006,P=Array.from({length:be+1},(r,t)=>"FY3/"+(I-t));function Ne(){const r=y(T("While you're here, you can head to Install Base to read about the mysterious Sega Super Genesis 32.",40),"=","top",!0,40),f=J("Bandai Namco (They publish Dark Souls), this is where you can find archived Series IP data.",42,"−",80),[h,c]=m.useState("Data by Fiscal Year"),[s,b]=m.useState(""),C=x(i=>i.colour),S=x(i=>i.fontColor),l=(i=>p=>{let[u]=i.map((v,k)=>p===v?k:-1).filter(v=>v!==-1),w=i.length;return u>=0?a(pe,{setIndex:u,yearLength:w}):null})(P);return _("div",{children:[a(O,{mb:"md",align:"center",children:a(g,{style:{backgroundColor:`${C}`,color:S==="dark"?"#fff":"#000000"},block:!0,children:f})}),a(O,{align:"center",children:_(g,{style:{backgroundColor:`${C}`,color:S==="dark"?"#fff":"#000000"},block:!0,children:[r,a(K,{className:"fade",style:{textAlign:"center"},mb:"sm",href:"https://www.installbaseforum.com/forums/threads/ggx2ac-and-the-mysterious-case-of-the-sega-trademark-super-genesis-32.915/",target:"_blank",children:a(g,{style:{backgroundColor:`${C}`,color:S==="dark"?"#fff":"#000000"},block:!0,children:y(T("Link to Install Base Forum thread",36),"=","both",!0,36)})})]})}),a(D,{mb:"sm",mt:"sm",fullWidth:!0,orientation:"horizontal",value:h,onChange:c,data:["Data by Fiscal Year","Special Page"]}),h==="Data by Fiscal Year"?a(X,{position:"center",children:a(G,{dropdownPosition:"bottom",mb:"sm",mr:"md",placeholder:"Select",label:`Select a Fiscal Year from ${I-(P.length-1)} to ${I}.`,description:`Fiscal Year ending March ${Number(s==null?void 0:s.slice(4,8))?s==null?void 0:s.slice(4,8):""}.`,radius:"xl",size:"md",data:P,value:s,onChange:b})}):a(ge,{}),h==="Data by Fiscal Year"&&typeof s=="string"?l(s):null]})}export{Ne as default};