console.log('------------------START template strings');
function greet(name){
    console.log(typeof(`Hello  ${name}`));
    console.log((`Hello  ${name}`).toUpperCase());
}

greet('Bill');

function createEmail(to,from, subject, message){
    console.log(`
    To: ${to}
    From: ${from}
    Subject: ${subject}
    Message: ${message}
    `)
}
createEmail('Oleg', 'Sharyk', 'OOO', 'Hello');

function add(x,y){
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add(5,7);
add('4','9');

let name = 'bill';

console.log(upperName`Hello ${name}`);

function upperName(literals,value){
    console.log(literals,value);
    return literals[0] + value.toUpperCase();
}
console.log('------------------END template strings');