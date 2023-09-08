// primitive types are pass by value

let num1 = 5;
let num2 = 7;

function multiply(a,b){
    a = 27;
    const result = a *b;
    return result;
}
// console.log(num1);
const output = multiply(num1, num2);
// console.log(output);


// object and array are pass by reference
let student1 = {name:'jalil',partner:'borsha'};
let student2 = {name:'raj',partner:'porimoni'};

function makeMovie(couple1,couple2){
    couple1.name = 'Ononto';
    couple2.partner = 'mim';
}
// console.log(student1,student2);
makeMovie(student1, student2);
// console.log(student1,student2);

// quiz test
// let p='Javascript'; 
// let q=p; 
// p='React'; 
// console.log(q);

// const isTrue=true;
// console.log(!isTrue ? "hello" : "world")

// const sum =(p, q)=> {
//     p + q;
//    }
//    const result = sum(2, 3);
//    console.log(result);

// if ("2" === 2) {
//     console.log("Inside if");
//    } else {
//     console.log("Inside else");
//    }

// function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32);