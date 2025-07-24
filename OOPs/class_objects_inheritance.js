let car = {
    make:"Toyota",
    model:"Camry",
    year: 2023,
    start: function(){
        return `${this.make} car named ${this.model} got started in ${this.year}`
    }
}
// console.log(car.start())

function Person(name, age){
    this.name = name
    this.age = age
}

let john = new Person("John", 23)
// console.log(john)

// prototype and prototype chain

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.Anshu = function(){
    return `Custom method ${this}`
}

let myArray = [1,2,3]
// console.log(myArray.Anshu())

// -----------------------------------------------------------------------

// class and object
class Vehicle{
    
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    
    start(){
        return `${this.make} car named ${this.model} got started in ${this.year}`
    }
}

