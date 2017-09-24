console.log('------------------START nasledovanie');


//let Task = class {
//
//}

//let Task = class Task{
//
//}

class Task {
    constructor(title){
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Creating task');
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    static getDefaultTitle(){
        return 'Task';
    }

    complete(){
        this.done = true;
        console.log(`Task ${this.title} completed`);
    }
}

Task.count = 0;

class SubTask extends Task{
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Creating subtask');
    }
    complete(){
        //this.done = true;
        super.complete();
        console.log(`SubTask ${this.title} completed`);
    }
}


let task = new Task('Learn js');
let subtask = new SubTask('Learn ES6', task);

console.log(task);
console.log(subtask);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

console.log(subtask instanceof SubTask);
console.log(subtask instanceof Task);

console.log('------------------END nasledovanie');