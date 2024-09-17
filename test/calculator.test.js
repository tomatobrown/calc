// test/calculator.test.js
const { add, divide, multiply, multiply3, multiply4, multiply5, subtract, square, squareRoot, power } = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    it('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      expect(multiply({ a: 67, b: 1234 })).toBe(82678);
    });

    it('should multiply three numbers correctly', () => {
      expect(multiply3({ a: 67, b: 1234, c: -2 })).toBe(-165356);
    });
  });

  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      expect(divide({ a: 10, b: 2 })).toBe(5);
    });
  });

  describe('square', () => {
    it('should calculate the square of a number correctly', () => {
      expect(square(4)).toBe(16);
    });
  });

  describe('squareRoot', () => {
    it('should calculate the square root of a number correctly', () => {
      expect(squareRoot(16)).toBe(4);
    });
  });

  describe('power', () => {
    it('should calculate the power of a number correctly', () => {
      expect(power({ a: 2, b: 3 })).toBe(8);
    });
  });

  describe('multiply4', () => {
    it('should multiply four numbers correctly', () => {
      expect(multiply4({ a: 2, b: 3, c: 4, d: 5 })).toBe(120);
    });
  });

  describe('multiply5', () => {
    it('should multiply five numbers correctly', () => {
      expect(multiply5({ a: 2, b: 3, c: 4, d: 5, e: 6 })).toBe(720);
    });
  });
});