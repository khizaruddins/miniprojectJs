// arrow functions or fat arrow functions
// no name 
// no function keyword
// parameters and return statement

// no parameter

function sayHi(){
    console.log("hi");
}
sayHi();

const hello =  function(name){
    console.log(`hello ${name}`);
}

hello('bob');

// zero parameter arrow function
// note in one liner code no need of return statement
let hello1 = () => console.log('hello arrow');

hello1();

// one parameter  need to give brackets
let double = num => num * 2;
let num = double(4);
console.log(num);

// two parameter and more than one line 
// alway use paranthesis for more than one parameter
let multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
}

let mul = multiply(4,5);
console.log(mul);

// returning the objects and one line
const obj = () => ({name:"bob", age:34});
const person = obj();
console.log(person);

// using array functions

const numbers = [1,2,3,4,5,6,7,8,9];
const bigNorm = numbers.filter(function(item){
    return item > 2;
});
console.log(bigNorm);

const big = numbers.filter((number) => number > 2);
// one parameter doesnt needs paranthesis, hence
const big1 = numbers.filter(number => number > 2);

console.log(big);

// event listener

document.getElementById('btn').addEventListener('click', () => console.log('you clicked me'));

// arrow functions and this keyword

const clock = {
    time: 0,
    stopWatch : function(){
        const self = this;
        // we can skip this using arrow function as in arrow function this points to containing scope
        setInterval(function(){
            console.log(self.time++);
        },1000);
    }
}

// clock.stopWatch();

const clock1 = {
    time: 0,
    stopWatch: function() {
        setInterval(() => {
            console.log(this.time++);
        }, 1000);
    }
}

// clock1.stopWatch();

function UI(number){
    this.number = number;   
}

UI.prototype.addNumber = function() {
    document.getElementById('btn').addEventListener('click', () =>{
        console.log(this.number++);
    });
}

const ui = new UI(0);

ui.addNumber();