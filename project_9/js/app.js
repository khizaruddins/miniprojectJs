// lightbox

(function(){

    // all images
    let imageList = [];
    let counter = 0;

    const storeImages = document.querySelectorAll('.store-img');
    const lightboxContainer = document.querySelector('.lightbox-container');
    const lightboxItem = document.querySelector('.lightbox-item');
    const lightboxCloseIcon = document.querySelector('.lightbox-close');
    const btnLeft = document.querySelector('.btnLeft');
    const btnRight = document.querySelector('.btnRight');

    // all images to the array 

    storeImages.forEach(function(image){
        imageList.push(image.src);
    });
    // console.log(imageList);

    // open modal

    storeImages.forEach(function(image){
        image.addEventListener('click',function(event){
            // show modal
            lightboxContainer.classList.add('show');
            // getting source
            let imgSrc = event.target.src;
            // console.log(imgSrc);

            counter = imageList.indexOf(imgSrc);
            // show modal with proper image
            lightboxItem.style.backgroundImage = `url(${imgSrc})`

        });
    });

    // close modal
    lightboxCloseIcon.addEventListener('click',function(){
        // close modal
        lightboxContainer.classList.remove('show');
    });

    btnLeft.addEventListener('click',function(event){
        counter--;
        if(counter < 0){
            counter = imageList.length - 1;   
        }
        // console.log(counter);
        
        // change image
        lightboxItem.style.backgroundImage = `url(${imageList[counter]})`;
    });

    btnRight.addEventListener('click',function(event){
        counter++;
        if(counter > (imageList.length - 1)){
            counter = 0;   
        }
        // console.log(counter);
        
        // change image
        lightboxItem.style.backgroundImage = `url(${imageList[counter]})`;
    });
})();