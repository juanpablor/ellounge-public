"use strict";(self.webpackChunkEl_Lounge_Latin_Club=self.webpackChunkEl_Lounge_Latin_Club||[]).push([[321],{6478:function(e,a,t){var r=t(6540),c=t(4755),n=t(4794),s=t(1223),i=t(6973),l=t(3),o=t(6462);a.A=e=>{let{data:a}=e;const{t:t}=(0,c.useTranslation)(),{pathname:p}=(0,o.useLocation)(),{0:d,1:u}=(0,r.useState)(!1);if(!a||!a.menu||!a.companyDetails)return null;const f=p.replace(/^\/(es|en|fr)\//,"/").replace(/\/$/,""),{instagram:b,facebook:g}=a.companyDetails;return r.createElement("nav",{className:m.container},r.createElement("button",{onClick:()=>{u(!d)},className:m.burgerButton},d?r.createElement(l.yGN,{className:"text-white fixed right-4 z-[70] top-4",size:24}):r.createElement(l.ND1,{className:"text-white",size:24})),r.createElement("ul",{className:`${m.buttonsWrapper} ${d?m.menuOpen:m.menuClosed}`},r.createElement("li",null,r.createElement("a",{href:b,target:"_blank",rel:"noopener noreferrer"},r.createElement(s.g0x,{className:"text-white"}))),a.menu.map(((e,a)=>{const s="home"===e?"/":`/${e}`.replace(/\/$/,""),i=f===s;return r.createElement("li",{key:a,className:m.buttonsContainer},r.createElement(n.Link,{to:s,className:`${m.buttons} ${i?"font-extrabold !text-secondary":""}`,activeClassName:"text-secondary"},r.createElement(c.Trans,{i18nKey:`menu.${e}`},t(`menu.${e}`))))})),r.createElement("li",null,r.createElement("a",{href:g,target:"_blank",rel:"noopener noreferrer"},r.createElement(i.MkP,{className:"text-white"})))))};const m={container:"inline-block justify-between items-center bg-primary px-4 py-2 rounded-none sm:rounded-full relative left-0 sm:left-auto z-50 w-full sm:w-auto",burgerButton:"md:hidden block text-white focus:outline-none",buttonsWrapper:"flex flex-col md:flex-row justify-evenly items-center w-full md:w-auto fixed sm:relative left-0 bg-primary top-0 py-8 sm:py-0",buttonsContainer:"my-4 sm:my-0",buttons:"text-white px-8 py-2  hover:underline hover:text-secondary",menuOpen:"block md:flex",menuClosed:"hidden md:flex"}},8756:function(e,a,t){t.d(a,{A:function(){return r}});var r={american_burger:{src:t.p+"static/american_burger-2ba10ff2f3fef378e5ed0d156cb60b07.jpg",alt:"American Burger"},arepa_de_carne:{src:t.p+"static/arepa_de_carne-7dc90e7dbe165627c2a8d267f7990f9e.jpg",alt:"Arepa de Carne"},arepa_de_chicharron:{src:t.p+"static/arepa_de_chicharron-02b80f983d2d7f7c7b0de78299a4eb1f.jpg",alt:"Arepa de Chicharrón"},arepa_llanera:{src:t.p+"static/arepa_llanera-1d6ab8fa515b6333f3dfb485275df3de.jpg",alt:"Arepa Llanera"},arepa_de_pernil:{src:t.p+"static/arepa_de_pernil-391bd6c6ce0a534ad2867627bb392ac6.jpg",alt:"Arepa de Pernil"},arepa_de_pollo:{src:t.p+"static/arepa_de_pollo-30228cdd7d261b285aef8b2d24652a97.jpg",alt:"Arepa de Pollo"},asado_for_two:{src:t.p+"static/asado_for_two-fea97b3b3a1e247fbe6af06b0efc3c3f.jpg",alt:"Asado for Two"},calamares:{src:t.p+"static/calamares-32212dbe6a6fa12264644f85bfeb5327.jpg",alt:"Calamares"},carpaccio_de_carne:{src:t.p+"static/carpaccio_de_carne-287844f87572d52daad84ed3fa024240.jpg",alt:"Carpaccio de Carne"},carpaccio_de_salmon:{src:t.p+"static/carpaccio_de_salmon-ac74fba3e720f363245a2ecc2971344d.jpg",alt:"Carpaccio de Salmón"},ceviche_de_camaron:{src:t.p+"static/ceviche_de_camaron-6ee9a352d9f451412b11277a878ab559.jpg",alt:"Ceviche de Camarón"},ceviche_de_pescado:{src:t.p+"static/ceviche_de_pescado-94d961bf22677b8d7dafc4a7f2d24710.jpg",alt:"Ceviche de Pescado"},charcutterie:{src:t.p+"static/charcutterie-0e5e567a74625e746b331b412fec08a9.jpg",alt:"Charcuterie"},chicharron:{src:t.p+"static/chicharron-f0361afbdf07db203e399a3d5c228212.jpg",alt:"Chicharrón"},empanadas:{src:t.p+"static/empanadas-b45629663e46386b0fe22a0a5897eded.jpg",alt:"Empanadas"},ensalada_cesar:{src:t.p+"static/ensalada_cesar-7099c8243357f01bc0a937bb0cf56ff0.jpg",alt:"Ensalada César"},extra_fries:{src:t.p+"static/extra_fries-b9c5e4c76ced00fcd6316d079f42cd48.jpg",alt:"Extra Fries"},extra_guacamole:{src:t.p+"static/extra_guacamole-fccc8dfbb658f3b285146b0653425d11.jpg",alt:"Extra Guacamole"},extra_patate_douce:{src:t.p+"static/extra_patate_douce-91dbe7a9369c629244ec56e5e95c03c6.jpg",alt:"Extra Patate Douce"},fried_chicken_burger:{src:t.p+"static/fried_chicken_burger-d869bc3013ab98a0be3c492f90aba4af.jpg",alt:"Fried Chicken Burger"},grilled_chicken:{src:t.p+"static/grilled_chicken-a9f5d80925b9fa06f79d78764eb7647e.jpg",alt:"Grilled Chicken"},guaca_chips:{src:t.p+"static/guaca_chips-c7f2cc311b79cf273c95f1e1552363e8.jpg",alt:"Guaca Chips"},la_pana_burger:{src:t.p+"static/la_pana_burger-da01774527871ef2ec12e76336afdfe7.jpg",alt:"La Pana Burger"},la_parce_burger:{src:t.p+"static/la_parce_burger-c029c9006ebaf509ae35beed07486d43.jpg",alt:"La Parce Burger"},marranitas:{src:t.p+"static/marranitas-8a168c0574f2af1f2f16206da7cc05c2.jpg",alt:"Marranitas"},menu_degustation:{src:t.p+"static/menu_degustation-14085797769c3ed1aa812d9ec82d3d59.jpg",alt:"Menu Degustation"},mini_burguers:{src:t.p+"static/mini_burguers-2b50223f2be3f4e878645e6a1ccc969a.jpg",alt:"Mini Burgers"},mini_arepas:{src:t.p+"static/mini_arepas-69bc2f8d114f04f5df284575daabd80a.jpg",alt:"Mini Arepas"},no_image:{src:t.p+"static/no_image-a641770be4c563e18e49fa7485e18e0a.png",alt:"No Image"},patacon_carne:{src:t.p+"static/patacon_carne-d21546f69398f9356304d887d4d29f2e.jpg",alt:"Patacón de Carne"},patacon_chicharron:{src:t.p+"static/patacon_chicharron-47924089cfc99f5945ebcabc62d935af.jpg",alt:"Patacón de Chicharrón"},patacon_pernil:{src:t.p+"static/patacon_pernil-731a10b167eb0e0e4213028e1e1066b0.jpg",alt:"Patacón de Pernil"},patacon_pollo:{src:t.p+"static/patacon_pollo-e991072b1179bb3531574b0576b0637e.jpg",alt:"Patacón de Pollo"},patacon:{src:t.p+"static/patacon-d764b6a51d45afaff405183e99841e33.jpg",alt:"Patacón"},pico_de_gallo_de_mango:{src:t.p+"static/pico_de_gallo_de_mango-52641f5e69b7a82d3f863612987276b7.jpg",alt:"Pico de Gallo de Mango"},poutine_latino_quebecoise:{src:t.p+"static/poutine_latino_quebecoise-e48c7bf7a072565a780a97c155df64fb.jpg",alt:"Poutine Latino Québécoise"},poutine:{src:t.p+"static/poutine-bb699afab447f4dc769b5c46c34a78fa.jpg",alt:"Poutine"},reina_pepiada:{src:t.p+"static/reina_pepiada-198fab42bf0aa1d2c1c58a8c5420ce93.jpg",alt:"Reina Pepiada"},salade_verte:{src:t.p+"static/salade_verte-8808d39e8377437b123a4b3dcf759c9a.jpg",alt:"Salade Verte"},sopita_del_dia:{src:t.p+"static/sopita_del_dia-74ec4a23882e3ef35e58b636d0f35db5.jpg",alt:"Sopita del Día"},soup:{src:t.p+"static/soup-97f862fa38de96bdfe8edd3b280cd9ae.jpg",alt:"Soup"},steak_fries:{src:t.p+"static/steak_fries-42d35ff904b26ed1a1d4ae68c79fd7a7.jpg",alt:"Steak Fries"},tequechapa:{src:t.p+"static/tequechapa-b2c4ff621f6d6b143d3fee7817d714a6.jpg",alt:"Tequechapa"},tequenos_de_guayaba:{src:t.p+"static/tequenos_de_guayaba-ce172733bb4539d3f2db30b30851b0b8.jpg",alt:"Tequeños de Guayaba"},tequenos_de_jalapeno:{src:t.p+"static/tequenos_de_jalapeno-6c45416e8d1a93c1cbcdbe43404b3fdc.jpg",alt:"Tequeños de Jalapeño"},tequenos_de_nutella:{src:t.p+"static/tequenos_de_nutella-9b0ff4de599f3d66ea99283455fb4d1a.jpg",alt:"Tequeños de Nutella"},tequenos_de_platano_maduro:{src:t.p+"static/tequenos_de_platano_maduro-c94a0b042c11b52bc7001fecd8bcccd5.jpg",alt:"Tequeños de Plátano Maduro"},tequenos_de_queso:{src:t.p+"static/tequenos_de_queso-ce172733bb4539d3f2db30b30851b0b8.jpg",alt:"Tequeños de Queso"},trio_patacon:{src:t.p+"static/trio_patacon-a855fde82ad0b0b835c71c75c8b93a39.jpg",alt:"Trío Patacón"},wings:{src:t.p+"static/wings-0e1605be4dc34f21cc38f340bd43f280.jpg",alt:"Wings"},yucas_revoltosas:{src:t.p+"static/yucas_revoltosas-19b1d8c09e72c6204603d6bf7d4bc200.jpg",alt:"Yucas Revoltosas"}}},4311:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var r=t(6540),c=t(4794),n=t(8508),s=t(3135),i=t(6478);var l=e=>{let{data:a,logoPosition:t}=e;const l=e=>r.createElement(c.Link,{to:"/",className:`w-full ${e} ${t||""}`},r.createElement(s.A,{fillColour:"#fff"}));return r.createElement(r.Fragment,null,r.createElement("header",{className:o.container},l("hidden sm:flex"),r.createElement("div",{className:""},r.createElement(n.A,{clubLayout:!1,data:a}),r.createElement("div",{className:"flex sm:hidden absolute right-4 top-4"},r.createElement(i.A,{data:a})))),l("flex sm:hidden max-w-40"))};const o={container:"flex flex-row p-4 justify-center sm:justify-end"};var m=t(3740),p=t(5505),d=t(560);var u=e=>{let{children:a,data:t}=e;const{0:c,1:n}=(0,r.useState)("/drinksMenu/"),{0:s,1:o}=(0,r.useState)("/foodMenu/"),{0:u,1:b}=(0,r.useState)(!1),{0:g,1:_}=(0,r.useState)(!1);return(0,r.useEffect)((()=>{if("undefined"!=typeof window){const e=window.location.pathname,a=e.split("/")[1],t=e.split("/")[2];b("foodMenu"===t),_("drinksMenu"===t),"fr"!==a&&"es"!==a&&"en"!==a||(n(`/${a}/drinksMenu/`),o(`/${a}/foodMenu/`))}}),[]),r.createElement(r.Fragment,null,!u&&r.createElement(d.A,{href:s,topPositionValue:50}),!g&&r.createElement(p.A,{href:c,topPositionValue:50}),r.createElement("div",{className:f.containerWrapper},r.createElement("div",{className:"relative bg-contain bg-center overflow-hidden min-h-screen",style:{backgroundImage:`url(${m.A.BackgroundImage.src})`,backgroundSize:"cover"}},r.createElement("div",{className:"absolute right-[-3rem] sm:right-[-6rem] top-[-1rem] sm:top-[-2rem]"},r.createElement("img",{src:m.A.planta_3.src,className:"w-28 sm:w-56",alt:m.A.planta_3.alt}),r.createElement("img",{src:m.A.planta_4.src,className:"absolute w-16 sm:w-32 right-2 sm:right-[3rem] top-16 sm:top-[12rem] z-30 rotate-[10deg]",alt:m.A.planta_4.alt})),r.createElement("div",{className:"w-full max-w-[1200px] mx-auto"},r.createElement(l,{logoPosition:f.logoPosition,data:t})),r.createElement("div",{className:"hidden sm:flex justify-center my-10"},r.createElement(i.A,{data:t})),r.createElement("main",null,a),r.createElement("div",{className:"absolute w-24 sm:w-48 h-28 sm:h-56 bottom-0 overflow-hidden z-10"},r.createElement("img",{className:"absolute -bottom-8 w-22 sm:w-36 rotate-[60deg]",src:m.A.planta_5.src,alt:m.A.planta_5.alt}),r.createElement("img",{className:"absolute -bottom-4 w-22 sm:w-36 -left-10",src:m.A.cocktail_3.src,alt:m.A.cocktail_3.alt})),r.createElement("div",{className:"absolute w-24 sm:w-48 h-28 sm:h-56 bottom-0 right-0 overflow-hidden"},r.createElement("img",{className:"absolute -bottom-12 w-22 sm:w-44 -right-12",src:m.A.limon_3.src,alt:m.A.limon_3.alt}),r.createElement("img",{className:"absolute -bottom-12 w-22 sm:w-44 -right-20",src:m.A.cocktail_2.src,alt:m.A.cocktail_2.alt})))))};const f={containerWrapper:"flex flex-col w-full bg-secondary",logoPosition:"mx-auto max-h-32"}},7204:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var r=t(4506),c=t(6540),n=t(8154),s=t(4794),i=t(4311),l=JSON.parse('{"entrees":[{"name":"Menu dégustation","price":"27","image":"menu_degustation"},{"name":"Trio mini arepitas","price":"17","image":"mini_arepas"},{"name":"Trío patacón","price":"17","image":"trio_patacon"},{"name":"Empanadas de Carne or Veggies","price":"15","image":"empanadas"},{"name":"Ceviche de Camarón","price":"19","image":"ceviche_de_camaron"},{"name":"Ceviche de Pescado","price":"21","image":"ceviche_de_pescado"},{"name":"Crispy Calamari","price":"23","image":"calamares"},{"name":"Tequeños de queso","price":"18","image":"tequenos_de_queso"},{"name":"Tequeños de plátano maduro","price":"18","image":"tequenos_de_platano_maduro"},{"name":"Tequeños de Jalapeño","price":"18","image":"tequenos_de_jalapeno"},{"name":"Tequeños de Guayaba","price":"18","image":"tequenos_de_guayaba"},{"name":"Teque-Chapas","price":"18","image":"tequechapa"},{"name":"Yucas","price":"14","image":"yucas_revoltosas"},{"name":"Alitas","price":"16/30","image":"wings","note1":"8 ou 16 morceaux / pieces"},{"name":"Sopa del dia","price":"13","image":"soup"}],"mainDishes":[{"name":"Mixed grilled ( for two )","price":"60","image":"asado_for_two"},{"name":"American cheese burger","price":"21.5","image":"american_burger","extras":"<li>Bacon ou chorizo <span>1.5</span></li><li>Gallete de boeuf/Beef patty <span>3</span></li><li>Ouef/Egg <span>1</span></li>"},{"name":"La pana burger","price":"25.5","image":"la_pana_burger","extras":"<li>Bacon ou chorizo <span>1.5</span></li><li>Gallete de boeuf/Beef patty <span>3</span></li><li>Ouef/Egg <span>1</span></li>"},{"name":"Burger la parcera","price":"25.5","image":"la_parce_burger","extras":"<li>Bacon ou chorizo <span>1.5</span></li><li>Gallete de boeuf/Beef patty <span>3</span></li><li>Ouef/Egg <span>1</span></li>"},{"name":"Fried Chicken Burger","price":"25","image":"fried_chicken_burger"},{"name":"Patacón Maracucho de Carne","price":"21","image":"patacon_carne"},{"name":"Patacón Maracucho de Pernil","price":"21","image":"patacon_pernil"},{"name":"Patacón de pollo","price":"21","image":"patacon_pollo"},{"name":"Patacón de Chicharrón","price":"18","image":"patacon_chicharron"},{"name":"Chicharron","price":"21.5","image":"chicharron"},{"name":"Grilled chicken","price":"22","image":"grilled_chicken"},{"name":"Arepa de Pernil","price":"18","image":"arepa_de_pernil"},{"name":"Arepa de Carne","price":"18","image":"arepa_de_carne"},{"name":"Arepa de chicharron","price":"18","image":"arepa_de_chicharron"},{"name":"Arepa de pollo","price":"19","image":"arepa_de_pollo"},{"name":"Arepa Llanera","price":"18","image":"arepa_llanera"},{"name":"Poutine","price":"13","image":"poutine"},{"name":"Poutine Latino Québécois","price":"18","image":"poutine_latino_quebecoise"},{"name":"Ensalada Cesar","price":"13","image":"ensalada_cesar"},{"name":"Ensalada Verde","price":"12","image":"salade_verte"}],"extras":[{"name":"Guacamole","price":"4","image":"extra_guacamole"},{"name":"Bacon","price":"3","image":"bacon"},{"name":"Chorizo","price":"4","image":"chorizo"},{"name":"Gallete de boeuf/Beef patty","price":"3","image":"gallete_de_boeuf"},{"name":"Egg","price":"1.5","image":"oeuf"}],"sideDishes":[{"name":"Patacón / Toston Fritos","price":"6","image":"patacon"},{"name":"Frites / Fries","price":"6","image":"extra_fries"},{"name":"Yuca / Manioc","price":"9","image":"yuca"},{"name":"Patates Douce Frite/Sweet Potato Fries","price":"9","image":"extra_patate_douce"}],"desserts":[{"name":"Tres leches","price":"12","image":"tres_leches"},{"name":"Quesillo","price":"12","image":"quesillo"},{"name":"Tequeños de Nutella","price":"16","image":"tequenos_de_nutella"}]}'),o=t(8526),m=t(6462),p=t(8756),d=t(4755),u=t(3135),f=t(8027),b=t(8689);var g=()=>{const{t:e}=(0,d.useTranslation)(),{0:a,1:t}=(0,c.useState)(null),{0:g,1:x}=(0,c.useState)("entrees"),{0:h,1:w}=(0,c.useState)(0),E=(0,c.useRef)(null),y=o[0],v=l,j=(0,m.useLocation)(),N=e=>{w(window.scrollY),t(e),(0,s.navigate)(`?food=${e.image}`)},k=()=>{t(null),(0,s.navigate)("?"),setTimeout((()=>{window.scrollTo(0,h)}),50)};(0,c.useEffect)((()=>{const e=new URLSearchParams(j.search).get("food");if(e){const a=[].concat((0,r.A)(v.entrees),(0,r.A)(v.mainDishes),(0,r.A)(v.extras),(0,r.A)(v.sideDishes),(0,r.A)(v.desserts)).find((a=>a.image===e));a&&N(a)}return()=>{t(null)}}),[v]);const C=e=>{const a=e,t=p.A[a]||p.A.no_image;return{src:t.src,alt:t.alt}},A=a=>a.map(((a,t)=>c.createElement("div",{className:_.productTile,key:t,onClick:()=>N(a)},c.createElement("div",null,c.createElement("img",{src:C(a.image).src,alt:C(a.image).alt})),c.createElement("div",{className:_.productTileInfoWrapper},c.createElement("h3",{className:_.productTileTitle},a.name)),c.createElement("div",{className:_.productTileShowMore},c.createElement("p",{className:_.productTilePrice},a.price),e("general.see_more")))));return c.createElement(i.default,{data:y},c.createElement(n.m,null,c.createElement("title",null,e("productMenu.dishes_title")," - ",y.name),c.createElement("link",{rel:"icon",href:b.A})),c.createElement("section",null,c.createElement("div",{className:_.tabsWrapper},c.createElement("button",{className:`${_.tabButton} ${"entrees"===g?"text-terciary bg-secondary border-terciary border-[1px]":""}`,onClick:()=>x("entrees")},e("productMenu.entrees")),c.createElement("button",{className:`${_.tabButton} ${"mainDishes"===g?"text-terciary bg-secondary border-terciary border-[1px]":""}`,onClick:()=>x("mainDishes")},e("productMenu.mainDishes")),c.createElement("button",{className:`${_.tabButton} ${"sideDishes"===g?"text-terciary bg-secondary border-terciary border-[1px]":""}`,onClick:()=>x("sideDishes")},e("productMenu.sideDishes")),c.createElement("button",{className:`${_.tabButton} ${"extras"===g?"text-terciary bg-secondary border-terciary border-[1px]":""}`,onClick:()=>x("extras")},e("productMenu.extras")),c.createElement("button",{className:`${_.tabButton} ${"desserts"===g?"text-terciary bg-secondary border-terciary border-[1px]":""}`,onClick:()=>x("desserts")},e("productMenu.desserts"))),c.createElement("div",{ref:E,className:"food-menu flex flex-wrap gap-5 max-w-[1200px] mx-auto justify-center mb-16 sm:mb-24"},"entrees"===g&&A(v.entrees),"mainDishes"===g&&A(v.mainDishes),"sideDishes"===g&&A(v.sideDishes),"extras"===g&&A(v.extras),"desserts"===g&&A(v.desserts))),a&&c.createElement("div",{className:"modal w-full h-full fixed z-[80] top-0 bg-black/80 text-white overflow-y-auto",onClick:k},c.createElement("div",{className:"modal-content w-[90%] sm:w-[80%] max-w-[75rem] mx-auto bg-secondary/75 mt-6 sm:mt-40 p-2 sm:p-12"},c.createElement("article",{className:"flex flex-col sm:flex-row justify-between"},c.createElement("div",{className:"flex items-start w-full sm:w-auto"},c.createElement("div",{className:"flex text-terciary w-8 cursor-pointer",onClick:k},c.createElement(f.yyx,{className:"w-full h-full "})),c.createElement("div",{className:"ml-16 w-24 sm:w-36"},c.createElement(u.A,{fillColour:"#fff"}))),c.createElement("div",{className:"section w-full sm:w-auto"},c.createElement("div",{className:"text-2xl font-thin text-center bg-terciary sm:bg-transparent max-w-max mx-auto px-8 py-1 rounded mt-4"},e(`productMenu.${g}`)),c.createElement("div",{className:"text-terciary text-sm sm:text-6xl text-center hidden sm:flex"},a.price))),c.createElement("article",{className:"flex flex-col sm:flex-row mt-4 sm:mt-0"},c.createElement("img",{className:"w-full sm:w-[28rem]",src:C(a.image).src,alt:a.name}),c.createElement("div",{className:"flex flex-col self-center p-2 sm:p-8"},c.createElement("div",{className:"w-full text-2xl sm:text-4xl font-bold uppercase flex justify-between"},a.name,c.createElement("div",{className:"text-terciary text-2xl sm:text-6xl flex sm:hidden self-center"},a.price)),c.createElement("p",{className:"py-4"},e(`food.${a.image}`)))))))};const _={starringAreaWrapper:"flex mt-8 flex-row gap-6 justify-center text-white ",starringItem:"relative w-96 border-dashed border-white border text-center",srattingTitle:"bg-primary text-secondary text-lg flex justify-center p-3 font-bold",tabButton:"hover:text-terciary hover:underline py-2 sm:py-0 text-xl underline underline-offset-4 sm:underline-offset-8 bg-primary sm:bg-transparent my-1 px-6 max-w-max sm:max-w-none rounded mx-auto whitespace-nowrap",productTile:"flex flex-col w-[160px] h-[260px] bg-primary/35 box-shadow p-4 relative z-20",productTileInfoWrapper:"flex flex-row grow pt-4",productTileTitle:"text-white uppercase font-extrabold text-md leading-[1rem] h-[48px] text-ellipsis overflow-hidden",productTilePrice:"text-terciary self-end text-2xl font-extrabold flex justify-end leading-none",productTileShowMore:"text-white text-xs text-center font-extralight",mainTitle:"text-primary text-6xl text-center tracking-wide m-0 p-0",tabsWrapper:"text-white flex flex-col sm:flex-row justify-center px-6 max-w-[750px] mx-auto my-2 sm:my-8",after:"after:'' after:w-[2rem] after:h-[3.25rem] after:bg-primary after:block after:absolute after:right-[-1.8rem] after:top-[23.85rem] after:z-50"}},8689:function(e,a,t){a.A=t.p+"static/icon-83fab090381658fc8ac47ea0c9e30c7a.png"}}]);
//# sourceMappingURL=component---src-pages-food-menu-tsx-3c3c4409dd8781d38889.js.map