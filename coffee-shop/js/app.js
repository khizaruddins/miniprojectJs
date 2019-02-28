// hide pre loading
// hide when all images links scripts are loaded

// customer constructor
class Customer{
    constructor(name, lastname, email){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }
}

// UI constructor
class UI{
    constructor(){
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
        this.workModal = document.querySelector('.work-modal');
        this.workModalItem = document.querySelector('.work-modal__item');
        this.workZoomIcons = document.querySelectorAll('.work-item__icon');
        this.workModalClose = document.querySelector('.work-modal__close');
    }
    // preloader function
    hidePreloader(){
        this.preloader.style.display = "none";
    }

    // toggler function
    toggleNav(){
        this.navBar.classList.toggle('nav__show');
    }

    // video control function
    videoControls(){
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
    drinkFormSubmitFunc(event){
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
    isEmpty(name, lastname, email){
        return (name === "" || lastname === "" || email === "") ? true : false;
    }

    // show feedback
    showFeedback(text, type){
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
    removeAlert(element, type){
        setTimeout(function(){
            element.classList.remove(type);
        },3000);
    }

    // add customer
    addCustomer(customer){
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
    clearFields(){
        this.inputName.value = '';
        this.inputLastname.value = '';
        this.inputEmail.value = '';
    }

    // show image functionality
    showModal(event){
        event.preventDefault();
        if(event.target.parentElement.classList.contains('work-item__icon') || event.target.parentElement.parentElement.classList.contains('work-item__icon')){
            let id = event.target.parentElement.dataset.id || event.target.parentElement.parentElement.dataset.id;
            this.workModal.classList.add('work-modal--show');
            this.workModalItem.style.backgroundImage = `url('img/work-${id}.jpeg')`;
        }
    }

    // close modal
    closeModal(){
        this.workModal.classList.remove('work-modal--show');
    }
}

// window event listener
eventListeners();

function eventListeners(){
    const ui = new UI();
    // preloader
    window.addEventListener('load', () => {
        ui.hidePreloader();
    });

    // nav toggler
    ui.navBtn.addEventListener('click',() => {
       ui.toggleNav(); 
    });

    // video switcher
    ui.videoSwitch.addEventListener('click', () => {
        ui.videoControls();
    });

    // drink form
    ui.drinkForm.addEventListener('submit', (event) => {
        ui.drinkFormSubmitFunc(event); 
    });

    // work modal
    // es6 forEach replacement with for..of
    for(item of ui.workZoomIcons){ 
        item.addEventListener('click', (event) => {
            ui.showModal(event);
        });
    }

    // hide modal
    ui.workModal.addEventListener('click', () => {
        ui.closeModal();
    });
}