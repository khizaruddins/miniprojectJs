// selecting DOM elements

const btns = document.querySelectorAll('.btn');
const lowerCount = document.querySelector('#lowerCountBtn');
const addCount = document.querySelector('#addCountBtn');
const counter = document.querySelector('#counter');
const hundreds = document.querySelector('.hundreds');
const tens = document.querySelector('.tens');
const units = document.querySelector('.units');

let counterValue = counter.textContent;
let countHundred = 0;
let countTens = 0;
let countUnits = 0;

addCount.addEventListener('click',addCounter);
lowerCount.addEventListener('click',lowerCounter);

// function
function addCounter(){
    counterValue++;
    counter.textContent = counterValue;
    splitDigits(counterValue);
    // animate using javascript
    // starting array of object keyframes
    // next duration 
    counter.animate([{opacity: '0.2'}, {opacity: '1.0'}],
        {duration:500,fill:'forwards'});
}

function lowerCounter(){
    counterValue--;  
    if(counterValue < 0){
        counterValue = 0;
    }
    counter.textContent = counterValue;
    splitDigits(counterValue);

    counter.animate([{opacity:'0.2'}, {opacity:'1.0'}],
        {duration:500,fill:'forwards'});
}

function splitDigits(value){
    countTens = Math.floor(value/10)%10;
    countHundred = Math.floor(value/100);
    countUnits = value % 10;
    hundreds.textContent = countHundred;
    tens.textContent = countTens;
    units.textContent = countUnits;
}