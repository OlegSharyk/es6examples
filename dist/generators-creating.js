"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generateArray),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(generator);

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

function generateArray() {
    return regeneratorRuntime.wrap(function generateArray$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    return _context.delegateYield([1, 2, 3], "t0", 1);

                case 1:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function generator() {
    return regeneratorRuntime.wrap(function generator$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return 42;

                case 2:
                    return _context2.delegateYield(generateArray(), "t0", 3);

                case 3:
                    _context2.next = 5;
                    return 43;

                case 5:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

var iterator = generator();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
// console.log(iterator.next(1));
// console.log(iterator.next(2));
// console.log(iterator.next(3));