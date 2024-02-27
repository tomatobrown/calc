// test/calculator.test.js
const { add, multiply, subtract } = require('../src/calculator');

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
      expect(multiply(67, 1234)).toBe(82678);
    });

    test('example test with delay', done => {
      setTimeout(() => {
        // Your test assertions go here
        expect(1 + 1).toBe(2);
        done(); // Call done() to indicate that the test is complete
      }, 10000); // Increase the timeout to 10 seconds
    }, 15000);
  });  
});
