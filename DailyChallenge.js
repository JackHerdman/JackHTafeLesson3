// Create a function that takes an 2 arguments, an array of objects and a string character (eg. "a" or "b", etc.). The function should return all the objects in the array where the property name of that object contains the string character.

let people = [
    {
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
    }
]
 
function searchbyChar(array, searchTerm){       //creating a function to search for a character
    let resultArr = [];                         //every time it has found a character it needs to save it
    for (let i = 0; i < array.length; i++) {    //scrolls through the array
        let element = array[i];
        let found = false;                      // needs to start false or else it will return first char

for (let i = 0; i < element.name.length; i++) { // this search will scroll through the letters of the element
    const letter = element.name[i];
    if(letter.toLowerCase() == searchTerm.toLowerCase()){       // if it finds a match then set found to true
        found = true;                                           //.toLowerCase ignores caps
    } 
}
        if (found){
            resultArr.push(element);            //when found is true push it to the array
        }
    }
    return resultArr;                           //once everything has run return the results
}

console.log(searchbyChar(people, "c"));