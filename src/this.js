"use strict";
// this keyword
this.table = "window table";

this.garage = {
  table: "garage table"
};

let createRoom = function(name) {
  this.table = `${name}s table`;
};

createRoom.prototype.cleanTable = function(soap) {
  console.log(`cleaning ${this.table} using ${soap}`);
};

const jillsRoom = new createRoom("jill");
const johnsRoom = new createRoom("john");

//jillsRoom.cleanTable("some soap");
jillsRoom.prototype.cleanTable("some soap");
johnsRoom.cleanTable("some soap");
