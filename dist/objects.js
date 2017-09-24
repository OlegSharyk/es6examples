"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('------------------START objects');
var firstName = "OLeg";
var lastName = "Sharyk";
var email = "osharyk@docshark.gmail";

//let person = {
//    firstName:firstName,
//    lastName: lastName,
//    email: email
//};

//let person = {
//    firstName,
//    lastName,
//    email,
//    seyHello: function(){
//        console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
//    }
//};

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    seyHello: function seyHello() {
        console.log("Hi my name is " + this.firstName + " " + this.lastName);
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

//Object.defineProperty(person,'fullName',{
//    get:function(){
//        return this.firstName + ' ' + this.lastName;
//    },
//    set: function(value){
//        this.firstName = value;
//    }
//});


console.log(person);
person.seyHello();

person.firstName;
person['firstName'];

var property = 'firstName';
person[property];

//person = {
//    [property]: Bill
//}

function createCar(property, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, 'get' + property, function () {
        return this[property];
    }), _ref;
}

console.log(createCar('vin', 12345));

console.log('------------------END objects');