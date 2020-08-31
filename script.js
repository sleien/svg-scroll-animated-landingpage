let bg = document.querySelector("#bg");
let hint = document.querySelector("#hint");
let multiplier;
if (screen.height < "1200px") {
    multiplier = 2;
} else {
    multiplier = 6;
}
window.addEventListener("scroll", function() {
    let value = window.scrollY;
    if (value > 0) {
        hint.style.display = "none";
    } else {
        hint.style.display = "block";
    }
    bg.style.backgroundSize = 100 + value * multiplier + "px";
})