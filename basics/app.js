// basic start page 2

// const p = document.getElementById('output');
// // it returns the element itself
// console.log(p);

// const list = document.getElementsByTagName('li');
// selects element or group of elements 
// returns a node list or array like objects
// index based, length property, but no array methods
// list[0].style.color = 'red';
// console.log(list);
// console.log(`length of list array is: ${list.length}`);

// list.forEach(function(item){
//     console.log(item);
// array method gives error :> type error forEach is not a function 
// });

// const betterList = [...list];
// '...' is known as spread operator
// spread operator spreads an array into different arguments
// betterList.forEach(item => console.log(item));
// console.log(betterList);
// here we have used arrow function 
// function(args){
    // expression
// }
// changes to :
// (args=>expression)
// it is the shorthand replacement of a callback function where
// before arrow we place arguments to be used in function 
// after arrow is the expression to be executed by the function 

// document.querySelector('css selector');
// returns only one element
// document.querySelectorAll('css selector');
// returns all elements

// const ul = document.querySelector('#result');
// ul.style.backgroundColor = 'blue';

// const element = document.querySelector('.special');
// console.log(element);

// const lastElement = document.querySelector('li:last-child');
// console.log(lastElement);

// const list = document.querySelectorAll('.special');
// console.log(list);
// // the list given by querySelectorAll can use array methods

// list.forEach(function (item){
//     console.log(item);
//     item.style.color="yellow";
// });

// DOM manipulation

// DOM tree consist of DOM node tree 
// it has childNodes - it includes all nodes consisting of whitespace and text node
// children only consists of text node
// lastChild takes last child of parent node with reference to childNode used
// firstChild takes first child of parent node with reference to childNode used

// const result = document.querySelector('#result');
// const allChildNodes = result.childNodes;
// console.log(allChildNodes);
// // here it consists of whitespaces and li node itself

// const children = result.children;
// console.log(children);

// const lastChild = result.lastChild;
// console.log(lastChild);

// const firstChild = result.firstChild;
// console.log(firstChild);

// here both returns whitespace because whitespace is also counted as a node here

// nextSibling
// previousSibling
// if it is used the node counts whitesoace 

// const first = document.querySelector('.first');
// console.log(first);

// const nextSibling = first.nextSibling;
// console.log(nextSibling);
// // returns whitespace

// const next_nextSibling = first.nextSibling.nextSibling;
// console.log(next_nextSibling);

// const last = document.querySelector('.last');
// console.log(last);

// const previousSibling = last.previousSibling;
// console.log(previousSibling);
// // whitespace

// const prev_previousSibling = last.previousSibling.previousSibling;
// console.log(prev_previousSibling);
// // null

// nodeValue
// textContent

// const special_li = document.getElementById('special');
// console.log(special_li);

// const value = special_li.nodeValue;
// console.log(value);
// // it will give null 

// console.log(special_li.childNodes);
// // gives an array with text in first position

// // hence

// const value1 = special_li.firstChild.nodeValue;
// console.log(value1);

// // best method

// const best = special_li.textContent;
// console.log(best);

// getAttribute()
// setAttribute()

// const elem = document.getElementById('element');
// console.log('the class value initially was: ' + elem.getAttribute('class'));

// elem.setAttribute('class','last');
// console.log(elem);

// classList and className

// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.querySelector('#third');

// let classname = first.className;
// console.log(classname);

// second.className = 'colors';
// second.className = 'text';
// // reassigning the value rewrites the class.
// // i.e here colors will be replaced by text.

// // classList
// let classes = third.classList;

// // add

// third.classList.add('colors');
// third.classList.add('text');
// // or 
// third.classList.add('colors','text');
// console.log(classes);

// // remove 
// third.classList.remove('text');

// // contains
// let result = third.classList.contains('colors');
// if(result){
//     console.log('class present');
// }
// else{
//     console.log('class not present');
// }

// create element: createElement(element);
// create textNode: createTextNode('text content');
// appendChild node: element.appendChild(childElement);

// const result = document.querySelector('#result1');

// // creating an empty element
// const bodyDiv = document.createElement('div');

// // create a text node
// const text = document.createTextNode('body div');
// // appending text inside empty element

// bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);

// // creating an empty element
// const resultLi = document.createElement('li');

// // create a text node
// const textContent = document.createTextNode('result li');

// // appending text inside empty element
// resultLi.appendChild(textContent);

// result.appendChild(resultLi);
// resultLi.classList.add('show');

// console.log(result.children);

// // insert before
// // insert before is used to append child anywhere we want to
// // parentNodeofWhereToAdd.insertBefore(what to add, where to add)

// const newElement = document.createElement('p')
// const paragraph = document.createTextNode('lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem');
// const para = newElement.appendChild(paragraph);
// document.body.insertBefore(para, result);
// // para will get added before result-> element

// //replace child

// result.replaceChild(bodyDiv,resultLi);

// // textContent
// // innerHTML
// const list = document.querySelector('.first1');
// const div = document.getElementById('second1');
// const item = document.querySelector('.item');

// console.log(div.textContent);

// console.log(list.innerHTML);
// console.log(list.textContent);

// const ul = document.createElement('ul');
// ul.innerHTML = `<li class="item">list item</li>
// <li>list item</li>`;

// document.body.appendChild(ul);

// const secondDiv = document.createElement('div');
// secondDiv.textContent = `i'm second div`;

// list.insertBefore(secondDiv, item);

// changing css using style in js
// css two text with dash will convert to camelCase
// eg in css font-size in js it will be fontSize

// const styleWithJs = document.querySelector('.styleWithJs');
// styleWithJs.classList.add('special');
// styleWithJs.classList.add('hide-elements');
// styleWithJs.classList.remove('hide-elements');


