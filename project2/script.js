let alphaNumeric = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
const hexBtn = document.querySelector('.hexBtn');
const hex = document.querySelector('.hex');
const bodyBgc = document.querySelector('body');

/// add eventListener to button

hexBtn.addEventListener('click', getHex);

function getHex(){
    let color = '#';
    for(i=0;i<=5;i++){
        let index = Math.floor(Math.random()*alphaNumeric.length);
        color += alphaNumeric[index];
    }
    
    bodyBgc.style.backgroundColor = color;
    hex.innerHTML = color;
}
