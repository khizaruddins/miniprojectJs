// var, let, const

// define, re define, update variables 

// define 
var number = 100;
console.log(number);

// update
number = 200;
console.log(number);

// redefine
var number = 'orange';
console.log(number);

// let define
let amount = 100;
console.log(amount);

// update
amount = 200;
console.log(amount);

// but redefine does not occurs
// let amount = "orange";
// error occurs redeclaration cannot be done

// const define
const total = 100;
console.log(total);

// but update  does not occur
// total = 200;
// console.log(total);
// error occurs const value cannot be changed

// but mutation can be done
const person = {
    name: "bob",    
}
// allows to mutate the value in referenced type
person.name = "peter";
// allowed to change in reference type values
console.log(person.name);
// we cannot do, person = [];

// ***************************************************************************
// *****************************************************************************
// diff between var, let , const
// scope difference

// let and const are block scope
// var are function scope

// global scope

function greeting(){
    // local scope 
    var value = "hello";
}
// we cannot access value outside the function 
// but we can declare var value and use it but it will have different value and not what is in function

// let 
function greeting1(){
    // local scope
    let greet = "hello let";
    console.log(greet);
}

let greet = 100;
console.log(greet);

// block scope testing
// var

var test = true;

var sum = 1000;

if(test){
    var sum = "oranges and onions";
    // var changes global scope variable sum
}

console.log('your salary is: (var test) : ' + sum);

// whereas in let 

let test1 = true;
let sum1 = 1000;

if(test1){
    // block scope no change
    let sum1 = "oranges and onions and bananas";
}

console.log('your salary is : (let test) : '+ sum1);

// accessing variable test
// var
console.log(udemy);

var udemy = 100;
// when variable are defined using var they are hoisted 
// all the way to the top of the document
// so the udemy variable is defined but its value is set to undefined

// let 

// console.log(udemy1);

let udemy1 = 200;

// as let is not global scope and it will throw an error

// *************************************************************
// *************************************************************

// template literals syntax

const name = "bob";
const age = 23;
const loc = "New York";
const div = document.createElement('div');
div.textContent = `
    my name is ${name} and im ${age} years old, i live in ${loc}
`;

document.body.appendChild(div);
