import{r as m,u as k,t as H,e as a,j as x,C as p,F as V,l as y,p as R,B as q,f as M,m as O,A as U,S as $,G as B}from"./index-70bff6db.js";import{E as j,F as X,G as J,H as K}from"./GRAPH_SOFTWARE_SALES-d3bf9c65.js";import{g as Z,h as ee}from"./segment_earnings_general_cml_data-c2fd2192.js";import{k as te}from"./annual_report_general-9bb81b80.js";import{z as ae,A as re,D as le,G as se,S as D,a as G,d as _,E as ie,b as W}from"./GRAPH_CONSOLIDATED_EARNINGS-6397af69.js";import{T as z}from"./TextInput-319cb66f.js";import{e as Q}from"./annual_report_cumulative-9912ca34.js";import{S as L}from"./Space-9ab80327.js";import"./ChevronIcon-060a2c1c.js";function ne(l){const[i,v]=m.useState(""),n=k(e=>e.colour),o=k(e=>e.fontColor),[u,g]=m.useState(""),[C,S]=m.useState(0);let t=new Set,r=-1,h=te.get(l.setIndex+r),f=H(h,"FY Series IP",i,u,t);const c=[{value:f.sectionTitle,placeholder:"Search specific series",label:`Series Search - Number of game series shown: ${C}`,description:"Clear field to show all game series listed."}].filter(e=>e.value===i);m.useEffect(()=>{switch(i){case f.sectionTitle:S(f.titlesLength.length);break}},[u,i,l.setIndex]);const E=Array.from({length:l.yearLength},(e,s)=>[{name:"Data Sources",value:ae.get(s)},{name:"Consolidated Financial Results",value:re.get(s),graph:a(se,{setData:le.get(s)})},{name:"Segment Information",value:Z.get(s)},{name:"Software Sales",value:j.get(s),graph:a(J,{setData:X.get(s)})},{name:"FY Series IP",value:f.table}].filter(d=>d.value!==void 0)),b=E[l.setIndex].map(e=>e.name),F=e=>s=>{let[d]=e.filter(w=>s===w.name);return(d==null?void 0:d.value)||""},T=e=>s=>{let[d]=e.filter(w=>s===w.name);return d==null?void 0:d.graph},I=F(E[l.setIndex]),N=T(E[l.setIndex]);function A(){setTimeout(()=>{v("")},10)}return x("div",{children:[b.filter(e=>e===i).length===0&&i.length!==0?A():a(D,{fullWidth:!0,orientation:"vertical",value:i,onChange:v,data:b}),i==="Data Sources"?I(i):x(p,{onCopy:e=>G(e,_),style:{backgroundColor:`${n}`,color:o==="dark"?"#fff":"#000000"},block:!0,children:[i===f.sectionTitle?x(V,{children:[a(z,{placeholder:c[0].placeholder,label:c[0].label,description:c[0].description,radius:"xl",value:u,onChange:e=>{g(e.target.value.toLowerCase())}}),t.size>0&&u!==t.values().next().value?y(R("Nearest single word search: (To use, click on a word)",40),"−","both",!0,40):void 0,t.size>0&&u!==t.values().next().value?[...t].flatMap((e,s)=>s>3?[]:a(q,{onClick:()=>g(e),radius:"xl",ml:"sm",mb:"sm",variant:"subtle",compact:!0,children:a(p,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${n}`,color:o==="dark"?"#fff":"#000000"},children:e})},e)):u===t.values().next().value||C===0?a(q,{onClick:()=>g(""),radius:"xl",m:"sm",variant:"subtle",compact:!0,children:a(p,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${n}`,color:o==="dark"?"#fff":"#000000"},children:"Clear Search"})}):void 0,a("br",{})]}):void 0,I(i)]}),N(i)]})}function oe(){const[l,i]=m.useState(""),v=k(e=>e.colour),n=k(e=>e.fontColor),[o,u]=m.useState(""),[g,C]=m.useState(0),[S,t]=m.useState(6),[r,h]=m.useState("FY Cumulative");let f=M(Q.titleList,o),c=new Set;o.length!==0&&l==="Square Enix FY Series IP - Cumulative"&&f.map(e=>[...e.title.toLowerCase().matchAll(new RegExp(`(?=\\w*${o})\\w+`,"g"))].flat().map(s=>c.add(s)));let E=f.reduce((e,s)=>e+s.table,""),b=Q.header+E+Q.footnotes;const F=[{value:"Square Enix FY Series IP - Cumulative",placeholder:"Search specific series",label:`Series Search - Number of game series shown: ${g}`,description:"Clear field to show all game series listed."}].filter(e=>e.value===l);m.useEffect(()=>{switch(l){case"Square Enix Consolidated Financial Results - Cumulative":t(r==="1st Quarter"?0:r==="2nd Quarter"?1:r==="3rd Quarter"?2:r==="4th Quarter"?3:r==="First Half"?4:r==="First Three Quarters"?5:6);break;case"Square Enix Segment Information - Cumulative":t(r==="1st Quarter"?0:r==="2nd Quarter"?1:r==="3rd Quarter"?2:r==="4th Quarter"?3:r==="First Half"?4:r==="First Three Quarters"?5:6);break;case"Square Enix Sales Per Software Unit - Cumulative":t(r==="1st Quarter"?0:r==="2nd Quarter"?1:r==="3rd Quarter"?2:r==="4th Quarter"?3:r==="First Half"?4:r==="First Three Quarters"?5:6);break;case"Square Enix FY Series IP - Cumulative":C(f.length);break}},[o,l,r]);const T=[{name:"Square Enix Consolidated Financial Results - Cumulative",value:ie[S]},{name:"Square Enix Segment Information - Cumulative",value:ee[S]},{name:"Square Enix Sales Per Software Unit - Cumulative",value:K[S]},{name:"Square Enix FY Series IP - Cumulative",value:b}],I=T.map(e=>e.name),A=(e=>s=>{let[d]=e.filter(w=>s===w.name);return d?d.value:""})(T);return x("div",{children:[a(D,{fullWidth:!0,orientation:"vertical",value:l,onChange:i,data:I}),x(p,{onCopy:e=>G(e,_),style:{backgroundColor:`${v}`,color:n==="dark"?"#fff":"#000000"},block:!0,children:[l==="Square Enix Consolidated Financial Results - Cumulative"||l==="Square Enix Segment Information - Cumulative"||l==="Square Enix Sales Per Software Unit - Cumulative"?a(W,{data:["1st Quarter","2nd Quarter","3rd Quarter","4th Quarter","First Half","First Three Quarters","FY Cumulative"],defaultValue:"FY Cumulative",label:"Select a time period:",radius:"xl",value:r,onChange:h}):void 0,l==="Square Enix FY Series IP - Cumulative"?x(V,{children:[a(z,{placeholder:F[0].placeholder,label:F[0].label,description:F[0].description,radius:"xl",value:o,onChange:e=>{u(e.target.value.toLowerCase())}}),c.size>0&&o!==c.values().next().value?y(R("Nearest single word search: (To use, click on a word)",40),"−","both",!0,40):void 0,c.size>0&&o!==c.values().next().value?[...c].flatMap((e,s)=>s>3?[]:a(q,{onClick:()=>u(e),radius:"xl",ml:"sm",mb:"sm",variant:"subtle",compact:!0,children:a(p,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${v}`,color:n==="dark"?"#fff":"#000000"},children:e})},e)):o===c.values().next().value||g===0?a(q,{onClick:()=>u(""),radius:"xl",m:"sm",variant:"subtle",compact:!0,children:a(p,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${v}`,color:n==="dark"?"#fff":"#000000"},children:"Clear Search"})}):void 0,a("br",{})]}):void 0,A(l)]}),a(L,{h:"xl"}),a(L,{h:"xl"}),a(L,{h:"xl"}),a(L,{h:"xl"})]})}const Y=2025,ue=Y-2004,P=Array.from({length:ue+1},(l,i)=>"FY3/"+(Y-i));function Ce(){const l=y(R("Also, visit Install Base. It's a place to discuss and elaborate on the business side of the video game industry.",40),"=","top",!0,40),v=O("Square Enix (They publish Marvel's Avengers), this is where you can find archived data.",40,"−",80),[n,o]=m.useState(""),[u,g]=m.useState("Data by Fiscal Year"),C=k(h=>h.colour),S=k(h=>h.fontColor),r=(h=>f=>{let[c]=h.map((b,F)=>f===b?F:-1).filter(b=>b!==-1),E=h.length;return c>=0?a(ne,{setIndex:c,yearLength:E}):null})(P);return x("div",{children:[a($,{mb:"md",align:"center",children:a(p,{style:{backgroundColor:`${C}`,color:S==="dark"?"#fff":"#000000"},block:!0,children:v})}),a($,{mb:"md",align:"center",children:x(p,{style:{backgroundColor:`${C}`,color:S==="dark"?"#fff":"#000000"},block:!0,children:[l,a(U,{className:"fade",style:{textAlign:"center"},mb:"sm",href:"https://www.installbaseforum.com/",target:"_blank",children:a(p,{style:{backgroundColor:`${C}`,color:S==="dark"?"#fff":"#000000"},block:!0,children:y(R("https://www.installbaseforum.com/",36),"−","both",!0,36)})})]})}),a(D,{mb:"sm",mt:"sm",fullWidth:!0,orientation:"horizontal",value:u,onChange:g,data:["Data by Fiscal Year","Special Page"]}),u==="Data by Fiscal Year"?a(B,{position:"center",children:a(W,{dropdownPosition:"bottom",mb:"sm",mr:"md",placeholder:"Select",label:`Select a Fiscal Year from ${Y-(P.length-1)} to ${Y}.`,description:`Fiscal Year ending March ${Number(n==null?void 0:n.slice(4,8))?n==null?void 0:n.slice(4,8):""}.`,radius:"xl",size:"md",data:P,value:n,onChange:o})}):a(oe,{}),u==="Data by Fiscal Year"&&typeof n=="string"?r(n):null]})}export{Ce as default};