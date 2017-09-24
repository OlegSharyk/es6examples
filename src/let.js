console.log('------------------START let');
//if (true) {
//    var version = 'ES5'
//}


//console.log(version);
//let version = 'ES6';
//console.log(version);

var buttons = document.querySelectorAll('button');

//for (var i=0; i<buttons.length; i++) {
//    var button = buttons[i];
//    button.innerText = i;
//    button.onclick = function(){
//        console.log(i);
//    }
//}

for (let i=0; i<buttons.length; i++) {
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function(){
        console.log(i);
    }
}
console.log('------------------END let');

