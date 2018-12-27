// function declaration
function showTime(){
    const clock = document.getElementById("clock");
    let date = new Date();
    // 0 - 23
    let hours = date.getHours();
    // 0 - 59
    let minutes = date.getMinutes();
    // 0 - 59
    let seconds = date.getSeconds();
    let formatHours = checkAMPM(hours);

    hours = formatTo12HourFormat(hours);
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    clock.innerHTML = `${hours} : ${minutes} : ${seconds} : ${formatHours}`;
}

function checkAMPM(time){
    let format = 'AM';
    if(time >= 12){
        format = 'PM';
    }
    return format;
}

function formatTo12HourFormat(time){
    if(time>12){
        time = time - 12;
    }
    if(time === 0){
        time = 12;
    }
    return time;
}

function addZero(time){
    if(time<10){
        time = "0" + time;
    }
    return time;
}
showTime();
setInterval(showTime,1000);