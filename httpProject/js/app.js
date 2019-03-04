//get elements
const itemList = document.querySelector(".items");
const httpForm = document.getElementById("httpForm");
const itemInput = document.getElementById("itemInput");
const imageInput = document.getElementById("imageInput");
const feedback = document.querySelector(".feedback");
// const items = document.querySelector(".items");
const submtiBtn = document.getElementById("submitBtn");
let editedItemID = 0;

httpForm.addEventListener('submit', submitItem);

// load items
document.addEventListener('DOMContentLoaded', function(){
    getItemsAPI(showItems);
});

//http form

function submitItem(event){
    event.preventDefault();
    const itemValue = itemInput.value;
    const imageValue = imageInput.value;
    if(itemValue.length === 0 || imageValue.length === 0){
        showFeedback('please enter valid values');
    } else {
        postItemAPI(imageValue, itemValue);
        imageInput.value = '';
        itemInput.value = '';
    }
}

function showFeedback(text){
    feedback.classList.add('showItem');
    feedback.innerHTML = `<p> ${text} </p>`;
    setTimeout(function(){
        feedback.classList.remove('showItem');
    },3000)
}

// get items
function getItemsAPI(cb){
    const url = 'https://5c78d5b43a89af0014cd7126.mockapi.io/items';
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url, true);

    ajax.onload = function(){
        if(this.status === 200){
            cb(this.responseText);
        } else {
            console.log('something went wrong');
        }
    }

    ajax.onerror = function(){
        console.log('error occurred')
    }

    ajax.send();
}
// show items

function showItems(data){
    const items = JSON.parse(data);
    // console.log(items);
    let info = '';
    for(item of items){
        info += `
        <li class="list-group-item d-flex align-items-center justify-content-between flex-wrap item my-2">
        <img src="${item.avatar}" id='itemImage' class='itemImage img-thumbnail' alt="">
        <h6 id="itemName" class="text-capitalize itemName">${item.name}</h6>
        <div class="icons">
 
         <a href='#' class="itemIcon mx-2 edit-icon" data-id='${item.id}'>
          <i class="fas fa-edit"></i>
         </a>
         <a href='#' class="itemIcon mx-2 delete-icon" data-id='${item.id}'>
          <i class="fas fa-trash"></i>
         </a>
        </div>
       </li>
        `;
    }

    itemList.innerHTML = info;
    // get icon
    getIcons();
}

function postItemAPI(img, itemName){
    const avatar = `img/${img}.jpeg`;
    const name = itemName;
    const url = 'https://5c78d5b43a89af0014cd7126.mockapi.io/items';
    const ajax1 = new XMLHttpRequest();
    ajax1.open('POST', url, true);
    // set request header
    
    ajax1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    ajax1.onload = function(){
        getItemsAPI(showItems);
        // this will give back the item that we added currently
        // console.log(this.responseText);
    }

    ajax1.onerror = function(){
        console.log('error occurred');
    }

    ajax1.send(`avatar=${avatar}&name=${name}`);
}

// get icons
function getIcons(){
    const editIcon = document.querySelectorAll('.edit-icon');
    const deleteIcon = document.querySelectorAll('.delete-icon');

    for(item of deleteIcon){
        const itemID = item.dataset.id;
        item.addEventListener('click', event => {
            event.preventDefault();
            deleteItemAPI(itemID);
        });
    }

    for(item of editIcon){
        const itemID = item.dataset.id;
        item.addEventListener('click', event => {
            event.preventDefault();
            const parent = event.target.parentElement.parentElement.parentElement;
            const img = parent.querySelector('.itemImage').src;
            const name = parent.querySelector('.itemName').textContent;
            // edit ui
            editItemUI(parent, img, name, itemID);            
        });
    }
}

function deleteItemAPI(id){
    const url = `https://5c78d5b43a89af0014cd7126.mockapi.io/items/${id}`;
    const ajax = new XMLHttpRequest();
    ajax.open('DELETE', url, true);

    ajax.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
            getItemsAPI(showItems);
        } else {
            console.log('something went wrong');
        }
    }

    ajax.onerror = function(){
        console.log('error occurred');
    }
    ajax.send();
}

function editItemUI(parent, itemImg, name, itemID){
    event.preventDefault();

    itemList.removeChild(parent);
    const imgIndex = itemImg.indexOf('img/');// 'img/' counts 4 character hence added below
    const jpegIndex = itemImg.indexOf('.jpeg');

    const img = itemImg.slice(imgIndex + 4, jpegIndex);

    itemInput.value = name.trim();
    imageInput.value = img;
    editedItemID = itemID;
    submitBtn.innerHTML = 'Edit Item';
    httpForm.removeEventListener('submit', submitItem);
    httpForm.addEventListener('submit', editItemAPI);

}

function editItemAPI() {
    event.preventDefault();
    const id = editedItemID;

    const itemValue = itemInput.value;
    const imageValue = imageInput.value;

    if(itemValue.length === 0 || imageValue.length === 0){
        showFeedback('please enter valid value');
    } else {
        const img = `img/${imageValue}.jpeg`;
        const name = itemValue;

        const url = `https://5c78d5b43a89af0014cd7126.mockapi.io/items/${id}`;
        const ajax1 = new XMLHttpRequest();
        ajax1.open('PUT', url, true);
        // set request header
        
        ajax1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        ajax1.onload = function(){
            reverseForm();
            // this will give back the item that we added currently
            // console.log(this.responseText);
        }

        ajax1.onerror = function(){
            console.log('error occurred');
        }

        ajax1.send(`avatar=${img}&name=${name}`);
    }
}

function reverseForm(){
    itemInput.value = '';
    imageInput.value = '';
    submitBtn.textContent = "Add Item";
    httpForm.removeEventListener('submit', editItemAPI);
    httpForm.addEventListener('submit', submitItem);
    getItemsAPI(showItems);
}

// promises are used to remove dependency of callback functionsss

function promises(){
    return new Promise(function(resolve, reject){
        if (true){
            resolve('task done by promise');
        } else {
            reject('error by promise error to log');
        }
    });
}

promises()
    .then(data => console.log(data))
    .catch(data => console.log(data));


// by default fetch uses 'get' method
// shorthand to fetch api
fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(data => console.log(data))
    .then(console.log('by only fetch api'))
    .catch(error => console.log(error));

// we can do "POST" "PUT" "DELETE" also with fetch
document.getElementById('postData').addEventListener('submit', postData);

function postData(event){
    event.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers : new Headers(),
        body:JSON.stringify({title:title, body:body})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}


// async and await to shorthand promises and is better way to handle promises
// returns a promise 
const getData = async function(){
    const url = 'https://randomuser.me/api/';
    const result = await fetch(url);
    console.log("############### async await #################");
    const response = await result.json();
    return response;
}
getData().then(data => console.log(data)).catch(error => console.log(error));