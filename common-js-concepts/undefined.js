/**
 * 8 ways to get Undefined
  
 * 1. variable that is not initialized will give undefined
 * 2.function with no return
 * 3.parameter that is not passed will be undefined
 * 4.if return has nothing on the right side will return undefined
 * 5.property that doesn't exists on an object will give you undefined
 * 6.accessing array element outside of the index range
 * 7.deleting an element inside an array
 * 8.set a value directly to undefined
 * */ 


let first ;
// console.log(first);
function second(a,b){
    const total = a+ b;
}
const result = second(4,5)
// console.log(result);
function third(a,b,c,d){
    const total = a+b+c+d;
    // console.log(a,b,c,d);
}
// third(3,4,5);
function noNegative(a,b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegative(-2,5);
// console.log(total);
const fifth = {id:2, name:'ponchom',age:40}
// console.log(fifth.age,fifth.salary);
const sixth = [4,89,78,56,45];
// you should not do it. Instead use splice
delete sixth[3]
// console.log(sixth[3],sixth[5],sixth[100]);
// console.log(sixth);
const eighth = undefined;
const ninth = null;
const data = {results: [], updated: null};
// console.log(typeof eighth);
// console.log(typeof ninth);
console.log(typeof data);