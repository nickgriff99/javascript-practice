/* var name = "Nick";
var age = 26;

var message = "Hi, my name is " + name + " and I am " + age + " years old.";
        
//alert(message);

console.log(message); */

//Variables in JavaScript

/* var userName = "itznich";
var totalWins = 30;
var totalLosses = 10; */

/* Variable Rules */

// Should have a meaningful name
// Cannot contain hyphen (-) or space
// Cannot start with a number
// Cannot use reserved keywords
// Variables are case sensitive
// Should be camelCase

// console.log(userName);


/* DATATYPES BELOW */

// Data Types in JavaScript

/* ----------------------- */

/* Primitive / Value Types */

var firstName = 'Nick'; // String
var age = 26; // Number
var recedingHairline = false; // Boolean
var favFood; // Undefined
var toiletPaper = null; // Null

toiletPaper = 24;
toiletPaper = null;
toiletPaper = 'Triple Ply';

/* ----------------------- */

/* Reference Types / Structural Types */

// Object
  // var person = {
  //   firstName: 'Nick',
  //   age: 26,
  //   recedingHairline: false,
  //   favFood: 'Pizza',
  //   toiletPaper: 206,
  // };

// Array
var students = ['Nick', 'John', 'Jane', 'Doe'];

// Function
var myFunc = function() {
  // run some code
};

console.log('Value: ', students);
console.log('Type: ', typeof firstName);

/* END OF DATATYPES */

/* ----------------------- */

/* STRINGS BELOW */

// Strings in JavaScript

var make = 'Harley Davidson';
var model = 'Iron 883';
var year = 2017;

// String Concatenation

var myRide = make + ' ' + model;

var myBraggingRights = 'I drive a ' + year + ' ' + myRide;

console.log(myBraggingRights);

/* END OF STRINGS */

/* ----------------------- */

// JavaScript Numbers


// JS is only accurate up to 15 digits
// JS will keep track up to 17 decimal places
var totalUsers = 42;
var purchase = 46.99;

var sciNot = 123e5; // 12300000
var sciNot = 123e-5; // 0.00123

var numVal = 5 + 5; // 10
var numVal = 5 - 5; // 0
var numVal = 5 * 5; // 25
var numVal = 5 / 5; // 1
var numVal = 19 % 5; // 4

// PEMDAS
var numVal = (0.1 + 0.2) // 0.30000000000000004 /* WHY?! */
var numVal = (0.1 * 10 + 0.2 * 10) / 10; // 0.3 /* FIXED :) */
/* Use PEMDAS when using decimals, JS is not always accurate otherwise!!! */

var numVal = 10 + '5 years'; // 105 years
//when using strings and numbers, JS will convert the number to a string and concatenate them together
var numVal = 10 * '5'; // 50
//when using multiplication, JS will convert the string to a number and multiply them together
var numVal = 10 * '5 years'; // NaN
 
/* END OF JAVASCRIPT NUMBERS */

/* ----------------------- */

// JavaScript Practice

var carMake = 'Toyota'; // String
var carModel = 'Camry'; // String
var carYear = 2012; // Number
var carColor = 'Black'; // String
var hasManualTransmission = false; // Boolean
var carSeats = 5; // Number
var carMileage = 130000; // Number

/* END OF JAVASCRIPT PRACTICE */

/* ----------------------- */

// JavaScript Practice 2 

var dateOfBirth = 1999; // Number
var age = 2025 - dateOfBirth; // Number
var organDonor = true; // Boolean
var streetAddress = '123 Main St'; // String
var city = 'Orem'; // String
var state = 'Utah'; // String
var zipCode = 84058; // Number
var idNumber = '123456789'; // String
var etc = 'etc'; // String

/* END OF JAVASCRIPT PRACTICE 2 */

/* ----------------------- */

// JavaScript Practice 3

let item1 = 10.50; // Number
let item2 = 15.00; // Number
let item3 = 20.00; // Number
let item4 = 12.00; // Number
let item5 = 11.00; // Number
let item6 = 10.00; // Number
let totalPrice = item1 + item2 + item3 + item4 + item5 + item6; // Number
console.log("Total Price (before discount): $" + totalPrice);

let discount = 0.25; // Number
let priceAfterDiscount = totalPrice - (totalPrice * discount); // Number
console.log("Price After Discount: $" + priceAfterDiscount.toFixed(2));

let taxRate = 0.0775; // Number
let taxes = priceAfterDiscount * taxRate; // Number
console.log("Taxes: $" + taxes.toFixed(2));

let finalPrice = priceAfterDiscount + taxes; // Number
console.log("Final Price: $" + finalPrice.toFixed(2));

/* END OF JAVASCRIPT PRACTICE 3 */

/* ----------------------- */

/* JavaScript Logical Operators */

// === equal to
// !== not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

// && and
// || or
// ! not

var skater1 = 9.5;
var skater2 = 9;
var skater3 = 9;
var isJackedUpOnCaffeine = true;

if (skater2 > skater3 && skater2 <= skater1 && skater1 < 100) {
  console.log('Move on to the next round!');
} else if (skater3 > skater2 || skater3 === skater2 
  && skater2 < skater1 
  && !isJackedUpOnCaffeine
) {
  console.log('skater3 is stepping up their game!');
} else if (skater3 > 5 && isJackedUpOnCaffeine) {
  console.log('skater3 is on fire! gold for days!');
};

// JavaScript Practice 4

let currentLightColor = 'red'; // String
currentLightColor = 'green'; // String

if (currentLightColor === 'red') {
  console.log('The light is red, please stop.');
} else if (currentLightColor === 'yellow') {
  console.log('The light is yellow, please slow down.');
} else if (currentLightColor === 'green') {
  console.log('The light is green, please go.');
} else {
  console.log('The light is broken, please proceed with caution.');
}

/* END OF JAVASCRIPT PRACTICE 4 */

/* ----------------------- */

// JavaScript Debugging Practice

// Part 1

/*
Directions:
1. Fix syntax errors.
2. Run the following code as-is and read the error message.
3. Fix the mistake, and then re-run the code to check it.

Expected Output:
=> WARNING: Insufficient energy!
*/

let readyToSkate = false;
let energyLevel = 18000;

if (energyLevel >= 24000) {
   console.log("Energy level is a go!");
   readyToSkate = true;
} else {
   console.log("WARNING: Insufficient energy!");
   readyToSkate = false;
}

// Part 2

/*
Directions:
1. The block of code has a few syntax errors.
2. Run the code as-is to find the mistakes.

💡 Tip:
Only one error will be flagged at a time.
Fix that ONE problem, and then re-run the code to check your work.
Avoid trying to fix multiple issues at once.

Expected Output:
=> Crew & cameraBattery is a go!
=> Grab your skateboard...
=> Ready...
=> Set...
=> SKATE!
*/

readyToSkate = false;
let crewStatus = true;
let cameraBattery = "green";

if (crewStatus && cameraBattery === "green") {
   console.log("Crew & cameraBattery is a go!");
   readyToSkate = true;
} else {
   console.log("WARNING: Crew or cameraBattery not ready!");
   readyToSkate = false;
}

if (readyToSkate) {
   console.log("Grab your skateboard...");
   console.log("Ready...");
   console.log("Set...");
   console.log("SKATE!");
} else {
   console.log("No skating today.");
}

// Part 3

/*
Directions:
1. Fix runtime errors.
2. Remember to examine the error message for clues about what is going wrong.
3. Pay close attention to any line numbers mentioned in the message - these will help you locate and fix the mistake in the code

Expected Result:
=> WARNING: Insufficient energy!
*/

readyToSkate = false;
energyLevel = 18000;

if (energyLevel >= 21000) {
  console.log("Energy level is a go!");
  readyToSkate = true;
} else {
  console.log("WARNING: Insufficient energy!");
  readyToSkate = false;
}

// Part 4

/*
Directions:
1. Find and fix the runtime error.

Expected Result:
=> Energy level is a go!
=> Grab your skateboard...
=> Ready...
=> Set...
=> SKATE!
*/

readyToSkate = false;
energyLevel = 24010;

if (energyLevel >= 24000) {
  console.log("Energy level is a go!");
  readyToSkate = true;
} else {
  console.log("WARNING: Insufficient energy!");
  readyToSkate = false;
}

if (readyToSkate) {
  console.log("Grab your skateboard...");
  console.log("Ready...");
  console.log("Set...");
  console.log("SKATE!");
} else {
   console.log("No skating today.");
}

// Part 5

/*
Requirements:
1. It's time to skate only if your energy, crew and camera battery all check out OK.
2. If a check fails, print that information to the console and forget about skating today.
3. If all checks are successful, print a message to the console and go skate!

Logic errors do not generate warning messages or prevent the code from running, but the program still does not work as intended.
First, run this sample code as-is and examine the output. Should you be ready to skate? Did you?

💡 Tips:
1. Break the code down into smaller chunks.
2. Consider the first if/else block. Add console.log(readyToSkate) after this block, then run the program. Given the energyLevel value, should readyToSkate be true or false after the check? Is the program behaving as expected?
3. Consider the second if/else block. Add another console.log(readyToSkate) after this block and run the program. Given crewStatus and cameraStatus, should readyToSkate be true or false after this check?
4. Consider both if/else blocks together. Given the values for energyLevel, crewStatus and cameraStatus, should readyToSkate be true or false per the requirements? Is the program behaving as expected?
5. When checking the energy readiness and the crew & camera readiness, does it make sense to store the result to a single variable, readyToSkate? Perhaps energy readiness and crew & camera readiness should have their own variable to update 🤷‍♂️

Expected Result:
=> WARNING: Insufficient energy!
=> Crew & cameraBattery is a go!
=> No skating today.
*/

readyToSkate = false;
energyLevel = 18000;
crewStatus = true;
cameraBattery = "green";

if (energyLevel >= 24000) {
   console.log("Energy level is a go!");
} else {
   console.log("WARNING: Insufficient energy!");
   readyToSkate = false;
}

if (crewStatus && cameraBattery === "green"){
   console.log("Crew & cameraBattery is a go!");
} else {
   console.log("WARNING: Crew or cameraBattery not ready!");
   readyToSkate = false;
}

if (readyToSkate) {
   console.log("Let's goooooo!");
   console.log("Time to skate!");
} else {
   console.log("No skating today.");
}

/* END OF JAVASCRIPT DEBUGGING PRACTICE */

/* ----------------------- */

// JavaScript Arrays

var tvShows = [
  'Psych', 
  'The Office', 
  'Parks and Rec', 
  'The Mandalorian'
]; // Array

console.log(tvShows [0]); // Psych

var userSavedMovies = []; // Empty Array

userSavedMovies.push('Interstellar'); // Adds an item to the end of the array
userSavedMovies.push('The Lord of the Rings'); // Adds an item to the end of the array
userSavedMovies.push('Star Wars'); // Adds an item to the end of the array

userSavedMovies.pop(); // Removes the last item in the array

console.log(userSavedMovies.length); // 2

/* End of JavaScript Arrays */

/* ----------------------- */

// JavaScript Loops

  var tvShows = [
    'Psych', 
    'The Office', 
    'Parks and Rec', 
    'The Mandalorian'
  ]; // Array

  var userSavedMovies = []; 

  for (var i = 0; i < tvShows.length; i++) {
    console.log(i);
  } // 0, 1, 2, 3

  // - < 3 = true; 0 + 1 = 1
  // - < 3 = true; 1 + 1 = 2
  // - < 3 = true; 2 + 1 = 3
  // - < 3 = false; exit loop

  for (var i = 0; i < tvShows.length; i++) {
    console.log(tvShows[i]);
  } // Psych, The Office, Parks and Rec, The Mandalorian

  var completedItems = [];

  var toDos = [
    { title: 'item 1', completed: true },
    { title: 'item 2', completed: false },
    { title: 'item 3', completed: false },
    { title: 'item 4', completed: true }
  ];

  for (var x = 0; x < toDoes.length; x++) {
    if (toDos[x].completed) {
      completedItems.push(toDoes[i]);
    }
  }

  console.log(toDos[0].title); // item 1
  console.log(completedItems); // item 1, item 4

  var bottles = 99;
  while (bottles > 0) {
    console.log(bottles + ' bottles of beer on the wall'); 
    bottles--; 
  } // while loop
  // 99 bottles of beer on the wall, 98 bottles of beer on the wall, 97 bottles of beer on the wall, etc.

  var bottles = 99;
  while (bottles > 0) {
    if (bottles !== 1) {
      console.log(bottles + ' bottles of beer on the wall'); 
    } else {
      console.log(bottles + ' bottle of beer on the wall'); 
    }
    bottles -= 1; 
  } // do while loop

/* End of JavaScript Loops */

/* ----------------------- */

// JavaScript Functions

  function calcArea(w, l) {
    return w * l;
  } // Function

  var kitchenArea = calcArea(15, 18); // 270
  var bedroomArea = calcArea(12, 10); // 120

  console.log(kitchenArea); // 270
  console.log(bedroomArea); // 120

  function toCelsius(f) {
    var temp = (f - 32) * 5 / 9;
    return temp.toFixed(2);
  }

  var cel = toCelsius(46); // 7.777777777777778

  var weather = 'The temperature is ' + toCelsius(46) + ' degrees Celsius.'; // The temperature is 7.78 degrees Celsius.

  console.log(weather); // The temperature is 7.78 degrees Celsius.
  console.log(cel); // 7.777777777777778

  var warrior = {
    name: 'Super Tuff Guy',
    attack: 70,
    defense: 50,
    mana: 100
  };

  function levelUp(prop, value) {
    warrior[prop] += value;
  }

  levelUp('attack', 2); // 72
  levelUp('defense', 7); // 57
  levelUp('mana', 17); // 117
  /* warrior.attack += 2; // 72
  warrior.defense += 5; // 55
  warrior.mana -= 10; // 90 */

  console.log(warrior); // { name: 'Super Tuff Guy', attack: 72, defense: 55, mana: 110 }

/* End of JavaScript Functions */

/* ----------------------- */

// JavaScript Objects

 // What is an Object?
 // Data types in JS
 // Composite data type: contains
 // Stores data in key : value pairs
 
 // How do we write an object?

 const nickObject = {
  name: 'Nick',
  age: 26,
  hobbies: ['coding', 'gaming', 'sports'],
  education: {
    college: 'UVU',
    tradeSchool: 'Devslopes',
  },
  lovesDogs: true,
 };

 // Why does this matter?
  // Objects are used to store data
  // Objects allow us to group alike data in the same place when that data does not fit neatly into a list or array
  // This is really useful because it means we can use Objects to model real life like people, cars, etc.

  const inNOutRest = {
    name: 'In-N-Out',
    location: 'Orem',
    rating: 4.5,
    menu: ['Double Double', 'Fries', 'Shake'],
    isOpen: true,
    avgPrice: 10.50,
    reviews: [{}, {}, {}],
    passedInspection: true,
  };

  // How do we access object data?
  // Dot notation
  // dot-notation: we know the key we want to access

  console.log(nickObject.name); // Nick
  console.log(nickObject.hobbies[0]); // coding
  console.log(nickObject.education.college); // UVU

  console.log(inNOutRest.name); // In-N-Out
  console.log(inNOutRest.menu[0]); // Double Double
  console.log(inNOutRest.reviews); // [{}, {}, {}]

  // Bracket notation
  // bracket-notation: we don't know the key we want to access and need to evaluate it

  const userSearch = 'name';

  console.log(nickObject[userSearch]); // Nick
  console.log(nickObject['age']); // 26

  const userSearch2 = "menu"; // String Double Double or Fries or Shake

  console.log(inNOutRest[userSearch2][0]); // Double Double
  console.log(inNOutRest['location']); // Orem

/* End of JavaScript Objects */

/* ----------------------- */

// JavaScript Object Functions

const devslopesDiner = {
  name: 'Devslopes Diner',
  cuisine: 'American',
  location: '555 Main St',
  rating: 5,
  avgPrice: 15,
  reviews: [{}, {}, {}],
  passedInspection: true,
}

console.log('Object.keys: ', Object.keys(devslopesDiner)); // [ 'name', 'cuisine', 'location', 'rating', 'avgPrice', 'reviews', 'passedInspection' ]
console.log('Object.values: ', Object.values(devslopesDiner)); // [ 'Devslopes Diner', 'American', '555 Main St', 5, 15, [ {}, {}, {} ], true ]
console.log('Object.entries: ', Object.entries(devslopesDiner)); // [ [ 'name', 'Devslopes Diner' ], [ 'cuisine', 'American' ], [ 'location', '555 Main St' ], [ 'rating', 5 ], [ 'avgPrice', 15 ], [ 'reviews', [ {}, {}, {} ] ], [ 'passedInspection', true ] ]
console.log(
  'Object.hasOwnProperty: ',
   devslopesDiner.hasOwnProperty('name')
); // true

// Creating JavaScript Methods

devslopesDiner.printAd = function() {
  console.log(
    'Come on down to ${devslopesDiner.name} for some ${devslopesDiner.cuisine} food! and we are located at ${devslopesDiner.location}'
  );
};

devslopesDiner.printAd();

// Static vs Instance Methods

// Static
Object.keys(devslopesDiner);

// Instance
devslopesDiner.hasOwnProperty("name");

/* End of JavaScript Object Functions */

/* ----------------------- */

// JavaScript looping through objects

// Problem: objects have keys that we set, not predetermined indices like arrays
// Objects are not inherently iterable. They do not store key-values in a fixed sequence
// We still have tools for iterating over objects
// Solution: Object.keys, Object.values, Object.entries
// These methods allow us to iterate over the keys, values, and entries of an object

const devslopesDiner = {
  name: 'Devslopes Diner',
  cuisine: 'American',
  location: '555 Main St',
  rating: 5,
  avgPrice: 15,
  reviews: [{}, {}, {}],
  passedInspection: true,
};

// for... in
// Iterates over all the properties of an object, including inherited properties from the object
// Use keys of an object in iteration. We do it when we want to iterate over EVERY property of an object

for (const key in devslopesDiner) {
  console.log(key, devslopesDiner[key]);
};

// for... of
// Iterates over the values of an iterable object, array, or other special object
// Use values of an object in iteration. We do it when we want iterate over just the keys/values we placed in the object

for (const key of Object.keys(devslopesDiner)) {
  console.log(key, devslopesDiner[key]);
}

// Object.entries(), Object.keys(), Object.values()
// Benefits: we can iterate over objects, we can use the keys, values, and entries of an object in iteration. More control over iteration
// Better option for iterating over complex objects and controlling which keys we look at

/* End of JavaScript Looping through objects */

/* ----------------------- */

// .find and .filter

// .find()

// .find() is a method that returns the first element in an array that passes a test (provided as a function)

const originalNumbers = [1, 2, 3, 4, 5]

let doubledNumbers = []
for (let number of originalNumbers) {
  doubledNumbers.push(number * 2)
}

// OR (much easier to read)

const originalNumbersTwo = [1, 2, 3, 4, 5]

let doubledNumbersTwo = originalNumbers.map(function(number) {
  return number * 2
})

// map() is a method that creates a new ARRAY with the results of calling a provided function on every element in the calling array
// filter() is a method that creates a new ARRAY with all elements that pass the test implemented by the provided function
// find() is a method that returns the first element in an ARRAY that passes a test (provided as a function)

const people = [
  { name: 'Nick', id: 1 },
  { name: 'John', id: 2 },
  { name: 'John', id: 3 },
  { name: 'Doe', id: 4 },
]

console.log(
  people.filter(person => person.name === 'John')
)

console.log(
  people.find(person => person.name === 'John')
)

const doesIdExist = (people, id) => {
  const foundPerson = people.find(person => person.id === id)
  if (foundPerson) {
    return true
  } else {
    return false
  }
}

console.log(doesIdExist(people, 2)) // true
console.log(doesIdExist(people, 5)) // false

/* End of .find and .filter */

/* ----------------------- */
