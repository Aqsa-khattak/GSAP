function wheelAnimation(){

    window.addEventListener("wheel", function (dets) {
    // console.log(dets.deltaY);

  if (dets.deltaY > 0) {

    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 4,
      repeat: -1, //animation repeat hoti jaegi
      ease: "none", //esy animation ek hi speed mai chlegi
    })

    gsap.to(".marque i",{
        rotate:180
    })

  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 4,
      repeat: -1, //animation repeat hoti jaegi
      ease: "none", //esy animation ek hi speed mai chlegi
    })

     gsap.to(".marque i",{
        rotate:0
    })

  }
});

}

wheelAnimation()