let random;
let max;
function getRange() {
    max = Number(document.getElementById("maxRange").value);
    random = Math.floor(Math.random() * max) + 1;
    document.getElementById("rangeText").textContent = `Guess the Number from 1 to ${max}`;
}

function checkGuess() {
    let guess = Number(document.getElementById("userGuess").value);
    let msg = document.getElementById("result");
        if(guess == -1){
            msg.textContent = "User quit";
        }
        else if(guess == random) {
            msg.textContent = "Congrats!, Your guess is correct 🥳";
        }
        else if(guess < random) {
            msg.textContent = "Ohh! Your guess is smaller, try again";

        }
        else if(guess > random) {
            msg.textContent = "Ohh! Your guess is greater, try again";
        }
}




