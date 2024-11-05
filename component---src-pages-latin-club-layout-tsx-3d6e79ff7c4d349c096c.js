"use strict";(self.webpackChunkEl_Lounge_Latin_Club=self.webpackChunkEl_Lounge_Latin_Club||[]).push([[35],{9354:function(e,t,n){var a=n(6540),l=n(4755),o=n(4794),r=n(6462),s=n(3);t.A=e=>{let{data:t}=e;const{t:n}=(0,l.useTranslation)(),{pathname:c}=(0,r.useLocation)(),{0:u,1:m}=(0,a.useState)(!1);if(null==t||!t.clubMenu||null==t||!t.companyDetails)return null;const f=c.replace(/^\/(es|en|fr)\//,"/").replace(/\/$/,"");return a.createElement("nav",{className:i.container},a.createElement("button",{onClick:()=>m(!u),className:i.burgerButton},u?a.createElement(s.yGN,{className:"text-white fixed right-4 z-[70] top-4",size:24}):a.createElement(s.ND1,{className:"text-white",size:24})),a.createElement("ul",{className:`${i.buttonsWrapper} ${u?i.menuOpen:i.menuClosed}`},t.clubMenu.map(((e,t)=>{const r="home"===e?"/":`/${e}`.replace(/\/$/,""),s=f===r;return a.createElement("li",{key:t,className:i.buttonsContainer},a.createElement(o.Link,{to:r,className:`${i.buttons} ${s?"text-shadow-fucsia !text-latinFucsia":""}`},a.createElement(l.Trans,{i18nKey:`menuDrink.${e}`},n(`menuDrink.${e}`))))}))))};const i={container:"inline-block justify-between items-center px-4 py-2 rounded-full relative",burgerButton:"md:hidden block text-white focus:outline-none",buttonsWrapper:"flex flex-col md:flex-row justify-evenly items-center w-full md:w-auto fixed bg-latinClub sm:bg-transparent sm:relative left-0 top-0 py-8 sm:py-0 z-30",buttonsContainer:"my-4 sm:my-0",buttons:"text-white px-8 py-2 hover:underline",menuOpen:"block md:flex",menuClosed:"hidden md:flex"}},4707:function(e,t,n){n.r(t);var a=n(6540),l=n(8508),o=n(3135),r=n(1223),s=n(6973),i=n(9354),c=n(8526),u=n(560),m=n(5505);const f=c[0];t.default=e=>{let{children:t,showNavigation:n=!1,showLogoTop:c=!1}=e;const{0:d,1:b}=(0,a.useState)("/foodMenu/"),{0:h,1:x}=(0,a.useState)("/drinksMenu/"),{0:E,1:g}=(0,a.useState)(!1),{0:y,1:w}=(0,a.useState)(!1);return(0,a.useEffect)((()=>{if("undefined"!=typeof window){const e=window.location.pathname,t=e.split("/")[1],n=e.split("/")[2];g("foodMenu"===n),w("drinksMenu"===n),"fr"!==t&&"es"!==t&&"en"!==t||(x(`/${t}/drinksMenu/`),b(`/${t}/foodMenu/`))}}),[]),a.createElement(a.Fragment,null,a.createElement("div",{className:p.containerWrapper},!E&&a.createElement(u.A,{href:d,topPositionValue:50}),!y&&a.createElement(m.A,{href:h,topPositionValue:50}),a.createElement("div",{className:"bg-no-repeat bg-center"},a.createElement("div",{className:"flex justify-between"},a.createElement("div",{className:"flex flex-row mx-12 gap-4 self-center"},a.createElement("a",{href:f.companyDetails.instagram,target:"_blank",rel:"noopener noreferrer"},a.createElement(r.g0x,{className:"text-white hover:text-latinFucsia"})),a.createElement("a",{href:f.companyDetails.facebook,target:"_blank",rel:"noopener noreferrer"},a.createElement(s.MkP,{className:"text-white hover:text-latinFucsia"}))),n&&a.createElement("div",{className:"hidden sm:flex justify-center my-12"},a.createElement(i.A,{data:f})),!n&&c&&a.createElement("div",{className:"hidden sm:flex w-[10rem]"},a.createElement(o.A,{fillColour:"#fff"})),a.createElement("div",{className:"flex justify-end mr-12"},a.createElement(l.A,{clubLayout:!0,data:f}),a.createElement("div",{className:"flex sm:hidden mx-auto"},a.createElement(i.A,{data:f})))),a.createElement("main",null,t))))};const p={containerWrapper:"flex flex-col w-full bg-latinClub/[0.9] pt-8",logoPosition:"mx-auto"}},8526:function(e){e.exports=JSON.parse('[{"companyName":"El Lounge","name":"El Lounge Latin Club","companyDetails":{"address":"1735 Rue Saint Denis, Montréal, QC H2X 3K4","city":"Montreal","country":"Canada","phone":"514 474 4BAR (227)","email":"info@ellounge.ca","whatsApp":"https://wa.me/15144744227","instagram":"https://instagram.com/pointbarlounge","facebook":"http://facebook.com/pointbarloungemtl"},"menu":["home","elLounge","foodMenu","latinClub","eventsDay"],"clubMenu":["home","latinClub","drinksMenu","eventsClub","visitUs"]}]')}}]);
//# sourceMappingURL=component---src-pages-latin-club-layout-tsx-3d6e79ff7c4d349c096c.js.map