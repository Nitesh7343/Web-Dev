const max = prompt("Enter the maxinum number");
console.log(max);
const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess the number (type 'quit' to stop playing)");
while(true) {
    if(guess == "quit") {
        console.log("user quit");
        alert("User quit");
        break;
    }
    else if(guess == random) {
        alert("Congratulaitons you guessed the right number.",random);
        console.log("Congratulations you guessed the right number:",random);
        break;
    }
    else {
        if(guess < random) {
            guess = prompt("Ohh! Your guessed a smaller number, Please try again");
        }
        else if(guess > random){
            guess = prompt("Ohh! Your guessed greater number, Please try again");
        }
    }
}
