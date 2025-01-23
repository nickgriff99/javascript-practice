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

/* Primitive / Value Types */

var firstName = 'Nick'; // String
var age = 26; // Number
var recedingHairline = false; // Boolean
var favFood; // Undefined
var toiletPaper = null; // Null

toiletPaper = 24;
toiletPaper = null;
toiletPaper = 'Triple Ply';

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
