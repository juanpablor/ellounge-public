"use strict";(self.webpackChunkEl_Lounge_Latin_Club=self.webpackChunkEl_Lounge_Latin_Club||[]).push([[313,484],{7212:function(e,t,a){var l=a(6540),r=a(4794),m=a(3135),s=a(4755),n=a(1223),c=a(6973),o=a(658),i=a(3740);t.A=e=>{let{data:t,isLatinClub:a}=e;const{t:p}=(0,s.useTranslation)();return l.createElement("footer",{className:u.container},l.createElement("div",{className:"flex flex-col sm:flex-row w-full justify-around"},l.createElement(r.Link,{to:"/",className:"px-8 sm:px-32 py-8 sm:py-0"},l.createElement(m.A,{fillColour:"#fff"})),l.createElement("ul",{className:"px-4 sm:px-16 py-8 sm:py-0"},t&&t.companyDetails?l.createElement(l.Fragment,null,l.createElement("li",null,t.companyDetails.address),l.createElement("li",null,t.companyDetails.phone),l.createElement("li",null,t.companyDetails.city,", ",t.companyDetails.province,", ",t.companyDetails.postalCode),l.createElement("li",null,t.companyDetails.email)):l.createElement("li",null,p("loading"))),l.createElement("div",{className:"border-l-white border-l-0 sm:border-l-2 border-r-0 sm:border-r-white sm:border-r-2 px-4 sm:px-16"},l.createElement("h3",{className:"font-semibold"},p("hours.title")),l.createElement("ul",null,!a&&l.createElement("li",null,p("hours.mondayLounge")),!a&&l.createElement("li",null,p("hours.wednesdayLounge")),!a&&l.createElement("li",null,p("hours.thursdayLounge")),!a&&l.createElement("li",null,p("hours.fridayLounge")),!a&&l.createElement("li",null,p("hours.saturdayLounge")),a&&l.createElement("li",null,p("hours.thursdayLatinclub")),a&&l.createElement("li",null,p("hours.fridayLatinclub")),a&&l.createElement("li",null,p("hours.saturdayLatinclub")))),t&&t.companyDetails?l.createElement("div",{className:"flex flex-row sm:flex-col mx-12 pt-8 gap-4 self-center "},l.createElement("a",{href:t.companyDetails.whatsApp,target:"_blank",rel:"noopener noreferrer"},l.createElement(o.$Z7,{className:"text-white hover:text-latinFucsia"})),l.createElement("a",{href:t.companyDetails.instagram,target:"_blank",rel:"noopener noreferrer"},l.createElement(n.g0x,{className:"text-white hover:text-latinFucsia"})),l.createElement("a",{href:t.companyDetails.facebook,target:"_blank",rel:"noopener noreferrer"},l.createElement(c.MkP,{className:"text-white hover:text-latinFucsia"}))):l.createElement("li",null,p("loading"))),l.createElement("div",{className:"text-center mt-8"},l.createElement("p",null,(new Date).getFullYear()," © ",p("content.copyright_footer"))),l.createElement("div",{className:"absolute w-[18rem] h-[26rem]"},l.createElement("img",{className:"hidden sm:flex absolute z-50 top-48 rotate-[-5deg] left-4",src:i.A.cocktail_4.src,alt:i.A.cocktail_4.alt})))};const u={container:"flex flex-col justify-around p-4 text-white py-8 relative overflow-hidden"}},271:function(e,t,a){var l=a(6540),r=a(8154),m=a(4755);t.A=e=>{let{title:t}=e;const{t:a}=(0,m.useTranslation)();return l.createElement(r.m,null,l.createElement("title",null,a(t)))}},2511:function(e,t,a){a.r(t);var l=a(6540),r=a(1440),m=a(4755),s=a(271);const n=a(8526)[0],c="Food Menu";t.default=()=>l.createElement(r.default,{data:n},l.createElement(s.A,{title:c}),l.createElement(m.Trans,null,c))},1440:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(6540),r=a(8508),m=a(6478);var s=e=>{let{data:t}=e;return l.createElement("header",{className:n.container},l.createElement(r.A,{clubLayout:!1,data:t}),l.createElement("div",{className:"flex sm:hidden absolute right-4"},l.createElement(m.A,{data:t})))};const n={container:"flex flex-row p-4 justify-center sm:justify-end"};var c=a(7212),o=a(3740),i=a(3135),u=a(8756),p=a(560),d=a(5505),f=a(2389),E=a(1042);var h=e=>{let{data:t}=e;const{t:a}=(0,f.useTranslation)(),{0:r,1:n}=(0,l.useState)("/drinksMenu/"),{0:h,1:g}=(0,l.useState)("/foodMenu/"),{0:w,1:x}=(0,l.useState)(!1),{0:A,1:N}=(0,l.useState)(!1);return(0,l.useEffect)((()=>{if("undefined"!=typeof window){const e=window.location.pathname,t=e.split("/")[1],a=e.split("/")[2];x("foodMenu"===a),N("drinksMenu"===a),"fr"!==t&&"es"!==t&&"en"!==t||(n(`/${t}/drinksMenu/`),g(`/${t}/foodMenu/`))}}),[]),l.createElement(l.Fragment,null,t&&l.createElement(l.Fragment,null,l.createElement(E.A,{data:t.companyDetails}),l.createElement("div",{className:b.containerWrapper},!w&&l.createElement(p.A,{href:h,topPositionValue:50}),!A&&l.createElement(d.A,{href:r,topPositionValue:50}),l.createElement("div",{className:"relative bg-cover bg-center overflow-hidden",style:{backgroundImage:`url(${o.A.BackgroundImage.src})`,backgroundSize:"cover"}},l.createElement("div",{className:"absolute -inset-0 -mt-4 sm:-mt-10 -ml-16 sm:-ml-10 w-28 sm:w-56"},l.createElement("img",{src:o.A.bellpepper.src,alt:o.A.bellpepper.alt,className:"absolute left-4 sm:-left-4 top-0 sm:-top-4"}),l.createElement("img",{src:o.A.planta_2.src,alt:o.A.planta_2.alt,className:"absolute -left-4 sm:left-[8rem] top:0 sm:top-[-2rem]"}),l.createElement("img",{src:o.A.planta_2.src,alt:o.A.planta_2.alt,className:"absolute -left-4 sm:left-[-3rem] top-0 sm:top-[4rem]"}),l.createElement("img",{src:o.A.planta_6.src,alt:o.A.planta_6.alt,className:"absolute left-0 sm:left-[-6rem] top-0 sm:top-[10rem] rotate-45"})),l.createElement(s,{data:t}),l.createElement("div",{className:"flex flex-row justify-center mt-20 sm:mt-0"},l.createElement("div",{className:""},l.createElement("img",{src:o.A.cocktail.src,alt:o.A.cocktail.alt,className:"h-52 sm:h-80"})),l.createElement("div",{className:"h-36"},l.createElement("div",{className:"z-20 relative -mt-4"},l.createElement(i.A,{fillColour:"#fff"})),l.createElement("img",{src:o.A.plate.src,alt:o.A.plate.alt,className:"h-36 sm:h-56 mt-0 sm:-mt-4 -ml-10"}))),l.createElement("div",{className:"hidden sm:flex justify-center my-20"},l.createElement(m.A,{data:t})),l.createElement("div",{className:"relative sm:absolute inline-block h-48 w-32 sm:w-96 -bottom-36 sm:bottom-[-2rem]"},l.createElement("img",{src:o.A.maracuya.src,alt:o.A.maracuya.alt,className:"absolute -left-4 -top-4"}),l.createElement("img",{src:o.A.cherries.src,alt:o.A.cherries.alt,className:"absolute -left-4 -top-4"})),l.createElement("div",{className:"absolute -right-16 sm:right-[-4rem] bottom-4 sm:bottom-[8rem] w-32 sm:w-[16rem] h-[4rem]"},l.createElement("img",{src:o.A.mango.src,alt:o.A.mango.alt,className:"absolute -left-4 -top-4"}))),l.createElement("div",{className:"relative w-full bg-primary py-10"},l.createElement("img",{src:o.A.maracuya.src,alt:o.A.maracuya.alt,className:"mx-auto h-12 sm:h-24 absolute sm:relative -top-8 sm:top-0 left-[40%] sm:left-0"}),l.createElement("h3",{className:"font-bold text-xl text-center text-secondary"},a("content.intro_title")),l.createElement("p",{className:"mx-auto w-full sm:w-1/2 text-center text-white text-sm sm:text-base px-4 sm:px-0"},a("content.intro_paragraph")),l.createElement("div",{className:"absolute h-24 sm:h-48 w-28 sm:w-56 bottom-0 left-[-2rem] overflow-hidden"},l.createElement("img",{src:o.A.planta_4.src,className:"absolute w-32 left-[5rem] z-10 rotate-[180deg] bottom-[2rem]",alt:o.A.planta_4.alt}),l.createElement("img",{src:o.A.limon_2.src,className:"absolute w-48 z-20 bottom-[-4rem]",alt:o.A.limon_2.alt})),l.createElement("div",{className:"absolute overflow-hidden h-64 w-24 sm:w-48 bottom-[-6rem] sm:bottom-[-3rem] right-0"},l.createElement("img",{src:o.A.limon_2.src,className:"absolute w-48 z-10 right-[-7rem] bottom-[3rem]",alt:o.A.limon_2.alt}),l.createElement("img",{src:o.A.planta_3.src,className:"absolute w-32 right-[-2rem] z-20 bottom-1",alt:o.A.planta_3.alt}),l.createElement("img",{src:o.A.limon_3.src,className:"absolute w-36 z-40 right-[-2rem] bottom-[3rem]",alt:o.A.limon_3.alt}),l.createElement("img",{src:o.A.planta_4.src,className:"absolute w-32 right-[-4rem] bottom-[-1rem] z-30 rotate-[10deg]",alt:o.A.planta_4.alt}))),l.createElement("div",{className:"relative bg-secondary py-10"},l.createElement("div",{className:"absolute flex flex-col left-[-2rem] top-[-3rem] z-20"},l.createElement("img",{src:o.A.planta_1.src,className:"w-24 sm:w-48 rotate-[180deg] -ml-4 mt-4",alt:o.A.planta_1.alt}),l.createElement("img",{src:o.A.planta_5.src,className:"w-12 sm:w-24 mt-4 sm:-mt-12",alt:o.A.planta_5.alt}),l.createElement("img",{src:o.A.cocktail_3.src,className:"w-24 mt-4",alt:o.A.cocktail_3.alt})),l.createElement("h4",{className:"text-center text-primary px-4 sm:px-0 mx-auto w-full sm:w-1/2 font-bold"},a("content.index_title_second_block")),l.createElement("p",{className:"text-center text-white px-4 sm:px-0 mx-auto text-sm sm:text-base w-full sm:w-1/2 my-8"},a("content.content_title_second_block")),l.createElement("div",{className:"flex flex-col sm:flex-row justify-center gap-5"},l.createElement("img",{src:u.A.american_burger.src,className:"w-48 mx-auto",alt:o.A.home_1.alt}),l.createElement("img",{src:u.A.charcutterie.src,className:"w-48 mx-auto",alt:o.A.home_2.alt}),l.createElement("img",{src:u.A.mini_burguers.src,className:"w-48 mx-auto",alt:o.A.home_3.alt})),l.createElement("p",{className:"text-white text-center w-full sm:w-1/2 mx-auto my-8"},a("content.content_third_block")),l.createElement("div",{className:"absolute w-28 h-96 sm:h-64 right-0 top-12 overflow-hidden"},l.createElement("img",{src:o.A.cocktail_2.src,className:"relative w-32 -right-16 sw:right-[-2rem] top-60 sm:top-16",alt:o.A.cocktail_2.alt}))),l.createElement("div",{className:"w-full relative overflow-hidden bg-primary "},l.createElement("div",{className:"absolute top-[-3rem] left-[30%]"},l.createElement("img",{src:o.A.peach.src,className:"w-32",alt:o.A.peach.alt})),l.createElement(c.A,{isLatinClub:!1,data:t}),l.createElement("div",{className:"absolute min-w-[50rem] h-16 z-40 -mt-16"},l.createElement("img",{src:o.A.maracuya_2.src,alt:o.A.maracuya_2.alt,className:"absolute right-0 w-36 "}))))),";")};const b={containerWrapper:"flex flex-col w-full bg-secondary",container:"bg-fixed"}},8526:function(e){e.exports=JSON.parse('[{"companyName":"El Lounge","name":"El Lounge Latin Club","companyDetails":{"address":"1735 Rue Saint Denis","city":"Montreal","country":"Canada","phone":"514 474 4BAR (227)","email":"info@pointbarlounge.ca","whatsApp":"https://wa.me/15144744227","instagram":"https://instagram.com/pointbarlounge","facebook":"http://facebook.com/pointbarloungemtl","postalCode":"H2X 3K4","url":"https://ellounge.ca","province":"Quebec"},"menu":["home","elLounge","foodMenu","latinClub","eventsDay"],"clubMenu":["home","latinClub","drinksMenu","eventsClub","visitUs"]}]')}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-43a1409acad46cb28c02.js.map