function breakTheText(){
var h1 = document.querySelector("h1")
var h1Text = h1.textContent


var splittenedText = h1Text.split("")
// console.log(splittenedText);

var halfValue = Math.floor(splittenedText.length/2) // 9/2 = 4.5 .5 htne ke lie math.floor = 4 
// console.log(halfValue);

 var clutter = ""

 splittenedText.forEach(function(elem,idx){

 if(idx<halfValue){  // 9 letter hae sheriyans mai es lie idx mai 8 number start from 0 idx ke vo number jo 4 sy chote hae
    clutter += `<span class="a">${elem}</span>`
 }else{
     clutter += `<span class="b">${elem}</span>`
 }

})

h1.innerHTML = clutter
}

breakTheText()

// gsap.from("h1 span" , {
//     y: 70,
//     duartion:1.5,   //pura animation 1 sec ka hoga
//     delay:0.5,   // browser load hone ke bd 0.5 sec bd chlega 
//     // stagger:-0.15,  //ek ek span 0.3 sec mai ayga agr stagger ki value - mai dedein tou ulta chlgi animation
//     stagger: 0.15,
//     opacity:0
// })
gsap.from("h1 .a",{
    y:50,
    duartion:1.5,
    delay:0.5,
    stagger:0.15,
    opacity:0
})

gsap.from("h1 .b",{
    y:50,
    duartion:1.5,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})


