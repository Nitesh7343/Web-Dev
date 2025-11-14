let arr= [1,3,4,3,4,5,5,3,24,4,5,5,65,2,3,4,4,5,5,66,4,4,33,32,2,233,4];
let num = 3;
console.log(arr.length);
for(let i = 0; i  <arr.length;i++) {
    if(arr[i] == num) {
        arr.splice(i,1);
        i--;
    }
}
console.log(arr.length);
console.log(arr);