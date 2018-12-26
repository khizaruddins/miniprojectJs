(function(){
    const hexColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    const btn = document.getElementById('btn');
    const hexValue = document.getElementById('hex-value');
    btn.addEventListener('click',createHex);
    function createHex(){
        let hexColorValue = '#';
        for(let i = 0; i < 6; i++){
            let random = Math.floor(Math.random()*hexColor.length);
            hexColorValue += hexColor[random];
        }
        document.body.style.backgroundColor = hexColorValue;
        hexValue.textContent = hexColorValue;
    }
})();