// immediate invoked function expression
(function(){
    document
    .getElementById('message-form')
    .addEventListener('submit',
        function(event){
            // prevent default 
            event.preventDefault();
            // getting a value
            const message = document.getElementById('message');
            
            // checking for empty value
            if(message.value === ''){
                const feedback = document.querySelector('.feedback');
                // show the alert
                feedback.classList.add('show');
                // after a particular time we have to hide alert
                setTimeout(function(){
                    // removing the class show will hide the alert
                    feedback.classList.remove('show');
                },3000);
            } else {
                // changing value in the DOM
                document.querySelector('.message-content').textContent = message.value;
                // emptying the input box
                message.value = '';
            }
        });
})();