// closures are functions
function outer(){
    let counter = 4
    return function(){
        counter++
        return counter
    }
}

let incremet  = outer()
console.log(incremet())

// outer() is the closure where internal declared functions of the closure retains the memory of variables
