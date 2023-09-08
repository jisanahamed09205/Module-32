function greeting(greetingHandler,name){
    greetingHandler(name);
}
// const name = 'Halim vaia'
// const numbers = [45,58,69];
// const laptop = {price:6500,name:'hp'};
// greeting(laptop);

function greetingHandler(name){
    console.log('Good Morning',name);
}

function greetEvening(name){
    console.log('Good Evening',name);
}
function greetNight(name){
    console.log('Good Night',name);
}

greeting(greetingHandler,'Jisan');
greeting(greetingHandler,'Yeasin');
greeting(greetingHandler,'shishir')
greeting(greetEvening,'Zihad')
greeting(greetNight,'Bow')


function submitHandler(){
    console.log('Submit button clicked');
}
document.getElementById('sub-btn').addEventListener('click',submitHandler)