let person = {
    firstName:'Oleg',
    lastName:'Sharyk'
};

console.log(person.firstName);
console.log(person.lastName);
//let {firstname, lastname} = person;
//let {firstname: first, lastname: last} = person;
//console.log(first + ' ' + last);

let {name, country} = {name:'barcelona',country:'spain'};
console.log(name + ' ' + country);

let user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook:'fb.com/johndoe',
        twitter:'twitter.com/jdoe'
    }
};

let {firstname:first, lastname:last, social:{facebook: fb}, age = 35} = user;

console.log(first,last,fb,age);

function post(url,{data: {firstname,lastname},cache}){
    console.log(firstname);
    console.log(lastname);
    console.log(cache);
}

let result = post('api/users', {data:user , cache: false});

function getUserInfo(){
    return {
        firstname: 'John',
        lastname: 'Doe',
        social: {
            facebook:'fb.com/johndoe',
            twitter:'twitter.com/jdoe'
        }
    }
}

let {firstname,lastname, social:{twitter:tw}} = getUserInfo();

console.log(firstname,lastname, tw);