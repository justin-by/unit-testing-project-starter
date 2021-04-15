const chai = require("chai");
const expect = chai.expect;

const { Word } = require('../problems/phase-3')
describe('Word', function () {

  let word;

  beforeEach('Set up a word instance', () => {
    word = new Word('hello')
  })

  describe('Word constructor function', function () {
    it('should have a "word" property', function() {
      //Arrange & Act


      //Assert
      expect(word).to.have.property('word')

    })
     it('should set the "word" property when a new word is created', function() {
      //Arrange & Act


      //Assert
      expect(word.word).to.eql('hello')

    })
  })
  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function() {
      //Arrange
      let expected = 'hll'

      //Act
      let testResult = word.removeVowels()


      //Assert
      expect(testResult).to.eql(expected)

    })
  })
  describe('removeConsonants function', function () {
    it('should return the word with the consonants removed', function() {
      //Arrange
      let expected = 'eo'

      //Act
      let testResult = word.removeConsonants()

      //Assert
      expect(testResult).to.eql(expected)

    })
  })
  describe('pigLatin function', function () {
    it('should return the word converted to pig latin', function() {
      //Arrange
      let expected = 'ellohay'

      //Act
      let testResult = word.pigLatin()

      //Assert
      expect(testResult).to.eql(expected)


    })
  })
})
