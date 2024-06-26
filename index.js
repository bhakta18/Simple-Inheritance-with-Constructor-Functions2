// Animal constructor function
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

Animal.prototype.makeSound = function() {
    console.log(this.sound);
};

// Dog constructor function inheriting from Animal
function Dog(name, sound, breed) {
    Animal.call(this, name, sound); // Call the Animal constructor with this context
    this.breed = breed;
}

// Inherit the Animal prototype methods
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.fetch = function() {
    console.log(`${this.name} fetches the ball!`);
};

// Creating an instance of Dog
let buddy = new Dog("Buddy", "Woof", "Labrador");

// Calling the makeSound() method
buddy.makeSound(); // Woof

// Calling the fetch() method
buddy.fetch(); // Buddy fetches the ball!
