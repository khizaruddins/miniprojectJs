const btn = document.querySelector('.colorBtn');
const color = ['red', 'green', 'black', 'blue', 'grey', 'purple'];
btn.addEventListener('click',function(){
    let randomNum = Math.floor(Math.random()*color.length);
    const body = document.querySelector('body');
    body.style.backgroundColor = color[randomNum];
});
