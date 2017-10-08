//function add(a,b) {
//    return a + b;
//}

//let add = (x,y) => x+y;
//console.log(typeof(add));
//console.log('add ' + add(5,8));
//
//let squre = (x) => x*x;
//console.log('squre ' + squre(3));
//
//let gitMeAnswe =() => 42;
//console.log(gitMeAnswe());
//
//let log = () => console.log('loggin');
//console.log(log());
//
//let multiply = (x,y) => {
//    let result = x*y;
//    return result;
//}
//console.log('multiply ' + multiply(4,5));
//
//let getPerson = () => ({name: 'Oleg'})
//console.log(getPerson());
//
//(function(){
//    console.log('IFFY');
//})();
//(() => console.log('IFFY'))();


let numbers = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;

//numbers.forEach(function(num){
//    sum += num;
//});
numbers.forEach((num) => sum+=num);
console.log(sum)

let squared = numbers.map(n => n*n);
console.log(squared);

//let person = {
//    name: 'bob',
//    greet: function() {
//        var that = this;
//        setTimeout(function(){
//            console.log('Hello my name is ' + that.name);
//            console.log('this =>' + this);
//            console.log('that =>' + that);
//        },2000);
//    }
//};

//let person = {
//    name: 'bob',
//    greet: function() {
//        var that = this;
//        setTimeout(() => {
//            console.log('Hello my name is ' + that.name);
//            console.log('this =>' + this);
//            console.log('that =>' + that);
//        },2000);
//    }
//};
//person.greet();

let Task = () => console.log('creating task');

let task =  new Task();