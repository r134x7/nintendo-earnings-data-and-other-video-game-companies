import{r as f,u as D,t as H,c as t,j as v,C as b,F as O,l as T,p as L,B as y,f as U,g as j,S as V,A as q,G as J}from"./index-d1fcee10.js";import{k as K,l as X,m as Z,n as ee,o as te,a as ae,g as re,G as le,p as se}from"./GRAPH_SOFTWARE_SALES-7ab61fd3.js";import{k as oe,l as $}from"./annual_report_cumulative-f91deec5.js";import{p as ne,q as ie,t as ce,G as ue,S as Q,a as E,d as G,u as de,b as M}from"./GRAPH_CONSOLIDATED_EARNINGS-f681972c.js";import{T as z}from"./TextInput-5da02836.js";import{S as F}from"./Space-b1f134a9.js";import"./ChevronIcon-12154d6e.js";const p=new Map;p.set(p.size,K);p.set(p.size,X);p.set(p.size,Z);p.set(p.size,ee);p.set(p.size,te);const W=new Map,_=new Map;p.forEach((r,a,c)=>{W.set(a,ae(r,c.get(a+1),38,"Billion","One Thousand")),_.set(a,re(r,c.get(a+1),"Billion","One Thousand"))});p.clear();function me(r){const[a,c]=f.useState(""),s=D(e=>e),[h,i]=f.useState(""),[N,g]=f.useState(0);let o=-1,l=oe.get(r.setIndex+o),u=new Set,C=H(l,"FY Series IP",a,h,u);const d=[{value:C.sectionTitle,placeholder:"Search specific series",label:`Series Search - Number of game series shown: ${N}`,description:"Clear field to show all game series listed."}].filter(e=>e.value===a);f.useEffect(()=>{switch(a){case C.sectionTitle:g(C.titlesLength.length);break}},[h,a]);const x=Array.from({length:r.yearLength},(e,n)=>{var m;return[{name:"Data Sources",value:(m=ne)==null?void 0:m[n]},{name:"Consolidated Operating Results",value:ie.get(n),graph:t(ue,{setData:ce.get(n)})},{name:"Software Sales",value:W.get(n),graph:t(le,{setData:_.get(n)})},{name:"FY Series IP",value:C.table}].filter(w=>w.value!==void 0)}),S=x[r.setIndex].map(e=>e.name),k=e=>n=>{let[m]=e.filter(w=>n===w.name);return(m==null?void 0:m.value)||""},R=(e=>n=>{let[m]=e.filter(w=>n===w.name);return m==null?void 0:m.graph})(x[r.setIndex]),Y=k(x[r.setIndex]);function B(){setTimeout(()=>{c("")},10)}return v("div",{children:[S.filter(e=>e===a).length===0&&a.length!==0?B():t(Q,{fullWidth:!0,orientation:"vertical",value:a,onChange:c,data:S}),a==="Data Sources"?Y(a):v(b,{onCopy:e=>E(e,G),style:{backgroundColor:`${s.colour}`,color:s.fontColor==="dark"?"#fff":"#000000"},block:!0,children:[a===C.sectionTitle?v(O,{children:[t(z,{placeholder:d[0].placeholder,label:d[0].label,description:d[0].description,radius:"xl",value:h,onChange:e=>{i(e.target.value.toLocaleLowerCase())}}),u.size>0&&h!==u.values().next().value?T(L("Nearest single word search: (To use, click on a word)",40),"−","both",!0,40):void 0,u.size>0&&h!==u.values().next().value?[...u].flatMap((e,n)=>n>3?[]:t(y,{onClick:()=>i(e),radius:"xl",ml:"sm",mb:"sm",variant:"subtle",compact:!0,children:t(b,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${s.colour}`,color:s.fontColor==="dark"?"#fff":"#000000"},children:e})},e)):h===u.values().next().value||N===0?t(y,{onClick:()=>i(""),radius:"xl",m:"sm",variant:"subtle",compact:!0,children:t(b,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${s.colour}`,color:s.fontColor==="dark"?"#fff":"#000000"},children:"Clear Search"})}):void 0,t("br",{})]}):void 0,Y(a)]}),R(a)]})}function he(){const[r,a]=f.useState(""),c=D(e=>e),[s,h]=f.useState(""),[i,N]=f.useState(0),[g,o]=f.useState(6),[l,u]=f.useState("FY Cumulative");let C=U($.titleList,s),d=new Set;s.length!==0&&r==="Bandai Namco FY Series IP - Cumulative"&&C.map(e=>[...e.title.toLowerCase().matchAll(new RegExp(`(?=\\w*${s})\\w+`,"g"))].flat().map(n=>d.add(n)));let x=C.reduce((e,n)=>e+n.table,""),S=$.header+x;const k=[{value:"Bandai Namco FY Series IP - Cumulative",placeholder:"Search specific series",label:`Series Search - Number of game series shown: ${i}`,description:"Clear field to show all game series listed."}].filter(e=>e.value===r);f.useEffect(()=>{switch(r){case"Bandai Namco Consolidated Operating Results - Cumulative":o(l==="1st Quarter"?0:l==="2nd Quarter"?1:l==="3rd Quarter"?2:l==="4th Quarter"?3:l==="First Half"?4:l==="First Three Quarters"?5:6);break;case"Bandai Namco Sales Per Software Unit - Cumulative":o(l==="1st Quarter"?0:l==="2nd Quarter"?1:l==="3rd Quarter"?2:l==="4th Quarter"?3:l==="First Half"?4:l==="First Three Quarters"?5:6);break;case"Bandai Namco FY Series IP - Cumulative":N(C.length);break}},[s,r,l]);const I=[{name:"Bandai Namco Consolidated Operating Results - Cumulative",value:de[g]},{name:"Bandai Namco Sales Per Software Unit - Cumulative",value:se[g]},{name:"Bandai Namco FY Series IP - Cumulative",value:S}],R=I.map(e=>e.name),B=(e=>n=>{let[m]=e.filter(w=>n===w.name);return m?m.value:""})(I);return v("div",{children:[t(Q,{fullWidth:!0,orientation:"vertical",value:r,onChange:a,data:R}),v(b,{onCopy:e=>E(e,G),style:{backgroundColor:`${c.colour}`,color:c.fontColor==="dark"?"#fff":"#000000"},block:!0,children:[r==="Bandai Namco Consolidated Operating Results - Cumulative"||r==="Bandai Namco Sales Per Software Unit - Cumulative"?t(M,{data:["1st Quarter","2nd Quarter","3rd Quarter","4th Quarter","First Half","First Three Quarters","FY Cumulative"],defaultValue:"FY Cumulative",label:"Select a time period:",radius:"xl",value:l,onChange:u}):void 0,r==="Bandai Namco FY Series IP - Cumulative"?v(O,{children:[t(z,{placeholder:k[0].placeholder,label:k[0].label,description:k[0].description,radius:"xl",value:s,onChange:e=>{h(e.target.value.toLowerCase())}}),d.size>0&&s!==d.values().next().value?T(L("Nearest single word search: (To use, click on a word)",40),"−","both",!0,40):void 0,d.size>0&&s!==d.values().next().value?[...d].flatMap((e,n)=>n>3?[]:t(y,{onClick:()=>h(e),radius:"xl",ml:"sm",mb:"sm",variant:"subtle",compact:!0,children:t(b,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${c.colour}`,color:c.fontColor==="dark"?"#fff":"#000000"},children:e})},e)):s===d.values().next().value||i===0?t(y,{onClick:()=>h(""),radius:"xl",m:"sm",variant:"subtle",compact:!0,children:t(b,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${c.colour}`,color:c.fontColor==="dark"?"#fff":"#000000"},children:"Clear Search"})}):void 0,t("br",{})]}):void 0,B(r)]}),t(F,{h:"xl"}),t(F,{h:"xl"}),t(F,{h:"xl"}),t(F,{h:"xl"})]})}const P=2023,fe=2023-2006,A=Array.from({length:fe+1},(r,a)=>"FY3/"+(P-a));function ke(){const r=T(L("While you're here, you can head to Install Base to read about the mysterious Sega Super Genesis 32.",40),"=","top",!0,40),c=j("Bandai Namco (They publish Dark Souls), this is where you can find archived Series IP data.",42,"−",80),[s,h]=f.useState("Data by Fiscal Year"),[i,N]=f.useState(""),g=D(u=>u),l=(u=>C=>{let[d]=u.map((S,k)=>C===S?k:-1).filter(S=>S!==-1),x=u.length;return d>=0?t(me,{setIndex:d,yearLength:x}):null})(A);return v("div",{children:[t(V,{mb:"md",align:"center",children:t(b,{style:{backgroundColor:`${g.colour}`,color:g.fontColor==="dark"?"#fff":"#000000"},block:!0,children:c})}),t(V,{align:"center",children:v(b,{style:{backgroundColor:`${g.colour}`,color:g.fontColor==="dark"?"#fff":"#000000"},block:!0,children:[r,t(q,{className:"fade",style:{textAlign:"center"},mb:"sm",href:"https://www.installbaseforum.com/forums/threads/ggx2ac-and-the-mysterious-case-of-the-sega-trademark-super-genesis-32.915/",target:"_blank",children:t(b,{style:{backgroundColor:`${g.colour}`,color:g.fontColor==="dark"?"#fff":"#000000"},block:!0,children:T(L("Link to Install Base Forum thread",36),"=","both",!0,36)})})]})}),t(Q,{mb:"sm",mt:"sm",fullWidth:!0,orientation:"horizontal",value:s,onChange:h,data:["Data by Fiscal Year","Special Page"]}),s==="Data by Fiscal Year"?t(J,{position:"center",children:t(M,{dropdownPosition:"bottom",mb:"sm",mr:"md",placeholder:"Select",label:`Select a Fiscal Year from ${P-(A.length-1)} to ${P}.`,description:`Fiscal Year ending March ${Number(i==null?void 0:i.slice(4,8))?i==null?void 0:i.slice(4,8):""}.`,radius:"xl",size:"md",data:A,value:i,onChange:N})}):t(he,{}),s==="Data by Fiscal Year"&&typeof i=="string"?l(i):null]})}export{ke as default};
