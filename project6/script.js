// selecting elements 

const container =  document.querySelector('.images');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 0;

// adding event listener
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// declaring functions
function prevSlide(){
    if(counter === 0){
        counter = 7;
    }
    counter--;
    container.style.backgroundImage = `url(img/bg-${counter}.jpeg)`;
    container.animate([{opacity:'0.4'},{opacity:'1.0'}],{fill:'forwards',duration:400});
}

function nextSlide(){
    if(counter == 6){
        counter = -1;
    }
    counter++;
    container.style.backgroundImage = `url(img/bg-${counter}.jpeg)`;
    container.animate([{opacity:'0.4'},{opacity:'1.0'}],{fill:'forwards',duration:400});
}