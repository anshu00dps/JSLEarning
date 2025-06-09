//singleton
// Object.create()

//literals

const symbol = Symbol("key1")

const myUsr = {
    name : "Ashwani Kumar",
    age :  25,
    occupation : "Intern",
    mode: "Hybrid",
    [symbol] : "uniqueId"
}

console.log(myUsr.name +" "+ typeof myUsr.name)
    console.log(myUsr[symbol] +" "+ typeof myUsr[symbol])

//good way of accessing keys of an object 
console.log(myUsr["age"]+ " " + typeof myUsr["age"])

/*
-   all keys of an object are of type string
-   to keep symbol as a key in object, declare symbol then write ["symbol_object_name"] : "value"
-   keys can be of type string, function, symbol
*/

myUsr.age = 20
console.log(myUsr.age)

// to not change or add anything in object we freeze the object

// Object.freeze(myUsr)

myUsr.age = 25
console.log(myUsr)

//add function to the object 

myUsr.greetings = function(){
    console.log(`Hello, ${this.name}`)
}
console.log(myUsr)
console.log(myUsr.greetings())



// add objects in one object 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//old way
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

//new way (same like array concatination)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

//array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "n@gmail.com"
    },
]

//singleton 

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//object within object 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
console.log(users[1].email)

console.log(tinderUser);

//to get keys of object tinder users: will print id, name, isLoggedIn
console.log(Object.keys(tinderUser));
//to get value of keys associated in object tinder users: will print 123abc, sammy, false
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

//to check whether key exists or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// --------------------------------------------------------------------------------------------------------------

// object destructuring

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInst: "Ashwani"
}

// console.log(course.courseInst)
const {courseInst} = course
console.log(courseInst)
//or
const {courseInst : Instructor} = course
console.log(Instructor);

