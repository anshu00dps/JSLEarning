const name ="Ashwani"
const repoCount = 12

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Ashwani-ak-com")

console.log(gameName.charAt(2)) // op: h
console.log(gameName.indexOf('w')) // op: 3
console.log(gameName.length)
console.log(gameName.toUpperCase())// op: ASHWANI-AK-COM

const newString = gameName.substring(3,8)
console.log(newString) //op: wani-

const anotherString = gameName.slice(-8,4)
console.log(anotherString)


const Name  = "     Ashwani     "
console.log(Name)
console.log(Name.trim())

const url = "https://Ashwani.com/anshu%20kumar"
console.log(url.replace('%20', '-'))
console.log(url.includes('Ashwani'))

console.log(gameName.split('-'))