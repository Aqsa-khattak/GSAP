var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");

main.addEventListener("mousemove", function(dets){
   
    // er edr mne cursor ko direct lekha na ke "#cursor" krke bcz mne line 2 pr phle hi ose html
    // sy utha kr javascript mai le aye ho tou direct js variable mai mne ose rakha uska name lekha

    gsap.to(cursor,{   //to es lie lgya bcz mujhe cursor ko initial position sy lekr jnaw kah
      x:dets.x,
      y:dets.y,
      duration:1,  // cursor follow krega but thora slow krega 1 sec 
      ease:"back.out"
    })  
})

image.addEventListener("mouseenter" , function(){
    cursor.innerHTML = "view more"

    gsap.to(cursor, {
        scale:4,
        backgroundColor: "rgba(255, 255, 255, 0.34)"
    })
    
})

image.addEventListener("mouseleave" , function(){
     cursor.innerHTML = ""  //mouse jb image sy bhr jaega tou text kahli hojaega 

    gsap.to(cursor, {
        scale:1,
        backgroundColor: "rgb(255, 255, 255)"
        
    })
    
})