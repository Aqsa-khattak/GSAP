// gsap.from("#page1 #box",{ 
//     scale: 0,
//     rotate: 360,
//     delay:1,
//     duration:2
// })

//yh sry pages ki animation ek sth ek hi time pr chla rhi mai chlti ke user page1 pr jitna marzi 
//thery chahy 10 min ya 1 sec lkn jb vo scroll kre er page2 pr ae tb hi page 2 ki animation chlni
//chye eske lie hum scrollTrigger use krty write in camel case 

// gsap.from("#page2 #box",{   
//     scale: 0,
//     rotate: 360,
//     delay:1,
//     duration:2,
//     // scrollTrigger: "#page2 #box"  // agr srf upr upr sy scrollTrigger lgnaw tou aesy lgngy 

//     scrollTrigger:{   //agr hmnei scrolltrigger depth mai prhna h tou esy aesy object bna kr lekhngy 
//         trigger: "#page2 #box",  //js element ko hmein target krna 
//         scroller: "body",
//         markers: true, // yeh hmri element ke side pr kch end points lga dte 
//         start: "top 80%"
//     }
// })


gsap.from("#page2 h1" , {
     opacity: 0,
     duration: 2,
     x:500,
     scrollTrigger:{
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%"
     }

})
gsap.from("#page2 h2" , {
     opacity: 0,
     duration: 2,
     x:-500,
     scrollTrigger:{
        trigger: "#page2 h2",
        scroller: "body",
        markers: true,
        start: "top 50%"
     }

})
gsap.from("#page3 #box",{   
    scale: 0,
    rotate: 720,
    opacity: 0,
    delay:1,
    duration:2,


    scrollTrigger:{   
        trigger: "#page3 #box",  
        scroller: "body",
        markers: true, 
        start: "top 80%",
        end: "top 30%",
        scrub: 2  // true er 2 dono value de skhty 2 sy animation bht smooth hojti er jitna aghe 
        // number bhryga animation utni smooth
    }
})