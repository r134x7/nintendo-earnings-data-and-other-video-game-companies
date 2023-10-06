import{g as ae,r as C,u as P,e as ce,t as de,c as t,j as L,C as x,F as le,l as T,p as A,B as D,d as fe,b as I,s as k,f as z,k as me,A as he,S as q,G as Se}from"./index-2c7ecd18.js";import{s as ge,e as pe,f as ve,_ as Ce,g as be,h as _e,i as we,p as ye,j as J}from"./annual_report_cumulative-f98dc50e.js";import{a as Te,g as ke,e as xe,f as Le,h as Fe,i as Ie,j as Pe,G as Ae,s as Ye}from"./GRAPH_SOFTWARE_SALES-fb64f7db.js";import{s as Re,l as Ue,m as $e,G as Ge,S as H,a as re,b as M,d as se,o as De}from"./GRAPH_CONSOLIDATED_EARNINGS-863c9fe6.js";import{G as Me}from"./GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE-53f7eefe.js";import{T as oe}from"./TextInput-43a1d561.js";import{S as G}from"./Space-c41b6ff8.js";import"./ChevronIcon-42dd82c7.js";const ie=ae(new Map,Object.assign({"./Software_Sales/software_sales_fy3_2020.json":xe,"./Software_Sales/software_sales_fy3_2021.json":Le,"./Software_Sales/software_sales_fy3_2022.json":Fe,"./Software_Sales/software_sales_fy3_2023.json":Ie,"./Software_Sales/software_sales_fy3_2024.json":Pe}),"Descending"),ne=new Map,ue=new Map;ie.forEach((r,o,c)=>{ne.set(o,Te(r,c.get(o+1),38,"Billion","One Thousand")),ue.set(o,ke(r,c.get(o+1),"Billion","One Thousand"))});ie.clear();function Ve(r){var l;const[o,c]=C.useState(""),f=P(e=>e.colour),i=P(e=>e.fontColor),[d,b]=C.useState(""),[p,v]=C.useState(0),[n,u]=C.useState("All");let s=-1,a=ge.get(r.setIndex+s),m=a===void 0?void 0:[a],w=(l=pe)==null?void 0:l[r.setIndex],_=new Set,S=new Set,g=ce(m,(a==null?void 0:a.header)??"ERROR","FY Series IP",o,n??"All","Single","Single",_,d,S),F=de(w,"Software Units",o,d,S);const Y=[{value:F.sectionTitle,placeholder:"Search specific titles or game series",label:`Title/Series Search - Number of Titles/Series shown: ${p}`,description:"Clear field to show all titles of the selected platform"},{value:g.sectionTitle,placeholder:"Search specific series",label:`Series Search - Number of game series shown: ${p}`,description:"Clear field to show all game series listed."}].filter(e=>e.value===o);C.useEffect(()=>{switch(o){case g.sectionTitle:v(g.titlesLength.length);let e=[..._].filter(h=>h===n);((e==null?void 0:e.length)??0)===0&&u("All");break;case F.sectionTitle:v(F.titlesLength.length);break}},[o,d,n,r.setIndex,_]);const R=Array.from({length:r.yearLength},(e,h)=>[{name:"Data Sources",value:Re.get(h)},{name:"Consolidated Operating Results",value:Ue.get(h),graph:t(Ge,{setData:$e.get(h)})},{name:"Software Sales",value:ne.get(h),graph:t(Ae,{setData:ue.get(h)})},{name:"Software Units",value:F.table,graph:t(Me,{setData:ve[h]})},{name:"FY Series IP",value:g.table}].filter(y=>y.value!==void 0)),$=R[r.setIndex].map(e=>e.name),U=e=>h=>{let[y]=e.filter(j=>h===j.name);return(y==null?void 0:y.value)||""},N=(e=>h=>{let[y]=e.filter(j=>h===j.name);return y==null?void 0:y.graph})(R[r.setIndex]),O=U(R[r.setIndex]);function Q(){setTimeout(()=>{c("")},10)}return L("div",{children:[$.filter(e=>e===o).length===0&&o.length!==0?Q():t(H,{fullWidth:!0,orientation:"vertical",value:o,onChange:c,data:$}),o==="Data Sources"?O(o):L(x,{onCopy:e=>re(e,se),style:{backgroundColor:`${f}`,color:i==="dark"?"#fff":"#000000"},block:!0,children:[o===g.sectionTitle?t(M,{data:["All"].concat([..._]),defaultValue:"All",label:"Select all or one IP Type:",radius:"xl",value:n,onChange:u}):void 0,o===g.sectionTitle||o===F.sectionTitle?L(le,{children:[t(oe,{placeholder:Y[0].placeholder,label:Y[0].label,description:Y[0].description,radius:"xl",value:d,onChange:e=>{b(e.target.value.toLowerCase())}}),S.size>0&&d!==S.values().next().value?T(A("Nearest single word search: (To use, click on a word)",40),"−","both",!0,40):void 0,S.size>0&&d!==S.values().next().value?[...S].flatMap((e,h)=>h>3?[]:t(D,{onClick:()=>b(e),radius:"xl",ml:"sm",mb:"sm",variant:"subtle",compact:!0,children:t(x,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${f}`,color:i==="dark"?"#fff":"#000000"},children:e})},e)):d===S.values().next().value||p===0?t(D,{onClick:()=>b(""),radius:"xl",m:"sm",variant:"subtle",compact:!0,children:t(x,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${f}`,color:i==="dark"?"#fff":"#000000"},children:"Clear Search"})}):void 0,t("br",{})]}):void 0,O(o)]}),N(o)]})}const B=[...ae(new Map,Object.assign({"./Software_Units/software_units_fy3_2021.json":Ce,"./Software_Units/software_units_fy3_2022.json":be,"./Software_Units/software_units_fy3_2023.json":_e,"./Software_Units/software_units_fy3_2024.json":we}),"Ascending").values()];var ee,te;const K=fe(((ee=B.at(-1))==null?void 0:ee.fiscalYear)??"N/A",((te=B.at(-1))==null?void 0:te.currentQuarter)??4),Ee=T(I([k(K,K.length+1,"left")]),"−","bottom",!0);function Ne(r,o,c){let f=T(I([k(o,o.length+1,"left")]),"−","top",!0)+T(I([k("Full Game Software Unit Sales - Cumulative",43,"left")]),"−","both",!0)+c,i=r.map(s=>{let a=s.softwareUnits.flatMap(w=>ye(w)),m=s.fiscalYear;return a.map(w=>({...w,fiscalYear:m}))}),d=i.flat().filter(s=>s.period==="4th Quarter"),b=i.flat().map(s=>s.name);const p=[...new Set(b)];function v(s){return s.map((a,m,w)=>d.filter(S=>S.name===a))}let u=v(p).map((s,a,m)=>s).sort((s,a)=>a[a.length-1].value>s[s.length-1].value?1:a[a.length-1].value<s[s.length-1].value?-1:0).map((s,a)=>{let m=a+1;return s.map(w=>({...w,rank:m}))});return{header:f,titles:u}}function Oe(r,o,c){const f=o.map((i,d,b)=>{let p=T(A(i[0].name,42),"−","both",!0,42),v=i[i.length-1].miscellaneous===void 0?void 0:i[i.length-1].miscellaneous,n=i.flatMap(a=>I([k(a.fiscalYear+" Cumulative",30,"left"),k(`${a.value/100}M`,9,"right")],!0)),u=Number(i.reduce((a,m)=>a+m.value,0)/100).toFixed(2),s=v===void 0?T(I([k("Sum (Units)",30,"left"),k(`${u}M`,9,"right")]),"−","both",!0):T(I([k("Sum",30,"left"),k(`${u}M`,9,"right")]),"−","both",!0)+T(A(v,42),"−","bottom",!0,42);return c?{title:i[0].name,table:[p,...n,s].reduce((a,m)=>a+m)}:[p,...n,s].reduce((a,m)=>a+m)});return c?{header:r,titleList:f}:[r,f.reduce((i,d)=>typeof d=="string"?i+d:i,"")].reduce((i,d)=>typeof d=="string"?i+d:i,"")}const X=Ne(B,"Sega Sammy",Ee),Z=Oe(X.header,X.titles,!0);function Qe(){const[r,o]=C.useState(""),[c,f]=C.useState(""),[i,d]=C.useState(0),[b,p]=C.useState("All"),[v,n]=C.useState(6),[u,s]=C.useState("FY Cumulative"),a=P(l=>l.colour),m=P(l=>l.fontColor);let w=J.titleList.filter(l=>{if(b==="All")return l;if(b===l.platforms)return l}),_=z(Z.titleList,c),S=z(w,c),g=new Set;c.length!==0&&r==="Sega Sammy Software Units - Cumulative"?_.map(l=>[...l.title.toLowerCase().matchAll(new RegExp(`(?=\\w*${c})\\w+`,"g"))].flat().map(e=>g.add(e))):c.length!==0&&r==="Sega Sammy FY Series IP - Cumulative"&&S.map(l=>[...l.title.toLowerCase().matchAll(new RegExp(`(?=\\w*${c})\\w+`,"g"))].flat().map(e=>g.add(e)));let F=_.reduce((l,e)=>l+e.table,""),Y=Z.header+F,R=S.reduce((l,e)=>l+e.table,""),$=J.header+R;const U=[{value:"Sega Sammy Software Units - Cumulative",placeholder:"Search specific titles or game series",label:`Title/Series Search - Number of Titles/Series shown: ${i}`,description:"Clear field to show all titles of the selected platform"},{value:"Sega Sammy FY Series IP - Cumulative",placeholder:"Search specific series",label:`Series Search - Number of game series shown: ${i}`,description:"Clear field to show all game series listed."}].filter(l=>l.value===r);C.useEffect(()=>{switch(r){case"Sega Sammy Consolidated Operating Results - Cumulative":n(u==="1st Quarter"?0:u==="2nd Quarter"?1:u==="3rd Quarter"?2:u==="4th Quarter"?3:u==="First Half"?4:u==="First Three Quarters"?5:6);break;case"Sega Sammy Sales Per Software Unit - Cumulative":n(u==="1st Quarter"?0:u==="2nd Quarter"?1:u==="3rd Quarter"?2:u==="4th Quarter"?3:u==="First Half"?4:u==="First Three Quarters"?5:6);break;case"Sega Sammy Software Units - Cumulative":d(_.length);break;case"Sega Sammy FY Series IP - Cumulative":d(S.length);break}},[c,r,b,u]);const E=[{name:"Sega Sammy Consolidated Operating Results - Cumulative",value:De[v]},{name:"Sega Sammy Sales Per Software Unit - Cumulative",value:Ye[v]},{name:"Sega Sammy Software Units - Cumulative",value:Y},{name:"Sega Sammy FY Series IP - Cumulative",value:$}],N=E.map(l=>l.name),Q=(l=>e=>{let[h]=l.filter(y=>e===y.name);return h?h.value:""})(E);return L("div",{children:[t(H,{fullWidth:!0,orientation:"vertical",value:r,onChange:o,data:N}),L(x,{onCopy:l=>re(l,se),style:{backgroundColor:`${a}`,color:m==="dark"?"#fff":"#000000"},block:!0,children:[r==="Sega Sammy Consolidated Operating Results - Cumulative"||r==="Sega Sammy Sales Per Software Unit - Cumulative"?t(M,{data:["1st Quarter","2nd Quarter","3rd Quarter","4th Quarter","First Half","First Three Quarters","FY Cumulative"],defaultValue:"FY Cumulative",label:"Select a time period:",radius:"xl",value:u,onChange:s}):void 0,r==="Sega Sammy FY Series IP - Cumulative"?t(M,{data:["All","Developed in-house IP","Acquired IP","Licensed third party IP"],defaultValue:"All",label:"Select all or one IP Type:",radius:"xl",value:b,onChange:p}):void 0,r==="Sega Sammy Software Units - Cumulative"||r==="Sega Sammy FY Series IP - Cumulative"?L(le,{children:[t(oe,{placeholder:U[0].placeholder,label:U[0].label,description:U[0].description,radius:"xl",value:c,onChange:l=>{f(l.target.value.toLowerCase())}}),g.size>0&&c!==g.values().next().value?T(A("Nearest single word search: (To use, click on a word)",40),"−","both",!0,40):void 0,g.size>0&&c!==g.values().next().value?[...g].flatMap((l,e)=>e>3?[]:t(D,{onClick:()=>f(l),radius:"xl",ml:"sm",mb:"sm",variant:"subtle",compact:!0,children:t(x,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${a}`,color:m==="dark"?"#fff":"#000000"},children:l})},l)):c===g.values().next().value||i===0?t(D,{onClick:()=>f(""),radius:"xl",m:"sm",variant:"subtle",compact:!0,children:t(x,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${a}`,color:m==="dark"?"#fff":"#000000"},children:"Clear Search"})}):void 0,t("br",{})]}):void 0,Q(r)]}),t(G,{h:"xl"}),t(G,{h:"xl"}),t(G,{h:"xl"}),t(G,{h:"xl"})]})}const V=2024,je=V-2005,W=Array.from({length:je+1},(r,o)=>"FY3/"+(V-o));function Ze(){const r=T(A("While you're here, you can head to Install Base to read about the mysterious Sega Super Genesis 32.",40),"=","top",!0,40),c=me("Sega (They publish Hatsune Miku games), this is where you can find archived Sega Series IP data.",40,"−",80),[f,i]=C.useState(""),[d,b]=C.useState("Data by Fiscal Year"),p=P(s=>s.colour),v=P(s=>s.fontColor),u=(s=>a=>{let[m]=s.map((_,S)=>a===_?S:-1).filter(_=>_!==-1),w=s.length;return m>=0?t(Ve,{setIndex:m,yearLength:w}):null})(W);return L("div",{children:[t(q,{mb:"md",align:"center",children:t(x,{style:{backgroundColor:`${p}`,color:v==="dark"?"#fff":"#000000"},block:!0,children:c})}),t(q,{align:"center",children:L(x,{style:{backgroundColor:`${p}`,color:v==="dark"?"#fff":"#000000"},block:!0,children:[r,t(he,{className:"fade",style:{textAlign:"center"},mb:"sm",href:"https://www.installbaseforum.com/forums/threads/ggx2ac-and-the-mysterious-case-of-the-sega-trademark-super-genesis-32.915/",target:"_blank",children:t(x,{style:{backgroundColor:`${p}`,color:v==="dark"?"#fff":"#000000"},block:!0,children:T(A("Link to Install Base Forum thread",36),"=","both",!0,36)})})]})}),t(H,{mb:"sm",mt:"sm",fullWidth:!0,orientation:"horizontal",value:d,onChange:b,data:["Data by Fiscal Year","Special Page"]}),d==="Data by Fiscal Year"?t(Se,{position:"center",children:t(M,{dropdownPosition:"bottom",mb:"sm",mr:"md",placeholder:"Select",label:`Select a Fiscal Year from ${V-(W.length-1)} to ${V}.`,description:`Fiscal Year ending March ${Number(f==null?void 0:f.slice(4,8))?f==null?void 0:f.slice(4,8):""}.`,radius:"xl",size:"md",data:W,value:f,onChange:i})}):t(Qe,{}),d==="Data by Fiscal Year"&&typeof f=="string"?u(f):null]})}export{Ze as default};