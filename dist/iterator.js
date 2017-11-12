'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var xmen = ['Cyclops', 'Wolverine', 'Rouge'];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = xmen[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var xman = _step.value;

        console.log(xman);
    }

    //console.log(typeof xmen[Symbol.iterator]);
    //console.log(xmen[Symbol.iterator]());
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var iterator = xmen[Symbol.iterator]();

//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.length);

var next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}

var randomGenerator = _defineProperty({
    generate: function generate() {
        return this[Symbol.iterator]();
    }
}, Symbol.iterator, function () {
    var count = 0;
    return {
        next: function next() {
            var value = Math.ceil(Math.random() * 100);
            var done = count > 9;
            count += 1;
            return {
                value: value,
                done: done
            };
        }
    };
});

//for (let random of randomGenerator){
//    console.log(random);
//    //if (id > 100) {
//    //    break;
//    //}
//}

//let random = randomGenerator[Symbol.iterator]();
var random = randomGenerator.generate();
console.log(random.next().value);

var ArrayIterator = function () {
    function ArrayIterator(array) {
        _classCallCheck(this, ArrayIterator);

        this.array = array.map(function (item) {
            return item;
        }).sort();
        //this.array = array;
        this.index = 0;
    }

    _createClass(ArrayIterator, [{
        key: 'next',
        value: function next() {
            var result = {
                value: undefined,
                done: true
            };

            if (this.index < this.array.length) {
                result.value = this.array[this.index];
                result.done = false;
                this.index += 1;
            }

            return result;
        }
    }]);

    return ArrayIterator;
}();

var TaskList = function () {
    function TaskList() {
        _classCallCheck(this, TaskList);

        this.tasks = [];
    }

    _createClass(TaskList, [{
        key: 'addTask',
        value: function addTask() {
            for (var _len = arguments.length, tasks = Array(_len), _key = 0; _key < _len; _key++) {
                tasks[_key] = arguments[_key];
            }

            this.tasks = this.tasks.concat(tasks);
        }
    }, {
        key: Symbol.iterator,
        value: function value() {

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
    }]);

    return TaskList;
}();

var taskList = new TaskList();
taskList.addTask('Learn English', 'Learn ES6', 'Learn Reatc');

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = taskList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var task = _step2.value;

        console.log(task);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}