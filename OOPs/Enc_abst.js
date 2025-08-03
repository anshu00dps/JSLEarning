// Encapsulation

class Bank{
    #balance=0
    deposit(amt){
        this.#balance += amt
    }
    showMessage(){
        return `$ ${this.#balance} is the account balance`
    }
}

let acc = new Bank
acc.deposit(500)

// console.log(acc.showMessage())

// Abstraction

class coffeeMachine{
    #CT = null
    coffeeType(cT){
        this.#CT = cT
    }

    startMaking(){
        return `${this.#CT} is under making`
    }
    etaCoffee(){
        return `, will take time around 5 min`
    }

    startButton(){
        let msgOne = this.startMaking()
        let msgTwo = this.etaCoffee()

        return `${msgOne}  ${msgTwo}`
    }
}

let civetCoffee = new coffeeMachine
civetCoffee.coffeeType("Civet Coffe")
// console.log(civetCoffee.startButton())

// Polymorphism

class Bird{
    fly(){
        return `Birds can fly`
    }
}

class species extends Bird{
    fly(bird_name){
        return `${bird_name} can't fly` 
    }
    
}

let tweeter = new Bird
let Penguin = new species
// console.log(tweeter.fly())
// console.log(Penguin.fly("Penguin"))


// static method: where class don't want the access of methods by making objects of the class 

class Calculator{
    static add(a,b){
        return a+b;
    }
}
// access static method by using class name itself
console.log(Calculator.add(2,4))

/*
below code will not work
let miniCal = new Calculator;
console.log(miniCal.add(2,4))

below code will work but don't satisfy the condition of static method:
let miniCal = Calculator
console.log(miniCal.add(2,4))

in 2nd code. we are referencing to the class Calculator through miniCal
*/

