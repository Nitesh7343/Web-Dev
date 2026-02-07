function printName() {
    console.log("My name is Nitesh");
}
console.log("outside function");
//1. export default printName;

function printData() {
    console.log("My age is 120");
}

module.exports = {printName,printData};