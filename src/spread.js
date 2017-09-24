console.log('------------------START spread');
let staticLang = ['c', 'c++', 'java'];
let dynamicLang = ['js', 'php', 'ruby'];
let lenguages = [...staticLang,'c#', ...dynamicLang,'python'];

console.log(lenguages);

function add(a,b,c){
    console.log(a + b + c);
}

let num = [1,2,3];

add(...num);
console.log('------------------END spread');