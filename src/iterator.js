'use strict';

let xmen = ['Cyclops', 'Wolverine', 'Rouge'];

for (let xman of xmen){
    console.log(xman)
}

//console.log(typeof xmen[Symbol.iterator]);
//console.log(xmen[Symbol.iterator]());

let iterator = xmen[Symbol.iterator]();

//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.length);

let next = iterator.next();

while (!next.done){
    console.log(next.value);
    next = iterator.next();
}

let randomGenerator = {
    generate(){
        return this[Symbol.iterator]()
    },

    [Symbol.iterator](){
        let count = 0;
        return {
            next(){
                let value = Math.ceil(Math.random() * 100);
                let done = count> 9;
                count += 1;
                return{
                    value,
                    done
                }
            }
        }
    }
}

//for (let random of randomGenerator){
//    console.log(random);
//    //if (id > 100) {
//    //    break;
//    //}
//}

//let random = randomGenerator[Symbol.iterator]();
let random = randomGenerator.generate();
console.log(random.next().value);

class ArrayIterator {
    constructor(array){
        this.array = array.map(item => item).sort();
        //this.array = array;
        this.index = 0;
    }

    next(){
        let result = {
            value:undefined,
            done: true
        };

        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index += 1;
        }

        return result;
    }
}

class TaskList {
    constructor(){
        this.tasks = [];
    }

    addTask(...tasks){
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {

        return new ArrayIterator(this.tasks);

        //let tasks = this.tasks;
        //let index = 0;
        //
        //return {
        //    next(){
        //        let result = {
        //            value:undefined,
        //            done: true
        //        };
        //
        //        if (index < tasks.length) {
        //            result.value = tasks[index];
        //            result.done = false;
        //            index += 1;
        //        }
        //
        //        return result;
        //    }
        //}
    }
}

let taskList = new TaskList();
taskList.addTask('Learn English', 'Learn ES6', 'Learn Reatc');

for (let task of taskList){
    console.log(task);
}

