// basics start page 3

// event handling
// event is used to create the user interaction with the webpage

// const btn = document.querySelector('.btn');
// btn.addEventListener('click',function(){
//     document.getElementById('item').classList.add('special');
// });

// mouse events

// const para = document.getElementById('item1');
// const heading = document.getElementById('heading');

// para.addEventListener('click',function(){
//     console.log('you clicked');
// });

// heading.addEventListener('mouseup',function(){
//     console.log('up');
// });

// heading.addEventListener('mousedown',function(){
//     console.log('down');
// });

// heading.addEventListener('mouseover',function(){
//     document.getElementById('heading').classList.add('special');
// });

// mouseout or mouseleave are same
// heading.addEventListener('mouseout',function(){
//     document.getElementById('heading').classList.remove('special');
// });

// key events
// keydown -- when key is down
// keyup -- when key is released
// keypress -- when key is pressed

// const name = document.getElementById('name');

// name.addEventListener('keypress',function(){
//     console.log('key pressed');
// });

// name.addEventListener('keydown',function(){
//     console.log('key down');
// });

// name.addEventListener('keyup',function(){
//     console.log('key released');
// });

// name.addEventListener('keyup',function(){
//     console.log(name.value);
// });

// event object
// event type
// event target
// event preventDefault()

// event type 
// const link = document.getElementById('link');
// link.addEventListener('click',function(event){ 
//     // here event is the event object
//     // console.log(event.type);
//     event.preventDefault();
//     // prevents the default behaviour
//     console.log(event.target);
// event.target gives on which element the event is fired
// });

// event propagation, bubbling, capturing
// event propagation -- order of the events fired

// event bubbling
// event getting fired for child node gets fired upto root node

// document.getElementById('container').addEventListener('click',function(){
//     console.log('you clicked root container');
// });

// document.getElementById('list').addEventListener('click',function(){
//     console.log('you clicked on the unordered list');
// });

// document.querySelectorAll('.list-item').forEach(function(item){
//     item.addEventListener('click',function(){
//         console.log('you clicked on list item');
//     });
// });

// now if we click on list item all messages are displayed

// in addEventListener the third parameter is false by default 
// which is for event capturing
// so if we give third element true 
// we are enabling the event capturing method
// document.getElementById('container').addEventListener('click',function(){
//     console.log('you clicked root container');
// },true);

// document.getElementById('list').addEventListener('click',function(){
//     console.log('you clicked on the unordered list');
// },true);

// document.querySelectorAll('.list-item').forEach(function(item){
//     item.addEventListener('click',function(){
//         console.log('you clicked on list item');
//     });
// },true);

// this doesnt effect anything just the order is affected

// example of event propagation

// const container = document.querySelector('.container');
// const btn1 = document.getElementById('btn1');

// document.querySelectorAll('.heading').forEach(function(item){
//     item.addEventListener('click',function(){
//         console.log('you clicked heading');
//     });
// });

// btn1.addEventListener('click',function(){
//     const h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.textContent = `i'm sitting inside the container`;
//     container.appendChild(h1);
// });

// if we uncomment the above code then after clicking the heading nothing happens
// this is because the h1 is being created dynamically
// and the above code is for the code which was been written before the page was loaded
// hence we will be using event propagation

// container.addEventListener('click',function(event){
// if the target element contains the class heading then log message
//     if(event.target.classList.contains('heading')){
//         console.log('you clicked list item');
//     }
// });

// local storage
// localStorage.setItem('keyName','value');
// localStorage.setItem('job','developer');
// sessionStorage.setItem('job','developer');
// // local storage stores value event after closing the browser
// // whereas session storage doesnt stores avlue even after closing the browser
// // how to get item from localStorage
// // overwriting same key overwrites values
// const job = localStorage.getItem('job');
// console.log(job);

// // remove item 

// localStorage.removeItem('job');

// localStorage.setItem('name','john');
// localStorage.setItem('job','developer');
// localStorage.setItem('address','street 123');

// const name = localStorage.getItem('name');
// const job1 = localStorage.getItem('job');
// const address = localStorage.getItem('address');
// // clear everything from localStorage
// console.log(name, job1, address);
// localStorage.clear();
// console.log(name, job1 ,address);

// how to store arrays in localStorage or sessionStorage

// const names = ['john','bob','peter'];

// localStorage.setItem('names',names);

// const values = localStorage.getItem('names');

// console.log(values[0]);

// // it will return only j coz in localstorage the value stored was in string format
// // hence to convert array object to string we use JSON.stringify

// localStorage.setItem('names1',JSON.stringify(names));
// const values1 = JSON.parse(localStorage.getItem('names1'));
// // here JSON.parse converts the stringified version back to normal version
// // simply it converts text to object 
// // here text is converted back to array object
// console.log(values1[0]);

// checking if the localstorage contains the array which we want to declare

// if (localStorage.getItem('fruits') === null){
//     fruits = [];
// } else {
//     fruits = JSON.parse(localStorage.getItem('fruits'));
// }

// fruits.push('apple');
// fruits.push('orange');
// localStorage.setItem('fruits',JSON.stringify(fruits));
// console.log(fruits);

// form 
// submit event listener
// prevent default
// how to get value 

// const form = document.getElementById('form');

// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const password = document.getElementById('password').value;
//     console.log(`your name is ${name} and password is ${password}`);
// });

// immediate invoked function expression
// it creates local scope and doesnot pollute global scope 
// (function(){
//  // code block
// })(); // <- here () is used to invoke the function