(function(){
    // select option
    const services = [
        {
            value:1,
            title:'great - 20 %'
        },
        {
            value:2,
            title:'ok - 10 %'
        },
        {
            value:3,
            title:'bad - 2 %'
        }
    ];

    // add selected option
    services.forEach(function(service){
        const option = document.createElement('option');
        option.textContent = service.title;
        option.value = service.value;

        // attaching newly created option node
        document.getElementById('input-service').appendChild(option);
    });

    // get all form values 

    const form = document.getElementById('tip-form');
    const amount = document.getElementById('input-bill');
    const users = document.getElementById('input-users');
    const service = document.getElementById('input-service');
    // select where to display result
    // feedback

    const feedback = document.querySelector('.feedback');
    const loader = document.querySelector('.loader');
    const results = document.querySelector('.results');

    form.addEventListener('submit',function(event){
        event.preventDefault();
        let billValue = amount.value;
        let numOfPeople = users.value;
        let quality = service.value;

        if(
            (billValue === '' || billValue === '0')||
            (numOfPeople === '' || numOfPeople === '0') ||
            (quality === '0')
          ){
            feedback.classList.add('showItem','alert-danger');
            feedback.innerHTML = `
            <p> Please check the value </p>
            <p> Bill amount cannot be less than 0</p>
            <p> People sharing the bill cannot be less than zero </p>
            <p> Service has to be selected</p>`;

        setTimeout(function(){
            feedback.classList.remove('showItem','alert-danger');
        },5000);

        } else {
            feedback.classList.add('showItem', 'alert-success');
            feedback.innerHTML = `<p> calculating..</p>`;
            loader.classList.add('showItem');

            setTimeout(function(){
                feedback.classList.remove('showItem', 'alert-success');
                loader.classList.remove('showItem');
                showResults(billValue, numOfPeople, quality);
                clearForm();
            }, 4000);
        }
    });

    // show result function
    function showResults(bill, people, quality){
        let percent = 0;
        if (quality === '1') {
            percent = 0.2;
        } else if (quality === '2'){
            percent = 0.1;
        } else if (quality === '3'){
            percent = 0.02;
        }

        let tipAmount = parseInt(bill) * percent;
        // parseInt() function is used
        // to convert string value to integer
        let total = parseInt(bill) + tipAmount;
        let eachPerson = total / parseInt(people);

        results.classList.add('showItem');
        document.getElementById('tip-amount').textContent = tipAmount;
        document.getElementById('total-amount').textContent = total;
        document.getElementById('person-amount').textContent = eachPerson.toFixed(2);
    }

    // clear form
    function clearForm(){
        amount.value = '';
        users.value = '';
        service.value = '';
    }
})();
