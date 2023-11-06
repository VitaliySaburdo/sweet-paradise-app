"use strict";(self.webpackChunksweet_paradise_app=self.webpackChunksweet_paradise_app||[]).push([[425],{9975:function(n,e,t){t.r(e),t.d(e,{default:function(){return wn}});var r,o,i,a,s,c,d,l,u,m,p,f,g,h,x,b,y,Z,j,w,P,v,C,k,z=t(4165),S=t(5861),_=t(9439),B=t(2791),E=t(1187),T=t(1358),F=t(7558),M=t(2987),W=t(234),J=t(5265),O=t(168),R=t(5867),X=t(6680),Y=R.ZP.div(r||(r=(0,O.Z)(["\n  margin-top: 53px;\n  @media screen and (",") {\n    margin-top: 51px;\n  }\n  @media screen and (",") {\n    margin-top: 71px;\n  }\n"])),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),$=(R.ZP.div(o||(o=(0,O.Z)(["\n  margin-top: 85px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (",") {\n    margin-top: 196px;\n    width: 550px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  @media screen and (",") {\n    margin-top: 298px;\n    width: 620px;\n    margin-left: 0;\n    margin-right: auto;\n  }\n"])),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),R.ZP.h2(i||(i=(0,O.Z)(["\n  text-align: center;\n  margin-bottom: 70px;\n"])))),A=(0,R.ZP)(X.W)(a||(a=(0,O.Z)(["\n  overflow: visible;\n  position: relative;\n"]))),D=R.ZP.ul(s||(s=(0,O.Z)(["\n  min-height: 30px;\n  transform: ",";\n  width: 929px;\n  padding: 20px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  margin-bottom: 40px;\n  transition: transform 0.3s ease;\n  @media screen and (",") {\n    transform: translateX(0);\n  }\n"])),(function(n){return"translateX(".concat(n.scrollPosition,"px)")}),(function(n){return n.theme.media.lg})),U=R.ZP.li(c||(c=(0,O.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),q=R.ZP.img(d||(d=(0,O.Z)(["\n  margin-bottom: 35px;\n"]))),G=R.ZP.p(l||(l=(0,O.Z)(["\n  color: ",";\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n"])),(function(n){return n.theme.colors.secondaryTextColor})),H=R.ZP.button(u||(u=(0,O.Z)(["\n  position: relative;\n  z-index: 10;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  transition: transform 0.4s ease;\n  transform: ",';\n\n  &:hover {\n    transition: transform 0.4s ease;\n    transform: scale(1.4);\n  }\n  &::before {\n    content: "";\n    position: absolute;\n    top: -10px;\n    right: -9px;\n    width: 150px;\n    height: 150px;\n    background-color: rgb(253, 229, 234, 0.7);\n    filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.3));\n    border-radius: 50%;\n    z-index: -1;\n    transform: ',";\n    transition: transform 0.4s ease;\n  }\n"])),(function(n){return n.selectedCategory?"scale(1.4)":"scale(1)"}),(function(n){return n.selectedCategory?"scale(1)":"scale(0.3)"})),I=R.ZP.button(m||(m=(0,O.Z)(["\n  background-color: #ffffff;\n  border: solid 3px #9c0746;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 200px;\n  left: 0;\n  padding: 0;\n  @media screen and (",") {\n    display: none;\n  }\n"])),(function(n){return n.theme.media.lg})),K=R.ZP.button(p||(p=(0,O.Z)(["\n  background-color: #ffffff;\n  border: solid 3px #9c0746;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 200px;\n  right: 0;\n  padding: 0;\n  @media screen and (",") {\n    display: none;\n  }\n"])),(function(n){return n.theme.media.lg})),L=t.p+"static/media/leftBtn.a7c231ee465c24c22e90.png",N=t.p+"static/media/rightBtn.00d9eb11e1f50bd12ede.png",Q=t(184),V=function(n){var e=n.fetchProductsByCategory,t=n.loading,r=n.products,o=n.changedCategory,i=(0,B.useState)("6544cf5810c5deaa725bcae1"),a=(0,_.Z)(i,2),s=a[0],c=a[1],d=(0,B.useState)(-200),l=(0,_.Z)(d,2),u=l[0],m=l[1],p=(0,T.C)(M.us).filter((function(n){return"novelties"!==n.name}));(0,B.useEffect)((function(){e(s)}),[e,s]);var f=function(n){var t=n.currentTarget.getAttribute("data-category");null!==t&&(c(t),e(t))};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Y,{}),(0,Q.jsx)(W.$,{children:(0,Q.jsxs)(A,{children:[(0,Q.jsx)($,{children:"Yummy catalog"}),(0,Q.jsx)(D,{scrollPosition:u,children:0!==p.length&&p.map((function(n){return(0,Q.jsx)(U,{children:(0,Q.jsxs)(H,{"data-category":n._id,onClick:f,selectedCategory:s===n._id,children:[(0,Q.jsx)(q,{src:"https://sweet-paradise-api.onrender.com/static/"+n.img,alt:n.name,width:120}),(0,Q.jsx)(G,{children:n.name})]})},n._id)}))}),(0,Q.jsxs)(I,{onClick:function(){u<=-700||m(u-100)},children:[" ",(0,Q.jsx)("img",{src:L,alt:"button",width:20})," "]}),(0,Q.jsx)(K,{onClick:function(){u>=0||m(u+100)},children:(0,Q.jsx)("img",{src:N,alt:"button",width:20})}),(0,Q.jsx)(J.c,{products:r,loading:t,changedCategory:o})]})})]})},nn=t(8956),en=t(5482),tn=t(9504),rn=t.n(tn),on=t(9026),an=t.p+"static/media/chocolate_1.4a61e304231b4456db5a.png",sn=t.p+"static/media/chocolate_2.7110e372fc69ee189922.png",cn=t.p+"static/media/cookies.16afb37d4b328ceb4e47.png",dn=R.ZP.h2(f||(f=(0,O.Z)(["\n  text-align: center;\n  color: ",";\n  font-family: Montserrat;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: normal;\n  margin-bottom: 60px;\n  @media screen and (",") {\n    font-size: 44px;\n    margin-bottom: 90px;\n  }\n  @media screen and (",") {\n    font-size: 50px;\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),ln=(0,R.ZP)(X.W)(g||(g=(0,O.Z)(["\n  padding: 0;\n  @media screen and (",") {\n    background-image: url(","), url(",");\n    background-position: 10% 95%, 95% 95%;\n    background-repeat: no-repeat;\n  }\n"])),(function(n){return n.theme.media.lg}),an,sn),un=R.ZP.p(h||(h=(0,O.Z)(["\n  display: none;\n  @media screen and (",") {\n    display: block;\n    position: absolute;\n    bottom: 43%;\n    left: -23.5%;\n    color: ",";\n    font-family: Sail;\n    font-size: 70px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    rotate: 270deg;\n    white-space: nowrap;\n  }\n  @media screen and (",") {\n    left: -13%;\n  }\n"])),(function(n){return n.theme.media.md}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.media.lg})),mn=R.ZP.div(x||(x=(0,O.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  background-color: ",";\n  width: 320px;\n  height: 550px;\n  margin: 0 auto;\n  border-radius: 10px;\n  @media screen and (",") {\n    border-radius: 0;\n    width: 728px;\n    height: 604px;\n  }\n  @media screen and (",") {\n    background-image: url(",");\n    background-position: 105% 40%;\n    background-repeat: no-repeat;\n    width: 940px;\n  }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg}),cn),pn=R.ZP.div(b||(b=(0,O.Z)(["\n  height: 96%;\n  width: 300px;\n  border-radius: 10px;\n  background-color: ",";\n  padding: 45px 60px;\n  margin-top: auto;\n  margin-bottom: auto;\n  @media screen and (",") {\n    height: 100%;\n    width: 500px;\n    padding: 68px 68px 82px 68px;\n  }\n"])),(function(n){return n.theme.colors.witeBcgColor}),(function(n){return n.theme.media.md})),fn=R.ZP.h3(y||(y=(0,O.Z)(["\n  color: ",";\n  font-family: Montserrat;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 18px;\n  @media screen and (",") {\n    font-size: 30px;\n  }\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.media.md})),gn=R.ZP.p(Z||(Z=(0,O.Z)(["\n  color: ",";\n  text-align: center;\n  font-family: Open Sans;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 125.6%;\n  margin-bottom: 45px;\n  @media screen and (",") {\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.media.md})),hn=R.ZP.form(j||(j=(0,O.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),xn=R.ZP.input(w||(w=(0,O.Z)(["\n  margin: 0;\n  height: 60px;\n  padding: 12px 42px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 30px;\n  cursor: pointer;\n  transition-property: border-color, outline-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  margin-bottom: 25px;\n  &:focus {\n    outline-color: ",";\n  }\n  @media screen and (",") {\n    height: 40px;\n    border-radius: 20px;\n  }\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.media.md})),bn=(0,R.ZP)(rn())(P||(P=(0,O.Z)(["\n  margin: 0;\n  height: 60px;\n  padding: 12px 42px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 30px;\n  cursor: pointer;\n  transition-property: border-color, outline-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  margin-bottom: 25px;\n  &:focus {\n    outline-color: ",";\n  }\n  @media screen and (",") {\n    height: 40px;\n    border-radius: 20px;\n  }\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.media.md})),yn=(0,R.ZP)(on.z)(v||(v=(0,O.Z)(["\n  margin-bottom: 42px;\n"]))),Zn=R.ZP.p(C||(C=(0,O.Z)(["\n  color: ",";\n  text-align: center;\n  font-family: Open Sans;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 125.6%;\n"])),(function(n){return n.theme.colors.textColor})),jn=(R.ZP.label(k||(k=(0,O.Z)(["\n  flex-direction: row;\n  font-size: 12px;\n  line-height: calc(14 / 12);\n  letter-spacing: 0.01em;\n  margin-bottom: 4px;\n  margin-left: 8px;\n"]))),function(){var n=(0,B.useState)(""),e=(0,_.Z)(n,2),t=e[0],r=e[1],o=(0,B.useState)(""),i=(0,_.Z)(o,2),a=i[0],s=i[1];return(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsx)(W.$,{children:(0,Q.jsxs)(ln,{children:[(0,Q.jsx)(dn,{children:"Time to place your order :)"}),(0,Q.jsxs)(mn,{children:[(0,Q.jsx)(un,{children:"Sweet Paradise"}),(0,Q.jsx)(pn,{children:(0,Q.jsxs)(hn,{onSubmit:function(n){n.preventDefault(),t&&a?(r(""),s(""),(0,nn.h)({message:"".concat(t," your order has been submitted"),type:"info"})):(0,nn.h)({message:"Please fill all fields",type:"warning"})},children:[(0,Q.jsx)(fn,{children:"Ready to order?"}),(0,Q.jsx)(gn,{children:"Enter your details and we will We'll definitely call you back"}),(0,Q.jsxs)("div",{style:{position:"relative"},children:[(0,Q.jsx)(xn,{autoComplete:"off",type:"text",name:"name",value:t,placeholder:"Enter your name",onChange:function(n){return r(n.target.value)}}),(0,Q.jsx)(en.J,{id:"icon-user"})]}),(0,Q.jsxs)("div",{style:{position:"relative"},children:[(0,Q.jsx)(bn,{type:"text",mask:"+38(099) 999-99-99",name:"phone",value:a,placeholder:"Enter your phone",onChange:function(n){return s(n.target.value)}}),(0,Q.jsx)(en.J,{id:"icon-phone"})]}),(0,Q.jsx)(yn,{type:"submit",children:"Send"}),(0,Q.jsx)(Zn,{children:"By clicking on the button, you consent to processing Your personal data"})]})})]})]})})})}),wn=function(){var n=(0,B.useState)(""),e=(0,_.Z)(n,2),t=e[0],r=e[1],o=(0,T.C)(F.nR),i=(0,T.C)(F.xU),a=(0,T.T)();(0,B.useEffect)((function(){a((0,E.Pg)(t))}),[a,t]);var s=function(){var n=(0,S.Z)((0,z.Z)().mark((function n(e){return(0,z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r(e),a((0,E.Pg)(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(V,{products:o,loading:i,fetchProductsByCategory:function(n){r(n)},changedCategory:s}),(0,Q.jsx)(jn,{})]})}}}]);
//# sourceMappingURL=425.1e19b251.chunk.js.map