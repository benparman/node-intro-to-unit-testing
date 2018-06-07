'use strict';

const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should test if numbers are divisible by 3, 5, and both 3 and 5', function() {
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 5, expected: 'buzz'},
      {num: 3, expected: 'fizz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.be.equal(input.expected);
    });
  });
  it('should return an error if arguments are not numbers', function() {
    const badInputs = ['string', false, '5', null, undefined];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});