const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { mirrorArray, hiddenCounter, myMap, avgValue } = require('../problems/phase-2')

//1. mirrorArray
describe('mirrorArray()', function () {
  it('should return a single array where the first half is the orginal array and the second half is a mirror of the first half', function () {
    //Arrange
    let testArray = [1, 2, 3]
    let expected = [1, 2, 3, 3, 2, 1]

    //Act
    let testFunc = mirrorArray(testArray)

    //Assert
    expect(testFunc).to.eql(expected)

  })
})

//2. hiddenCounter
describe('hiddenCounter()', function () {

  it('should return a function that will increment the counter when invoked', function () {
    //Arrange
    let expected = 1

    //Act
    let testInvoke = hiddenCounter()

    //Assert
    expect(testInvoke()).to.eql(expected)

  })
})

//3. myMap
describe('myMap', function () {
  it("should function like the built in Array#map", function () {
    //Arrange
    let testArray = [1, 2]
    let testCb = function (num) {
      return num * 2
    }
    let expected = [2, 4]


    //Act
    let testFunc = myMap(testArray, testCb)

    //Assert
    expect(testFunc).to.eql(expected)

  });

  it("should not call the built in Array#map", function () {
    //Arrange
    let array = [1, 2, 3]
    let cb = (el) => el * 2
    let myMapSpy = chai.spi.on(array, 'map');
    // let myMapSpy = chai.spy.on(Array.prototype, 'map');
    //Act
    myMap(array, cb);

    //Assert
    expect(myMapSpy).to.have.not.been.called();

  });
})

//4. avgValue
describe('avgValue', function () {
  it('should return the average of an array of numbers', function () {
    //Arrange
    let testArray = [1, 2, 3, 4, 5]
    let expected = 3

    //Act
    let testFunc = avgValue(testArray)

    //Assert
    expect(testFunc).to.eql(expected)

  })
})
