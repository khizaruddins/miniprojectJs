// show cart

(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart');
    });
})();

// add items to the cart

(function(){
    const cartInfo = document.getElementById('cart-info');
    const cartBtn = document.querySelectorAll('.store-item-icon');
    const cart = document.getElementById('cart');
    let totalItem = [];
    cartBtn.forEach(function(btn){
        btn.addEventListener('click',function(event){
            if(event.target.parentElement.classList.contains('store-item-icon')){
                let imgFullPath = event.target.parentElement.previousElementSibling.src;
                let pos = imgFullPath.indexOf('img') + 3;
                
                // here 3 is added to neglect 'img' character
                let partPath = imgFullPath.slice(pos);
                const item = {};
                item.img = `img-cart${partPath}`;

                let name = event.target.parentElement.parentElement
                .nextElementSibling.children[0].children[0].textContent;
                item.name = name;

                let price = event.target.parentElement.parentElement
                .nextElementSibling.children[0].children[1].textContent.slice(1).trim();
                
                item.price = price;

                totalItem.push(item);
                const cartItem = document.createElement('div');
                cartItem.classList.add(
                    'cart-item',
                    'd-flex',
                    'justify-content-between',
                    'text-capitalize',
                    'my-3'
                );

                cartItem.innerHTML = `
                  <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                  <div class="item-text">
                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                  </div>
                  <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                  </a>`;
                  const total = document.querySelector('.cart-total-container');
                  cart.insertBefore(cartItem,total);
                  alert('item added to the cart');
                  showTotals();
                  handleItem();
                  clearCart();
            }
        });
    });
    
    function handleItem(){
        const cartItem = cart.querySelectorAll('.cart-item');
        cartItem.forEach(function(item){
            item.querySelector('.cart-item-remove')
            .addEventListener('click',function(event){
                cart.removeChild(event.target.parentElement.parentElement);
                showTotals();
                // update local storage
            });
        });
    }
    function clearCart(){
        const clearCartBtn = document.getElementById('clear-cart');
        clearCartBtn.addEventListener('click',function(event){
            const cartItems = cart.querySelectorAll('.cart-item');
            cartItems.forEach(function(item){
                cart.removeChild(item);
            });

            // update button value
            const cartBtn = cartInfo.lastElementChild;
            const itemCount = cartBtn.querySelector('#item-count');
            const itemTotal = cartBtn.querySelector('.item-total');
            const total = document.querySelector('#cart-total');
            itemCount.textContent = 0;
            itemTotal.textContent = 0.00;
            total.textContent = 0.00;
            
        });
    }

    function showTotals(){
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
        items.forEach(function(item){
            // the value will be in string so we can change it with parseFloat function
            total.push(parseFloat(item.textContent));
        });

        const totalMoney = total.reduce(function(total,item){
            total += item;
            return total;
        },0).toFixed(2);
        
        document.getElementById('cart-total').textContent = totalMoney;
        document.querySelector('.item-total').textContent = totalMoney;
        document.getElementById('item-count').textContent = total.length;
    }
})();
