(function(){
// check fields and hide the submit

document.addEventListener('DOMContentLoaded',function(){
    const display = new Display();
    display.checkFields();
    display.hideSubmit();
});
// add customer on submit
document
    .getElementById('customer-form')
    .addEventListener('submit',function(event){
        event.preventDefault();

        const name = this.querySelector('.name');
        const course = this.querySelector('.course');
        const author = this.querySelector('.author');

        const customer = new Customer(name.value, course.value, author.value);
        const display = new Display();

        display.feedback(customer);
        display.clearFields();
});
// display constructor function
function Display(){
    this.name = document.getElementById('name');
    this.course = document.getElementById('course');
    this.author = document.getElementById('author');
    this.customers = document.querySelector('.customer-list');
}
// attaching methods to the instances
// check fields
Display.prototype.checkFields = function(){
    // console.log(this);
    // creating on blur event
    this.name.addEventListener('blur', this.validateField);
    this.course.addEventListener('blur', this.validateField);
    this.author.addEventListener('blur', this.validateField);
}
// validate each field
Display.prototype.validateField = function(){
    // console.log(this);
    if(this.value === ''){
        this.classList.remove('complete');
        this.classList.add('fail');
    } else {
        this.classList.remove('fail');
        this.classList.add('complete');
    }
    const complete = document.querySelectorAll('.complete');
    if(complete.length == 3){
        document.querySelector('.submitBtn').disabled = false;
    } else {
        document.querySelector('.submitBtn').disabled = true;
    }
}

// disable submit button

Display.prototype.hideSubmit = function(){
    const btn = document.querySelector('.submitBtn');
    btn.disabled = true;
}

Display.prototype.feedback = function(customer){
    const feedback = document.querySelector('.feedback');
    const loading = document.querySelector('.loading');

    feedback.classList.add('showItem', 'alert', 'alert-success');
    loading.classList.add('showItem');
    const self = this;

    // here this is stored to self variable becoz 
    // the this of this function and the this of constructor 
    // may get confusion
    // hence self is pointing to this of function
    self.hideSubmit();

    setTimeout(function(){
        feedback.classList.remove('showItem', 'alert', 'alert-success');
        loading.classList.remove('showItem');
        self.addCustomer(customer);
    }, 4000);
}

Display.prototype.addCustomer = function(customer){
    // console.log(customer);
    const random = this.getRandom();
    const div = document.createElement('div');
    div.classList.add('col-11', 'mx-auto', 'col-md-6', 'md-6', 'my-3', 'col-lg-4');
    div.innerHTML = `<div class="card text-left">
    <img src="img/cust-${random}.jpg" class="card-img-top" alt="">
    <div class="card-body">
     
     <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">${customer.name}</span></h6>
     <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
       ${customer.course}
      </span></h6>
     <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">${customer.author}</span></h6>
    </div>
   </div>`;
   this.customers.appendChild(div);
}
// random number

Display.prototype.getRandom = function(){
    let random = Math.floor(Math.random() * 5 + 1);
    return random;
}
// display clear field
Display.prototype.clearFields = function(){
    this.name.value = '';
    this.author.value = '';
    this.course.value = '';

    this.name.classList.remove('complete','fail');
    this.course.classList.remove('complete','fail');
    this.author.classList.remove('complete','fail');

}
// customer constructor function

function Customer(name, course, author){
    this.name = name;
    this.course = course;
    this.author = author;
}
})();