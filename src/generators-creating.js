/**
 * Created by OSharyk on 11/24/2017.
 */

// let generator =function*(){
//
// }
// let obj = {
//     *generator(){
//
//     }
// }
//
// class someClass {
//     *generator(){}
// }

function* generateArray() {
    yield* [1,2,3];
}


function* generator(){
    // let result = 1 + (yield);
    // let array = [yield, yield, yield];
    // console.log(array[2]);

    yield 42;
    // yield* [1,2,3];
    yield* generateArray();
    yield 43;

}


let iterator = generator();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
// console.log(iterator.next(1));
// console.log(iterator.next(2));
// console.log(iterator.next(3));