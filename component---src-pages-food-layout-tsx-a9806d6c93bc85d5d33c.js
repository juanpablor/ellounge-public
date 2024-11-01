"use strict";(self.webpackChunkEl_Lounge_Latin_Club=self.webpackChunkEl_Lounge_Latin_Club||[]).push([[30,484],{6478:function(e,a,t){var c=t(6540),l=t(4755),n=t(4794),r=t(1223),s=t(6973),i=t(3),m=t(6462);a.A=e=>{let{data:a}=e;const{t:t}=(0,l.useTranslation)(),{pathname:d}=(0,m.useLocation)(),{0:f,1:p}=(0,c.useState)(!1);if(!a||!a.menu||!a.companyDetails)return null;const g=d.replace(/^\/(es|en|fr)\//,"/").replace(/\/$/,""),{instagram:u,facebook:b}=a.companyDetails;return c.createElement("nav",{className:o.container},c.createElement("button",{onClick:()=>{p(!f)},className:o.burgerButton},f?c.createElement(i.yGN,{className:"text-white fixed right-4 z-[70] top-4",size:24}):c.createElement(i.ND1,{className:"text-white",size:24})),c.createElement("ul",{className:`${o.buttonsWrapper} ${f?o.menuOpen:o.menuClosed}`},c.createElement("li",null,c.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},c.createElement(r.g0x,{className:"text-white"}))),a.menu.map(((e,a)=>{const r="home"===e?"/":`/${e}`.replace(/\/$/,""),s=g===r;return c.createElement("li",{key:a,className:o.buttonsContainer},c.createElement(n.Link,{to:r,className:`${o.buttons} ${s?"font-extrabold !text-secondary":""}`,activeClassName:"text-secondary"},c.createElement(l.Trans,{i18nKey:`menu.${e}`},t(`menu.${e}`))))})),c.createElement("li",null,c.createElement("a",{href:b,target:"_blank",rel:"noopener noreferrer"},c.createElement(s.MkP,{className:"text-white"})))))};const o={container:"inline-block justify-between items-center bg-primary px-4 py-2 rounded-none sm:rounded-full relative left-0 sm:left-auto z-50 w-full sm:w-auto",burgerButton:"md:hidden block text-white focus:outline-none",buttonsWrapper:"flex flex-col md:flex-row justify-evenly items-center w-full md:w-auto fixed sm:relative left-0 bg-primary top-0 py-8 sm:py-0",buttonsContainer:"my-4 sm:my-0",buttons:"text-white px-8 py-2  hover:underline hover:text-secondary",menuOpen:"block md:flex",menuClosed:"hidden md:flex"}},3740:function(e,a,t){t.d(a,{A:function(){return c}});var c={BackgroundClubImage:{src:t.p+"static/club_background-0256e5da859b5871cb36a3b4f207d328.png",alt:"Club background image"},BackgroundImage:{src:t.p+"static/leaves_background-db986fee4ee84ed48f55e8a4820b2c15.png",alt:"Leaves background image"},BackgroundTexture:{src:t.p+"static/club_background_texture-7e5deed65c1a1d1cc77220c014b87bb3.png",alt:"Club background texture"},beer:{src:t.p+"static/beer-4b0041988f001571d859177bb2df2147.png",alt:"Beer image"},bellpepper:{src:t.p+"static/pimenton-62b080df4a242395eb8dd665e0f02e42.png",alt:"Bell pepper image"},bottles:{src:t.p+"static/bottle-cfb6c8487962f1fca3df0327d80459f8.png",alt:"Bottles image"},cherries:{src:t.p+"static/cerezas-8e59aa29c319ea115494de1d4fa604e8.png",alt:"Cherries image"},club_background_gray:{src:t.p+"static/club_background_gray-c1eec8aab621c7682cbbe5bd666b2ed0.png",alt:"Gray club background"},cocktail:{src:t.p+"static/cocktail_red-a5976229a588070fbec3b34adff40da4.png",alt:"Red cocktail image"},cocktail_2:{src:t.p+"static/cocktail_2-3f9a47c84469a7da18c531364062d932.png",alt:"Second cocktail image"},cocktail_3:{src:t.p+"static/cocktail_3-684dd180cf68d0b2cec1373589f0591f.png",alt:"Third cocktail image"},cocktail_4:{src:t.p+"static/cocktail_4-22a0bb82b4745b427b79d6108b0f4193.png",alt:"Fourth cocktail image"},cocktail_5:{src:t.p+"static/cocktail_5-0abb1650392c01b12f55d7b7a066a701.png",alt:"Fifth cocktail image"},cocktail_wireframe:{src:t.p+"static/cocktail_wireframe-a85a251bc164e89cb4cbbd3ceb039222.png",alt:"Wireframe cocktail image"},cocktail_wireframe_2:{src:t.p+"static/cocktail_wireframe_2-d881370010c39dc75a9d28d824a6ff87.png",alt:"Second wireframe cocktail image"},coffee:{src:t.p+"static/coffee-66e42b53680e369711c29d249c6db540.png",alt:"Coffee image"},elloungeBg:{src:t.p+"static/elloungeBg-7531641ff67513eebd279458c9d0c51a.jpg",alt:"El Lounge background image"},events_1:{src:t.p+"static/events_1-9513db41ae5c69535cf5fe10f7bd2c0b.jpg",alt:"First event image"},events_2:{src:t.p+"static/events_2-ae01d2ac5b4b8e30b641e0f55481f6f7.jpg",alt:"Second event image"},flower_1:{src:t.p+"static/flower_1-df1a9a467c8e5d7bca48fca0eacddfef.png",alt:"First flower image"},home_1:{src:t.p+"static/home_1-8fa5029dfd4cfa38e7524d024738f4d9.jpg",alt:"First cocktail image"},home_2:{src:t.p+"static/home_2-958c09c70758decc28d1823023d14eaf.jpg",alt:"Second cocktail image"},home_3:{src:t.p+"static/home_3-c367fc052ec1157daf0f05058f9f2296.jpg",alt:"Third cocktail image"},juice:{src:t.p+"static/juice-a5f21ea3cf47f5da8988cd4a5d35d03a.png",alt:"Juice image"},latin_club_1:{src:t.p+"static/latin_club_1-688b41b81ef1fefae67fd0d0de2a4ee1.jpg",alt:"First Latin club image"},latin_club_2:{src:t.p+"static/latin_club_2-463333a9f69251c8daeed7a3429d3fa6.jpg",alt:"Second Latin club image"},latin_club_3:{src:t.p+"static/latin_club_3-79c1f35fcafa9637afc1251f4a6da1a2.jpg",alt:"Third Latin club image"},latinClubBg:{src:t.p+"static/latinClubBg-68d8aea3b53575a951472912d5d3c42f.jpg",alt:"Latin club background image"},lemonade:{src:t.p+"static/lemonade-cffa4ed5548964750ca0bcbbfabcc349.png",alt:"Lemonade image"},limon_2:{src:t.p+"static/limon_2-bf60ad43aa2d751ac83f110e92106003.png",alt:"Second lemon image"},limon_3:{src:t.p+"static/limon_3-73cc4c623e20aec562211c260e893374.png",alt:"Third lemon image"},mango:{src:t.p+"static/mango-b75bec0238f41e8d734720d571d017ee.png",alt:"Mango image"},maracuya:{src:t.p+"static/maracuya-dea80ff3a02f3ca954e9e836a6ced44a.png",alt:"Maracuya image"},maracuya_2:{src:t.p+"static/maracuya_2-d23c17347e802627be3132b308dc8c4f.png",alt:"Second maracuya image"},peach:{src:t.p+"static/peach-482a533e6d6747262b244a7699dad699.png",alt:"Peach image"},planta_1:{src:t.p+"static/planta_1-6f270e2a3532909634ce375ce1430ec2.png",alt:"First plant image"},planta_2:{src:t.p+"static/planta_2-4deb4c5ccd4ed25dce794a1c27997372.png",alt:"Second plant image"},planta_3:{src:t.p+"static/planta_3-4c14796dfd6533afedae404469add278.png",alt:"Third plant image"},planta_4:{src:t.p+"static/planta_4-9ca68b206b86c1d72c00a4b47613e452.png",alt:"Fourth plant image"},planta_5:{src:t.p+"static/planta_5-ffe51d2931261662553731099bf7d480.png",alt:"Fifth plant image"},planta_6:{src:t.p+"static/planta_6-2226cde55f214aff4e07edc125885069.png",alt:"Sixth plant image"},planta_7:{src:t.p+"static/planta_7-9a43c5e2402a2d0e1cf58ee8e3fa8826.png",alt:"Seventh plant image"},plantasFlamingo:{src:t.p+"static/plantas_flamingo-15f401e8425af5bfa99cf5ba0aaaf696.png",alt:"Flamingo plants image"},plate:{src:t.p+"static/plate-5ff52e287559062b13ef30425bb76379.png",alt:"Plate image"},shot:{src:t.p+"static/shot-3e529636f132998411f941ccf3d8fb0e.png",alt:"Shot image"},wine:{src:t.p+"static/wine-d0e6af1c9549497d967ca773ab89bad2.png",alt:"Wine image"}}},4311:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var c=t(6540),l=t(4794),n=t(8508),r=t(3135),s=t(6478);var i=e=>{let{data:a,logoPosition:t}=e;const i=e=>c.createElement(l.Link,{to:"/",className:`w-full ${e} ${t||""}`},c.createElement(r.A,{fillColour:"#fff"}));return c.createElement(c.Fragment,null,c.createElement("header",{className:m.container},i("hidden sm:flex"),c.createElement("div",{className:""},c.createElement(n.A,{clubLayout:!1,data:a}),c.createElement("div",{className:"flex sm:hidden absolute right-4 top-4"},c.createElement(s.A,{data:a})))),i("flex sm:hidden max-w-40"))};const m={container:"flex flex-row p-4 justify-center sm:justify-end"};var o=t(3740),d=t(5867),f=t(2389);var p=e=>{let{children:a,data:t}=e;const{0:l,1:n}=(0,c.useState)("/drinksMenu/"),{t:r}=(0,f.useTranslation)();return(0,c.useEffect)((()=>{const e=window.location.pathname.split("/")[1];"fr"!==e&&"es"!==e&&"en"!==e||n(`/${e}/drinksMenu/`)}),[]),c.createElement(c.Fragment,null,c.createElement("a",{href:l},c.createElement("div",{className:"fixed top-[50%] z-50 right-0 w-24 h-16 bg-latinFucsia rounded-l-full flex justify-start"},c.createElement("div",{className:"w-16 h-16 text-white rounded-full text-center relative flex items-center justify-center"},c.createElement("svg",{className:"absolute w-full h-full",viewBox:"0 0 100 100"},c.createElement("defs",null,c.createElement("path",{id:"circlePath",d:"M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"})),c.createElement("text",{fontSize:"8",fill:"white"},c.createElement("textPath",{xlinkHref:"#circlePath",startOffset:"0"},"El Lounge • El Lounge • El Lounge • El Lounge • El Lounge •"))),c.createElement("div",{className:"absolute flex flex-col items-center justify-center"},c.createElement(d.jJQ,{className:"mx-auto"}),c.createElement("span",{className:"text-xs"},r("general.drinks")))))),c.createElement("div",{className:g.containerWrapper},c.createElement("div",{className:"relative bg-contain bg-center overflow-hidden",style:{backgroundImage:`url(${o.A.BackgroundImage.src})`,backgroundSize:"cover"}},c.createElement("div",{className:"absolute right-[-3rem] sm:right-[-6rem] top-[-1rem] sm:top-[-2rem]"},c.createElement("img",{src:o.A.planta_3.src,className:"w-28 sm:w-56",alt:o.A.planta_3.alt}),c.createElement("img",{src:o.A.planta_4.src,className:"absolute w-16 sm:w-32 right-2 sm:right-[3rem] top-16 sm:top-[12rem] z-30 rotate-[10deg]",alt:o.A.planta_4.alt})),c.createElement("div",{className:"w-full max-w-[1200px] mx-auto"},c.createElement(i,{logoPosition:g.logoPosition,data:t})),c.createElement("div",{className:"hidden sm:flex justify-center my-10"},c.createElement(s.A,{data:t})),c.createElement("main",null,a),c.createElement("div",{className:"absolute w-24 sm:w-48 h-28 sm:h-56 bottom-0 overflow-hidden z-10"},c.createElement("img",{className:"absolute -bottom-8 w-22 sm:w-36 rotate-[60deg]",src:o.A.planta_5.src,alt:o.A.planta_5.alt}),c.createElement("img",{className:"absolute -bottom-4 w-22 sm:w-36 -left-10",src:o.A.cocktail_3.src,alt:o.A.cocktail_3.alt})),c.createElement("div",{className:"absolute w-24 sm:w-48 h-28 sm:h-56 bottom-0 right-0 overflow-hidden"},c.createElement("img",{className:"absolute -bottom-12 w-22 sm:w-44 -right-12",src:o.A.limon_3.src,alt:o.A.limon_3.alt}),c.createElement("img",{className:"absolute -bottom-12 w-22 sm:w-44 -right-20",src:o.A.cocktail_2.src,alt:o.A.cocktail_2.alt})))))};const g={containerWrapper:"flex flex-col w-full bg-secondary",logoPosition:"mx-auto max-h-32"}}}]);
//# sourceMappingURL=component---src-pages-food-layout-tsx-a9806d6c93bc85d5d33c.js.map