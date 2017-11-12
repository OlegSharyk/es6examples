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

var _user;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user = (_user = {
    username: 'r2d2'
}, _defineProperty(_user, Symbol.for('password'), 'c3po'), _defineProperty(_user, 'password', 'adsads'), _user);

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

var password = user[Symbol.for('password')];
console.log(password);

console.log(Object.getOwnPropertySymbols(user));
console.log(user.password);

var object = _defineProperty({
    iterator: 0
}, Symbol.iterator, function () {
    console.log(this);
});
console.log(object);
console.log(object);