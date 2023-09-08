// arguments array like object
function sum(a, b, c){
    // console.log(arguments[3]);
    const args = [...arguments];
    // console.log(args);
    const result = a + b +c;
    return result;
}
// console.log(arguments);
const total = sum(45,89,12,87,65);
// console.log(total);
console.log(sum.length);