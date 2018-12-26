// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  // select buttons
  const btns = document.querySelectorAll('.btn');
  // set counter value
  let counter = 0;
  btns.forEach(function(btn){
    btn.addEventListener('click',function(event){
      let value = event.target;

      if(value.classList.contains('btn-left')){
        counter--;
        if(counter<0){
          // limiting value of counter in between 0 to length of array pictures
          counter = pictures.length - 1;
        }
        document.querySelector('.img-container').style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
      } else if(value.classList.contains('btn-right')){
        counter++;
        if(counter > pictures.length - 1){
          // limiting value of counter in between 0 to length of array pictures
          counter = 0;
        }
        document.querySelector('.img-container').style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
      }
    });
  });
})();
