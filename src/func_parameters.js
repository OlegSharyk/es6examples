console.log('------------------START func parameters');
//function greet(greeting, name){
//    console.log(`${greeting} ${name}`);
//}
//
//greet('Hi', 'Bill');


function greet(greeting = 'Hello', name = 'friend'){
    console.log(`${greeting} ${name}`);
}
greet();

//function sum(){
//    console.log(arguments);
//    var sum = 0;
//    Array.prototype.forEach.call(arguments, function(value){
//        sum += value;
//    })
//
//    console.log(sum);
//}

//function sum(...values) {
//    console.log(values);
//    let sum = 0;
//    values.forEach(function(value){
//        sum += value;
//    });
//    console.log(sum);
//}

function sum(...values) {
    sum = values.reduce(function(prevValue,curValue){
        return prevValue + curValue;
    });
    console.log(sum);
}


sum(5,7,2,10);

console.log('------------------END func parameters');