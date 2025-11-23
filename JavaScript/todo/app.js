let btn = document.querySelector("#addbtn");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click",function () {
    let item = document.createElement("li");
    item.innerText = inp.value + "  ";

    let del = document.createElement("button");
    del.innerText = "delete";
    del.classList.add("delete");

    item.appendChild(del);
    ul.appendChild(item);
 inp.value = "";
});

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let delEle = event.target.parentElement;
        delEle.remove();
    }
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove;

//     });
// }

