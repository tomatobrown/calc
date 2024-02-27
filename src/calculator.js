// src/calculator.js

function add(a, b) {
    return a + b;
  }
  
function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function multiply3(a, b, c) {
  return a * b * c;
}

function multiply4(a, b, c, d) {
  return a * b * c * d;
}

function multiply5(a, b, c, d, e) {
  return a * b * c * d * e;
}

module.exports = { add, divide, multiply, multiply3, multiply4, multiply5, subtract };
  