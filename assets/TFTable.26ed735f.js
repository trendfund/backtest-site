import{E as B,m as x,r as h,n as D,q as N,o as s,d as f,w as d,c as _,s as F,F as m,t as b,v as M}from"./vendor.6b8cca79.js";const k="https://raw.githubusercontent.com/odofmine/td/master",l=`${k}/fof/`,w="https://raw.githubusercontent.com/odofmine/historical-ranking/main/coincodex";function g(t){B({title:"\u52A0\u8F7D\u5931\u8D25",message:x("i",{style:"color: teal"},`${t}`),type:"error",duration:0})}async function T(){const t=`${k}/list-fof.json`;return(await fetch(t)).json()}async function c(t,e,r){const o=`${l}/${t}/${e}.json`,a=await fetch(o);return a.status!=200?(g(o),r):a.json()}async function C(t){return(await fetch(`${w}/${t}.json`)).json()}async function p(t){const e=Object.keys(t).map(async r=>{const o=await fetch(t[r]);if(o.status!=200)return g(t[r]),{name:r,data:[]};const a=await o.json();return{name:r,data:a}});return Promise.all(e)}function q(t){return c(t,"funds",[])}async function A(t,e){return await c(t,e,[])}function E(t){return c(t,"metrics",{})}function S(t){return c(t,"leverages",{})}function U(t){return c(t,"stats",{})}function G(t){return c(t,"holdings",{})}function H(){return C("gainers_vs_losers")}function I(t){return c(t,"config",{})}function O(t){const e={candidates:`${l}/${t}/candidates.json`};return p(e)}function V(t){const e={atr:`${l}/${t}/atr.json`};return p(e)}function z(t){const e={market_cap_pnt:`${l}/${t}/market_cap_pnt.json`,raw_market_cap_pnt:`${l}/${t}/raw_market_cap_pnt.json`};return p(e)}function J(){const t={turnovers:`${w}/turnovers.json`};return p(t)}function K(t,e){const r=e.reduce((o,a)=>(o[a]=`${l}/${t}/${a}.json`,o),{});return p(r)}const Q=(t,e)=>{const r=Math.pow(10,e||2);return`${Math.floor(t*100*r)/r} %`},R=(t,e)=>{const r=10**e;return Number(t)>0?Math.floor(Number(t)*r)/r:Math.ceil(Number(t)*r)/r};const L={key:0},W={props:{data:{type:Array},loading:{type:Boolean},columns:{type:Array}},setup(t){const e=t,r=({row:a,column:$,rowIndex:y,columnIndex:u})=>{if(a.type==="split")return u===0?[1,e.columns.length]:[0,0]},o=({row:a})=>{if(a.type==="split")return{background:"#f1f1f1 !important","--el-table-row-hover-bg-color":"#f1f1f1"}};return(a,$)=>{const y=h("router-link"),u=h("el-table-column"),v=h("el-table"),j=D("loading");return N((s(),f(v,{data:e.data,style:{width:"100%"},border:"",class:"monospace-table","span-method":r,"row-style":o},{default:d(()=>[(s(!0),_(m,null,F(e.columns,n=>(s(),_(m,null,[n.path?(s(),f(u,{key:0,label:n.label},{default:d(i=>[i.row.type==="split"?(s(),_("span",L,b(i.row[n.prop]),1)):(s(),f(y,{key:1,target:"_blank",to:{path:n.path(i.row),query:n.query?n.query(i.row):{}}},{default:d(()=>[M(b(i.row[n.prop]),1)]),_:2},1032,["to"]))]),_:2},1032,["label"])):n.formatter?(s(),f(u,{key:1,prop:n.prop,label:n.label,formatter:n.formatter},null,8,["prop","label","formatter"])):(s(),f(u,{key:2,prop:n.prop,label:n.label},null,8,["prop","label"]))],64))),256))]),_:1},8,["data"])),[[j,e.loading]])}}};export{W as _,q as a,K as b,G as c,O as d,S as e,T as f,z as g,I as h,A as i,V as j,U as k,J as l,H as m,E as n,R as o,Q as v};
