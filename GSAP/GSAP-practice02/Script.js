// gsap.to("#box1", {
//     x:800,
//     duration: 1.5,
//     delay:1,
//     rotate:360
// })
// gsap.to("#box2", {
//     x:800,
//     duration: 1.5,
//     delay:2.5,
//     rotate:360
// })
// gsap.to("#box3", {
//     x:800,
//     duration: 1.5,
//     delay:4,
//     rotate:360
// })

// var tl = gsap.timeline()  //timeline ke andr sri chzein sync mai chlti phle 1st wla chla then 2nd then 3rd er edr hmne ksi ko koi delay bh nh dia

// tl.to("#box1", {
//     x:900,
//     duration:2,
//     rotate:360,
//     backgroundColor: "red"
// })
// tl.to("#box2", {
//     x:900,
//     duration:2,
//     backgroundColor: "pink"
// })
// tl.to("#box3", {
//     x:900,
//     duration:2,
//     scale: 0.5,
//     backgroundColor: "red",
//     borderRadius: "50%"
// })

var tl = gsap.timeline()

tl.from("h2", {
    y: -20,
    duration:2,
    opacity:0,
    delay:0.5
})
tl.from("h4", {
    y: -20,
    duration:2,
    opacity:0,
    stagger:0.8
})
tl.from("h1", {
    y:20,
    duration:1,
    opacity:0,
    scale: 0.5
})
