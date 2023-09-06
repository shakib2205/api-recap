//create object using object literals
const player = {};
player.name = 'small nirob'; // this is called properties 
player.special =' hagu kore khali';
player.bat = function(){
    //this is called method
    console.log(' swing your bat' );
}

console.log(player);
player.bat();


const student = { 
    name: 'shakib',
    job: 'boisha khai',
    ball: function(){
        console.log('through the ball')
    },
    salary: 10000
}

//2. object constructor

const person  = new Object();
console.log(person); 

//3. object create method

const item = Object.create(student);
console.log(item.name);

//4.class
class Person{
    name = 'abul';
    address = 'sodor';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);
console.log(person1);

//5. function

function Car(model,price){
    this.model = model;
    this.price = price;
}
const telsa = new Car('elon', 320000);
console.log(tesla);