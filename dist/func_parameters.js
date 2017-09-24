'use strict';

console.log('------------------START func parameters');
//function greet(greeting, name){
//    console.log(`${greeting} ${name}`);
//}
//
//greet('Hi', 'Bill');


function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

    console.log(greeting + ' ' + name);
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

function sum() {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    sum = values.reduce(function (prevValue, curValue) {
        return prevValue + curValue;
    });
    console.log(sum);
}

sum(5, 7, 2, 10);

console.log('------------------END func parameters');