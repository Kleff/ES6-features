"use strict";

// add the elements of an existing array into a new array

var certsToAdd = ["Algorithms and Data Structures", "Front End Libraries"];

var certifications = [
  "Responsibe Web Design",
  ...certsToAdd,
  "Data Visualization",
  "APIs and Microservices"
];

//console.log(certifications);

// pass elements of an array as arguments to a function

function addThreeNumbers(x, y, z) {
  console.log(x + y + z);
}
var args = [0, 1, 2, 3];

//addThreeNumbers(args[0], args[1], args[2]);
addThreeNumbers(...args);

// Copy arrays

var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);
//console.log(arr);
//console.log(arr2);

// Concatenate arrays

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
//arr1.concat(arr2);
arr1 = [...arr1, "freeCodeCamp", ...arr2];

//console.log(arr1);

// REST: condense multiple elements into an array

function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr);
