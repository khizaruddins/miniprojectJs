// hide pre loading
// hide when all images links scripts are loaded

// window event listener
eventListeners();

function eventListeners(){
    const ui = new UI();
    window.addEventListener('load', function(){
        ui.hidePreloader();
    });

    ui.navBtn.addEventListener('click',function(){
       ui.toggleNav(); 
    });

    ui.videoSwitch.addEventListener('click',function(){
        ui.videoControls();
    });
}

function UI(){
    this.preloader = document.querySelector('.preloader');
    this.navBar = document.querySelector('.nav');
    this.videoSwitch = document.querySelector('.video__switch');
    this.videoSwitchBtn = document.querySelector('.video__switch-btn');
    this.navBtn = document.querySelector('.navBtn');
    this.videoItem = document.querySelector('.video__item');
}

UI.prototype.hidePreloader = function(){
    this.preloader.style.display = "none";
}

UI.prototype.toggleNav = function(){
    this.navBar.classList.toggle('nav__show');
}

UI.prototype.videoControls = function(){
    this.videoSwitchBtn.classList.toggle('btnSlide');
    // why we are using this is because we need to pause and play,
    // the video which is lying in background
    if(this.videoSwitchBtn.classList.contains('btnSlide')){
        // this.videoSwitchBtn.classList.add('btnSlide');
        this.videoItem.pause();
    } else {
        // this.videoSwitchBtn.classList.remove('btnSlide');
        this.videoItem.play();
    }
}