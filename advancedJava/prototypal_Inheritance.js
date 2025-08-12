// inhertiance being done in the prototypes
function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

let Anshu = new Person("Anshu")
Anshu.greet();
