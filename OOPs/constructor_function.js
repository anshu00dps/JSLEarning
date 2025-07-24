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


/*
Tea is a constructor function.

Each time you create a new Tea object, it:

Assigns type to the object.

Creates a new describe function specific to that object.

⚠️ Characteristics:
✅ Each object has its own copy of describe method.

❌ This is memory-inefficient if you create many objects.

🔄 The inner function closes over the type variable directly, not using this.

✅ Use case:
When you want each object to have a custom version of the function, possibly capturing private variables via closures.


*/

function Tea(type, taste){
    this.type = type
    this.taste = taste
    // constructor function with describe function inside
    // describe function assign new function to each object made by constructor
    this.describe = function(){
        return `My tea type is ${type}`
    }
    this.describeTaste = function(){
        return `${this.type} tastes like ${this.taste}`
    }
    this.describeTemp = function(temp){
        return `${this.type} temperature is ${temp}`
    }
}

let GT = new Tea('Green Tea', "Bitter")
console.log(GT.describe(), GT.describeTaste(), GT.describeTemp("42 deg Cel"))

// constructor function with the prototype
/*
🔍 What's happening?
Animal is a constructor function.

The sound method is defined once on the prototype.

All Animal instances share the same method via prototype chain.

⚠️ Characteristics:
✅ Memory efficient – method is shared.

❌ this.species must be accessed via this, no closure over the argument.

✅ Use case:
When the method’s behavior is identical for all instances (uses only this context).

 */

function Animal(species, color, sound, height){
    this.species = species
    this.color = color
    this.sound = sound 
}
// prototype chain
Animal.prototype.Sound = function(){
    return `${this.species} sounds like ${this.sound},`
}
Animal.prototype.Color = function(){
    return `${this.species} color is ${this.color},`
}
Animal.prototype.Species = function(){
    return `Animal is of type ${this.species} and `
}

let x = new Animal("Dog", "Brown", "Bark", 32)
let y = new Animal("Bird" , "Yellow", "Chirp")

console.log(x.Species(), x.Color(), x.Sound())
console.log(y.Species(), y.Sound(), y.Color())
