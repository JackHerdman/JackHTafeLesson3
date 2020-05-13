//1. Create an object called me with 2 properties: name and age. Set the name to be your name and the age to be your age.

let me = {                 //the array called me
    name: "Jack",      // properties listed
    age: 29
};

console.log(me); //used to test 

// 2. Use the increment operator to increase the value of your age once.

me.age++;          // find age inside the object me and increment it

console.log(me);   //using to test 

// 3/ Add another property called hobbies and set the value to be an array of strings that represent some of your hobbies, make sure the array has at least 3 values.

me.hobbies = ["coding", "gaming", "eating"];  //adding the hobbies with . and the array with []

console.log(me);   //using to test

// 4. Add another property called Pets which should be an array of objects that represent your pets (make some up if you don't have any). Each pet should have 3 properties: name, age and species.

me.pets=[{
    name: "Scooter",
    age: 18,
    species: "Russian Blue"
},{
    name: "Slimey",
    age: 22,
    species: "Black Cat"
}]

console.log(me);

//5.  Use string concatenation to print out a list of your hobbies in a sentence. This code should work even if you add more elements to the list. Eg. "My hobbies are painting, drawing and exercising", "My hobbies are painting, drawing, exercising and skydiving"

let hobbies = "my hobbies include "             //this starts the statement
for (let i = 0; i < me.hobbies.length; i++) {   //this runs through eatch element of the array
    let hobby = me.hobbies[i];                  //this assigned a rotating value through each element
    hobbies += hobby;                           //
    if(i == me.hobbies.length - 2){             // this for the second last element
        hobbies += " and ";
    } else if (i == me.hobbies.length - 1){     // this is for the last element
        hobbies += ".";
    } else {
        hobbies += ", ";
    }
}
console.log(hobbies)