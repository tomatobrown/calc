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

function square(a) {
  return a * a;
}

function squareRoot(a) {
  return Math.sqrt(a);
}

function power(a, b) {
  return Math.pow(a, b);
}

module.exports = { add, divide, multiply, multiply3, multiply4, multiply5, subtract, square, squareRoot, power };  