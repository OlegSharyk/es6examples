console.log('------------------START classes');

class Task {
    constructor(title = Task.getDefaultTitle()){
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('new task creating');
    }

    get done(){
        return this._done === true ? 'Finish' : 'Not complete';
    }

    set done(value){
        if (value !== undefined && typeof value === 'boolean'){
            this._done = value;
        } else {
            console.log('Error! set true or false')
        }
    }

    complete(){
        this._done = true;
        console.log(`Task ${this.title} finished` );
    }

    static getDefaultTitle(){
        return 'Default Task';
    }
}

Task.count = 0;

let task1 = new Task('Clean big room');
let task2 = new Task('Buy a products');
let task3 = new Task();

//console.log(typeof Task);
//console.log(task1 instanceof Task);
//console.log(task1.title);
//console.log(task2.title);
//console.log(task3.title);
//console.log(Task.count);
//console.log(task1.done, task1._done);
//
task1.complete();
console.log(task1.done, task1._done);

console.log('------------------END classes');