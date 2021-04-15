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
      let testMin = 1
      let testMax = 5
      let expected = [1, 2, 3, 4, 5]

      //Act
      let testFunc = myRange(testMin, testMax)

      // Assert
      expect(testFunc).to.eql(expected)

    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      //Arrange
      let testMin = 1
      let testMax = 5
      let testStep = 2
      let expected = [1, 3, 5]

      //Act
      let testFunc = myRange(testMin, testMax, testStep)

      // Assert
      expect(testFunc).to.eql(expected)

    });
  });
  it("should throw an error if parameters are not type of Number", () => {
    //Arrange
    let testMin = 'josh'
    let testMax = 'justin'
    let testStep = 'appAcademy'

    //Act
    let testFunc = () => {
      myRange(testMin, 3, 1)
    }

    let testFunc2 = () => {
      myRange(1, testMax, 1)
    }

    let testFunc3 = () => {
      myRange(1, 3, testStep)
    }
    //Assert
    expect(testFunc).to.throw(Error)
    expect(testFunc2).to.throw(Error)
    expect(testFunc3).to.throw(Error)

  });
});
describe('fizzBuzz(max)', () => {
  it('should throw a RangeError if max < 0', () => {
    //Arrange
    let testNum = -1

    //Act
    let testFunc = () => {
      fizzBuzz(testNum)
    }

    //Assert
    expect(testFunc).to.throw(RangeError)

  })
  it('should throw a TypeError if max is not a number', () => {
    //Arrange
    let testNum = 'heyyyy'

    //Act
    let testFunc = () => {
      fizzBuzz(testNum)
    }

    //Assert
    expect(testFunc).to.throw(TypeError)

  })
  it('should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both', () => {
    //Arrange
    let testNum = 10
    let expected = [3, 5, 6, 9]

    //Act
    let testFunc = fizzBuzz(testNum)

    //Assert
    expect(testFunc).to.eql(expected)

  })
})
