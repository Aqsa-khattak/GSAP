var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full" ,{
    right:0,
    duration: 1
})
tl.from("#full h4" ,{
   x:160,
   duration:0.6,
   stagger:0.6,
   opacity:0
})
tl.from("#full i" ,{
   opacity:0
})
tl.pause()

menu.addEventListener("click", function(){
    tl.play()
    // console.log("start");
})

cross.addEventListener("click", function(){
    tl.reverse()
})

