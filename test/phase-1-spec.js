const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz } = require("../problems/phase-1");
describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    //Arrange
    let test = 5
    let expectedValue = true;

    //Act
    let testFunc = isFive(test)

    //Assert
    expect(testFunc).to.equal(expectedValue);

    //Arrange
    let test2 = 6
    let expectedValue2 = false;

    //Act
    let testFunc2 = isFive(test2)

    //Assert
    expect(testFunc2).to.equal(expectedValue2)
  });
});
describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //Arrange
    let testNum = 1;
    let expectedValue = true;

    //Act
    let testFunc = isOdd(testNum);

    //Assert
    expect(testFunc).to.equal(expectedValue)

  });
  it("should return false if the num is even", () => {
    //Arrange
    let testNum = 2;
    let expectedValue = false;

    //Act
    let testFunc = isOdd(testNum)

    //Assert
    expect(testFunc).to.equal(expectedValue)

  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let testNum = 'number'

    //Act
    let testFunc = () => {
      isOdd(testNum)
    }

    //Assert
    expect(testFunc).to.throw(Error)

  });
});
describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      //Arrange

      //Act

      // Assert
      expect.fail('Remove this expect.fail and replace it with your test');

    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      //Arrange

      //Act

      // Assert
      expect.fail('Remove this expect.fail and replace it with your test');

    });
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  });
});
describe('fizzBuzz(max)', () => {
  it('should throw a RangeError if max < 0', () => {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should throw a TypeError if max is not a number', () => {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both', () => {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
})
