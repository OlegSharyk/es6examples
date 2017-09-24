'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('------------------START classes');

var Task = function () {
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

        _classCallCheck(this, Task);

        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('new task creating');
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this._done = true;
            console.log('Task ' + this.title + ' finished');
        }
    }, {
        key: 'done',
        get: function get() {
            return this._done === true ? 'Finish' : 'Not complete';
        },
        set: function set(value) {
            if (value !== undefined && typeof value === 'boolean') {
                this._done = value;
            } else {
                console.log('Error! set true or false');
            }
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return 'Default Task';
        }
    }]);

    return Task;
}();

Task.count = 0;

var task1 = new Task('Clean big room');
var task2 = new Task('Buy a products');
var task3 = new Task();

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