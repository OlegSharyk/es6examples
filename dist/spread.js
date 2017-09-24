'use strict';

console.log('------------------START spread');
var staticLang = ['c', 'c++', 'java'];
var dynamicLang = ['js', 'php', 'ruby'];
var lenguages = [].concat(staticLang, ['c#'], dynamicLang, ['python']);

console.log(lenguages);

function add(a, b, c) {
    console.log(a + b + c);
}

var num = [1, 2, 3];

add.apply(undefined, num);
console.log('------------------END spread');