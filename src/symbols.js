'use strict';

//let symbol = Symbol('name');
//let symbol2 = Symbol('name');
//console.log(symbol);
//console.log(symbol2);
//console.log(symbol == symbol2);
//console.log(typeof symbol);
//
//let symbol3 = Symbol.for('name');
//let symbol4 = Symbol.for('name');
//console.log(symbol3 == symbol4);
//
//let symbol5 = Symbol.for();
//let name = Symbol.keyFor(symbol5);
//console.log(symbol5);
//console.log(name);

let user = {
    username: 'r2d2',
    [Symbol.for('password')]:'c3po',
    password: 'adsads'
}

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

let password = user[Symbol.for('password')];
console.log(password);

console.log(Object.getOwnPropertySymbols(user));
console.log(user.password);

let object = {
    iterator:0,
    [Symbol.iterator](){
        console.log(this)
    }
}
console.log(object);
console.log(object);