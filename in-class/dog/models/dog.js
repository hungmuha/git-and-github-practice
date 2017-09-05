function Dog(name, hungerLevel) {
	this.name= name;
	
}

Dog.prototype.hungerLevel = function () {
	this.hungerLevel = 5;
 };

Dog.prototype.eat = function () {
	if(this.hungerLevel > 0) this.hungerLevel--;
};

module.exports = Dog;


//if(this.hungerLevel > 0) this.hungerLevel--; Goes in eat prototype