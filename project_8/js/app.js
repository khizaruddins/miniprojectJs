// // finter button
// (function(){
//     const filterBtn = document.querySelectorAll('.filter-btn');
//     // console.log(filterBtn);

//     // adding eventListener

//     filterBtn.forEach(function(btn){
//         btn.addEventListener('click',function(event){
//             // as the link are clicked the page gets refereshed hence preventing the refreshment of page
//             event.preventDefault();
//             const value = event.target.dataset.filter;
//             // here dataset is used for fetching the data attribute 
//             // and .filter is to point which data attribute to fetch 
//             // console.log(value);
//             const items = document.querySelectorAll('.store-item');
//             items.forEach(function(item){
//                 if(value === 'all'){
//                     item.style.display = 'block';
//                 }
//                 else{
//                     if(item.classList.contains(value)){
//                         // basically it is telling that each item in store list 
//                         // does it consist of the data value of btn ?
//                         // if yes display else hide
//                         item.style.display = 'block';
//                     }
//                     else {
//                         item.style.display = 'none';
//                     }
//                 }
//             });
//         });
//     });
// })();

// // search box
// // we can redeclare the variables which was declared above it wont conflict
// (function(){
//     const search = document.querySelector('#search-item');
//     search.addEventListener('keyup',function(){
//         let value = search.value.toLowerCase().trim();
//         // console.log(value);
//         let length = value.length;
//         const items = document.querySelectorAll('.store-item');
//         items.forEach(function(item){
//             let type = item.dataset.item;
//             // if(type.includes(value)){
//             //     item.style.display = 'block';
//             // }
//             // else{
//             //     item.style.display = 'none';
//             // }
//             // includes filters those also which 
//             // has for eg s in the end of the word 
//             let match = type.slice(0,length);
//             if(value === match){
//                 item.style.display = 'block';
//             }else{
//                 item.style.display = 'none';
//             }
//         });
//     });
// })();


// rewrite

// buttons

(function(){
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function(btn){
        btn.addEventListener('click',function(event){
            event.preventDefault();
            const btnDataValue = event.target.dataset.filter;
            const storeItems = document.querySelectorAll('.store-item');
            storeItems.forEach(function(item){
                if(btnDataValue === 'all'){
                    item.style.display = 'block';
                } else {
                    if(item.classList.contains(btnDataValue)){
                        item.style.display = 'block'
                    }else{
                        item.style.display = 'none';
                    }
               }
            });
        });
    });
})();

(function(){
    const searchText = document.querySelector('#search-item');
    searchText.addEventListener('keyup',function(event){
        let searchTextValue = searchText.value.toLowerCase().trim();
        let lengthTextValue = searchTextValue.length;
        
        const storeItems = document.querySelectorAll('.store-item');
        storeItems.forEach(function(item){
            let itemDataValue = item.dataset.item;
            let match = itemDataValue.slice(0,lengthTextValue)
            
            // if(itemDataValue.includes(searchTextValue)){
            //     item.style.display = 'block';
            // }else{
            //     item.style.display = 'none';
            // }

            if(searchTextValue === match){
                item.style.display = 'block';
            }
            else{
                item.style.display = 'none';
            }
        });
    });
})();