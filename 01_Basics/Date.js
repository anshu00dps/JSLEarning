let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(typeof myDate)

// create your own date
let myCreatedDate = new Date(2024, 0, 23)
// month 0 means January, month 11 means December
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)