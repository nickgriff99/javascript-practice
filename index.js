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