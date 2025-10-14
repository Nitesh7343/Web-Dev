let pencilPrice = 10;
let eraserPrice = 5;
console.log("Total price: ", pencilPrice + eraserPrice);

// using template literals
console.log(`Total price: ${pencilPrice + eraserPrice}`);

// Airthmetic Operators
let a = 10;
let b = 5;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

// Increment and Decrement Operators
let c = 10;
console.log("c++ = ", c++);
console.log("++c = ", ++c);
console.log("c-- = ", c--);
console.log("--c = ", --c);

// Assignment Operators
let d = 10;
d += 5; // d = d + 5
console.log("d += 5: ", d);
d -= 3; // d = d - 3
console.log("d -= 3: ", d);
d *= 2; // d = d * 2
console.log("d *= 2: ", d);
d /= 4; // d = d / 4
console.log("d /= 4: ", d);
d %= 3; // d = d % 3
console.log("d %= 3: ", d);
d **= 2; // d = d ** 2
console.log("d **= 2: ", d);

// Comparison Operators
let e = 10;
let f = 5;
console.log("e == f: ", e == f);
console.log("e != f: ", e != f);
console.log("e === f: ", e === f);
console.log("e !== f: ", e !== f);
console.log("e > f: ", e > f);
console.log("e < f: ", e < f);
console.log("e >= f: ", e >= f);
console.log("e <= f: ", e <= f);

// Logical Operators
let g = true;
let h = false;
console.log("g && h: ", g && h);
console.log("g || h: ", g || h);
console.log("!g: ", !g);
console.log("!h: ", !h);

// String Concatenation
let firstName = "John";
let lastName = "Doe";
console.log("Full Name: ", firstName + " " + lastName);
console.log(`Full Name: ${firstName} ${lastName}`);

// Typeof Operator
let i = 10;
let j = "Hello";
let k = true;
console.log("Type of i: ", typeof i);
console.log("Type of j: ", typeof j);
console.log("Type of k: ", typeof k);

// Operator Precedence
let result = 10 + 5 * 2; // Multiplication has higher precedence than addition
console.log("Result: ", result);
result = (10 + 5) * 2; // Parentheses have the highest precedence
console.log("Result with parentheses: ", result);