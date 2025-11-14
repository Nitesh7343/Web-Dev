
let h1=document.querySelectorall("h1");
console.log(h1);

let head1=document.querySelector('#head1');
console.log(head1);

head1.style.color='red';
head1.style.border='3px solid blue';
head1.style.backgroundColor='yellow';

let boxes=document.querySelectorAll('.box');
console.log(boxes);

let art =document.getElementsByTagName('article');
console.log(art);

let res=Array.from(art);
console.log(res[0]);
res[0].style.backgroundColor='orange';

let box=document.getElementsByClassName('box');
console.log(box);

let section=document.createElement('section');
console.log(section);   