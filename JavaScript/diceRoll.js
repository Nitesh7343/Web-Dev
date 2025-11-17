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


function Nsum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(Nsum(10));
