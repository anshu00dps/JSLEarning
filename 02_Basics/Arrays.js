// two types of array declaration
const myArr = [10,20,30,40,50]
const myArr1 = new Array(1,2,3,4,5)

console.log(myArr)
console.log(myArr1)
console.log(myArr[2])

// Array methods

//push
myArr1.push(6)
myArr1.push(7)
console.log(myArr1)

//pop
myArr1.pop()
console.log(myArr1)

//unshift and shift 
//unshift
myArr1.unshift(9) //adds 9 at first of array
console.log(myArr1)

//shift
myArr1.shift() //deletes first element of array at 1st element
console.log(myArr1)

//includes and indexof

//include returns boolean type , if element exist in array, it gives true else false
console.log(myArr1.includes(3))

//indexof returns element's index 
console.log(myArr1.indexOf(9))
console.log(myArr1.indexOf(3))

// join: converts array into string

console.log(myArr1.join())
console.log(typeof myArr1.join())

// slice, splice

const myArr2 = new Array(2,4,6,8,10)
console.log("Original Array: ", myArr2)

//slice
console.log("slice: ", myArr2.slice(1,3))
console.log("After slice: ", myArr2)

//splice
console.log("splice: ", myArr2.splice(1,3))
console.log("After splice: ", myArr2)

// concat two arrays

dc_hero = ["Batman", "Superman"]
marvel_hero = ["Iron man", "spiderman"]

const hero_arr = dc_hero.concat(marvel_hero)
console.log(hero_arr)

// another way to concat two arrays
const hero_arr1 = [...dc_hero, ...marvel_hero]
console.log(hero_arr1)

//flat: converts array that has array within array into one single array
const arr = [1,2,3,[4,5,6], 7,[8,[9,10]]]
const newArr = arr.flat(Infinity)
console.log(newArr)

// Array.of() converts set of variables into array of variables
let s1 = 1000
let s2 = 2000
let s3 = 3000

const scores = Array.of(s1,s2,s3)
console.log(scores)
console.log(typeof scores)
