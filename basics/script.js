// basics start page 1

// // data types in javascript
// // Array, functions and objects

// array eg
// let fruits = ['apple', 'orange', 'banana'];

// function eg
// let code = function code(){
//     console.log('hello world');
// }

// object eg
// let person = {
//     name: "john",
//     last_name:"pepper"
// };

// // arrays allows us to store multiple data and use it 

// let friends = ['john', 'peter', 'bob', 'will'];
// console.log(friends[1]);
// console.log(person.last_name);

// // function allows us to perform several group of task

// function add(num1, num2){
//     return num1 + num2;
// }

// console.log(add(23, 24));

// // function can be stored in a variable
// let res = function divide(num1, num2){
//     return num1/num2;
// }

// console.log(res(30, 5));

// // falsy values
// // -0, 0, '', "", ``, NaN, null, undefned

// let falsy = 0;

// if(falsy){
//     console.log("this statment only runs for truth value");   
// } else {
//     console.log("this statement runs only for falsy value");    
// }

// // ternary operators
// let result = 19;
// function response (text) {
//     console.log(text + " number");
// }
// let expression = result % 2;
// expression === 0 ? response('even'): response('odd');

// // switch statement

// function daysofweek(day){
//     switch(day){
//         case 1: console.log("today is sunday");
//         break;
//         case 2: console.log("today is monday");
//         break;
//         case 3: console.log("today is tuesday");
//         break;
//         case 4: console.log("today is wednesday");
//         break;
//         case 5: console.log("today is thursday");
//         break;
//         case 6: console.log("today is friday");
//         break;
//         case 7: console.log("today is saturday");
//         break;
//         default: console.log("invalid input");
        
//     }
// }

// daysofweek(3);

// // strings and its functions

// let text = '"this is a string"';
// slice takes start index and end index from a string
// first character starts from 0 

// .length returns number of characters present in a string
// including special characters and spaces

// let len_text = text.slice(1, -1).length;

// console.log('the string we\'ve defined is: ' + text);

// console.log('the length of the string '
//             + text+ ' is '+  len_text);


// charAt returns character at specified index
// console.log('character at index 2 is: '
//             + text.slice(1,-1).charAt(2));

// console.log('do the string starts with "th" ? : '
//             + text.slice(1,-1).startsWith('th'));

// console.log('do the string ends with "ng" ? : '
//             + text.slice(1,-1).endsWith('ng'));

// console.log('uppercase conversion of string ' 
//             + text + ' is: '+ text.slice(1,-1).toUpperCase());

// console.log('lowercase conversion of string ' 
//             + text + ' is: '+ text.slice(1,-1).toLowerCase());

// console.log('the index of letter '
//             + text.slice(1, -1).charAt(3) 
//             + ' in ' + text + ' is: ' 
//             + text.slice(1,-1).indexOf('s'));

// console.log('do the string includes "this" ? : ' 
//             + text.slice(1,-1).includes('this'));

// // *** string templating latest update ***

// let name = "John";
// let age = 26;

// console.log(`hey it's ${name} and I am ${age} old`);

// console.log(`hey it's ${name} and I am ${age + 12} old`);

// console.log(`hey it's ${name +' Pepper'} and I am ${age} old`);

// // arrays are list of values consisting of index to each element
// // objects are collection of key value pair

// // arrays

// let names = [ 'john' , 'peter' , 'will' , 'smith', 1, 2, 3, 4 ];

// console.log(names);

// console.log(names.length);

// will return last character from the array names
// console.log(names[names.length-1]); 

// let more_name = ['bob', 'ben', 'gwen'];

// // concat doesnt chanegs the value of the existing array 
// // just it adds elements in array and expands it.
// console.log(names.concat(more_name));

// console.log(names);

// // changes the value of current array
// // unshift -> adds element at first position,
// // same as push but it expands the array

// console.log(names.unshift('susy') + ' unshift applied');
// // returns the length of the array

// console.log(names);

// // shift -> removes first element from the array,
// // same as pop but it shrinks the array

// console.log(names.shift());
// //returns the element when applied

// console.log(names);

// // push() 
// // adds element at end of array

// console.log(names.push('geta'));

// //returns length of the array

// console.log(names);

// // pop()
// // removes the last element from the array, 
//and the last element which was removed is assigned undefined
// console.log(names.pop());

// //returns the element removed

// console.log(names);

// // splice with array
// // removing elements from array or adding new elements
// // splice(starting index counting from 0, number of elements to delete)
// console.log(names.splice(2,3));

// console.log(names);

// // sort-> sorting elements in an array alphabetically

// console.log(names.sort());

// for( let i = 0; i < names.length; i++){
//     console.log(`your element at ${i} is ${names[i]}`);
// }

// // how to print new line symbol i.e. \n on console
// console.log('\\n');

// for ( let i = names.length-1; i >= 0 ; i--){
//     console.log(`your element at ${i} is ${names[i]}`);
// }

// // math object 

// let num = 3.55;
// let num1 = 3.22;
// console.log(`the floor value of ${num} is: ` + Math.floor(num));

// console.log(`the ceil value of ${num} is: ` + Math.ceil(num));

// console.log(`sqrt of ${num} is: ` + Math.sqrt(num));

// console.log(`math pi value: `+ Math.PI);

// console.log(`max value between ${num} and ${num1} is: `+ Math.max(num,num1));

// console.log(`min value between ${num} and ${num1} is: `+ Math.min(num,num1));

// // math random returns value between 0-1 but not 1
// // it is not fixed it changes on every usage

// console.log(`math random value is `+ Math.random());

// // how to get 1 - 10 random value
// // if we use floor it will give us value in between 0 - 9 coz 0.6 ~ 0
// // if we use ceil it will give us value in between 1 - 10 coz 0.6 ~ 1

// console.log(`the random value between 1 - 10 is: `+ Math.ceil(Math.random()*10));

// // date object

// const months = ['january', 'february', 'march', 'april', 'may', 'june',
// 'july', 'august', 'september', 'october', 'november' , 'december'];

// const days = ['sunday', 'monday', 'tuesday', 'wednesday',
// 'thursday', 'friday', 'saturday'];

// let date = new Date();

// console.log(date); 

// output :> Date 2018-11-20T05:57:40.284Z

// console.log(date.getMonth());

// output :> 10 

// here 0 is january, 1 is february, 2 is march... 
// upto 11 is december

// let month = date.getMonth();

// console.log(months[month]);

// here we are using month
// i.e. numerical value given by getMonth()
// function as index
// to print or use array elements

// let day = date.getDay();

// console.log(day);

// output :> 2

// here 0 is sunday 1 is monday, 2 is tuesday ...
// 6 is saturday

// console.log(days[day]);

// let hour = date.getHours();

// console.log(hour);

// let min = date.getMinutes();

// console.log(min);

// let sec = date.getSeconds();

// console.log(sec);

// // we can set time and use it for our project as;

// let date1 = new Date('1/12/2002'); 
// // month / date / year format

// // console.log(date1);

// date1.setDate(4);
// date1.setFullYear(2008);
// date1.setMonth(2);
// let month1 = date1.getMonth();
// console.log(month1);

// let toDoList = [];

// function addItem(arr){
//     let answer = prompt('what would you like to do today? ');
//     let correct = answer.toLowerCase().trim();
//     if(checkDuplicate(arr,correct)){
//         arr.push(correct);
//     } else {
//         alert('sorry item cannot be added cause it already exists');
//     }
// }

// function checkDuplicate(arr, item){
//     let isUnique = false;
//     let index = arr.indexOf(item);
//     console.log(index);
//     if(index!=-1){
//         isUnique = false;
//     } else {
//         isUnique = true;
//     }
//     console.log(isUnique);
//     return isUnique;
// }

// addItem(toDoList);
// addItem(toDoList);
// addItem(toDoList);

// full version....
// console.log(toDoList);

// declaring an empty array eg. bucket
// let toDoList = [];

// // function to insert element inside the array or bucket that we have created,
// // and checking the condition whether the element exists in bucket or not!!
// function addElement(arr){
//     // taking input from the user 
//     let element = prompt('what you wanna do today?');

//     // trimming the whitespace from both edges
//     let trimmed_lowercase_element = element.toLowerCase().trim();

//     // checking whether the element already exists in the array 
//     // if not it will return -1 if element exist it will return the index value of that element
//     if(checkDuplicate(arr,trimmed_lowercase_element)){
//         arr.push(trimmed_lowercase_element);
//         showElement(arr);
//     } else {
//         alert('the element already exists');
//     }
// }
// function checkDuplicate(arr, element){
//     if(arr.indexOf(element) != -1){
//         return false;
//     } else {
//         return true;
//     }
// }

// // printing out the array or butket list or todo list
// addElement(toDoList);
// addElement(toDoList);
// addElement(toDoList);

// function removeElementChoice(arr){
//     // taking input from user as string of which element to delete
//     // and trimming and converting it to lowercase
//     let answer = prompt('which element you want to delete ?');
//     let correct = answer.toLowerCase().trim();
    
//     // getting the index of that user taken string
//     let index = arr.indexOf(correct);

//     // checking if value exists in list
//     // and deleting it accordingly
//     if(!checkDuplicate(arr,correct)){
//         // deleting element using splice
//         arr.splice(index,1);
//     } else {
//         alert(` "${correct}" does not exist in list`)
//         console.log(` "${correct}" does not exist in list`);
//     }
// }
// // displaying elements
// function showElement(arr){
//     let element_string = 'you have list as : \n';
//     for(let i = 0; i < arr.length; i++){
//        element_string += `item no. ${i+1} and item: ${arr[i]} \n`;
//     }
//     alert(element_string);
// }
// // removeElement(toDoList);
// // removeElement(toDoList);
// // removeElement(toDoList);
// // removeElement(toDoList);
// removeElementChoice(toDoList);
// document.write(toDoList);

// reversing a string by passing it to a function

// function reverseString(text){
//     let splitArr = text.split('');
//     return splitArr.reverse().join(' ');
// }

// function longestWordInString(text){
//     let arr = text.split(' ');
//     let max = '';
//     for (let i = 0; i < arr.length; i++){
//         if(max.length < arr[i].length){
//             max = arr[i];
//         }
//     }
    
//     console.log(`the longest word in string "${text}" is ${max} length of word is ${max.length}`);
// }

// longestWordInString(prompt('enter string see longest word..'));

// pocket change modulus and math operator usage
// name given to amount of cent used

// quarters -> 25 cents
// dime -> 10 cents
// nickel -> 5 cents
// penny -> 1 cent

// how much money in your pocket makes:
// how much quaters , how much dimes,
// how much nickel, how much pennies?

// function returnChange(amount){
//     let quarters = Math.floor(amount/25);
//     amount = amount % 25;
//     console.log(`you have ${quarters} quarters and change left is ${amount}`);

//     let dimes = Math.floor(amount/10);
//     amount = amount % 10;
//     console.log(`you have ${dimes} dimes and change left is ${amount}`);

//     let nickels = Math.floor(amount/5);
//     amount = amount % 5;
//     console.log(`you have ${nickels} nickels and change left is ${amount}`);

//     let pennies = Math.floor(amount/1);
//     console.log(`you have ${pennies} pennies left`);
// }

// returnChange(276);

// quiz problem

// const questions = [
//     ['Who is the owner of this computer?', 'khizar'],
//     ['What is his age ?', 23],
//     ['His religion is ?', 'islam']
// ]
// let score = 0;
// function quiz(questions){
//     let answer;
//     for(let i = 0; i< questions.length; i++){
//         answer = prompt(questions[i][0]);
//         console.log(questions[i][1] + " you answered "+ answer);
//         if(answer == questions[i][1]){
//             score++;
//             console.log(`your score ${score}`);
//         } else {
//             alert(`wrong answer, the correct answer is ${questions[i][1]}`);
//         }
//     }
//     return {
//         'scorePercent' : ((score/questions.length)*100).toFixed(2),
//         'score' : score
//     };
// }
// let objectReturnedFromQuiz = quiz(questions);
// alert(`your score is ${objectReturnedFromQuiz.score} and your percentage is ${objectReturnedFromQuiz.scorePercent}`);

// // difference between var and let, var is function scoped and let is block scoped
// // in var the variable is defined for whole script but the value assigned is not done
// // in let the variable is not defined for whole script it throws error 

// // i.e. 

// // printing a which is a let defined variable will show error
// console.log(a);

// let a = 0;
// // printing b which is a var defined variable will show undefined 
// // as it has been declared for whole program but the value is not assigned

// console.log(b);

// var b = 'this is defference';

// global scope and local scope
// let sayHi = "hey, Hi";

// function greeting(){
//     let peterFromHome = 'hello from the function';
//     let peterGilligan = 'i am peter Gilligan';
//     peter = 'peter';
//     console.log(peterFromHome);
// }
// greeting();
// // console.log(peterGilligan); // gives an error that peterGilligan is not defined
// // here we get the output as peter because javascript watches peter is not defined with keyword hence it defines itself over a global scope
// console.log(peter); 
// console.log(sayHi);

// more global scope and local scope

// let generalNumber = 5;

// function add(num1, num2){
//     let result = num1 + num2 + generalNumber;

//     function multiply(){
//         // for this codeblock result is searched in upper codeblock
//         // and so as for generalNumber 
//         // generalNumber is searched in this codeblock 
//         // if not found seen on upper codeblock at function add()
//         // if not found seen on upeer code block i.e. at global 
//         // and used thereafter
//         console.log(generalNumber * result);

//     }

//     multiply();
//     return result;
// }

// console.log(add(10,20));

// higher order functions 

// builtin function
// 1. setTimeout(); delay time, while running
// 2. setInterval(); run all the time with a certain delay
// 3. alert();
// 4. prompt(); etc..

// callback function
// takes anonymous function and delay time in mili second

// the function given will run after delay time
// setTimeout(function(){
//     alert('3 sec passed');
// },3000);

// takes function name and delay time to run function at an interval of time in millisecond
// setInterval(sayHello, 2000);
// // will run continuously after every 2 sec

// function sayHello(){
//     alert('this popup will run after every 2 sec')
// }

// callback function 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = numbers.filter(isEven);
// // here isEven is a function which is passed in filter method

// function isEven(number){
//     return number % 2 === 0;
// }

// console.log(even);

// or
// here an anonymous function is passed in filter method
// even1 = numbers.filter(function(number){
//     if(number % 2 === 0){
//         return number;
//     }
// });

// console.log(even1);

// // note: filter method takes function as an argument and 
// // returns only those values which passes the condition 
// // from the function.

// const click = document.getElementById('clickMe');

// click.addEventListener('click', alertBox);

// function alertBox(){
//     alert('you have clicked me!!');
// }

// // or 

// click.addEventListener('mouseover',function(){
//     console.log("hovered");
// });

// click.addEventListener('mouseleave',function(){
//     console.log("leaved");    
// });

// array iterators 
// forEach, filter, map, reduce
// no need for loop, they iterate all elements

// filter and map returns array

// reduce can return more than just array

// forEach
// it iterates through all elements 
// it calls a callback function

// const names = [ 'john', 'bob', 'susy'];

// names.forEach(showName);

// function showName(name, index){
//     console.log(`${name} is in ${index}`);
// }

// // or .

// names.forEach(function(name, index){
//     console.log(`${name} is in ${index}`);
// });

// array filter method 
// it iterates through all elements
// it calls a callback function

// we have done filter function earlier 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let even = numbers.filter(function(number){
//     return number % 2 === 0;
// });

// console.log(even);

// map

// loop through array
// call a callback function on each iteration
// returns new array
// similar to filter 
// filter changes size of array and not the value by looking at the condition
// map changes the value in the array and does not changes the size

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// let timesTwo = numbers.map(function(number){
//     return number * 2;
// });

// console.log(timesTwo);
// // we can modify the array and store it in other array 
// // here numbers was an array and we stored the modified array in timesTwo

// const names = [ 'bob', 'john', 'susy'];

// let fullNames = names.map(function(name){
//     return `${name} anderson`;
// });

// console.log(fullNames);

// reduce 

// loops through the array 
// calls a callback function
// reduce reduces the value and returns a single value
// reduce takes 2 arguments : callback function and the accumulator value
// the callback function will take 2 parameters 
// first one -> accumulator => total calculation 
// second one -> current => current value iterating in array

// const numbers = [10,1,2,3,4,5];

// let totalValue = numbers.reduce(function (accumulator, current){
//     console.log('iteration value ' + current);
//     console.log("this is total " + accumulator);
//     accumulator = accumulator + current;
//     //always return accumulator otherwise it wont work
//     return accumulator;
// },5);

// const fruits = ['orange','banana','apple','orange','pear','banana','apple'];
// const distinct_fruit = fruits.reduce(function(accumulator, current){
//     if(accumulator.indexOf(current) === -1){
//         accumulator.push(current);
//     }
//     return accumulator;
// },[]); // <- it depends on what we want to get!!

// console.log(distinct_fruit);

//another best example of reduce

// const fruits = ['orange','apple','banana','pear','orange','apple','banana','pear','guava'];

// const types = fruits.reduce(function(total, fruit){
//     if(total[fruit]){
//         total[fruit] += 1;
//     } else {
//         total[fruit] = 1;
//     }
//     return total;
// },{});

// console.log(types);

// chaining iterators

// const fruits = ['oranges', 'apple', 'cherry', 'banana', 'pineapple','oranges' ,'apple','oranges'];

// let result = fruits.filter(function(fruit){
//     return fruit === 'oranges';
// }).map(function(name){
//     return `${name} is on sale`;
// });

// console.log(result);

// conversion problems

// celsius = (fahr-32) * 5/9;
// fahr = celsius * 9/5 + 32;

// function toFahrenheit(temp){
//     let fahr = (temp * 9/5 + 32).toFixed(2);
//     console.log(`the ${temp} degrees in C is ${fahr} degrees in F`);
// }

// function toCelsius(temp){
//     let celsius = ((temp - 32) * 5/9).toFixed(2);
//     console.log(`the ${temp} degrees in F is ${celsius} degrees in C`)
// }
// toFahrenheit(34);
// toCelsius(93.20);

// 1 inch = 2.54 cm
// 1 foot = 12 inches

// function toCm(feet, inches){
//     if((feet<0) || (inches<0)){
//         return;
//     }

//     let centimeters = (feet*12)*2.54;
//     centimeters += inches * 2.54;
//     console.log(`your conversion of ${feet} feet and ${inches} inches to cm is :${centimeters.toFixed(2)} cms`);
// }

// toCm(12, 5);
// toCm(-1,20);
// toCm(3,-39);

// object literals
// about objects 
// objects are key value pair
// objects property if it is a function it is called a method
// everything in javascript is one of the six primitive data types or either objects
// 6 primitive data types are
// undefined, string, number, boolean, null, symbol(new in ECMAScript2015)

// // object literals
// const person = {};
// // constructor function
// const secondPerson = new Object();
// // adding property
// person.name = 'john';
// console.log(person);
// //accessing property
// console.log(person.name);

// //modify property
// person.name = 'bob';
// console.log('object modified', person);

// //access modified property
// console.log(person['name']);

// // assign value
// let lastName = person.lastName;
// console.log(lastName);

// // check if exists
// let check = 'lastName' in person;
// console.log(check)

// // check with undefined

// if(person.lastName === undefined){

// }
// // delete property
// delete person.name;

// console.log(person);

// // create object 

// const human = {
//     name :'johniser',
//     nickName : 'john',
//     height : 7,
//     weight : 200,
//     married : false,
//     education : true,
//     friends:['john','bob'],
//     sign(){
//         return `i'm missing`;
//     },
//     'hey':function(){
//         return `okay`;
//     }
// }

// // access methods from objects
// let song = human.sign();
// console.log(song);
// console.log(human.hey());

// // iterate objects

// for(const key in human){
//     console.log(`${key} : ${human[key]}`);
// }

// // nested object

// const people = {
//     person1:{
//         name:'susy',
//         age:34
//     },
//     person2:{
//         name:'john',
//         age:23
//     },
//     person3:{
//         name:'bob',
//         age:32
//     },
// }

// console.log(`this is the nested object value: ${people.person1.name}`);

// // object as a parameter

// function hello({greet,name}){
//     return `${greet} !!!!!!! ${name}`;
// }

// let greetPerson = hello({name:'john',greet:'hello there!!...'});
// console.log(greetPerson);

// score exercises

// const scores = [
//     {name:'john',score:87},
//     {name:'susy',score:97},
//     {name:'bob',score:67},
//     {name:'peter',score:77}
// ];

// let totalScores = 0;

// for(let i =0;i<scores.length;i++){
//     totalScores += scores[i].score;
// }

// console.log(totalScores);
// let average = totalScores / scores.length;
// console.log(average);

// for(let i = 0; i< scores.length; i++){
//     if(scores[i].score>average){
//         scores[i].betterThanAverage = true;
//     }else{
//         scores[i].betterThanAverage = false;
//     }
// }

// console.log(scores);