// selecting DOM elements
const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener('click', function(){
    let checkCollapse = navbarLinks.classList.contains('navbar__collapse')
    if(checkCollapse){
        navbarLinks.classList.remove('navbar__collapse');
        navbarBtn.classList.remove('change');
    }else{
        navbarLinks.classList.add('navbar__collapse');
        navbarBtn.classList.add('change');
    }
});
