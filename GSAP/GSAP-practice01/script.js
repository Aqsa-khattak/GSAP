gsap.to("#box",{
    x:900,
    duration:1.5,
    delay:2,
    rotate:360,
    repeat:1, //means animation phle tou jo hmne properties lgae vo chlegi fr ek br repeat hogi agr 2 
    //lekhu tou 3 br chlgi ek default er do br alg sy repeat 

    repeat: -1, //infinate chlga
    yoyo: true  //true ya false mai value hoti //abhi yeh animation left to right jarha er inifite hae tou yeh br br left sy 
    // right jrha mai chti ke yeh ek ball ki trha work kre jse hum ball ko dewar pr through krty tou vo wps hmry ps ati 
})
gsap.to("#box2",{
    x:800,
    y:200,
    duration:1.5,
    delay:2
})
gsap.from("#box3",{
    rotate: 360,    //css bh lekh skhty edr direct
    backgroundColor: "blue",   //color bh chnage kr skhty but write property in camel case
    borderRadius: "50%",  //percentage ek special character hae ose double qoutes mai hi lekhna hota
    scale:2, //0.5 means original ka half - 1 means original size - 2 means original ka double
    x:900,
    duration:1.5,
    delay:2
})
gsap.from("h1",{
    color: "red",
    opacity: 0, //original yeh 1 tha means dekh rha th 0 means nhi dkhega 
    y:20,
    duration:5,
    delay:1,
    stagger:1, // means hmry ps edr 3 h1 hae mai chti ke har ek one by one krke aye 1 -means ek second ka time lgyga ek ek ko ane mai
    //agr mai stagger:-1 krdo tou yeh phle sbsy neche wla h1 chelga fr 2nd wla fr 1 wala

})
