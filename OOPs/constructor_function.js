// constructor function

function Car(make, type){
    this.make = make
    this.type = type
}

let myNewCar = new Car("Toyota", "Hilux")
// console.log(myNewCar)




/*
    describe function can't be overloaded as in JavaScript method overloading is not supported
function Tea(type){
    this.type = type
    // constructor function with describe function inside
    
    this.describe  = function() {
        return `this is cup of ${type} `
    }

    this.describe = function(color) {
        return `Tea color is ${color}`
    }
}
*/

function Tea(type){
    this.type = type
    // constructor function with describe function inside
    // describe function assign new function to each object made by constructor
    this.describe = function(){
        return `My tea type is ${type}`
    }
}

let GreenTea = new Tea('Green Tea')
// console.log(`Drinking`, GreenTea.type) 
// console.log(GreenTea.describe())

// constructor function with the prototype

function Animal(species){
    this.species = species
}
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}
 
let dog = new Animal("Dog")
console.log(dog.sound())
