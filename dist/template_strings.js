'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

console.log('------------------START template strings');
function greet(name) {
    console.log(_typeof('Hello  ' + name));
    console.log(('Hello  ' + name).toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
    console.log('\n    To: ' + to + '\n    From: ' + from + '\n    Subject: ' + subject + '\n    Message: ' + message + '\n    ');
}
createEmail('Oleg', 'Sharyk', 'OOO', 'Hello');

function add(x, y) {
    console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}

add(5, 7);
add('4', '9');

var name = 'bill';

console.log(upperName(_templateObject, name));

function upperName(literals, value) {
    console.log(literals, value);
    return literals[0] + value.toUpperCase();
}
console.log('------------------END template strings');