"use strict";(self.webpackChunkEl_Lounge_Latin_Club=self.webpackChunkEl_Lounge_Latin_Club||[]).push([[476],{5144:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var r=a(6540),l=a(4794),o=a(2794),n=a(4959),s=a(2405),i=a(7164),c=a(4073),d=a(4164),m=a(5659),p=a(3139),u=a(1848),g=a(9077),h=a(5607),v=a(6025),f=a(8466),x=a(8660),y=a(4155),A=a(8413),b=a(1609);function E(e){return(0,b.Ay)("MuiAlert",e)}var w=(0,A.A)("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),C=a(1641),N=a(5003),S=a(4848),j=(0,N.A)((0,S.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),L=(0,N.A)((0,S.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),M=(0,N.A)((0,S.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),$=(0,N.A)((0,S.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),z=(0,N.A)((0,S.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const k=(0,u.Ay)(y.A,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,f.A)(a.color||a.severity)}`]]}})((0,g.A)((({theme:e})=>{const t="light"===e.palette.mode?p.e$:p.a,a="light"===e.palette.mode?p.a:p.e$;return{...e.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter((0,x.A)(["light"])).map((([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:t(e.palette[r].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${r}StandardBg`]:a(e.palette[r].light,.9),[`& .${w.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}}))),...Object.entries(e.palette).filter((0,x.A)(["light"])).map((([a])=>({props:{colorSeverity:a,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${a}Color`]:t(e.palette[a].light,.6),border:`1px solid ${(e.vars||e).palette[a].light}`,[`& .${w.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}}}))),...Object.entries(e.palette).filter((0,x.A)(["dark"])).map((([t])=>({props:{colorSeverity:t,variant:"filled"},style:{fontWeight:e.typography.fontWeightMedium,...e.vars?{color:e.vars.palette.Alert[`${t}FilledColor`],backgroundColor:e.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[t].dark:e.palette[t].main,color:e.palette.getContrastText(e.palette[t].main)}}})))]}}))),I=(0,u.Ay)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),P=(0,u.Ay)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),W=(0,u.Ay)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:(0,S.jsx)(j,{fontSize:"inherit"}),warning:(0,S.jsx)(L,{fontSize:"inherit"}),error:(0,S.jsx)(M,{fontSize:"inherit"}),info:(0,S.jsx)($,{fontSize:"inherit"})};var O=r.forwardRef((function(e,t){const a=(0,h.b)({props:e,name:"MuiAlert"}),{action:r,children:l,className:o,closeText:n="Close",color:s,components:i={},componentsProps:c={},icon:p,iconMapping:u=R,onClose:g,role:x="alert",severity:y="success",slotProps:A={},slots:b={},variant:w="standard",...N}=a,j={...a,color:s,severity:y,variant:w,colorSeverity:s||y},L=(e=>{const{variant:t,color:a,severity:r,classes:l}=e,o={root:["root",`color${(0,f.A)(a||r)}`,`${t}${(0,f.A)(a||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,m.A)(o,E,l)})(j),M={slots:{closeButton:i.CloseButton,closeIcon:i.CloseIcon,...b},slotProps:{...c,...A}},[$,O]=(0,v.A)("closeButton",{elementType:C.A,externalForwardedProps:M,ownerState:j}),[B,F]=(0,v.A)("closeIcon",{elementType:z,externalForwardedProps:M,ownerState:j});return(0,S.jsxs)(k,{role:x,elevation:0,ownerState:j,className:(0,d.A)(L.root,o),ref:t,...N,children:[!1!==p?(0,S.jsx)(I,{ownerState:j,className:L.icon,children:p||u[y]||R[y]}):null,(0,S.jsx)(P,{ownerState:j,className:L.message,children:l}),null!=r?(0,S.jsx)(W,{ownerState:j,className:L.action,children:r}):null,null==r&&g?(0,S.jsx)(W,{ownerState:j,className:L.action,children:(0,S.jsx)($,{size:"small","aria-label":n,title:n,color:"inherit",onClick:g,...O,children:(0,S.jsx)(B,{fontSize:"small",...F})})}):null]})})),B=a(6830),F=a(6990);var _=()=>{const{0:e,1:t}=(0,r.useState)([]),{0:a,1:d}=(0,r.useState)(!0),{0:m,1:p}=(0,r.useState)(!1),{0:u,1:g}=(0,r.useState)(""),{0:h,1:v}=(0,r.useState)(""),{0:f,1:x}=(0,r.useState)("");(0,r.useEffect)((()=>{(0,n.hg)(o.j,(e=>{e?p(!0):(p(!1),d(!1))}))}),[]),(0,r.useEffect)((()=>{m&&(async()=>{try{const e=(await(0,s.GG)((0,s.rJ)(o.db,"contactForm"))).docs.map((e=>({id:e.id,...e.data()})));t(e),d(!1)}catch(f){console.error("Error fetching users:",f)}})()}),[m]);const y=async e=>{e.preventDefault(),x("");try{if(!u||!h)return void x("Please enter both email and password.");await(0,n.x9)(o.j,u,h),p(!0),d(!0)}catch(t){console.error("Login error:",t),x("Invalid email or password. Please try again.")}};return a?r.createElement("div",{className:"flex justify-center items-center h-screen"},r.createElement("p",{className:"text-lg text-gray-500"},"Loading...")):m?r.createElement("div",{className:"p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg"},r.createElement("h1",{className:"text-3xl font-semibold text-gray-800 mb-6"},"Admin Panel"),r.createElement("button",{onClick:async()=>{try{await(0,n.CI)(o.j),p(!1),(0,l.navigate)("/")}catch(f){console.error("Error signing out:",f)}},className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mb-6"},"Logout"),r.createElement("div",{className:"overflow-x-auto"},r.createElement("table",{className:"min-w-full bg-white border border-gray-300 rounded-lg"},r.createElement("thead",null,r.createElement("tr",{className:"bg-gray-200 text-gray-600 text-sm uppercase leading-normal"},r.createElement("th",{className:"py-3 px-6 text-left"},"Full Name"),r.createElement("th",{className:"py-3 px-6 text-left"},"Email"),r.createElement("th",{className:"py-3 px-6 text-left"},"Phone"),r.createElement("th",{className:"py-3 px-6 text-left"},"Birth Date"))),r.createElement("tbody",{className:"text-gray-600 text-sm font-light"},e.map((e=>r.createElement("tr",{key:e.id,className:"border-b border-gray-300 hover:bg-gray-100"},r.createElement("td",{className:"py-3 px-6 text-left"},e.fullName),r.createElement("td",{className:"py-3 px-6 text-left"},e.email),r.createElement("td",{className:"py-3 px-6 text-left"},e.phone),r.createElement("td",{className:"py-3 px-6 text-left"},e.birthDate||"N/A")))))))):r.createElement("div",{className:"flex justify-center items-center h-screen"},r.createElement(i.A,{component:"form",onSubmit:y,className:"w-96 p-6 bg-white rounded-lg shadow-lg"},r.createElement(c.A,{variant:"h4",className:"mb-4 text-center text-gray-800"},"Admin Login"),f&&r.createElement(O,{severity:"error",className:"mb-4"},f),r.createElement(B.A,{label:"Email",variant:"outlined",fullWidth:!0,margin:"normal",type:"email",value:u,onChange:e=>g(e.target.value),required:!0}),r.createElement(B.A,{label:"Password",variant:"outlined",fullWidth:!0,margin:"normal",type:"password",value:h,onChange:e=>v(e.target.value),required:!0}),r.createElement(F.A,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:"mt-4"},"Login")))}}}]);
//# sourceMappingURL=component---src-pages-admin-tsx-96f836037ba73fdad8ba.js.map