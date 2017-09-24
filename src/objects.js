console.log('------------------START objects');
let firstName = "OLeg";
let lastName = "Sharyk";
let email = "osharyk@docshark.gmail";

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

let person = {
    firstName,
    lastName,
    email,
    seyHello(){
        console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
    },
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value){
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

let property = 'firstName';
person[property];

//person = {
//    [property]: Bill
//}

function createCar(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property]
        }
    }
}

console.log(createCar('vin',12345));


console.log('------------------END objects');