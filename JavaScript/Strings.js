let s = "                   I am learning JavaScript                  ";
console.log(s);
let newS1 = s.trim().toUpperCase();
console.log(newS1);
let newS2 = s.trim().toLowerCase();
console.log(newS2);

let newS3 = s.trim().slice(0,4);
console.log(newS3);

console.log(s.indexOf("Java"));

let newS4 = s.replace("JavaScript", "Java");
console.log(newS4);
