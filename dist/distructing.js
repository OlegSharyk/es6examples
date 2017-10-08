'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//let languages = ['javascript', 'PHP', 'Python', 'Ruby'];

//let js = languages[0];
//let php = languages[1];
//let py = languages[2];
//let rb = languages[3];

var js = 'javascript',
    php = 'PHP',
    py = 'Python',
    rb = 'Ruby',
    c = 'c++';


console.log(js, php, py, rb, c);

var scores = [3, 4, 5];
var scores2 = [3, 4, 5];
var low = scores[0],
    mid = scores[1],
    high = scores[2];
var low2 = scores2[0],
    high2 = scores2[2];


console.log(low, mid, high);
console.log(low2, high2);

var scores3 = [3, 4, 5, 6, 7, 8, 9];
var low3 = scores3[0],
    rest = scores3.slice(1);


console.log(low, rest);

function computeScore(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        low = _ref2[0],
        mid = _ref2[1];

    console.log('low ' + low + ' mid ' + mid);
}

computeScore([30, 40]);

function getScores() {
    return [3, 4, 5];
}

var sco = getScores();
console.log(sco);

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    x = _getScores2[0],
    y = _getScores2[1],
    z = _getScores2[2];

console.log(x, y, z);

var yes = 'yes';
var no = 'no';

var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];

console.log('Yes is ' + yes);
console.log('No is ' + no);