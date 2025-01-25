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
var person = {
  firstName: 'Nick',
  age: 26,
  recedingHairline: false,
  favFood,
  toiletPaper: 206,
}
// Array
var students = ['Nick', 'John', 'Jane', 'Doe'];
// Function
var myFunc = function() {
  // run some code
}

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
}

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