//block of code which is instructions to execute

function addNumbers(num1, num2){  //this is instructions must be ABOVE the running
console.log(num1 + num2);
}
addNumbers(12, 18);  //run the code in the function, set the first element to num1 and the second to num2

addNumbers("Hello ", "World")
let num1 = "Hello ";
let num2 = "World";
console.log(num1 + num2);

function sayHello(){  //stores something to be used later
    console.log("Hello");
}
sayHello();  //calls the function to be used now


function addNumbers (num1, num2){
    return num1 + num2;     //after running the function go back to continue the rest of the script
}
let newNumber = addNumbers(12, 19); // stores the function that was run as a new variable
console.log(newNumber);

function multiplyByTwo(num){   // functions can use other functions inside them
    return addNumbers(num, num);  //num is the input, which will return the same as addNumbers(10, 10)
}
console.log(multiplyByTwo(10));


let me ={
    firstName: "Jack",
    lastName: "Herdman",
    getFullName: function(){
        return `${this.firstName} ${this.lastName}` //this. is used inside of an object doesnt have to be defined
    }
}
console.log(me.getFullName())



let me = {
    name: "Jack",
    age: 29
}

function agePerson(person){ //the person is getting passed in as me
    person.age++;  //this will look like me.age++ 
}

console.log(me);
agePerson(me); //me is getting passed into the function
console.log(me);

people=[{
    name: "Luke",
    age: 10
    pets: [{
        type: "Dog",
        name: "Rex"
    },{
        type: "Cat",
        name: "TC"
    }]
},{
    name: "Jack",
    age: 12
    pets: [{
        type: "Snake",
        name: "Mr. Slithers",
    }.{
        type: "Cat",
        name: "Meowmeow"
    }]

}]