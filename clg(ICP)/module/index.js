// 1.import printName from "./printName.js"
const {printName,printData} = require("./printName");
// printName(); // if we do not call the function me require from the file then it will run all the lines of code of the required file b/c when we require any file then it runs the file once to check whether it has any error or not and store it to cache. 

printName();
printData();









