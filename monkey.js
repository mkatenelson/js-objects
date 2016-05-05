function Monkey(name, species, foodsEaten) {
	this.eatSomething = function(foodString) {
		this.foodsEaten.push(foodString);
	}
}	this.name = name;
	this.species = species;
	this.introduce = function() {
		console.log("Hello, I am " + this.name +". I am a " + this.species + "and today I ate " + this.foodsEaten + ".");
	}	 
}