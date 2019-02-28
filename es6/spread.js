// Spread Operator
// converts array to list of items

const random = ['something', 'random'];
const moreRandom = random;

moreRandom[0] = 'special';
moreRandom.push(7);

console.log(random);
console.log(moreRandom);

// both array gets affected hence we use spread operator

const numbers = [1,2,3,4];
const values = [...numbers];
values.push(5);

console.log(numbers);
console.log(values);

// combining two arrays

const names = ['john', 'peter', 'bob'];
const moreNames = ['sussy', ...names];

const evenMoreNames = [...names, 'amanda',...moreNames]
console.log(names);
console.log(moreNames);
console.log(evenMoreNames);

const list = [...document.querySelectorAll('.list-item')];
// nodelist gets converted into array
console.log(list);
// we cannot use filter function in a node list 
const special = list.filter(item => item.classList.contains('special'));
console.log(special);

function add(num1, num2, num3, num4){
    let result = num1 + num2 + num3 + num4;
    return result;
}
// numbers array gets converted into list of items
const result = add(...numbers);
console.log(result);

const letters = "hello there";
const arr = [...letters];
console.log(arr);
 