// rest operator
// used when declaring the function not invoking function
// arguments variables in the function 

//Rest Function add(...rest)
//Spread add(...spread)

function add(num1, num2, num3){
    let result = num1 + num2 + num3;
    console.log(result);
    console.log(arguments);
}
add(1,2,3);

// here we cannot use array methods on arguments coz they are not array but array like objects

// with rest operator
function sum(value, ...args){
    console.log(args);
    let result = args.filter(item => item > value).reduce((acc, curr) => {
        acc +=curr;
        return acc;
    }, 0);
    console.log(result);
}

sum(2,1,2,3,4,5);

// rest must be last in parameter

// default parameters
function Student(name, lname, school = 'UCLA'){
    this.name = name;
    this.lname = lname;
    this.school = school;
}

const john = new Student('john', 'anderson', 'UCLA');
const bob = new Student('bob', 'anderson');
console.log(john);
console.log(bob);

// before not declaring default parameter the school
// for bob was assigned undefined