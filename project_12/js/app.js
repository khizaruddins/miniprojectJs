// get elements 

const itemForm =  document.getElementById('itemForm');
const itemInput =  document.getElementById('itemInput');
const itemList =  document.querySelector('.item-list');
const feedback =  document.querySelector('.feedback');
const clearList =  document.getElementById('clear-list');

let itemData = JSON.parse(localStorage.getItem('list'))||[];
if(itemData.length>0){
    console.log(itemData.length);
    
    itemData.forEach(function(singleItem){
        itemList.insertAdjacentHTML('beforeend',`
            <div class="item my-3">
            <h5 class="item-name text-capitalize">${singleItem}</h5>
            <div class="item-icons">
            <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
            <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
            <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
            </div>
            </div>
        `);
        handleItem(singleItem);
    });
}
// form submission

itemForm.addEventListener('submit', function(event){
    event.preventDefault();
    const textValue = itemInput.value;
    if(textValue === ''){
        // function to display the feeback
        showFeedback('please enter a valid value', 'danger');
    } else {
        // add item 
        addItem(textValue);
        // clear the form
        itemInput.value = '';
        // add to item array
        itemData.push(textValue);
        // local storage
        localStorage.setItem('list',JSON.stringify(itemData));
        // add eventListeners to icons
        handleItem(textValue);
    }
});
// show feedback function
function showFeedback(text, action){
    feedback.classList.add('showItem', `alert-${action}`);
    feedback.innerHTML = `<p> ${text}</p>`;
    setTimeout(function(){
        feedback.classList.remove('showItem', `alert-${action}`);
    },4000);
}

function addItem(value){
    const div = document.createElement('div');
    div.classList.add('item', 'my-3');
    div.innerHTML = `
    <h5 class="item-name text-capitalize">${value}</h5>
    <div class="item-icons">
     <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
     <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
     <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
    </div>`;

    // we cannot select icons as it is dynamically added
    itemList.appendChild(div);
}

function handleItem(textValue){
    const items = itemList.querySelectorAll('.item');
    // selecting item from the whole div which is wrapped for all items
    items.forEach(function(item){
        if(item.querySelector('.item-name').textContent === textValue){
            // verifying that the list is made or not or the value added is same or not
            // complete event listener
            item.querySelector('.complete-item').addEventListener('click',function(){
                item.querySelector('.item-name').classList.toggle('completed');
                this.classList.toggle('visibility');
            });

            // edit event listener
            item.querySelector('.edit-item').addEventListener('click',function(){
                if(item.querySelector('.item-name').classList.contains('completed')){
                    showFeedback('This task has been completed!! if not comepleted please uncheck it','warning');
                } else {
                    itemInput.value = textValue;
                    itemList.removeChild(item);
                    // remove from array as well
                    itemData = itemData.filter(function(item){
                        return item !== textValue;
                    });
                    localStorage.setItem('list',JSON.stringify(itemData));
                }
            });
            // delete event listener
            item.querySelector('.delete-item').addEventListener('click',function(){
                itemList.removeChild(item);
                // remove from array as well
                itemData = itemData.filter(function(item){
                    return item !== textValue;
                });
                localStorage.setItem('list',JSON.stringify(itemData));
                showFeedback('item deleted', 'success');
            });
        }
    });
}

clearList.addEventListener('click',function(){
    itemData = [];
    localStorage.removeItem('list');
    const items = itemList.querySelectorAll('.item');
    if(items.length > 0){
        items.forEach(function(item){
            itemList.removeChild(item);
            // as itemList is parent for every node having item as class
        });
    } else {
        showFeedback('No items to remove!!', 'info');
    }
})
// this is not possible as item-icon has not been yet created
// but it is possible after the creation of list
// document.querySelector('.item-icon').classList.add('showItem');