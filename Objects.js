//declaring objects. thinking of the object like an array and each property is an element
let myDog = {     //creates one variable with multiple properties
    name: "Rex",  //property name
    age: 6       //property age
};
//can also be written like
let myCat = {name: "Scooter", age: 3};

console.log(myDog.name); //the . is called an accessor, used to access properties
console.log(myDog["age"]); // can also by accessed like this

myDog.name = "Buffy";  // can be used to update properties
console.log(myDog.name);

myDog.owner = "Jack";  // you can add properties by accessing with . and a new property


let myBeaver = new Object();
myBeaver.colour = "brown";

console.log(myBeaver);
