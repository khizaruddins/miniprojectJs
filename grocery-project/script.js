// selecting DOM elements

const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');

const list = document.querySelector('.grocery-list');
const clear = document.querySelector('.displayItems-clear');
const displayItemsAction = document.querySelector('.displayItems-action');

// event listeners
submit.addEventListener('click', addItem);
clear.addEventListener('click', clearList);
document.addEventListener('DOMContentLoaded', displayStorage);
list.addEventListener('click', removeSingleItem);

// functions
function addItem(event){
    event.preventDefault();
    let value = input.value;
    if(value === ''){
        showAction(addItemsAction, 'please add grocery item', false);
    }else{
        showAction(addItemsAction, `${value} added to the list`, true);
        createItem(value);
        updateStorage(value);
    }
}

function clearList(){

    localStorage.removeItem('grocery-list');

    let items = document.querySelectorAll('.grocery-item');
    if(items.length>0){
        showAction(displayItemsAction, 'all items deleted', false);
        items.forEach(function(element){
            list.removeChild(element);
        });
    } else {
        showAction(displayItemsAction, 'no more item to display', true)
    }
}

function showAction(element, text, value){
    if(value === true){
        element.classList.add('success');
        element.innerText = text;
        input.value = '';
        setTimeout(function(){
            element.classList.remove('success');
        },3000);
    } else {
        element.classList.add('alert');
        element.innerText = text;
        input.value = '';
        setTimeout(function(){
            element.classList.remove('alert');
        },3000);
    }
}

function createItem(value){
    let parent = document.createElement('div');
    parent.classList.add('grocery-item');
    parent.innerHTML = `
    <h4 class="grocery-item__title">${value}</h4>
    <a class="grocery-item__link" href="#">
        <i class="far fa-trash-alt"></i>
    </a>`;
    list.appendChild(parent);
}

function updateStorage(value){
    let groceryList;
    // let exists = localStorage.getItem('grocery-list');
    // if(exists){
    //     groceryList = JSON.parse(localStorage.getItem('grocery-list'));
    // } else {
    //     groceryList = [];
    // }

    // or

    groceryList = (localStorage.getItem('grocery-list')) ? JSON.parse(localStorage.getItem('grocery-list')) : [];

    groceryList.push(value);
    localStorage.setItem('grocery-list',JSON.stringify(groceryList))
}

// display local Storage
function displayStorage(){
    let exists = localStorage.getItem('grocery-list');
    if(exists){
        let storageItems = JSON.parse(localStorage.getItem('grocery-list'));
        storageItems.forEach(function(element){
            createItem(element);
        });
    }
}

function removeSingleItem(event){
    event.preventDefault();
    let link = event.target.parentElement;
    if(link.classList.contains('grocery-item__link')){
        // taking the text from the item
        let text = link.previousElementSibling.innerHTML;
        let groceryItem = event.target.parentElement.parentElement;
        // remove from the list 
        list.removeChild(groceryItem);
        showAction(displayItemsAction,`${text} is removed from the list`,true);
        // remove from the local storage
        editStorage(text);
    }
}

function editStorage(item){
    let groceryItem = JSON.parse(localStorage.getItem('grocery-list'));
    let index = groceryItem.indexOf(item);
    groceryItem.splice(index,1);
    // delete whole storage
    localStorage.removeItem('grocery-list');
    localStorage.setItem('grocery-list', JSON.stringify(groceryItem));
}