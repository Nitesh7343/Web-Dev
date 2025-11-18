// function diceRoll() {
//     let random = Math.floor(Math.random()*6) +1;
//     console.log(random);
// }

// diceRoll();




// function printInfo(name) {
//     console.log(name);
// }
// function printInfo(name , age) {
//     console.log(name , age);
// }

// printInfo("nitesh",21);
// printInfo("NItesh");


// function Nsum(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(Nsum(10));


// let sum = function() {
//     return 2+3;
// }

// console.log(sum());

// let check = (age) => {
//     if(age >= 18) {
//         return "You can vote"
//     }
//     else 
//         return `You can vote after ${18-age} Years`
// };

// console.log(check(13));

// console.log("Hello!");

// setInterval(() => {
//     console.log("Panda")
// },4000);

// console.log("I'm");


// let nums = [1,3,6,7,2,2,4,90];
// let double = nums.filter((el) => {return el%2 != 0});

// console.log(double);

// let nums = [1,3,6,7,2,2,4,90];
// let double = nums.map((el) => {return el*2;});

// console.log(double);


// let nums = [1,3,6,7,2,2,4,90];
// let double = nums.every((el) => {return el > 0});

// console.log(double);

let num = [1,2,3,67,5,0,4,3,7];
let abs = num.reduce((res,el) => {return res < el ? res : el;});
console.log(abs);