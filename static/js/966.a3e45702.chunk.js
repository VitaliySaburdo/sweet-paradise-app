"use strict";(self.webpackChunksweet_paradise_app=self.webpackChunksweet_paradise_app||[]).push([[966],{234:function(n,e,t){t.d(e,{$:function(){return d}});var r,i=t(1413),a=t(168),o=t(5867).ZP.section(r||(r=(0,a.Z)(["\n  overflow: visible;\n  padding-top: 60px;\n  padding-bottom: 60px;\n\n  @media screen and (",") {\n    padding-top: 80px;\n    padding-bottom: 80px;\n  }\n\n  @media screen and (",") {\n    padding-top: 90px;\n    padding-bottom: 90px;\n  }\n"])),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),s=t(184),d=function(n){return(0,s.jsx)(o,(0,i.Z)({},n))}},5966:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,i,a,o,s,d,c,l,p,x,f,m,u,h,g=t(4165),Z=t(5861),j=t(9439),v=t(2791),y=t(1358),b=t(4363),P=t(926),w=t(5719),k=t(7689),z=t(6680),S=t(184),F=function(n){var e=n.item;return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)("img",{src:"https://sweet-paradise-api.onrender.com/static/"+e.img,alt:e.name,width:40,height:10})})},M=t(168),_=t(5867),C=_.ZP.div(r||(r=(0,M.Z)(["\n  min-height: 245px;\n"]))),H=_.ZP.ul(i||(i=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),T=_.ZP.li(a||(a=(0,M.Z)(["\n  min-height: 120px;\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #ffd4dd;\n  box-shadow: 4px 4px 10px 1px rgba(226, 226, 226, 0.46);\n"]))),D=_.ZP.div(o||(o=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  margin-left: 10px;\n"]))),L=_.ZP.p(s||(s=(0,M.Z)(["\n  color: #9c0746;\n  font-family: Montserrat;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n"]))),Y=_.ZP.div(d||(d=(0,M.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n  margin-right: 10px;\n"]))),$=_.ZP.p(c||(c=(0,M.Z)(["\n  margin-right: 200px;\n"]))),E=_.ZP.div(l||(l=(0,M.Z)(["\n  margin-left: 450px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]))),N=_.ZP.p(p||(p=(0,M.Z)(["\n  color: #9c0746;\n  font-family: Montserrat;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n"]))),O=function(n){var e=n.ordersHistory,t=function(n){var e=new Date(n),t=e.getDate().toString().padStart(2,"0"),r=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getFullYear().toString().slice(-2);return"".concat(t,".").concat(r,".").concat(i)};return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(C,{children:(0,S.jsx)(H,{children:e.map((function(n){return(0,S.jsxs)(T,{children:[(0,S.jsxs)(D,{children:[(0,S.jsxs)(L,{children:["Order \u2116 ",n.orderNumber]}),(0,S.jsxs)("p",{children:[" dated ",t(n.orderTime)]})]}),(0,S.jsxs)(E,{children:[(0,S.jsxs)($,{children:["Total price order ",n.totalPrice," uah"]}),(0,S.jsxs)(Y,{children:[n.items.slice(0,6).map((function(n,e){return(0,S.jsx)(F,{item:n},e)})),n.items.length>7&&(0,S.jsx)(N,{children:"..."})]})]}),(0,S.jsx)("button",{style:{display:"block",marginLeft:"auto"},children:"details"})]},n._id)}))})})})},W=t(234),q=t(9026),A=(0,_.ZP)(W.$)(x||(x=(0,M.Z)(["\n  margin-top: 53px;\n  @media screen and (",") {\n    margin-top: 51px;\n  }\n  @media screen and (",") {\n    margin-top: 71px;\n  }\n"])),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),B=_.ZP.h2(f||(f=(0,M.Z)(['\n  text-align: center;\n  font-family: "Montserrat", sans-serif;\n  color: #444251;\n  font-size: 46px;\n  margin-bottom: 25px;\n']))),G=(0,_.ZP)(q.z)(m||(m=(0,M.Z)(["\n  display: block;\n  margin-top: 25px;\n  margin-right: auto;\n  margin-left: auto;\n"]))),I=_.ZP.div(u||(u=(0,M.Z)(["\n  min-height: 250px;\n  padding: 100px;\n"]))),J=_.ZP.p(h||(h=(0,M.Z)(['\n  font-family: "Montserrat", sans-serif;\n  color: #444251;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n']))),K=function(n){var e=n.ordersHistory,t=(0,y.T)(),r=(0,k.s0)();return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(A,{children:(0,S.jsxs)(z.W,{children:[(0,S.jsx)(B,{children:"Purchase history"}),e.length?(0,S.jsx)(O,{ordersHistory:e}):(0,S.jsx)(I,{children:(0,S.jsx)(J,{children:"You don`t have orders"})}),(0,S.jsx)(G,{onClick:function(){t((0,w.ni)()),r("/")},children:"Logout"})]})})})},Q=function(){var n=(0,v.useState)([]),e=(0,j.Z)(n,2),t=e[0],r=e[1],i=(0,y.C)(P.c7);return(0,v.useEffect)((function(){var n=function(){var n=(0,Z.Z)((0,g.Z)().mark((function n(){var e;return(0,g.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!i){n.next=6;break}return n.next=4,(0,b.zk)(i);case 4:e=n.sent,r(e);case 6:n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[i]),(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(K,{ordersHistory:t})})}}}]);
//# sourceMappingURL=966.a3e45702.chunk.js.map