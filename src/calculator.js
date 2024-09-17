// src/calculator.js

/**
 * Divides two numbers.
 * @param {Object} params - The parameters.
 * @param {number} params.a - The dividend.
 * @param {number} params.b - The divisor.
 * @returns {number} The result of the division.
 */
function divide({ a, b }) {
  return a / b;
}

/**
 * Multiplies two numbers.
 * @param {Object} params - The parameters.
 * @param {number} params.a - The first number.
 * @param {number} params.b - The second number.
 * @returns {number} The result of the multiplication.
 */
function multiply({ a, b }) {
  return a * b;
}

/**
 * Multiplies three numbers.
 * @param {Object} params - The parameters.
 * @param {number} params.a - The first number.
 * @param {number} params.b - The second number.
 * @param {number} params.c - The third number.
 * @returns {number} The result of the multiplication.
 */
function multiply3({ a, b, c }) {
  return a * b * c;
}

/**
 * Multiplies four numbers.
 * @param {Object} params - The parameters.
 * @param {number} params.a - The first number.
 * @param {number} params.b - The second number.
 * @param {number} params.c - The third number.
 * @param {number} params.d - The fourth number.
 * @returns {number} The result of the multiplication.
 */
function multiply4({ a, b, c, d }) {
  return a * b * c * d;
}

/**
 * Multiplies five numbers.
 * @param {Object} params - The parameters.
 * @param {number} params.a - The first number.
 * @param {number} params.b - The second number.
 * @param {number} params.c - The third number.
 * @param {number} params.d - The fourth number.
 * @param {number} params.e - The fifth number.
 * @returns {number} The result of the multiplication.
 */
function multiply5({ a, b, c, d, e }) {
  return a * b * c * d * e;
}

/**
 * Calculates the square of a number.
 * @param {number} a - The number to be squared.
 * @returns {number} The square of the number.
 */
function square(a) {
  return a * a;
}

/**
 * Calculates the square root of a number.
 * @param {number} a - The number to find the square root of.
 * @returns {number} The square root of the number.
 */
function squareRoot(a) {
  return Math.sqrt(a);
}

/**
 * Calculates the result of raising a number to a specified power.
 * @param {Object} params - The parameters.
 * @param {number} params.a - The base number.
 * @param {number} params.b - The exponent.
 * @returns {number} The result of the exponentiation.
 */
function power({ a, b }) {
  return Math.pow(a, b);
}

module.exports = { divide, multiply, multiply3, multiply4, multiply5, square, squareRoot, power };