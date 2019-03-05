class ZOMATO {
 constructor(){
    this.apiKey = 'db8c1bbd6fbdad20f1a36f40ced37f10';
    this.header = {
        method: 'GET',
        headers: {
            'user-key': this.apiKey,
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    };
 }
 async searchAPI(){
    // category url
    const categoryURL = `https://developers.zomato.com/api/v2.1/categories`;

    // category data
    const categoryInfo = await fetch(categoryURL, this.header);
    const categoryJSON = await categoryInfo.json();
    const categories = await categoryJSON.categories;

    return {
        categories
    };
 }
}
class UI {
    constructor(){
        this.loader = document.querySelector('.loader');
        this.restaurantList = document.getElementById('restaurant-list');

    }
    addSelectOption(categories){
        const search = document.getElementById('searchCategory');
        let output = `<option value='0' selected>select category</option>`;
        categories.forEach(category =>{
            output += `<option value='${category.categories.id}'>${category.categories.name}</option>`
        });
        search.innerHTML = output;
    }
}
// iffe
(() => {
 const searchForm = document.getElementById('searchForm');
 const searchCity = document.getElementById('searchCity');
 const searchCategory = document.getElementById('searchCategory');

 const zomato = new ZOMATO();
 const ui = new UI();

 // add select options category

 document.addEventListener('DOMContentLoaded', ()=>{
     // logic goes here
     zomato.searchAPI().then(data => ui.addSelectOption(data.categories));
 })
})();