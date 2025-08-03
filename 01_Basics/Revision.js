// constructor function
function genericCar(make, model, engine){
    this.make = make
    this.model = model
    this.engine = engine
}
     
genericCar.prototype.Engine = function(){
    return `${this.make} makes car ${this.model} and it has v${this.engine} engine`
}

let i20 = new genericCar("Hyundai", "i20", "3 inline")
console.log(i20) 
console.log(i20.Engine())
