"use strict";

/* function greet($greeting = "Hello World") {
  console.log($greeting);
}

greet(); */

// Spread operator

let args1 = [1, 2, 3];
let args2 = [4, 5, 6];
let args3 = ["casa", "perro", "auto"];

function test() {
  console.log(args1 + "," + args2);
}

function test2(a, b) {
  console.log(...args3);
}

//test.apply(null, args);
test();
//test2("plancha", "loca");

console.log(args1);
