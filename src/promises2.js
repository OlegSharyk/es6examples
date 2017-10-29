'use strict';

let movieList = document.getElementById('movies');

function addMovieToList(movie){
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let img = document.createElement('img');
    img.src = movie.Poster;
    div.appendChild(img);
    h3.innerText = movie.Title;
    div.appendChild(h3);
    movieList.appendChild(div);
}

function getData(url){
    return new Promise (function(resolve,rejext){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        //console.log(xhr);
        xhr.onload = function(){
            console.log(xhr.status);
            if(xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                resolve(json.Search)
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function(error){
            reject(error);
        };

        xhr.send();
    });
}

//let search = 'spider man';
let search = 'batman';
//let search = 'transformers';

getData(`https://www.omdbapi.com/?apikey=57d13b99&s=${search}`)
    .then(movies => movies.forEach(movie => addMovieToList(movie)))
    .catch(error => console.error(error));

function go(num){
    return new Promise(function(resolve,reject){
        let delay = Math.ceil(Math.random()*3000);
        console.log(num, delay);
        setTimeout(() => {
            if (delay > 2000)
                reject(num)
            else
                resolve(num)
        }, delay);
    })
}

let p1 = go(1);
let p2 = go(2);
let p3 = go(3);

//Promise.all([p2,p1,p3])
//    .then(value => console.log(value))
//    .catch(error => console.error(error));
Promise.race([p2,p1,p3])
    .then(value => console.log(value))
.catch(error => console.error(error));


//'use strict';
//
//let movieList = document.getElementById('movies');
//
//function addMovieToList(movie){
//    let div = document.createElement('div');
//    let h3 = document.createElement('h3');
//    let img = document.createElement('img');
//    img.src = movie.Poster;
//    div.appendChild(img);
//    h3.innerText = movie.Title;
//    div.appendChild(h3);
//    movieList.appendChild(div);
//}
//
//function getData(url,done){
//    //console.log('enter get data');
//    let xhr = new XMLHttpRequest();
//    xhr.open('GET', url);
//    //console.log(xhr);
//    xhr.onload = function(){
//        console.log(xhr.status);
//        if(xhr.status === 200) {
//            let json = JSON.parse(xhr.response);
//            console.log(json);
//            done(json.Search)
//        } else {
//            console.log(xhr.statusText);
//        }
//    };
//
//    xhr.onerror = function(error){
//        console.log(error);
//    };
//
//    xhr.send();
//}
//
//let search = 'spider man';
////let search = 'transformers';
//
//getData(`https://www.omdbapi.com/?apikey=57d13b99&s=${search}`, function(movies){
//    console.log('https://www.omdbapi.com/?apikey=57d13b99&s=${spider man}');
//movies.forEach(function(movie){
//    addMovieToList(movie)
//});
//});
