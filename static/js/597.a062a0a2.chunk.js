"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[597],{597:(n,e,s)=>{s.r(e),s.d(e,{default:()=>g});var r,d=s(456),a=s(294),i=s(963),o=s(43),c=s(528),t=s(197);const l=t.Ay.div(r||(r=(0,c.A)(["\n  display: flex;\n  padding: 0px 20px;\n\n  .shopList {\n    display: grid;\n    justify-items: center;\n    height: 700px;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 30px;\n    padding: 0 20px;\n    overflow: auto;\n  }\n  .shopList::-webkit-scrollbar {\n    width: 10px;\n    height: 10px;\n  }\n\n  .shopList::-webkit-scrollbar-thumb {\n    background: linear-gradient(to bottom right, #0077cc 0%, #33cc33 100%);\n    border-radius: 5px;\n  }\n\n  .shopList::-webkit-scrollbar-track {\n    background-color: #ddd;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n\n  .sidebarFilter {\n  }\n  .sidebarList {\n    display: flex;\n    width: 300px;\n    flex-direction: column;\n    gap: 10px;\n    margin-right: 50px;\n  }\n  .sidebarItem {\n  }\n  .sidebarBtn {\n    width: 100%;\n    padding: 20px 50px;\n    border-radius: 10px;\n    /* background-color: #0077cc; */\n    background-color: #33cc33;\n    color: #fff;\n    transition: all 0.3s;\n    &:hover {\n      /* background-color: #005599; */\n      background-color: #29a329;\n    }\n  }\n"])));var p,h=s(157),b=s(888);const x=t.Ay.li(p||(p=(0,c.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  .shopImg {\n    width: 240px;\n    border-radius: 30px;\n  }\n  .shopName {\n  }\n  .shopPrice {\n  }\n  .shopBtn {\n    padding: 10px 20px;\n    border-radius: 10px;\n    /* background-color: #0077cc; */\n    background-color: #33cc33;\n    color: #fff;\n    transition: all 0.3s;\n    &:hover {\n      /* background-color: #005599; */\n      background-color: #29a329;\n    }\n    &.added {\n      background-color: #0077cc;\n    }\n  }\n"])));var u=s(579);const m=n=>{let{drug:e,handleAddToCart:s,isAdded:r}=n;return(0,u.jsxs)(x,{children:[(0,u.jsx)("img",{className:"shopImg",src:b,alt:e.name}),(0,u.jsx)("p",{className:"shopName",children:e.name}),(0,u.jsxs)("p",{className:"shopPrice",children:["Price: ",e.price]}),(0,u.jsx)("button",{onClick:()=>s(e),className:"shopBtn ".concat(r?"added":""),disabled:r,children:r?"Added to Cart":"Add to Cart"})]})},g=()=>{const n=(0,d.d4)(a.Go),e=(0,d.d4)(a.VH),s=(0,d.d4)(a.AH),r=(0,d.wA)(),[c,t]=(0,o.useState)(""),[p,b]=(0,o.useState)([]);(0,o.useEffect)((()=>{0===n.length?r((0,i.r7)()):b(k(n,c))}),[r,n,c]);const x=n=>{e.some((e=>e._id===n._id))||r((0,i.bE)(n))},g=n=>{t(n)},k=(n,e)=>""===e?n:n.filter((n=>n.shopName===e));return(0,u.jsx)(l,{children:s?(0,u.jsx)(h.a,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("section",{className:"sidebarFilter",children:(0,u.jsxs)("ul",{className:"sidebarList",children:[(0,u.jsx)("li",{className:"sidebarItem",children:(0,u.jsx)("button",{onClick:()=>g(""),type:"button",className:"sidebarBtn",children:"All"})}),n&&[...new Set(n.map((n=>n.shopName)))].map((n=>(0,u.jsx)("li",{className:"sidebarItem",children:(0,u.jsx)("button",{onClick:()=>g(n),type:"button",className:"sidebarBtn",children:n})},n)))]})}),(0,u.jsx)("section",{children:(0,u.jsx)("ul",{className:"shopList",children:p.map((n=>(0,u.jsx)(m,{drug:n,handleAddToCart:x,isAdded:e.some((e=>e._id===n._id))},n._id)))})})]})})}}}]);
//# sourceMappingURL=597.a062a0a2.chunk.js.map