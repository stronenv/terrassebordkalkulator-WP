(()=>{"use strict";var r,e={650:()=>{const r=window.wp.blocks,e=window.wp.i18n,s=window.wp.blockEditor,a=window.ReactJSXRuntime,t=JSON.parse('{"UU":"create-block/terrassebordkalkulator"}');(0,r.registerBlockType)(t.UU,{edit:function(){return(0,a.jsx)("div",{...(0,s.useBlockProps)(),children:(0,e.__)("There are no settings for the calculator in the editor, yet.","terrassebordkalkulator")})},save:function(){return(0,a.jsxs)("div",{...s.useBlockProps.save(),children:[(0,a.jsx)("h5",{children:"Du trenger:"}),(0,a.jsxs)("h3",{children:[(0,a.jsx)("span",{id:"calculatedLopemeter"})," løpemeter terrassebord"]}),(0,a.jsxs)("h3",{children:[(0,a.jsx)("span",{id:"calculatedSkruer"})," skruer"]}),(0,a.jsxs)("div",{class:"terrassebordkalkulator__input",children:[(0,a.jsxs)("div",{class:"terrassebordkalkulator__input__display-row",children:[(0,a.jsx)("div",{children:"Antall kvadratmeter:"}),(0,a.jsxs)("strong",{children:[(0,a.jsx)("span",{id:"kvm"})," m",(0,a.jsx)("sup",{children:"2"})]})]}),(0,a.jsx)("input",{type:"range",class:"terrassebordkalkulator__input__slider",name:"kvmInput",id:"kvmInput",min:"1",max:"300",value:"30","aria-label":"Antall kvadratmeter"})]}),(0,a.jsxs)("div",{class:"terrassebordkalkulator__input",children:[(0,a.jsxs)("div",{class:"terrassebordkalkulator__input__display-row",children:[(0,a.jsx)("div",{children:"Terrassebord bredde"}),(0,a.jsxs)("strong",{children:[(0,a.jsx)("span",{id:"bredde"})," mm"]})]}),(0,a.jsx)("input",{type:"range",class:"terrassebordkalkulator__input__slider",name:"breddeInput",id:"breddeInput",min:"60",max:"180",value:"120","aria-label":"Terrassebord bredde"})]})]})}})}},s={};function a(r){var t=s[r];if(void 0!==t)return t.exports;var l=s[r]={exports:{}};return e[r](l,l.exports,a),l.exports}a.m=e,r=[],a.O=(e,s,t,l)=>{if(!s){var i=1/0;for(u=0;u<r.length;u++){for(var[s,t,l]=r[u],n=!0,d=0;d<s.length;d++)(!1&l||i>=l)&&Object.keys(a.O).every((r=>a.O[r](s[d])))?s.splice(d--,1):(n=!1,l<i&&(i=l));if(n){r.splice(u--,1);var o=t();void 0!==o&&(e=o)}}return e}l=l||0;for(var u=r.length;u>0&&r[u-1][2]>l;u--)r[u]=r[u-1];r[u]=[s,t,l]},a.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{var r={57:0,350:0};a.O.j=e=>0===r[e];var e=(e,s)=>{var t,l,[i,n,d]=s,o=0;if(i.some((e=>0!==r[e]))){for(t in n)a.o(n,t)&&(a.m[t]=n[t]);if(d)var u=d(a)}for(e&&e(s);o<i.length;o++)l=i[o],a.o(r,l)&&r[l]&&r[l][0](),r[l]=0;return a.O(u)},s=globalThis.webpackChunkterrassebordkalkulator=globalThis.webpackChunkterrassebordkalkulator||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})();var t=a.O(void 0,[350],(()=>a(650)));t=a.O(t)})();