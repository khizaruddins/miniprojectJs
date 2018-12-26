// selecting DOM elements

const btns = document.querySelectorAll('.outputBtn');
const quit = document.getElementById('quit');
const start = document.getElementById('start');
const feedback = document.querySelector('.feedback');
const firstRow = document.querySelector('#firstRow');
const secondRow = document.querySelector('#secondRow');
const thirdRow = document.querySelector('#thirdRow');

let loopTermination = 1;
let winString = '';
let gameStatus = false;
// if win string becomes XXX or OOO the player wins respectively

// event Listeners
start.addEventListener('click',startGame);

quit.addEventListener('click',clearBoard);

// functions

function startGame(event){
    gameStatus = true;
    alert('game started!');
}

function checkWinCondition(event){
    leftCheck(event);
    rightCheck(event);
    topCheck(event);
    bottomCheck(event);
}

function placeO(event){
}

function leftCheck(event){

}

function rightCheck(event){

}

function topCheck(event){

}

function bottomCheck(event){

}

function showBoard(){

}

function showFeedback(element, text, show,theme){
    const p = feedback.children[0];
    p.innerHTML = text;
    element.classList.add(`${show}`,`${theme}`);
    setTimeout(function(){
        element.classList.remove(`${show}`,`${theme}`);
    },4000);
}

function clearBoard(){
    if(gameStatus){
        alert('game quitted!');
        console.log(`game status in quit fn ${gameStatus}`);
        btns.forEach(function(btn){
            btn.textContent = '_';
            btn.removeEventListener('click',function(){
                console.log('hello');
            });
        });
        gameStatus = false;
    } else {
        showFeedback(feedback,'Start Game first!!','showItem','warning');
    }
}

// eight conditions of wining

// 1) XXX OOO OOO
// 2) OOO XXX OOO
// 3) OOO OOO XXX

// 4) XOO XOO XOO
// 5) OXO OXO OXO
// 6) OOX OOX OOX

// 7) XOO OXO OOX
// 8) OOX OXO XOO 