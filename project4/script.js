// select all DOM elements

const sendBtn = document.getElementById('sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

// add eventListener

sendBtn.addEventListener('click',sendMsg);

function sendMsg(){
    let content = messageIn.value;
    if(content === ''){
        alert('Please enter a valid value, The value is empty!!!');
    } else {
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}