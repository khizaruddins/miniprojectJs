
const colors = ['yellow', 'red', 'blue', '#f15025', 'rgba(125,125,125,0.5)'];

const btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    const random = Math.floor(Math.random()*colors.length);
    console.log(random);
    const body = document.body;
    body.style.backgroundColor = colors[random];
});