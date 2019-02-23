// hide pre loading
// hide when all images links scripts are loaded

// window event listener
eventListeners();

function eventListeners(){
    const ui = new UI();
    // preloader
    window.addEventListener('load', function(){
        ui.hidePreloader();
    });

    // nav toggler
    ui.navBtn.addEventListener('click',function(){
       ui.toggleNav(); 
    });

    // video switcher
    ui.videoSwitch.addEventListener('click',function(){
        ui.videoControls();
    });

    // drink form
    ui.drinkForm.addEventListener('submit', function(event){
        ui.drinkFormSubmitFunc(event); 
    })
}

// UI constructor
function UI(){
    this.preloader = document.querySelector('.preloader');
    this.navBar = document.querySelector('.nav');
    this.videoSwitch = document.querySelector('.video__switch');
    this.videoSwitchBtn = document.querySelector('.video__switch-btn');
    this.navBtn = document.querySelector('.navBtn');
    this.videoItem = document.querySelector('.video__item');
    this.drinkForm = document.querySelector('.drink-form');
    this.inputName = document.querySelector('.input-name');
    this.inputLastname = document.querySelector('.input-lastname');
    this.inputEmail = document.querySelector('.input-email');
    this.drinkFormFeedback = document.querySelector('.drink-form__feedback');
    this.drinkCardList = document.querySelector('.drink-card__list');
}

// preloader function
UI.prototype.hidePreloader = function(){
    this.preloader.style.display = "none";
}

// toggler function
UI.prototype.toggleNav = function(){
    this.navBar.classList.toggle('nav__show');
}

// video control function
UI.prototype.videoControls = function(){
    this.videoSwitchBtn.classList.toggle('btnSlide');
    // why we are using this is because we need to pause and play,
    // the video which is lying in background
    if(this.videoSwitchBtn.classList.contains('btnSlide')){
        // this.videoSwitchBtn.classList.add('btnSlide');
        this.videoItem.pause();
    } else {
        // this.videoSwitchBtn.classList.remove('btnSlide');
        this.videoItem.play();
    }
}

// drink form function
UI.prototype.drinkFormSubmitFunc = function(event){
    event.preventDefault();
    const name = this.inputName.value;
    const lastname = this.inputLastname.value;
    const email = this.inputEmail.value;

    let value = this.isEmpty(name, lastname, email);
    if(value){
        this.showFeedback('some form values empty','error');
    } else {
        let customer = new Customer(name, lastname, email);
        this.addCustomer(customer);
        this.showFeedback('thank you for signing up', 'success');
    }
    this.clearFields();
}

// check for empty values
UI.prototype.isEmpty = function(name, lastname, email){
    return (name === "" || lastname === "" || email === "") ? true : false;
}

// show feedback
UI.prototype.showFeedback = function(text, type){
    if(type === 'success'){
        this.drinkFormFeedback.classList.add('success');
        this.drinkFormFeedback.innerText = text;
        this.removeAlert(this.drinkFormFeedback,'success');
    } else if(type === 'error'){
        this.drinkFormFeedback.classList.add('error');
        this.drinkFormFeedback.innerText = text;
        this.removeAlert(this.drinkFormFeedback,'error');
    }
}

// remove alert
UI.prototype.removeAlert = function(element, type){
    setTimeout(function(){
        element.classList.remove(type);
    },3000);
}

// add customer
UI.prototype.addCustomer = function(customer){
    const images = [1,2,3,4,5];
    let random = Math.floor(Math.random()*images.length);

    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `
        <img src="img/person-${random}.jpeg" alt="person" class="person__thumbnail">
        <h4 class="person-name">${customer.name}</h4>
        <h4 class="person-lastname">${customer.lastname}</h4>
    `;
    this.drinkCardList.appendChild(div);
}

// clearing form fields
UI.prototype.clearFields = function(){
    this.inputName.value = '';
    this.inputLastname.value = '';
    this.inputEmail.value = '';
}
// customer constructor
function Customer(name, lastname, email){
    this.name = name;
    this.lastname = lastname;
    this.email = email;
}