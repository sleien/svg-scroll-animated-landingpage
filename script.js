let bg = document.querySelector("#bg");
let multiplier;
if(screen.height < "1200px"){
    multiplier = 2;
}else{
    multiplier = 6;
}
window.addEventListener("scroll", function(){
    let value = window.scrollY;
    bg.style.backgroundSize = 100 + value*multiplier + "px";
})

