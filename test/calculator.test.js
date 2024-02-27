// test/calculator.test.js
const {Promise} = require('bluebird');
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

    it('example test with delay', () => {
      jest.useFakeTimers();
      
      const delay = async () => {
        // Delay execution by 5 seconds
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Your test assertions go here
        expect(1 + 1).toBe(2);
      };
    
      delay();
    
      // Advance timers by 5 seconds
      jest.advanceTimersByTime(5000);
    });

  });

 
  
});
