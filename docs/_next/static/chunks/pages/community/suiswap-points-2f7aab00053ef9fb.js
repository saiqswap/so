(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{7368:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/community/suiswap-points",function(){return c(7278)}])},4486:function(a,b,c){"use strict";c.d(b,{z:function(){return f}});var d=c(5893),e=c(7294),f=function(a){var b=a.selectIndex,c=a.animationTime,f=a.children,g=a.style,h=(0,e.useState)(b),i=h[0],j=h[1],k=(0,e.useState)(!1),l=k[0],m=k[1];return(0,e.useEffect)(function(){i!==b&&(m(!0),setTimeout(function(){j(b),m(!1)},1e3*c))},[b,c,i]),(0,d.jsx)("div",{style:g,className:"scroll-transition-layout",children:e.Children.map(f,function(a,e){return(0,d.jsx)("div",{className:"scroll-transition-item ".concat(l?e===i?"transition-left":e===b?"transition-right":"":""),style:{transform:"translateX(".concat((e-i)*100,"%)"),animationDuration:"".concat(c,"s")},children:a})})})}},7278:function(a,b,c){"use strict";c.r(b);var d=c(7568),e=c(1799),f=c(9396),g=c(4051),h=c.n(g),i=c(5893),j=c(7318),k=c(1163),l=c(6491),m=c(2191),n=c(7294),o=c(7694),p=c(5821),q=c(3788),r=c(6875),s=c(9769),t=c(8861),u=c(1876).Buffer,v=function(){var a=(0,t.Z)(),b=(0,p.s)().client,c=(0,q.O)(),g=c.wallet,l=c.connected,v=c.presentModal,w=(0,n.useState)(null),x=w[0],y=w[1],z=(0,k.useRouter)(),A=z.query.content,B=(0,n.useCallback)(function(c,e){if("connected"!==l)v();else if(null!==b&&null!==g&&"connected"===l&&null!==c&&null!==e){var f,i=(f=(0,d.Z)(h().mark(function d(){var f,i,j;return h().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return i=null===(f=a.config.suiswap.objects.find(function(a){return a.type.endsWith("TOKEN::TokenAirdrop")}))|| void 0===f?void 0:f.address,(0,s.debugLog)("".concat(u.from(e).toString("hex")),"suiswap-point-signature"),d.next=5,g.execute(b,{operation:"airdrop",amount:c,signature:e,airdropId:i},{title:"airdrop"});case 5:return(j=d.sent).isSuccess()&&y(c),d.abrupt("return",j);case 8:case"end":return d.stop()}},d)})),function(){return f.apply(this,arguments)});(0,r.pn)(b,"Airdrop",i())}},[v,b,g,l,a]),C={avatarUrl:"/images/misc/user-profile-image-test.png",name:"",point:0,details:[]};if(A){var D=JSON.parse(u.from(A,"base64").toString("utf-8"));C=(0,e.Z)({},C,D)}try{C.name=u.from(C.name,"base64").toString("utf-8")}catch(E){C.name=""}var F=(0,i.jsx)(j.fQ,(0,f.Z)((0,e.Z)({},C),{onClick:B})),G=(0,i.jsx)(j.sU,(0,f.Z)((0,e.Z)({},C),{amount:null!=x?x:s.BigIntConstants.ZERO,decimal:9,onClick:function(){(0,o.mx)(z,"/app")}}));return(0,i.jsx)(m.J,{representType:{type:"page"},modals:[{minWidth:280,width:450,content:F},{minWidth:280,width:450,content:G}],index:null===x?0:1})},w=function(){return(0,i.jsx)(l.Sx,{children:(0,i.jsx)(v,{})})};b.default=w},2191:function(a,b,c){"use strict";c.d(b,{J:function(){return k}});var d=c(1799),e=c(9396),f=c(5893),g=c(7294),h=c(1756),i=c(4486),j=c(1838),k=g.forwardRef(function(a,b){var c=a.modals,k=a.index,l=a.representType,m=(0,g.useRef)(null),n={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0px",gap:"8px",flex:"none",width:"100%",height:"100%",flexGrow:"0"},o={fontWeight:"700",fontSize:"48px",textAlign:"center",color:"#343434",flex:"none",alignSelf:"stretch",flexGrow:"0"},p={fontStyle:"normal",fontWeight:"400",fontSize:"24px",textAlign:"center",color:"#9da3ae",flex:"none",alignSelf:"stretch",flexGrow:"0"},q={display:"flex",flexDirection:"column",alignItems:"center",padding:"0px",maxWidth:486},r=(0,f.jsx)(i.z,{selectIndex:k,animationTime:.8,style:{width:"100vw",height:"100vh"},children:c.map(function(a,b){var c=a.title,d=a.subtitle,e=a.content,g=a.minWidth,h=a.minHeight,i=a.width;return(0,f.jsx)("div",{onClick:function(){"modal"===l.type&&l.onClose()},style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"0px"},children:(0,f.jsxs)("div",{style:n,children:[c&&""!==c&&(0,f.jsxs)("div",{style:q,children:[(0,f.jsx)("span",{style:o,children:c}),d&&""!==d&&(0,f.jsx)("span",{style:p,children:d})]}),(0,f.jsx)("div",{style:{maxWidth:"100%",maxHeight:"100%",width:i,minWidth:g,minHeight:h},onClick:function(a){return a.stopPropagation()},children:e})]})},b)})});return"page"===l.type?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{ref:m,style:{margin:"0px",width:"100%",height:"100%",position:"fixed",top:0,left:0,background:"#f9f9f9",zIndex:-1},children:(0,f.jsx)(j.A,{})}),r]}):(0,f.jsx)(h.$,(0,e.Z)((0,d.Z)({},l),{children:r}))});k.displayName="ModalFrame"}},function(a){a.O(0,[915,891,849,491,696,774,888,179],function(){var b;return a(a.s=7368)}),_N_E=a.O()}])