// my approach shorthand

// (function(){
//     const counter = document.getElementById('counter');
//     let countValue = parseInt(counter.textContent,10);
//     console.log(typeof countValue);
//     const lowerCount = document.querySelector('.prevBtn');
//     const addCount = document.querySelector('.nextBtn');
//     addCount.addEventListener('click',function(){
//         countValue += 1;
//         counter.textContent = countValue;
//     });
//     lowerCount.addEventListener('click',function(){
//         if(countValue === 0){
//             alert('cant lower count value');
//         }else{
//             countValue -=1 ;
//             counter.textContent = countValue;
//         }
//     });
// })();

// tutorials approach generalised approach

(function(){
    let counterValue = 0;
    const buttons = document.querySelectorAll('.counterBtn');
    const counter = document.getElementById('counter');

    buttons.forEach(function(btn){
        btn.addEventListener('click',function(e){
            const value = e.target;
            if(value.classList.contains('prevBtn')){
                counterValue--;
            }
            else if(value.classList.contains('nextBtn')){
                counterValue++;
            }

            counter.textContent = counterValue;

            if(counterValue === 0){
                counter.style.color = '#333333';
            }
            else if(counterValue > 0){
                counter.style.color = '#7FB800';
            }
            else if(counterValue < 0){
                counter.style.color = '#F6511D';
            }
        });
    });

})();