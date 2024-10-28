import{r as h,u as C,e as o,j as v,C as k,l as Y,p as D,m as I,A as T,S as x,G as O}from"./index-261e3b4a.js";import{n as N,o as E}from"./segment_earnings_general_cml_data-acf5c7c4.js";import{a8 as G,a9 as P,aa as R,G as $,S as F,a as A,d as L,ab as V,b as Q}from"./GRAPH_CONSOLIDATED_EARNINGS-5922f41f.js";import{S}from"./Space-23498199.js";import"./ChevronIcon-030ab6ec.js";function W(r){const[l,d]=h.useState(""),e=C(t=>t.colour),a=C(t=>t.fontColor),u=Array.from({length:r.yearLength},(t,n)=>[{name:"Data Sources",value:G.get(n)},{name:"Consolidated Operating Results",value:P.get(n),graph:o($,{setData:R.get(n)})},{name:"Segment Information",value:N.get(n)}].filter(s=>s.value!==void 0)),g=u[r.setIndex].map(t=>t.name),m=t=>n=>{let[s]=t.filter(c=>n===c.name);return(s==null?void 0:s.value)||""},b=(t=>n=>{let[s]=t.filter(c=>n===c.name);return s==null?void 0:s.graph})(u[r.setIndex]),p=m(u[r.setIndex]);function i(){setTimeout(()=>{d("")},10)}return v("div",{children:[g.filter(t=>t===l).length===0&&l.length!==0?i():o(F,{fullWidth:!0,orientation:"vertical",value:l,onChange:d,data:g}),l==="Data Sources"?p(l):o(k,{onCopy:t=>A(t,L),style:{backgroundColor:`${e}`,color:a==="dark"?"#fff":"#000000"},block:!0,children:p(l)}),b(l)]})}function _(){const[r,l]=h.useState(""),[d,e]=h.useState(6),[a,u]=h.useState("FY Cumulative"),g=C(t=>t.colour),m=C(t=>t.fontColor);h.useEffect(()=>{switch(r){case"Kadokawa Consolidated Operating Results - Cumulative":e(a==="1st Quarter"?0:a==="2nd Quarter"?1:a==="3rd Quarter"?2:a==="4th Quarter"?3:a==="First Half"?4:a==="First Three Quarters"?5:6);break;case"Kadokawa Segment Information - Cumulative":e(a==="1st Quarter"?0:a==="2nd Quarter"?1:a==="3rd Quarter"?2:a==="4th Quarter"?3:a==="First Half"?4:a==="First Three Quarters"?5:6);break}},[r,a]);const f=[{name:"Kadokawa Consolidated Operating Results - Cumulative",value:V[d]},{name:"Kadokawa Segment Information - Cumulative",value:E[d]}],b=f.map(t=>t.name),i=(t=>n=>{let[s]=t.filter(c=>n===c.name);return s?s.value:""})(f);return v("div",{children:[o(F,{fullWidth:!0,orientation:"vertical",value:r,onChange:l,data:b}),v(k,{onCopy:t=>A(t,L),style:{backgroundColor:`${g}`,color:m==="dark"?"#fff":"#000000"},block:!0,children:[r==="Kadokawa Consolidated Operating Results - Cumulative"||r==="Kadokawa Segment Information - Cumulative"?o(Q,{data:["1st Quarter","2nd Quarter","3rd Quarter","4th Quarter","First Half","First Three Quarters","FY Cumulative"],defaultValue:"FY Cumulative",label:"Select a time period:",radius:"xl",value:a,onChange:u}):void 0,i(r)]}),o(S,{h:"xl"}),o(S,{h:"xl"}),o(S,{h:"xl"}),o(S,{h:"xl"})]})}const w=2025,H=w-2015,y=Array.from({length:H+1},(r,l)=>"FY3/"+(w-l));function J(){const r=Y(D("Also, visit Install Base. It's a place to discuss and elaborate on the business side of the video game industry.",40),"=","top",!0,40),d=I("Kadokawa (They own FromSoftware), this is where you can find archived data.",40,"−",80),[e,a]=h.useState(""),[u,g]=h.useState("Data by Fiscal Year"),m=C(i=>i.colour),f=C(i=>i.fontColor),p=(i=>t=>{let[n]=i.map((c,K)=>t===c?K:-1).filter(c=>c!==-1),s=i.length;return n>=0?o(W,{setIndex:n,yearLength:s}):null})(y);return v("div",{children:[o(x,{mb:"md",align:"center",children:o(k,{style:{backgroundColor:`${m}`,color:f==="dark"?"#fff":"#000000"},block:!0,children:d})}),o(x,{align:"center",children:v(k,{style:{backgroundColor:`${m}`,color:f==="dark"?"#fff":"#000000"},block:!0,children:[r,o(T,{className:"fade",style:{textAlign:"center"},mb:"sm",href:"https://www.installbaseforum.com/",target:"_blank",children:o(k,{style:{backgroundColor:`${m}`,color:f==="dark"?"#fff":"#000000"},block:!0,children:Y(D("https://www.installbaseforum.com/",36),"=","both",!0,36)})})]})}),o(F,{mb:"sm",mt:"sm",fullWidth:!0,orientation:"horizontal",value:u,onChange:g,data:["Data by Fiscal Year","Special Page"]}),u==="Data by Fiscal Year"?o(O,{position:"center",children:o(Q,{dropdownPosition:"bottom",mb:"sm",mr:"md",placeholder:"Select",label:`Select a Fiscal Year from ${w-(y.length-1)} to ${w}.`,description:`Fiscal Year ending March ${Number(e==null?void 0:e.slice(4,8))?e==null?void 0:e.slice(4,8):""}.`,radius:"xl",size:"md",data:y,value:e,onChange:a})}):o(_,{}),u==="Data by Fiscal Year"&&typeof e=="string"?p(e):null]})}export{J as default};