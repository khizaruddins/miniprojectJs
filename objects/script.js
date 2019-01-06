// objects basics

/*

objects are collection of key value pair
property value can be strings, numbers, boolean arraynd function
how ever if the property value is function they are called as 
methods instead

*/

// object literal syntax
// here we cannot declare key value as last-name: popings 
// to declare that we must use bracket notation
// and it has to be fetch using bracket notation

// const person = {
//     name: 'bob',
//     age: 26,
//     married: true,
//     children:['anna', 'peter'],
//     greeting:function(){
//         console.log('hello im bob and im 26');
//     },
//     ["last-name"]:'anderson'
// }
/// how to access objects
// dot notation

// console.log(person);

// console.log(person.name);

// const age = person.age;

// console.log(age);

// const firstChild = person.children[0];

// console.log(firstChild);

// person.greeting();

// console.log(person["last-name"]);

// change the property

// person.married = false

// add property

// person.city = 'chicago';

// delete property

// delete person.married;

// console.log(person);

// this keyword

// const john = {
//     name: 'john',
//     lastName: 'anderson',
//     fullName: function(){
//         console.log('hello my fullname is john anderson');
//     }
// }

// john.fullName();

// const bob = {
//     name: 'bob',
//     lastName: 'jordon',
//     fullName: function(){
//         console.log('hello my fullname is bob jordon');
//     }
// }

// bob.fullName();

// instead we can use this keyword to grab info from same object 
// const john = {
//     name: 'john',
//     lastName: 'anderson',
//     fullName: function(){
//         console.log(`hello my fullname is ${this.name} ${this.lastName}`);
//     }
// }

// john.fullName();

// const bob = {
//     name: 'bob',
//     lastName: 'jordon',
//     fullName: function(){
//         console.log(`hello my fullname is ${this.name} ${this.lastName}`);
//     }
// }

// bob.fullName();

// // below points to global object window 
// this.name = 'window';
// this.lastName = 'cooper';

// fullName = function(){
//     console.log(`hello my fullname is ${this.name} ${this.lastName}`);
// }

// fullName();
// points to window global object

// any change we have to make in the above
// object it is easy for 2 objects
// but what if we have 700 objects 
// it will be time consuming to change each and every object
// hence we need some kind of blueprint which will help us in making object
// and it will change all 700 objects 

// factory functions and constructor functions
// are one of those blueprint

// factory function example
// function createPerson(name, lastName){
//     return{
//         name: name,
//         lastName: lastName,
//         fullName:function(){
//             console.log(`helllo my full name is ${this.name} ${this.lastName} and i like vue2js`);
//         }
//     }
// }

// const john = createPerson('john','anderson');
// const bob = createPerson('bob','jordon');
// const sussy = createPerson('sussy','copper');

// john.fullName();
// bob.fullName();
// sussy.fullName();

// constructor function
// to create a constructor function we must name it with capital letter

// function Person(name, lastName){
//     this.name = name;
//     this.lastName = lastName;
//     this.fullName = function(){
//         console.log(`hello my full name is ${this.name} ${this.lastName} and i like vue2js`);
//     }
// }
// // here while creating new object using constructor we must use "new" keyword
// // new keyword is used to create new instance 
// const sussain = new Person('sussain', 'donald');
// sussain.fullName();

// // constructor property
// // all objects in js have access to constructor property that returns the constructor function that is created
// // builtin constructor functions
// // arrays and functions are in fact objects in js

// console.log(sussain.constructor);

// const obj = {};
// console.log(obj.constructor);

// const list = [];
// console.log(list.constructor);

// const sayHi = function(){

// }
// console.log(sayHi.constructor);
// // we can use this constructor property in creating objects as

// const mike = new sussain.constructor('mike','rage');
// mike.fullName();
// console.log(mike);

// --------------------
// prototype property //
// --------------------

// function Student(name, lastName, role, school){
//     this.name = name;
//     this.lastName = lastName;
//     this.role = role;
//     // here we are using the space for storing function 
//     // instead we can use prototype property of constructor
// }

// Student.prototype.school = "Crystal Grove High School";
// Student.prototype.greet = function(){
//     console.log(`hello i'm ${this.name} ${this.lastName} and i am ${this.role} in the ${this.school}`);
// };

// const john = new Student(
//     "john",
//     'conor',
//     "student"
// );

// const bob = new Student(
//     "bob",
//     'jordon',
//     "student"
// );

// console.log(john);
// console.log(bob);
// john.greet();
// bob.greet();

// how to check for prototype property
// two ways to find prototype property
// Object.constructor.property
// Object.getPrototypeof({is expecting object});

// console.log(john.constructor.prototype);
// console.log(Object.getPrototypeOf(bob));

// all objects in js is inherited from the prototype of an object 
// constructor function. when we say object we mean arrays and functions 
// as they are also objects
// object constructor function is at the top of the food chain

// ---------------
// Object Create //
// ---------------

// const personProto = {
//     greet:function(){
//         console.log(`hello i'm ${this.name} ${this.lastName}`);
//     }
// };

// const john = Object.create(personProto);
// john.name = 'john';
// john.lastName = 'conner';
// john.greet();

// const sarah = Object.create(personProto,{
//     name:{value:'sarah'},
//     lastName:{value:'jordon'}
// });

// sarah.greet();

// --------------------
// Object inheritance //
// --------------------
// function Person(){}

// Person.prototype.school = "Crystal Grove High School";
// Person.prototype.greet = function(){
//     console.log(`Hello im ${this.name} ${this.lastName} im a ${this.role} in ${this.school}`);
// }

// function Student(name, lastName){
//     this.name = name;
//     this.lastName = lastName;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.role = 'student';
// Student.prototype.answerQuestion = function(){
//     console.log(`and the answer is...`);
// }

// const john = new Student('john','conner');
// console.log(john);
// john.greet();
// john.answerQuestion();

// function Teacher(name, lastName){
//     this.name = name;
//     this.lastName = lastName;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;
// Teacher.prototype.role = 'teacher';
// Teacher.prototype.askQuestion = function(){
//     console.log(`and the answer to this question is??`);
    
// }
// const sara = new Teacher('sarah', 'williams');
// console.log(sara);
// sara.greet();
// sara.askQuestion();

// -------------
// Object call //
// -------------

// const greet = function(){
//     console.log(`hello my full name is ${this.name} ${this.lastName}`);
// }
// window.name = 'john';
// window.lastName = 'carter';
// greet();

// const person1 = {
//     name: 'arnold',
//     lastName: 'schwatz',
//     greet: function(){
//         console.log(`hello my full name is ${this.name} ${this.lastName}`);
//     }
// }

// person1.greet();

// const person2 = {
//     name: "anna",
//     lastName: 'gerber'
// }

// greet.call(person2);
// greet.call(person1);


// function Person(name, lastName){
//     this.name = name;
//     this.lastName = lastName;
// }

// Person.prototype.school = "Crystal Grove High School";
// Person.prototype.greet = function(){
//     console.log(`hello im ${this.name} ${this.lastName} and im a ${this.role} in ${this.school}`);
// }

// function Student(name, lastName, honorStudent){
//     Person.call(this, name, lastName);
//     this.honorStudent = honorStudent;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.role = 'student';
// const john = new Student('john', 'carter', false);
// console.log(john);
// john.greet();

// function Teacher(name, lastName){
//     Person.call(this, name, lastName);
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.role = 'teacher';
// const sara = new Teacher('sara','conner');
// sara.greet();


///////////////////////////////////////////////////////
// ES6 lasses prototypal inheritance
//////////////////////////////////////////////////////

// function Employee(id){
//     this.id = id;
// }
// Employee.prototype.showId = function(){
//     console.log(`my id is ${this.id}`);
// }

// const john = new Employee(23);
// console.log(john);
// john.showId();

// function Manager(id, name, department){
//     Employee.call(this, id);
//     this.name = name;
//     this.department = department;
// }
// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;
// Manager.prototype.callMeeting = function(){
//     console.log(`im calling a meeting`)
// }
// const sara = new Manager(34,'sara', 'sale');
// console.log(sara);
// sara.callMeeting();
// sara.showId();

/////////////////////////
// ES6 Classes
/////////////////////////

// class Employee{
//     constructor(id){
//         this.id = id;
//     }
//     showId(){
//         console.log(`my id number ${this.id}`);
//     }
// }

// const john = new Employee(45);
// console.log(john);
// john.showId();

// class Manager extends Employee{
//     constructor(id, name, department){
//         super(id);
//         this.name = name;
//         this.department = department;
//     }
//     callMeeting(){
//         console.log(`im calling a meeting`);
//     }
// }

// const sara = new Manager(34, 'sara','sales');
// console.log(sara);
// sara.showId();
// sara.callMeeting();