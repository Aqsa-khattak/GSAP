var initailPath = "M 10 100 Q 500 100 990 100";

var finalPath = 'M 10 100 Q 500 100 990 100'

var string = document.querySelector("#string")

string.addEventListener("mousemove" , function(dets){
  
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`,

    // console.log(path);
    

    gsap.to("svg path" , {
        attr:{d : path},
        ease: "power3.out",
        duration:0.3
    })

})

 string.addEventListener("mouseleave" , function(){

     gsap.to("svg path" , {
        attr:{d : finalPath},  //jab string wly div sy mera mouse hthyga tou attr ki value blkl 
        duration: 1.5,          //wse hi hojaegi jo rest postion pr phle thi means straight line
        ease: "elastic.out(1.2,0.2)"                 
    })
})