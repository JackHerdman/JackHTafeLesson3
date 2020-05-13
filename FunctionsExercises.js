// 1. Create a function that takes 2 arguments that are numbers and returns the sum of those numbers.
function addNumbers(num1, num2){
return num1 + num2;
}
let newNumber = addNumbers(12, 19);     // using to test
console.log(newNumber);                 // using to test

// 2. Create a function that takes 2 arguments that are numbers and returns the largest of those numbers.
function largerNumber(num1, num2){
    if(num1 > num2){
        return num1
    } else {
        return num2
    }
}
let bigNumber = largerNumber(12, 19);     // using to test
console.log(bigNumber);                   // using to test

// 3. Create a function that takes 1 argument that is an array and prints each of the elements in that array to the console.
let names =["Jeff", "Jack", "Joe"];
function printArray(print){
    console.log(print)
};
printArray(names);


// 4. Create a function that takes 2 arguments, name and age, and returns an object with properties name and age set to the values passed in.

function createObject(name, age){
    return person =[{
        name: name,
    age: age}]
}

let me = createObject("Jack", 28);

console.log(me)



//5.  Create a function that takes 1 argument that is an array of objects representing people. Each object should have a property name which should be a string and a property age which should be a number. The function should return the name of the oldest person.

let people = [{
    name: "Jack",
    age: 29
 },{
     name: "Karina",
     age: 30
 },{
     name: "Christian",
     age: 31
 },{
     name: "David",
     age: 34
 }]
 
 function getOldest(array){
 let oldestCurrent;                             //this is a placeholder
 for (let i = 0; i < people.length; i++) {      //this checks every element
     let person = people[i];                    // this assigns a variable to the current element
     if (oldestCurrent){                        //while oldestCurrent is true
         if(person.age > oldestCurrent.age){    //check the first element age against the oldestcurrent age
            oldestCurrent = person;             //if it is larger, make them the oldest
         }
     } else {
         oldestCurrent = person;                //if oldestCurrent is false. set them as the first person
     }
    }
    return oldestCurrent.name                   //return the name of the oldest person
}
    console.log(`The oldest person is ${getOldest(people)}`);