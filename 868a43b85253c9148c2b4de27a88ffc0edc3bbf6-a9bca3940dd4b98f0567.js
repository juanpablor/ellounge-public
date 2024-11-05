"use strict";(self.webpackChunkEl_Lounge_Latin_Club=self.webpackChunkEl_Lounge_Latin_Club||[]).push([[117],{7212:function(e,a,t){var c=t(6540),l=t(4794),r=t(3135),s=t(4755),n=t(1223),m=t(6973),o=t(658),i=t(3740);a.A=e=>{let{data:a,isLatinClub:t}=e;const{t:d}=(0,s.useTranslation)();return c.createElement("footer",{className:p.container},c.createElement("div",{className:"flex flex-col sm:flex-row w-full justify-around"},c.createElement(l.Link,{to:"/",className:"px-8 sm:px-32 py-8 sm:py-0"},c.createElement(r.A,{fillColour:"#fff"})),c.createElement("ul",{className:"px-4 sm:px-16 py-8 sm:py-0"},a&&a.companyDetails?c.createElement(c.Fragment,null,c.createElement("li",null,a.companyDetails.address),c.createElement("li",null,a.companyDetails.phone),c.createElement("li",null,a.companyDetails.city,", ",a.companyDetails.country),c.createElement("li",null,a.companyDetails.email)):c.createElement("li",null,d("loading"))),c.createElement("div",{className:"border-l-white border-l-0 sm:border-l-2 border-r-0 sm:border-r-white sm:border-r-2 px-4 sm:px-16"},c.createElement("h3",{className:"font-semibold"},d("hours.title")),c.createElement("ul",null,!t&&c.createElement("li",null,d("hours.mondayLounge")),!t&&c.createElement("li",null,d("hours.wednesdayLounge")),!t&&c.createElement("li",null,d("hours.thursdayLounge")),!t&&c.createElement("li",null,d("hours.fridayLounge")),!t&&c.createElement("li",null,d("hours.saturdayLounge")),t&&c.createElement("li",null,d("hours.thursdayLatinclub")),t&&c.createElement("li",null,d("hours.fridayLatinclub")),t&&c.createElement("li",null,d("hours.saturdayLatinclub")))),a&&a.companyDetails?c.createElement("div",{className:"flex flex-row sm:flex-col mx-12 pt-8 gap-4 self-center "},c.createElement("a",{href:a.companyDetails.whatsApp,target:"_blank",rel:"noopener noreferrer"},c.createElement(o.$Z7,{className:"text-white hover:text-latinFucsia"})),c.createElement("a",{href:a.companyDetails.instagram,target:"_blank",rel:"noopener noreferrer"},c.createElement(n.g0x,{className:"text-white hover:text-latinFucsia"})),c.createElement("a",{href:a.companyDetails.facebook,target:"_blank",rel:"noopener noreferrer"},c.createElement(m.MkP,{className:"text-white hover:text-latinFucsia"}))):c.createElement("li",null,d("loading"))),c.createElement("div",{className:"text-center mt-8"},c.createElement("p",null,(new Date).getFullYear()," © ",d("content.copyright_footer"))),c.createElement("div",{className:"absolute w-[18rem] h-[26rem]"},c.createElement("img",{className:"hidden sm:flex absolute z-50 top-48 rotate-[-5deg] left-4",src:i.A.cocktail_4.src,alt:i.A.cocktail_4.alt})))};const p={container:"flex flex-col justify-around p-4 text-white py-8 relative overflow-hidden"}},6478:function(e,a,t){var c=t(6540),l=t(4755),r=t(4794),s=t(1223),n=t(6973),m=t(3),o=t(6462);a.A=e=>{let{data:a}=e;const{t:t}=(0,l.useTranslation)(),{pathname:p}=(0,o.useLocation)(),{0:d,1:u}=(0,c.useState)(!1);if(!a||!a.menu||!a.companyDetails)return null;const f=p.replace(/^\/(es|en|fr)\//,"/").replace(/\/$/,""),{instagram:b,facebook:_}=a.companyDetails;return c.createElement("nav",{className:i.container},c.createElement("button",{onClick:()=>{u(!d)},className:i.burgerButton},d?c.createElement(m.yGN,{className:"text-white fixed right-4 z-[70] top-4",size:24}):c.createElement(m.ND1,{className:"text-white",size:24})),c.createElement("ul",{className:`${i.buttonsWrapper} ${d?i.menuOpen:i.menuClosed}`},c.createElement("li",null,c.createElement("a",{href:b,target:"_blank",rel:"noopener noreferrer"},c.createElement(s.g0x,{className:"text-white"}))),a.menu.map(((e,a)=>{const s="home"===e?"/":`/${e}`.replace(/\/$/,""),n=f===s;return c.createElement("li",{key:a,className:i.buttonsContainer},c.createElement(r.Link,{to:s,className:`${i.buttons} ${n?"font-extrabold !text-secondary":""}`,activeClassName:"text-secondary"},c.createElement(l.Trans,{i18nKey:`menu.${e}`},t(`menu.${e}`))))})),c.createElement("li",null,c.createElement("a",{href:_,target:"_blank",rel:"noopener noreferrer"},c.createElement(n.MkP,{className:"text-white"})))))};const i={container:"inline-block justify-between items-center bg-primary px-4 py-2 rounded-none sm:rounded-full relative left-0 sm:left-auto z-50 w-full sm:w-auto",burgerButton:"md:hidden block text-white focus:outline-none",buttonsWrapper:"flex flex-col md:flex-row justify-evenly items-center w-full md:w-auto fixed sm:relative left-0 bg-primary top-0 py-8 sm:py-0",buttonsContainer:"my-4 sm:my-0",buttons:"text-white px-8 py-2  hover:underline hover:text-secondary",menuOpen:"block md:flex",menuClosed:"hidden md:flex"}},8756:function(e,a,t){t.d(a,{A:function(){return c}});var c={american_burger:{src:t.p+"static/american_burger-2ba10ff2f3fef378e5ed0d156cb60b07.jpg",alt:"American Burger"},arepa_de_carne:{src:t.p+"static/arepa_de_carne-7dc90e7dbe165627c2a8d267f7990f9e.jpg",alt:"Arepa de Carne"},arepa_de_chicharron:{src:t.p+"static/arepa_de_chicharron-02b80f983d2d7f7c7b0de78299a4eb1f.jpg",alt:"Arepa de Chicharrón"},arepa_llanera:{src:t.p+"static/arepa_llanera-1d6ab8fa515b6333f3dfb485275df3de.jpg",alt:"Arepa Llanera"},arepa_de_pernil:{src:t.p+"static/arepa_de_pernil-391bd6c6ce0a534ad2867627bb392ac6.jpg",alt:"Arepa de Pernil"},arepa_de_pollo:{src:t.p+"static/arepa_de_pollo-30228cdd7d261b285aef8b2d24652a97.jpg",alt:"Arepa de Pollo"},asado_for_two:{src:t.p+"static/asado_for_two-fea97b3b3a1e247fbe6af06b0efc3c3f.jpg",alt:"Asado for Two"},calamares:{src:t.p+"static/calamares-32212dbe6a6fa12264644f85bfeb5327.jpg",alt:"Calamares"},carpaccio_de_carne:{src:t.p+"static/carpaccio_de_carne-287844f87572d52daad84ed3fa024240.jpg",alt:"Carpaccio de Carne"},carpaccio_de_salmon:{src:t.p+"static/carpaccio_de_salmon-ac74fba3e720f363245a2ecc2971344d.jpg",alt:"Carpaccio de Salmón"},ceviche_de_camaron:{src:t.p+"static/ceviche_de_camaron-6ee9a352d9f451412b11277a878ab559.jpg",alt:"Ceviche de Camarón"},ceviche_de_pescado:{src:t.p+"static/ceviche_de_pescado-94d961bf22677b8d7dafc4a7f2d24710.jpg",alt:"Ceviche de Pescado"},charcutterie:{src:t.p+"static/charcutterie-0e5e567a74625e746b331b412fec08a9.jpg",alt:"Charcuterie"},chicharron:{src:t.p+"static/chicharron-f0361afbdf07db203e399a3d5c228212.jpg",alt:"Chicharrón"},empanadas:{src:t.p+"static/empanadas-b45629663e46386b0fe22a0a5897eded.jpg",alt:"Empanadas"},ensalada_cesar:{src:t.p+"static/ensalada_cesar-7099c8243357f01bc0a937bb0cf56ff0.jpg",alt:"Ensalada César"},extra_fries:{src:t.p+"static/extra_fries-b9c5e4c76ced00fcd6316d079f42cd48.jpg",alt:"Extra Fries"},extra_guacamole:{src:t.p+"static/extra_guacamole-fccc8dfbb658f3b285146b0653425d11.jpg",alt:"Extra Guacamole"},extra_patate_douce:{src:t.p+"static/extra_patate_douce-91dbe7a9369c629244ec56e5e95c03c6.jpg",alt:"Extra Patate Douce"},fried_chicken_burger:{src:t.p+"static/fried_chicken_burger-d869bc3013ab98a0be3c492f90aba4af.jpg",alt:"Fried Chicken Burger"},grilled_chicken:{src:t.p+"static/grilled_chicken-a9f5d80925b9fa06f79d78764eb7647e.jpg",alt:"Grilled Chicken"},guaca_chips:{src:t.p+"static/guaca_chips-c7f2cc311b79cf273c95f1e1552363e8.jpg",alt:"Guaca Chips"},la_pana_burger:{src:t.p+"static/la_pana_burger-da01774527871ef2ec12e76336afdfe7.jpg",alt:"La Pana Burger"},la_parce_burger:{src:t.p+"static/la_parce_burger-c029c9006ebaf509ae35beed07486d43.jpg",alt:"La Parce Burger"},marranitas:{src:t.p+"static/marranitas-8a168c0574f2af1f2f16206da7cc05c2.jpg",alt:"Marranitas"},menu_degustation:{src:t.p+"static/menu_degustation-14085797769c3ed1aa812d9ec82d3d59.jpg",alt:"Menu Degustation"},mini_burguers:{src:t.p+"static/mini_burguers-2b50223f2be3f4e878645e6a1ccc969a.jpg",alt:"Mini Burgers"},mini_arepas:{src:t.p+"static/mini_arepas-69bc2f8d114f04f5df284575daabd80a.jpg",alt:"Mini Arepas"},no_image:{src:t.p+"static/no_image-a641770be4c563e18e49fa7485e18e0a.png",alt:"No Image"},patacon_carne:{src:t.p+"static/patacon_carne-d21546f69398f9356304d887d4d29f2e.jpg",alt:"Patacón de Carne"},patacon_chicharron:{src:t.p+"static/patacon_chicharron-47924089cfc99f5945ebcabc62d935af.jpg",alt:"Patacón de Chicharrón"},patacon_pernil:{src:t.p+"static/patacon_pernil-731a10b167eb0e0e4213028e1e1066b0.jpg",alt:"Patacón de Pernil"},patacon_pollo:{src:t.p+"static/patacon_pollo-e991072b1179bb3531574b0576b0637e.jpg",alt:"Patacón de Pollo"},patacon:{src:t.p+"static/patacon-d764b6a51d45afaff405183e99841e33.jpg",alt:"Patacón"},pico_de_gallo_de_mango:{src:t.p+"static/pico_de_gallo_de_mango-52641f5e69b7a82d3f863612987276b7.jpg",alt:"Pico de Gallo de Mango"},poutine_latino_quebecoise:{src:t.p+"static/poutine_latino_quebecoise-e48c7bf7a072565a780a97c155df64fb.jpg",alt:"Poutine Latino Québécoise"},poutine:{src:t.p+"static/poutine-bb699afab447f4dc769b5c46c34a78fa.jpg",alt:"Poutine"},reina_pepiada:{src:t.p+"static/reina_pepiada-198fab42bf0aa1d2c1c58a8c5420ce93.jpg",alt:"Reina Pepiada"},salade_verte:{src:t.p+"static/salade_verte-8808d39e8377437b123a4b3dcf759c9a.jpg",alt:"Salade Verte"},sopita_del_dia:{src:t.p+"static/sopita_del_dia-74ec4a23882e3ef35e58b636d0f35db5.jpg",alt:"Sopita del Día"},soup:{src:t.p+"static/soup-97f862fa38de96bdfe8edd3b280cd9ae.jpg",alt:"Soup"},steak_fries:{src:t.p+"static/steak_fries-42d35ff904b26ed1a1d4ae68c79fd7a7.jpg",alt:"Steak Fries"},tequechapa:{src:t.p+"static/tequechapa-b2c4ff621f6d6b143d3fee7817d714a6.jpg",alt:"Tequechapa"},tequenos_de_guayaba:{src:t.p+"static/tequenos_de_guayaba-ce172733bb4539d3f2db30b30851b0b8.jpg",alt:"Tequeños de Guayaba"},tequenos_de_jalapeno:{src:t.p+"static/tequenos_de_jalapeno-6c45416e8d1a93c1cbcdbe43404b3fdc.jpg",alt:"Tequeños de Jalapeño"},tequenos_de_nutella:{src:t.p+"static/tequenos_de_nutella-9b0ff4de599f3d66ea99283455fb4d1a.jpg",alt:"Tequeños de Nutella"},tequenos_de_platano_maduro:{src:t.p+"static/tequenos_de_platano_maduro-c94a0b042c11b52bc7001fecd8bcccd5.jpg",alt:"Tequeños de Plátano Maduro"},tequenos_de_queso:{src:t.p+"static/tequenos_de_queso-ce172733bb4539d3f2db30b30851b0b8.jpg",alt:"Tequeños de Queso"},trio_patacon:{src:t.p+"static/trio_patacon-a855fde82ad0b0b835c71c75c8b93a39.jpg",alt:"Trío Patacón"},wings:{src:t.p+"static/wings-0e1605be4dc34f21cc38f340bd43f280.jpg",alt:"Wings"},yucas_revoltosas:{src:t.p+"static/yucas_revoltosas-19b1d8c09e72c6204603d6bf7d4bc200.jpg",alt:"Yucas Revoltosas"}}},1440:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var c=t(6540),l=t(8508),r=t(6478);var s=e=>{let{data:a}=e;return c.createElement("header",{className:n.container},c.createElement(l.A,{clubLayout:!1,data:a}),c.createElement("div",{className:"flex sm:hidden absolute right-4"},c.createElement(r.A,{data:a})))};const n={container:"flex flex-row p-4 justify-center sm:justify-end"};var m=t(7212),o=t(3740),i=t(3135),p=t(8756),d=t(560),u=t(5505),f=t(2389);var b=e=>{let{data:a}=e;const{t:t}=(0,f.useTranslation)(),{0:l,1:n}=(0,c.useState)("/drinksMenu/"),{0:b,1:g}=(0,c.useState)("/foodMenu/"),{0:h,1:E}=(0,c.useState)(!1),{0:x,1:w}=(0,c.useState)(!1);return(0,c.useEffect)((()=>{if("undefined"!=typeof window){const e=window.location.pathname,a=e.split("/")[1],t=e.split("/")[2];E("foodMenu"===t),w("drinksMenu"===t),"fr"!==a&&"es"!==a&&"en"!==a||(n(`/${a}/drinksMenu/`),g(`/${a}/foodMenu/`))}}),[]),c.createElement(c.Fragment,null,c.createElement("div",{className:_.containerWrapper},!h&&c.createElement(d.A,{href:b,topPositionValue:50}),!x&&c.createElement(u.A,{href:l,topPositionValue:50}),c.createElement("div",{className:"relative bg-cover bg-center overflow-hidden",style:{backgroundImage:`url(${o.A.BackgroundImage.src})`,backgroundSize:"cover"}},c.createElement("div",{className:"absolute -inset-0 -mt-4 sm:-mt-10 -ml-16 sm:-ml-10 w-28 sm:w-56"},c.createElement("img",{src:o.A.bellpepper.src,alt:o.A.bellpepper.alt,className:"absolute left-4 sm:-left-4 top-0 sm:-top-4"}),c.createElement("img",{src:o.A.planta_2.src,alt:o.A.planta_2.alt,className:"absolute -left-4 sm:left-[8rem] top:0 sm:top-[-2rem]"}),c.createElement("img",{src:o.A.planta_2.src,alt:o.A.planta_2.alt,className:"absolute -left-4 sm:left-[-3rem] top-0 sm:top-[4rem]"}),c.createElement("img",{src:o.A.planta_6.src,alt:o.A.planta_6.alt,className:"absolute left-0 sm:left-[-6rem] top-0 sm:top-[10rem] rotate-45"})),c.createElement(s,{data:a}),c.createElement("div",{className:"flex flex-row justify-center mt-20 sm:mt-0"},c.createElement("div",{className:""},c.createElement("img",{src:o.A.cocktail.src,alt:o.A.cocktail.alt,className:"h-52 sm:h-80"})),c.createElement("div",{className:"h-36"},c.createElement("div",{className:"z-20 relative -mt-4"},c.createElement(i.A,{fillColour:"#fff"})),c.createElement("img",{src:o.A.plate.src,alt:o.A.plate.alt,className:"h-36 sm:h-56 mt-0 sm:-mt-4 -ml-10"}))),c.createElement("div",{className:"hidden sm:flex justify-center my-20"},c.createElement(r.A,{data:a})),c.createElement("div",{className:"relative sm:absolute inline-block h-48 w-32 sm:w-96 -bottom-36 sm:bottom-[-2rem]"},c.createElement("img",{src:o.A.maracuya.src,alt:o.A.maracuya.alt,className:"absolute -left-4 -top-4"}),c.createElement("img",{src:o.A.cherries.src,alt:o.A.cherries.alt,className:"absolute -left-4 -top-4"})),c.createElement("div",{className:"absolute -right-16 sm:right-[-4rem] bottom-4 sm:bottom-[8rem] w-32 sm:w-[16rem] h-[4rem]"},c.createElement("img",{src:o.A.mango.src,alt:o.A.mango.alt,className:"absolute -left-4 -top-4"}))),c.createElement("div",{className:"relative w-full bg-primary py-10"},c.createElement("img",{src:o.A.maracuya.src,alt:o.A.maracuya.alt,className:"mx-auto h-12 sm:h-24 absolute sm:relative -top-8 sm:top-0 left-[40%] sm:left-0"}),c.createElement("h3",{className:"font-bold text-xl text-center text-secondary"},t("content.intro_title")),c.createElement("p",{className:"mx-auto w-full sm:w-1/2 text-center text-white text-sm sm:text-base px-4 sm:px-0"},t("content.intro_paragraph")),c.createElement("div",{className:"absolute h-24 sm:h-48 w-28 sm:w-56 bottom-0 left-[-2rem] overflow-hidden"},c.createElement("img",{src:o.A.planta_4.src,className:"absolute w-32 left-[5rem] z-10 rotate-[180deg] bottom-[2rem]",alt:o.A.planta_4.alt}),c.createElement("img",{src:o.A.limon_2.src,className:"absolute w-48 z-20 bottom-[-4rem]",alt:o.A.limon_2.alt})),c.createElement("div",{className:"absolute overflow-hidden h-64 w-24 sm:w-48 bottom-[-6rem] sm:bottom-[-3rem] right-0"},c.createElement("img",{src:o.A.limon_2.src,className:"absolute w-48 z-10 right-[-7rem] bottom-[3rem]",alt:o.A.limon_2.alt}),c.createElement("img",{src:o.A.planta_3.src,className:"absolute w-32 right-[-2rem] z-20 bottom-1",alt:o.A.planta_3.alt}),c.createElement("img",{src:o.A.limon_3.src,className:"absolute w-36 z-40 right-[-2rem] bottom-[3rem]",alt:o.A.limon_3.alt}),c.createElement("img",{src:o.A.planta_4.src,className:"absolute w-32 right-[-4rem] bottom-[-1rem] z-30 rotate-[10deg]",alt:o.A.planta_4.alt}))),c.createElement("div",{className:"relative bg-secondary py-10"},c.createElement("div",{className:"absolute flex flex-col left-[-2rem] top-[-3rem] z-20"},c.createElement("img",{src:o.A.planta_1.src,className:"w-24 sm:w-48 rotate-[180deg] -ml-4 mt-4",alt:o.A.planta_1.alt}),c.createElement("img",{src:o.A.planta_5.src,className:"w-12 sm:w-24 mt-4 sm:-mt-12",alt:o.A.planta_5.alt}),c.createElement("img",{src:o.A.cocktail_3.src,className:"w-24 mt-4",alt:o.A.cocktail_3.alt})),c.createElement("h4",{className:"text-center text-primary px-4 sm:px-0 mx-auto w-full sm:w-1/2 font-bold"},t("content.index_title_second_block")),c.createElement("p",{className:"text-center text-white px-4 sm:px-0 mx-auto text-sm sm:text-base w-full sm:w-1/2 my-8"},t("content.content_title_second_block")),c.createElement("div",{className:"flex flex-col sm:flex-row justify-center gap-5"},c.createElement("img",{src:p.A.american_burger.src,className:"w-48 mx-auto",alt:o.A.home_1.alt}),c.createElement("img",{src:p.A.charcutterie.src,className:"w-48 mx-auto",alt:o.A.home_2.alt}),c.createElement("img",{src:p.A.mini_burguers.src,className:"w-48 mx-auto",alt:o.A.home_3.alt})),c.createElement("p",{className:"text-white text-center w-full sm:w-1/2 mx-auto my-8"},t("content.content_third_block")),c.createElement("div",{className:"absolute w-28 h-96 sm:h-64 right-0 top-12 overflow-hidden"},c.createElement("img",{src:o.A.cocktail_2.src,className:"relative w-32 -right-16 sw:right-[-2rem] top-60 sm:top-16",alt:o.A.cocktail_2.alt}))),c.createElement("div",{className:"w-full relative overflow-hidden bg-primary "},c.createElement("div",{className:"absolute top-[-3rem] left-[30%]"},c.createElement("img",{src:o.A.peach.src,className:"w-32",alt:o.A.peach.alt})),c.createElement(m.A,{isLatinClub:!1,data:a}),c.createElement("div",{className:"absolute min-w-[50rem] h-16 z-40 -mt-16"},c.createElement("img",{src:o.A.maracuya_2.src,alt:o.A.maracuya_2.alt,className:"absolute right-0 w-36 "})))))};const _={containerWrapper:"flex flex-col w-full bg-secondary",container:"bg-fixed"}}}]);
//# sourceMappingURL=868a43b85253c9148c2b4de27a88ffc0edc3bbf6-a9bca3940dd4b98f0567.js.map