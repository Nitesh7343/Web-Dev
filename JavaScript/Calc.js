let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));
let op = prompt("Enter the operation (+, -, *, /):");   

switch(op) {
    case "+" :
        alert(a+b);
        break;
    case "-" :
        alert(a-b);
        break;
    case "*" :
        alert(a*b);
        break;
    case "/" :
        alert(a/b);
        break;
    default :
        console.log("Invalid Operation");   
}