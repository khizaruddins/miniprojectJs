// my approach : wrong method 

// (function(){
//     const btns = document.querySelectorAll('.btn');
//     let customerImg = document.getElementById('customer-img');
//     let customerName = document.getElementById('customer-name');
//     let customerText = document.getElementById('customer-text');
//     let customerArray = [
//         {
//             'author':'john dcosta',
//             'text':'lorem  ajdvbajbvajb oqdivhq oq vdoqi dvjbiqd vbqjdb kqjacxbqeio qpv'
//         },
//         {
//             'author':'bob marley',
//             'text':'lorem iabdv aojdbvqmelq oeivq k vmxoiqh odjsbckqmd qdcdkqh eodqcmaxn, wbi',
//         },
//         {
//             'author':'shwayn watson',
//             'text':'lorem aibdva oadv qjandv ajvd qeoqkneov que vjqdkncla kdniquev adank'
//         },
//         {
//             'author':'boonie wrights',
//             'text':'lorem aidvb akqe qohe ivqjbivjwn qoihcoqiok hdv jc sdj vgwdak cqi'
//         },
//         {
//             'author':'emma watson',
//             'text':'lorem aijbdvadnvkajb qoevqkmvo kzxnl z'
//         }
//     ];
//     let counter = 0;
//     btns.forEach(function(btn){
//         btn.addEventListener('click',function(event){
//             const value = event.target;
//             console.log(`click btn ${counter} and ${customerArray.length}`);
//             if(value.classList.contains('prevBtn')){
//                 // console.log(`${counter}`);
//                 counter--;
//                 if(counter < 0){
//                     counter = customerArray.length - 1;
//                 }

//                 customerName.textContent = customerArray[counter].author;
//                 customerText.textContent = customerArray[counter].text;

//                 customerImg.setAttribute('src',`img/customer-${counter}.jpg`);
//                 console.log(counter);
                
//             } else if(value.classList.contains('nextBtn')){
//                 counter++;
//                 if(counter===customerArray.length){
//                     counter = 0;
//                 }
//                 customerName.textContent = customerArray[counter].author;
//                 customerText.textContent = customerArray[counter].text;
//                 customerImg.setAttribute('src',`img/customer-${counter}.jpg`);
//                 console.log(counter);
//             }
//         });
//     });
// })();

// tutorials method generalised method

(function(){
    let customers = [];
    let index = 0;

    // object constructor function

    function Customer(name,img,text){
        this.name = name;
        this.img = img;
        this.text = text;
    }

    function createCustomer(name,img,text){
        let full_imgPath = `img/customer-${img}.jpg`;

        // create new customer instance
        const customer = new Customer(name,full_imgPath,text);
        // add object instance to customer array

        customers.push(customer);
    }
    createCustomer('johnn',1,`and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`);
    createCustomer('bob',2,`lorem orem Ipsum is simply dummy desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`);
    createCustomer('peter',3,`lorem orem xt of standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`);
    createCustomer('arnold',4,`lorem oremPageMaker including versions of Lorem Ipsum.`);
    // console.log(customers);

    document.querySelectorAll('.btn').forEach(function(item){
        item.addEventListener('click',function(event){
            event.preventDefault();
            if(event.target.parentElement.classList.contains('prevBtn')){
                if(index === 0 ){
                    index = customers.length;
                }
                index--;
             document.getElementById('customer-img').src = customers[index].img;
             document.getElementById('customer-name').textContent = customers[index].name;
             document.getElementById('customer-text').textContent = customers[index].text;   
            }

            if(event.target.parentElement.classList.contains('nextBtn')){
                if(index === (customers.length-1)){
                    index = -1;
                }
                index++;
             document.getElementById('customer-img').src = customers[index].img;
             document.getElementById('customer-name').textContent = customers[index].name;
             document.getElementById('customer-text').textContent = customers[index].text;   
            }

        })
    });
})();
