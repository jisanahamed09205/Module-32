/**
 * Truthy
 * 1.true
 * 2.any number(+ve,-ve) will be truthy
 * 3.any string other than empty string
 * 4.'0','false'
 * 5.{} empty object
 * 6.[] empty array
 * 7.
 * 
 * Falsy
 * 1.false
 * 2.0
 * 3.'' (empty string)
 * 4.undefined
 * 5.null
 * 6.
 */

const x = ['ji','hf'];
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = ''
if (!y){
    console.log('check falsy');

}
// check true
const z = 50;
if(!!x){
    console.log('value is truthy');
}