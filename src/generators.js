/**
 * Created by OSharyk on 11/24/2017.
 */
// function* generate() {
//     console.log('start');
//     yield 1;
//     yield 2;
//     yield 3;
//     console.log('Finish');
//     yield 4;
// }

// function generate() {
//     let current = 1;
//     console.log('Start');
//     return {
//         [Symbol.iterator](){
//             return {
//                 next(){
//                     let result = {value:undefined, done:true};
//
//                     if(current <= 3) {
//                         result.value = current;
//                         result.done = false;
//                         current++
//                     } else {
//                         result.value = undefined;
//                         result.done = true;
//                         console.log('Finish');
//                     }
//
//                     return result;
//                 }
//             }
//         }
//     }
// }

// console.log(typeof generate);
// let iterator = generate()[Symbol.iterator]();
// // iterator.next();
// // iterator.next();
// // iterator.next();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

let numbers = {
    *range(start, end){
        let current = start;
        while(current <= end) {
            yield current++;
        }
    }
};

for (let num of numbers.range(1,10)){
    console.log(num)
}