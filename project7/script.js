// selecting variables

const btns = document.querySelectorAll('.btn');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');

let screen = document.querySelector('.screen');

btns.forEach(function(btn){
    btn.addEventListener('click', function(){
       let number =  btn.getAttribute('data-num');
       screen.value += number;
    })
});

// equal btn add eventListener

btnEqual.addEventListener('click',function(){
    if(screen.value === ""){
        screen.value = "enter value";
    }else{
        screen.value = eval(screen.value);
    }
});

// clear screen
btnClear.addEventListener('click',function(){
    screen.value = '';
})


