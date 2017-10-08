'use strict';

var person = {
    firstName: 'Oleg',
    lastName: 'Sharyk'
};

console.log(person.firstName);
console.log(person.lastName);
//let {firstname, lastname} = person;
//let {firstname: first, lastname: last} = person;
//console.log(first + ' ' + last);

var _name$country = { name: 'barcelona', country: 'spain' },
    name = _name$country.name,
    country = _name$country.country;

console.log(name + ' ' + country);

var user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook: 'fb.com/johndoe',
        twitter: 'twitter.com/jdoe'
    }
};

var first = user.firstname,
    last = user.lastname,
    fb = user.social.facebook,
    _user$age = user.age,
    age = _user$age === undefined ? 35 : _user$age;


console.log(first, last, fb, age);

function post(url, _ref) {
    var _ref$data = _ref.data,
        firstname = _ref$data.firstname,
        lastname = _ref$data.lastname,
        cache = _ref.cache;

    console.log(firstname);
    console.log(lastname);
    console.log(cache);
}

var result = post('api/users', { data: user, cache: false });

function getUserInfo() {
    return {
        firstname: 'John',
        lastname: 'Doe',
        social: {
            facebook: 'fb.com/johndoe',
            twitter: 'twitter.com/jdoe'
        }
    };
}

var _getUserInfo = getUserInfo(),
    firstname = _getUserInfo.firstname,
    lastname = _getUserInfo.lastname,
    tw = _getUserInfo.social.twitter;

console.log(firstname, lastname, tw);