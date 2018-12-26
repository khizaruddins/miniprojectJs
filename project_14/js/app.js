// get elements 
const form = document.getElementById('input-form');
const input = document.getElementById('input-value');
const feedback = document.querySelector('.feedback');
const listItem = document.querySelector('.list-items');
const clearBtn = document.querySelector('.clearBtn');

// add eventListener

form.addEventListener('submit',function(event){
    event.preventDefault();
    const value = input.value;
    if(value === ''){
        showFeedback(feedback,'cannot add empty value','alert-danger');
    }else{
        // add to list 
        addItem(value);
        // add to storage
        addToLocalStorage(value);
    }

});

// clear button event listener
clearBtn.addEventListener('click',function(){
    while(listItem.children.length>0){
        listItem.removeChild(listItem.children[0]);
        // clear storage
        clearLocalStorage();
    }
});

// delete one item 
listItem.addEventListener('click',function(event){
    if(event.target.parentElement.classList.contains('remove-icon')){
        let parent = event.target.parentElement.parentElement;
        listItem.removeChild(parent);
    }

    // delete from localStorage
    let deletedItemText = event.target.parentElement.previousElementSibling.textContent;
    clearOneFromLocalStorage(deletedItemText);
});

// dom load eventListener for loading storage items to html

document.addEventListener("DOMContentLoaded",function(){
    loadStorageItems();
})

// functions
// show Feedback
function showFeedback(element,text,result){
    element.classList.add('showItem',`${result}`);
    element.innerHTML = `<p>${text}</p>`;
    setTimeout(function(){
        element.classList.remove('showItem',`${result}`)
    },4000);
}

// add items
function addItem(value){
    const div = document.createElement('div');
    div.classList.add(
        'item',
        'my-3',
        'd-flex',
        'justify-content-between',
        'p-2'
    );
    div.innerHTML = `
        <h5 class="item-title text-capitalize">${value}</h5>
        <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
    `;

    listItem.appendChild(div);
    input.value = '';
    showFeedback(feedback,'item added to the list','alert-success');
}

// add to localStorage

function addToLocalStorage(value){
    let items;
    if(localStorage.getItem('grocery-list')){
        items = JSON.parse(localStorage.getItem('grocery-list'));
    } else {
        items = [];
    }
    items.push(value);
    localStorage.setItem('grocery-list',JSON.stringify(items));   
}

// clear localStorage

function clearLocalStorage(){
    localStorage.removeItem('grocery-list');
}

// clear one element from localStorage

function clearOneFromLocalStorage(text){
    let tempItems = JSON.parse(localStorage.getItem('grocery-list'));
    const updatedItems = tempItems.filter(function(item){
        if(item !== text){
            return item;
        }
    });
    localStorage.setItem('grocery-list',JSON.stringify(updatedItems));
}

function loadStorageItems(){
    if(localStorage.getItem('grocery-list')){
        let storageItems = JSON.parse(localStorage.getItem('grocery-list'));
        storageItems.forEach(function(item){
            const div = document.createElement('div');
            div.classList.add(
                'item',
                'my-3',
                'd-flex',
                'justify-content-between',
                'p-2'
            );
            div.innerHTML = `
                <h5 class="item-title text-capitalize">${item}</h5>
                <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
            `;

            listItem.appendChild(div);
        })
    }
    
}