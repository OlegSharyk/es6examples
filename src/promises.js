//function applyForVisa(documents, resolve, reject){
//    console.log('Обработка заявления...');
//
//    setTimeout(function(){
//        Math.random()> 0.5 ? resolve({}) : reject ('В визе отказано: нехватка документов');
//    },2000)
//}
//
//function bookHotel(){
//
//}
//
//function buyTickets(){
//
//}
//
//applyForVisa({},
//    function(visa){
//        console.log('Виза получена');
//        bookHotel(visa,
//            function(reservation){
//                buyTickets(reservation,
//                    function(){},
//                    function(){}
//                )
//            },
//            function(error){
//
//            });
//    },
//    function(reason){
//        console.error(reason)
//    }
//);


function applyForVisa(documents){
    console.log('Обработка заявления...');
    let promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            Math.random()> 0 ? resolve({}) : reject ('В визе отказано: нехватка документов');
        },2000)
    });
    return promise;
}

function getVisa(visa){
    console.info('ВИза получена');
    return new Promise.resolve(function(resolve,reject){
        setTimeout(() => resolve(visa),2000);
    });
}

function bookHotel(visa){
    console.log(visa);
    console.log('Book a hotel');
    return new Promise.resolve(visa)
}

function buyTickets(booking){
    console.log('But tickets');
    console.log('Book', booking);
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error));
