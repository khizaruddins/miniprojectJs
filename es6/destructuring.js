// assignment destructuring
// binds properties to variable
// we can do taht with objects arrays and functions

// old way

const person = {
    name: "john",
    lastName: "anderson",
    age: 35,
    surName: "miller",
    address: "50 street, short villa, New York"
}
// old way to bind object property to variables
const name1 = person.name;
const lastName1 = person.lastName;

// es6 destructuring 

const { name:shortName, age:old, lastName, surName } = person;
console.log(shortName, old, lastName, surName);

// arrays destructuring

const distance = [100, 50, 200];

const [home, store, work] = distance;
console.log(home, store, work);

// swapping
let num1 = 5;
let num2 = -10;

let num3 = num1;
num1 = num2;
num2 = num3;

console.log(num1 , num2);

// destructuring swap
[num1, num2] = [num2, num1];
console.log(num1, num2);

// skipping items

const items = ['orange', 'pants', 'candy'];

const [fruit, ,sweets] = items;
console.log(fruit, sweets);

// default item
const item1 = ['orange', 'banana'];
const [fruit1, ,sweet1 = 'chocolate'] = item1;

console.log(fruit1, sweet1);

// function parameters 

function sayName({name, lastName}){
    console.log(name);
    console.log(lastName);    
}

sayName(person);

function getPerson(){
    return{
        name2: "bob",
        lastName1: "jordon",
        age1: 47
    }
}

const {name2, age1} = getPerson();

console.log(name2, age1);
