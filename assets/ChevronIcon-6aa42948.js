import{r as c,R as i,z as m}from"./index-e780f2ee.js";function w(r){const e=c.createContext(null);return[({children:n,value:l})=>i.createElement(e.Provider,{value:l},n),()=>{const n=c.useContext(e);if(n===null)throw new Error(r);return n}]}var p=Object.defineProperty,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,v=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,C=(r,e)=>{for(var t in e||(e={}))u.call(e,t)&&v(r,t,e[t]);if(a)for(var t of a(e))d.call(e,t)&&v(r,t,e[t]);return r},_=(r,e)=>{var t={};for(var o in r)u.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&a)for(var o of a(r))e.indexOf(o)<0&&d.call(r,o)&&(t[o]=r[o]);return t};const x={xs:14,sm:18,md:20,lg:24,xl:28};function g(r){var e=r,{size:t,error:o,style:n}=e,l=_(e,["size","error","style"]);const s=m(),f=s.fn.size({size:t,sizes:x});return i.createElement("svg",C({width:f,height:f,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:C({color:o?s.colors.red[6]:s.colors.gray[6]},n),"data-chevron":!0},l),i.createElement("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}export{g as C,w as c};