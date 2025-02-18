"use strict";(self.webpackChunkEl_Lounge_Latin_Club=self.webpackChunkEl_Lounge_Latin_Club||[]).push([[886,35],{9354:function(e,a,t){var i=t(6540),l=t(4755),c=t(4794),n=t(6462),r=t(3);a.A=e=>{let{data:a}=e;const{t:t}=(0,l.useTranslation)(),{pathname:o}=(0,n.useLocation)(),{0:m,1:p}=(0,i.useState)(!1);if(null==a||!a.clubMenu||null==a||!a.companyDetails)return null;const g=o.replace(/^\/(es|en|fr)\//,"/").replace(/\/$/,"");return i.createElement("nav",{className:s.container},i.createElement("button",{onClick:()=>p(!m),className:s.burgerButton},m?i.createElement(r.yGN,{className:"text-white fixed right-4 z-[70] top-4",size:24}):i.createElement(r.ND1,{className:"text-white",size:24})),i.createElement("ul",{className:`${s.buttonsWrapper} ${m?s.menuOpen:s.menuClosed}`},a.clubMenu.map(((e,a)=>{const n="home"===e?"/":`/${e}`.replace(/\/$/,""),r=g===n;return i.createElement("li",{key:a,className:s.buttonsContainer},i.createElement(c.Link,{to:n,className:`${s.buttons} ${r?"text-shadow-fucsia !text-latinFucsia":""}`},i.createElement(l.Trans,{i18nKey:`menuDrink.${e}`},t(`menuDrink.${e}`))))}))))};const s={container:"inline-block justify-between items-center px-4 py-2 rounded-full relative",burgerButton:"md:hidden block text-white focus:outline-none",buttonsWrapper:"flex flex-col md:flex-row justify-evenly items-center w-full md:w-auto fixed bg-latinClub sm:bg-transparent sm:relative left-0 top-0 py-8 sm:py-0 z-30",buttonsContainer:"my-4 sm:my-0",buttons:"text-white px-8 py-2 hover:underline",menuOpen:"block md:flex",menuClosed:"hidden md:flex"}},3740:function(e,a,t){t.d(a,{A:function(){return i}});var i={BackgroundClubImage:{src:t.p+"static/club_background-0256e5da859b5871cb36a3b4f207d328.png",alt:"Club background image"},BackgroundImage:{src:t.p+"static/leaves_background-db986fee4ee84ed48f55e8a4820b2c15.png",alt:"Leaves background image"},BackgroundTexture:{src:t.p+"static/club_background_texture-7e5deed65c1a1d1cc77220c014b87bb3.png",alt:"Club background texture"},beer:{src:t.p+"static/beer-4b0041988f001571d859177bb2df2147.png",alt:"Beer image"},bellpepper:{src:t.p+"static/pimenton-62b080df4a242395eb8dd665e0f02e42.png",alt:"Bell pepper image"},bottles:{src:t.p+"static/bottle-cfb6c8487962f1fca3df0327d80459f8.png",alt:"Bottles image"},cherries:{src:t.p+"static/cerezas-8e59aa29c319ea115494de1d4fa604e8.png",alt:"Cherries image"},club_background_gray:{src:t.p+"static/club_background_gray-c1eec8aab621c7682cbbe5bd666b2ed0.png",alt:"Gray club background"},cocktail:{src:t.p+"static/cocktail_red-a5976229a588070fbec3b34adff40da4.png",alt:"Red cocktail image"},cocktail_2:{src:t.p+"static/cocktail_2-3f9a47c84469a7da18c531364062d932.png",alt:"Second cocktail image"},cocktail_3:{src:t.p+"static/cocktail_3-684dd180cf68d0b2cec1373589f0591f.png",alt:"Third cocktail image"},cocktail_4:{src:t.p+"static/cocktail_4-22a0bb82b4745b427b79d6108b0f4193.png",alt:"Fourth cocktail image"},cocktail_5:{src:t.p+"static/cocktail_5-0abb1650392c01b12f55d7b7a066a701.png",alt:"Fifth cocktail image"},cocktail_wireframe:{src:t.p+"static/cocktail_wireframe-a85a251bc164e89cb4cbbd3ceb039222.png",alt:"Wireframe cocktail image"},cocktail_wireframe_2:{src:t.p+"static/cocktail_wireframe_2-d881370010c39dc75a9d28d824a6ff87.png",alt:"Second wireframe cocktail image"},coffee:{src:t.p+"static/coffee-66e42b53680e369711c29d249c6db540.png",alt:"Coffee image"},elloungeBg:{src:t.p+"static/elloungeBg-7531641ff67513eebd279458c9d0c51a.jpg",alt:"El Lounge background image"},events_1:{src:t.p+"static/events_1-9513db41ae5c69535cf5fe10f7bd2c0b.jpg",alt:"First event image"},events_2:{src:t.p+"static/events_2-ae01d2ac5b4b8e30b641e0f55481f6f7.jpg",alt:"Second event image"},flower_1:{src:t.p+"static/flower_1-df1a9a467c8e5d7bca48fca0eacddfef.png",alt:"First flower image"},home_1:{src:t.p+"static/home_1-8fa5029dfd4cfa38e7524d024738f4d9.jpg",alt:"First cocktail image"},home_2:{src:t.p+"static/home_2-958c09c70758decc28d1823023d14eaf.jpg",alt:"Second cocktail image"},home_3:{src:t.p+"static/home_3-c367fc052ec1157daf0f05058f9f2296.jpg",alt:"Third cocktail image"},juice:{src:t.p+"static/juice-a5f21ea3cf47f5da8988cd4a5d35d03a.png",alt:"Juice image"},latin_club_1:{src:t.p+"static/latin_club_1-be80e6b88cc1e7ae33b165848bdf5695.jpg",alt:"First Latin club image"},latin_club_2:{src:t.p+"static/latin_club_2-f407ecb861808f5e375b420afc2adf8a.jpg",alt:"Second Latin club image"},latin_club_3:{src:t.p+"static/latin_club_3-3d8037513742ffd2b62520e77d917ad3.jpg",alt:"Third Latin club image"},latinClubBg:{src:t.p+"static/latinClubBg-68d8aea3b53575a951472912d5d3c42f.jpg",alt:"Latin club background image"},lemonade:{src:t.p+"static/lemonade-cffa4ed5548964750ca0bcbbfabcc349.png",alt:"Lemonade image"},limon_2:{src:t.p+"static/limon_2-bf60ad43aa2d751ac83f110e92106003.png",alt:"Second lemon image"},limon_3:{src:t.p+"static/limon_3-73cc4c623e20aec562211c260e893374.png",alt:"Third lemon image"},mango:{src:t.p+"static/mango-b75bec0238f41e8d734720d571d017ee.png",alt:"Mango image"},maracuya:{src:t.p+"static/maracuya-dea80ff3a02f3ca954e9e836a6ced44a.png",alt:"Maracuya image"},maracuya_2:{src:t.p+"static/maracuya_2-d23c17347e802627be3132b308dc8c4f.png",alt:"Second maracuya image"},peach:{src:t.p+"static/peach-482a533e6d6747262b244a7699dad699.png",alt:"Peach image"},planta_1:{src:t.p+"static/planta_1-6f270e2a3532909634ce375ce1430ec2.png",alt:"First plant image"},planta_2:{src:t.p+"static/planta_2-4deb4c5ccd4ed25dce794a1c27997372.png",alt:"Second plant image"},planta_3:{src:t.p+"static/planta_3-4c14796dfd6533afedae404469add278.png",alt:"Third plant image"},planta_4:{src:t.p+"static/planta_4-9ca68b206b86c1d72c00a4b47613e452.png",alt:"Fourth plant image"},planta_5:{src:t.p+"static/planta_5-ffe51d2931261662553731099bf7d480.png",alt:"Fifth plant image"},planta_6:{src:t.p+"static/planta_6-2226cde55f214aff4e07edc125885069.png",alt:"Sixth plant image"},planta_7:{src:t.p+"static/planta_7-9a43c5e2402a2d0e1cf58ee8e3fa8826.png",alt:"Seventh plant image"},plantasFlamingo:{src:t.p+"static/plantas_flamingo-15f401e8425af5bfa99cf5ba0aaaf696.png",alt:"Flamingo plants image"},plate:{src:t.p+"static/plate-5ff52e287559062b13ef30425bb76379.png",alt:"Plate image"},shot:{src:t.p+"static/shot-3e529636f132998411f941ccf3d8fb0e.png",alt:"Shot image"},wine:{src:t.p+"static/wine-d0e6af1c9549497d967ca773ab89bad2.png",alt:"Wine image"}}},315:function(e,a,t){t.r(a),t.d(a,{default:function(){return P}});var i=t(6540),l=t(8154),c=t(4794),n=t(4707),r=JSON.parse('{"cocktailsSignature":[{"name":"Passion Duck ","subtitle":"(Citrique+Sucré / Citric+Sweet)","price":"23","image":"passion_duck"},{"name":"El Lounge","subtitle":"(Fort+tropical / Strong+tropical)","price":"26","image":"el_lounge"},{"name":"Smokey Melon Margarita","subtitle":"","price":"21","image":"smokey_melon_margarita"},{"name":"Patron Margarita","subtitle":"","price":"23","image":"patron_margarita"},{"name":"Patron Margarita Tower","subtitle":"","price":"75","image":"patron_margarita_tower"},{"name":"Dragon Drop","subtitle":"","price":"21","image":"dragon_drop"},{"name":"Pasion de Mezcal ","subtitle":"(Fort+Fruté / Strong+Fruty)","price":"25","image":"pasion_de_mezcal"}],"houseCocktails":[{"name":"Mojitos","price":"17","image":"mojitos"},{"name":"Margaritas","price":"16","image":"margaritas"},{"name":"Piña Colada","price":"16","image":"pina_colada"},{"name":"Daiquiri","price":"16","image":"daiquiri"},{"name":"Yuzu Melon","subtitle":"","price":"22","image":"yuzu_melon"},{"name":"Medellin Mule","subtitle":"(Fusion colombienne et russe / Colombian and Russian fusion)","price":"19","image":"medellin_mule"},{"name":"Moscow mule","price":"16","image":"moscow_mule"},{"name":"Patron espresso Martini","price":"23","image":"patron_espresso_martini"},{"name":"Paloma","price":"17","image":"paloma"},{"name":"Mezcalita","price":"23","image":"mezcalita"}],"classicCocktails":[{"name":"Gin tonic","price":"16","image":"gin_tonic"},{"name":"Vodka Tonic","price":"16","image":"vodka_tonic"},{"name":"Tequila Soda","price":"16","image":"tequila_soda"},{"name":"Cuba Libre","price":"16","image":"cuba_libre"},{"name":"Long Island Ice tea","price":"18","image":"long_island_ice_tea"},{"name":"Old Fashioned","subtitle":"(humado +2$)","price":"17","image":"old_fashioned"},{"name":"Negroni","subtitle":"(humado +2$)","price":"17","image":"negroni"},{"name":"Mai Tai","price":"20","image":"mai_tai"},{"name":"Martini","price":"18","image":"martini"},{"name":"Expresso Martini","price":"19","image":"expresso_martini"},{"name":"Litchi Martini","price":"19","image":"litchi_martini"},{"name":"Pornstar martini","price":"20","image":"porn_star_martini"},{"name":"Cosmopolitan","price":"17","image":"cosmopolitan"},{"name":"Sex on the Beach","price":"16","image":"sex_on_the_beach"},{"name":"Tequila sunrise","price":"16","image":"tequila_sunrise"},{"name":"Amaretto Sour","price":"17","image":"amaretto_sour"},{"name":"Pisco Sour","price":"17","image":"pisco_sour"},{"name":"Whiskey sour","price":"17","image":"whiskey_sour"},{"name":"Caipirinha","price":"18","image":"caipirinha"},{"name":"Aperol Spritz","price":"16","image":"aperol_spritz"},{"name":"Bloody Caesar","price":"16","image":"bloody_caesar"},{"name":"Michelada Cubana","price":"16","image":"michelada_cubana"},{"name":"Chelada","price":"12","image":"chelada"}],"shots":[{"name":"Ron Diplomatico Reserva","price":"11","image":"ron_diplomatico_reserva_shot","type":"SHOT"},{"name":"Ron Diplomatico Mantuano","price":"9","image":"ron_diplomatico_mantuano_shot","type":"SHOT"},{"name":"Flor de Caña 12 años","price":"12","image":"flor_de_cana_shot","type":"SHOT"},{"name":"Ron Zacapa","price":"14","image":"ron_zacapa_shot","type":"SHOT"},{"name":"Ron Plantation","price":"14","image":"ron_plantation_shot","type":"SHOT"},{"name":"Vodka Gray Goose","price":"10","image":"vodka_gray_goose_shot","type":"SHOT"},{"name":"Tequila 1800 Silver","price":"9","image":"tequila_1800_silver_shot","type":"SHOT"},{"name":"Tequila 1800 Reposado","price":"11","image":"tequila_1800_reposado_shot","type":"SHOT"},{"name":"Tequila Patron Silver","price":"12","image":"tequila_patron_silver_shot","type":"SHOT"},{"name":"Tequila Don Julio Blanco","price":"14","image":"tequila_don_julio_blanco_shot","type":"SHOT"},{"name":"Mezcal","price":"12","image":"mezcal_shot","type":"SHOT"},{"name":"Whisky Proper twelve","price":"9","image":"whisky_proper_twelve_shot","type":"SHOT"},{"name":"Whisky Jack Daniel\'s","price":"9","image":"whisky_jack_daniels_shot","type":"SHOT"},{"name":"Whisky Johnnie Walker Black Label","price":"11","image":"whisky_johnnie_walker_black_label_shot","type":"SHOT"},{"name":"Whisky Chivas Regal 12","price":"11","image":"whisky_chivas_regal_12_shot","type":"SHOT"},{"name":"Whisky Glenfiddich 12","price":"12","image":"whisky_glenfiddich_12_shot","type":"SHOT"},{"name":"Absente","price":"12","image":"absente_shot","type":"SHOT"},{"name":"Aguardiente","price":"8","image":"aguardiente_shot","type":"SHOT"},{"name":"Baileys / Disaronno","price":"7","image":"baileys_disaronno_shot","type":"SHOT"},{"name":"Jaggermeister","price":"8","image":"jaggermeister_shot","type":"SHOT"},{"name":"Pisco","price":"9","image":"pisco_shot","type":"SHOT"},{"name":"Sambuca","price":"10","image":"sambuca_shot","type":"SHOT"}],"glass":[{"name":"Ron Diplomatico Reserva","price":"15","image":"ron_diplomatico_reserva_glass","type":"GLASS"},{"name":"Ron Diplomatico Mantuano","price":"13","image":"ron_diplomatico_mantuano_glass","type":"GLASS"},{"name":"Ron Plantation","price":"16","image":"ron_plantation_glass","type":"GLASS"},{"name":"Ron Zacapa 23","price":"17","image":"ron_zacapa_23_glass","type":"GLASS"},{"name":"Whisky Proper twelve","price":"13","image":"whisky_proper_twelve_glass","type":"GLASS"},{"name":"Whisky Jack Daniel\'s","price":"12","image":"whisky_jack_daniels_glass","type":"GLASS"},{"name":"Whisky Johnnie Walker Black Label","price":"15","image":"whisky_johnnie_walker_black_label_glass","type":"GLASS"},{"name":"Whisky Glenfiddich 12","price":"16","image":"whisky_glenfiddich_12_glass","type":"GLASS"},{"name":"Whisky Chivas Regal 12 years","price":"15","image":"whisky_chivas_regal_12_years_glass","type":"GLASS"},{"name":"Vodka Gray Goose","price":"15","image":"vodka_gray_goose_glass","type":"GLASS"},{"name":"Gin Bombay","price":"11","image":"gin_bombay_glass","type":"GLASS"},{"name":"Gin Tanqueray","price":"13","image":"gin_tanqueray_glass","type":"GLASS"},{"name":"Gin Hendrick\'s","price":"14","image":"gin_hendrick\'s_glass","type":"GLASS"},{"name":"Gin Ungava Ginger","price":"11","image":"gin_ungava_ginger_glass","type":"GLASS"},{"name":"Mezcal","price":"15","image":"mezcal_glass","type":"GLASS"},{"name":"Absente","price":"15","image":"absente_glass","type":"GLASS"},{"name":"Baileys","price":"10","image":"baileys_glass","type":"GLASS"},{"name":"Brandy XO","price":"14","image":"brandy_xo_glass","type":"GLASS"},{"name":"Cognac","price":"18","image":"cognac_glass","type":"GLASS"},{"name":"Fernet","price":"11","image":"fernet_glass","type":"GLASS"},{"name":"Grand Marnier","price":"13","image":"grand_marnier_glass","type":"GLASS"},{"name":"Pisco","price":"10","image":"pisco_glass","type":"GLASS"}],"houseShots":[{"name":"Pandita","price":"10","image":"pandita"},{"name":"Pitufo","price":"10","image":"pitufo"},{"name":"Uppercut","price":"11","image":"uppercut"},{"name":"Redbull Bomb","price":"11","image":"redbull_bomb"},{"name":"Pornstar","price":"9","image":"pornstar"},{"name":"Russian Rulette","price":"10","image":"russian_rulette"},{"name":"B52","price":"11","image":"b52"},{"name":"Baby Mango","price":"9","image":"baby_mango"},{"name":"Litchi Bomb","price":"9","image":"litchi_bomb"},{"name":"Fireball","price":"9","image":"fireball"}],"bottles":[{"name":"Ron Diplomático Reserva Exclusiva","price":"250","image":"ron_diplomático_reserva_exclusiva"},{"name":"Ron Diplomatico Mantuano","price":"200","image":"ron_diplomatico_mantuano"},{"name":"Vodka Gray Goose","price":"220","image":"vodka_gray_goose"},{"name":"Vodka Ciroc","price":"200","image":"vodka_ciroc"},{"name":"Tequila 1800 Silver","price":"195","image":"tequila_1800_silver"},{"name":"Ron Plantation XO","price":"280","image":"ron_plantation_xo"},{"name":"Ron Bacardi Reserva 8","price":"200","image":"ron_bacardi_reserva_8"},{"name":"Ron Zacapa 23","price":"320","image":"ron_zacapa_23"},{"name":"Flor de Caña 12 años","price":"250","image":"flor_de_cana"},{"name":"Tequila Patron Silver","price":"260","image":"tequila_patron_silver"},{"name":"Tequila Patron Reposado","price":"300","image":"tequila_patron_reposado"},{"name":"Tequila 1800 Reposado","price":"210","image":"tequila_1800_reposado"},{"name":"Tequila 1800 Añejo","price":"250","image":"tequila_1800_añejo"},{"name":"Tequila Don Julio Reposado","price":"330","image":"tequila_don_julio_reposado"},{"name":"Tequila don Julio Blanco","price":"270","image":"tequila_don_julio_blanco"},{"name":"Mezcal","price":"250","image":"mezcal"},{"name":"Whisky Jack Daniel\'s","price":"180","image":"whisky_jack_daniels"},{"name":"Whisky Johnnie Walker Black Label","price":"250","image":"whisky_johnnie_walker_black_label"},{"name":"Whisky Glenfiddich 12","price":"280","image":"whisky_glenfiddich_12"},{"name":"Whisky Chivas Regal 12 years","price":"250","image":"whisky_chivas_regal_12_years"},{"name":"Whisky Proper twelve","price":"190","image":"whisky_proper_twelve"},{"name":"Gin Bombay","price":"200","image":"gin_bombay"},{"name":"Gin Hendrick\'s","price":"250","image":"gin_hendricks"},{"name":"Pisco","price":"200","image":"pisco"},{"name":"Aguardiente","price":"180","image":"aguardiente"},{"name":"Brandy XO","price":"180","image":"brandy_xo"},{"name":"Champagne Nicolas Feuillatte Réserve Exclusive","price":"190","image":"bottle_champagne_nicolas_feuillatte_reserve_exclusive"},{"name":"Champagne Veuve De Clicquot","price":"240","image":"champagne_veuve_de_clicquot"}],"beer":[{"name":"Sapporo","price":"10/27","image":"sapporo"},{"name":"Sleeman Clear 2.0","price":"8/22","image":"sleeman_clear"},{"name":"Kronenbourg Blanc 1664","price":"10/27","image":"kronenbourg_blanc_1664"},{"name":"Sleeman Red/Rousse","price":"10/25","image":"sleeman_red"},{"name":"Unibroue HIPL","price":"10/25","image":"unibroue_hipl"},{"name":"fin du monde","price":"10/26","image":"fin_du_monde"},{"name":"Corona","price":"10","image":"corona"},{"name":"Corona","price":"10","image":"corona_0"},{"name":"Guinness","price":"10","image":"guinness"},{"name":"Guinness","price":"10","image":"guinness_0"}],"sangrias":[{"name":"Tinto de verano ","price":"38 / 15","image":"tinto_de_verano"},{"name":"Blame the Aperol","price":"38 / 15","image":"blame_the_aperol"}],"wine":[{"name":"Pino Noir Bicicleta","price":"65 / 12","image":"pino_noir_bicicleta"},{"name":"Zonin Valpolicella Ripasso","price":"80 / 15","image":"zonin_valpolicella_ripasso"},{"name":"Le Focaie : Rocca di Montemassi","price":"75 / 15","image":"le_focaie_rocca_di_montemassi"},{"name":"Le Naturel","price":"75 / 15","image":"le_naturel"},{"name":"Cabolani Pinot Grigio","price":"80 / 16","image":"cabolani_pinot_grigio"},{"name":"La Hitaire Les Tours","price":"75 / 15","image":"la_hitaire_les_tours"},{"name":"La Hitaire Chardonnay","price":"75 / 15","image":"la_hitaire_chardonnay"},{"name":"Bourgogne Aligote","price":"80 / 15","image":"bourgogne_aligote"},{"name":"Cote des Roses Syrah","price":"75 / 15","image":"cote_des_roses_syrah"},{"name":"Pinot noir rose Bicicleta","price":"65 / 12","image":"pinot_noir_rose_bicicleta"},{"name":"Zonin Prosecco","price":"90","image":"zonin_prosecco"},{"name":"Zonin Prosecco Rose","price":"90","image":"zonin_prosecco_rose"},{"name":"Champagne Nicolas Feuillatte Réserve Exclusive","price":"190","image":"champagne_nicolas_feuillatte_reserve_exclusive"},{"name":"Champagne Veuve Clicquot","price":"270","image":"champagne_veuve_clicquot"}],"mocktails":[{"name":"Limonada","price":"10","image":"limonada"},{"name":"Sherly Temple","price":"8","image":"sherly_temple"},{"name":"Conga","price":"9","image":"conga"},{"name":"Virgin cocktails","price":"10","image":"virgin_cocktails"},{"name":"La michi","price":"13","image":"la_michi"},{"name":"Corona 0%","price":"10","image":"corona_0_"},{"name":"Guiness 0%","price":"10","image":"guiness_0_"},{"name":"Fin Soda Mule","price":"9","image":"fin_soda_mule"},{"name":"Le Limon Fin Soda Lime and Lemon","price":"9","image":"le_limon_fin_soda_lime_and_lemon"}],"non_alcoholic":[{"name":"Limonada","price":"","image":"limonada"},{"name":"Italian Sodas","price":"7","image":"italian_sodas"},{"name":"Jugos","price":"7","image":"jugos"},{"name":"Coca-Cola, Coca-Cola Zero, Sprite, Ginger Ale, 7up, Tonic water, Club soda, Perrier, Water","price":"4","image":"varies"},{"name":"Manzana postobon, Colombiana","price":"4","image":"manzana-colombiana"},{"name":"Redbull","price":"6","image":"redbull"},{"name":"Naranjada","price":"10","image":"naranjada"},{"name":"Cafe","price":"1.75","image":"cafe"},{"name":"Espressso","price":"4","image":"espressso"},{"name":"Hot Chocolate","price":"4.50","image":"hot_chocolate"}]}'),s=t(8526),o=t(6462),m=t.p+"static/aperol_spritz-416c4bdf926814781e0f36b36d2e934e.jpg",p=t.p+"static/bloody_caesar-91468ac9763568489ccd9b2baeaf04c2.jpg",g=t.p+"static/daiquiri-e6fdd75c90b437ecc663a5a12dbc33ca.jpg",u=t.p+"static/dragon_drop-20e1d1cd711ddf72dd025eea781987a1.jpg",d=t.p+"static/el_lounge-cd043c0f0a7aecf46c0b150a21b7674f.jpg",_=t.p+"static/margaritas-927c9e391f9b69b288926c2d3dbc920a.jpg",f=t.p+"static/medellin_mule-bec2e6cde5df311e876a44460eb4d8d4.jpg",b=t.p+"static/michelada_cubana-7f4ace019f050bc2f0d4435dd5539f55.jpg",h=t.p+"static/mocktail_fin_soda-3a72a0d1b74ad1736afb30e548b88c44.jpg",y=t.p+"static/mocktails-5133233c7bc904141a7803510fa2c4d1.jpg",k=t.p+"static/mojitos-1fe8116122e259e5b3ab63794c5c94c9.jpg",x=t.p+"static/moscow_mule-e2f177240cb79d87a298458e62d34370.jpg",w=t.p+"static/no_image-aa1076f75445d13eef8f9ceef74c31d5.png",v=t.p+"static/paloma-22e61f8a65fcfefe793ae5c1c1f4c5c2.jpg",E=t.p+"static/passion_duck-f29a191c032929ee8b9dcea2766ea326.jpg",S=t.p+"static/patron_espresso_martini-0cb99ab81df472b0e7dfda671ea0f8c5.jpg",N=t.p+"static/patron_margarita_tower-9c24580892259172f14269ad58d91dd5.jpg";var C={aperol_spritz:{src:m,alt:"Aperol Spritz"},bloody_caesar:{src:p,alt:"Bloody Caesar"},daiquiri:{src:g,alt:"Daiquiri"},dragon_drop:{src:u,alt:"Dragon Drop"},el_lounge:{src:d,alt:"El Lounge"},margaritas:{src:_,alt:"Margaritas"},medellin_mule:{src:f,alt:"Medellín Mule"},michelada_cubana:{src:b,alt:"Michelada Cubana"},mocktail_fin_soda:{src:h,alt:"Mocktail Fin Soda"},mocktails:{src:y,alt:"Mocktails"},mojitos:{src:k,alt:"Mojitos"},moscow_mule:{src:x,alt:"Moscow Mule"},paloma:{src:v,alt:"Paloma"},passion_duck:{src:E,alt:"Passion Duck"},patron_espresso_martini:{src:S,alt:"Patron Espresso Martini"},patron_margarita:{src:t.p+"static/patron_margarita-5ee5a14379a807aa3d393c5f0f68b808.jpg",alt:"Patron Margarita"},patron_margarita_tower:{src:N,alt:"Patron Margarita Tower"},pisco_sour:{src:t.p+"static/pisco_sour-692749146bf20bf0dafe7fc330e8b1e6.jpg",alt:"Pisco Sour"},smokey_melon_margarita:{src:t.p+"static/smokey_melon_margarita-9ac58d21810585ee57206770d69af25e.jpg",alt:"Smokey Melon Margarita"},whiskey_sour:{src:t.p+"static/whiskey_sour-a4d7a642c8b8aa7d68f507f91460e8a4.jpg",alt:"Whiskey Sour"},yuzu_melon:{src:t.p+"static/yuzu_melon-844472379942cd6ac8253a9a6e6f8e73.jpg",alt:"Yuzu Melon"},no_image:{src:w,alt:"No Image"}},A=t(4755),M=t(3135),j=t(8027),T=t(8689),L=t(3740),B=t(9354);const G=s[0];var P=()=>{const{t:e}=(0,A.useTranslation)(),{0:a,1:t}=(0,i.useState)(null),{0:m,1:p}=(0,i.useState)("cocktailsSignature"),g=(0,i.useRef)(null),u=s[0],d=r,_=(0,o.useLocation)(),{0:f,1:b}=(0,i.useState)(0),h=e=>{b(window.scrollY),t(e),(0,c.navigate)(`?drinks=${e.image}`)},y=()=>{t(null),(0,c.navigate)("?"),setTimeout((()=>{window.scrollTo(0,f)}),50)};(0,i.useEffect)((()=>{const e=new URLSearchParams(_.search).get("drinks");if(e){const a=["cocktailsSignature","houseCocktails","classicCocktails","shots","glass","houseShots","bottles","wine","beer","sangrias","mocktails","non_alcoholic"].flatMap((e=>d[e])).find((a=>a.image===e));a&&h(a)}return()=>{t(null)}}),[d]);const k=e=>{const a=C[e]||C.no_image;return{src:a.src,alt:a.alt}},x=a=>a.map(((a,t)=>i.createElement("div",{className:"relative",key:t},i.createElement("div",{className:"absolute bottom-[2px] z-10 left-0 last: w-[160px] h-[260px] block box-shadow-latinClub"}),i.createElement("div",{className:`${R.productTile} relative z-20`,onClick:()=>h(a)},i.createElement("div",null,i.createElement("img",{src:k(a.image).src,alt:k(a.image).alt})),i.createElement("div",{className:R.productTileInfoWrapper},i.createElement("h3",{className:R.productTileTitle},a.name),a.subtitle&&i.createElement("span",{className:"text-white text-xs leading-3"},e(`drinks.subtitle.${a.image}`))),i.createElement("div",{className:R.productTileShowMore},i.createElement("p",{className:R.productTilePrice},a.price),e("general.see_more")))))),w=(a,t)=>a.map(((a,l)=>i.createElement("div",{className:"w-full",key:l},i.createElement("div",{className:`${t||"w-2/5"} flex flex-row text-white mx-auto mt-1`},i.createElement("div",{className:"flex flex-col justify-between w-full"},i.createElement("div",{className:"flex font-bold"},a.name),i.createElement("p",{className:"flex",dangerouslySetInnerHTML:{__html:e(`drinks.${a.image}`)||""}})),i.createElement("p",{className:"flex self-center w-16 justify-end text-latinBlue font-bold"},a.price)),i.createElement("div",{className:`${t||"w-2/5"} " mx-auto h-[1px] bg-latinBlue opacity-25"`})))),v=[{key:"cocktailsSignature",label:e("productMenu.cocktailsSignature")},{key:"houseCocktails",label:e("productMenu.houseCocktails")},{key:"classicCocktails",label:e("productMenu.classicCocktails")},{key:"shots",label:e("productMenu.shots")},{key:"houseShots",label:e("productMenu.houseShots")},{key:"bottles",label:e("productMenu.bottles")},{key:"wineBeerSangrias",label:e("productMenu.wineBeerSangrias")},{key:"mocktails",label:e("productMenu.mocktails")},{key:"non_alcoholic",label:e("productMenu.non_alcoholic")}];return i.createElement("div",{className:"flex flex-col w-full",style:{backgroundImage:`url(${L.A.BackgroundClubImage.src})`,minHeight:"100vh",backgroundSize:"cover"}},i.createElement(n.default,{data:u,showLogoTop:!0},i.createElement(l.m,null,i.createElement("title",null,e("menuDrink.drinksMenu")," - ",u.name),i.createElement("link",{rel:"icon",href:T.A})),i.createElement("section",{className:a?"relative overflow-y-hidden":""},i.createElement("div",{className:R.tabsWrapper},v.map((e=>i.createElement("button",{key:e.key,className:`${R.tabButton} ${m===e.key?"font-bold underline text-shadow-blue py-2":""}`,onClick:()=>p(e.key)},e.label)))),i.createElement("div",{ref:g,className:"drinks-menu flex flex-wrap gap-10 max-w-[1200px] mx-auto justify-center mb-16 sm:mb-24"},"cocktailsSignature"===m&&i.createElement("div",{className:"flex flex-wrap gap-8 w-full sm:w-3/4 justify-center"},x(d.cocktailsSignature)),"houseCocktails"===m&&i.createElement("div",{className:"flex flex-wrap gap-8 w-full justify-center"},x(d.houseCocktails)),"classicCocktails"===m&&i.createElement("div",{className:"bg-latinFucsia/[0.15] w-full flex flex-col overflow-hidden pb-8"},i.createElement("div",{className:"relative w-full h-1 bg-latinBlue opacity-[.1]"},i.createElement("img",{className:"absolute w-24 mt-[20%] left-6",src:L.A.shot.src,alt:L.A.shot.alt}),i.createElement("img",{className:"absolute opacity-75 w-36 right-2",src:L.A.cocktail_5.src,alt:L.A.cocktail_5.alt})),i.createElement("div",{className:"flex justify-center"},i.createElement("div",{className:"block mx-12"},i.createElement("h2",{className:"text-white text-2xl text-center my-8"}),w(d.classicCocktails,"w-full")))),"shots"===m&&i.createElement("div",{className:"bg-latinFucsia/[0.15] w-full flex flex-col overflow-hidden pb-8"},i.createElement("div",{className:"relative w-full h-1 bg-latinBlue opacity-[.1]"},i.createElement("img",{className:"absolute w-24 mt-[20%] left-6",src:L.A.shot.src,alt:L.A.shot.alt}),i.createElement("img",{className:"absolute opacity-75 w-36 right-2",src:L.A.cocktail_5.src,alt:L.A.cocktail_5.alt})),i.createElement("div",{className:"flex flex-col sm:flex-row justify-center"},i.createElement("div",{className:"block mx-12"},i.createElement("h2",{className:"text-white text-2xl text-center my-8"},e("productMenu.shots")),w(d.shots,"w-full")),i.createElement("div",{className:"block mx-12"},i.createElement("h2",{className:"text-white text-2xl text-center my-8"},e("productMenu.glass")),w(d.glass,"w-full")))),"houseShots"===m&&i.createElement("div",{className:"bg-latinBlue/[0.25] w-full flex flex-col overflow-hidden pb-8"},i.createElement("div",{className:"relative w-full h-1 bg-latinFucsia opacity-[.1]"},i.createElement("img",{className:"absolute w-48 rotate-[30deg] -left-12",src:L.A.cocktail_4.src,alt:L.A.cocktail_4.alt}),i.createElement("img",{className:"absolute w-48 rotate-[-10deg] -right-12",src:L.A.planta_2.src,alt:L.A.planta_2.alt}),i.createElement("img",{className:"absolute w-36 top-8 -right-12",src:L.A.mango.src,alt:L.A.mango.alt})),i.createElement("div",{className:"mx-12"},w(d.houseShots,"w-full"))),"bottles"===m&&i.createElement("div",{className:"bg-latinBrown/[0.45] w-full flex flex-col overflow-hidden pb-8"},i.createElement("div",{className:"relative w-full h-1 bg-latinGreen opacity-[.1]"},i.createElement("img",{className:"absolute w-48 rotate-[30deg] -left-12",src:L.A.bottles.src,alt:L.A.bottles.alt}),i.createElement("img",{className:"absolute w-32 rotate-[-10deg] -right-12",src:L.A.planta_4.src,alt:L.A.planta_4.alt}),i.createElement("img",{className:"absolute w-64 -top-6 -right-12",src:L.A.maracuya_2.src,alt:L.A.maracuya_2.alt})),i.createElement("div",{className:"mx-12"},w(d.bottles,"w-full"))),"wineBeerSangrias"===m&&i.createElement("div",{className:"bg-latinGreen/[0.15] w-full flex flex-col overflow-hidden pb-8"},i.createElement("div",{className:"relative w-full h-1 bg-latinBlue opacity-[.1]"},i.createElement("img",{className:"absolute w-48 -left-12",src:L.A.wine.src,alt:L.A.wine.alt}),i.createElement("img",{className:"absolute w-64 -right-12",src:L.A.beer.src,alt:L.A.beer.alt})),i.createElement("div",{className:"flex flex-col sm:flex-row"},i.createElement("div",{className:"mx-12"},i.createElement("h2",{className:"text-white text-2xl text-center my-8"},e("productMenu.wine")),w(d.wine,"w-full")),i.createElement("div",{className:"mx-12"},i.createElement("div",null,i.createElement("h2",{className:"text-white text-2xl text-center my-8"},e("productMenu.beer")),w(d.beer,"w-full")),i.createElement("div",null,i.createElement("h2",{className:"text-white text-2xl text-center my-8"},e("productMenu.sangrias")),w(d.sangrias,"w-full"))))),"mocktails"===m&&i.createElement("div",{className:"bg-latinClub/[0.45] w-full flex flex-col overflow-hidden pb-8"},i.createElement("div",{className:"relative w-full h-1 bg-latinFucsia opacity-[.1]"},i.createElement("img",{className:"absolute w-48 rotate-[30deg] -left-12",src:L.A.flower_1.src,alt:L.A.flower_1.alt}),i.createElement("img",{className:"absolute w-48 right-4",src:L.A.lemonade.src,alt:L.A.lemonade.alt})),i.createElement("div",{className:"mx-12"},w(d.mocktails,"w-full"))),"non_alcoholic"===m&&i.createElement("div",{className:"bg-latinFucsia/[0.15] w-full flex flex-col overflow-hidden pb-8"},i.createElement("div",{className:"relative w-full h-1 bg-latinGreen opacity-[.1]"},i.createElement("img",{className:"absolute w-48 -left-12",src:L.A.coffee.src,alt:L.A.coffee.alt}),i.createElement("img",{className:"absolute w-64 -right-12",src:L.A.juice.src,alt:L.A.juice.alt})),i.createElement("div",{className:"mx-12"},w(d.non_alcoholic,"w-full")))),i.createElement("div",{className:"hidden sm:flex justify-center my-12"},i.createElement(B.A,{data:G}))),a&&i.createElement("div",{className:"modal w-full h-full fixed z-50 top-0 bg-black/90 text-white overflow-y-auto",onClick:y},i.createElement("div",{className:"modal-content w-[90%] sm:w-[80%] max-w-[75rem] mx-auto bg-latinFucsia/[.5] my-4 sm:mt-20  p-2 sm:p-12"},i.createElement("article",{className:"flex flex-col sm:flex-row justify-between"},i.createElement("div",{className:"flex items-start"},i.createElement("div",{className:"flex text-latinFucsia w-8 cursor-pointer",onClick:y},i.createElement(j.yyx,{className:"w-full h-full "})),i.createElement("div",{className:"ml-16 w-24 sm:w-36"},i.createElement(M.A,{fillColour:"#fff"}))),i.createElement("div",{className:"section w-full sm:w-auto"},i.createElement("div",{className:"text-2xl font-thin text-center bg-latinFucsia sm:bg-transparent max-w-max mx-auto px-8 py-1 rounded mt-4"},e(`productMenu.${m}`)),i.createElement("div",{className:"text-latinBlue text-sm sm:text-6xl text-center hidden sm:flex"},a.price))),i.createElement("article",{className:"flex flex-col sm:flex-row mt-4 sm:mt-0"},i.createElement("img",{className:"w-full sm:w-[28rem]",src:k(a.image).src,alt:a.name}),i.createElement("div",{className:"flex flex-col self-center p-8"},i.createElement("div",{className:"w-full text-2xl sm:text-4xl font-bold uppercase flex justify-between"},a.name,i.createElement("div",{className:"text-latinBlue text-2xl sm:text-6xl text-center flex sm:hidden"},a.price)),i.createElement("p",{className:"pt-4 text-sm",dangerouslySetInnerHTML:{__html:e(`drinks.${a.image}`)||""}})))))))};const R={tabButton:"tab-button hover:underline",productTile:"flex flex-col w-[160px] h-[260px] bg-latinFucsia/[.15] p-4",productTileInfoWrapper:"flex flex-col grow pt-4",productTileTitle:"text-white font-extrabold text-md leading-[1rem]",productTilePrice:"text-latinBlue self-end text-2xl font-extrabold flex justify-end leading-none mr-4",productTileShowMore:"text-white text-xs text-center font-extralight w-full absolute bottom-2 left-0",mainTitle:"text-primary text-6xl text-center tracking-wide m-0 p-0",tabsWrapper:"tabs text-white flex justify-around max-w-[1200px] mx-auto my-8 flex-col sm:flex-row",after:"after:'' after:w-[2rem] after:h-[3.25rem] after:bg-primary after:block after:absolute after:right-[-1.8rem] after:top-[23.85rem] after:z-50"}},4707:function(e,a,t){t.r(a);var i=t(6540),l=t(8508),c=t(3135),n=t(1223),r=t(6973),s=t(9354),o=t(8526),m=t(560),p=t(5505),g=t(1042);const u=o[0];a.default=e=>{let{children:a,showNavigation:t=!1,showLogoTop:_=!1}=e;const{0:f,1:b}=(0,i.useState)("/foodMenu/"),{0:h,1:y}=(0,i.useState)("/drinksMenu/"),{0:k,1:x}=(0,i.useState)(!1),{0:w,1:v}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{if("undefined"!=typeof window){const e=window.location.pathname,a=e.split("/")[1],t=e.split("/")[2];x("foodMenu"===t),v("drinksMenu"===t),"fr"!==a&&"es"!==a&&"en"!==a||(y(`/${a}/drinksMenu/`),b(`/${a}/foodMenu/`))}}),[]),i.createElement(i.Fragment,null,o&&i.createElement(i.Fragment,null,i.createElement(g.A,{data:u.companyDetails}),i.createElement("div",{className:d.containerWrapper},!k&&i.createElement(m.A,{href:f,topPositionValue:50}),!w&&i.createElement(p.A,{href:h,topPositionValue:50}),i.createElement("div",{className:"bg-no-repeat bg-center"},i.createElement("div",{className:"flex justify-between"},i.createElement("div",{className:"flex flex-row mx-12 gap-4 self-center"},i.createElement("a",{href:u.companyDetails.instagram,target:"_blank",rel:"noopener noreferrer"},i.createElement(n.g0x,{className:"text-white hover:text-latinFucsia"})),i.createElement("a",{href:u.companyDetails.facebook,target:"_blank",rel:"noopener noreferrer"},i.createElement(r.MkP,{className:"text-white hover:text-latinFucsia"}))),t&&i.createElement("div",{className:"hidden sm:flex justify-center my-12"},i.createElement(s.A,{data:u})),!t&&_&&i.createElement("div",{className:"hidden sm:flex w-[10rem]"},i.createElement(c.A,{fillColour:"#fff"})),i.createElement("div",{className:"flex justify-end mr-12"},i.createElement(l.A,{clubLayout:!0,data:u}),i.createElement("div",{className:"flex sm:hidden mx-auto"},i.createElement(s.A,{data:u})))),i.createElement("main",null,a)))))};const d={containerWrapper:"flex flex-col w-full bg-latinClub/[0.9] pt-8",logoPosition:"mx-auto"}},8689:function(e,a,t){a.A=t.p+"static/icon-83fab090381658fc8ac47ea0c9e30c7a.png"},8526:function(e){e.exports=JSON.parse('[{"companyName":"El Lounge","name":"El Lounge Latin Club","companyDetails":{"address":"1735 Rue Saint Denis","city":"Montreal","country":"Canada","phone":"514 474 4BAR (227)","email":"info@pointbarlounge.ca","whatsApp":"https://wa.me/15144744227","instagram":"https://instagram.com/pointbarlounge","facebook":"http://facebook.com/pointbarloungemtl","postalCode":"H2X 3K4","url":"https://ellounge.ca","province":"Quebec"},"menu":["home","elLounge","foodMenu","latinClub","eventsDay"],"clubMenu":["home","latinClub","drinksMenu","eventsClub","visitUs"]}]')}}]);
//# sourceMappingURL=component---src-pages-drinks-menu-tsx-c9928db119198b1aa57f.js.map