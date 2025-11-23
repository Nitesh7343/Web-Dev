let safebtn = document.querySelector("#safe");
safebtn.onclick = function () {
    alert("You are beautiful");
}
let dangerbtn = document.querySelector("#danger");
dangerbtn.onclick = function () {
    alert("you are bad");
}
let safearea = document.querySelector(".safe");
safearea.onmouseenter = function () {
    safearea.innerText = "You are welcome";
}
safearea.onmouseleave = function () {
    safearea.innerText = "Come here";
}

let dangerarea = document.querySelector(".danger");
dangerarea.onmouseenter = function () {
    alert("get out from here");
}
dangerarea.onmouseleave= function () {
    dangerarea.innerText = "Don't come inside";
}