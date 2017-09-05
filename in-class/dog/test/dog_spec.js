var Dog = require("../models/dog");
var expect = require("chai").expect;

describe("Dog", function() {
	var fido;
	before(function(){
		fido = new Dog("Fido");
	});
 describe("new", function() {
  it("initializes a new dog", function() {
    //var fido = new Dog();
    expect(typeof(fido)).to.equal("object");
  });
  describe("name", function(){
    it("allows the reading and writing of a name", function() {
      //var fido = new Dog("Fido");
      expect(fido.name).to.equal("Fido");
    });
  }); 
  describe("eat", function() {
    context("when dog is hungry", function() {
      it("decrements the hunger level when invoked", function() {
       // var fido = new Dog("Fido");
        fido.hungerLevel = 5;
        fido.eat();
        expect(fido.hungerLevel).to.equal(4);
      });
    });
    context("when dog is NOT hungry", function() {
      it("does NOT decrement the hunger level when invoked", function() {
      // var fido = new Dog("Fido");
        fido.hungerLevel = 0;
        fido.eat();
        expect(fido.hungerLevel).to.equal(0);
      });
    });  
  }); 
 });
});