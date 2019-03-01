const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const info = document.querySelector('.info');
const cartInfo = document.querySelector('.cart-info');
const itemInfo = document.querySelector('.item-info');

btn1.addEventListener('click', function(){
    getDataNewAjax('info.txt');
});

btn2.addEventListener('click', function(){
    getJSONViaAjax('cart.json');
});

function getDataAjax(url){
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url, true);
    ajax.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            info.textContent = this.responseText;
        }
    };
    ajax.send();
}

// newer style of coding

function getDataNewAjax(url){
    const ajax1 = new XMLHttpRequest();
    ajax1.open('GET', url, true);
    ajax1.onload = function(){
        if(this.status === 200){
            info.textContent = this.responseText;
        } else {
            console.log(this.statusText)
        }
    }

    // error handling
    ajax1.onerror = function(){
        console.log('there was an error');
    }

    ajax1.send();
}

// json

function getJSONViaAjax(url){
    const ajax2 = new XMLHttpRequest();
    ajax2.open('GET', url, true);
    ajax2.onload = function(){
        if(this.status === 200){
            const data = JSON.parse(this.responseText);
            cartInfo.innerHTML = `
            <p>${data.cartInfo.name}</p>
            <p>${data.cartInfo.storeType}</p>
            `;
            itemInfo.innerHTML = `
            <p>Sr No. Name Price</p>
            <p>${data.cartItems[0].id} ${data.cartItems[0].name} ${data.cartItems[0].price}</p>
            <p>${data.cartItems[1].id} ${data.cartItems[1].name} ${data.cartItems[1].price}</p>
            <p>${data.cartItems[2].id} ${data.cartItems[2].name} ${data.cartItems[2].price}</p>
            `;
        } else {
            console.log(this.statusText);
        }
    }

    ajax2.onerror = function(){
        console.log('something went wrong');
    }
    ajax2.send();
}