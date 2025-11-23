let box = document.querySelector("div");
let btn = document.querySelector("button");
let color = function () {
    let r = Math.floor((Math.random()*256));
    let g = Math.floor((Math.random()*256));
    let b = Math.floor((Math.random()*256));
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
    document.querySelector("h2").innerText = `rgb(${r},${g},${b})`;

}
btn.addEventListener("click",color);