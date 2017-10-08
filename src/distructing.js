//let languages = ['javascript', 'PHP', 'Python', 'Ruby'];

//let js = languages[0];
//let php = languages[1];
//let py = languages[2];
//let rb = languages[3];

let [js,php,py,rb, c] = ['javascript', 'PHP', 'Python', 'Ruby', 'c++'];

console.log(js,php,py,rb,c);

let scores = [3,4,5];
let scores2 = [3,4,5];
let [low,mid,high] = scores;
let [low2, ,high2] = scores2;

console.log(low,mid,high);
console.log(low2,high2);

let scores3 = [3,4,5,6,7,8,9];
let [low3, ...rest] = scores3;

console.log(low,rest);

function computeScore([low,mid]){
    console.log('low ' + low + ' mid ' + mid)
}

computeScore([30,40]);

function getScores(){
    return [3,4, 5];
}

let sco = getScores();
console.log(sco);
let [x,y,z] = getScores();
console.log(x,y,z);

let yes = 'yes';
let no = 'no';

[yes,no] = [no,yes];
console.log('Yes is ' + yes);
console.log('No is ' + no);