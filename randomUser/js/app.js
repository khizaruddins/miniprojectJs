const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  getPerson(getData);
});

function getPerson(cb){
  const url = 'https://randomuser.me/api/';
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.onload = function() {
    if(this.status === 200){
      cb(this.responseText, showData);
    } else {
      console.log(this.statusText);
    }
  }

  xhr.onerror = function() {
    console.log('there was an error');
    
  }
  xhr.send();
}

function getData(response, cb){
  const data = JSON.parse(response);
  // destructuring
  const {name:{first},name:{last},picture:{large},location:{street}, phone, email} = data.results[0];
  cb(first, last, large, street, phone, email);
}

function showData(first, last, large, street, phone,email){
  document.getElementById('first').textContent = first;
  document.getElementById('last').textContent = last;
  document.getElementById('photo').src = large;
  document.getElementById('phone').textContent = phone;
  document.getElementById('email').textContent = email;
  document.getElementById('street').textContent = street;
}

// flow of the function execution
// first getPerson is called.
// with getData function being passed as argument waiting to get called
// now the function passed is named as cb, so whenever cb is called it is calling getData function with respective arguments
// now getData is called with showData function passed as parameter
// now when getData is executing the showData passed is called cb and when cb is called that means showData is called
// hence after cb is called showData is executed