console.log('***** Object Practice *****');

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Clay',
  lastName: 'Webb',
  hasSiblings: true,
  shoeCount: 8,
  favThreeFoods: ['Chicken', 'Pineapple', 'Dots' ]
};
console.log('A little about me:', me); // This will log out "A little about me:" followed by the me object literal properties.



/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = `${me.firstName} ${me.lastName}`; // This will combine both object properties with a space in between

console.log('Hello my name is', fullName); // This will log out "Hello my name is Clay Webb"



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/

// I'm not sure if this is asking us to create two seperate console logs or to combine them so I will do both

console.log('My first favorite food is: ' + me.favThreeFoods[0]);
console.log('My last favorite food is:', me.favThreeFoods[2]); // These are the seperate console logs

console.log(`My first favorite food is: ${me.favThreeFoods[0]}, My last favorite food is: ${me.favThreeFoods[2]}`); // This is the combined console log



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log(`I currently have ${me.shoeCount} pairs of shoes`); // This will log "I currently have 8 pairs of shoes"

me.shoeCount++; // This will add one to the current shoeCount property value

console.log('Now I have', me.shoeCount + ' pairs of shoes'); // This will log the new shoe count and should display "Now I have 9 pairs of shoes"



/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'Blue'; // This should add the favoriteColor property into the me object literal

console.log('A little more about me now:', me); // This will log the properties in the updated me object literal
